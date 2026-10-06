const CACHE_NAME = 'salao-barbearia';
const ARQUIVOS_CACHE = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/manifest.json',
    '/icon-192.png',
    '/icon-512.png'
];  
self.addEventListener('install', event => {
    event.waitUntill (
        caches.open (CACHE_NAME)
            .then(cache=> {
                console.log ('Arquivos em cache');
                return cache.addAll(ARQUIVOS_CACHE);
            });
    )
});
