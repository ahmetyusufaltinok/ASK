const C = 'beyzos-v1';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET') return;
  const u = new URL(r.url); if (u.origin !== location.origin) return;
  if (r.mode === 'navigate' || u.pathname.endsWith('/') || u.pathname.endsWith('.html')) {
    e.respondWith(fetch(r).then(res => { const cp = res.clone(); caches.open(C).then(c => c.put(r, cp)); return res; }).catch(() => caches.match(r)));
    return;
  }
  if (/\.(bin|png|webmanifest)$/.test(u.pathname)) {
    e.respondWith(caches.match(r).then(m => m || fetch(r).then(res => { if (res.ok) { const cp = res.clone(); caches.open(C).then(c => c.put(r, cp)); } return res; })));
  }
});

/* ---------- bildirimler ---------- */
self.addEventListener('push', e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (_) { d = { body: e.data ? e.data.text() : '' }; }
  e.waitUntil(self.registration.showNotification(d.title || 'Biz 🌷', {
    body: d.body || '', icon: 'icon-192.png', badge: 'icon-192.png', lang: 'tr',
    tag: d.tag || undefined, renotify: !!d.tag, data: { url: d.url || './' }
  }));
});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = new URL((e.notification.data && e.notification.data.url) || './', self.location.href);
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(async ws => {
    const same = ws.find(w => new URL(w.url).pathname === url.pathname);
    if (same) { same.postMessage({ type: 'goto', url: url.href }); return same.focus(); }
    if (ws[0] && ws[0].navigate) { try { const w = await ws[0].navigate(url.href); if (w) return w.focus(); } catch (_) { } }
    return self.clients.openWindow(url.href);
  }));
});
