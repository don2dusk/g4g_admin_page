'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9a3a252ca68622118e588abeec47deaa",
"index.html": "6ec46ee64317d7dfcc43a22b1df767e6",
"/": "6ec46ee64317d7dfcc43a22b1df767e6",
"main.dart.js": "d783c9f174a754f8613053ef01ef629e",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "ff7109466b1477b0abb9d082ed3d9d61",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c81d3f2d60f08ddea77a5e13920b3cd1",
"assets/AssetManifest.json": "a4d26bc9b0782aeeb60e4b6e54e3720c",
"assets/NOTICES": "81ba40601f344af558ecf0686698d6f1",
"assets/FontManifest.json": "3e67c098e66cadcd9ef2357625d9f999",
"assets/AssetManifest.bin.json": "4d1c2dce7e782964920c178fd04c47d6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "b4ddc3ba085c9a1884d76d96d4629943",
"assets/fonts/MaterialIcons-Regular.otf": "e15d867296d636afa05af4223ca8adb5",
"assets/assets/images/search_icon.svg": "e5f81fcc70a02cd9207dffbe30d794f1",
"assets/assets/images/person.svg": "7c7aec8ef2b1525640d8b92ac335035c",
"assets/assets/images/salary_update.svg": "7f78d7dacf22d7a1effa926d67000f56",
"assets/assets/images/name_widget.svg": "54a640dcb08aea9f814420441a178b5d",
"assets/assets/images/email_widget.svg": "14d10cb084edafb0299ccc56bd87b487",
"assets/assets/images/go4gold_full_s.svg": "3de1ba420a095a85a614a9f716309082",
"assets/assets/images/g4g_logo_xs.svg": "9100164b705a089717a3b10d6d81e4ee",
"assets/assets/images/phone_vector.svg": "1635796c639a5d1377e9861992b2b7a7",
"assets/assets/images/log-out.svg": "824077f1fe06e36bbd9590ba6c832f38",
"assets/assets/images/settings.svg": "ff325c6d8e276a9f0fa651fe4d396643",
"assets/assets/images/splash_image-login.png": "3fb1bc857b1e2367ae6830b1d420c90d",
"assets/assets/images/verification.svg": "3afa862070c1798c83223cc1747a424c",
"assets/assets/images/backdrop_horizontal.svg": "18bc6ff4d02b17d70ee53a72ea2c9bb5",
"assets/assets/images/check.svg": "c9dff983dc7f899d99c1a8ea257a10b4",
"assets/assets/images/create_user.svg": "6842cd65f718543e0c5ef2062243877b",
"assets/assets/images/custom_update.svg": "5536a0c332d162433ff90587eb380519",
"assets/assets/images/fa-solid_male.svg": "290323fd545a420dcc48319c159a3fcf",
"assets/assets/images/inactive_employees.svg": "32521abca409a30115cf0fb4fe271938",
"assets/assets/images/welfare_check.svg": "ce23237d50a359d40bbe5a4ffa5de2f3",
"assets/assets/images/placeholderimg.svg": "1fdca4f092b714ff4722f2371fb8ed10",
"assets/assets/images/active_employees.svg": "ced9333063b4ad190d92e8a3a47adb75",
"assets/assets/images/frame.svg": "f73c4564c45c489a38361a500e4955d2",
"assets/assets/images/create_user_splash.svg": "1a2a0cce88fa5fc61c0db282a5da1d6c",
"assets/assets/images/personalcard.svg": "26e42822f788433844ee1dc68fba6ff8",
"assets/assets/images/profile.svg": "e7194364c05226f0e54ffea2a7d50087",
"assets/assets/images/total_employees.svg": "b559a7851f04f65cb69e18ba00e6e083",
"assets/assets/images/calendar.svg": "5a512ffd607f6c023a08cf9f5910b35e",
"assets/assets/images/g4g_logo_small.png": "ff7109466b1477b0abb9d082ed3d9d61",
"assets/assets/images/fa-solid_female.svg": "b27ef34c76035df20d3b2355d95f4b2b",
"assets/assets/images/menu.svg": "259b27c6aca5441e8bdbaa5f916c6b3c",
"assets/assets/fonts/LexendDeca-VariableFont_wght.ttf": "6f4502afcb0f6c55a55da44f6e81cf89",
"assets/assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
