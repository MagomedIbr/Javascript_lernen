
//outer width and height
let oh = window.outerHeight;
let ow = window.outerWidth;
console.log(oh, ow);

//inner width and height
let ih = window.innerHeight;
let iw = window.innerWidth;
console.log(ih,iw);

//scroll points. Zeigt wie weit man runter gescrolled hat.
let sy = window.scrollY;
let sx = window.scrollX;
console.log(sy,sx);

//location object
let val = window.location;
console.log(val);
console.log(val.port);
console.log(val.ancestorOrigins);
console.log(val.search);

//redirect
//window.location.href = "http://www.google.com";

//reload
//window.location.reload();

//History
//window.history.go(-1);

//Navigator Object https://developer.mozilla.org/de/docs/Web/API/Window
nav = window.navigator;
console.log(nav.appName, nav.appVersion, nav.userAgent);
console.log(nav.appVersion);
console.log(nav.userAgent);
console.log(nav.platform);
console.log(nav.vendor);
console.log(nav.language);