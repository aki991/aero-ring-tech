'use strict';

// ─── Constants ────────────────────────────────────────────────────────────────
const PIGEON_COLORS = ['#26C6DA','#42A5F5','#4ADE80','#FB923C','#E879F9'];
const PIGEON_ZONES  = [[80,420],[220,580],[360,730],[500,870],[640,1100]];
const PIGEON_LABELS = ['Pigeon 1','Pigeon 2','Pigeon 3','Pigeon 4','Pigeon 5'];
const SLOT_COUNT = 8;

// ─── State ────────────────────────────────────────────────────────────────────
const slotRings = new Array(SLOT_COUNT).fill(null); // null | 'ART-R-XXXX'
let raceActive = false;
let raceTimer  = null;
const pigeonAlts = [300, 450, 550, 350, 700];
const pigeonVels = [0, 0, 0, 0, 0];
const lastLogTs  = new Array(5).fill(0); // throttle per-pigeon log entries

// Socket.io state — populated by initSocket() when server is reachable
let socket     = null;
let socketConn = false;
let pingInterval = null; // reference kept so BC pings can pause when socket.io takes over

// LoRa handshake — emulator starts locked until main app initiates connection
let loraConnected = false;

// ─── BroadcastChannel (same-browser fallback) ─────────────────────────────────
const ch = new BroadcastChannel('art-emulator');
ch.onmessage = ({ data }) => {
  if (data.type === 'PONG') {
    refreshConn();
    log('← PONG', 'recv');
  } else if (data.type === 'LORA_CONNECTED') {
    setLoraConnected(true);
  } else if (data.type === 'LORA_DISCONNECTED') {
    setLoraConnected(false);
  }
};

// ─── DOM refs ─────────────────────────────────────────────────────────────────
const $ = id => document.getElementById(id);

// ─── Connection heartbeat ─────────────────────────────────────────────────────
let connAlive = false;
let connKillTimer = null;

function refreshConn() {
  connAlive = true;
  $('conn-dot').classList.add('live');
  $('conn-label').textContent = 'Connected to app';
  clearTimeout(connKillTimer);
  connKillTimer = setTimeout(() => {
    connAlive = false;
    $('conn-dot').classList.remove('live');
    $('conn-label').textContent = 'App not responding';
  }, 5000);
}

function setLoraConnected(connected, silent = false) {
  loraConnected = connected;
  const banner = $('emu-lora-banner');
  const dot    = $('lora-banner-dot');
  const txt    = $('lora-banner-txt');
  const body   = document.querySelector('.emu-body');
  if (connected) {
    banner.classList.add('connected');
    body.classList.remove('locked');
    dot.style.animation = 'none';
    txt.textContent = 'Connected to App';
  } else {
    banner.classList.remove('connected');
    body.classList.add('locked');
    dot.style.animation = '';
    txt.textContent = 'Waiting for App connection...';
  }
  if (!silent) log(
    connected ? '← lora_status_update  CONNECTED — emulator unlocked'
              : 'Emulator locked — waiting for LoRa handshake from main app',
    connected ? 'recv' : 'warn'
  );
}

function ping() { ch.postMessage({ type: 'PING' }); }
pingInterval = setInterval(ping, 2000);
setTimeout(ping, 80);

// ─── Logging ─────────────────────────────────────────────────────────────────
function log(msg, type = 'out') {
  const logEl = $('emu-log');
  const ts = new Date().toLocaleTimeString('en-GB', { hour12:false });
  const div = document.createElement('div');
  div.className = `log-e ${type}`;
  div.textContent = `[${ts}]  ${msg}`;
  logEl.appendChild(div);
  logEl.scrollTop = logEl.scrollHeight;
  while (logEl.children.length > 100) logEl.removeChild(logEl.firstChild);
}

// ─── Send helpers ─────────────────────────────────────────────────────────────
// Maps internal BroadcastChannel event types to Socket.io event names + payloads
function toSocket(obj) {
  switch (obj.type) {
    case 'RING_INSERT':          return { ev:'ring_inserted',           d:{ slot:obj.slot, ringId:obj.ringId } };
    case 'RING_REMOVE':          return { ev:'ring_removed',            d:{ slot:obj.slot, ringId:obj.ringId } };
    case 'RING_READ_READY':      return { ev:'ring_read_ready',         d:{ ringId:obj.ringId } };
    case 'HW_ALT_RESET':         return { ev:'altitude_reset_success',  d:{} };
    case 'HW_PROGRAM_COMPLETE':  return { ev:'programming_complete',    d:{} };
    case 'RACE_START':           return { ev:'race_started', d:{} };
    case 'RACE_STOP':            return { ev:'race_stopped', d:{} };
    default: return null;
  }
}

// Routes to Socket.io when server is connected; falls back to BroadcastChannel
function send(obj, logMsg) {
  if (socketConn) {
    const m = toSocket(obj);
    if (m) socket.emit(m.ev, m.d);
  } else {
    ch.postMessage(obj);
  }
  if (logMsg) log(logMsg, 'out');
}

// Encodes altitude as Float32 LE before sending — matches physical ring wire format
function sendAltitude(pigeonIdx, altRaw, silent = false) {
  const buf  = new ArrayBuffer(4);
  const view = new DataView(buf);
  view.setFloat32(0, altRaw, true);
  const h = view.getFloat32(0, true);
  if (socketConn) {
    // Socket.io: batch-friendly array format expected by server and main app
    socket.emit('telemetry_update', { pigeons: [{ pigeonIdx, altitude: h }] });
  } else {
    ch.postMessage({ type: 'RACE_ALTITUDE', pigeonIdx, altitude: h });
  }
  if (!silent) {
    const now = Date.now();
    if (now - lastLogTs[pigeonIdx] > 700) {
      lastLogTs[pigeonIdx] = now;
      log(`→ RACE_ALTITUDE  P${pigeonIdx + 1}  ${h.toFixed(1)} m`, 'out');
    }
  }
}

// ─── Slot Dock ────────────────────────────────────────────────────────────────
function genRingId() {
  return 'ART-R-' + (9001 + Math.floor(Math.random() * 900));
}

function renderSlots() {
  const grid = $('slot-grid');
  grid.innerHTML = '';
  for (let i = 0; i < SLOT_COUNT; i++) {
    const occ  = slotRings[i] !== null;
    const card = document.createElement('div');
    card.className = 'slot-card' + (occ ? ' occupied' : '');
    card.innerHTML = `
      <div class="slot-num">Slot ${i + 1}</div>
      <div class="slot-id ${occ ? '' : 'empty'}">${occ ? slotRings[i] : '—'}</div>
      <button class="slot-btn ${occ ? 'remove' : 'insert'}" data-i="${i}">
        ${occ ? 'Remove' : 'Insert'}
      </button>`;
    grid.appendChild(card);
  }
  grid.querySelectorAll('.slot-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = +btn.dataset.i;
      slotRings[i] ? removeRing(i) : insertRing(i);
    });
  });
  updateReaderSelect();
}

function insertRing(i) {
  const id = genRingId();
  slotRings[i] = id;
  send({ type: 'RING_INSERT', slot: i, ringId: id }, `→ RING_INSERT  Slot${i + 1}  ${id}`);
  renderSlots();
}

function removeRing(i) {
  const id = slotRings[i];
  slotRings[i] = null;
  send({ type: 'RING_REMOVE', slot: i, ringId: id }, `→ RING_REMOVE  Slot${i + 1}  ${id}`);
  renderSlots();
}

function updateReaderSelect() {
  const sel = $('reader-select');
  sel.innerHTML = '<option value="">— Select inserted ring —</option>';
  slotRings.forEach((id, i) => {
    if (id) {
      const opt = document.createElement('option');
      opt.value = id;
      opt.textContent = `Slot ${i + 1}: ${id}`;
      sel.appendChild(opt);
    }
  });
}

$('btn-place-ring').addEventListener('click', () => {
  const id = $('reader-select').value;
  if (!id) { log('⚠ Select a ring from the dock first', 'warn'); return; }
  send({ type: 'RING_READ_READY', ringId: id }, `→ RING_READ_READY  ${id}`);
});

// ─── Hardware Actions ─────────────────────────────────────────────────────────
$('btn-alt-reset').addEventListener('click', () => {
  send({ type: 'HW_ALT_RESET' }, '→ HW_ALT_RESET');
});

$('btn-prog-done').addEventListener('click', () => {
  send({ type: 'HW_PROGRAM_COMPLETE' }, '→ HW_PROGRAM_COMPLETE');
});

// ─── Race Telemetry ───────────────────────────────────────────────────────────
function renderPigeonRows() {
  const container = $('pigeon-rows');
  container.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const color = PIGEON_COLORS[i];
    const row   = document.createElement('div');
    row.className = 'pigeon-row';
    row.id = `prow-${i}`;
    row.innerHTML = `
      <div class="pig-lbl">
        <span class="pig-dot" style="background:${color};box-shadow:0 0 5px ${color}80"></span>
        ${PIGEON_LABELS[i]}
      </div>
      <input class="pig-slider" id="pslider-${i}" type="range" min="0" max="1200" step="1" value="${pigeonAlts[i]}">
      <div class="pig-alt" id="pval-${i}">${pigeonAlts[i].toFixed(0)} m</div>
      <div class="pig-auto-wrap">
        <input class="pig-auto-chk" id="pauto-${i}" type="checkbox" title="Enable auto-drift">
        <div class="pig-auto-lbl">auto</div>
      </div>
      <button class="pig-inject" id="pinject-${i}">Inject</button>`;
    container.appendChild(row);

    $(`pslider-${i}`).addEventListener('input', () => {
      const val = parseFloat($(`pslider-${i}`).value);
      pigeonAlts[i] = val;
      $(`pval-${i}`).textContent = val.toFixed(0) + ' m';
      sendAltitude(i, val); // slider drags always log
    });

    $(`pinject-${i}`).addEventListener('click', () => {
      sendAltitude(i, pigeonAlts[i]);
      log(`→ RACE_ALTITUDE  P${i+1}  ${pigeonAlts[i].toFixed(1)} m  [manual]`, 'out');
    });
  }
}

$('btn-race').addEventListener('click', () => {
  raceActive ? stopRace() : startRace();
});

function startRace() {
  raceActive = true;
  $('btn-race').className = 'race-toggle stop';
  $('race-btn-txt').textContent = 'Stop Race';
  $('race-play').style.display = 'none';
  $('race-stop').style.display = 'block';
  $('race-badge').textContent = 'LIVE';
  $('race-badge').classList.add('live');
  send({ type: 'RACE_START' }, '→ RACE_START');

  // Auto-drift loop — 500 ms matches the app's LoRa polling interval
  raceTimer = setInterval(() => {
    for (let i = 0; i < 5; i++) {
      if (!$(`pauto-${i}`).checked) continue;
      const [zMin, zMax] = PIGEON_ZONES[i];
      pigeonVels[i] += (Math.random() - 0.5) * 9;
      pigeonVels[i]  = Math.max(-18, Math.min(18, pigeonVels[i]));
      pigeonAlts[i] += pigeonVels[i];
      pigeonAlts[i]  = Math.max(zMin - 20, Math.min(zMax + 20, pigeonAlts[i]));
      $(`pslider-${i}`).value = pigeonAlts[i];
      $(`pval-${i}`).textContent = pigeonAlts[i].toFixed(0) + ' m';
      $(`prow-${i}`).classList.add('has-data');
      sendAltitude(i, pigeonAlts[i], true); // silent — throttled log inside sendAltitude
    }
  }, 500);
}

function stopRace() {
  raceActive = false;
  clearInterval(raceTimer); raceTimer = null;
  $('btn-race').className = 'race-toggle start';
  $('race-btn-txt').textContent = 'Start Race';
  $('race-play').style.display = 'block';
  $('race-stop').style.display = 'none';
  $('race-badge').textContent = 'Idle';
  $('race-badge').classList.remove('live');
  send({ type: 'RACE_STOP' }, '→ RACE_STOP');
}

// ─── Socket.io (optional — activated when backend server is running) ──────────
// The socket.io client script is served by the backend at
// https://aero-ring-backend.onrender.com/socket.io/socket.io.js. We load it dynamically so the
// emulator keeps working (via BroadcastChannel) when the server is not running.
function initSocket() {
  const script   = document.createElement('script');
  script.src     = 'https://aero-ring-backend.onrender.com/socket.io/socket.io.js';
  script.onload  = () => {
    socket = io('https://aero-ring-backend.onrender.com', {
      transports:           ['websocket'],
      reconnectionAttempts: 5,
      reconnectionDelay:    2000,
    });

    socket.on('connect', () => {
      socketConn = true;
      socket.emit('join', 'emulator');
      clearInterval(pingInterval); // server heartbeat replaces BC PING/PONG
      log('← Socket.io connected to server', 'recv');
    });

    socket.on('disconnect', () => {
      socketConn = false;
      pingInterval = setInterval(ping, 2000); // restore BC ping as fallback
      log('← Socket.io disconnected — falling back to BroadcastChannel', 'warn');
    });

    socket.on('peer_status', ({ role, online }) => {
      if (role !== 'main-app') return;
      if (online) {
        refreshConn();
      } else {
        connAlive = false;
        $('conn-dot').classList.remove('live');
        $('conn-label').textContent = 'App disconnected';
      }
      log(`← main-app ${online ? 'online' : 'offline'}`, online ? 'recv' : 'warn');
    });

    socket.on('lora_status_update', ({ connected }) => {
      setLoraConnected(connected);
    });

    socket.on('connect_error', () => {
      if (!socketConn) log('⚠ Server unreachable — using BroadcastChannel fallback', 'warn');
    });
  };
  script.onerror = () => log('⚠ Socket.io not available — using BroadcastChannel', 'warn');
  document.head.appendChild(script);
}

// ─── Init ─────────────────────────────────────────────────────────────────────
renderSlots();
renderPigeonRows();
setLoraConnected(false, true); // start locked, silent (banner text already set in HTML)
initSocket();
