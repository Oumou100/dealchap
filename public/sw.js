if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let r={};const t=e=>s(e,c),o={module:{uri:c},exports:r,require:t};a[c]=Promise.all(i.map((e=>o[e]||t(e)))).then((e=>(n(...e),r)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"34967440b36972f4a94e16b973f3cc70"},{url:"/_next/static/4JIKfaMYoH-8gbBBiu05R/_buildManifest.js",revision:"6310079bf1ae7bebeb6a2135896e4564"},{url:"/_next/static/4JIKfaMYoH-8gbBBiu05R/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/00cbbcb7-26de9b81fa1cac6c.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/07115393-693cfe72609f96d9.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/12038df7-fa8637ac54f497f4.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/13-56cf4361bb74d30c.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/1793-b11c619001004ba3.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/2033-3e6bcef93bc14ad7.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/2117-8e51260cf585bad1.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/2891-6cc0e35b41e1f23d.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/2979.6f6f1618e07b7dfb.js",revision:"6f6f1618e07b7dfb"},{url:"/_next/static/chunks/3075-948a02084c5ee876.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/3145-040b090e69add434.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/3377-5c1e7147fa000766.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/3382-18c43f7e1cee4bf5.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/342-2bf095b7f3739bf5.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/3464-56dcb7e21daef198.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/3627521c-7a7f1bddef5c09c1.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/3702-ec3772da13004473.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/39209d7c-483b440986b4621b.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/396-857089bc3746f6b9.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/4014-d3871f59b0d1f814.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/4110-fc8c758cb5736ae2.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/41ade5dc-a6901775212c8479.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/4490-d107b10b93d44590.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/4495-f99bd500863a4683.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/48507feb-9049072d0135e843.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/4851-4e1183e68da925d7.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/4858.7e5771b07fea0510.js",revision:"7e5771b07fea0510"},{url:"/_next/static/chunks/4b494101-321a14e243ae9115.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/4e6af11a-02f0dcb307650d86.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/4f53ad1b-c9e14318d64b244a.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/4f9d9cd8-665dd93526d065c4.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/5007-76f7019e1ceca3e8.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/5017-d6644953a95c7006.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/5024-dbeb1dcf253c880b.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/505-afb6e66337a08111.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/5418-dcfdc3732f701d90.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/5570-ae1b514797f92d28.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/5691.df78c5d1541e208f.js",revision:"df78c5d1541e208f"},{url:"/_next/static/chunks/58.cc3266a5b5622028.js",revision:"cc3266a5b5622028"},{url:"/_next/static/chunks/5847-b290466ccc64e227.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/6210-ff148e3b355b3cd4.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/6577-778bb34153efda27.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/6680-4a1cc3ea7c57e0f6.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/6738.1c3b920c618702fd.js",revision:"1c3b920c618702fd"},{url:"/_next/static/chunks/6857-71bb3695ea3d63ab.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/7074-e3daaf6a3573f669.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/7341.22caac6f1c902bfd.js",revision:"22caac6f1c902bfd"},{url:"/_next/static/chunks/737dfa3e-9b3a380c9ff8d19b.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/7764.470b968d85375ced.js",revision:"470b968d85375ced"},{url:"/_next/static/chunks/7833.20a0d4f49383a543.js",revision:"20a0d4f49383a543"},{url:"/_next/static/chunks/7929-bf6bb1fdc56f2f81.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/7973-aa0516a0eadddc54.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/8062-39c2d574a073ca17.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/8088-e396ec108429fc50.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/8508-80b95070c3382cbf.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/8dc5345f-53698843f7e77207.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/8e68d877-b8307ba31c296bbf.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/9081a741-f9ff43b725211682.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/9179-f6eea8860a737a53.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/93854f56-34f72deecf39b020.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/9794-387fba3bd1a2819f.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/98916abf.da5ae2ce32d37fdf.js",revision:"da5ae2ce32d37fdf"},{url:"/_next/static/chunks/9967-44557c43345df4b2.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/a63740d3-39c560269a952c32.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/app/_not-found/page-f7931a9da2ac4330.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/app/about-us/page-d0d13737e7b2678c.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/app/ad-listing/page-dccdcd04dcc31686.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/app/ads/page-418a8a5ef2cef3b1.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/app/blogs/%5Bslug%5D/page-3f9c678c3a661618.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/app/blogs/page-698369c17b9ef10e.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/app/category/%5B%5B...slug%5D%5D/page-97a1bdf4140ca187.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/app/chat/page-5ba423209a6a500a.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/app/contact-us/page-c21d8baf46d61e7d.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/app/edit-listing/%5Bslug%5D/page-45017120bd105d6e.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/app/error-d0cb2fa9298b061b.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/app/faqs/page-a420d8b939694952.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/app/favourites/page-becc71454d8eb7ae.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/app/featured-sections/%5Bslug%5D/page-b19d2b08a7118644.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/app/home/page-cb5a89570dee8146.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/app/layout-efc057015c7a5379.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/app/my-listing/%5Bslug%5D/page-9deca96234450b93.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/app/not-found-1577ba79a2e62d95.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/app/notifications/page-00ead848a621dc75.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/app/page-d0ec56bc1011a9eb.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/app/privacy-policy/page-9fb3990dbb1e9f15.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/app/product-details/%5Bslug%5D/page-9b6897b835365c20.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/app/products/page-6a75fa8eb1981166.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/app/profile/edit-profile/page-c9d1610a6cf80846.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/app/seller/%5Bid%5D/page-31909dce78f668dc.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/app/subscription/page-f8ae94bac639ecff.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/app/terms-and-condition/page-db2c15d5f57c9d95.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/app/transactions/page-543fc78685e596c2.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/app/user-subscription/page-59be73dd7331e3b3.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/app/user-verification/page-aa9518b3f29d864a.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/app/user/page-c5de68bfd526bf32.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/b5c10047-ced7b06d0bdc79c8.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/bc9c3264-baa2c8007d4641d9.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/d441faa4-4b5bc049a0f9d6f6.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/d52199b0-fc60119d74663eb5.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/e416a3ff-98398f68e4cf5f4e.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/e685ae08-60292ba64c89dfec.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/ec3863c0-797acc1926a4b66d.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/fd9d1056-7ab3495e3583630f.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/framework-08aa667e5202eed8.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/main-5f1258e78c6314b1.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/main-app-799d32d369d300b4.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/pages/_app-3c9ca398d360b709.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/pages/_error-cf5ca766ac8f493f.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/reactPlayerDailyMotion.4ce428e08da56f81.js",revision:"4ce428e08da56f81"},{url:"/_next/static/chunks/reactPlayerFacebook.6979e1333a813b2f.js",revision:"6979e1333a813b2f"},{url:"/_next/static/chunks/reactPlayerFilePlayer.e6d2f3c959f28902.js",revision:"e6d2f3c959f28902"},{url:"/_next/static/chunks/reactPlayerKaltura.eaab6ce37fc042fc.js",revision:"eaab6ce37fc042fc"},{url:"/_next/static/chunks/reactPlayerMixcloud.ef2fad3b53af30de.js",revision:"ef2fad3b53af30de"},{url:"/_next/static/chunks/reactPlayerMux.68eaedd8a8e83a03.js",revision:"68eaedd8a8e83a03"},{url:"/_next/static/chunks/reactPlayerPreview.3288e310f09a775e.js",revision:"3288e310f09a775e"},{url:"/_next/static/chunks/reactPlayerSoundCloud.2ebfd388e85a0b77.js",revision:"2ebfd388e85a0b77"},{url:"/_next/static/chunks/reactPlayerStreamable.969e004edd1ba6b0.js",revision:"969e004edd1ba6b0"},{url:"/_next/static/chunks/reactPlayerTwitch.8983e9ea06739e4b.js",revision:"8983e9ea06739e4b"},{url:"/_next/static/chunks/reactPlayerVidyard.30aeaa5727b7e224.js",revision:"30aeaa5727b7e224"},{url:"/_next/static/chunks/reactPlayerVimeo.fdfc8213d8c50230.js",revision:"fdfc8213d8c50230"},{url:"/_next/static/chunks/reactPlayerWistia.d8da9ed3d80f4ac6.js",revision:"d8da9ed3d80f4ac6"},{url:"/_next/static/chunks/reactPlayerYouTube.04ada298e347d23f.js",revision:"04ada298e347d23f"},{url:"/_next/static/chunks/webpack-7ab4c406dfcd5801.js",revision:"4JIKfaMYoH-8gbBBiu05R"},{url:"/_next/static/css/0fdd3f077818801d.css",revision:"0fdd3f077818801d"},{url:"/_next/static/css/20720a659c31249d.css",revision:"20720a659c31249d"},{url:"/_next/static/css/2e2751e26baf52dd.css",revision:"2e2751e26baf52dd"},{url:"/_next/static/css/72f4262bf451051e.css",revision:"72f4262bf451051e"},{url:"/_next/static/css/7c25ef1d5cdc2eda.css",revision:"7c25ef1d5cdc2eda"},{url:"/_next/static/css/8d306775f604a92b.css",revision:"8d306775f604a92b"},{url:"/_next/static/css/9bc1ffd3896e0178.css",revision:"9bc1ffd3896e0178"},{url:"/_next/static/css/d3e383b9ef67ddcb.css",revision:"d3e383b9ef67ddcb"},{url:"/_next/static/media/Ad 1.71e154d5.png",revision:"01d1b6666cbab2d12fa0c59ed5da64c3"},{url:"/_next/static/media/Arrow.8e12fd8a.svg",revision:"635efa3f93806f2d07c6a4f85dc47f4b"},{url:"/_next/static/media/Google Download.1293fe79.svg",revision:"8006dcf4df9c2ed5bc9f6492ccb63906"},{url:"/_next/static/media/Image1.064992ea.svg",revision:"084761c2ba7fc338ff7dc40f6e057b64"},{url:"/_next/static/media/Image2.6a1f96ce.svg",revision:"3671f586fb679fe4c465b91adee516e9"},{url:"/_next/static/media/Image3.de51bbfc.svg",revision:"e33b7813bc4c16c128ba6ee06822c013"},{url:"/_next/static/media/Image4.76914e53.svg",revision:"33217402a6078932e860538fd99d25ff"},{url:"/_next/static/media/Image5.d2373dad.svg",revision:"2cde17d59c50bfb6255dc8c474996743"},{url:"/_next/static/media/Image6.d576ecc1.svg",revision:"8fc03c52f39ee36769fbabdf37d3a038"},{url:"/_next/static/media/Mail Verification.59a7963a.svg",revision:"4c2c3036e19f966cfb46518728540fa8"},{url:"/_next/static/media/NewBG.9e00bb52.png",revision:"1af4807bb1c6c1d7e3cc0f88db923fed"},{url:"/_next/static/media/Transperant_Placeholder.fd0f78b7.png",revision:"c85ed5ed7249fbd0bb05b423e2aa6e25"},{url:"/_next/static/media/ad_icon.29c43f45.svg",revision:"f52512cc6893f260a056ba98ecd10459"},{url:"/_next/static/media/classified_Image2.7588ed4c.svg",revision:"ad61a2fd2fa7330cef1c5bdd3672635b"},{url:"/_next/static/media/iOS Download.8652adfe.svg",revision:"86a403e2a0d995a49a6decff9fb93a36"},{url:"/_next/static/media/ic_paystack.fcbc549d.png",revision:"9534ad5f50c989b1bbc8641573610a5f"},{url:"/_next/static/media/ic_razorpay.c64b0db0.png",revision:"f83889926baea29a97c01d14f5ad9d21"},{url:"/_next/static/media/ic_stripe.d9bc4391.png",revision:"e469fa655e71fd9ca8de39e339e924ba"},{url:"/_next/static/media/layers-2x.9859cd12.png",revision:"9859cd12"},{url:"/_next/static/media/layers.ef6db872.png",revision:"ef6db872"},{url:"/_next/static/media/marker-icon.d577052a.png",revision:"d577052a"},{url:"/_next/static/media/no_data_found_illustrator.8156ec09.svg",revision:"42aa41514d9646183c92ad454fe457fb"},{url:"/_next/static/media/something_went_wrong.d5c2a00c.svg",revision:"d7efe7b4933d627d49ef0b3c4ead30a0"},{url:"/_next/static/media/true.6053dcb7.gif",revision:"5fd3e19372e62de0c7530cd7fcbdcafb"},{url:"/android/android-launchericon-144-144.png",revision:"b160fde0f0ee17081395c0e3c8e8914b"},{url:"/android/android-launchericon-192-192.png",revision:"577eaadf3ef1d34b4da235d042d6fc22"},{url:"/android/android-launchericon-48-48.png",revision:"50e6a87d14bc02704574e68f207b26cf"},{url:"/android/android-launchericon-512-512.png",revision:"2e396c8cba859187f607f2940a8ae698"},{url:"/android/android-launchericon-72-72.png",revision:"6496a4d3527274fcad5d5f473289264b"},{url:"/android/android-launchericon-96-96.png",revision:"4adef42fbaad8f770e58e7d268382a7f"},{url:"/assets/Ad 1.png",revision:"01d1b6666cbab2d12fa0c59ed5da64c3"},{url:"/assets/Arrow.svg",revision:"635efa3f93806f2d07c6a4f85dc47f4b"},{url:"/assets/Dress.svg",revision:"847dc0e5561b78a79081b826b82fd54e"},{url:"/assets/Google Download.svg",revision:"8006dcf4df9c2ed5bc9f6492ccb63906"},{url:"/assets/Image1.svg",revision:"084761c2ba7fc338ff7dc40f6e057b64"},{url:"/assets/Image2.svg",revision:"3671f586fb679fe4c465b91adee516e9"},{url:"/assets/Image3.svg",revision:"e33b7813bc4c16c128ba6ee06822c013"},{url:"/assets/Image4.svg",revision:"33217402a6078932e860538fd99d25ff"},{url:"/assets/Image5.svg",revision:"2cde17d59c50bfb6255dc8c474996743"},{url:"/assets/Image6.svg",revision:"8fc03c52f39ee36769fbabdf37d3a038"},{url:"/assets/Mail Verification.svg",revision:"4c2c3036e19f966cfb46518728540fa8"},{url:"/assets/NewBG.png",revision:"1af4807bb1c6c1d7e3cc0f88db923fed"},{url:"/assets/Transperant_Placeholder.png",revision:"c85ed5ed7249fbd0bb05b423e2aa6e25"},{url:"/assets/ad_icon.svg",revision:"f52512cc6893f260a056ba98ecd10459"},{url:"/assets/ad_image.png",revision:"ea76708a7f0396fd7a9af23738c6b536"},{url:"/assets/apps.svg",revision:"aee0a84f15a93ad00a03ffd72bc07d8b"},{url:"/assets/benjamin_smith.png",revision:"b9374637ea972acfc4e43709cd1c35e9"},{url:"/assets/classified_Image1.svg",revision:"7f3d955c746ba2ba4d1d776d109760ad"},{url:"/assets/classified_Image2.svg",revision:"ad61a2fd2fa7330cef1c5bdd3672635b"},{url:"/assets/classified_Image3.svg",revision:"f072edbdd058000981fcaea7d3cd059b"},{url:"/assets/classified_Image4.svg",revision:"68553f0c027fda7a27246ffd83ffe479"},{url:"/assets/iOS Download.svg",revision:"86a403e2a0d995a49a6decff9fb93a36"},{url:"/assets/ic_paystack.png",revision:"9534ad5f50c989b1bbc8641573610a5f"},{url:"/assets/ic_razorpay.png",revision:"f83889926baea29a97c01d14f5ad9d21"},{url:"/assets/ic_stripe.png",revision:"e469fa655e71fd9ca8de39e339e924ba"},{url:"/assets/no_data_found_illustrator.svg",revision:"42aa41514d9646183c92ad454fe457fb"},{url:"/assets/no_internet_illustrator (1).svg",revision:"eab9d8a6f267daa2e9d71a34907efa43"},{url:"/assets/something_went_wrong (3).svg",revision:"d7efe7b4933d627d49ef0b3c4ead30a0"},{url:"/assets/something_went_wrong.svg",revision:"d7efe7b4933d627d49ef0b3c4ead30a0"},{url:"/assets/telegram.svg",revision:"4746861fca1096abcf1e4a345dd08a0c"},{url:"/assets/true.gif",revision:"5fd3e19372e62de0c7530cd7fcbdcafb"},{url:"/assets/user.svg",revision:"f7ec4f03d768e2bad2cb634a27a34fc8"},{url:"/css/style.css",revision:"16a9447649b32c870dc17222cb6c814a"},{url:"/favicon.ico",revision:"bea12c0e2695c017191cfca718442821"},{url:"/firebase-messaging-sw.js",revision:"2a2814a7326fb6715141e1af3e64bbdf"},{url:"/flags/burkina.png",revision:"0feacad904f44bbbd90e196fd7701023"},{url:"/flags/cote-ivoire.png",revision:"bec5ca409c39697acbbdee1281912c81"},{url:"/flags/cote_ivoire.svg",revision:"880d0076271a263b032606ec255f0ef7"},{url:"/flags/mali.png",revision:"9996f636668571de43d19d702d0f83c3"},{url:"/flags/senegal.png",revision:"ba46c476f508f93a79e5834fc5de25ee"},{url:"/flags/togo.png",revision:"39196c06db61253bcea4219c26cc7925"},{url:"/ios/100.png",revision:"bc3c8f8cef83245912c8202a9366388e"},{url:"/ios/1024.png",revision:"5d94237dfb9ac03353ec7739bb040dd5"},{url:"/ios/114.png",revision:"f37cccf0e374735f60ebda8ad4480263"},{url:"/ios/120.png",revision:"63f4a517e1059cde163058ebf1cb4ee4"},{url:"/ios/128.png",revision:"32c133ebeff5a6b29a0c37d3e8efe2df"},{url:"/ios/144.png",revision:"b160fde0f0ee17081395c0e3c8e8914b"},{url:"/ios/152.png",revision:"f65dabb2ff1e2eb785545af4f65b77f1"},{url:"/ios/16.png",revision:"aaf3f82653ab1e1f03a95604ac94ed1d"},{url:"/ios/167.png",revision:"4a7386a7f564a0d9f879d3744c18cadc"},{url:"/ios/180.png",revision:"652d57d506a5faebf6bb05cb3a5c98ff"},{url:"/ios/192.png",revision:"577eaadf3ef1d34b4da235d042d6fc22"},{url:"/ios/20.png",revision:"9001f6d881d7e3276b8b92b738126857"},{url:"/ios/256.png",revision:"0f8cf3770dd01484988e56660d95c3d7"},{url:"/ios/29.png",revision:"9796c6a403dd1f318d6fa214c228cac2"},{url:"/ios/32.png",revision:"3b17d4e54bf063cf175e5f76ee9d0dc0"},{url:"/ios/40.png",revision:"1313999973595d083852f67dcf026fa7"},{url:"/ios/50.png",revision:"3fe5cbea921f4b7be894568c5a32b055"},{url:"/ios/512.png",revision:"2e396c8cba859187f607f2940a8ae698"},{url:"/ios/57.png",revision:"62cfc418303ca1bd337c12384be59307"},{url:"/ios/58.png",revision:"550ac921ed645fc8a0c696dc4bbbb3b3"},{url:"/ios/60.png",revision:"e7999ce63befeaae3a87760746219d5e"},{url:"/ios/64.png",revision:"03edf6e8ebefebe4d6023db437ec8829"},{url:"/ios/72.png",revision:"6496a4d3527274fcad5d5f473289264b"},{url:"/ios/76.png",revision:"e12bb54072694710444858cc2684587e"},{url:"/ios/80.png",revision:"114afcdccd542fb91965107ed1c3315a"},{url:"/ios/87.png",revision:"88af6241e501c2ffe21ed3d67250f4f8"},{url:"/manifest.json",revision:"093bda41970e593498ea27a3c3363a63"},{url:"/sitemap.xml",revision:"994d3d22df071d7c3e3d6102e0263bcb"},{url:"/windows11/LargeTile.scale-100.png",revision:"2e7ee09331bec5b13bbe388a2fa7ade1"},{url:"/windows11/LargeTile.scale-125.png",revision:"4dd8370fee376e6c6ff91ec01b43fddb"},{url:"/windows11/LargeTile.scale-150.png",revision:"6c182bfd3d8f25010f743e032c127158"},{url:"/windows11/LargeTile.scale-200.png",revision:"7379952f06873b8b98a03a0980a5546a"},{url:"/windows11/LargeTile.scale-400.png",revision:"2799ddfb4c5f84fb4eadfd6fa7c71bbc"},{url:"/windows11/SmallTile.scale-100.png",revision:"5cfc96989e6127405b282f410bcfb50b"},{url:"/windows11/SmallTile.scale-125.png",revision:"ec9039680ce5bb838d279903f3b7053e"},{url:"/windows11/SmallTile.scale-150.png",revision:"cfc2514c837ae7b0ba668dfa8f5f305a"},{url:"/windows11/SmallTile.scale-200.png",revision:"3ea0f4ba1b763edec31b1afbb7ec7de1"},{url:"/windows11/SmallTile.scale-400.png",revision:"25be1ea71779f51a642114772e2bb6e0"},{url:"/windows11/SplashScreen.scale-100.png",revision:"095c7faec00ab3c8c56041e3199ba7a8"},{url:"/windows11/SplashScreen.scale-125.png",revision:"1af34cd41e6a35916513d6501f077833"},{url:"/windows11/SplashScreen.scale-150.png",revision:"9580947a606a10a47e3205821294026d"},{url:"/windows11/SplashScreen.scale-200.png",revision:"170b637df2248240876c75820a97ac3a"},{url:"/windows11/SplashScreen.scale-400.png",revision:"38343ed8e8334c9988ec0828c43e339f"},{url:"/windows11/Square150x150Logo.scale-100.png",revision:"ba243c34d0bbce5760f8fd6f1f8e3fef"},{url:"/windows11/Square150x150Logo.scale-125.png",revision:"0e4b03ef712e6ef756175d48e0169857"},{url:"/windows11/Square150x150Logo.scale-150.png",revision:"ff01d7b7d43c119727d8bc8a32151575"},{url:"/windows11/Square150x150Logo.scale-200.png",revision:"e52b3b6748b25b63176d1ece1d3a9a08"},{url:"/windows11/Square150x150Logo.scale-400.png",revision:"8b7f5092ef4761acdc0958a6b28012f9"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"fe40906cf440119b930be6a53e495d8a"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"3897c4f1e3a3a71fa2ce2c750fc363fe"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"11b3e0c2103a85ded6a097df26bf9227"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"4e7aaf12fd06ac3a7d497a3893943c3f"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"5dd507b9d9ed14fa418ef2dcede6c363"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"88aba876d9a95764bee218e533646246"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"5f60cd653cf513120babf41f252a8d77"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"01a3c94583fe06789cabe6ce3ae44db7"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"3980f8fd3e50256be2dc020cb124855c"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"9e252bc60b8e045a3e7980fa8b3d3e82"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"77f4dd9d91643e6478b782d2a8cda2de"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"3f3a970aa3989816e238fcc615777f54"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"652b933c3bda943995037a400603958a"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"907c1a90f2a37d425286fdee18309989"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"a2ddcbe9cc2772cd2d082f2e97e8f604"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"fe40906cf440119b930be6a53e495d8a"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"3897c4f1e3a3a71fa2ce2c750fc363fe"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"11b3e0c2103a85ded6a097df26bf9227"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"4e7aaf12fd06ac3a7d497a3893943c3f"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"5dd507b9d9ed14fa418ef2dcede6c363"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"88aba876d9a95764bee218e533646246"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"5f60cd653cf513120babf41f252a8d77"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"01a3c94583fe06789cabe6ce3ae44db7"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"3980f8fd3e50256be2dc020cb124855c"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"9e252bc60b8e045a3e7980fa8b3d3e82"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"77f4dd9d91643e6478b782d2a8cda2de"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"3f3a970aa3989816e238fcc615777f54"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"652b933c3bda943995037a400603958a"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"907c1a90f2a37d425286fdee18309989"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"a2ddcbe9cc2772cd2d082f2e97e8f604"},{url:"/windows11/Square44x44Logo.scale-100.png",revision:"3980f8fd3e50256be2dc020cb124855c"},{url:"/windows11/Square44x44Logo.scale-125.png",revision:"9a6e2a7c09934f2c7b6e716d9d874bc2"},{url:"/windows11/Square44x44Logo.scale-150.png",revision:"24883682cd3fe6a74a2d9f2c7a0a9c5c"},{url:"/windows11/Square44x44Logo.scale-200.png",revision:"19a466a2ed2a3c51623b5fe848a2a24c"},{url:"/windows11/Square44x44Logo.scale-400.png",revision:"dcb2407bd2ceaa1dadc36a78530edfb6"},{url:"/windows11/Square44x44Logo.targetsize-16.png",revision:"fe40906cf440119b930be6a53e495d8a"},{url:"/windows11/Square44x44Logo.targetsize-20.png",revision:"3897c4f1e3a3a71fa2ce2c750fc363fe"},{url:"/windows11/Square44x44Logo.targetsize-24.png",revision:"11b3e0c2103a85ded6a097df26bf9227"},{url:"/windows11/Square44x44Logo.targetsize-256.png",revision:"4e7aaf12fd06ac3a7d497a3893943c3f"},{url:"/windows11/Square44x44Logo.targetsize-30.png",revision:"5dd507b9d9ed14fa418ef2dcede6c363"},{url:"/windows11/Square44x44Logo.targetsize-32.png",revision:"88aba876d9a95764bee218e533646246"},{url:"/windows11/Square44x44Logo.targetsize-36.png",revision:"5f60cd653cf513120babf41f252a8d77"},{url:"/windows11/Square44x44Logo.targetsize-40.png",revision:"01a3c94583fe06789cabe6ce3ae44db7"},{url:"/windows11/Square44x44Logo.targetsize-44.png",revision:"3980f8fd3e50256be2dc020cb124855c"},{url:"/windows11/Square44x44Logo.targetsize-48.png",revision:"9e252bc60b8e045a3e7980fa8b3d3e82"},{url:"/windows11/Square44x44Logo.targetsize-60.png",revision:"77f4dd9d91643e6478b782d2a8cda2de"},{url:"/windows11/Square44x44Logo.targetsize-64.png",revision:"3f3a970aa3989816e238fcc615777f54"},{url:"/windows11/Square44x44Logo.targetsize-72.png",revision:"652b933c3bda943995037a400603958a"},{url:"/windows11/Square44x44Logo.targetsize-80.png",revision:"907c1a90f2a37d425286fdee18309989"},{url:"/windows11/Square44x44Logo.targetsize-96.png",revision:"a2ddcbe9cc2772cd2d082f2e97e8f604"},{url:"/windows11/StoreLogo.scale-100.png",revision:"3fe5cbea921f4b7be894568c5a32b055"},{url:"/windows11/StoreLogo.scale-125.png",revision:"12daeb798fb8dc99a7a1f09ab4456592"},{url:"/windows11/StoreLogo.scale-150.png",revision:"b7d648a7916a9af345752745fc33929f"},{url:"/windows11/StoreLogo.scale-200.png",revision:"bc3c8f8cef83245912c8202a9366388e"},{url:"/windows11/StoreLogo.scale-400.png",revision:"045fb6506a27d54f67066953815726c8"},{url:"/windows11/Wide310x150Logo.scale-100.png",revision:"744f78dcfc7a44e9f43d7126fb17b675"},{url:"/windows11/Wide310x150Logo.scale-125.png",revision:"b3f32c2525129c49f97b45c9aa90c16a"},{url:"/windows11/Wide310x150Logo.scale-150.png",revision:"19fa09d8dd99f86c8fe62f75ffbc2409"},{url:"/windows11/Wide310x150Logo.scale-200.png",revision:"095c7faec00ab3c8c56041e3199ba7a8"},{url:"/windows11/Wide310x150Logo.scale-400.png",revision:"170b637df2248240876c75820a97ac3a"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
