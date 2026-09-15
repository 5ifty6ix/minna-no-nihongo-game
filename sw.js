const CACHE_NAME = 'minna-n5-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './vocab.js',
  './manifest.json',
  './icon-192.png'
];

// Install: Cache all game assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activate: Clean up any old versions
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Serve from cache first; fallback to network
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  
  // Skip analytics requests when offline
  if (event.request.url.includes('google-analytics') || event.request.url.includes('googletagmanager')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then(networkResponse => {
        return networkResponse;
      }).catch(() => {
        // Offline fallback
        return caches.match('./index.html');
      });
    })
  );
});
