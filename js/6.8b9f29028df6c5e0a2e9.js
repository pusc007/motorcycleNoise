(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{402:function(t,e,s){},403:function(t,e,s){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-app-bar",{attrs:{app:"","elevate-on-scroll":""}},[e("v-container",{staticClass:"py-0 fill-height"},[e("v-avatar",{staticClass:"mr-10",attrs:{color:"grey darken-1",size:"32"}}),this._v(" "),this._t("items"),this._v(" "),e("v-spacer"),this._v(" "),this._t("endItems")],2)],1)};n._withStripped=!0;var i={components:{},data:function(){return{}},mounted:function(){},methods:{},computed:{}},a=s(115),r=Object(a.a)(i,n,[],!1,null,"36ecb3f0",null);r.options.__file="src/vue/page/components/Header.vue";e.a=r.exports},404:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-navigation-drawer",{attrs:{right:"",app:"",temporary:""},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[t._t("content")],2)};n._withStripped=!0;var i={components:{},props:{},watch:{},data:function(){return{isOpen:!1,resizeID:void 0}},mounted:function(){window.addEventListener("resize",this.resize)},beforeDestroy:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){var t=this;clearTimeout(this.resizeID),this.resizeID=setTimeout((function(){t.isOpen&&t.$vuetify.breakpoint.mdAndUp&&(t.isOpen=!1)}),300)}},computed:{}},a=s(115),r=Object(a.a)(i,n,[],!1,null,"503b7cf1",null);r.options.__file="src/vue/page/components/Sidebar.vue";e.a=r.exports},405:function(t,e,s){"use strict";s(402)},407:function(t,e,s){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-btn",{staticClass:"pageItem",attrs:{depressed:"",text:"",to:{name:"Reservation"},"active-class":"active"}},[this._v("預約")]),this._v(" "),e("v-btn",{staticClass:"pageItem",attrs:{depressed:"",text:"",to:{name:"Transfer"},"active-class":"active"}},[this._v("轉移縣市")])],1)};n._withStripped=!0;var i={components:{},data:function(){return{}},mounted:function(){},methods:{},computed:{}},a=(s(405),s(115)),r=Object(a.a)(i,n,[],!1,null,"044a9654",null);r.options.__file="src/vue/page/components/Items01.vue";e.a=r.exports},451:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-sheet",[s("Header",{scopedSlots:t._u([{key:"items",fn:function(){return[s("Items",{staticClass:"d-none d-md-flex"})]},proxy:!0},{key:"endItems",fn:function(){return[s("v-btn",{staticClass:"d-none d-md-flex cyan white--text",attrs:{depressed:"",to:"/login"}},[t._v("登出")]),t._v(" "),s("v-app-bar-nav-icon",{staticClass:"d-flex d-md-none",on:{click:function(e){t.$refs.sidebar.isOpen=!t.$refs.sidebar.isOpen}}})]},proxy:!0}])}),t._v(" "),s("v-main",{staticClass:"main"},[s("v-container",[s("div",{staticClass:"d-flex justify-center ma-4"},[t._v("檢測資訊")]),t._v(" "),s("div",{staticClass:"d-flex justify-center"},[s("v-card",{staticClass:"pa-4",attrs:{flat:""}},[s("v-card-text",[s("div",{staticClass:"text-h6 ma-2"},[t._v("公文號：XXXXX")]),t._v(" "),s("div",{staticClass:"text-h6 ma-2"},[t._v("應到檢日期：2021/03/08")]),t._v(" "),s("div",{staticClass:"text-h6 ma-2"},[t._v("檢測地點：臺南監理站(臺南市東區崇德路1號)")]),t._v(" "),s("div",{staticClass:"text-h6 ma-2"},[t._v("到檢狀態：等待中 | 完成 | 逾期")]),t._v(" "),s("div",{staticClass:"text-h6 ma-2"},[t._v("到檢結果：合格 | 不合格")])])],1)],1)])],1),t._v(" "),s("Sidebar",{ref:"sidebar",scopedSlots:t._u([{key:"content",fn:function(){return[s("div",{staticClass:"d-flex pa-4"},[s("v-btn",{staticClass:"cyan white--text",attrs:{depressed:"",to:"/login"}},[t._v("登出")]),t._v(" "),s("v-spacer"),t._v(" "),s("v-icon",{on:{click:function(e){t.$refs.sidebar.isOpen=!1}}},[t._v("\n          mdi-close\n        ")])],1),t._v(" "),s("Items",{staticClass:"d-flex flex-column"})]},proxy:!0}])})],1)};n._withStripped=!0;var i=s(403),a=s(407),r=s(404),c={components:{Header:i.a,Items:a.a,Sidebar:r.a},data:function(){return{}},mounted:function(){},methods:{},computed:{}},o=s(115),v=Object(o.a)(c,n,[],!1,null,"7c38497c",null);v.options.__file="src/vue/page/Info.vue";e.default=v.exports}}]);