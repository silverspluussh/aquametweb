'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"assets/assets/fonts/Poppins-SemiBold.ttf": "4ca619e8c7c56746c94ef50a95f8d598",
"assets/assets/fonts/Poppins-Regular.ttf": "d709511cfc58f9d8f59353de4be8bb17",
"assets/assets/images/aquamet-01.png": "13ec136a7a79d2753ba511db401dac7d",
"assets/assets/images/image%252050.png": "dfd9f47276a7b8c294f840f93122340a",
"assets/assets/icons/logout-61-32.png": "b6ceb3235ca7a069c075828e9bf91a33",
"assets/assets/icons/Notification.png": "6dd0360dc7604656fafecc4995411a22",
"assets/assets/icons/search-168-32.png": "6e5b05ab1b68b2613403706df6b1b681",
"assets/assets/icons/love-brand-no-subscription-256.png": "79db9cd7627a405d9930a0fb61c97b79",
"assets/assets/icons/profileimage.png": "980846da9ff254fb39508d1f435c7b13",
"assets/assets/icons/person-17-32.png": "2e3f46fe36768ca02957dea121016c56",
"assets/assets/icons/play_store_512.png": "d97d46bdea827f575e2356235f7cace9",
"assets/assets/icons/chat-80-512.png": "5909882e68e418aef9b78f0ffc641705",
"assets/assets/icons/home.png": "db2b10e3de71ae2b2dca6aa5733e55a6",
"assets/assets/icons/people-9-512.png": "58a4c2d4163fb42917a845f1fdd99197",
"assets/AssetManifest.bin.json": "89ca406eb23b22bf9e0f10becd2cc919",
"assets/AssetManifest.json": "f013dc3811fa8973c875354dc62de518",
"assets/fonts/MaterialIcons-Regular.otf": "c455d111fe5a18ddaa398ded2a742d60",
"assets/AssetManifest.bin": "1435015f54baa74576a7463e34e186b8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/FontManifest.json": "612a16e4bb91e897f92efe4233cee680",
"assets/NOTICES": "ac30180bb44fb3addfb97ba95a85e91f",
"main.dart.js": "0d28f9641e7fa00d2c7d94ab774cdb82",
"manifest.json": "215c4a3af49e3ea8f45d0c2109403725",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"index.html": "e7663c4edfbf83e506dc1eeb69156b3d",
"/": "e7663c4edfbf83e506dc1eeb69156b3d",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "965f2f4ab4283392fd2afeb3278fc7e5",
".git/index": "635980453977e61557828e4dc1296051",
".git/config": "3a658b6f9a5c195b5d4dd148799bbc1b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/HEAD": "4d5a2b23487d7e90e66e4271509215ed",
".git/logs/refs/heads/silver": "5b0e921127376be36be5395156c186e7",
".git/logs/refs/remotes/origin/silver": "0567231d32faef09aa6d9180189d3390",
".git/objects/47/94cc3826c67de396f9c69b46e7db6e033f5230": "f4e11e7fcf90ff37b0b424ce96a10175",
".git/objects/77/d20de03c248e9ecb5cd631959db0017fd66d31": "7de5203444c4ea884cffbed08506779d",
".git/objects/8f/1a6e3a83be095b6eb13998883bed52d812b4e1": "f916f474ff6b0093b1e90861c83eba6a",
".git/objects/a6/475c1b65847968368cee58085e4d096dd49434": "902f4030017c4755ad597aca2375515e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/9f82415a91c34864994f2020fff61f4803550b": "84c58095cbba26d9ad78ca535c390f41",
".git/objects/d5/98af0c013ec93bac885772627bbeaa8ca6fab3": "bf2babfb72fdcb48202c3a3ee495f345",
".git/objects/8b/9ce180e4685cd46d21a855e9547ebd96c55307": "aeba7e514cb0f9bc17ba4246458fa34f",
".git/objects/38/f0096a6f2f5b2d8f24b4231f976ded3afe3fb4": "6eea041f3b01e753f2cdd4b03480c5a5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/06/b594bd58a1d223154f13134443a6203d640186": "d3622da2c3788ed30d74dcca55cccc33",
".git/objects/c0/cf81aa18c48cf2d2bd6c152ade4149601e05ee": "d8e88df073767c46f7a611436ff4e1a6",
".git/objects/b0/9b4ff2f52b70312b6106cf1382fabf6be8499d": "4221a7d891828c62566764204aee8344",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/bd/aa6dbc279793338f440544923531b609ee887c": "078e85d2d370d3d83c251723d1c7f7ca",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/63/4c2bde7f0297ab1b7af9e3e862c43d227453ea": "d43d64035bdf8d6f4a5e7d8d7116eda5",
".git/objects/ce/23dc3fc8155efa3a4567215e27edadbbe5f245": "9d152a208b1e30225f8843ed673b674b",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/4f/97390fe81ec1794543f64d1571099183d28196": "a67f9d53a52239126d26dc6769eb00db",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/be/34be62005d2cea26a38077112b98752f352ee6": "49f77839752ff9980e45efaf2b197dc6",
".git/objects/8d/ce6756e05f991a5672f13e8f90cc6eaa3cda9c": "d7ae03e8e7a95d3b0bd82e4abdb9719f",
".git/objects/8d/fcbf15aae02ad6c10aed6ffc350582e19ff34a": "a5e110c248b5b0c7de591717f943f33d",
".git/objects/cf/9a5d9383e081e20fc577a117485c15d0762ad8": "53fcee8c6d35cca623ac5ea153850948",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/c00285d7b3e07fb80f06d3e339563212720f57": "be8f052b7c63e524255743ef97cf1dd9",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/26/7a281a79da4f4e41fe6a43c6b0fbe0e4aef5d3": "62b087066c4f22abc012e346ba5134d8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/16/5f0bd8ade49ccb7cd42e796e3dfdb6ca759af4": "180cbb006f847fa7bd54100cdbea098e",
".git/objects/ea/aad76e2e55a8d3932ff95afec1bf3ea9935fe4": "da89a2364d553483fa8ad4cf3a0e3551",
".git/objects/4b/49a6f64935b9658e79d36560a7180be0e1f8b3": "6268ab1405b98d376c2e5b139a30839f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/c2/6046a8b71ad93561f8b27b470625e116eda981": "f949b8ac7a962bd53c06b791b5617293",
".git/objects/34/61a5becbeaadea33b31892529fa5a7810b9e9c": "b4c81b6946acd703c9980dccc5f25946",
".git/objects/9b/8fc711c8e40870d6aa168ba2ebab0cae3dca06": "b015e2740eac29e22a2981131729982a",
".git/objects/25/1edb9457b374ca39871f23cb308dbf5a8e3091": "b042b424c00ad3a213be1fdbbe3d3e65",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/c4/3fff4fc3f8b1979a484376673dcc5d65227eea": "db3a592b2aef61971f0cddb0d561dd15",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/48/d307a6603090dd53037af9395a6df8bece02cc": "2a52a1116fbe46315e32c67ba4fefb44",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/92/64fb5e0d4763ec824a3e6c27574fa9e19e515f": "a7a9a3c1d74d8b6fcb927d77cae04827",
".git/objects/61/e91d32068467e8cfb8014662b1683a14b040ed": "0d9ae7bab807ba096ade3503ec1ded72",
".git/objects/f9/da54f2592d3b554b5d4757c7725a50d9348b88": "8e44ce9d17458972e357d864f4c96458",
".git/objects/75/31ce98dbf24686034c03298fe50009d1b19203": "661d623f0e750aa211cff972c1d3a15d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/refs/heads/silver": "62ed82daedcd9df57cda7af36b6a7ff7",
".git/refs/remotes/origin/silver": "62ed82daedcd9df57cda7af36b6a7ff7",
".git/COMMIT_EDITMSG": "a7528472b2393260229e5636a71a6cca",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "1f483c9026c8d5bc76cf96d02d990891"};
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
