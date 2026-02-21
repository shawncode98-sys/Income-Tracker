self.addEventListener("install",e=>{
  e.waitUntil(
    caches.open("income-app").then(cache=>{
      return cache.addAll(["/"]);
    })
  );
});
