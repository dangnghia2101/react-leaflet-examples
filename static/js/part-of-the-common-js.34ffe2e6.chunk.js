(this["webpackJsonpreact-leaflet-examples"]=this["webpackJsonpreact-leaflet-examples"]||[]).push([[36],{112:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(74),a=n(85),c=n(86),o=n(75),i=Object(c.d)((function(t,e){var n=t.data,c=Object(a.a)(t,["data"]),i=new o.GeoJSON(n,c);return{instance:i,context:Object(r.a)(Object(r.a)({},e),{},{overlayContainer:i})}}),(function(t,e,n){e.style!==n.style&&(null==e.style?t.resetStyle():t.setStyle(e.style))}))},59:function(t,e,n){"use strict";n.r(e);var r=n(74),a=n(93),c=n(9),o=n(0),i=n(92),l=n(112),s=n(116),u=n(89),b=n(101),f=n(84),j=n(1),p=[52.22977,21.01178],y=[{lat:52.22990558765487,lng:21.01168513298035},{lat:52.22962958994604,lng:21.011593937873844},{lat:52.2297445891999,lng:21.012012362480167}],O={steps:64,units:"meters",options:{}},d={color:"yellow",weight:2,opacity:1,fillColor:"yellow",fillOpacity:.7},h=function(){var t=Object(i.a)(),e=Object(o.useState)([]),n=Object(c.a)(e,2),r=n[0],s=n[1];return Object(o.useEffect)((function(){y.map((function(t){var e=t.lat,n=t.lng,r=Object(b.circle)([n,e],30,O);return s((function(t){return[].concat(Object(a.a)(t),[r])}))}))}),[t]),r.length>0?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l.a,{data:r,color:"red",weight:2}),Object(j.jsx)(l.a,{data:b.intersect.apply(void 0,Object(a.a)(r)),style:d})]}):null};e.default=function(){return Object(j.jsxs)(s.a,{center:p,zoom:18,children:[Object(j.jsx)(u.a,Object(r.a)({},f.a)),Object(j.jsx)(h,{})]})}},84:function(t,e,n){"use strict";e.a={attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}},93:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(11);var a=n(17);function c(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(a.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);