'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "d5be7318ab92406e8d07b92e4921ed6c",
"index.html": "cfbd25441a8c4bb60a65651ff2614fef",
"/": "cfbd25441a8c4bb60a65651ff2614fef",
"main.dart.js": "23a4533f66b193a78e7d1edbb4aa7dbd",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"logo.png": "151076f729cb94ab01bada222b5ae580",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5369586efa9988c1a10b4fc5513cfb7a",
"assets/AssetManifest.json": "6fc22174fa0cde62504e5834f638fbe0",
"assets/NOTICES": "cc639afa881a669f6d5c1cd17d67ff91",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "39dc92302c941aef6d384f96d4fc291c",
"assets/fonts/MaterialIcons-Regular.otf": "6d34c0088f9199102530eef9e4ab38d4",
"assets/assets/images/sunday_morning_service_lg.png": "a6c2919e5cf08032db0954da229cfd1e",
"assets/assets/images/little_group_sm.png": "02edaeee3c33df6de7fce7e1bda3df0a",
"assets/assets/images/hero.png": "1972a42dc37e1afe605ae717cd886a03",
"assets/assets/images/sunday_morning_service_md.png": "021d5875a83b06037e1a67334d3a231a",
"assets/assets/images/saturday_service_lg.png": "9306ad1331048c65e2cd9cd3264a08db",
"assets/assets/images/saturday_service_md.png": "b5608a7c100ae16e7fb32b21e2675117",
"assets/assets/images/footer_logo.png": "07ba9d070becbbfbc1bbcc2cd569ec46",
"assets/assets/images/church_location.png": "4db956b8e1c1de2d448145c6782d63b4",
"assets/assets/images/sunday_evening_service_sm.png": "0d6166ee0fb965ac5acfac10507144d3",
"assets/assets/images/little_group_lg.png": "18cd35905c8e241b4782d69db896ba90",
"assets/assets/images/sunday_morning_service_sm.png": "3bd132897f3960bd909ab7de8082c815",
"assets/assets/images/logo.png": "168784649621403049275d15c6aa9b80",
"assets/assets/images/little_group_md.png": "cb6727f0227721081108ba826448b2c7",
"assets/assets/images/saturday_service_sm.png": "8aabacafb338df262863a9071390ba17",
"assets/assets/images/sunday_evening_service_md.png": "5524e6b61f21b5b1fd71f52a2ebe9ebc",
"assets/assets/images/banner_store.png": "3a653747a0d0f6ef4deafaa96fc767d9",
"assets/assets/images/sunday_evening_service_lg.png": "b275bca7bcf44801952729acd5b97fd4",
"assets/assets/icons/book.png": "b409b4fb5ecb9674ca09c1c50850f447",
"assets/assets/icons/church_location_icon.png": "ab09147b2804a05297135f08c7985e05",
"assets/assets/icons/arrow_icon_highlight_green.png": "e81b7b5509c2aadd2ace171e2e873ae1",
"assets/assets/icons/announce.png": "3bb0c19e1d5b83f81152a34796606536",
"assets/assets/icons/arrow_back.png": "76334eb1a894bdadce538c17bcec1fea",
"assets/assets/icons/contact_icon_dark_green.png": "f6e69d71e27dd0bb042323e91cb7e4de",
"assets/assets/icons/contact_icon.png": "16690be8f61681b916c9e575e478eb48",
"assets/assets/icons/volunteer_activism.png": "3a438558bff2acb09a700fc0648b91a4",
"assets/assets/icons/play_icon.png": "c1b6ccbccbf3be09e54ed886694422bc",
"assets/assets/icons/arrow_forward.png": "cc6afba84b5ff928caf6665cc3d9b739",
"assets/assets/icons/apple_icon.png": "aeab5abcaab4339212999ea3e1cc4064",
"assets/assets/icons/arrow_icon_dark_green.png": "b2a7d3250da435e2710ee111fcf616f1",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
