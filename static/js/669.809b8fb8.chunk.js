"use strict";(self.webpackChunktask=self.webpackChunktask||[]).push([[669],{5669:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var n=s(4165),r=s(5861),a=s(9439),c=s(2791),i=s(9135),l=s(9555),o=s(1131),u=s(184),d="https://api.jikan.moe/v4/anime";function m(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),s=t[0],m=t[1],f=(0,c.useState)(!0),h=(0,a.Z)(f,2),x=h[0],j=h[1],p=(0,c.useState)(1),v=(0,a.Z)(p,2),k=v[0],y=v[1],w=(0,c.useContext)(l.j),N=w.searchInput,b=w.setEveryAnime,g=w.filteredResults;(0,c.useEffect)((function(){function e(){return(e=(0,r.Z)((0,n.Z)().mark((function e(){var t,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(d);case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Error! status: ".concat(t.status));case 6:return e.next=8,t.json();case 8:s=e.sent,b(s.data),m(s.data),j(!1),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[b,m,j]);var Z=N.length>1?g:s;return(0,u.jsx)("main",{children:(0,u.jsx)("section",{className:"latest-animes mt-5",children:(0,u.jsxs)("div",{className:"container",children:[(0,u.jsxs)("div",{className:"row align-items-center",children:[(0,u.jsx)("div",{className:"col-md-10",children:(0,u.jsx)("h2",{className:"text-primary fs-3",children:(0,u.jsx)("strong",{children:"Latest Animes"})})}),(0,u.jsx)("div",{className:"col-md-2",children:(0,u.jsx)("div",{className:"d-flex justify-content-end my-2",children:(0,u.jsxs)("button",{className:"btn text-primary",onClick:function(){y(k+1)},children:[(0,u.jsx)("strong",{children:"More"})," ",(0,u.jsx)(i.wEH,{style:{fontSize:"8px"}})]})})})]}),Array.from({length:k},(function(e,t){var s=4*t,n=s+4;return(0,u.jsx)("div",{className:"row d-flex justify-content-center align-items-center",children:x?(0,u.jsx)("h2",{className:"text-success fw-bold text-center my-5",children:"Loading..."}):Z.slice(s,n).map((function(e){return(0,u.jsx)(o.Z,{data:e},e.mal_id)}))},t)}))]})})})}}}]);
//# sourceMappingURL=669.809b8fb8.chunk.js.map