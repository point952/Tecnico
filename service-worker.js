// --- VERSÃO 2: ESTRATÉGIA STALE-WHILE-REVALIDATE ---

// Mude a versão aqui para forçar a atualização para os usuários
const CACHE_NAME = 'producao-cache-v2'; 

// Lista de arquivos essenciais para o "esqueleto" do app
const urlsToCache = [
    '/Tecnico/index.html',
    '/Tecnico/style.css',
    '/Tecnico/coloridapoint.png',
    '/Tecnico/manifest.json',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
    'https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.min.js',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined'
];

// Evento 'install': Guarda os arquivos essenciais no cache.
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Service Worker: Cache aberto e pronto para salvar arquivos.');
                return cache.addAll(urlsToCache);
            })
    );
});

// Evento 'activate': Limpa caches antigos para evitar conflitos e liberar espaço.
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log('Service Worker: Limpando cache antigo:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Evento 'fetch': Intercepta todos os pedidos de rede.
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open(CACHE_NAME).then(cache => {
            // 1. Tenta pegar do cache primeiro
            return cache.match(event.request).then(response => {
                // Se estiver no cache, retorna a resposta do cache
                // E, ao mesmo tempo, busca uma versão nova na rede
                const fetchPromise = fetch(event.request).then(networkResponse => {
                    // Se a busca na rede for bem-sucedida, atualiza o cache
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });

                // Retorna a resposta do cache imediatamente (se houver), ou espera a resposta da rede
                return response || fetchPromise;
            });
        })
    );
});
