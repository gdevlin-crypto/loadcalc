// Kato Load Calc — service worker
// Caches the app shell + AHJ blanks so the tool runs fully offline once a tech has opened it.
// Bump CACHE_VERSION whenever index.html or any blank changes to force re-cache.
const CACHE_VERSION = "kato-loadcalc-v1";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-180.png",
  "./vancouver.pdf",
  "./west-vancouver.pdf",
  "./dnv.pdf",
  "./burnaby-r1.pdf",
  "./cnv-sf-suite.pdf",
  "./cnv-townhouse.pdf"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache =>
      cache.addAll(APP_SHELL).catch(err => {
        console.warn("[SW] Some assets failed to pre-cache; will fetch on demand.", err);
      })
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Cache-first, falling back to network. Updates cache opportunistically.
self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  // Only handle same-origin
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(req).then(cached => {
      const networkPromise = fetch(req).then(resp => {
        if (resp.ok) {
          const clone = resp.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(req, clone));
        }
        return resp;
      }).catch(() => cached);  // offline → fall back to cache (might be null)
      return cached || networkPromise;
    })
  );
});
