const cacheName = "TokioMarineClaimCenter-offline";
const url = "https://medlinxasia.github.io/tokiomarine";
const preCache = [
    url + '/',
    url + '/index.html',
    url + '/manifest.json',
    url + '/automobile.html',
    url + '/hospital.html',
    url + '/personal-accident.html',
    url + '/assets/js/myscript.js',
    url + '/assets/js/theme.js'
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
