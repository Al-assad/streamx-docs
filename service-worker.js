if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,c)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=c(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-a3b6cda6"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.e61378b1.css",revision:"38aaf91e04276e218defe35b6552efe0"},{url:"assets/css/animate.css",revision:"cb67371414710491ee3730390d1efb33"},{url:"assets/css/bootstrap.min.css",revision:"3ce80ec8f6f00655adb198002e06d752"},{url:"assets/css/classy-nav.min.css",revision:"eef0271c1733138a437d41f80a39b4e8"},{url:"assets/css/font-awesome.min.css",revision:"6aab9648885eb15269ad2694cd6215ef"},{url:"assets/css/lineicons.min.css",revision:"dfbff37ef91d2bc14ce9dd1342aad301"},{url:"assets/css/swiper-bundle.css",revision:"c1c35745de56aaa786ce91becf5268cd"},{url:"assets/fonts/classy-fonts-fftrrv.svg",revision:"6b961d058197d5c1a9c75ac326dedbf0"},{url:"assets/fonts/fontawesome-webfont-v=4.7.0.svg",revision:"912ec66d7572ff821749319396470bde"},{url:"assets/fonts/LineIcons-y2l643.svg",revision:"a0ed6adf3563db2c6d93a0f2d4d2929e"},{url:"assets/img/core-img/hero-image.svg",revision:"157a230603e16292c3cb2cadd4c240ac"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/42.a059c770.js",revision:"1aea70aa62604e1fe6fce0d13d2950ea"},{url:"assets/js/43.23aa9fe9.js",revision:"21dcd3ba057147164b12fd409256bf31"},{url:"assets/js/44.461f784d.js",revision:"a2d409b45d87b1af2aadaa762a71a2a3"},{url:"assets/js/45.9f7881a9.js",revision:"857579d98b14413d29f57ec9080bd822"},{url:"assets/js/46.33683b10.js",revision:"301ac0a58fd277fd30172098c2ead70f"},{url:"assets/js/47.a525ada9.js",revision:"bc8808ddbca44e028cd3783771d2b013"},{url:"assets/js/app.a59be9ae.js",revision:"a17fc578acab4afb744d77c2afa47cd6"},{url:"assets/js/jquery.min.js",revision:"2f6b11a7e914718e0290410e85366fe9"},{url:"assets/js/layout-Blog.0402a712.js",revision:"1c4d898a26572d70c8189afa5ecb2fcd"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.3c755216.js",revision:"d75b19d476ddb906c4f600df919d1af5"},{url:"assets/js/layout-Layout.becd9ee4.js",revision:"05d7b4212e543c6ed46a4c31dedf2892"},{url:"assets/js/layout-NotFound.79a4b79f.js",revision:"ed82a466e23857ee274ffee8d8140c24"},{url:"assets/js/layout-Slide.2f19a4c0.js",revision:"0166a82b838a2029a331f351944d901f"},{url:"assets/js/owl.carousel.min.js",revision:"1a2d21fd190503dc08d7b5c082ceb86a"},{url:"assets/js/page--1b6a62f8.067ad2ab.js",revision:"83a2940ef519666e377ba55dc8d1737d"},{url:"assets/js/page--2c4c091a.7e4aaf61.js",revision:"236db1f73b7efef645406ae4f36ca085"},{url:"assets/js/page--3c555584.fcf5e850.js",revision:"6dd04656e0e1cf2d64c755b67e9901ff"},{url:"assets/js/page--409acd44.e7433c70.js",revision:"a0c4fea576349199622168e829949714"},{url:"assets/js/page--4f5a453e.40f14e98.js",revision:"54c423a2fafd7ebc029f413f378c60a5"},{url:"assets/js/page--539c1ce4.d141a9e5.js",revision:"f898399817cae38f8d38a49f4ed4f908"},{url:"assets/js/page-ApacheKafkaConnector.446746a8.js",revision:"bb637cf496d801788b3ff6d4c1c0ee98"},{url:"assets/js/page-ClickhouseConnector.3c2ff7f8.js",revision:"c5ad48e51c0df8765a463eb3893e1142"},{url:"assets/js/page-Document.77571c8f.js",revision:"74aafccee233969c46b1533e8bf80a3b"},{url:"assets/js/page-ElasticsearchConnector.ce7ae99d.js",revision:"610147e9f021177455b0c66f0cbf66c9"},{url:"assets/js/page-FlinkK8s集成支持.3429c67b.js",revision:"7d4cfcd8a0f8553b3900c4b02800a05b"},{url:"assets/js/page-FlinkKubernetesIntegration.55703ebb.js",revision:"8587c3e07c45e23c3f60bd1c57dbf61a"},{url:"assets/js/page-FlinkSQL.a314fae0.js",revision:"dbed4ea98131a905e109a93bcb06e838"},{url:"assets/js/page-HadoopResourceIntegration.8d80e04c.js",revision:"443a9cc4980115a2e5bee4b5c9d704d5"},{url:"assets/js/page-Hadoop资源集成.baef36a9.js",revision:"8fe5ff94cf3560ebb26db88f5abdd367"},{url:"assets/js/page-HttpConnector.5bf8e46e.js",revision:"e0a47e09423a1c79cb708851e8a9ddd6"},{url:"assets/js/page-JdbcConnector.7f5889ba.js",revision:"04dd92c33c4021651995bb28672f208c"},{url:"assets/js/page-K8sPVCUsage.6caa3bf0.js",revision:"99fadfc30254f3a34e3ca08f91806298"},{url:"assets/js/page-K8sPVC资源使用.112bc8c0.js",revision:"3facc5ced8a276dca7930f83e7c1b39d"},{url:"assets/js/page-MongoDbConnector.b0cedbab.js",revision:"8736746bbb160a17aee074934e5f6e54"},{url:"assets/js/page-RedisConnector.cfc52f7d.js",revision:"2c5fadfc4f4d7e6600147716e5474485"},{url:"assets/js/page-安装部署.b8e915fe.js",revision:"4423017e36fae4f9b1859473432cd0df"},{url:"assets/js/page-开发实例.0980ec05.js",revision:"7615f58b665cb18967e063aebb72471e"},{url:"assets/js/page-开发环境.691a790e.js",revision:"8c2056c6e09c274757c6ac86d3d75aa7"},{url:"assets/js/page-快速开始.53f1f26c.js",revision:"549e3e230a5f8b5c23f90ca20e7ee561"},{url:"assets/js/page-文档中心.518a90ac.js",revision:"567ab96c3b15b31b43b189cc3e83b148"},{url:"assets/js/page-框架介绍.0ac0772a.js",revision:"ad19fab51565b40c65597d7118a1741e"},{url:"assets/js/page-编程模型.6793b96f.js",revision:"bb2f21ea94cb5eb4e2481ecdedf99d34"},{url:"assets/js/page-项目配置.96db4490.js",revision:"02b9cf663f9fea716d46d71d5e305a66"},{url:"assets/js/page-高级扩展.1c819932.js",revision:"511c9fd4d515106d7fde4a375a812bb4"},{url:"assets/js/ripples-min.js",revision:"32519622f6397441d48e328cef4602a3"},{url:"assets/js/vendors~flowchart.6d4ac09b.js",revision:"1d2598ec24d2d4315bc27bf75a28b98b"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.196cd7eb.js",revision:"f3f1bf6924d7f8a8b04438682bb364f5"},{url:"assets/js/vendors~layout-Layout.d4d9fba5.js",revision:"ede492fab2cb39f268c7f0bb7632ead5"},{url:"assets/js/vendors~photo-swipe.50b043d6.js",revision:"c9051311efcd012a0a9b4133793455d3"},{url:"assets/js/vendors~reveal.0dae242e.js",revision:"b1b6a7d8c1544546a04af354d7f95aba"},{url:"assets/fonts/classy-fonts-fftrrv.eot",revision:"4dfb9d1976a2838d7d019e4ca2ff64d5"},{url:"assets/fonts/classy-fonts-fftrrv.ttf",revision:"c6dd5e6e6b7590465f1175a6e8953565"},{url:"assets/fonts/classy-fonts-fftrrv.woff",revision:"999ab95a97ed648512c4e9fd82441129"},{url:"assets/fonts/fontawesome-webfont-.eot",revision:"674f50d287a8c48dc19ba404d20fe713"},{url:"assets/fonts/fontawesome-webfont-v=4.7.0.eot",revision:"674f50d287a8c48dc19ba404d20fe713"},{url:"assets/fonts/fontawesome-webfont-v=4.7.0.ttf",revision:"b06871f281fee6b241d60582ae9369b9"},{url:"assets/fonts/fontawesome-webfont-v=4.7.0.woff",revision:"fee66e712a8a08eef5805a46892932ad"},{url:"assets/fonts/fontawesome-webfont-v=4.7.0.woff2",revision:"af7ae505a9eed503f8b8e6982036873e"},{url:"assets/fonts/KaTeX_AMS-Regular.2c50d7a0.woff2",revision:"2c50d7a0caadcdd36b063bd9f9268291"},{url:"assets/fonts/KaTeX_AMS-Regular.3392cf39.woff",revision:"3392cf39311b42f70073c2732b99a24c"},{url:"assets/fonts/KaTeX_AMS-Regular.342a61e0.ttf",revision:"342a61e0c4dee016881d00d9fa69c335"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.b27e354b.ttf",revision:"b27e354b9a940cfabb1cdad2f5d35eb9"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.bd18bae2.ttf",revision:"bd18bae257a88cfa6a36310cd585d0a0"},{url:"assets/fonts/KaTeX_Fraktur-Bold.314623ce.woff",revision:"314623ce54a8a2654fb5df3c9cec01aa"},{url:"assets/fonts/KaTeX_Fraktur-Bold.359e1e97.ttf",revision:"359e1e974d07f534d0665dc5add72209"},{url:"assets/fonts/KaTeX_Fraktur-Bold.e2c9ac85.woff2",revision:"e2c9ac8504a2e0f1ec22e5904087174f"},{url:"assets/fonts/KaTeX_Fraktur-Regular.6b53a2db.ttf",revision:"6b53a2db48b3bbde91ec9c85590ccc44"},{url:"assets/fonts/KaTeX_Fraktur-Regular.98d5da58.woff",revision:"98d5da581ba8efea0934c92794c6c56c"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a2be00f3.woff2",revision:"a2be00f37608cf99fb1c0351dc4e9342"},{url:"assets/fonts/KaTeX_Main-Bold.233f218e.woff2",revision:"233f218ee616854f491c7195cd8fffcf"},{url:"assets/fonts/KaTeX_Main-Bold.316611c7.woff",revision:"316611c7a4afe59d3bcbe9e0f1a41613"},{url:"assets/fonts/KaTeX_Main-Bold.ed829b5f.ttf",revision:"ed829b5fabfded4f5f943df1012da1b1"},{url:"assets/fonts/KaTeX_Main-BoldItalic.09fa2c8f.woff2",revision:"09fa2c8f6a5a787648fcf62022b9e5c6"},{url:"assets/fonts/KaTeX_Main-BoldItalic.ca23ba4b.ttf",revision:"ca23ba4b607268345b1f0b22bff41292"},{url:"assets/fonts/KaTeX_Main-BoldItalic.cd5eb9a8.woff",revision:"cd5eb9a8d163f765f01c4b1a44567f4c"},{url:"assets/fonts/KaTeX_Main-Italic.14ff9c98.ttf",revision:"14ff9c98a820d988c169e27ca3eb78b8"},{url:"assets/fonts/KaTeX_Main-Italic.4dc3271d.woff2",revision:"4dc3271d3627578d951ecd3fcdb7f762"},{url:"assets/fonts/KaTeX_Main-Italic.4eee467e.woff",revision:"4eee467e52c8113a7c48549dec426808"},{url:"assets/fonts/KaTeX_Main-Regular.6c094af9.woff2",revision:"6c094af9274ceccdc817400fdf49c5af"},{url:"assets/fonts/KaTeX_Main-Regular.ab80a08c.woff",revision:"ab80a08c3c6915afb4b4a3300a55ef8f"},{url:"assets/fonts/KaTeX_Main-Regular.c89c6436.ttf",revision:"c89c643655fabf99f2b78eb9cc5cf4b0"},{url:"assets/fonts/KaTeX_Math-BoldItalic.7b481bb8.ttf",revision:"7b481bb892d872c27234188b59ca8f10"},{url:"assets/fonts/KaTeX_Math-BoldItalic.8bdd6092.woff2",revision:"8bdd60921916168d5c53c2caf3931e86"},{url:"assets/fonts/KaTeX_Math-BoldItalic.e1a2ff93.woff",revision:"e1a2ff93bd15ea54164340e3d1b2f901"},{url:"assets/fonts/KaTeX_Math-Italic.1aa96e4e.woff2",revision:"1aa96e4e339118aad4153041adbd9947"},{url:"assets/fonts/KaTeX_Math-Italic.68f671df.woff",revision:"68f671df4bc4ab87b9f3e5111c28c49a"},{url:"assets/fonts/KaTeX_Math-Italic.f677173e.ttf",revision:"f677173e00e38ef3151aa3156ef87507"},{url:"assets/fonts/KaTeX_SansSerif-Bold.362d94c6.ttf",revision:"362d94c68887ef3079e3fa04abc7b505"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f1cea170.woff",revision:"f1cea170c77d231b4ce249fcf850f3f4"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f9ae4352.woff2",revision:"f9ae435239a0933219b7dba4480141cc"},{url:"assets/fonts/KaTeX_SansSerif-Italic.07ffaec6.woff",revision:"07ffaec68ea2d7c3428eec8b12969925"},{url:"assets/fonts/KaTeX_SansSerif-Italic.2c742978.ttf",revision:"2c74297808a50220aa64d435d69006bc"},{url:"assets/fonts/KaTeX_SansSerif-Italic.e7aabbc7.woff2",revision:"e7aabbc7a3b86d947d8ad4436a81b348"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6087fc04.ttf",revision:"6087fc040fbe6c4e83da5ee2c1f8a803"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6f7840dc.woff2",revision:"6f7840dc539b8786da712dc43a57051c"},{url:"assets/fonts/KaTeX_SansSerif-Regular.e8735df9.woff",revision:"e8735df90d494a81dfc1568c352b21bc"},{url:"assets/fonts/KaTeX_Script-Regular.5921f5ba.woff2",revision:"5921f5ba7c02f3aeb478e4e87d2187bf"},{url:"assets/fonts/KaTeX_Script-Regular.781730b2.ttf",revision:"781730b2f066b5268a8fb75b4f7c479b"},{url:"assets/fonts/KaTeX_Script-Regular.ced4ee62.woff",revision:"ced4ee620859978fa1921c87d6dbd774"},{url:"assets/fonts/KaTeX_Size1-Regular.54a80b37.ttf",revision:"54a80b37e92f14f32a33165c571f8e95"},{url:"assets/fonts/KaTeX_Size2-Regular.24cbe093.ttf",revision:"24cbe093e557076be8c6c5ffee4aa61b"},{url:"assets/fonts/KaTeX_Size4-Regular.b78c75bb.ttf",revision:"b78c75bb4d0c95e4a87e006e83f187e4"},{url:"assets/fonts/KaTeX_Typewriter-Regular.8073cf01.woff2",revision:"8073cf012f453ddf47d5b8776f6bb1e5"},{url:"assets/fonts/KaTeX_Typewriter-Regular.90f78c10.ttf",revision:"90f78c1075e0cdb56287589112f56011"},{url:"assets/fonts/KaTeX_Typewriter-Regular.b636fa48.woff",revision:"b636fa487ef5e2f56bb3529bc9168be0"},{url:"assets/fonts/LineIcons-y2l643.eot",revision:"23586afcbed34f110de70937470877cf"},{url:"assets/fonts/LineIcons-y2l643.ttf",revision:"6e9fb56e13ffdf56a053e86545cafe3e"},{url:"assets/fonts/LineIcons-y2l643.woff",revision:"6106e3e25c6e52ebdceb846dc3f717b0"},{url:"404.html",revision:"7b00a27135363b9736a1139f1c1402d8"},{url:"article/index.html",revision:"0b7db2399992ca16cb0a6cf9f1c96719"},{url:"category/index.html",revision:"78411bb67f788cb77e00f2c258a9da6e"},{url:"doc/advanced/advanced/index.html",revision:"58c75bcd6d95f531fc3f7f0fe43b7d84"},{url:"doc/connector/clickhouse/index.html",revision:"2cb91613e1a292cd24ac0e7702929b79"},{url:"doc/connector/es/index.html",revision:"79373afcb0160f51c8d576cab97a6bbb"},{url:"doc/connector/http/index.html",revision:"d5b82683ca34049397796a0121242fd0"},{url:"doc/connector/jdbc/index.html",revision:"81d5a898ae1f74981ac8f6f306a2eba8"},{url:"doc/connector/kafka/index.html",revision:"fb3f277a19f4f3846f7ea89f89d5adc1"},{url:"doc/connector/mongo/index.html",revision:"39e906e5559a6beb4226d6d92ba7d020"},{url:"doc/connector/redis/index.html",revision:"fa533aa56be8ce8f4edd7e16869d380b"},{url:"doc/console/deploy/index.html",revision:"2bfd26cb73dcff1959d812f1bbe3a4f9"},{url:"doc/console/deployment/index.html",revision:"7ffb3e336171df8932b449121bbab546"},{url:"doc/console/quickstart/index.html",revision:"23a73053e12631f4a28ece4cc675245b"},{url:"doc/flink-k8s/1-deployment/index.html",revision:"aecac2ff62cb0a6f8501c17bea94a615"},{url:"doc/flink-k8s/2-k8s-pvc-integration/index.html",revision:"a48c4f3770d85e4e8fad041e1ef5baec"},{url:"doc/flink-k8s/3-hadoop-resource-integration/index.html",revision:"691e0f05d5f12cdd1ad1dc996ac15a6d"},{url:"doc/flinksql/flinksql/index.html",revision:"68a7e4bbab2e378639f64615d2e07767"},{url:"doc/guide/intro/index.html",revision:"06ca38fc2e0d2d3a7eb79cb9c0273557"},{url:"doc/guide/quickstart/index.html",revision:"eb2e15e62826f34b309f72c3f803daca"},{url:"doc/index.html",revision:"8e9babc18fea1073477b1655f4fbd80d"},{url:"doc/model/conf/index.html",revision:"f0cbb3f3d727cb565ab9c95bfb17e25f"},{url:"doc/model/model/index.html",revision:"e3704a419a0fceed8f34bacccf8a22b5"},{url:"doc/usecase/usecase/index.html",revision:"de82a6fa066520f6693aa09512c41c86"},{url:"download/index.html",revision:"1c86f0e4e3f7b36ddeef7d25a6b04a51"},{url:"encrypt/index.html",revision:"c616b60442a2b9f44be155c45c8285b7"},{url:"index.html",revision:"c6e7706383ddd507dd1428ea4e8ede7f"},{url:"slide/index.html",revision:"554c2086001dfc1d48bfbdff57894192"},{url:"sponsor/index.html",revision:"9a004d3c8c80a5cc23ee7767e81524de"},{url:"star/index.html",revision:"64d0fed43439752e984a900ec7ec40cc"},{url:"tag/index.html",revision:"5e868afee4bb1167a09c4edd4c44f7e4"},{url:"timeline/index.html",revision:"901dbc2b683219b4fecdad1c50d59df9"},{url:"zh/doc/advanced/advanced/index.html",revision:"a557fd62223a47ee0881e7040268af41"},{url:"zh/doc/connector/clickhouse/index.html",revision:"c506e04738d3589307a28c009f8bdc48"},{url:"zh/doc/connector/es/index.html",revision:"cde19f760f69a85b1f6bd9594e1ad14d"},{url:"zh/doc/connector/http/index.html",revision:"a3c9176ff801b860776073b90fa12951"},{url:"zh/doc/connector/jdbc/index.html",revision:"0f55292d9de462003ef905a00b48d88d"},{url:"zh/doc/connector/kafka/index.html",revision:"bb771078a1cc826bcaaaf424b59e6aed"},{url:"zh/doc/connector/mongo/index.html",revision:"c6fc0cd650a1ebc7213b61e8c93d24c8"},{url:"zh/doc/connector/redis/index.html",revision:"38905485331638b38e4a3c59ec15cf7e"},{url:"zh/doc/console/deploy/index.html",revision:"b077e3f3daeb44177bb5fb7844a3d48d"},{url:"zh/doc/console/deployment/index.html",revision:"81cb5a5e5019cd59d110b4abc7ce710b"},{url:"zh/doc/console/quickstart/index.html",revision:"e05a7be783656e5c7169dfa752659a4d"},{url:"zh/doc/flink-k8s/1-deployment/index.html",revision:"a669f5eb86d1ec003087b8d6c5842e85"},{url:"zh/doc/flink-k8s/2-k8s-pvc-integration/index.html",revision:"dc9022de2a0c0df6ce3545f4a043d29a"},{url:"zh/doc/flink-k8s/3-hadoop-resource-integration/index.html",revision:"dc7bd414222e9d667e40a649d2e62d16"},{url:"zh/doc/flinksql/flinksql/index.html",revision:"524e576694a3393523b818a305fc0a0f"},{url:"zh/doc/guide/intro/index.html",revision:"19ef09083e459adeae6204bd9d643f85"},{url:"zh/doc/guide/quickstart/index.html",revision:"314b118f578c496c7e2da103eaf83bfe"},{url:"zh/doc/index.html",revision:"7c45c35b87592505377497ceb6db146d"},{url:"zh/doc/model/conf/index.html",revision:"962b099b7e46d6212fbb5b32685c77ea"},{url:"zh/doc/model/model/index.html",revision:"771b9ced884a691860e7f16eecfaf07c"},{url:"zh/doc/usecase/usecase/index.html",revision:"fca60d570251b06df9ef3ae4e3dc9bd1"},{url:"zh/download/index.html",revision:"053cf3e8be50e27c1e52026f6d56eaff"},{url:"zh/index.html",revision:"a91c29e683d891726cf34a254aa82634"},{url:"zh/sponsor/index.html",revision:"737c92430263d5463badda3afa3c1ccb"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});