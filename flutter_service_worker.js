'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4f4d8d21591ea65bff64d2e46fde539f",
"version.json": "f7f2b391ab72d09053277e787c5bd7c8",
"index.html": "7a69f19dc13c9155167ea276ee6e7397",
"/": "7a69f19dc13c9155167ea276ee6e7397",
"main.dart.js": "d8b6faed7768a026277e39e468c0e1d0",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5bcc05f001a44208db25448828f44d84",
"icons/Icon-192.png": "173808ac9928ced159ea55116007bb9c",
"icons/Icon-maskable-192.png": "173808ac9928ced159ea55116007bb9c",
"icons/Icon-maskable-512.png": "ca050c053de95c71d77a7a8551ea1119",
"icons/Icon-512.png": "ca050c053de95c71d77a7a8551ea1119",
"manifest.json": "b1ff4e549842ead33a749bd025eedbf6",
"assets/AssetManifest.json": "7a73f7625733acd7de8f1ee9d4d49b86",
"assets/NOTICES": "058755c4dd03db36a6b8b3177bb157a7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "5bc8d33581608029143a55b2462b3d2b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "2ca9159d205ddacb5af4dc1b16a91c40",
"assets/packages/core_module/assets/mocks/services_list_mock.json": "d2b0af24a43b6bb0d174cdd6d4f33244",
"assets/packages/core_module/assets/mocks/sunday-morning-services_mock.json": "ffc7bc2237924273babf4e7f008b3a58",
"assets/packages/core_module/assets/mocks/lyrics_mock.json": "cfcc62165efdae23098e0727c4aff986",
"assets/packages/core_module/assets/mocks/saturday-services_mock.json": "d0fbc498948358510a2bf56e835692c3",
"assets/packages/core_module/assets/mocks/sunday-evening-services_mock.json": "87fe29feb4e18c95df4867ed3a5dd62c",
"assets/packages/core_module/assets/images/hero.png": "1972a42dc37e1afe605ae717cd886a03",
"assets/packages/core_module/assets/images/family_day.jpeg": "06842acaf56917b9e631ef796c37c2f6",
"assets/packages/core_module/assets/images/lock.png": "a1ab57fc113369d09f38f2d344201426",
"assets/packages/core_module/assets/images/auth/logo_ipbc_login.png": "172add84f4421a12f3cb2cec12f9f816",
"assets/packages/core_module/assets/images/perm_scan_wifi.png": "a71e5f041bf140d346fd4ca21c7bff52",
"assets/packages/core_module/assets/images/footer_logo.png": "07ba9d070becbbfbc1bbcc2cd569ec46",
"assets/packages/core_module/assets/images/sunday_evening.png": "ea887b0dfcfcbc3159a5ae26ac85759a",
"assets/packages/core_module/assets/images/email_verification.png": "58c13d93ae872ae5500e06d9ac627cde",
"assets/packages/core_module/assets/images/church_location.png": "4db956b8e1c1de2d448145c6782d63b4",
"assets/packages/core_module/assets/images/logo.png": "168784649621403049275d15c6aa9b80",
"assets/packages/core_module/assets/images/saturday_evening.png": "3ecc59a56f4b4eeaa8b2b9f7c09adf35",
"assets/packages/core_module/assets/images/sunday_morning.jpg": "00b4dac933a3ec891c56c004a1b6b781",
"assets/packages/core_module/assets/images/default_cover_1.png": "c68b9831156207119c7f365f8937c7bc",
"assets/packages/core_module/assets/images/vagalume_image.png": "03f3fc016082e248e85cb5e9122e0bc7",
"assets/packages/core_module/assets/images/wifi_icon.png": "71ff325aeb190eba76a1c64d0f8fdf4e",
"assets/packages/core_module/assets/images/default_cover_2.png": "76e7ed7cf847901894211e7aedafe9f6",
"assets/packages/core_module/assets/images/banner_store.png": "3a653747a0d0f6ef4deafaa96fc767d9",
"assets/packages/core_module/assets/images/default_cover_3.png": "4b17b907e786b7e9be29c2c9d5f1e385",
"assets/packages/core_module/assets/images/default_cover_4.png": "17a9c6fd5902f20dbe48cb7ae245e820",
"assets/packages/core_module/assets/icons/info.png": "6a49cae897585bc0a31a0eff75e2c680",
"assets/packages/core_module/assets/icons/play_circle.svg": "74d4f353f7c5a9a95caeeffdfe1fc0b8",
"assets/packages/core_module/assets/icons/watch.png": "8f746a966271ddbd46fc153ec4673803",
"assets/packages/core_module/assets/icons/warning.png": "19a83538cfdfedbf2f64db6e96095d28",
"assets/packages/core_module/assets/icons/lyrics.svg": "49a93bfcd663074ef2a24b347d6c1949",
"assets/packages/core_module/assets/icons/lote.png": "1388d98bd89e5b7f39e326967d3eff92",
"assets/packages/core_module/assets/icons/email-success.png": "57916aa66c6c44707678ad37e53ae0af",
"assets/packages/core_module/assets/icons/face-icon.png": "2b594313ee76865bd7d27a49378b109e",
"assets/packages/core_module/assets/icons/book.png": "b409b4fb5ecb9674ca09c1c50850f447",
"assets/packages/core_module/assets/icons/home.svg": "f25720af3a33a694ba263f7cdc0efb5a",
"assets/packages/core_module/assets/icons/logout.svg": "73b14118b11e8acaf0cd4b5994b509a0",
"assets/packages/core_module/assets/icons/church_location_icon.png": "ab09147b2804a05297135f08c7985e05",
"assets/packages/core_module/assets/icons/event-location.png": "b4376103668acf15c52260cfe08dc826",
"assets/packages/core_module/assets/icons/icone_dizimo.png": "a8ee0c313f15461a171e6a093aa0510c",
"assets/packages/core_module/assets/icons/arrow_icon_highlight_green.png": "e81b7b5509c2aadd2ace171e2e873ae1",
"assets/packages/core_module/assets/icons/announce.png": "3bb0c19e1d5b83f81152a34796606536",
"assets/packages/core_module/assets/icons/auth/no_profile.png": "b780f5024e086cc54ac0a5d10d3b4add",
"assets/packages/core_module/assets/icons/missao.png": "7a9e2aa2839c9aa6d2bf6783beed54b8",
"assets/packages/core_module/assets/icons/group.svg": "eede5875b5e18c8799720b7ff7c32138",
"assets/packages/core_module/assets/icons/arrow_back.png": "76334eb1a894bdadce538c17bcec1fea",
"assets/packages/core_module/assets/icons/book.svg": "f18f2f2ce02c1a2c39d022e9f02463f9",
"assets/packages/core_module/assets/icons/event.svg": "ea4346f19552b63ff2d007e3bd49a3e3",
"assets/packages/core_module/assets/icons/account_circle.svg": "97eb2333175a1e27149d8d5d747cc596",
"assets/packages/core_module/assets/icons/contact_icon_dark_green.png": "f6e69d71e27dd0bb042323e91cb7e4de",
"assets/packages/core_module/assets/icons/privacy_tip.svg": "c7ff16ad649d949e4bda757ed1a2bc04",
"assets/packages/core_module/assets/icons/popover.svg": "0507af58e2fb522bd6bb66b86e3ca8b0",
"assets/packages/core_module/assets/icons/link-icon.png": "17a33c0700c7df67c1ea4fc298aa24d6",
"assets/packages/core_module/assets/icons/contact_icon.png": "16690be8f61681b916c9e575e478eb48",
"assets/packages/core_module/assets/icons/add_notes.png": "28628a7281040cf4774a014c5f59f1d9",
"assets/packages/core_module/assets/icons/volunteer_activism.png": "3a438558bff2acb09a700fc0648b91a4",
"assets/packages/core_module/assets/icons/play_icon.png": "c1b6ccbccbf3be09e54ed886694422bc",
"assets/packages/core_module/assets/icons/location_on.png": "7a5070284ecf5d5501cb003d634c3ae0",
"assets/packages/core_module/assets/icons/whatsapp_icon.svg": "f9919b2034968b6d8f8e66995f69da6a",
"assets/packages/core_module/assets/icons/arrow_forward.png": "cc6afba84b5ff928caf6665cc3d9b739",
"assets/packages/core_module/assets/icons/ofertas.png": "701cec46a84f7a691b90507b52cac7cd",
"assets/packages/core_module/assets/icons/apple_icon.png": "aeab5abcaab4339212999ea3e1cc4064",
"assets/packages/core_module/assets/icons/ios_share.png": "ccac52a9256f6249c4f60ef12a20fc9b",
"assets/packages/core_module/assets/icons/google-icon.png": "3e4fa77c4af7d950217faf29ed693214",
"assets/packages/core_module/assets/icons/delete.png": "3809b633fa5621aa52bccfe247d4bb17",
"assets/packages/core_module/assets/icons/visibility_on.png": "aabe70ffcc159250999ba31596d12e02",
"assets/packages/core_module/assets/icons/edit_square.png": "bbe08308441543b8b68741eea6754f6e",
"assets/packages/core_module/assets/icons/edit.png": "da7bae4d57c749184933f5dabfd74a22",
"assets/packages/core_module/assets/icons/visibility_off.png": "2192003646f97a6ea482aa3bebfb3111",
"assets/packages/core_module/assets/icons/logo.svg": "288d1bde0a40cd2add6c6f73aec42239",
"assets/packages/core_module/assets/icons/arrow_icon_dark_green.png": "b2a7d3250da435e2710ee111fcf616f1",
"assets/packages/core_module/assets/icons/drive_folder_upload.png": "3a08a68bb0e0f86b7b23ff0db8f840a7",
"assets/packages/core_module/assets/icons/content_copy.png": "8ece2ef5dce2b3a40e6ffaef3272d0ae",
"assets/packages/core_module/assets/icons/arrow_back_ios_new.svg": "fb86efd793ad1cd63549c847e2d65c12",
"assets/packages/core_module/assets/icons/volunteer_activism.svg": "10d84c8fe023cfd7e889af5c4ecd6dda",
"assets/packages/core_module/assets/icons/email-not-valid.png": "694685af6552d80d74969c170c2a8eeb",
"assets/packages/core_module/assets/icons/close.png": "082591e7be53d64801bf637eb373bcf3",
"assets/packages/core_module/assets/icons/add_notes.svg": "8b4a0befc3c427740df745ada44cd85c",
"assets/packages/core_module/assets/data/unknown-lyrics/vivifica-me.json": "fb81fcf9341d50967db2fa9a09710dd8",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-320.json": "4238d3e7866fe42f31dc4314fe4fa1a8",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-27.json": "cc3304955060191dfa4c0c4238582054",
"assets/packages/core_module/assets/data/unknown-lyrics/salmo-27.json": "78f648c22b975b83dfed868ab4412944",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-395.json": "7401c7b57ccd73939763afbfe46c26e2",
"assets/packages/core_module/assets/data/unknown-lyrics/lyrics_mock.json": "19cffc0bd5d1a383acd560d7a62c20cb",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-371.json": "a47453ebdb6d0e168e40c53f4cd51490",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-351.json": "fa374f56e1345bb3cbc643155448a610",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-254.json": "a26bd7c0ed9ce807d56553d15246cdd5",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-4.json": "872e76e6b4f4b6d3e12e61e05d03f4cf",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-14.json": "1d2c7c281438de27429887cc4cfec81a",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-97.json": "c35d0c96fc0ee380dc12546155e500fc",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-201.json": "4767cccb46a96d6d875705c79e04ea36",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-108.json": "dd30d1f1a8d885ec60aadd99c8c0dda4",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-28.json": "25ecce77b6eb132b24612e185648600a",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-04.json": "44dd89d9428eab5b4b6c7810ba2113d4",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-103.json": "a0785f9032dbe22ca963babdf204c377",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-33.json": "b9d3069ef2a6ec5383415525b7cf2999",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-64.json": "3ee84a1fe1a9a2450d69efbe49f535e6",
"assets/packages/core_module/assets/data/unknown-lyrics/hino-13.json": "f112d19e34638738762be92dec8c8a24",
"assets/packages/core_module/assets/data/saturday-services/saturday-service-29-04-23.json": "2c1064f0c1e9d86c5457a5a3d5c25257",
"assets/packages/core_module/assets/data/saturday-services/saturday-service.json": "ed2929e848bea07655473729d9cfd14a",
"assets/packages/core_module/assets/data/saturday-services/saturday-service-06-05-23.json": "63e7338394918034181065f01f98127b",
"assets/packages/core_module/assets/data/saturday-services/saturday-service-03-06-23.json": "0903a69a47050233d329596fc010a2d5",
"assets/packages/core_module/assets/data/sunday-evening-services/sunday-evening-service.json": "a552c6071c285370d116ce2bcaaa9365",
"assets/packages/core_module/assets/data/sunday-evening-services/sunday-evening-service-28-05-23.json": "6bcd11d8932c85d14e8352265ccfcd2b",
"assets/packages/core_module/assets/data/sunday-evening-services/sunday-evening-service-04-06-23.json": "3626aa610a588523aa9deffbf656e2d5",
"assets/packages/core_module/assets/data/sunday-evening-services/sunday-evening-service-14-05-23.json": "2f77d207590f893ccf759777cf2d7d0b",
"assets/packages/core_module/assets/data/sunday-evening-services/sunday-evening-service-07-05-23.json": "18927174c4adabcdb9691c5c01b7ae83",
"assets/packages/core_module/assets/data/sunday-evening-services/sunday-evening-service-21-05-23.json": "79792a245ab5db4d928de9ad84f4da2d",
"assets/packages/core_module/assets/data/sunday-evening-services/sunday-evening-service-30-04-23.json": "3e1833113a336f144101d4a1cd051bca",
"assets/packages/core_module/assets/data/sunday-evening-services/sunday-evening-service-11-06-23.json": "f1bced723745b2263eb0507b9c267fae",
"assets/packages/core_module/assets/data/sunday-morning-services/sunday-morning-service-07-05-23.json": "45546625495cdf3f85b35c4537a8b5ac",
"assets/packages/core_module/assets/data/sunday-morning-services/sunday-morning-service-21-05-23.json": "8cde95f70f4c487c4d2d63d9e30098ac",
"assets/packages/core_module/assets/data/sunday-morning-services/sunday-morning-service-30-04-23.json": "153f7589617be968011e4ce1a8c06c52",
"assets/packages/core_module/assets/data/sunday-morning-services/sunday-morning-service-14-05-23.json": "a180676cb09e5cf31b2b442ec68f5118",
"assets/packages/core_module/assets/data/sunday-morning-services/sunday-morning-service-28-05-23.json": "3ea3872127b2fb190f9b484f15391527",
"assets/packages/core_module/assets/data/sunday-morning-services/sunday-morning-service-04-06-23.json": "3ea3872127b2fb190f9b484f15391527",
"assets/packages/core_module/assets/data/sunday-morning-services/sunday-morning-service-18-06-23.json": "7712ea26006c65d7e8da32436827937a",
"assets/packages/core_module/assets/data/sunday-morning-services/sunday-morning-service.json": "b1ad632f6b575d72c8069bdf1e8f8956",
"assets/packages/core_module/assets/data/events/events-mock.json": "ff6c56cbf7d9feba019976650c6d8589",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a7368dba1fa989c0ddb4f1f339193873",
"assets/fonts/MaterialIcons-Regular.otf": "a66a8440b2e36c6df44e20db86f86adb",
"favicon-32x32.png": "a65680c1245f9676fe375b66782df8f6",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
