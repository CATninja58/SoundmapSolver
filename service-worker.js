const cacheName = 'pwa-cache-v1';
const assets = [
  '/',
  'https://github.com/CATninja58/SoundmapSolver/blob/main/index.html',
  'https://github.com/CATninja58/SoundmapSolver/blob/main/icon-192x192.png',
  'https://github.com/CATninja58/SoundmapSolver/blob/main/icon-512x512.png',
  'https://github.com/CATninja58/SoundmapSolver/blob/main/1.png', // Include all your images
  'https://github.com/CATninja58/SoundmapSolver/blob/main/2.png',
  'https://github.com/CATninja58/SoundmapSolver/blob/main/3.png',
  'https://github.com/CATninja58/SoundmapSolver/blob/main/4.png',
  'https://github.com/CATninja58/SoundmapSolver/blob/main/5.png',
  'https://github.com/CATninja58/SoundmapSolver/blob/main/6.png',
  'https://github.com/CATninja58/SoundmapSolver/blob/main/7.png',
  'https://github.com/CATninja58/SoundmapSolver/blob/main/MasterArtistList.json', // Include your master list of artists if it’s a file
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
