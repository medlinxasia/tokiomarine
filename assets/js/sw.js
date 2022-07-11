const cacheName = "TokioMarineClaimCenter-offline";
const preCache = [
    './',
    './index.html',
    './manifest.json',
    './automobile.html',
    './hospital.html',
    './personal-accident.html',
    './assets/js/myscript.js',
    './assets/js/theme.js'
];

self.addEventListener('install', e => {
    console.log("The SW is Installed!");
    e.waitUntil(
        caches.open(cacheName).then(cache => cache.addAll(preCache))
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(res => res || fetch(e.request))
    );
});
