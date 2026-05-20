// Empty service worker placeholder to satisfy browser /sw.js requests.
// This file can be expanded later if you add a real service worker.
self.addEventListener('install', (event) => {
    self.skipWaiting();
});
self.addEventListener('activate', (event) => {
    self.clients.claim();
});
