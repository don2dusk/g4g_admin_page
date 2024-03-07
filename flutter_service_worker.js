'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9a3a252ca68622118e588abeec47deaa",
"index.html": "76af961ad5fe24d8fd93ed5234ef5b62",
"/": "76af961ad5fe24d8fd93ed5234ef5b62",
"main.dart.js": "73f06e2b76b8bc8512db2b9807dd4043",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "ff7109466b1477b0abb9d082ed3d9d61",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c81d3f2d60f08ddea77a5e13920b3cd1",
".git/config": "62c2e66874b39e20d2b3037a0552ff2d",
".git/objects/59/8ff144e8ef24c8488295141a4fe82b274123e3": "1e481f44e0a5b94bd80aa2a93753c14f",
".git/objects/66/601209d5e0409a23dae8488dd2d62a7a4b8371": "fc6fca7d15026465e03bb9b83bda42b7",
".git/objects/3e/1360d74beb67adae0cb7ebff2d21c249c63788": "af849c5ccf6a33de8ac2c12e4a8254fd",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/57/9e1e53eaa824f5b46c644837a306f78fe823a4": "8f47b31c3fa36244191117a8a6fa6044",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/32/e69fade6eae8e96300abba18066bad3e85e207": "d319bc1344752887a631e08e213ee9db",
".git/objects/69/6ec8edb79e406a0240e51ad9375b7738d565c5": "a01aa474526330f7156d9743a9439a88",
".git/objects/3d/0784d0d4a93423e2820c7f46092891b5fa10e6": "2ee03c1a3209c83839d8e7d76e9d48cb",
".git/objects/3d/1fe1e84739ee59da93a2e03db674f3f3105608": "ea8bd7c7eeffe1b6b3f9e446eda66083",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/34/e22aca4bb2822ef35c64f28c3eee1c3f3b37b3": "c2be0d2c2ee5683ced22fe9ad07b97a8",
".git/objects/34/b16bd0f93e550e8cbffc6f2b4c7b88986e2c91": "e57694810c586699d774232a6f1cf265",
".git/objects/33/a4a4a1e980b83f74a190168d68adcb25085d0e": "1e7557302c37786fe4dd1ab14da185fe",
".git/objects/33/aa20105c71b2d48789a95725d2718224cc59a5": "b04f737856a22fe1ffe371c9b9174096",
".git/objects/9d/2ed91c170cc8f0650c9bd605ec281994260c4f": "c042822f37ab761cd8f595bd9a39aa05",
".git/objects/bb/7f155bbd1855fcb579137ca86f77ab52bc67f0": "3297c25d7295fa0a9c73185e76effc27",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/0940e1141affa035ba56b2d0ec72968201a0b9": "7db2acafa44d1ef06687e15bbfae9b40",
".git/objects/a5/14461a6b33a93422db2ac61e424b095f66f9fc": "30c7009a9d11372d2f67e63652e11c6e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/a0bb74fa0e6914fdaa1912b06accf065a7fcd7": "02ee142f471f33c1cb0705d7cc4a08e1",
".git/objects/d8/6dfe906ad7adf586982a317d592bda28f752b4": "ef7808a97518617b918ef49fb9ae9797",
".git/objects/f3/bc88720e0b4eddb3ccad7523ccc94251bf112c": "e13bb447314e4befeb0d0d57d9c69750",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/86bf1d56209631a4e339ef1d7501660477e1c1": "338dc23d2bfa46dab5615c2707a1854d",
".git/objects/f5/2927c0ee6bd6dc22835c36d63969d0cc931143": "573a140fb52453c013bcd4e49a40410a",
".git/objects/e3/d7da49a6dbfc473fbe9a7feeccad6fb6c38b2e": "93f24316ed8719ee9dfdfe4956e18277",
".git/objects/fb/5a90ce2ff317e4c6fff57781627383dba25686": "b85f1ba5bb80c71c66dcdaaa0393f0ba",
".git/objects/ec/2b8946e142d596438b6fdd84b9a9f6149bc51f": "8a79b47bc488d398521831a4edf9ccf0",
".git/objects/4e/3545aeb7e29d30f6e20c32a6945122ee8ef6e6": "548d030d72b3ff0d83059f4aa125c33a",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/29/d7cd1ee9aa2e279a7404ce5336cb2ada617f75": "644cf6e4d55f339e2bbbefa74bfee48b",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/74/fce7ebedfd2c5672db4da95384e96405f8ab30": "a254dbd92c883ac02f36a9e37a114f9e",
".git/objects/1a/d6d56fdec74f3a05aeb07740ec32f121e272e7": "0627c6e79e798952f1002b251320026c",
".git/objects/1a/5b4c7fccfce99093ff02b057a24de107cd39fa": "c6f535bb53bd14f283ad0a23e1b66178",
".git/objects/26/f081a429885767ae50bca95d4e1cf05d9e6a2b": "fd9552f70545f230f05bd7473404b5c3",
".git/objects/21/a8f40b771f09c304d9e284481da7e1fdf35590": "93577f7076fa2803556cfd570e33ec4b",
".git/objects/44/181f7c207b23462880eba1b2dd92ec2380383f": "17fb0ac9d28816f511c9c26a4a26d36a",
".git/objects/2a/c9fdb666b4f639f920a7e8e99605fa3297c14f": "3c9fb6a4e6fe45192c354b09ccb2d283",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/aacee405653c0fba93b4d21bfb2ca50718c0e3": "5436681bf09c9f100ca48b4bc8fd6063",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/9f/695c6a587a02a0380d516a7c5637428ba05792": "5f6f944faef2b62329ffa53c3876cae6",
".git/objects/9f/78964833550391a366fd2279c95f4f709311b0": "3e5c168ac5511ab15bf9a24dc52d84fb",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/00/18f535545d5c93c727910d29fbaf4984b82599": "20d404aac5e2407dd1a288061657d43a",
".git/objects/00/1a718a556e8deb7715651e4ae6dfc155549105": "7417d50e2cbf6154ff96ed8f9e01646b",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/96/4f45490795c383021df63c1995dadde936301f": "f254bdb1d12dfbfd4b029c77f2b6caa6",
".git/objects/98/10c06f78cd00f3f86d8f376a83127400ab7ee5": "e0eb7b93bc5b94cf42fd5cf21e1951ff",
".git/objects/53/7e80b10bd532a27bf013a9646c21f813cd3378": "f261762841c55a68a329eb743fe4e070",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5e/784551611adb3dd4abb2fa50ae39b1de79fdb4": "f15bc825b2677f8ee147a86db66b1ac1",
".git/objects/6c/8d1d1678a81734f25a2723826199fc726422c0": "0863bec2b2291ca63919e99990275a69",
".git/objects/99/1c8979d168007b04f944492bb3d263764319ef": "c02590c7b7e8b8eada25f6c107e7ead2",
".git/objects/0a/74b19c4e1df6cf2d0bd44c0cf64eb8d6c918ce": "bcd00bcc2f6e8d5cb177d163fb933c60",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/dc/0fbadf323bb33daa633e113595db2a58f1912f": "d71aebcb9dd5eab7de31e3cb20cbf098",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/640cfacd674c32b969d97daf5e59c311c92350": "1ad161eab72f82a27d4e8634ab0f15ce",
".git/objects/ea/4ed48c15bd9124ae89ed20825e31e5591d577c": "53f541b8f2668fc4164ff2d0aa2b06de",
".git/objects/cc/8bd667052fc27132fea38a282bdbccd9324b9b": "c4a69ca9562fe35152917a08a39e47c5",
".git/objects/cc/bc84ce1cdbd89b6f70504d84c8456d5f66c18d": "141ae9e0b8836593dff266f375b7f05d",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/95baf7d1acf9843259b4cf6673c53b0c7d8876": "2fbd89dd3a124d423acf75ffeda5d056",
".git/objects/c5/5e13b22a7745c5d6dd8348542afe43efe811d6": "d6683f59df13bb6b3710be0235f18750",
".git/objects/c2/94d1279f68d61cfc5e771e640c12b5e44594f5": "b4beced20d4b51084914cc26168d3e49",
".git/objects/f1/491c6de5c193bab298398cb817deed55af62a5": "c6fb64e67920767274dd190cfbda46b9",
".git/objects/e0/6c8c3105d52114ca0fbbcb57e9ac6dda4eb5db": "486d29186d00e21f67f1fb8f88df52ee",
".git/objects/e0/82cca6deb8b20084ade755771bd0c9184ae40b": "e5b1d454d4ec1c4d0d6f07fea34a1885",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/1e/334f5554ac54b4aea2873261c8e7bd69f01c3b": "26109bed726c92285d2b0295a69fc8fa",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/71/c0f995ee64396f29a3d9ef283b5050f45d6e0f": "aa69ae6032786d8c915bfc9bd1c64c28",
".git/objects/76/bda7ad1402e971378800ec6508dae7d6bed065": "ae9b41bd66a16caa45d23ad0a35d5626",
".git/objects/40/f1694ba4c97cdfaaa99a6459feab9a24614586": "aca2ed34561ba1ba8fc7d7674cd50113",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/78/a293bc6bd3da0c8a9de4a799ce5878bee8db94": "467200215ee41a386e7fd48461369339",
".git/objects/7f/ddba1c28d75ebc9293418f04ef24c8a8ee0fa9": "9cade0ffdba89fbf290e142ec23d4fac",
".git/objects/8e/566d2dc719150b47ce5c59401c9ed47f4dbe43": "272c856bbb0a6919505aedfd1d615a44",
".git/objects/22/91a622c315431c13532f3b685e26d0db8dcb84": "78dccaf5ee4adeabfb84cc1469bb728c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "00de6dd2fa1b83b9791233cc42adce24",
".git/logs/refs/heads/main": "00de6dd2fa1b83b9791233cc42adce24",
".git/logs/refs/remotes/origin/main": "ccef298e6a724578e12a015fd108da22",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "7257fbdb23cb13d5226937798c4b9d85",
".git/refs/remotes/origin/main": "7257fbdb23cb13d5226937798c4b9d85",
".git/index": "2ad319fd62d513bc116a61aab9a07f54",
".git/COMMIT_EDITMSG": "81f28522db473d9139d0d4fb8d614063",
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
