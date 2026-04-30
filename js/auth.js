'use strict';

// ─── Auth Module ─────────────────────────────────────────────────────────────
// localStorage-based user store simulation.
// To switch to a real backend, replace the TODO-marked function bodies.
// The public API stays identical — the rest of the app never changes.
// ─────────────────────────────────────────────────────────────────────────────
const Auth = (() => {
  const TOKEN_KEY = 'art-auth-token';
  const USERS_KEY = 'art-users';      // persists registered users

  // ── Pages each role may visit ─────────────────────────────────────────────
  const PAGE_ACCESS = {
    admin:  ['tracking', 'device', 'rings', 'results'],
    club:   ['tracking', 'device', 'rings', 'results'],
    viewer: ['results'],
  };

  // ── User store (localStorage) ─────────────────────────────────────────────
  function _getUsers() {
    try { return JSON.parse(localStorage.getItem(USERS_KEY)) || []; }
    catch { return []; }
  }
  function _saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  // ── Password hashing (client-side demo only) ──────────────────────────────
  // Not cryptographically secure — replace with server-side bcrypt in prod.
  function _hashPass(pass) {
    return btoa(encodeURIComponent(pass + '::art-2024-salt'));
  }

  // ── Unsigned mock JWT ─────────────────────────────────────────────────────
  // TODO: In prod the server issues signed JWTs; client only stores + sends.
  function _makeToken(user) {
    const hdr = btoa(JSON.stringify({ alg: 'none', typ: 'JWT' }));
    const pay = btoa(JSON.stringify({
      sub:   user.id,
      email: user.email,
      role:  user.role,
      name:  user.name,
      club:  user.club || null,
      iat:   Date.now(),
      exp:   Date.now() + 8 * 3600 * 1000,
    }));
    return `${hdr}.${pay}.mock_sig`;
  }

  function _readToken(token) {
    try {
      const pay = JSON.parse(atob(token.split('.')[1]));
      return pay.exp > Date.now() ? pay : null;
    } catch { return null; }
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Public API
  // ─────────────────────────────────────────────────────────────────────────

  /**
   * Register a new user and auto-login.
   * Returns { success: true, user } or { success: false, error: 'ERR_CODE' }.
   *
   * TODO: Replace body with:
   *   const res  = await fetch('/api/auth/register', {
   *     method: 'POST', headers: {'Content-Type':'application/json'},
   *     body: JSON.stringify({ name, email, password, role, club }),
   *   });
   *   const data = await res.json();
   *   if (!res.ok) return { success: false, error: data.code };
   *   localStorage.setItem(TOKEN_KEY, data.token);
   *   return { success: true, user: data.user };
   */
  function register({ name, email, password, confirmPassword, club, role }) {
    if (!name || !email || !password || !confirmPassword)
      return { success: false, error: 'ERR_FILL_ALL' };
    if (password.length < 6)
      return { success: false, error: 'ERR_PASS_TOO_SHORT' };
    if (password !== confirmPassword)
      return { success: false, error: 'ERR_PASS_MISMATCH' };

    const users = _getUsers();
    if (users.find(u => u.email === email.trim().toLowerCase()))
      return { success: false, error: 'ERR_EMAIL_EXISTS' };

    const user = {
      id:           Date.now().toString(36) + Math.random().toString(36).slice(2),
      name:         name.trim(),
      email:        email.trim().toLowerCase(),
      passwordHash: _hashPass(password),
      role:         role || 'viewer',
      club:         club ? club.trim() : null,
      createdAt:    Date.now(),
    };

    _saveUsers([...users, user]);
    localStorage.setItem(TOKEN_KEY, _makeToken(user));
    return { success: true, user };
  }

  /**
   * Authenticate an existing user.
   * Returns { success: true, user } or { success: false, error: 'ERR_CODE' }.
   *
   * TODO: Replace body with:
   *   const res  = await fetch('/api/auth/login', {
   *     method: 'POST', headers: {'Content-Type':'application/json'},
   *     body: JSON.stringify({ email, password }),
   *   });
   *   const data = await res.json();
   *   if (!res.ok) return { success: false, error: data.code };
   *   localStorage.setItem(TOKEN_KEY, data.token);
   *   return { success: true, user: data.user };
   */
  function login(email, password) {
    const users = _getUsers();
    const u = users.find(u => u.email === email.trim().toLowerCase());
    if (!u || u.passwordHash !== _hashPass(password))
      return { success: false, error: 'ERR_INVALID_CREDENTIALS' };
    localStorage.setItem(TOKEN_KEY, _makeToken(u));
    return { success: true, user: u };
  }

  /**
   * TODO: Replace body with:
   *   await fetch('/api/auth/logout', { method: 'POST' });
   *   localStorage.removeItem(TOKEN_KEY);
   */
  function logout() {
    localStorage.removeItem(TOKEN_KEY);
  }

  /**
   * Read current auth state. Validates token expiry.
   * TODO: For refresh-token flow, call /api/auth/refresh here when exp is near.
   */
  function getState() {
    const raw = localStorage.getItem(TOKEN_KEY);
    if (!raw) return { authenticated: false, role: 'viewer', user: null };
    const pay = _readToken(raw);
    if (!pay) {
      localStorage.removeItem(TOKEN_KEY);
      return { authenticated: false, role: 'viewer', user: null };
    }
    return { authenticated: true, role: pay.role, user: pay };
  }

  /** True if the current user may visit a given page key. */
  function hasAccess(page) {
    const { role } = getState();
    return (PAGE_ACCESS[role] || PAGE_ACCESS.viewer).includes(page);
  }

  /** True if the current user may add / edit / delete records. */
  function canEdit() {
    const { role } = getState();
    return role === 'admin' || role === 'club';
  }

  return { register, login, logout, getState, hasAccess, canEdit };
})();
