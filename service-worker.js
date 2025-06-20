// Define um nome e uma versão para o nosso cache de arquivos
const CACHE_NAME = 'producao-cache-v1';
// Lista de todos os arquivos que o app precisa para funcionar offline
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/coloridapoint.png',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
    'https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.min.js',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined'
];

// Evento 'install': é disparado quando o service worker é instalado pela primeira vez.
self.addEventListener('install', event => {
    // Espera até que o cache seja aberto e todos os nossos arquivos sejam adicionados a ele.
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache aberto. Adicionando URLs ao cache.');
                return cache.addAll(urlsToCache);
            })
    );
});

// Evento 'fetch': é disparado toda vez que o app tenta buscar um arquivo (uma imagem, o css, etc.)
self.addEventListener('fetch', event => {
    event.respondWith(
        // Tenta encontrar o arquivo no cache primeiro.
        caches.match(event.request)
            .then(response => {
                // Se encontrar no cache, retorna o arquivo do cache.
                if (response) {
                    return response;
                }
                // Se não encontrar no cache, busca na internet.
                return fetch(event.request);
            })
    );
});