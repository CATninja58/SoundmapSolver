const cacheName = 'pwa-cache-v1';
const assets = [
  'https://catninja58.github.io/SoundmapSolver/',
  'https://catninja58.github.io/SoundmapSolver/index.html',
  'https://catninja58.github.io/SoundmapSolver/icon-192x192.png',
  'https://catninja58.github.io/SoundmapSolver/icon-512x512.png',
  'https://catninja58.github.io/SoundmapSolver/1.png', // Include all your images
  'https://catninja58.github.io/SoundmapSolver/2.png',
  'https://catninja58.github.io/SoundmapSolver/3.png',
  'https://catninja58.github.io/SoundmapSolver/4.png',
  'https://catninja58.github.io/SoundmapSolver/5.png',
  'https://catninja58.github.io/SoundmapSolver/6.png',
  'https://catninja58.github.io/SoundmapSolver/7.png',
  'https://catninja58.github.io/SoundmapSolver/MasterArtistList.json' // Include your master list of artists if it’s a file
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
