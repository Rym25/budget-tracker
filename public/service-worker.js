const FILES_TO_CACHE = [
    "./index.html",
    "./js/index.js",
    "./js/idb.js",
    "./css/styles.css"
]

const APP_PREFIX = 'Budget_Tracker-';
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            console.log('installing cache : ' + CACHE_NAME)
            return cache.addAll(FILES_TO_CACHE)
        })
    )
})
