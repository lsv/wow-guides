(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2],{272:function(t,e,n){"use strict";n.r(e);n(71);var o=n(29),c=n(38),r=n(39),l=n(20),f=n(9),d=(n(27),n(21));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,c)}else n=o.apply(this,arguments);return Object(r.a)(this,n)}}var v=function(t,e,n,desc){var o,c=arguments.length,r=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(r=(c<3?o(r):c>3?o(e,n,r):o(e,n))||r);return c>3&&r&&Object.defineProperty(e,n,r),r},y=function(t){Object(c.a)(n,t);var e=h(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return n}(d.Vue);v([Object(d.Prop)()],y.prototype,"tocs",void 0);var m=y=v([Object(d.Component)({components:{TocSub:j}})],y),O=n(19),component=Object(O.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"toc"},t._l(t.tocs,(function(e){return n("li",{key:e.id,class:"toc"+e.depth},[n("nuxt-link",{attrs:{to:"#"+e.id},domProps:{textContent:t._s(e.text)}})],1)})),0)}),[],!1,null,null,null),j=e.default=component.exports},284:function(t,e,n){"use strict";n.r(e);n(71);var o=n(29),c=n(60),r=n(38),l=n(39),f=n(20),d=n(9),h=(n(27),n(11),n(0)),v=n(21),y=n(272);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,c)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var O=function(t,e,n,desc){var o,c=arguments.length,r=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(r=(c<3?o(r):c>3?o(e,n,r):o(e,n))||r);return c>3&&r&&Object.defineProperty(e,n,r),r},j=function(t){Object(r.a)(n,t);var e=m(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).isLoading=!0,t.document={},t.prev="",t.next="",t}return Object(c.a)(n,[{key:"loadPageData",value:function(){var t=this;this.isLoading=!0,this.$content("raid").only(["title","slug"]).sortBy("killorder","asc").surround(this.slug).fetch().then((function(e){t.prev=e[0],t.next=e[1]})),this.$content("raid",this.slug).fetch().then((function(e){t.document=e})).finally((function(){t.isLoading=!1}))}},{key:"mounted",value:function(){this.loadPageData()}}]),n}(h.default),x=j=O([Object(v.Component)({components:{Toc:y.default},asyncData:function(t){return{slug:t.params.slug}}})],j),R=n(19),component=Object(R.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.document?n("article",{staticClass:"container"},[n("section",{staticClass:"hero is-small is-primary"},[n("div",{staticClass:"hero-body"},[n("h1",{staticClass:"title",domProps:{textContent:t._s(t.document.title)}}),t._v(" "),n("h2",{staticClass:"subtitle",domProps:{textContent:t._s(t.document.zone)}})])]),t._v(" "),n("div",{staticClass:"pagination"},[t.prev?n("b-button",{attrs:{type:"is-primary is-light",size:"is-small",tag:"nuxt-link",to:t.prev.slug},domProps:{textContent:t._s("← "+t.prev.title)}}):n("span"),t._v(" "),t.next?n("b-button",{attrs:{type:"is-primary is-light",size:"is-small",tag:"nuxt-link",to:t.next.slug},domProps:{textContent:t._s(t.next.title+" →")}}):n("span")],1),t._v(" "),n("section",{staticClass:"toc"},[n("toc",{attrs:{tocs:t.document.toc}})],1),t._v(" "),n("nuxt-content",{attrs:{document:t.document}})],1):n("b-loading",{attrs:{"is-full-page":""},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Toc:n(272).default})}}]);