var GHPATH = "/github-page-pwa"
var APP_PREFIX = "gppwa_"
var VERSION = "version_001"
var URLS = [
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/css/styles.css`,
  `${GHPATH}/android-chrome-512x512.png`,
  `${GHPATH}/js/script.js`,
]

var CACHE_NAME = APP_PREFIX + VERSION

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Caching resources")
      return cache.addAll(URLS)
    })
  )
})

self.addEventListener("fetch", function (e) {
  console.log("Fetch request: " + e.request.url)
  e.respondWith(
    caches.match(e.request).then(function (cachedResponse) {
      if (cachedResponse) {
        console.log("Responding with cache: " + e.request.url)
        return cachedResponse
      } else {
        console.log("File is not cached, fetching: " + e.request.url)
        if (e.request.url.includes("api.clashofclans.com")) {
          return fetchViaCorsProxy(e.request)
        } else {
          return fetch(e.request)
        }
      }
    })
  )
})

function fetchViaCorsProxy(request) {
  var corsProxyUrl = "https://cors-anywhere.herokuapp.com/" + request.url
  var corsRequest = new Request(corsProxyUrl, {
    method: request.method,
    headers: request.headers,
    mode: "cors",
    cache: "no-store",
    referrer: "no-referrer",
  })

  return fetch(corsRequest)
}
