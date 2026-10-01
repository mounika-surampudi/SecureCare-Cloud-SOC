const CACHE_NAME = "securecare-andhra-v1";
const urlsToCache = ["/", "/main", "/blood", "/soc", "/manifest.json"];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(urlsToCache)));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match("/"))));
});