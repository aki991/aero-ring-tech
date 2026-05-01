'use strict';

// ─── Translations ─────────────────────────────────────────────────────────────
const T = {
  sr: {
    // ── Navigation ──
    navTracking:'Praćenje leta', navDevice:'Povezivanje uređaja',
    navRings:'Programiranje prstenova', navResults:'Rezultati',
    // ── Tracking page ──
    lblHeight:'Najviša visina', lblMeters:'Metri (m)', lblStats:'Statistike (sesija)',
    lblMax:'Maksimum', lblMin:'Minimum', lblConn:'Konekcija',
    lblGraphTitle:'Visina kroz vreme — poslednje 2 minuta', lblAltitude:'Visina (m)',
    btnConnect:'Poveži LoRa mrežu', btnSearching:'🔍 Tražim stanicu...',
    btnDisconnect:'Isključi LoRa mrežu', btnSimStart:'Simulacija (demo)',
    btnSimStop:'Zaustavi simulaciju', btnReset:'Resetuj podatke',
    toastConnecting:'Konekcija u toku…', toastConnected:n=>`Povezano na ${n}`,
    toastDisconn:'Mreža odpojena', toastSimStart:'Simulacija pokrenuta',
    toastSimBusy:'Najpre isključi LoRa mrežu', toastReset:'Podaci obrisani',
    toastResultSaved:'Rezultat sačuvan na strani Rezultati',
    toastRingSaved:'Prsten uspešno programiran',
    toastFillAll:'Popunite sva polja', toastReadFirst:'Najpre očitajte prsten',
    canvasEmpty:'Pritisnite "Poveži LoRa mrežu" ili pokrenite simulaciju',
    graphNow:'Sad', graphPoints:n=>`${n} tačaka`,
    statusOff:'Nije povezano', statusSim:'Simulacija aktivna',
    statusCon:n=>`Povezano — ${n}`,
    // ── Device page ──
    p2Title:'LoRa mrežna stanica', p2DevInfo:'Informacije o uređaju',
    p2DevName:'Naziv uređaja', p2Signal:'Jačina signala', p2Battery:'Baterija',
    p2StatusOff:'Uređaj nije povezan', p2StatusOn:n=>`Povezano: ${n}`,
    loraHandshakePending:'LoRa mreža nije inicijalizovana', loraHandshakeConnected:'LoRa mreža — AKTIVNA',
    // ── Rings page ──
    p3ReadSection:'Očitavanje prstena', p3ReadBtn:'Očitaj prsten',
    p3Reading:'Očitavanje...', p3FormSection:'Podaci vlasnika',
    p3FirstName:'Ime', p3LastName:'Prezime', p3Club:'Naziv kluba',
    p3SaveBtn:'Sačuvaj na prsten', p3ListSection:'Programirani prstenovi (sesija)',
    p3ColID:'ID prstena', p3ColName:'Ime i prezime', p3ColClub:'Klub', p3ColTime:'Vreme',
    p3EmptyRow:'Nema programiranih prstenova.',
    p3SessionSection:'Detektovani prstenovi — sesija',
    p3SessionEmpty:'Nema prstenova detektovanih u ovoj sesiji.',
    p3SessionColID:'ID prstena', p3SessionColSlot:'Slot', p3SessionColTime:'Vreme',
    p3SessionHint:'Kliknite na red da izaberete prsten za programiranje →',
    p3EditBtn:'Izmeni', p3UpdateBtn:'Sačuvaj izmene', p3UpdSuccess:'Prsten uspešno ažuriran',
    // ── Results page ──
    p4Title:'Rezultati', p4Add:'Dodaj rezultat',
    p4Export:'Izvezi u CSV', p4DeleteAll:'Obriši sve',
    p4ColNum:'#', p4ColName:'Ime i prezime', p4ColClub:'Klub',
    p4ColDuration:'Trajanje', p4ColMaxH:'Max visina (m)',
    p4ColAvgH:'Pros. visina (m)', p4ColDT:'Datum i vreme',
    p4EmptyRow:'Nema rezultata.', p4Confirm:'Obrisati sve rezultate?',
    p4Total:'Broj golubova', p4AvgMax:'Prosečna max visina',
    p4Best:'Najbolji rezultat', p4ResultAdded:'Rezultat dodat',
    p4Exported:'CSV preuzet', p4Deleted:'Rezultati obrisani',
    // ── Modal ──
    modalTitle:'Dodaj rezultat', modalCancel:'Otkaži', modalSave:'Sačuvaj',
    modalDuration:'Trajanje (hh:mm:ss)',
    // ── Misc ──
    signalGood:'Dobra', signalNA:'N/A', unknown:'Nepoznato',
    toastWelcome:n=>`Dobrodošli, ${n}!`, toastLogout:'Odjavljeni ste.',
    // ── Auth overlay ──
    tabLogin:'Prijava', tabRegister:'Registracija',
    fldEmail:'Email adresa', fldPassword:'Lozinka', fldFullName:'Ime i prezime',
    fldConfirm:'Potvrda lozinke', fldClub:'Naziv kluba',
    fldOptional:'(opciono)', fldRole:'Uloga',
    roleAdmin:'Administrator', roleClub:'Klub', roleViewer:'Gledalac',
    btnLogin:'Prijavi se', btnRegister:'Registruj se',
    dividerOr:'ili',
    btnGuest:'Nastavi kao gost — samo rezultati →',
    rememberMe:'Zapamti me',
    // ── Auth error codes ──
    ERR_FILL_ALL:          'Popunite sva obavezna polja.',
    ERR_PASS_TOO_SHORT:    'Lozinka mora imati minimum 6 karaktera.',
    ERR_PASS_MISMATCH:     'Lozinke se ne poklapaju.',
    ERR_EMAIL_EXISTS:      'Email adresa je već registrovana.',
    ERR_INVALID_CREDENTIALS: 'Pogrešan email ili lozinka.',
    // ── Register success ──
    regSuccess:n=>`Nalog kreiran. Dobrodošli, ${n}!`,
    // ── Detail modal / row expansion ──
    detColName:'Golub', detColDuration:'Trajanje', detColAbove800:'Vreme iznad 800m',
    detColMaxH:'Maks. visina (m)', detColValid:'Validan let',
    detValidBadge:'Validan ✓', detInvalidBadge:'Nevalidan',
    expBtnDetails:'Detalji leta', expLblDuration:'Trajanje', expLblMaxH:'Maks. visina',
    detChartTitle:'Profil visine — ceo let', detPigeonsTitle:'Golubovi u trci',
    // ── Multi-pigeon labels ──
    pigeonLabels:['Golub 1','Golub 2','Golub 3','Golub 4','Golub 5'],
    // ── Search & sort ──
    p4SearchPlaceholder:'Pretraži po imenu, klubu…',
    p4SortNewest:'Najnoviji let', p4SortLongest:'Najduži let', p4SortHighest:'Najviša visina',
    p4NoMatch:'Nema rezultata za unetu pretragu.',
  },
  en: {
    // ── Navigation ──
    navTracking:'Flight Tracking', navDevice:'Device Connection',
    navRings:'Ring Programming', navResults:'Results',
    // ── Tracking page ──
    lblHeight:'Highest altitude', lblMeters:'Meters (m)', lblStats:'Statistics (session)',
    lblMax:'Maximum', lblMin:'Minimum', lblConn:'Connection',
    lblGraphTitle:'Altitude over time — last 2 minutes', lblAltitude:'Altitude (m)',
    btnConnect:'Connect LoRa Gateway', btnSearching:'🔍 Searching for gateway...',
    btnDisconnect:'Disconnect gateway', btnSimStart:'Simulation (demo)',
    btnSimStop:'Stop simulation', btnReset:'Reset data',
    toastConnecting:'Connecting…', toastConnected:n=>`Connected to ${n}`,
    toastDisconn:'Gateway disconnected', toastSimStart:'Simulation started',
    toastSimBusy:'Disconnect LoRa gateway first', toastReset:'Data cleared',
    toastResultSaved:'Result saved to Results page',
    toastRingSaved:'Ring programmed successfully',
    toastFillAll:'Please fill all fields', toastReadFirst:'Read a ring first',
    canvasEmpty:'Click "Connect LoRa Gateway" or start the simulation',
    graphNow:'Now', graphPoints:n=>`${n} points`,
    statusOff:'Not connected', statusSim:'Simulation active',
    statusCon:n=>`Connected — ${n}`,
    // ── Device page ──
    p2Title:'LoRa Gateway Connection', p2DevInfo:'Device information',
    p2DevName:'Device name', p2Signal:'Signal strength', p2Battery:'Battery',
    p2StatusOff:'Device not connected', p2StatusOn:n=>`Connected: ${n}`,
    loraHandshakePending:'LoRa network not initialized', loraHandshakeConnected:'LoRa network — ACTIVE',
    // ── Rings page ──
    p3ReadSection:'Ring reading', p3ReadBtn:'Read ring',
    p3Reading:'Reading...', p3FormSection:'Owner data',
    p3FirstName:'First name', p3LastName:'Last name', p3Club:'Club name',
    p3SaveBtn:'Save to ring', p3ListSection:'Programmed rings (session)',
    p3ColID:'Ring ID', p3ColName:'Full name', p3ColClub:'Club', p3ColTime:'Time',
    p3EmptyRow:'No programmed rings.',
    p3SessionSection:'Detected rings — session',
    p3SessionEmpty:'No rings detected in this session.',
    p3SessionColID:'Ring ID', p3SessionColSlot:'Slot', p3SessionColTime:'Time',
    p3SessionHint:'Click a row to select a ring for programming →',
    p3EditBtn:'Edit', p3UpdateBtn:'Save changes', p3UpdSuccess:'Ring updated successfully',
    // ── Results page ──
    p4Title:'Results', p4Add:'Add result',
    p4Export:'Export CSV', p4DeleteAll:'Delete all',
    p4ColNum:'#', p4ColName:'Full name', p4ColClub:'Club',
    p4ColDuration:'Duration', p4ColMaxH:'Max altitude (m)',
    p4ColAvgH:'Avg altitude (m)', p4ColDT:'Date & time',
    p4EmptyRow:'No results.', p4Confirm:'Delete all results?',
    p4Total:'Total pigeons', p4AvgMax:'Average max altitude',
    p4Best:'Best result', p4ResultAdded:'Result added',
    p4Exported:'CSV downloaded', p4Deleted:'Results deleted',
    // ── Modal ──
    modalTitle:'Add result', modalCancel:'Cancel', modalSave:'Save',
    modalDuration:'Duration (hh:mm:ss)',
    // ── Misc ──
    signalGood:'Good', signalNA:'N/A', unknown:'Unknown',
    toastWelcome:n=>`Welcome, ${n}!`, toastLogout:'You have been logged out.',
    // ── Auth overlay ──
    tabLogin:'Login', tabRegister:'Register',
    fldEmail:'Email address', fldPassword:'Password', fldFullName:'Full name',
    fldConfirm:'Confirm password', fldClub:'Club name',
    fldOptional:'(optional)', fldRole:'Role',
    roleAdmin:'Administrator', roleClub:'Club', roleViewer:'Viewer',
    btnLogin:'Sign in', btnRegister:'Register',
    dividerOr:'or',
    btnGuest:'Continue as guest — results only →',
    rememberMe:'Remember me',
    // ── Auth error codes ──
    ERR_FILL_ALL:          'Please fill all required fields.',
    ERR_PASS_TOO_SHORT:    'Password must be at least 6 characters.',
    ERR_PASS_MISMATCH:     'Passwords do not match.',
    ERR_EMAIL_EXISTS:      'Email address is already registered.',
    ERR_INVALID_CREDENTIALS: 'Incorrect email or password.',
    // ── Register success ──
    regSuccess:n=>`Account created. Welcome, ${n}!`,
    // ── Detail modal / row expansion ──
    detColName:'Pigeon', detColDuration:'Duration', detColAbove800:'Time Above 800m',
    detColMaxH:'Max Altitude (m)', detColValid:'Valid Flight',
    detValidBadge:'Valid ✓', detInvalidBadge:'Invalid',
    expBtnDetails:'View Details', expLblDuration:'Duration', expLblMaxH:'Max Alt.',
    detChartTitle:'Altitude Profile — Full Flight', detPigeonsTitle:'Race Participants',
    // ── Multi-pigeon labels ──
    pigeonLabels:['Pigeon 1','Pigeon 2','Pigeon 3','Pigeon 4','Pigeon 5'],
    // ── Search & sort ──
    p4SearchPlaceholder:'Search by name, club…',
    p4SortNewest:'Newest Flight', p4SortLongest:'Longest Flight', p4SortHighest:'Highest Altitude',
    p4NoMatch:'No results match your search.',
  },
};

// ─── Preferences ─────────────────────────────────────────────────────────────
let lang  = localStorage.getItem('art-lang')  || 'sr';
let theme = localStorage.getItem('art-theme') || 'dark';

// ─── State ────────────────────────────────────────────────────────────────────
const WINDOW_MS = 120_000;
const PIGEON_COLORS = ['#26C6DA','#42A5F5','#4ADE80','#FB923C','#E879F9','#FBBF24','#F87171','#34D399','#818CF8','#FB7185'];
const PIGEON_ZONES  = [[80,420],[220,580],[360,730],[500,870],[640,1100]];
let pigeons = Array.from({length:5},(_,i)=>{const mid=(PIGEON_ZONES[i][0]+PIGEON_ZONES[i][1])/2;return{pts:[],h:mid,vel:0,target:mid};});
let sMax = null, sMin = null;
let lora = { dev:null, timer:null, connected:false };
let sim  = { active:false, timer:null, startTime:0 };
let rings        = [];
let sessionRings = []; // rings detected live from the emulator dock this session
let results = [];
let sortState = { col: null, dir: 1 };
let currentRingId = null;
let expandedResultOrig = null;
let searchQuery = '';
let quickSort = null; // 'newest' | 'longest' | 'highest' | null
let editingRingIndex = null;      // null = create; number = update existing entry
const programmedRingIds = new Set(); // ring IDs saved to an owner this session

// ─── DOM ─────────────────────────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const dot       = $('dot');
const dot2      = $('dot2');
const statusTxt = $('status-txt');
const hVal      = $('h-val');
const maxVal    = $('max-val');
const minVal    = $('min-val');
const btnCon    = $('btn-connect');
const btnDis    = $('btn-disconnect');
const btnSim    = $('btn-sim');
const btnReset  = $('btn-reset');
const canvas    = $('graph');
const ctx       = canvas.getContext('2d');
const ptsCount  = $('pts-count');

// ─── Navigation ───────────────────────────────────────────────────────────────
let currentPage = 'tracking';
document.querySelectorAll('.nav-tab').forEach(tab => {
  tab.addEventListener('click', () => showPage(tab.dataset.page));
});
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.toggle('active', t.dataset.page === id));
  $(`page-${id}`).classList.add('active');
  currentPage = id;
}

// ─── Auth UI ──────────────────────────────────────────────────────────────────
function applyAuthUI() {
  const { authenticated, role, user } = Auth.getState();

  // Nav tabs: show only accessible pages
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.style.display = Auth.hasAccess(tab.dataset.page) ? '' : 'none';
  });

  // If current page is now off-limits, redirect to first accessible page
  if (!Auth.hasAccess(currentPage)) {
    const first = ['tracking','device','rings','results'].find(p => Auth.hasAccess(p)) || 'results';
    showPage(first);
  }

  // Header: user chip vs login button
  const chip     = $('user-chip');
  const loginBtn = $('btn-header-login');
  if (authenticated) {
    chip.style.display     = 'flex';
    loginBtn.style.display = 'none';
    $('user-name').textContent = user.name;
    const badge = $('user-role-badge');
    badge.textContent = T[lang][`role${user.role.charAt(0).toUpperCase()+user.role.slice(1)}`] || user.role;
    badge.className   = `role-badge role-${user.role}`;
  } else {
    chip.style.display     = 'none';
    loginBtn.style.display = 'flex';
  }

  // Results toolbar: hide mutating buttons for viewers
  const editable = Auth.canEdit();
  [$('btn-add-result'), $('btn-del-results')].forEach(btn => {
    if (btn) btn.style.display = editable ? '' : 'none';
  });

  // Login overlay: show when not authenticated and not in guest session
  const overlay   = $('login-overlay');
  const guestMode = sessionStorage.getItem('art-guest');
  if (!authenticated && !guestMode) {
    overlay.classList.add('open');
  } else {
    overlay.classList.remove('open');
  }
}

// ─── i18n ─────────────────────────────────────────────────────────────────────
function applyLang() {
  document.documentElement.lang = lang;
  localStorage.setItem('art-lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = T[lang][el.dataset.i18n];
    if (typeof v === 'string') el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const v = T[lang][el.dataset.i18nPh];
    if (typeof v === 'string') el.placeholder = v;
  });
  if (!lora.connected && !sim.active) {
    statusTxt.textContent = T[lang].statusOff;
    $('p2-status-txt').textContent = T[lang].p2StatusOff;
  } else if (sim.active) {
    statusTxt.textContent = T[lang].statusSim;
  }
  $('sim-btn-txt').textContent = sim.active ? T[lang].btnSimStop : T[lang].btnSimStart;
  ptsCount.textContent = T[lang].graphPoints(pigeons.reduce((s,p)=>s+p.pts.length,0));
  $('btn-lang').textContent = lang === 'sr' ? 'EN' : 'SR';
  $('login-lang-btn').textContent = lang === 'sr' ? 'EN' : 'SR';
  renderLegend();
  // Re-translate role badge text when language switches
  const { authenticated, user } = Auth.getState();
  if (authenticated && user) {
    const badge = $('user-role-badge');
    badge.textContent = T[lang][`role${user.role.charAt(0).toUpperCase()+user.role.slice(1)}`] || user.role;
  }
  updateLoraHandshakeUI(loraHandshakeActive);
  renderSessionTable();
  renderRingsTable();
  renderResultsTable();
  updateSaveBtnLabel();
}

// ─── Theme ────────────────────────────────────────────────────────────────────
function applyTheme() {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('art-theme', theme);
  const d = theme === 'dark';
  $('ico-moon').style.display = d ? 'block' : 'none';
  $('ico-sun').style.display  = d ? 'none'  : 'block';
}
$('btn-theme').addEventListener('click', () => { theme = theme === 'dark' ? 'light' : 'dark'; applyTheme(); });
$('btn-lang').addEventListener('click',       () => { lang = lang === 'sr' ? 'en' : 'sr'; applyLang(); });
$('login-lang-btn').addEventListener('click', () => { lang = lang === 'sr' ? 'en' : 'sr'; applyLang(); });

// ─── LoRa Gateway (shared) ────────────────────────────────────────────────────
function syncLoraUI() {
  const on = lora.connected;
  const name = lora.dev?.name || 'LoRa';
  [dot, dot2].forEach(d => { if (d) d.className = 'dot' + (on ? ' on' : ''); });
  statusTxt.textContent = on ? T[lang].statusCon(name) : (sim.active ? T[lang].statusSim : T[lang].statusOff);
  $('p2-status-txt').textContent = on ? T[lang].p2StatusOn(name) : T[lang].p2StatusOff;
  btnCon.style.display   = on ? 'none' : 'flex';
  btnDis.style.display   = on ? 'flex' : 'none';
  $('p2-btn-connect').style.display    = on ? 'none' : 'flex';
  $('p2-btn-disconnect').style.display = on ? 'flex' : 'none';
  $('dev-name').textContent    = on ? (lora.dev?.name || T[lang].unknown) : '—';
  $('dev-battery').textContent = on ? Math.floor(55 + Math.random()*35) + ' %' : '—';
  $('dev-signal-txt').textContent = on ? T[lang].signalGood : '—';
  const bars = document.querySelectorAll('#dev-signal .bar');
  const barsOn = on ? 3 : 0;
  bars.forEach((b, i) => b.classList.toggle('on', i < barsOn));
}

function updateLoraHandshakeUI(connected) {
  loraHandshakeActive = connected;
  const row   = $('lora-handshake-row');
  const dotEl = $('dot-lora');
  const txtEl = $('lora-handshake-txt');
  if (!row || !dotEl || !txtEl) return;
  dotEl.className = 'dot' + (connected ? ' on' : '');
  txtEl.textContent = connected ? T[lang].loraHandshakeConnected : T[lang].loraHandshakePending;
  row.classList.toggle('active', connected);
}

function initiateLoraHandshake() {
  if (appSocket && emuSocketConn) {
    appSocket.emit('initiate_lora_connection');
  } else {
    emulatorCh.postMessage({ type: 'LORA_CONNECTED' });
    updateLoraHandshakeUI(true);
  }
}

function terminateLoraHandshake() {
  if (appSocket && emuSocketConn) {
    appSocket.emit('terminate_lora_connection');
    // UI updated when server echoes lora_status_update { connected: false }
  } else {
    emulatorCh.postMessage({ type: 'LORA_DISCONNECTED' });
    updateLoraHandshakeUI(false);
  }
}

async function doConnect() {
  if (sim.active) stopSim();
  btnCon.disabled = true;
  btnCon.querySelector('span').textContent = T[lang].btnSearching;
  $('p2-btn-connect').querySelector('span').textContent = T[lang].btnSearching;
  $('p2-btn-connect').disabled = true;
  showToast(T[lang].toastConnecting, 'info');
  // Simulate LoRa gateway handshake
  await new Promise(r => setTimeout(r, 1400 + Math.random() * 600));
  const gwId = 'ART-GW-' + Math.floor(1000 + Math.random() * 9000);
  lora.dev = { name: gwId };
  lora.connected = true;
  lora.timer = setInterval(onLoraData, 500);
  syncLoraUI();
  showToast(T[lang].toastConnected(gwId), 'ok');
}
function doDisconnect() {
  isRaceActive = false;
  emuBcActive = false;
  clearLatestAltitudes();
  clearInterval(lora.timer); lora.timer = null;
  lora.connected = false; lora.dev = null;
  sMax = sMin = null;
  pigeons.forEach((pig, i) => { pig.pts = []; pig.h = 220 + i * 70; pig.vel = 0; pig.target = 300 + i * 55; });
  hVal.textContent = '—'; maxVal.textContent = '—'; minVal.textContent = '—';
  syncLoraUI(); resetConBtns();
  showToast(T[lang].toastDisconn, 'err');
}
function resetConBtns() {
  btnCon.disabled = false;
  btnCon.querySelector('span').textContent = T[lang].btnConnect;
  $('p2-btn-connect').disabled = false;
  $('p2-btn-connect').querySelector('span').textContent = T[lang].btnConnect;
}

btnCon.addEventListener('click', () => { doConnect(); initiateLoraHandshake(); });
btnDis.addEventListener('click', () => { doDisconnect(); terminateLoraHandshake(); });
$('p2-btn-connect').addEventListener('click', () => { doConnect(); initiateLoraHandshake(); });
$('p2-btn-disconnect').addEventListener('click', () => { doDisconnect(); terminateLoraHandshake(); });

// Simulate incoming LoRa telemetry — altitude encoded as Float32 LE (meters)
function onLoraData() {
  if (!isRaceActive) return; // chart stays static until race explicitly starts
  if (emuSocketConn || emuBcActive) return; // emulator is sending real data; skip local noise
  const buf = new ArrayBuffer(4);
  const view = new DataView(buf);
  const pig = pigeons[0];
  const noise = (Math.random() - 0.5) * 40;
  const alt = Math.max(0, Math.min(1200, (pig.h || 120) + noise));
  view.setFloat32(0, alt, true);       // encode as Float32 LE
  const h = view.getFloat32(0, true);  // parse back as Float32 LE (meters)
  if (isFinite(h) && h >= 0) pushPoint(h);
}

// ─── Simulation ───────────────────────────────────────────────────────────────
btnSim.addEventListener('click', () => {
  if (lora.connected) { showToast(T[lang].toastSimBusy,'err'); return; }
  sim.active ? stopSim() : startSim();
});
function startSim() {
  pigeons.forEach((pig,i)=>{
    const [zMin,zMax]=PIGEON_ZONES[i];
    const mid=(zMin+zMax)/2;
    pig.h=mid+Math.random()*40-20; pig.vel=(Math.random()-.5)*4;
    pig.target=pig.h;
  });
  sim.active=true; sim.startTime=Date.now();
  dot.className='dot on'; statusTxt.textContent=T[lang].statusSim;
  btnSim.classList.add('active');
  $('sim-ico-play').style.display='none'; $('sim-ico-stop').style.display='block';
  $('sim-btn-txt').textContent=T[lang].btnSimStop;
  showToast(T[lang].toastSimStart,'info');
  sim.timer=setInterval(()=>{
    const now=Date.now(); let tickMax=null;
    pigeons.forEach((pig,idx)=>{
      const [zMin,zMax]=PIGEON_ZONES[idx];
      pig.target+=((Math.random()-.5)*9); pig.target=clamp(pig.target,zMin,zMax);
      pig.vel+=(pig.target-pig.h)*.025+(Math.random()-.5)*5;
      pig.vel=clamp(pig.vel*.87,-22,22);
      pig.h+=pig.vel; pig.h=clamp(pig.h,zMin-20,zMax+20);
      const h=parseFloat(pig.h.toFixed(1));
      pig.pts.push({t:now,h});
      const cut=now-WINDOW_MS; while(pig.pts.length&&pig.pts[0].t<cut) pig.pts.shift();
      if(sMax===null||h>sMax) sMax=h;
      if(sMin===null||h<sMin) sMin=h;
      if(tickMax===null||h>tickMax) tickMax=h;
    });
    hVal.textContent=tickMax!==null?tickMax.toFixed(1):'—';
    maxVal.textContent=sMax.toFixed(1)+' m';
    minVal.textContent=sMin.toFixed(1)+' m';
  },500);
}
function stopSim() {
  sim.active=false; clearInterval(sim.timer);
  btnSim.classList.remove('active');
  $('sim-ico-play').style.display='block'; $('sim-ico-stop').style.display='none';
  $('sim-btn-txt').textContent=T[lang].btnSimStart;
  dot.className='dot'; statusTxt.textContent=T[lang].statusOff;
  const allPts=pigeons.flatMap(p=>p.pts);
  if(allPts.length>5 && sMax!==null){
    const dur=Date.now()-sim.startTime;
    const avgH=parseFloat((allPts.reduce((s,p)=>s+p.h,0)/allPts.length).toFixed(1));
    const totalSecs=Math.max(1,Math.floor(dur/1000));
    const fp=generateFlightPath(totalSecs,sMax);
    const timeAbove800=fp.reduce((acc,alt)=>acc+(alt>800?30:0),0);
    const validFlight=sMax>800&&timeAbove800>totalSecs*0.5;
    const simPigeons=generateRacePigeons(totalSecs,sMax);
    const { authenticated, user } = Auth.getState();
    const lastRing = rings[rings.length-1];
    const resultName = authenticated
      ? user.name
      : (lastRing ? `${lastRing.firstName} ${lastRing.lastName}` : T[lang].unknown);
    const resultClub = authenticated
      ? (user.club || '—')
      : (lastRing ? lastRing.club : '—');
    addResult({
      name: resultName,
      club: resultClub,
      duration: msToDuration(dur), maxH:sMax, avgH,
      datetime: new Date(), flightPath:fp, totalSecs, validFlight, pigeons:simPigeons,
    });
    showToast(T[lang].toastResultSaved,'ok');
  }
}

// ─── Data ─────────────────────────────────────────────────────────────────────
function pushPoint(h) {
  // LoRa mode: single ring feeds pigeon 0 only
  const now=Date.now(), pig=pigeons[0];
  pig.pts.push({t:now,h});
  const cut=now-WINDOW_MS; while(pig.pts.length&&pig.pts[0].t<cut) pig.pts.shift();
  if(sMax===null||h>sMax) sMax=h;
  if(sMin===null||h<sMin) sMin=h;
  hVal.textContent  =h.toFixed(1);
  maxVal.textContent=sMax.toFixed(1)+' m';
  minVal.textContent=sMin.toFixed(1)+' m';
}
btnReset.addEventListener('click', () => {
  sMax=sMin=null;
  clearLatestAltitudes();
  pigeons.forEach((pig,i)=>{pig.pts=[]; pig.h=220+i*70; pig.vel=0; pig.target=300+i*55;});
  hVal.textContent='—'; maxVal.textContent='—'; minVal.textContent='—';
  showToast(T[lang].toastReset,'info');
});

// ─── Graph ────────────────────────────────────────────────────────────────────
const PAD={t:16,r:20,b:38,l:66};
function niceStep(r,s=5){const raw=r/s,mag=Math.pow(10,Math.floor(Math.log10(raw))),n=raw/mag;return(n<1.5?1:n<3?2:n<7?5:10)*mag;}
function drawGraph() {
  const wrap=canvas.parentElement, dpr=devicePixelRatio||1;
  const W=wrap.clientWidth, H=wrap.clientHeight;
  canvas.width=W*dpr; canvas.height=H*dpr; ctx.scale(dpr,dpr);
  const gW=W-PAD.l-PAD.r, gH=H-PAD.t-PAD.b;
  const now=Date.now(), tStart=now-WINDOW_MS;
  const toX=t=>PAD.l+((t-tStart)/WINDOW_MS)*gW;
  const toY=(h,mn,rng)=>PAD.t+gH-((h-mn)/rng)*gH;
  const cs=getComputedStyle(document.documentElement);
  const cText =cs.getPropertyValue('--graph-text').trim();
  const cGrid =cs.getPropertyValue('--graph-grid').trim();
  const cAxis =cs.getPropertyValue('--graph-axis').trim();
  const cXLbl =cs.getPropertyValue('--graph-xlbl').trim();
  const cEmpty=cs.getPropertyValue('--graph-empty').trim();
  ctx.clearRect(0,0,W,H);

  const active=pigeons.filter(p=>p.pts.length>=2);
  const totalPts=pigeons.reduce((s,p)=>s+p.pts.length,0);

  if(!active.length){
    ctx.fillStyle=cEmpty; ctx.font='bold 13px Segoe UI';
    ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillText(T[lang].canvasEmpty,W/2,H/2);
    ptsCount.textContent=T[lang].graphPoints(0); return;
  }

  // Unified Y-axis range across all active pigeons
  const allH=active.flatMap(p=>p.pts.map(pt=>pt.h));
  const rawMin=Math.min(...allH), rawMax=Math.max(...allH);
  const rng=rawMax-rawMin||10, padY=Math.max(rng*.12,5);
  const yMin=rawMin-padY, yMax=rawMax+padY, yRng=yMax-yMin;

  ctx.save(); ctx.beginPath(); ctx.rect(PAD.l,PAD.t,gW,gH); ctx.clip();

  // Area fills first (drawn under the lines)
  pigeons.forEach((pig,idx)=>{
    if(pig.pts.length<2) return;
    const color=PIGEON_COLORS[idx];
    const sp=pig.pts.map(p=>({x:toX(p.t),y:toY(p.h,yMin,yRng)}));
    const grd=ctx.createLinearGradient(0,PAD.t,0,PAD.t+gH);
    grd.addColorStop(0,hexA(color,.13)); grd.addColorStop(1,hexA(color,.01));
    ctx.beginPath();
    ctx.moveTo(sp[0].x,PAD.t+gH);
    sp.forEach(p=>ctx.lineTo(p.x,p.y));
    ctx.lineTo(sp.at(-1).x,PAD.t+gH); ctx.closePath();
    ctx.fillStyle=grd; ctx.fill();
  });

  // Lines + pulse dots
  pigeons.forEach((pig,idx)=>{
    if(pig.pts.length<2) return;
    const color=PIGEON_COLORS[idx];
    const sp=pig.pts.map(p=>({x:toX(p.t),y:toY(p.h,yMin,yRng)}));
    // Smooth line
    ctx.beginPath(); ctx.moveTo(sp[0].x,sp[0].y);
    for(let i=1;i<sp.length-1;i++){
      const mx=(sp[i].x+sp[i+1].x)/2, my=(sp[i].y+sp[i+1].y)/2;
      ctx.quadraticCurveTo(sp[i].x,sp[i].y,mx,my);
    }
    ctx.lineTo(sp.at(-1).x,sp.at(-1).y);
    ctx.strokeStyle=color; ctx.lineWidth=2; ctx.lineJoin='round'; ctx.lineCap='round'; ctx.stroke();
    // Pulse dot (each pigeon slightly offset in phase)
    const lp=sp.at(-1), pulse=.5+.5*Math.sin(now/380+idx*1.26);
    ctx.beginPath(); ctx.arc(lp.x,lp.y,7+pulse*4,0,Math.PI*2);
    ctx.fillStyle=hexA(color,.08+pulse*.12); ctx.fill();
    ctx.beginPath(); ctx.arc(lp.x,lp.y,3.8,0,Math.PI*2);
    ctx.fillStyle=color; ctx.fill();
    ctx.beginPath(); ctx.arc(lp.x,lp.y,1.6,0,Math.PI*2);
    ctx.fillStyle='#fff'; ctx.fill();
  });

  ctx.restore();

  // Y-axis grid + labels
  const step=niceStep(yRng), gs=Math.ceil(yMin/step)*step;
  ctx.setLineDash([3,6]); ctx.lineWidth=1; ctx.strokeStyle=cGrid;
  ctx.fillStyle=cText; ctx.font='bold 13px Segoe UI'; ctx.textAlign='right'; ctx.textBaseline='middle';
  for(let v=gs;v<=yMax+step*.5;v+=step){
    const y=toY(v,yMin,yRng); if(y<PAD.t-2||y>PAD.t+gH+2) continue;
    ctx.beginPath(); ctx.moveTo(PAD.l,y); ctx.lineTo(PAD.l+gW,y); ctx.stroke();
    ctx.fillText(Math.round(v)+' m',PAD.l-8,y);
  }
  // X-axis grid + labels
  ctx.textAlign='center'; ctx.textBaseline='top'; ctx.fillStyle=cXLbl; ctx.font='bold 13px Segoe UI';
  for(let sec=0;sec<=120;sec+=30){
    const x=PAD.l+(sec/120)*gW;
    ctx.beginPath(); ctx.moveTo(x,PAD.t); ctx.lineTo(x,PAD.t+gH); ctx.stroke();
    ctx.fillText(sec===120?T[lang].graphNow:`−${120-sec}s`,x,PAD.t+gH+8);
  }
  ctx.setLineDash([]);
  ctx.strokeStyle=cAxis; ctx.lineWidth=1; ctx.beginPath();
  ctx.moveTo(PAD.l,PAD.t); ctx.lineTo(PAD.l,PAD.t+gH); ctx.lineTo(PAD.l+gW,PAD.t+gH); ctx.stroke();
  ptsCount.textContent=T[lang].graphPoints(totalPts);
}
(function loop(){ drawGraph(); requestAnimationFrame(loop); })();

function renderLegend() {
  const container=$('graph-legend');
  if(!container) return;
  container.innerHTML='';
  pigeons.forEach((_,i)=>{
    const color=PIGEON_COLORS[i];
    const item=document.createElement('span');
    item.className='leg-item';
    const swatch=document.createElement('span');
    swatch.className='leg-swatch';
    swatch.style.cssText=`background:${color};box-shadow:0 0 5px ${color}80;`;
    item.appendChild(swatch);
    item.appendChild(document.createTextNode(T[lang].pigeonLabels[i]));
    container.appendChild(item);
  });
}

// ─── Page 3: Rings ────────────────────────────────────────────────────────────
let readingRing = false;
let readingRingTimer = null; // kept so the emulator can cancel an in-progress read
$('btn-read-ring').addEventListener('click', () => {
  if (readingRing) return;
  readingRing = true;
  currentRingId = null;
  $('btn-save-ring').disabled = true;
  $('ring-id-display').textContent = T[lang].p3Reading;
  const anim = $('ring-anim');
  anim.classList.add('reading');
  readingRingTimer = setTimeout(() => {
    readingRingTimer = null;
    anim.classList.remove('reading');
    currentRingId = 'ART-' + Array.from({length:6},()=>'0123456789ABCDEF'[Math.floor(Math.random()*16)]).join('');
    editingRingIndex = null;
    $('ring-id-display').textContent = currentRingId;
    $('btn-save-ring').disabled = false;
    updateSaveBtnLabel();
    readingRing = false;
  }, 1800);
});
$('btn-save-ring').addEventListener('click', () => {
  const fn = $('ring-first').value.trim();
  const ln = $('ring-last').value.trim();
  const cl = $('ring-club').value.trim();
  if (!currentRingId) { showToast(T[lang].toastReadFirst,'err'); return; }
  if (!fn || !ln || !cl) { showToast(T[lang].toastFillAll,'err'); return; }

  if (editingRingIndex !== null) {
    // ── Update existing record ─────────────────────────────────────────────
    rings[editingRingIndex] = { ...rings[editingRingIndex], firstName:fn, lastName:ln, club:cl };
    editingRingIndex = null;
    showToast(T[lang].p3UpdSuccess, 'ok');
  } else {
    // ── Create new record ──────────────────────────────────────────────────
    rings.push({ ringId:currentRingId, firstName:fn, lastName:ln, club:cl, time:new Date() });
    programmedRingIds.add(currentRingId);
    renderSessionTable(); // lock the source session row
    showToast(T[lang].toastRingSaved, 'ok');
  }

  renderRingsTable();
  document.querySelector('.form-block').classList.remove('editing');
  $('ring-first').value=''; $('ring-last').value=''; $('ring-club').value='';
  $('ring-id-display').textContent='— — —';
  $('btn-save-ring').disabled=true;
  currentRingId=null;
  updateSaveBtnLabel();
});
function renderRingsTable() {
  const tbody = $('rings-tbody'); tbody.innerHTML='';
  if (!rings.length) {
    tbody.innerHTML=`<tr class="empty-row"><td colspan="5">${T[lang].p3EmptyRow}</td></tr>`; return;
  }
  rings.forEach((r, i) => {
    const tr=document.createElement('tr');
    tr.innerHTML=`
      <td><span class="badge badge-ring">${r.ringId}</span></td>
      <td>${r.firstName} ${r.lastName}</td>
      <td>${r.club}</td>
      <td>${fmtTime(r.time)}</td>
      <td><button class="row-edit" data-idx="${i}" title="${T[lang].p3EditBtn}">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
      </button></td>`;
    tbody.appendChild(tr);
  });
  tbody.querySelectorAll('.row-edit').forEach(btn => {
    btn.addEventListener('click', () => loadRingForEdit(+btn.dataset.idx));
  });
}

function updateSaveBtnLabel() {
  const span = document.querySelector('#btn-save-ring [data-i18n]');
  if (span) span.textContent = editingRingIndex !== null ? T[lang].p3UpdateBtn : T[lang].p3SaveBtn;
}

function loadRingForEdit(index) {
  const r = rings[index];
  editingRingIndex = index;
  currentRingId = r.ringId;
  $('ring-first').value = r.firstName;
  $('ring-last').value  = r.lastName;
  $('ring-club').value  = r.club;
  $('ring-id-display').textContent = r.ringId;
  $('btn-save-ring').disabled = false;
  document.querySelector('.form-block').classList.add('editing');
  updateSaveBtnLabel();
  if (currentPage !== 'rings') showPage('rings');
  $('ring-first').focus();
}

// ─── Session Ring Detection ───────────────────────────────────────────────────
function addSessionRing(ringId, slot) {
  sessionRings.push({ ringId, slot, time: new Date() });
  renderSessionTable();
}

function selectSessionRing(ringId) {
  // Cancel any in-progress manual read
  if (readingRing) {
    clearTimeout(readingRingTimer);
    readingRingTimer = null;
    readingRing = false;
    $('ring-anim').classList.remove('reading');
  }
  // Leave edit mode — user is now targeting a different ring
  editingRingIndex = null;
  document.querySelector('.form-block').classList.remove('editing');
  currentRingId = ringId;
  $('ring-id-display').textContent = ringId;
  $('btn-save-ring').disabled = false;
  updateSaveBtnLabel();
  // Brief flash on the ID display to confirm selection
  const box = $('ring-id-display');
  box.classList.remove('highlight');
  void box.offsetWidth; // force reflow to restart animation
  box.classList.add('highlight');
  renderSessionTable(); // refresh selected state
}

function renderSessionTable() {
  const tbody = $('session-rings-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';
  if (!sessionRings.length) {
    tbody.innerHTML = `<tr class="empty-row"><td colspan="4">${T[lang].p3SessionEmpty}</td></tr>`;
    return;
  }
  [...sessionRings].reverse().forEach((r, displayIdx) => {
    const origIdx     = sessionRings.length - 1 - displayIdx;
    const isProgrammed = programmedRingIds.has(r.ringId);
    const isSelected  = currentRingId === r.ringId && !isProgrammed;
    const tr = document.createElement('tr');
    tr.className = 'session-ring-row'
      + (isSelected   ? ' selected'   : '')
      + (isProgrammed ? ' programmed' : '');
    if (displayIdx === 0) tr.classList.add('newest');
    const checkMark = isProgrammed ? '<span class="prog-check">✓</span>' : '';
    tr.innerHTML = `
      <td><span class="badge badge-ring">${r.ringId}</span>${checkMark}</td>
      <td>Slot ${r.slot + 1}</td>
      <td>${fmtTime(r.time)}</td>
      <td><button class="row-del session-del-btn" data-idx="${origIdx}" title="Obriši / Delete">✕</button></td>`;
    tr.addEventListener('click', e => {
      if (e.target.closest('.session-del-btn')) return;
      if (isProgrammed) return; // locked — already saved to a person
      selectSessionRing(r.ringId);
    });
    tr.querySelector('.session-del-btn').addEventListener('click', e => {
      e.stopPropagation();
      sessionRings.splice(origIdx, 1);
      if (currentRingId === r.ringId) {
        currentRingId = null;
        $('ring-id-display').textContent = '— — —';
        $('btn-save-ring').disabled = true;
      }
      renderSessionTable();
    });
    tbody.appendChild(tr);
  });
}

// ─── Page 4: Results ─────────────────────────────────────────────────────────
function addResult(r) {
  results.push(r);
  renderResultsTable();
}
function renderResultsTable() {
  const tbody=$('results-tbody'); tbody.innerHTML='';

  // ── Sync column sort indicators (hidden when a quick-sort pill is active) ──
  document.querySelectorAll('.results-table th.sortable').forEach(th=>{
    th.classList.remove('sort-asc','sort-desc');
    if(!quickSort && th.dataset.sort===sortState.col)
      th.classList.add(sortState.dir===1?'sort-asc':'sort-desc');
  });

  // ── Sync sort pill active states ──
  document.querySelectorAll('.sort-pill').forEach(p=>
    p.classList.toggle('active', p.dataset.qsort===quickSort));

  // ── Sync search clear button ──
  const clearBtn=$('res-search-clear');
  if(clearBtn) clearBtn.style.display=searchQuery?'flex':'none';

  // ── Filter ──
  const q=searchQuery.toLowerCase();
  const filtered=q
    ? results.filter(r=>r.name.toLowerCase().includes(q)||r.club.toLowerCase().includes(q))
    : [...results];

  // ── Sort ──
  if(quickSort==='newest'){
    filtered.sort((a,b)=>b.datetime-a.datetime);
  } else if(quickSort==='longest'){
    filtered.sort((a,b)=>b.totalSecs-a.totalSecs);
  } else if(quickSort==='highest'){
    filtered.sort((a,b)=>b.maxH-a.maxH);
  } else if(sortState.col){
    filtered.sort((a,b)=>{
      const av=a[sortState.col], bv=b[sortState.col];
      if(av instanceof Date) return sortState.dir*(av-bv);
      if(typeof av==='string') return sortState.dir*av.localeCompare(bv,'sr');
      return sortState.dir*(av-bv);
    });
  }

  // ── Render rows ──
  if(!filtered.length){
    const msg=(!results.length||!q)?T[lang].p4EmptyRow:T[lang].p4NoMatch;
    tbody.innerHTML=`<tr class="empty-row"><td colspan="8">${msg}</td></tr>`;
  } else {
    const editable=Auth.canEdit();
    filtered.forEach((r,i)=>{
      const origIdx=results.indexOf(r);
      const delCell=editable
        ?`<button class="row-del" data-idx="${origIdx}" title="Delete">✕</button>`:'';
      const tr=document.createElement('tr');
      tr.className='result-row'+(expandedResultOrig===r?' expanded':'');
      tr.innerHTML=`<td>${i+1}</td><td>${r.name}</td><td>${r.club}</td><td>${r.duration}</td><td>${r.maxH.toFixed(1)}</td><td>${r.avgH.toFixed(1)}</td><td>${fmtDatetime(r.datetime)}</td><td>${delCell}</td>`;
      tbody.appendChild(tr);
      tr.addEventListener('click',e=>{
        if(e.target.classList.contains('row-del')) return;
        toggleRowExpansion(r,tr,tbody);
      });
      if(expandedResultOrig===r) insertExpandedRow(r,tr,tbody);
    });
    tbody.querySelectorAll('.row-del').forEach(btn=>{
      btn.addEventListener('click',e=>{
        e.stopPropagation();
        results.splice(+btn.dataset.idx,1);
        expandedResultOrig=null;
        renderResultsTable();
      });
    });
  }

  // ── Summary (reflects filtered set) ──
  $('sum-total').textContent=q?`${filtered.length} / ${results.length}`:filtered.length;
  if(filtered.length){
    const avgM=filtered.reduce((s,r)=>s+r.maxH,0)/filtered.length;
    $('sum-avg').textContent=avgM.toFixed(1);
    const best=filtered.reduce((b,r)=>r.maxH>b.maxH?r:b,filtered[0]);
    $('sum-best').textContent=`${best.name} (${best.maxH.toFixed(0)} m)`;
  } else {
    $('sum-avg').textContent='—'; $('sum-best').textContent='—';
  }
}

function toggleRowExpansion(r,tr,tbody){
  if(expandedResultOrig===r){
    expandedResultOrig=null;
    tr.classList.remove('expanded');
    const next=tr.nextElementSibling;
    if(next&&next.classList.contains('expanded-row')) next.remove();
  } else {
    if(expandedResultOrig!==null){
      const prev=tbody.querySelector('.result-row.expanded');
      if(prev){
        prev.classList.remove('expanded');
        const next=prev.nextElementSibling;
        if(next&&next.classList.contains('expanded-row')) next.remove();
      }
    }
    expandedResultOrig=r;
    tr.classList.add('expanded');
    insertExpandedRow(r,tr,tbody);
  }
}

function insertExpandedRow(r,tr,tbody){
  const badge=r.validFlight
    ?`<span class="badge-valid">${T[lang].detValidBadge}</span>`
    :`<span class="badge-invalid">${T[lang].detInvalidBadge}</span>`;
  const expTr=document.createElement('tr');
  expTr.className='expanded-row';
  expTr.innerHTML=`<td colspan="8"><div class="expanded-content">
    <div class="exp-left"><div class="mini-chart-wrap"><canvas class="mini-chart"></canvas></div></div>
    <div class="exp-meta">
      <div class="exp-stat"><span class="exp-lbl">${T[lang].expLblDuration}</span><span class="exp-val">${r.duration}</span></div>
      <div class="exp-stat"><span class="exp-lbl">${T[lang].expLblMaxH}</span><span class="exp-val">${r.maxH.toFixed(0)} m</span></div>
      <div class="exp-stat">${badge}</div>
      <button class="btn-detail">${T[lang].expBtnDetails}</button>
    </div>
  </div></td>`;
  tr.after(expTr);
  const canvas=expTr.querySelector('.mini-chart');
  requestAnimationFrame(()=>drawDetailChart(canvas,r.pigeons));
  expTr.querySelector('.btn-detail').addEventListener('click',()=>openDetailModal(r));
}

function drawMiniChart(canvas,flightPath){
  const dpr=window.devicePixelRatio||1;
  const W=canvas.offsetWidth||220, H=canvas.offsetHeight||60;
  canvas.width=W*dpr; canvas.height=H*dpr;
  const ctx=canvas.getContext('2d');
  ctx.scale(dpr,dpr);
  const maxAlt=Math.max(...flightPath,1);
  const pts=flightPath.map((alt,i)=>({
    x:(i/(flightPath.length-1))*W,
    y:H-(alt/maxAlt)*(H-6)-3
  }));
  const grad=ctx.createLinearGradient(0,0,0,H);
  grad.addColorStop(0,'rgba(38,198,218,0.35)');
  grad.addColorStop(1,'rgba(38,198,218,0.02)');
  ctx.beginPath();
  ctx.moveTo(pts[0].x,H);
  pts.forEach(p=>ctx.lineTo(p.x,p.y));
  ctx.lineTo(pts[pts.length-1].x,H);
  ctx.closePath();
  ctx.fillStyle=grad; ctx.fill();
  ctx.beginPath();
  pts.forEach((p,i)=>i===0?ctx.moveTo(p.x,p.y):ctx.lineTo(p.x,p.y));
  ctx.strokeStyle='rgba(38,198,218,0.9)'; ctx.lineWidth=1.5; ctx.stroke();
}

function openDetailModal(r){
  $('det-competitor').textContent=r.name;
  $('det-club').textContent=r.club;
  $('det-datetime').textContent=fmtDatetime(r.datetime);
  renderDetailPigeonTable(r.pigeons);
  $('detail-modal').classList.add('open');
  requestAnimationFrame(()=>drawDetailChart($('detail-chart'),r.pigeons));
}

function closeDetailModal(){
  $('detail-modal').classList.remove('open');
}

function drawDetailChart(canvas,racePigeons){
  const dpr=window.devicePixelRatio||1;
  const W=canvas.offsetWidth||600, H=canvas.offsetHeight||260;
  canvas.width=W*dpr; canvas.height=H*dpr;
  const ctx=canvas.getContext('2d');
  ctx.scale(dpr,dpr);
  const p={top:20,right:20,bottom:36,left:52};
  const cW=W-p.left-p.right, cH=H-p.top-p.bottom;

  const allAlts=racePigeons.flatMap(pig=>pig.flightPath);
  const maxAlt=Math.max(...allAlts,1);
  const maxLen=Math.max(...racePigeons.map(pig=>pig.flightPath.length),2);
  const totalMins=Math.round(maxLen*0.5);

  // Horizontal grid lines + Y labels
  for(let i=0;i<=5;i++){
    const y=p.top+cH-(i/5)*cH;
    ctx.strokeStyle='rgba(150,170,200,0.12)'; ctx.lineWidth=1;
    ctx.beginPath(); ctx.moveTo(p.left,y); ctx.lineTo(p.left+cW,y); ctx.stroke();
    ctx.fillStyle='rgba(150,170,200,0.6)';
    ctx.font='10px sans-serif'; ctx.textAlign='right';
    ctx.fillText(Math.round((i/5)*maxAlt)+'m',p.left-5,y+3.5);
  }
  // 800m threshold dashed line
  if(maxAlt>800){
    const y800=p.top+cH-(800/maxAlt)*cH;
    ctx.strokeStyle='rgba(251,191,36,0.55)'; ctx.setLineDash([5,4]); ctx.lineWidth=1;
    ctx.beginPath(); ctx.moveTo(p.left,y800); ctx.lineTo(p.left+cW,y800); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle='rgba(251,191,36,0.8)'; ctx.font='10px sans-serif'; ctx.textAlign='left';
    ctx.fillText('800m',p.left+4,y800-3);
  }
  // X-axis minute labels
  const xStep=totalMins<=30?5:totalMins<=60?10:totalMins<=120?15:30;
  ctx.fillStyle='rgba(150,170,200,0.6)'; ctx.font='10px sans-serif'; ctx.textAlign='center';
  for(let m=0;m<=totalMins;m+=xStep){
    ctx.fillText(m+'min',p.left+(m/totalMins)*cW,p.top+cH+18);
  }
  // Area fills first (drawn under lines)
  racePigeons.forEach((pig,idx)=>{
    const fp=pig.flightPath; if(fp.length<2) return;
    const color=PIGEON_COLORS[idx%PIGEON_COLORS.length];
    const pts=fp.map((alt,i)=>({
      x:p.left+(i/(maxLen-1))*cW,
      y:p.top+cH-(alt/maxAlt)*cH
    }));
    const grad=ctx.createLinearGradient(0,p.top,0,p.top+cH);
    grad.addColorStop(0,hexA(color,.13)); grad.addColorStop(1,hexA(color,.01));
    ctx.beginPath();
    ctx.moveTo(pts[0].x,p.top+cH);
    pts.forEach(pt=>ctx.lineTo(pt.x,pt.y));
    ctx.lineTo(pts[pts.length-1].x,p.top+cH);
    ctx.closePath();
    ctx.fillStyle=grad; ctx.fill();
  });
  // Lines
  racePigeons.forEach((pig,idx)=>{
    const fp=pig.flightPath; if(fp.length<2) return;
    const color=PIGEON_COLORS[idx%PIGEON_COLORS.length];
    const pts=fp.map((alt,i)=>({
      x:p.left+(i/(maxLen-1))*cW,
      y:p.top+cH-(alt/maxAlt)*cH
    }));
    ctx.beginPath(); ctx.moveTo(pts[0].x,pts[0].y);
    for(let i=1;i<pts.length-1;i++){
      const mx=(pts[i].x+pts[i+1].x)/2, my=(pts[i].y+pts[i+1].y)/2;
      ctx.quadraticCurveTo(pts[i].x,pts[i].y,mx,my);
    }
    ctx.lineTo(pts[pts.length-1].x,pts[pts.length-1].y);
    ctx.strokeStyle=color; ctx.lineWidth=2; ctx.lineJoin='round'; ctx.lineCap='round'; ctx.stroke();
  });
}

function renderDetailPigeonTable(pigeons){
  const tbody=$('detail-tbody'); tbody.innerHTML='';
  pigeons.forEach((pig,idx)=>{
    const color=PIGEON_COLORS[idx%PIGEON_COLORS.length];
    const valid=isValidFlight(pig);
    const badge=valid
      ?`<span class="badge-valid">${T[lang].detValidBadge}</span>`
      :`<span class="badge-invalid">${T[lang].detInvalidBadge}</span>`;
    const h=Math.floor(pig.totalSecs/3600),m=Math.floor((pig.totalSecs%3600)/60),s=pig.totalSecs%60;
    const dur=`${pad(h)}:${pad(m)}:${pad(s)}`;
    const ab=pig.timeAbove800||0;
    const ah=Math.floor(ab/3600),am=Math.floor((ab%3600)/60),as_=ab%60;
    const abStr=`${pad(ah)}:${pad(am)}:${pad(as_)}`;
    const dot=`<span class="pig-color-dot" style="background:${color};box-shadow:0 0 4px ${color}80"></span>`;
    const tr=document.createElement('tr');
    tr.innerHTML=`<td>${dot}${pig.name}</td><td>${dur}</td><td>${abStr}</td><td>${pig.maxH}</td><td>${badge}</td>`;
    tbody.appendChild(tr);
  });
}

// ─── Sort handlers ────────────────────────────────────────────────────────────
document.querySelectorAll('.results-table th.sortable').forEach(th=>{
  th.addEventListener('click',()=>{
    quickSort=null;
    const col=th.dataset.sort;
    if(sortState.col===col){ sortState.dir*=-1; }
    else { sortState.col=col; sortState.dir=1; }
    renderResultsTable();
  });
});

$('btn-add-result').addEventListener('click', () => { $('modal').classList.add('open'); });
$('modal-cancel').addEventListener('click', () => $('modal').classList.remove('open'));
$('modal').addEventListener('click', e => { if(e.target===$('modal')) $('modal').classList.remove('open'); });
$('modal-save').addEventListener('click', () => {
  const name=$('m-name').value.trim(), club=$('m-club').value.trim();
  const dur=$('m-dur').value.trim()||'00:00:00';
  const maxH=parseFloat($('m-max').value)||0;
  const avgH=parseFloat($('m-avg').value)||0;
  if(!name||!club){showToast(T[lang].toastFillAll,'err');return;}
  const durParts=dur.split(':').map(Number);
  const totalSecs=(durParts[0]||0)*3600+(durParts[1]||0)*60+(durParts[2]||0)||3600;
  const flightPath=generateFlightPath(totalSecs,maxH);
  const timeAbove800=flightPath.reduce((acc,alt)=>acc+(alt>800?30:0),0);
  const validFlight=maxH>800&&timeAbove800>totalSecs*0.5;
  const pigeons=generateRacePigeons(totalSecs,maxH);
  addResult({name,club,duration:dur,maxH,avgH,datetime:new Date(),flightPath,totalSecs,validFlight,pigeons});
  $('modal').classList.remove('open');
  ['m-name','m-club','m-dur','m-max','m-avg'].forEach(id=>$(id).value='');
  showToast(T[lang].p4ResultAdded,'ok');
});
$('btn-export-csv').addEventListener('click', () => {
  if(!results.length){showToast(T[lang].p4EmptyRow,'err');return;}
  const hdr=[T[lang].p4ColNum,T[lang].p4ColName,T[lang].p4ColClub,T[lang].p4ColDuration,T[lang].p4ColMaxH,T[lang].p4ColAvgH,T[lang].p4ColDT].join(',');
  const rows=results.map((r,i)=>[i+1,`"${r.name}"`,`"${r.club}"`,r.duration,r.maxH.toFixed(1),r.avgH.toFixed(1),`"${fmtDatetime(r.datetime)}"`].join(','));
  const csv='data:text/csv;charset=utf-8,'+encodeURIComponent([hdr,...rows].join('\n'));
  const a=document.createElement('a'); a.href=csv; a.download='ART_rezultati.csv'; a.click();
  showToast(T[lang].p4Exported,'ok');
});
$('btn-del-results').addEventListener('click', () => {
  if(!results.length) return;
  if(!confirm(T[lang].p4Confirm)) return;
  results=[]; renderResultsTable(); showToast(T[lang].p4Deleted,'info');
});

// ─── Login overlay — tab switching ────────────────────────────────────────────
document.querySelectorAll('.login-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    document.querySelectorAll('.login-tab').forEach(t => t.classList.toggle('active', t === tab));
    $('login-form').classList.toggle('active',    target === 'login');
    $('register-form').classList.toggle('active', target === 'register');
    // Clear messages on tab switch
    [$('login-error'), $('reg-error'), $('reg-success')].forEach(el => el.classList.remove('show'));
  });
});

// ─── Login form ───────────────────────────────────────────────────────────────
function showMsg(el, text, type) {
  el.textContent = text;
  el.className = `login-msg login-${type} show`;
}
function clearMsg(el) { el.classList.remove('show'); }

$('login-form').addEventListener('submit', e => {
  e.preventDefault();
  const errEl   = $('login-error');
  const btn     = $('login-btn');
  const btnSpan = btn.querySelector('span');

  clearMsg(errEl);
  btn.disabled = true;
  btnSpan.textContent = '…';

  setTimeout(() => {
    const result = Auth.login(
      $('login-email').value,
      $('login-pass').value
    );
    if (result.success) {
      if ($('login-remember').checked) {
        localStorage.setItem('art-remember-email', $('login-email').value.trim().toLowerCase());
      } else {
        localStorage.removeItem('art-remember-email');
      }
      $('login-overlay').classList.remove('open');
      sessionStorage.removeItem('art-guest');
      applyAuthUI();
      showToast(T[lang].toastWelcome(result.user.name), 'ok');
    } else {
      showMsg(errEl, T[lang][result.error] || result.error, 'error');
    }
    btn.disabled = false;
    btnSpan.textContent = T[lang].btnLogin;
  }, 400);
});

// ─── Register form ────────────────────────────────────────────────────────────
$('register-form').addEventListener('submit', e => {
  e.preventDefault();
  const errEl    = $('reg-error');
  const succEl   = $('reg-success');
  const btn      = $('reg-btn');
  const btnSpan  = btn.querySelector('span');

  clearMsg(errEl);
  clearMsg(succEl);
  btn.disabled = true;
  btnSpan.textContent = '…';

  setTimeout(() => {
    const result = Auth.register({
      name:            $('reg-name').value,
      email:           $('reg-email').value,
      password:        $('reg-pass').value,
      confirmPassword: $('reg-confirm').value,
      club:            $('reg-club').value,
      role:            $('reg-role').value,
    });

    if (result.success) {
      showMsg(succEl, T[lang].regSuccess(result.user.name), 'success');
      setTimeout(() => {
        $('login-overlay').classList.remove('open');
        sessionStorage.removeItem('art-guest');
        // Reset form for next time
        $('register-form').reset();
        applyAuthUI();
        showToast(T[lang].toastWelcome(result.user.name), 'ok');
      }, 1200);
    } else {
      showMsg(errEl, T[lang][result.error] || result.error, 'error');
      btn.disabled = false;
      btnSpan.textContent = T[lang].btnRegister;
    }
  }, 400);
});

// ─── Header auth buttons ──────────────────────────────────────────────────────
$('btn-header-login').addEventListener('click', () => {
  $('login-overlay').classList.add('open');
  $('login-email').focus();
});

$('btn-logout').addEventListener('click', () => {
  Auth.logout();
  sessionStorage.removeItem('art-guest');
  applyAuthUI();
  showToast(T[lang].toastLogout, 'info');
});

$('login-guest').addEventListener('click', () => {
  sessionStorage.setItem('art-guest', '1');
  $('login-overlay').classList.remove('open');
  applyAuthUI();
});

// ─── Toast ────────────────────────────────────────────────────────────────────
let toastTimer;
function showToast(msg,type='info'){
  const el=$('toast'); el.textContent=msg; el.className=`show ${type}`;
  clearTimeout(toastTimer); toastTimer=setTimeout(()=>el.classList.remove('show'),3200);
}

// ─── Utils ────────────────────────────────────────────────────────────────────
function clamp(v,lo,hi){return Math.max(lo,Math.min(hi,v));}
function clearLatestAltitudes(){ for(const k in latestAltitudes) delete latestAltitudes[k]; }
function hexA(hex,a){const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);return `rgba(${r},${g},${b},${a})`;}
function msToDuration(ms){const t=Math.floor(ms/1000),h=Math.floor(t/3600),m=Math.floor((t%3600)/60),s=t%60;return `${pad(h)}:${pad(m)}:${pad(s)}`;}
function pad(n){return String(n).padStart(2,'0');}
function fmtTime(d){return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;}
function fmtDatetime(d){return `${d.toLocaleDateString(lang==='sr'?'sr-RS':'en-GB')} ${fmtTime(d)}`;}

// ─── Flight data helpers ──────────────────────────────────────────────────────
const PIGEON_NAMES = [
  'Munja','Strelja','Oluja','Vetar','Grom','Bljesak','Vihor','Sneg',
  'Zora','Sunce','Luna','Zvezda','Nebo','Oblak','Bura','Mrak',
  'Vatromet','Iskra','Plamen','Dim','Stena','Kamen','Drvo','List',
  'Pesma','Igra','Sreća','Nada','Vera','Snaga',
];

function generateFlightPath(totalSecs, maxH) {
  const steps = Math.ceil(totalSecs / 30);
  const path = [];
  for(let i = 0; i <= steps; i++) {
    const prog = i / steps;
    const bell = Math.sin(Math.PI * prog);
    const noise = (Math.random() - 0.5) * 0.12;
    path.push(Math.max(0, Math.round(maxH * Math.max(0, bell + noise))));
  }
  path[0] = Math.round(maxH * 0.04 * Math.random());
  path[path.length - 1] = Math.round(maxH * 0.04 * Math.random());
  return path;
}

function generateRacePigeons(totalSecs, raceMaxH) {
  const count = 4 + Math.floor(Math.random() * 7);
  const pigeons = [];
  const used = new Set();
  for(let i = 0; i < count; i++) {
    let pigName;
    do { pigName = PIGEON_NAMES[Math.floor(Math.random() * PIGEON_NAMES.length)]; }
    while(used.has(pigName));
    used.add(pigName);
    const pigMaxH = 150 + Math.round(Math.random() * 1650);
    const pigSecs = Math.round(totalSecs * (0.55 + Math.random() * 0.5));
    const fp = generateFlightPath(pigSecs, pigMaxH);
    const timeAbove800 = fp.reduce((s, h) => s + (h > 800 ? 30 : 0), 0);
    pigeons.push({ name: pigName, flightPath: fp, totalSecs: pigSecs, maxH: pigMaxH, timeAbove800 });
  }
  return pigeons;
}

function isValidFlight(pig) {
  return pig.maxH > 800 && pig.timeAbove800 > pig.totalSecs * 0.5;
}

// ─── Random demo data (120 results) ──────────────────────────────────────────
function initRandomResults() {
  const firstNames=['Marko','Nikola','Stefan','Aleksandar','Miloš','Nemanja','Đorđe','Luka','Filip','Ivan',
                    'Petar','Vladimir','Dragan','Zoran','Slobodan','Milan','Goran','Dejan','Bojan','Srđan'];
  const lastNames=['Jovanović','Petrović','Nikolić','Marković','Đorđević','Stojanović','Ilić','Stanković',
                   'Pavlović','Milovanović','Vasić','Simić','Popović','Lazić','Đukić','Radović','Tomić','Kovačević','Savić','Mitić'];
  const clubs=['SK Beograd','SK Novi Sad','SK Niš','SK Kragujevac','SK Subotica',
               'SK Čačak','SK Zaječar','SK Valjevo','SK Smederevo','SK Pančevo',
               'SK Šabac','SK Leskovac','SK Vranje','SK Pirot','SK Jagodina'];
  const now=Date.now();
  for(let i=0;i<120;i++){
    const name=firstNames[Math.floor(Math.random()*firstNames.length)]+' '+lastNames[Math.floor(Math.random()*lastNames.length)];
    const club=clubs[Math.floor(Math.random()*clubs.length)];
    const maxH=Math.round(150+Math.random()*1650);
    const avgH=parseFloat((maxH*(0.50+Math.random()*0.40)).toFixed(1));
    const totalSecs=Math.floor(1800+Math.random()*9000);
    const h=Math.floor(totalSecs/3600), m=Math.floor((totalSecs%3600)/60), s=totalSecs%60;
    const duration=`${pad(h)}:${pad(m)}:${pad(s)}`;
    const datetime=new Date(now-Math.floor(Math.random()*60)*86400000-Math.floor(Math.random()*86400000));
    const flightPath=generateFlightPath(totalSecs,maxH);
    const timeAbove800=flightPath.reduce((acc,alt)=>acc+(alt>800?30:0),0);
    const validFlight=maxH>800&&timeAbove800>totalSecs*0.5;
    const pigeons=generateRacePigeons(totalSecs,maxH);
    results.push({name,club,duration,maxH,avgH,datetime,flightPath,totalSecs,validFlight,pigeons});
  }
}

// ─── Hardware Emulator Channel ────────────────────────────────────────────────
// Two transports run in parallel; only one is active at a time:
//   • Socket.io  — when backend/server.js is running (cross-device capable)
//   • BroadcastChannel — same-browser fallback when no server is present
// emuSocketConn gates the BC handler so events are never processed twice.

let emuSocketConn = false;
let appSocket = null;
let loraHandshakeActive = false;
let isRaceActive = false; // true only after emulator "Start Race" — gates all chart updates
let emuBcActive = false;  // true when emulator sends data via BroadcastChannel (not socket)
const latestAltitudes = {}; // pigeonIdx → last received altitude; only pigeons with real data

const emulatorCh = new BroadcastChannel('art-emulator');
emulatorCh.onmessage = ({ data }) => {
  if (emuSocketConn) return; // Socket.io is active; skip BC to prevent duplicates
  switch (data.type) {
    case 'PING':
      emulatorCh.postMessage({ type: 'PONG' });
      break;
    case 'RING_INSERT':
      showToast(`Ring ${data.ringId} detected (Slot ${data.slot + 1})`, 'ok');
      addSessionRing(data.ringId, data.slot);
      break;
    case 'RING_REMOVE':
      showToast(`Slot ${data.slot + 1} cleared`, 'info');
      break;
    case 'RING_READ_READY':
      _emulatorRingRead(data.ringId);
      break;
    case 'RACE_ALTITUDE':
      _emulatorInjectAlt(data.pigeonIdx, data.altitude);
      break;
    case 'RACE_START':
      isRaceActive = true;
      emuBcActive = true;
      if (!lora.connected && !sim.active) { dot.className='dot on'; statusTxt.textContent='Emulator active'; }
      break;
    case 'RACE_STOP':
      isRaceActive = false;
      emuBcActive = false;
      clearLatestAltitudes();
      if (!lora.connected && !sim.active) { dot.className='dot'; statusTxt.textContent=T[lang].statusOff; }
      break;
    case 'HW_ALT_RESET':
      sMax=sMin=null;
      clearLatestAltitudes();
      pigeons.forEach((pig,i)=>{ pig.pts=[]; pig.h=220+i*70; pig.vel=0; pig.target=300+i*55; });
      hVal.textContent='—'; maxVal.textContent='—'; minVal.textContent='—';
      showToast('Altitude reset confirmed','ok');
      break;
    case 'HW_PROGRAM_COMPLETE':
      if (currentRingId) showToast('Programming sequence complete','ok');
      break;
    case 'LORA_CONNECTED':
      updateLoraHandshakeUI(true);
      break;
    case 'LORA_DISCONNECTED':
      updateLoraHandshakeUI(false);
      break;
  }
};

// Called when emulator fires RING_READ_READY — navigates to rings page and
// completes the read animation with the emulator-supplied Ring ID.
function _emulatorRingRead(ringId) {
  if (!Auth.hasAccess('rings')) return;
  if (readingRing) {
    clearTimeout(readingRingTimer);
    readingRingTimer = null;
    readingRing = false;
    $('ring-anim').classList.remove('reading');
  }
  if (currentPage !== 'rings') showPage('rings');
  readingRing = true;
  currentRingId = null;
  $('btn-save-ring').disabled = true;
  $('ring-id-display').textContent = T[lang].p3Reading;
  $('ring-anim').classList.add('reading');
  readingRingTimer = setTimeout(() => {
    readingRingTimer = null;
    $('ring-anim').classList.remove('reading');
    currentRingId = ringId;
    editingRingIndex = null;
    document.querySelector('.form-block').classList.remove('editing');
    $('ring-id-display').textContent = ringId;
    $('btn-save-ring').disabled = false;
    updateSaveBtnLabel();
    readingRing = false;
  }, 600);
}

// Altitude injected by the emulator — encoded/decoded as Float32 LE (meters)
// to match the physical ring wire format.
function _emulatorInjectAlt(pigeonIdx, altitude) {
  if (!isRaceActive) return; // only accept data while emulator race is running
  if (pigeonIdx < 0 || pigeonIdx >= pigeons.length) return;
  const buf  = new ArrayBuffer(4);
  const view = new DataView(buf);
  view.setFloat32(0, altitude, true);
  const h = view.getFloat32(0, true);
  if (!isFinite(h) || h < 0) return;
  const now = Date.now(), pig = pigeons[pigeonIdx];
  pig.h = h;
  pig.pts.push({ t: now, h });
  const cut = now - WINDOW_MS;
  while (pig.pts.length && pig.pts[0].t < cut) pig.pts.shift();
  if (sMax === null || h > sMax) sMax = h;
  if (sMin === null || h < sMin) sMin = h;
  // Track only pigeons that have actually sent data, then show the highest
  latestAltitudes[pigeonIdx] = h;
  const vals = Object.values(latestAltitudes);
  hVal.textContent = Math.max(...vals).toFixed(1);
  maxVal.textContent = sMax.toFixed(1) + ' m';
  minVal.textContent = sMin.toFixed(1) + ' m';
}

// Socket.io transport — dynamically loaded from the backend server.
// Silently skipped (emuSocketConn stays false) when server is not running,
// so the BroadcastChannel fallback above continues to handle all events.
(function initEmulatorSocket() {
  const s   = document.createElement('script');
  s.src     = 'https://aero-ring-backend.onrender.com/socket.io/socket.io.js';
  s.onload  = () => {
    appSocket = io('https://aero-ring-backend.onrender.com', {
      transports:           ['websocket'],
      reconnectionAttempts: 5,
      reconnectionDelay:    2000,
    });

    appSocket.on('connect', () => {
      emuSocketConn = true;
      appSocket.emit('join', 'main-app');
    });
    appSocket.on('disconnect', () => { emuSocketConn = false; });

    // ── Docking / ring reader ──────────────────────────────────────────────
    appSocket.on('ring_inserted', ({ slot, ringId }) => {
      showToast(`Ring ${ringId} detected (Slot ${slot + 1})`, 'ok');
      addSessionRing(ringId, slot);
    });
    appSocket.on('ring_removed',    ({ slot })         => showToast(`Slot ${slot + 1} cleared`, 'info'));
    appSocket.on('ring_read_ready', ({ ringId })        => _emulatorRingRead(ringId));

    // ── Hardware action responses ─────────────────────────────────────────
    appSocket.on('altitude_reset_success', () => {
      sMax=sMin=null;
      clearLatestAltitudes();
      pigeons.forEach((pig,i)=>{ pig.pts=[]; pig.h=220+i*70; pig.vel=0; pig.target=300+i*55; });
      hVal.textContent='—'; maxVal.textContent='—'; minVal.textContent='—';
      showToast('Altitude reset confirmed','ok');
    });
    appSocket.on('programming_complete', () => {
      if (currentRingId) showToast('Programming sequence complete','ok');
    });

    // ── Race lifecycle ────────────────────────────────────────────────────
    appSocket.on('race_started', () => {
      isRaceActive = true;
      if (!lora.connected && !sim.active) { dot.className='dot on'; statusTxt.textContent='Emulator active'; }
    });
    appSocket.on('race_stopped', () => {
      isRaceActive = false;
      clearLatestAltitudes();
      if (!lora.connected && !sim.active) { dot.className='dot'; statusTxt.textContent=T[lang].statusOff; }
    });
    // Each telemetry_update carries an array so one socket message can carry
    // a full multi-pigeon snapshot if needed.
    appSocket.on('telemetry_update', ({ pigeons: updates }) => {
      (updates || []).forEach(({ pigeonIdx, altitude }) => _emulatorInjectAlt(pigeonIdx, altitude));
    });

    // ── LoRa handshake confirmation ───────────────────────────────────────
    appSocket.on('lora_status_update', ({ connected }) => {
      updateLoraHandshakeUI(connected);
    });
  };
  s.onerror = () => {}; // Server not running — silently use BroadcastChannel
  document.head.appendChild(s);
})();

// ─── Init ─────────────────────────────────────────────────────────────────────
applyTheme();
applyAuthUI();     // show login overlay / restrict tabs before any render
applyLang();
// Restore remembered email (pre-fill login form if user previously checked "Remember me")
const _savedEmail = localStorage.getItem('art-remember-email');
if (_savedEmail) { $('login-email').value = _savedEmail; $('login-remember').checked = true; }
syncLoraUI();
renderSessionTable();
renderRingsTable();
initRandomResults();
renderResultsTable();
document.querySelector('.brand').addEventListener('click', () => showPage('tracking'));
$('btn-detail-close').addEventListener('click',closeDetailModal);
$('detail-modal').addEventListener('click',e=>{if(e.target===$('detail-modal'))closeDetailModal();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDetailModal();});
$('res-search').addEventListener('input',e=>{
  searchQuery=e.target.value;
  renderResultsTable();
});
$('res-search-clear').addEventListener('click',()=>{
  searchQuery=''; $('res-search').value=''; $('res-search').focus();
  renderResultsTable();
});
document.querySelectorAll('.sort-pill').forEach(pill=>{
  pill.addEventListener('click',()=>{
    const key=pill.dataset.qsort;
    quickSort=quickSort===key?null:key;
    sortState.col=null;
    renderResultsTable();
  });
});
