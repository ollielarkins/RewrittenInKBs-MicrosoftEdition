const C='notepad-v3',A=['./','./index.html','./manifest.webmanifest','./icon.svg'];
addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>skipWaiting())));
addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))).then(()=>clients.claim())));
addEventListener('fetch',e=>{if(e.request.method=='GET')e.respondWith(caches.match(e.request).then(h=>h||fetch(e.request)))});
