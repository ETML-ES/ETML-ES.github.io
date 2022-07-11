const CACHE_NAME = "cinetheque"
const CACHE_VERSION = '1';



self.addEventListener('fetch', event => {
    if (event.request.method != "GET") return;
    const fetchCacheFirst = async () => {
        const cache = await caches.open(`${CACHE_NAME}_${CACHE_VERSION}`);
        const cached = await cache.match(event.request);
        if (cached) return cached;
        let response = await fetch(event.request);
        if (response) cache.put(event.request, response.clone());
        return response;
    };
    event.respondWith(fetchCacheFirst());
});


self.addEventListener('activate', event => {
    const clearOldCache = async () => {
        let keys = await caches.keys();
        for (const key of keys) caches.delete(key);
    }
    event.waitUntil(clearOldCache());
});