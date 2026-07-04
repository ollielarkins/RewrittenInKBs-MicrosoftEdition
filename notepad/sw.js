const C='notepad-v4',A=['./','./index.html','./manifest.webmanifest','./icon.svg'];
addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>skipWaiting())));
addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))).then(()=>clients.claim())));
addEventListener('fetch',e=>{const q=e.request;if(q.method!='GET')return;
 e.respondWith(q.mode=='navigate'
  ?fetch(q).then(r=>(caches.open(C).then(c=>c.put(q,r.clone())),r)).catch(()=>caches.match('./index.html'))
  :caches.match(q).then(h=>h||fetch(q)))});
