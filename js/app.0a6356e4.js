(function(e){function t(t){for(var n,a,i=t[0],c=t[1],u=t[2],d=0,l=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(l.length)l.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o={app:0},s=[];function i(e){return c.p+"js/"+({registration:"registration"}[e]||e)+"."+{"chunk-05bf6872":"5d35bde7","chunk-55074d62":"de96e2ee",registration:"cba9432b","chunk-2d0e5e97":"dda640f9","chunk-736e7560":"3d895c57"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"chunk-05bf6872":1,"chunk-55074d62":1,registration:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({registration:"registration"}[e]||e)+"."+{"chunk-05bf6872":"079af348","chunk-55074d62":"73da8057",registration:"c3c15c6b","chunk-2d0e5e97":"31d6cfe0","chunk-736e7560":"31d6cfe0"}[e]+".css",o=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===n||d===o))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],d=u.getAttribute("data-href");if(d===n||d===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[e],p.parentNode.removeChild(p),r(s)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=s);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=i(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,r[1](l)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/dgtek-portal/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=d;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"0e1f":function(e,t,r){e.exports=r.p+"img/dgtek-logo.a68d9add.svg"},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("5530"),a=(r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("c975"),r("a026")),o=function e(t){if("init"!==t.data.action)return console.warn("Callback has not been removed");a["a"].prototype.__worker.ready=200===t.data.status,a["a"].prototype.__worker.removeEventListener("message",e)},s=location.href.indexOf("dgtek-portal")>0?"dgtek-portal/":"";a["a"].prototype.__worker=new Worker("/".concat(s,"portal.worker.js")),a["a"].prototype.__worker.addEventListener("message",o),a["a"].prototype.__worker.postMessage({action:"init",host:"https://dgtek-staging.herokuapp.com",key:"rAxKIAyY9j3Aq0OZ4TnGHCibU9G6oZZP8NaMOlKeJV9U2qjOKu0xOOQwjw3JzKaewN4DmzQ97aEsUh1XyAsQboJqQpbFpgK0JQkt",secret:"And then there were three"}),a["a"].prototype.$openExternalLink=function(e){window.open(e,"_blank")};var i=a["a"],c=(r("d3b7"),r("8c4f")),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"home-page-content mt-12",attrs:{fluid:""}},[r("v-row",{attrs:{align:"start",justify:"center","justify-md":"end"}},[r("SignIn",{attrs:{reset:e.resetPassword},on:{"update:reset":function(t){e.resetPassword=t}}})],1),e.resetPassword?r("ResetPassword"):e._e()],1)},d=[],l={name:"Home",components:{SignIn:function(){return Promise.all([r.e("chunk-05bf6872"),r.e("chunk-55074d62")]).then(r.bind(null,"677f"))}},data:function(){return{resetPassword:!1}}},p=l,f=(r("cccb"),r("2877")),m=r("6544"),g=r.n(m),h=r("a523"),v=r("0fd9"),b=Object(f["a"])(p,u,d,!1,null,null,null),k=b.exports;g()(b,{VContainer:h["a"],VRow:v["a"]}),a["a"].use(c["a"]);var y=[{path:"/",name:"home",component:k},{path:"/register",name:"register",component:function(){return Promise.all([r.e("chunk-05bf6872"),r.e("registration")]).then(r.bind(null,"3fd1"))}},{path:"*",name:"NotFound",component:function(){return r.e("chunk-2d0e5e97").then(r.bind(null,"9703"))}}],_=new c["a"]({mode:"history",base:"/dgtek-portal/",routes:y}),w=_,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{staticClass:"transparent"},[n("v-app-bar",{staticClass:"homefone",attrs:{app:"",flat:"",height:"80"}},[n("v-card",{staticClass:"transparent text-left mt-4 ml-0",attrs:{flat:"",height:"50"}},[n("v-img",{staticClass:"mr-8",attrs:{src:r("0e1f"),width:"70"}})],1),n("h3",{staticClass:"main-header mt-5"},[e._v("DGtek provisioning portal")]),n("v-spacer"),"home"!==e.$route.name?n("v-btn",{attrs:{text:""},on:{click:function(t){return e.$router.push({name:"home"})}}},[n("v-icon",{attrs:{large:"",color:"primary"}},[e._v("mdi-home")])],1):e._e()],1),n("v-progress-linear",{staticStyle:{"z-index":"5"},attrs:{active:e.progress,indeterminate:e.progress,color:"primary"}}),n("v-main",{staticClass:"main-content mt-8 mb-12"},[n("transition",{attrs:{name:"page-fade-transition",mode:"out-in"}},[n("router-view")],1)],1),n("v-snackbar",{attrs:{timeout:e.timeout,color:e.color,top:""},scopedSlots:e._u([{key:"action",fn:function(t){var r=t.attrs;return[n("v-btn",e._b({staticClass:"close-icon-snackbar",attrs:{color:"#fff",icon:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",r,!1),[n("v-icon",{attrs:{large:""}},[e._v("mdi-close")])],1)]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.text)+" ")]),n("error-message"),n("simple-message"),n("v-row",{staticStyle:{position:"fixed",bottom:"0","z-index":"100",width:"100%",height:"32px",background:"#aaa"},attrs:{justify:"center"}},[n("p",{staticClass:"text-center",staticStyle:{color:"#efefef"}},[n("small",[n("sub",[e._v("2021 © Dgtek Pty. Ltd ABN 61 600 896 115")])])])])],1)},E=[],T=(r("b0c0"),r("69d7"),r("ffaa")),C=r("9073"),V={name:"App",data:function(){return{isActive:!1,progress:!1,headers:{home:"Service Order",services:"Services",documents:"Documents"},signIn:!1,snackbar:!1,timeout:8e3}},computed:{color:function(){return this.authError||this.registeredError||this.error?"#900":"#09b"},text:function(){return this.error||this.registeredError?"Error":"Success"},backgroundImage:function(){return"home"===this.$route.name?T:C}},methods:{errorHandler:function(e){var t=e.data,r=t.errorType,n=t.errorMessage;this.$root.$emit("open-error-popup",{errorType:r,errorMessage:n})},messageHandler:function(e){var t=e.data,r=t.messageType,n=t.messageText;this.$root.$emit("open-message-popup",{messageType:r,messageText:n})}},mounted:function(){this.$root.$on("progress-event",function(e){this.progress=e.progress}.bind(this)),this.__worker.addEventListener("message",function(e){"300"!==e.data.status&&(e.data.error&&this.errorHandler(e),e.data.message&&this.messageHandler(e))}.bind(this))}},F=V,P=(r("034f"),r("7496")),A=r("40dc"),M=r("8336"),O=r("b0af"),S=r("132d"),$=r("adda"),j=r("f6c4"),B=r("8e36"),D=r("2db4"),L=r("2fa4"),I=Object(f["a"])(F,x,E,!1,null,null,null),N=I.exports;g()(I,{VApp:P["a"],VAppBar:A["a"],VBtn:M["a"],VCard:O["a"],VIcon:S["a"],VImg:$["a"],VMain:j["a"],VProgressLinear:B["a"],VRow:v["a"],VSnackbar:D["a"],VSpacer:L["a"]});var G=r("f309");a["a"].use(G["a"]);var H=new G["a"]({icons:{iconfont:"mdi",values:{add:"mdi-note-plus",buildings:"mdi-home-city-outline",chat:"mdi-account-voice",delete:"mdi-trash-can",dropdown:"mdi-menu-down",edit:"mdi-pencil",error:"mdi-alert",externalLink:"mdi-open-in-new",list:"mdi-view-list",menu:"mdi-dots-vertical",message:"mdi-android-messages",orders:"mdi-printer",pdf:"mdi-file-pdf",pageNext:"mdi-page-next-outline",pagePrev:"mdi-page-previous-outline",send:"mdi-send",services:"mdi-apps-box"}},theme:{themes:{light:{primary:"#881F1A",secondary:"#E82F37",buttons:"#881F1A",buttonActive:"#882F1A",homefone:"#FBFBFB",accent:"#f3f3f3",inputs:"#EFEFEF",activefield:"#D9D9D9",warning:"#FAFF00",info:"#fbfbfb"},dark:{primary:"#881F1A",secondary:"#E82F37",buttons:"#881F1A",buttonActive:"#882F1A",homefone:"#FBFBFB",accent:"#f3f3f3",inputs:"#EFEFEF",activefield:"#D9D9D9",warning:"#FAFF00",info:"#fbfbfb"}}}}),K=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{staticClass:"pa-4",attrs:{"max-width":"480px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",{attrs:{flat:""}},[r("v-toolbar",{attrs:{dark:"",dense:"",color:"buttons"}},[r("v-icon",{staticClass:"mr-4"},[e._v(" $error ")]),r("v-toolbar-title",[e._v(" Error ")]),r("v-spacer"),r("v-btn",{attrs:{icon:""},on:{click:function(t){e.dialog=!1}}},[r("v-icon",{attrs:{large:""}},[e._v(" $close ")])],1)],1),r("v-card-text",{staticClass:"text-center mt-10"},[r("h4",[e._v(e._s(e.errorType||"Unknown error type"))])]),r("v-card-text",{staticClass:"text-center"},[r("p",[e._v(e._s(e.errorMessage||"Unknown Error"))])])],1)],1)},U=[],J={name:"ErrorMessage",data:function(){return{error:!1,errorType:"",errorMessage:""}},computed:{dialog:{get:function(){return this.error},set:function(e){!e&&this.resetError()}}},methods:{resetError:function(){this.error=!1,this.errorType="",this.errorMessage=""}},mounted:function(){this.$root.$on("open-error-popup",function(e){this.error=!0,this.errorType=e.errorType,this.errorMessage=e.errorMessage}.bind(this))}},R=J,W=r("99d9"),q=r("169a"),z=r("71d9"),Q=r("2a7f"),Z=Object(f["a"])(R,K,U,!1,null,null,null),X=Z.exports;g()(Z,{VBtn:M["a"],VCard:O["a"],VCardText:W["a"],VDialog:q["a"],VIcon:S["a"],VSpacer:L["a"],VToolbar:z["a"],VToolbarTitle:Q["a"]});var Y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{staticClass:"pa-4",attrs:{"max-width":"480px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",{attrs:{flat:""}},[r("v-toolbar",{attrs:{dark:"",dense:"",color:"#999"}},[r("v-icon",{staticClass:"mr-4"},[e._v(" $message ")]),r("v-toolbar-title",[e._v(" Message ")]),r("v-spacer"),r("v-btn",{attrs:{icon:""},on:{click:function(t){e.dialog=!1}}},[r("v-icon",{attrs:{large:""}},[e._v(" $close ")])],1)],1),r("v-card-text",{staticClass:"text-center mt-10"},[r("h4",[e._v(e._s(e.messageType||""))])]),r("v-card-text",{staticClass:"text-center"},[r("p",[e._v(e._s(e.messageText))])])],1)],1)},ee=[],te={name:"MessagePopup",data:function(){return{message:!1,messageType:"",messageText:""}},computed:{dialog:{get:function(){return this.message},set:function(e){!e&&this.resetMessage()}}},methods:{resetMessage:function(){this.message=!1,this.messageType="",this.messageText=""}},mounted:function(){this.$root.$on("open-message-popup",function(e){this.message=!0,this.messageType=e.messageType,this.messageText=e.messageText}.bind(this))}},re=te,ne=Object(f["a"])(re,Y,ee,!1,null,null,null),ae=ne.exports;g()(ne,{VBtn:M["a"],VCard:O["a"],VCardText:W["a"],VDialog:q["a"],VIcon:S["a"],VSpacer:L["a"],VToolbar:z["a"],VToolbarTitle:Q["a"]});r("4d86"),r("cb36");i.config.productionTip=!1,i.component("error-message",X),i.component("simple-message",ae);var oe=new i({router:w,vuetify:H,render:function(e){return e(N)}}).$mount("#app");oe.dispatchProgressEvent=function(e){oe.$emit("progress-event",{progress:e})},oe.__worker.dispatchProgressEvent=oe.dispatchProgressEvent,oe.sendMessageToWorker=function(e){oe.dispatchProgressEvent(!0),oe.__worker.postMessage(e)},oe.__worker.onmessage=function(e){this.dispatchProgressEvent(!1);var t=e.data,r=t.status,n=t.action,a=t.result;if(300===r)return console.log("WORKER DEBUGGING MESSAGE:\n",e.data);if("init"!==n&&200===r&&"redirect"===n){var o=a.data,s=o.role,i=o.url;oe.$openExternalLink(i["RSP"===s?"cabinet":"admin"])}},oe.__authorize=function(e,t){oe.sendMessageToWorker({action:"auth",login:e,password:t})},oe.__registrate=function(e){oe.sendMessageToWorker(Object(n["a"])({action:"registrate"},e))}},"5ced":function(e,t,r){},"85ec":function(e,t,r){},9073:function(e,t,r){e.exports=r.p+"img/Webb-Bridge-Melbourne-Drawing-effect.36ac6548.svg"},cccb:function(e,t,r){"use strict";r("5ced")},ffaa:function(e,t,r){e.exports=r.p+"img/melbourne-2-1.36f066f0.svg"}});
//# sourceMappingURL=app.0a6356e4.js.map