(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[49],{830:function(e,t,n){"use strict";n.d(t,{W:function(){return a}});var r=n(7294);function a(){return r.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},8617:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),a="iconExternalLink_3J9K",o=function(e){var t=e.width,n=void 0===t?13.5:t,o=e.height,l=void 0===o?13.5:o;return r.createElement("svg",{width:n,height:l,"aria-hidden":"true",viewBox:"0 0 24 24",className:a},r.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},4478:function(e,t,n){"use strict";var r=n(2122),a=n(9756),o=n(7294),l=["width","height","className"];t.Z=function(e){var t=e.width,n=void 0===t?30:t,c=e.height,i=void 0===c?30:c,s=e.className,u=(0,a.Z)(e,l);return o.createElement("svg",(0,r.Z)({className:s,width:n,height:i,viewBox:"0 0 30 30","aria-hidden":"true"},u),o.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},2049:function(e,t,n){"use strict";n.d(t,{Z:function(){return Re}});var r=n(7294),a=n(6010),o=n(4973),l=n(9306),c="skipToContent_1oUP";function i(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var s=function(){var e=(0,r.useRef)(null);return(0,l.SL)((function(t){var n=t.location;e.current&&!n.hash&&i(e.current)})),r.createElement("div",{ref:e},r.createElement("a",{href:"#main",className:c,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&i(t)}},r.createElement(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},u="announcementBar_3WsW",m="announcementBarClose_38nx",d="announcementBarContent_3EUC",f="announcementBarCloseable_3myR";var v=function(){var e,t=(0,l.nT)(),n=t.isClosed,c=t.close,i=(0,l.LU)().announcementBar;if(!i)return null;var s=i.content,v=i.backgroundColor,h=i.textColor,g=i.isCloseable;return!s||g&&n?null:r.createElement("div",{className:u,style:{backgroundColor:v,color:h},role:"banner"},r.createElement("div",{className:(0,a.Z)(d,(e={},e[f]=g,e)),dangerouslySetInnerHTML:{__html:s}}),g?r.createElement("button",{type:"button",className:(0,a.Z)(m,"clean-btn"),onClick:c,"aria-label":(0,o.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},h=n(2122),g=n(9756),b=n(3935),p=n(2263),E=n(5977),k=n(4996),y=n(6742),Z=n(9105),w=n(6397);function C(){return r.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},r.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var N=n(830);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(i){a=!0,o=i}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return L(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function I(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var D="Ctrl";var T=r.forwardRef((function(e,t){var n=e.translations,a=void 0===n?{}:n,o=I(e,["translations"]),l=a.buttonText,c=void 0===l?"Search":l,i=a.buttonAriaLabel,s=void 0===i?"Search":i,u=S((0,r.useState)(null),2),m=u[0],d=u[1];return(0,r.useEffect)((function(){"undefined"!=typeof navigator&&d(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":D)}),[]),r.createElement("button",_({type:"button",className:"DocSearch DocSearch-Button","aria-label":s},o,{ref:t}),r.createElement("span",{className:"DocSearch-Button-Container"},r.createElement(N.W,null),r.createElement("span",{className:"DocSearch-Button-Placeholder"},c)),null!==m&&r.createElement("span",{className:"DocSearch-Button-Keys"},r.createElement("span",{className:"DocSearch-Button-Key"},m===D?r.createElement(C,null):m),r.createElement("span",{className:"DocSearch-Button-Key"},"K")))})),B=n(907);function A(){var e=function(){var e=(0,p.Z)().i18n,t=(0,B._r)(),n=(0,B.WS)(),r=(0,l.Oh)(),a=[l.HX].concat(Object.keys(t).map((function(e){var a,o,c=(null==n||null==(a=n.activePlugin)?void 0:a.pluginId)===e?n.activeVersion:void 0,i=r[e],s=t[e].versions.find((function(e){return e.isLast})),u=null!=(o=null!=c?c:i)?o:s;return(0,l.os)(e,u.name)})));return{locale:e.currentLocale,tags:a}}();return["language:"+e.locale,e.tags.map((function(e){return"docusaurus_tag:"+e}))]}var M="searchBox_1Doo",x=["contextualSearch"],P=null;function O(e){var t=e.hit,n=e.children;return r.createElement(y.Z,{to:t.url},n)}function U(e){var t=e.state,n=e.onClose,a=(0,w.Z)().generateSearchPageLink;return r.createElement(y.Z,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function R(e){var t,a,l=e.contextualSearch,c=(0,g.Z)(e,x),i=(0,p.Z)().siteMetadata,s=A(),u=null!=(t=null==(a=c.searchParameters)?void 0:a.facetFilters)?t:[],m=l?[].concat(s,u):u,d=Object.assign({},c.searchParameters,{facetFilters:m}),f=(0,k.C)().withBaseUrl,v=(0,E.k6)(),y=(0,r.useRef)(null),w=(0,r.useRef)(null),C=(0,r.useState)(!1),N=C[0],_=C[1],S=(0,r.useState)(null),L=S[0],I=S[1],D=(0,r.useCallback)((function(){return P?Promise.resolve():Promise.all([n.e(763).then(n.bind(n,3763)),Promise.all([n.e(532),n.e(945)]).then(n.bind(n,6945)),Promise.all([n.e(532),n.e(256)]).then(n.bind(n,5256))]).then((function(e){var t=e[0].DocSearchModal;P=t}))}),[]),B=(0,r.useCallback)((function(){D().then((function(){y.current=document.createElement("div"),document.body.insertBefore(y.current,document.body.firstChild),_(!0)}))}),[D,_]),R=(0,r.useCallback)((function(){_(!1),y.current.remove()}),[_]),H=(0,r.useCallback)((function(e){D().then((function(){_(!0),I(e.key)}))}),[D,_,I]),V=(0,r.useRef)({navigate:function(e){var t=e.itemUrl;v.push(t)}}).current,j=(0,r.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:f(""+t.pathname+t.hash)})}))})).current,W=(0,r.useMemo)((function(){return function(e){return r.createElement(U,(0,h.Z)({},e,{onClose:R}))}}),[R]),z=(0,r.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",i.docusaurusVersion),e}),[i.docusaurusVersion]);!function(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,o=e.onInput,l=e.searchButtonRef;r.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),l&&l.current===document.activeElement&&o&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&o(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,o,l])}({isOpen:N,onOpen:B,onClose:R,onInput:H,searchButtonRef:w});var q=(0,o.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return r.createElement(r.Fragment,null,r.createElement(Z.Z,null,r.createElement("link",{rel:"preconnect",href:"https://"+c.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),r.createElement("div",{className:M},r.createElement(T,{onTouchStart:D,onFocus:D,onMouseOver:D,onClick:B,ref:w,translations:{buttonText:q,buttonAriaLabel:q}})),N&&(0,b.createPortal)(r.createElement(P,(0,h.Z)({onClose:R,initialScrollY:window.scrollY,initialQuery:L,navigator:V,transformItems:j,hitComponent:O,resultsFooterComponent:W,transformSearchClient:z},c,{searchParameters:d})),y.current))}var H=function(){var e=(0,p.Z)().siteConfig;return r.createElement(R,e.themeConfig.algolia)},V={toggle:"toggle_71bT"},j=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(V.toggle,V.dark),style:n},t)},W=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(V.toggle,V.light),style:n},t)},z=(0,r.memo)((function(e){var t=e.className,n=e.icons,o=e.checked,l=e.disabled,c=e.onChange,i=(0,r.useState)(o),s=i[0],u=i[1],m=(0,r.useState)(!1),d=m[0],f=m[1],v=(0,r.useRef)(null);return r.createElement("div",{className:(0,a.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":l})},r.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=v.current)?void 0:e.click()}},r.createElement("div",{className:"react-toggle-track-check"},n.checked),r.createElement("div",{className:"react-toggle-track-x"},n.unchecked),r.createElement("div",{className:"react-toggle-thumb"})),r.createElement("input",{ref:v,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onClick:function(){return u(!s)},onFocus:function(){return f(!0)},onBlur:function(){return f(!1)}}))}));function q(e){var t=(0,l.LU)().colorMode.switchConfig,n=t.darkIcon,a=t.darkIconStyle,o=t.lightIcon,c=t.lightIconStyle,i=(0,p.Z)().isClient;return r.createElement(z,(0,h.Z)({disabled:!i,icons:{checked:r.createElement(j,{icon:n,style:a}),unchecked:r.createElement(W,{icon:o,style:c})}},e))}var K=n(5350),F=n(7898),G=function(e){var t=(0,E.TH)(),n=(0,r.useState)(e),a=n[0],o=n[1],c=(0,r.useRef)(!1),i=(0,r.useState)(0),s=i[0],u=i[1],m=(0,r.useCallback)((function(e){null!==e&&u(e.getBoundingClientRect().height)}),[]);return(0,F.Z)((function(t,n){var r=t.scrollY,a=n.scrollY;if(e)if(r<s)o(!0);else{if(c.current)return c.current=!1,void o(!1);a&&0===r&&o(!0);var l=document.documentElement.scrollHeight-s,i=window.innerHeight;a&&r>=a?o(!1):r+i<l&&o(!0)}}),[s,c]),(0,l.SL)((function(t){e&&!t.location.hash&&o(!0)})),(0,r.useEffect)((function(){e&&t.hash&&(c.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:a}},Y=n(1839),Q=n(3783),X=n(5525),J=["width","height"],$=function(e){var t=e.width,n=void 0===t?20:t,a=e.height,o=void 0===a?20:a,l=(0,g.Z)(e,J);return r.createElement("svg",(0,h.Z)({viewBox:"0 0 20 20",width:n,height:o,"aria-hidden":"true"},l),r.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))},ee=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function te(e){var t=e.mobile,n=e.dropdownItemsBefore,a=e.dropdownItemsAfter,o=(0,g.Z)(e,ee),c=(0,p.Z)().i18n,i=c.currentLocale,s=c.locales,u=c.localeConfigs,m=(0,l.l5)();function d(e){return u[e].label}var f=s.map((function(e){var t="pathname://"+m.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:d(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===i?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),v=[].concat(n,f,a),b=t?"Languages":d(i);return r.createElement(X.Z,(0,h.Z)({},o,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement($,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.createElement("span",null,b)),items:v}))}function ne(e){return e.mobile?null:r.createElement(H,null)}var re=["type"],ae={default:function(){return X.Z},localeDropdown:function(){return te},search:function(){return ne},docsVersion:function(){return n(7250).Z},docsVersionDropdown:function(){return n(9308).Z},doc:function(){return n(6400).Z}};function oe(e){var t=e.type,n=(0,g.Z)(e,re),a=function(e){void 0===e&&(e="default");var t=ae[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(t);return r.createElement(a,n)}var le=n(5537),ce=n(4478),ie="displayOnlyInLargeViewport_GrZ2",se="navbarHideable_2qcr",ue="navbarHidden_3yey",me="right";var de=function(){var e,t=(0,l.LU)(),n=t.navbar,o=n.items,c=n.hideOnScroll,i=n.style,s=t.colorMode.disableSwitch,u=(0,r.useState)(!1),m=u[0],d=u[1],f=(0,K.Z)(),v=f.isDarkTheme,g=f.setLightTheme,b=f.setDarkTheme,p=G(c),E=p.navbarRef,k=p.isNavbarVisible;(0,Y.Z)(m);var y=(0,r.useCallback)((function(){d(!0)}),[d]),Z=(0,r.useCallback)((function(){d(!1)}),[d]),w=(0,r.useCallback)((function(e){return e.target.checked?b():g()}),[g,b]),C=(0,Q.Z)();(0,r.useEffect)((function(){C===Q.D.desktop&&d(!1)}),[C]);var N=o.some((function(e){return"search"===e.type})),_=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:me)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:me)}))}}(o),S=_.leftItems,L=_.rightItems;return r.createElement("nav",{ref:E,className:(0,a.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===i,"navbar--primary":"primary"===i,"navbar-sidebar--show":m},e[se]=c,e[ue]=c&&!k,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},null!=o&&0!==o.length&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:y,onKeyDown:y},r.createElement(ce.Z,null)),r.createElement(le.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),S.map((function(e,t){return r.createElement(oe,(0,h.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},L.map((function(e,t){return r.createElement(oe,(0,h.Z)({},e,{key:t}))})),!s&&r.createElement(q,{className:ie,checked:v,onChange:w}),!N&&r.createElement(H,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:Z}),r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(le.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:Z}),!s&&m&&r.createElement(q,{checked:v,onChange:w})),r.createElement("div",{className:"navbar-sidebar__items"},r.createElement("div",{className:"menu"},r.createElement("ul",{className:"menu__list"},o.map((function(e,t){return r.createElement(oe,(0,h.Z)({mobile:!0},e,{onClick:Z,key:t}))})))))))},fe="footerLogoLink_MyFc",ve=n(8465),he=["to","href","label","prependBaseUrlToHref"];function ge(e){var t=e.to,n=e.href,a=e.label,o=e.prependBaseUrlToHref,l=(0,g.Z)(e,he),c=(0,k.Z)(t),i=(0,k.Z)(n,{forcePrependBaseUrl:!0});return r.createElement(y.Z,(0,h.Z)({className:"footer__link-item"},n?{href:o?i:n}:{to:c},l),a)}var be=function(e){var t=e.sources,n=e.alt;return r.createElement(ve.Z,{className:"footer__logo",alt:n,sources:t})};var pe=function(){var e=(0,l.LU)().footer,t=e||{},n=t.copyright,o=t.links,c=void 0===o?[]:o,i=t.logo,s=void 0===i?{}:i,u={light:(0,k.Z)(s.src),dark:(0,k.Z)(s.srcDark||s.src)};return e?r.createElement("footer",{className:(0,a.Z)("footer",{"footer--dark":"dark"===e.style})},r.createElement("div",{className:"container"},c&&c.length>0&&r.createElement("div",{className:"row footer__links"},c.map((function(e,t){return r.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.createElement("li",{key:e.href||e.to,className:"footer__item"},r.createElement(ge,e))}))):null)}))),(s||n)&&r.createElement("div",{className:"footer__bottom text--center"},s&&(s.src||s.srcDark)&&r.createElement("div",{className:"margin-bottom--sm"},s.href?r.createElement(y.Z,{href:s.href,className:fe},r.createElement(be,{alt:s.alt,sources:u})):r.createElement(be,{alt:s.alt,sources:u})),n?r.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null},Ee=n(412),ke=(0,l.WA)("theme"),ye="light",Ze="dark",we=function(e){return e===Ze?Ze:ye},Ce=function(e){(0,l.WA)("theme").set(we(e))},Ne=function(){var e=(0,l.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,a=e.respectPrefersColorScheme,o=(0,r.useState)(function(e){return Ee.Z.canUseDOM?we(document.documentElement.getAttribute("data-theme")):we(e)}(t)),c=o[0],i=o[1],s=(0,r.useCallback)((function(){i(ye),Ce(ye)}),[]),u=(0,r.useCallback)((function(){i(Ze),Ce(Ze)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",we(c))}),[c]),(0,r.useEffect)((function(){if(!n)try{var e=ke.get();null!==e&&i(we(e))}catch(t){console.error(t)}}),[i]),(0,r.useEffect)((function(){n&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;i(t?Ze:ye)}))}),[]),{isDarkTheme:c===Ze,setLightTheme:s,setDarkTheme:u}},_e=n(2924);var Se=function(e){var t=Ne(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return r.createElement(_e.Z.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:o}},e.children)},Le="docusaurus.tab.",Ie=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],a=(0,r.useCallback)((function(e,t){(0,l.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{var e={};(0,l._f)().forEach((function(t){if(t.startsWith(Le)){var n=t.substring(Le.length);e[n]=(0,l.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),a(e,t)}}},De=(0,r.createContext)(void 0);var Te=function(e){var t=Ie(),n=t.tabGroupChoices,a=t.setTabGroupChoices;return r.createElement(De.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a}},e.children)};function Be(e){var t=e.children;return r.createElement(Se,null,r.createElement(l.pl,null,r.createElement(Te,null,r.createElement(l.L5,null,t))))}function Ae(e){var t=e.locale,n=e.version,a=e.tag,o=t;return r.createElement(Z.Z,null,o&&r.createElement("meta",{name:"docsearch:language",content:o}),n&&r.createElement("meta",{name:"docsearch:version",content:n}),a&&r.createElement("meta",{name:"docsearch:docusaurus_tag",content:a}))}var Me=n(1217);function xe(){var e=(0,p.Z)().i18n,t=e.defaultLocale,n=e.locales,a=(0,l.l5)();return r.createElement(Z.Z,null,n.map((function(e){return r.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function Pe(e){var t=e.permalink,n=(0,p.Z)().siteConfig.url,a=function(){var e=(0,p.Z)().siteConfig.url,t=(0,E.TH)().pathname;return e+(0,k.Z)(t)}(),o=t?""+n+t:a;return r.createElement(Z.Z,null,r.createElement("meta",{property:"og:url",content:o}),r.createElement("link",{rel:"canonical",href:o}))}function Oe(e){var t=(0,p.Z)(),n=t.siteConfig,a=n.favicon,o=n.themeConfig,c=o.metadatas,i=o.image,s=t.i18n,u=s.currentLocale,m=s.localeConfigs,d=e.title,f=e.description,v=e.image,g=e.keywords,b=e.searchMetadatas,E=(0,k.Z)(a),y=(0,l.pe)(d),w=u,C=m[u].direction;return r.createElement(r.Fragment,null,r.createElement(Z.Z,null,r.createElement("html",{lang:w,dir:C}),a&&r.createElement("link",{rel:"shortcut icon",href:E}),r.createElement("title",null,y),r.createElement("meta",{property:"og:title",content:y}),v||i&&r.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.createElement(Me.Z,{description:f,keywords:g,image:v}),r.createElement(Pe,null),r.createElement(xe,null),r.createElement(Ae,(0,h.Z)({tag:l.HX,locale:u},b)),r.createElement(Z.Z,null,c.map((function(e,t){return r.createElement("meta",(0,h.Z)({key:"metadata_"+t},e))}))))}var Ue=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var Re=function(e){var t=e.children,n=e.noFooter,o=e.wrapperClassName,c=e.pageClassName;return Ue(),r.createElement(Be,null,r.createElement(Oe,e),r.createElement(s,null),r.createElement(v,null),r.createElement(de,null),r.createElement("div",{className:(0,a.Z)(l.kM.wrapper.main,o,c)},t),!n&&r.createElement(pe,null))}},5537:function(e,t,n){"use strict";var r=n(2122),a=n(9756),o=n(7294),l=n(6742),c=n(8465),i=n(4996),s=n(2263),u=["imageClassName","titleClassName"];t.Z=function(e){var t=(0,s.Z)(),n=t.siteConfig,m=n.title,d=n.themeConfig.navbar,f=d.title,v=d.logo,h=void 0===v?{src:""}:v,g=t.isClient,b=e.imageClassName,p=e.titleClassName,E=(0,a.Z)(e,u),k=(0,i.Z)(h.href||"/"),y={light:(0,i.Z)(h.src),dark:(0,i.Z)(h.srcDark||h.src)};return o.createElement(l.Z,(0,r.Z)({to:k},E,h.target&&{target:h.target}),h.src&&o.createElement(c.Z,{key:g,className:b,sources:y,alt:h.alt||f||m}),null!=f&&o.createElement("b",{className:p},f))}},5525:function(e,t,n){"use strict";var r=n(2122),a=n(9756),o=n(7294),l=n(6010),c=n(6742),i=n(4996),s=n(5977),u=n(9306),m=n(8617),d=n(3919),f=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],v=["items","position","className"],h=["className"],g=["items","className","position"],b=["className"],p=["mobile"],E="dropdown__link--active";function k(e){var t=e.activeBasePath,n=e.activeBaseRegex,l=e.to,s=e.href,u=e.label,v=e.activeClassName,h=void 0===v?"navbar__link--active":v,g=e.prependBaseUrlToHref,b=(0,a.Z)(e,f),p=(0,i.Z)(l),k=(0,i.Z)(t),y=(0,i.Z)(s,{forcePrependBaseUrl:!0}),Z=u&&s&&!(0,d.Z)(s),w=h===E;return o.createElement(c.Z,(0,r.Z)({},s?{href:g?y:s}:Object.assign({isNavLink:!0,activeClassName:h,to:p},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(k)}}:null),b),Z?o.createElement("span",null,u,o.createElement(m.Z,w&&{width:12,height:12})):u)}function y(e){var t,n=e.items,c=e.position,i=e.className,s=(0,a.Z)(e,v),u=(0,o.useRef)(null),m=(0,o.useRef)(null),d=(0,o.useState)(!1),f=d[0],g=d[1];(0,o.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&g(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);var b=function(e,t){return void 0===t&&(t=!1),(0,l.Z)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return n?o.createElement("div",{ref:u,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===c,"dropdown--right":"right"===c,"dropdown--show":f})},o.createElement(k,(0,r.Z)({className:b(i)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),g(!f))}}),null!=(t=s.children)?t:s.label),o.createElement("ul",{ref:m,className:"dropdown__menu"},n.map((function(e,t){var l=e.className,c=(0,a.Z)(e,h);return o.createElement("li",{key:t},o.createElement(k,(0,r.Z)({onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),g(!1);var r=u.current.nextElementSibling;r&&r.focus()}},activeClassName:E,className:b(l,!0)},c)))})))):o.createElement(k,(0,r.Z)({className:b(i)},s))}function Z(e){var t,n,c,i=e.items,m=e.className,d=(e.position,(0,a.Z)(e,g)),f=(0,o.useRef)(null),v=(0,s.TH)().pathname,h=(0,o.useState)((function(){var e;return null==(e=!(null!=i&&i.some((function(e){return(0,u.Mg)(e.to,v)}))))||e})),p=h[0],E=h[1],y=function(e,t){return void 0===t&&(t=!1),(0,l.Z)("menu__link",{"menu__link--sublist":t},e)};if(!i)return o.createElement("li",{className:"menu__list-item"},o.createElement(k,(0,r.Z)({className:y(m)},d)));var Z=null!=(t=f.current)&&t.scrollHeight?(null==(n=f.current)?void 0:n.scrollHeight)+"px":void 0;return o.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":p})},o.createElement(k,(0,r.Z)({role:"button",className:y(m,!0)},d,{onClick:function(e){e.preventDefault(),E((function(e){return!e}))}}),null!=(c=d.children)?c:d.label),o.createElement("ul",{className:"menu__list",ref:f,style:{height:p?void 0:Z}},i.map((function(e,t){var n=e.className,l=(0,a.Z)(e,b);return o.createElement("li",{className:"menu__list-item",key:t},o.createElement(k,(0,r.Z)({activeClassName:"menu__link--active",className:y(n)},l,{onClick:d.onClick})))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,a.Z)(e,p),l=n?Z:y;return o.createElement(l,r)}},6400:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(2122),a=n(9756),o=n(7294),l=n(5525),c=n(907),i=n(6010),s=n(9306),u=n(8780),m=["docId","activeSidebarClassName","label","docsPluginId"];function d(e){var t,n=e.docId,d=e.activeSidebarClassName,f=e.label,v=e.docsPluginId,h=(0,a.Z)(e,m),g=(0,c.Iw)(v),b=g.activeVersion,p=g.activeDoc,E=(0,s.J)(v).preferredVersion,k=(0,c.yW)(v),y=function(e,t){var n,r=(n=[]).concat.apply(n,e.map((function(e){return e.docs}))),a=r.find((function(e){return e.id===t}));if(!a){var o=r.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+o)}return a}((0,u.uniq)([b,E,k].filter(Boolean)),n);return o.createElement(l.Z,(0,r.Z)({exact:!0},h,{className:(0,i.Z)(h.className,(t={},t[d]=p&&p.sidebar===y.sidebar,t)),label:null!=f?f:y.id,to:y.path}))}},9308:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(2122),a=n(9756),o=n(7294),l=n(5525),c=n(907),i=n(9306),s=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function m(e){var t,n,m=e.mobile,d=e.docsPluginId,f=e.dropdownActiveClassDisabled,v=e.dropdownItemsBefore,h=e.dropdownItemsAfter,g=(0,a.Z)(e,s),b=(0,c.Iw)(d),p=(0,c.gB)(d),E=(0,c.yW)(d),k=(0,i.J)(d),y=k.preferredVersion,Z=k.savePreferredVersionName;var w=function(){var e=p.map((function(e){var t=(null==b?void 0:b.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==b?void 0:b.activeVersion)},onClick:function(){Z(e.name)}}})),t=[].concat(v,e,h);if(!(t.length<=1))return t}(),C=null!=(t=null!=(n=b.activeVersion)?n:y)?t:E,N=m&&w?"Versions":C.label,_=m&&w?void 0:u(C).path;return o.createElement(l.Z,(0,r.Z)({},g,{mobile:m,label:N,to:_,items:w,isActive:f?function(){return!1}:void 0}))}},7250:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(2122),a=n(9756),o=n(7294),l=n(5525),c=n(907),i=n(9306),s=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,a.Z)(e,s),f=(0,c.zu)(m),v=(0,i.J)(m).preferredVersion,h=(0,c.yW)(m),g=null!=(t=null!=f?f:v)?t:h,b=null!=n?n:g.label,p=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(g).path;return o.createElement(l.Z,(0,r.Z)({},d,{label:b,to:p}))}},2924:function(e,t,n){"use strict";var r=n(7294).createContext(void 0);t.Z=r},8465:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(2122),a=n(9756),o=n(7294),l=n(6010),c=n(2263),i=n(5350),s={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},u=["sources","className","alt"],m=function(e){var t=(0,c.Z)().isClient,n=(0,i.Z)().isDarkTheme,m=e.sources,d=e.className,f=e.alt,v=void 0===f?"":f,h=(0,a.Z)(e,u),g=t?n?["dark"]:["light"]:["light","dark"];return o.createElement(o.Fragment,null,g.map((function(e){return o.createElement("img",(0,r.Z)({key:e,src:m[e],alt:v,className:(0,l.Z)(s.themedImage,s["themedImage--"+e],d)},h))})))}},1839:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){void 0===e&&(e=!0),(0,r.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},7898:function(e,t,n){"use strict";var r=n(7294),a=n(412),o=function(){return{scrollX:a.Z.canUseDOM?window.pageXOffset:0,scrollY:a.Z.canUseDOM?window.pageYOffset:0}};t.Z=function(e,t){void 0===t&&(t=[]);var n=(0,r.useRef)(o()),a=function(){var t=o();e&&e(t,n.current),n.current=t};(0,r.useEffect)((function(){var e={passive:!0};return a(),window.addEventListener("scroll",a,e),function(){return window.removeEventListener("scroll",a,e)}}),t)}},5350:function(e,t,n){"use strict";var r=n(7294),a=n(2924);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},3783:function(e,t,n){"use strict";n.d(t,{D:function(){return o}});var r=n(7294),a=n(412),o={desktop:"desktop",mobile:"mobile"};t.Z=function(){var e=a.Z.canUseDOM;function t(){if(e)return window.innerWidth>996?o.desktop:o.mobile}var n=(0,r.useState)(t),l=n[0],c=n[1];return(0,r.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){c(t())}}),[]),l}},6397:function(e,t,n){"use strict";var r=n(5977),a=n(412),o=n(2263);t.Z=function(){var e=(0,r.k6)(),t=(0,r.TH)(),n=(0,o.Z)().siteConfig,l=(n=void 0===n?{}:n).baseUrl;return{searchValue:a.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var r=new URLSearchParams(t.search);n?r.set("q",n):r.delete("q"),e.replace({search:r.toString()})},generateSearchPageLink:function(e){return l+"search?q="+encodeURIComponent(e)}}}}}]);