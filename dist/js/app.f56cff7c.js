(function(t){function e(e){for(var r,s,l=e[0],i=e[1],u=e[2],d=0,p=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);c&&c(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,l=1;l<n.length;l++){var i=n[l];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Most Common Use Case")]),t._v("| "),n("router-link",{attrs:{to:{name:"multi-urls"}}},[t._v("Multiple URL Example")]),t._v("| "),n("router-link",{attrs:{to:{name:"nested"}}},[t._v("Nested Requests")]),t._v(" | "),n("router-link",{attrs:{to:{name:"post"}}},[t._v("Let's Post")]),t._v(" | "),n("router-link",{attrs:{to:{name:"error"}}},[t._v("Let's Occur An Error")])],1),n("router-view")],1)},a=[],s=(n("034f"),n("2877")),l={},i=Object(s["a"])(l,o,a,!1,null,null,null),u=i.exports,c=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Most Common Use Case")]),n("pre",[t._v(t._s(t.data))]),n("Fetch",{attrs:{url:"https://yesno.wtf/api"},on:{resolved:function(e){return t.data=e}}})],1)},p=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.error?n("p",[t._v(" "+t._s(t.errorData)+" "),n("button",{on:{click:function(e){t.error=!1}}},[t._v("Close")])]):t._e(),n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]},[t._v("[ Loading... ]")])])},f=[],v=(n("99af"),n("d3b7"),n("3ca3"),n("ddb0"),{props:{start:{type:Boolean,default:!0},url:[String,Object],options:{type:Object,default:function(){return{method:"GET"}}},responseType:{type:String,default:"json"}},data:function(){return{loading:!1,dataset:null,error:!1,errorData:null}},watch:{start:function(t){!0===t&&(this.error=!1,this.loading=!0,this.dispatchAll(this.url))}},created:function(){this.loading=this.start,!0===this.start&&this.dispatchAll(this.url)},methods:{dispatchAll:function(t){var e=this,n=[];if("string"===typeof t)n.push(this.dispatch(t));else for(var r in t)n.push(this.dispatch(t[r],r));this.dataset={},Promise.all(n).then((function(){if(e.loading=!1,e.$emit("resolved",e.error?null:e.dataset,e.error),e.error)var t=e.$watch("error",(function(n){!1===n&&(t(),e.$emit("finished",!1))}));else e.$emit("finished",!0)}))},dispatch:function(t,e){var n=this,r=fetch(t,this.options).then((function(t){if(t.ok)return 204===t.status?null:t[n.responseType]();switch(t.status){case 400:throw new Error("Input data is not valid.");case 401:throw new Error("Data wasn't matched.");case 404:throw new Error("Not found.");default:throw new Error("".concat(t.status,": ").concat(t.statusText))}})).then((function(t){e?n.dataset[e]=t:n.dataset=t})).catch((function(t){n.errorData="Something went wrong. [".concat(t.message,"]"),n.error=!0}));return r}}}),m=v,_=Object(s["a"])(m,h,f,!1,null,null,null),w=_.exports,b={components:{Fetch:w},data:function(){return{data:null}}},g=b,y=Object(s["a"])(g,d,p,!1,null,null,null),O=y.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Multiple URL Example")]),n("pre",[t._v(t._s(t.data1))]),n("pre",[t._v(t._s(t.data2))]),n("Fetch",{attrs:{url:{randomYesno:"https://yesno.wtf/api",randomYesnoAgain:"https://yesno.wtf/api"}},on:{resolved:t.takeData}})],1)},j=[],x={components:{Fetch:w},data:function(){return{data1:null,data2:null}},methods:{takeData:function(t){this.data1=t.randomYesno,this.data2=t.randomYesnoAgain}}},k=x,S=Object(s["a"])(k,E,j,!1,null,null,null),P=S.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Nested Requests")]),n("h5",[t._v("Select a location to fetch its areas:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedUrl,expression:"selectedUrl"}],on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedUrl=e.target.multiple?n:n[0]},function(e){t.locationChanged=!0}]}},t._l(t.locations,(function(e){return n("option",{key:e.name,domProps:{value:e.url}},[t._v(t._s(e.name))])})),0),t._l(t.areas,(function(e,r){return n("div",{key:e.name},[t._v(" "+t._s(r+1)+". "+t._s(e.name)+" ")])})),n("Fetch",{attrs:{url:"https://pokeapi.co/api/v2/location?offset=20&limit=10"},on:{resolved:function(e){return t.locations=e.results}}}),n("Fetch",{attrs:{start:t.locationChanged,url:t.selectedUrl},on:{resolved:function(e){t.areas=e.areas,t.locationChanged=!1}}})],2)},F=[],$={components:{Fetch:w},data:function(){return{locations:null,areas:null,locationChanged:!1,selectedUrl:null}}},C=$,U=Object(s["a"])(C,T,F,!1,null,null,null),A=U.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Let's POST")]),n("button",{on:{click:function(e){t.start=!0}}},[t._v("Start POST")]),n("br"),t._v(" Data: "+t._s(t.data)+" | Error: "+t._s(t.isError)+" "),n("Fetch",{attrs:{start:t.start,url:"https://jsonplaceholder.typicode.com/posts",options:{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({woow:"yahhhoo",thats:"amazing",whatTimeIsIt:new Date})}},on:{resolved:function(e){t.data=e,t.start=!1}}})],1)},M=[],L={components:{Fetch:w},data:function(){return{start:!1,data:null,isError:!1}}},N=L,R=Object(s["a"])(N,D,M,!1,null,null,null),Y=R.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Let's Occur An Error")]),n("button",{on:{click:function(e){t.start=!0}}},[t._v("To occur an error - hit me")]),n("br"),t._v(" Error Occurred? "+t._s(t.isError)+" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.completed,expression:"completed"}]},[t._v("Fetch finished")]),n("Fetch",{attrs:{start:t.start,url:"/lets/occur/an/error"},on:{resolved:function(e,n){t.isError=n,t.start=!1},finished:function(e){t.completed=!0}}})],1)},I=[],J={components:{Fetch:w},data:function(){return{start:!1,completed:!1,isError:!1}}},z=J,B=Object(s["a"])(z,q,I,!1,null,null,null),G=B.exports;r["a"].use(c["a"]);var H=[{name:"common",path:"/",component:O},{name:"multi-urls",path:"/multi-url-example",component:P},{name:"nested",path:"/nested-requests",component:A},{name:"post",path:"/lets-post",component:Y},{name:"error",path:"/lets-occur-an-error",component:G}],K=new c["a"]({routes:H}),Q=K;r["a"].config.productionTip=!1,new r["a"]({router:Q,render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.f56cff7c.js.map