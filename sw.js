self.addEventListener('install', (e) => {
    console.log('[Service Worker] Telah dipasang');
});

self.addEventListener('fetch', (e) => {
    // Biarkan kosong supaya sistem sentiasa ambil data dari internet (live database)
});
