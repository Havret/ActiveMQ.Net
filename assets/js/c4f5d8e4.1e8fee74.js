/*! For license information please see c4f5d8e4.1e8fee74.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{162:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var i=r.apply(null,n);i&&e.push(i)}}else if("object"===l)if(n.toString===Object.prototype.toString)for(var c in n)a.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},79:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(0),l=a.n(r),i=a(162),c=a.n(i),s=a(98),o=a(92),m=a(16),u=a(93),d=a(80),p=a.n(d),g=[{title:l.a.createElement(l.a.Fragment,null,".NET Standard compliant"),imageUrl:"img/dot-net-core.svg",description:l.a.createElement(l.a.Fragment,null,".NET ActiveMQ Artemis Client is .NET Standard 2.0 compliant and can be used in any .NET Core application.")},{title:l.a.createElement(l.a.Fragment,null,"Asynchronous"),imageUrl:"img/undraw_synchronize_ccxk.svg",description:l.a.createElement(l.a.Fragment,null,".NET ActiveMQ Artemis Client was designed from the ground up to be fully asynchronous.")},{title:l.a.createElement(l.a.Fragment,null,"Fast"),imageUrl:"img/undraw_To_the_stars_qhyy.svg",description:l.a.createElement(l.a.Fragment,null,".NET ActiveMQ Artemis Client is a very lightweight wrapper around AmqpNetLite and as such introduces very little overhead.")}];function E(e){var t=e.imageUrl,a=e.title,n=e.description,r=Object(u.a)(t);return l.a.createElement("div",{className:c()("col col--4",p.a.feature)},r&&l.a.createElement("div",{className:"text--center"},l.a.createElement("img",{className:p.a.featureImage,src:r,alt:a})),l.a.createElement("h3",null,a),l.a.createElement("p",null,n))}t.default=function(){var e=Object(m.default)().siteConfig,t=void 0===e?{}:e;return l.a.createElement(s.a,{title:"Hello from "+t.title,description:"Description will go into a meta tag in <head />"},l.a.createElement("header",{className:c()("hero hero--primary",p.a.heroBanner)},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"hero__title"},t.title),l.a.createElement("p",{className:"hero__subtitle"},t.tagline),l.a.createElement("div",{className:p.a.buttons},l.a.createElement(o.a,{className:c()("button button--outline button--secondary button--lg",p.a.getStarted),to:Object(u.a)("docs/getting-started")},"Get Started")))),l.a.createElement("main",null,g&&g.length&&l.a.createElement("section",{className:p.a.features},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},g.map((function(e,t){return l.a.createElement(E,Object(n.a)({key:t},e))})))))))}}}]);