if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,c)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let s={};const d=e=>n(e,o),t={module:{uri:o},exports:s,require:d};i[o]=Promise.all(r.map((e=>t[e]||d(e)))).then((e=>(c(...e),s)))}}define(["./workbox-873c5e43"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"favicon.59d55206.ico",revision:"b64d0b25e19b1e5036f2cde3d80829aa"},{url:"icon-192.0a457f72.png",revision:"c1cb02082fc06290649735e59ed362cd"},{url:"icon-512.0b4328d9.png",revision:"e6796e0ada88e65f5194ffc9e318a2a7"},{url:"index.474e519e.css",revision:"774ef39ddc8cce0a0a5cfc68be8141e6"},{url:"index.ba5b9833.js",revision:"69e1d387f4d2dad7393708102df94e89"},{url:"index.html",revision:"1f7eee9a915e30243387a961f0c43222"},{url:"site.webmanifest",revision:"0e52c49851561d9777c5682f472e525a"}],{})}));
//# sourceMappingURL=service-worker.js.map