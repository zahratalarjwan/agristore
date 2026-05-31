const CACHE_NAME = 'arjwan-store-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/admin.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/app_icon.png',
  '/glassy_botanical_hero.png',
  '/agricultural_glass_hero.png',
  '/matjarna_hero_luxury_1778254117070.png'
];

// Install Event - cache core files
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate Event - clear old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - network-first fallback to cache
self.addEventListener('fetch', e => {
  // Only handle HTTP/HTTPS schemes (exclude chrome-extension, etc.)
  if (!e.request.url.startsWith('http')) return;

  // For API endpoints, skip caching
  if (e.request.url.includes('/api/')) {
    return;
  }

  e.respondWith(
    fetch(e.request)
      .then(response => {
        // Clone the response and cache it
        const resClone = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(e.request, resClone);
        });
        return response;
      })
      .catch(() => caches.match(e.request))
  );
});
