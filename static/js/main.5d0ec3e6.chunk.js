(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],Array(22).concat([function(e,a,t){e.exports=t(47)},,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/logo.2810a88b.svg"},function(e,a,t){e.exports=t.p+"static/media/strukturkoni.e47263a2.png"},function(e,a,t){e.exports=t.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},function(e,a,t){e.exports=t.p+"static/media/feature-tile-icon-02.bd39f304.svg"},function(e,a,t){e.exports=t.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},function(e,a,t){e.exports=t.p+"static/media/feature-tile-icon-04.836acd10.svg"},function(e,a,t){e.exports=t.p+"static/media/feature-tile-icon-05.fa9ba00b.svg"},function(e,a,t){e.exports=t.p+"static/media/feature-tile-icon-06.6a177696.svg"},function(e,a,t){e.exports=t.p+"static/media/fadel.85b77dda.jpeg"},function(e,a,t){e.exports=t.p+"static/media/DAYUNG.3b9055cb.jpeg"},function(e,a,t){e.exports=t.p+"static/media/dunia.40f416ca.jpeg"},function(e,a,t){e.exports=t.p+"static/media/logoporda.d3d684bc.png"},function(e,a,t){e.exports=t.p+"static/media/maskotporda.fa30fa68.png"},function(e,a,t){e.exports=t.p+"static/media/jinglePOrda.97bc0dd0.jpg"},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(20),l=t.n(r),s=t(4),o=t(7),c=t(2),m=function(e){var a=e.component,t=e.layout,n=Object(c.a)(e,["component","layout"]);return t=void 0===t?function(e){return i.a.createElement(i.a.Fragment,null,e.children)}:t,i.a.createElement(s.a,Object.assign({},n,{render:function(e){return i.a.createElement(t,null,i.a.createElement(a,e))}}))},d=t(11),u=t(3),v=t.n(u),p=t(15),h=i.a.forwardRef((function(e,a){var t=Object(n.useState)(window.innerHeight),r=Object(d.a)(t,2),l=r[0],s=r[1],o=Object(n.useState)([]),c=Object(d.a)(o,2),m=c[0],u=c[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},h=function(){if(!v())for(var e=function(e){var a=m[e],t=a.getAttribute("data-reveal-delay"),n=a.getAttribute("data-reveal-offset")?a.getAttribute("data-reveal-offset"):"200";(function(e,a){return e.getBoundingClientRect().top<=l-a})(a.getAttribute("data-reveal-container")?a.closest(a.getAttribute("data-reveal-container")):a,n)&&!a.classList.contains("is-revealed")&&(t&&0!==t?setTimeout((function(){a.classList.add("is-revealed")}),t):a.classList.add("is-revealed"))},a=0;a<m.length;a++)e(a)};Object(n.useImperativeHandle)(a,(function(){return{init:function(){u(document.querySelectorAll("[class*=reveal-]"))}}})),Object(n.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",b),window.addEventListener("resize",E)),h())}),[m]);var g=function(){v()&&(window.removeEventListener("scroll",b),window.removeEventListener("resize",E))},b=Object(p.throttle)((function(){g(),h()}),30),E=Object(p.throttle)((function(){s(window.innerHeight)}),30);return Object(n.useEffect)((function(){g(),h()}),[l]),i.a.createElement(i.a.Fragment,null,e.children())}));h.propTypes={children:v.a.func.isRequired};var g=h,b=t(13),E=t(1),f=t.n(E),N=t(8),k=function(e){var a=e.className,t=e.src,r=e.width,l=e.height,s=e.alt,o=Object(c.a)(e,["className","src","width","height","alt"]),m=Object(n.useState)(!1),u=Object(d.a)(m,2),v=u[0],p=u[1],h=Object(n.useRef)(null);Object(n.useEffect)((function(){g(h.current)}),[]);var g=function(e){var a,t,n=document.createElement("img");v||(e.style.display="none",e.before(n),n.src=(a=e.getAttribute("width")||0,t=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(a," ").concat(t,'"%3E%3C/svg%3E')),n.width=e.getAttribute("width"),n.height=e.getAttribute("height"),n.style.opacity="0",e.className&&n.classList.add(e.className),n.remove(),e.style.display="")};return i.a.createElement("img",Object.assign({},o,{ref:h,className:a,src:t,width:r,height:l,alt:s,onLoad:function(){p(!0)}}))};k.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var O=k,D=function(e){var a=e.className,n=Object(c.a)(e,["className"]),r=f()("brand",a);return i.a.createElement("div",Object.assign({},n,{className:r}),i.a.createElement("h1",{className:"m-0"},i.a.createElement(N.a,{to:"/"},i.a.createElement(O,{src:t(32),alt:"Open",width:32,height:32}))))},w=function(e){var a=e.className,t=e.navPosition,r=e.hideNav,l=e.hideSignin,s=e.bottomOuterDivider,o=e.bottomDivider,m=Object(c.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),u=Object(n.useState)(!1),v=Object(d.a)(u,2),p=v[0],h=v[1],g=Object(n.useRef)(null),b=Object(n.useRef)(null);Object(n.useEffect)((function(){return p&&E(),document.addEventListener("keydown",O),document.addEventListener("click",w),function(){document.removeEventListener("keydown",O),document.removeEventListener("click",w),k()}}));var E=function(){document.body.classList.add("off-nav-is-active"),g.current.style.maxHeight=g.current.scrollHeight+"px",h(!0)},k=function(){document.body.classList.remove("off-nav-is-active"),g.current&&(g.current.style.maxHeight=null),h(!1)},O=function(e){p&&27===e.keyCode&&k()},w=function(e){g.current&&p&&!g.current.contains(e.target)&&e.target!==b.current&&k()},P=f()("site-header",s&&"has-bottom-divider",a);return i.a.createElement("header",Object.assign({},m,{className:P}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:f()("site-header-inner",o&&"has-bottom-divider")},i.a.createElement(D,null),!r&&i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{ref:b,className:"header-nav-toggle",onClick:p?k:E},i.a.createElement("span",{className:"screen-reader"},"Menu"),i.a.createElement("span",{className:"hamburger"},i.a.createElement("span",{className:"hamburger-inner"}))),i.a.createElement("nav",{ref:g,className:f()("header-nav",p&&"is-active")},i.a.createElement("div",{className:"header-nav-inner"},i.a.createElement("ul",{className:f()("list-reset text-xs",t&&"header-nav-".concat(t))},i.a.createElement("li",null,i.a.createElement(N.a,{to:"/dashboard",onClick:k},"Dashboard"))),!l&&i.a.createElement("ul",{className:"list-reset header-nav-right"},i.a.createElement("li",null,i.a.createElement(N.a,{to:"#0",className:"button button-primary button-wide-mobile button-sm",onClick:k},"Sign up")))))))))};w.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var P=w,j=function(e){var a=e.className,t=Object(c.a)(e,["className"]),n=f()("footer-nav",a);return i.a.createElement("nav",Object.assign({},t,{className:n}),i.a.createElement("ul",{className:"list-reset"},i.a.createElement("li",null,i.a.createElement(N.a,{to:"#0"},"Contact")),i.a.createElement("li",null,i.a.createElement(N.a,{to:"#0"},"About us")),i.a.createElement("li",null,i.a.createElement(N.a,{to:"#0"},"FAQ's")),i.a.createElement("li",null,i.a.createElement(N.a,{to:"#0"},"Support"))))},y=function(e){var a=e.className,t=Object(c.a)(e,["className"]),n=f()("footer-social",a);return i.a.createElement("div",Object.assign({},t,{className:n}),i.a.createElement("ul",{className:"list-reset"},i.a.createElement("li",null,i.a.createElement("a",{href:"https://facebook.com/"},i.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("title",null,"Facebook"),i.a.createElement("path",{d:"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"})))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://twitter.com/"},i.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("title",null,"Twitter"),i.a.createElement("path",{d:"M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"})))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://google.com/"},i.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("title",null,"Instagram"),i.a.createElement("g",null,i.a.createElement("circle",{cx:"12.145",cy:"3.892",r:"1"}),i.a.createElement("path",{d:"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"}),i.a.createElement("path",{d:"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"})))))))},A=function(e){var a=e.className,t=e.topOuterDivider,n=e.topDivider,r=Object(c.a)(e,["className","topOuterDivider","topDivider"]),l=f()("site-footer center-content-mobile",t&&"has-top-divider",a);return i.a.createElement("footer",Object.assign({},r,{className:l}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:f()("site-footer-inner",n&&"has-top-divider")},i.a.createElement("div",{className:"footer-top space-between text-xxs"},i.a.createElement(D,null),i.a.createElement(y,null)),i.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},i.a.createElement(j,null),i.a.createElement("div",{className:"footer-copyright"},"Made by ",i.a.createElement("a",{href:"https://pabobernando.com"},"Pabo Bernando"),". All right reserved")))))};A.defaultProps={topOuterDivider:!1,topDivider:!1};var x=A,S=function(e){var a=Object.assign({},e),t=Object(n.useState)(!0),r=Object(d.a)(t,2),l=r[0],s=r[1];return i.a.createElement(i.a.Fragment,null,l&&i.a.createElement("div",Object.assign({},a,{className:"banner"}),i.a.createElement("div",{className:"banner-inner text-xxs"},i.a.createElement("div",{className:"banner-container"},i.a.createElement("a",{className:"banner-link banner-link-white",href:"https://github.com/konikulonprogo/konikulonprogo.github.io",target:"_blank",rel:"noopener noreferrer"},"Download",i.a.createElement("span",{className:"banner-hide-on-sm"}," on GitHub"))," ",i.a.createElement("span",{className:"banner-separator"},"or")," ",i.a.createElement("a",{className:"banner-link banner-link-green",href:"https://github.com/pabobernando",target:"_blank",rel:"noopener noreferrer"},"Check Premium Version")),i.a.createElement("button",{className:"banner-close",onClick:function(){return s(!1)}},i.a.createElement("span",{className:"screen-reader"},"Close"),i.a.createElement("svg",{viewBox:"0 0 16 16"},i.a.createElement("path",{d:"M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z"}))))))},K=function(e){var a=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(P,{navPosition:"right",className:"reveal-from-bottom"}),i.a.createElement("main",{className:"site-content"},a),i.a.createElement(S,null),i.a.createElement(x,null))},I=t(6),M={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},C={types:Object(I.a)({},M.types),defaults:Object(I.a)({},M.defaults)},T={types:Object(I.a)({},M.types,{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(I.a)({},M.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},L={types:Object(I.a)({},M.types,{pushLeft:v.a.bool}),defaults:Object(I.a)({},M.defaults,{pushLeft:!1})},R=function(e){var a=e.className,t=e.tag,n=e.color,r=e.size,l=e.loading,s=e.wide,o=e.wideMobile,m=e.disabled,d=Object(c.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),u=f()("button",n&&"button-".concat(n),r&&"button-".concat(r),l&&"is-loading",s&&"button-block",o&&"button-wide-mobile",a),v=t;return i.a.createElement(v,Object.assign({},d,{className:u,disabled:m}))};R.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var F=function(e){var a=e.className,t=e.children,r=e.handleClose,l=e.show,s=e.closeHidden,o=e.video,m=e.videoTag,d=Object(c.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(n.useEffect)((function(){return document.addEventListener("keydown",v),document.addEventListener("click",p),function(){document.removeEventListener("keydown",v),document.removeEventListener("click",p)}})),Object(n.useEffect)((function(){u()}),[d.show]);var u=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},v=function(e){27===e.keyCode&&r(e)},p=function(e){e.stopPropagation()},h=f()("modal",l&&"is-active",o&&"modal-video",a);return i.a.createElement(i.a.Fragment,null,l&&i.a.createElement("div",Object.assign({},d,{className:h,onClick:r}),i.a.createElement("div",{className:"modal-inner",onClick:p},o?i.a.createElement("div",{className:"responsive-video"},"iframe"===m?i.a.createElement("iframe",{title:"video",src:o,frameBorder:"0",allowFullScreen:!0}):i.a.createElement("video",{"v-else":!0,controls:!0,src:o})):i.a.createElement(i.a.Fragment,null,!s&&i.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:r}),i.a.createElement("div",{className:"modal-content"},t)))))};F.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var H=Object(I.a)({},C.defaults),B=function(e){var a=e.className,r=e.topOuterDivider,l=e.bottomOuterDivider,s=e.topDivider,o=e.bottomDivider,m=e.hasBgColor,u=e.invertColor,v=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),p=Object(n.useState)(!1),h=Object(d.a)(p,2),g=(h[0],h[1]),b=f()("hero section center-content",r&&"has-top-divider",l&&"has-bottom-divider",m&&"has-bg-color",u&&"invert-color",a),E=f()("hero-inner section-inner",s&&"has-top-divider",o&&"has-bottom-divider");return i.a.createElement("section",Object.assign({},v,{className:b}),i.a.createElement("div",{className:"container-sm"},i.a.createElement("div",{className:E},i.a.createElement("div",{className:"hero-content"},i.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"KONI",i.a.createElement("span",{className:"text-color-primary"}," KULONPROGO")),i.a.createElement("div",{className:"container-xs"},i.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"Komite Olahraga Nasional Indonesia Kab Kulonprogo"),i.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"}))),i.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},i.a.createElement("a",{"data-video":"https://player.vimeo.com/video/174002812",href:"#0","aria-controls":"video-modal",onClick:function(e){e.preventDefault(),g(!0)}},i.a.createElement(O,{className:"has-shadow",src:t(33),alt:"Hero",width:596,height:204}))))))};B.defaultProps=H;var G=B,U=function(e){var a=e.className,t=e.data,n=e.children,r=e.tag,l=Object(c.a)(e,["className","data","children","tag"]),s=f()("section-header",a),o=r;return i.a.createElement(i.a.Fragment,null,(t.title||t.paragraph)&&i.a.createElement("div",Object.assign({},l,{className:s}),i.a.createElement("div",{className:"container-xs"},n,t.title&&i.a.createElement(o,{className:f()("mt-0",t.paragraph?"mb-16":"mb-0")},t.title),t.paragraph&&i.a.createElement("p",{className:"m-0"},t.paragraph))))};U.defaultProps={children:null,tag:"h2"};var z=U,V=Object(I.a)({},L.defaults),W=function(e){var a=e.className,n=e.topOuterDivider,r=e.bottomOuterDivider,l=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.pushLeft,u=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=f()("features-tiles section",n&&"has-top-divider",r&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",a),p=f()("features-tiles-inner section-inner pt-0",l&&"has-top-divider",s&&"has-bottom-divider"),h=f()("tiles-wrap center-content",d&&"push-left");return i.a.createElement("section",Object.assign({},u,{className:v}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:p},i.a.createElement(z,{data:{title:"SELAYANG PANDANG",paragraph:"Komite Olahraga Nasional Indonesia KONI Kabupaten Kulon Progo merupakan induk organiasi cabang olahraga yang menaungi sebanyak 45 cabang olahraga (cabor) dan 2 badan olahraga fungsional (Siwo PWI Kulon Progo dan Perwosi Kulon Progo). Pada kepengurusan KONI Kabupaten Kulon Progo masa bakti 2021-2025 yang dipimpin Kusdira BA., segala aktifitas dilakukan di sekretariatan kantor KONI Kulon Progo yang menempati salah satu ruangan di Stadion Cangkring Wates. Untuk kelancaran pelayanan dan administrasi, KONI Kabupaten Kulon Progo mempunyai 2 (dua) orang staf yang bertugas setiap hari kerja 5 (lima) hari kerja yakni hari Senin sd Jum\u2019at dengan jam kerja pukul 08.00 sd 15.00 WIB. Untuk pengendalian manajerial, KONI Kabupaten Kulon Progo menerapkan penugasan piket pengurus harian. Besar harapan kami seluruh data dan kegiatan yang diselenggarakan cabor anggota KONI Kulon Progo maupun pengurus dapat termuat dalam wibsite ini. Terimakasih dan salam olahraga\u2026\u2026"},className:"center-content"}),i.a.createElement("div",{className:h},i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(O,{src:t(34),alt:"Features tile icon 01",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"DATA CLUB"),i.a.createElement("h1",{className:"m-0 text-sm"},"148")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(O,{src:t(35),alt:"Features tile icon 02",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"DATA ATLIT"),i.a.createElement("h1",{className:"m-0 text-sm"},"962")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(O,{src:t(36),alt:"Features tile icon 03",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"DATA WASIT"),i.a.createElement("h1",{className:"m-0 text-sm"},"67")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(O,{src:t(37),alt:"Features tile icon 04",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"DATA PELATIH"),i.a.createElement("h1",{className:"m-0 text-sm"},"91")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(O,{src:t(38),alt:"Features tile icon 05",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"DATA JURI"),i.a.createElement("h1",{className:"m-0 text-sm"},"21")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(O,{src:t(39),alt:"Features tile icon 06",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"DATA SARPRAS"),i.a.createElement("h1",{className:"m-0 text-sm"},"144"))))))))};W.defaultProps=V;var Y=W,J=Object(I.a)({},T.defaults),_=function(e){var a=e.className,n=e.topOuterDivider,r=e.bottomOuterDivider,l=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,p=e.imageFill,h=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),g=f()("features-split section",n&&"has-top-divider",r&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",a),b=f()("features-split-inner section-inner",l&&"has-top-divider",s&&"has-bottom-divider"),E=f()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return i.a.createElement("section",Object.assign({},h,{className:g}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:b},i.a.createElement(z,{data:{title:"NEWS & EVENTS",paragraph:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum \u2014 semper quis lectus nulla at volutpat diam ut venenatis."},className:"center-content"}),i.a.createElement("div",{className:E},i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"29 september 2022"),i.a.createElement("h3",{className:"mt-0 mb-12"},"Muh. Fadel Juara Lari Manunggal Tahun 2022"),i.a.createElement("p",{className:"m-0"},"Muh Fadel siswa MAN 1 Kulonprogo tampil sebagai juara 1 kategori SMA/SMK/Umum putra Lomba Lari Manunggal Kulonprogo Tahun 2022 yang diselenggarakan pada hari Sabtu, 24 September 2022. Lomba dalam rangka Hari Jadi ke-72 Kabupaten Kulonprogo ini diikuti oleh 410 peserta putra dan putri. Peserta SMA/SMK/Umum dilepas oleh Ketua DPRD Kulonprogo, Akhid Nuryati, SE. Sedangkan peserta SMP/MTs dilepas oleh Asisten Pemerintahan Kesra Pemkab Kulonprogo, Drs. Jazil Ambar Was\u2019an. Pelepasan star Lari Manunggal dari lapangan Kaliagung Sentolo dan finis di Alun-alun Wates. Dalam lomba menempuh jarak 9 km, Muh Fadel menyentuh garis finis pertama dengan waktu 28 menit 30 detik. Menyusul di belakangnya juara II Hakita Dori (SMAN 1 Pengasih. Juara III V. Guntur Pradana (Galur), Kristoporus UB (Wates), Roby Saparuane (Pertina Kulonprogo). Kategori SMP/MTs putra, juara I V berturut-turut diraih oleh : Ruli Andrianto (SMPN 2 Galur), Rahmat Rifqi (MTsN 1 Kulonprogo, Yoga Fhatri Putra (SMPN 2 Galur), Nova Candra (SMPN 1 Nanggulan), Raffael Primera Satyo (SMPN 1 Pengasih). Di kategori SMP/MTs putri juara I-V diraih oleh: Deswinta Putri (SMPN 1 Panjatan), Fani Afnan Janati (SMPN 1 Pengasih), Monica Agesti Kusumarani (SMPN 2 Galur), Alin Putri Daniel (SMP Muhammadiyah Nanggulan) dan Pradenta Arumsari (SMPN 3 Wates).")),i.a.createElement("div",{className:f()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(O,{src:t(40),alt:"Features split 01",width:528,height:396}))),i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"20 SEPTEMBER 2022"),i.a.createElement("h3",{className:"mt-0 mb-12"},"DAYUNG KULONPROGO LAMPAUI TARGET MEDALI DI PORDA DIY XVI TAHUN 2022"),i.a.createElement("p",{className:"m-0"},"Prestasi membanggakan diraih oleh Pengurus Kabupaten (Pengkab) Persatuan Olahraga Dayung Seluruh Indonesia (PODSI) Kulonprogo di event Pekan Olahraga Daerah (PORDA) DIY XVI tahun 2022. Dengan merebut 6 medali emas, 3 perak dan 4 perunggu Dayung melampaui target yang dicanangkan. Ketua Pengkab PODSI Kulonprogo, Rochmad Nur Kholis mengatakan, sejak awal dimulai Pemusatan Latihan Kabupaten (Pelatkab), tim PODSI Kulonprogo menargetkan 5 medali emas. \u201cKami bersyukur di PORDA DIY XVI tahun ini dari 19 nomor yang dilombakan berhasil meraih 6 medali emas. Hasil ini cukup membanggakan karena berhasil melebihi target yang kami sampaikan ke KONI Kulonprogo sejak awal persiapan\u201d. Jelasnya. Enam medali emas dipersembahkan oleh Yuan Tri Budi Prasetyo di nomor kayak 1 jarak 1.000 meter putra, Noviati Mardiana (kayak 1 200 meter putri), Noviati Mardiana dan Yuliana Damayanto (kayak 2 200 meter putri), Adhi Hartono, Akbar Kurniawan Suhendro, Dimas Putu Sanjaya dan Farid Hastungkoro (kayak 4 1.000 meter putra), Traditional Boat Race (TBR) 200 meter putra dan TBR 1.000 meter putra. \u201cDengan persiapan yang maksimal sekitar satu tahun hasilnya bisa melebihi target yang dicanangkan. Keberhasilan ini tidak lepas dari semangat dan kedisiplinan para atlet yang telah menjalani latihan rutin setiap hari\u201d. Jelasnya.")),i.a.createElement("div",{className:f()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(O,{src:t(41),alt:"Features split 02",width:528,height:396}))),i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"20 SEPTEMBER 2022"),i.a.createElement("h3",{className:"mt-0 mb-12"},"RAMASKI SIAP MENGIKUTI KEJUARAAN DUNIA"),i.a.createElement("p",{className:"m-0"},"Usai mengikuti Pekan Olahraga Daerah (PORDA) DIY tahun 2022, atlet panjat tebing asal Kulon Progo, Ramaski Aswin Kristanto bersiap mengikuti Kejuaraan Dunia Panjat Tebing yang diselenggarakan oleh Internatoinal Federation Sport Climbing (IFSC) pada tanggal 22-26 September 2022 di Jakarta. Bidang Pembinaan dan Prestasi Pengurus Kabupaten (Pengkab) Federasi Panjat Tebing Indonesia (FPTI) Kulon Progo, Sukarni mengatakan, Ramaski telah mengukir prestasi membanggakan di Porda tahun ini dengan mempersembahkan 2 medali emas dan 1 perak untuk kontingen Kulon Progo. Dua medali emas yang diraih siswa kelas XI MAN 1 Kulon Progo ini dari nomor speed WR umum putra dan speed beregu putra bersama Marji dan Widiatama Adi Sucipto. Sedangkan medali perak diperoleh dari nomor combine perorangan putra. \u201cCapaian prestasi di Porda DIY tahun 2022 dengan merebut 2 emas ini sangat membanggakan dan bisa menjadi bekal Ramaski sebelum bertanding di Kejuaraan Dunia Panjat Tebing. Setelah Porda Ramaski langsung melakukan persiapan intensif\u201d, jelasnya. Ramaski akan berupaya semaksimal mungkin untuk meraih prestasi terbaik di Kejuaraan Dunia . Persiapan telah dilakukan di Pemusatan Latihan Nasional (Pelatnas) dengan menjalani latihan rutin setiap hari pada pagi dan sore.")),i.a.createElement("div",{className:f()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(O,{src:t(42),alt:"Features split 03",width:528,height:396})))))))};_.defaultProps=J;var X=_,q=Object(I.a)({},L.defaults),Q=function(e){var a=e.className,n=e.topOuterDivider,r=e.bottomOuterDivider,l=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.pushLeft,u=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=f()("testimonial section",n&&"has-top-divider",r&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",a),p=f()("testimonial-inner section-inner",l&&"has-top-divider",s&&"has-bottom-divider"),h=f()("tiles-wrap",d&&"push-left");return i.a.createElement("section",Object.assign({},u,{className:v}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:p},i.a.createElement(z,{data:{title:"PORDA XVI DAERAH ISTIMEWA YOGYAKARTA",paragraph:"1-9 SEPTEMBER 2022"},className:"center-content"}),i.a.createElement("div",{className:h},i.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"testimonial-item-content"},i.a.createElement(O,{className:"has-shadow",src:t(43),alt:"Hero",width:596,height:204})),i.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},i.a.createElement("span",{className:"testimonial-item-name text-color-high"},"LOGO PORDA"),i.a.createElement("span",{className:"text-color-low"}," / "),i.a.createElement("span",{className:"testimonial-item-link"},i.a.createElement("a",{href:"#0"},"XVI DIY"))))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"testimonial-item-content"},i.a.createElement(O,{className:"has-shadow",src:t(44),alt:"Hero",width:596,height:204})),i.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},i.a.createElement("span",{className:"testimonial-item-name text-color-high"},"MASKOT PORDA"),i.a.createElement("span",{className:"text-color-low"}," / "),i.a.createElement("span",{className:"testimonial-item-link"},i.a.createElement("a",{href:"#0"},"XVI DIY"))))),i.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"testimonial-item-content"},i.a.createElement(O,{className:"has-shadow",src:t(45),alt:"Hero",width:596,height:204})),i.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},i.a.createElement("span",{className:"testimonial-item-name text-color-high"},"JINGLE PORDA"),i.a.createElement("span",{className:"text-color-low"}," / "),i.a.createElement("span",{className:"testimonial-item-link"},i.a.createElement("a",{href:"#0"},"XVI DIY")))))))))};Q.defaultProps=q;var $=Q,Z=function(e){var a=e.className,t=e.children,n=e.labelHidden,r=e.id,l=Object(c.a)(e,["className","children","labelHidden","id"]),s=f()("form-label",n&&"screen-reader",a);return i.a.createElement("label",Object.assign({},l,{className:s,htmlFor:r}),t)};Z.defaultProps={children:null,labelHidden:!1,id:null};var ee=Z,ae=function(e){var a=e.children,t=e.className,n=e.status,r=Object(c.a)(e,["children","className","status"]),l=f()("form-hint",n&&"text-color-".concat(n),t);return i.a.createElement("div",Object.assign({},r,{className:l}),a)};ae.defaultProps={children:null,status:!1};var te=ae,ne=function(e){var a=e.className,t=e.children,n=e.label,r=e.labelHidden,l=e.type,s=e.name,o=e.status,m=e.disabled,d=e.value,u=e.formGroup,v=e.hasIcon,p=e.size,h=e.placeholder,g=e.rows,b=e.hint,E=Object(c.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),N=f()(u&&""!==u&&("desktop"===u?"form-group-desktop":"form-group"),v&&""!==v&&"has-icon-"+v),k=f()("form-input",p&&"form-input-".concat(p),o&&"form-".concat(o),a),O="textarea"===l?"textarea":"input";return i.a.createElement(i.a.Fragment,null,n&&i.a.createElement(ee,{labelHidden:r,id:E.id},n),i.a.createElement("div",{className:N},i.a.createElement(O,Object.assign({},E,{type:"textarea"!==l?l:null,className:k,name:s,disabled:m,value:d,placeholder:h,rows:"textarea"===l?g:null})),t),b&&i.a.createElement(te,{status:o},b))};ne.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var ie=ne,re=Object(I.a)({},C.defaults,{split:!1}),le=function(e){var a=e.className,t=e.topOuterDivider,n=e.bottomOuterDivider,r=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,m=e.split,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),u=f()("cta section center-content-mobile reveal-from-bottom",t&&"has-top-divider",n&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",a),v=f()("cta-inner section-inner",r&&"has-top-divider",l&&"has-bottom-divider",m&&"cta-split");return i.a.createElement("section",Object.assign({},d,{className:u}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:v},i.a.createElement("div",{className:"cta-slogan"},i.a.createElement("h3",{className:"m-0"},"For previewing layouts and visual?")),i.a.createElement("div",{className:"cta-action"},i.a.createElement(ie,{id:"newsletter",type:"email",label:"Subscribe",labelHidden:!0,hasIcon:"right",placeholder:"Your best email"},i.a.createElement("svg",{width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})))))))};le.defaultProps=re;var se=le,oe=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(G,{className:"illustration-section-01"}),i.a.createElement(Y,null),i.a.createElement(X,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),i.a.createElement($,{topDivider:!0}),i.a.createElement(se,{split:!0}))};var ce=function(){return i.a.createElement("div",null,"Dashboard")};b.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/react-gh-pages",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var me=function(){var e=Object(n.useRef)(),a=Object(s.f)();return Object(n.useEffect)((function(){var t=a.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){b.a.set({page:e}),b.a.pageview(e)}(t)}),[a]),i.a.createElement(g,{ref:e,children:function(){return i.a.createElement(s.c,null,i.a.createElement(m,{exact:!0,path:"/",component:oe,layout:K}),i.a.createElement(m,{exact:!0,path:"/dashboard",component:ce}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(46);var de=Object(o.a)();l.a.render(i.a.createElement(s.b,{history:de},i.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}]),[[22,1,2]]]);
//# sourceMappingURL=main.5d0ec3e6.chunk.js.map