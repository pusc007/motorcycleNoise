(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{400:function(t,e,n){"use strict";n.d(e,"f",(function(){return f})),n.d(e,"b",(function(){return d})),n.d(e,"e",(function(){return l})),n.d(e,"c",(function(){return v})),n.d(e,"d",(function(){return p})),n.d(e,"g",(function(){return m})),n.d(e,"a",(function(){return _}));var i=n(401),s=n.n(i);n(405);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){s()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var a=function(t){var e=!0,n=new Promise((function(n,i){t((function(){e&&n.apply(void 0,arguments)}),i)}));return n.cancel=function(){e=!1},n},c={userList:[{casenum:"112233445566",name:"黃大大",id:"S123456789",carnum:"AAA-1234",address:"高雄市鳳山區",reserv:"",extend:"",county:"",station:"",result:"",token:"123456789"},{casenum:"003388996677",name:"王大明",id:"S333666999",carnum:"BBB-5678",address:"台南市安平區",reserv:"",extend:"",county:"",station:"",result:"",token:"123456789"},{casenum:"003388998877",name:"洪大明",id:"S333666888",carnum:"BBB-2468",address:"台南市安平區",reserv:"2021-05-13",extend:"",county:"",station:"",result:"",token:"123456789"},{casenum:"003388008811",name:"陳大明",id:"S333777999",carnum:"BBB-1357",address:"台南市安平區",reserv:"2021-05-16",extend:"2021-05-19",county:"",station:"",result:"",token:"123456789"}],stationList:[{county:"高雄市",station:"高雄監理站01"},{county:"高雄市",station:"高雄監理站02"},{county:"高雄市",station:"高雄監理站03"},{county:"臺南市",station:"臺南監理站01"},{county:"臺南市",station:"臺南監理站02"},{county:"臺南市",station:"臺南監理站03"}],openTimeList:[{station:"高雄監理站01",date:"2021-05-13",maxcount:20},{station:"高雄監理站01",date:"2021-05-16",maxcount:24},{station:"高雄監理站01",date:"2021-05-19",maxcount:20},{station:"高雄監理站02",date:"2021-05-22",maxcount:20}]},u=function(t){return c.userList.find((function(e){return e.token===t}))},f=function(t,e){return a((function(n,i){setTimeout((function(){var s=c.userList.find((function(n){return n.casenum===t&&n.carnum==e}));s?n(s.token):i("fail")}),500)}))},d=function(t){return a((function(e,n){setTimeout((function(){if(u(t)){var i=[];c.stationList.forEach((function(t){i.includes(t.county)||i.push({text:t.county})})),e(i)}else n("token")}),500)}))},l=function(t,e){return a((function(n,i){setTimeout((function(){u(t)?e?n(c.stationList.filter((function(t){return t.county===e})).map((function(t){return{text:t.station}}))):i("error"):i("token")}),500)}))},v=function(t){return a((function(e,n){setTimeout((function(){var i=u(t);i?e(i):n("token")}),500)}))},p=function(t,e,n,i){return a((function(s,o){setTimeout((function(){if(u(t))if(e&&n&&i){var a=c.openTimeList.filter((function(t){var s=t.date.split(/\-/g);return t.station===e&&s[0]===n.toString()&&s[1]===i.toString().padStart(2,"0")}));a=a.map((function(t){var e=t.date,n=c.userList.filter((function(t){return t.reserv===e||t.extend===e}));return r(r({},t),{},{count:n.length})})),s(a)}else o("error");else o("token")}),500)}))},m=function(t,e,n,i){return a((function(s,o){setTimeout((function(){var r=u(t);r?e&&n&&i?(r.county=e,r.station=n,r.reserv=i,s()):o("error"):o("token")}),500)}))},_=function(t,e){return a((function(n,i){setTimeout((function(){var s=u(t);s?(e?i("error"):s.extend=e,n()):i("token")}),500)}))}},402:function(t,e,n){"use strict";e.a=n.p+"img/logo.996f07b8ca77ffb8cfc3df411c585003.png"},403:function(t,e,n){},404:function(t,e,n){},406:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{staticClass:"bar",attrs:{app:"","elevate-on-scroll":""}},[n("v-container",{staticClass:"pa-0 fill-height"},[n("div",{staticClass:"mr-10 d-flex flex-md-column align-center"},[n("img",{staticClass:"logo",attrs:{src:t.logo}})]),t._v(" "),n("Menu",{staticClass:"d-none d-md-flex"}),t._v(" "),n("v-spacer"),t._v(" "),n("Logout",{staticClass:"d-none d-md-flex"}),t._v(" "),n("v-app-bar-nav-icon",{staticClass:"d-flex d-md-none",on:{click:function(e){t.$refs.sidebar.isOpen=!t.$refs.sidebar.isOpen}}})],1)],1),t._v(" "),n("Sidebar",{ref:"sidebar",scopedSlots:t._u([{key:"content",fn:function(){return[n("div",{staticClass:"d-flex pa-4"},[n("Logout"),t._v(" "),n("v-spacer"),t._v(" "),n("v-icon",{on:{click:function(e){t.$refs.sidebar.isOpen=!1}}},[t._v("\n          mdi-close\n        ")])],1),t._v(" "),n("Menu",{staticClass:"d-flex flex-column"})]},proxy:!0}])})],1)};i._withStripped=!0;var s=function(){var t=this.$createElement;return(this._self._c||t)("v-btn",{staticClass:"cyan white--text",attrs:{depressed:""},on:{click:this.logout_click}},[this._v("登出")])};s._withStripped=!0;var o={components:{},data:function(){return{}},mounted:function(){},methods:{logout_click:function(){this.$store.dispatch("setLogout"),this.$router.push({name:"Login"})}},computed:{}},r=n(115),a=Object(r.a)(o,s,[],!1,null,"6ea3a2e6",null);a.options.__file="src/vue/pages/components/Logout.vue";var c=a.exports,u=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.$store.state.info.reserv?[this.$store.state.info.extend?this._e():e("v-btn",{staticClass:"pageItem",attrs:{depressed:"",text:"",to:{name:"Extension"},"active-class":"active"}},[this._v("展延")]),this._v(" "),e("v-btn",{staticClass:"pageItem",attrs:{depressed:"",text:"",to:{name:"Info"},"active-class":"active"}},[this._v("資訊")])]:[e("v-btn",{staticClass:"pageItem",attrs:{depressed:"",text:"",to:{name:"Reservation"},"active-class":"active"}},[this._v("預約")])]],2)};u._withStripped=!0;var f={components:{},data:function(){return{}},mounted:function(){},methods:{},computed:{}},d=(n(407),Object(r.a)(f,u,[],!1,null,"3111d13b",null));d.options.__file="src/vue/pages/components/Menu.vue";var l=d.exports,v=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-navigation-drawer",{attrs:{right:"",app:"",temporary:""},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[t._t("content")],2)};v._withStripped=!0;var p={components:{},props:{},watch:{},data:function(){return{isOpen:!1,resizeID:void 0}},mounted:function(){window.addEventListener("resize",this.resize)},beforeDestroy:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){var t=this;clearTimeout(this.resizeID),this.resizeID=setTimeout((function(){t.isOpen&&t.$vuetify.breakpoint.mdAndUp&&(t.isOpen=!1)}),300)}},computed:{}},m=Object(r.a)(p,v,[],!1,null,"2e4a0ea0",null);m.options.__file="src/vue/pages/components/Sidebar.vue";var _=m.exports,h=n(402),x={components:{Logout:c,Menu:l,Sidebar:_},data:function(){return{logo:h.a}},mounted:function(){},methods:{},computed:{}},b=(n(408),Object(r.a)(x,i,[],!1,null,"023c3669",null));b.options.__file="src/vue/pages/components/Header.vue";e.a=b.exports},407:function(t,e,n){"use strict";n(403)},408:function(t,e,n){"use strict";n(404)},423:function(t,e,n){},473:function(t,e,n){"use strict";n(423)},477:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"content"},[n("Header"),t._v(" "),n("v-main",{staticClass:"main"},[n("v-container",[n("div",{staticClass:"d-flex justify-center ma-4"},[t._v("檢測資訊")]),t._v(" "),n("div",{staticClass:"d-flex justify-center"},[t.infoLoading?n("div",{staticClass:"d-flex justify-center text-h6"},[t._v("載入中...")]):n("v-card",{staticClass:"pa-4",attrs:{flat:""}},[n("v-card-text",[n("div",{staticClass:"text-h6 ma-2"},[t._v("公文號："+t._s(t.info.casenum))]),t._v(" "),n("div",{staticClass:"text-h6 ma-2"},[t._v("車牌號："+t._s(t.info.carnum))]),t._v(" "),n("div",{staticClass:"text-h6 ma-2"},[t._v("預約日期："+t._s(t.info.reserv))]),t._v(" "),n("div",{staticClass:"text-h6 ma-2"},[t._v("展延日期："+t._s(t.info.extend))]),t._v(" "),n("div",{staticClass:"text-h6 ma-2"},[t._v("檢測縣市："+t._s(t.info.county))]),t._v(" "),n("div",{staticClass:"text-h6 ma-2"},[t._v("檢測站點："+t._s(t.info.station))]),t._v(" "),n("div",{staticClass:"text-h6 ma-2"},[t._v("檢測結果："+t._s(t.info.result))])])],1)],1)])],1)],1)};i._withStripped=!0;var s=n(406),o=n(400),r={components:{Header:s.a},data:function(){return{info:{},infoLoading:!1}},mounted:function(){var t=this;this.infoLoading=!0,Object(o.c)(this.$store.state.token).then((function(e){t.infoLoading=!1,t.info=e}))},methods:{},computed:{}},a=(n(473),n(115)),c=Object(a.a)(r,i,[],!1,null,"771daf7b",null);c.options.__file="src/vue/pages/Info.vue";e.default=c.exports}}]);