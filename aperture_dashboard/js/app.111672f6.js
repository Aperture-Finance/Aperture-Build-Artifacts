(function(t){function e(e){for(var r,s,u=e[0],a=e[1],l=e[2],m=0,p=[];m<u.length;m++)s=u[m],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,u=1;u<n.length;u++){var a=n[u];0!==i[a]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var c=a;o.push([1,"chunk-vendors"]),n()})({0:function(t,e){},"034f":function(t,e,n){"use strict";n("85ec")},1:function(t,e,n){t.exports=n("56d7")},10:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},5:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v("Aperture Dashboard")]),n("h3",[t._v("Total value of open positions (TVL)")]),n("p",[t._v(t._s(t.getTVL))]),n("h3",[t._v("Total initial investment size of open positions")]),n("p",[t._v(t._s(t.getSumOpenPositionInitialSizes))]),n("h3",[t._v("Total initial investment size of ALL positions")]),n("p",[t._v(t._s(t.getSumAllPositionInitialSizes))]),n("h3",[t._v("Total contribution to Spectrum TVL from open positions")]),n("p",[t._v(t._s(t.getSumOpenPositionSpectrumTVLContributions))]),n("h3",[t._v("TVL per mAsset")]),n("table",{staticStyle:{"margin-left":"auto","margin-right":"auto"}},[t._m(0),t._l(t.mAssetToTVL,(function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(r))]),n("td",[t._v(t._s(e))])])}))],2),n("h3",[t._v("Total Positions")]),n("p",[t._v(t._s(t.openedPositions.length+t.closedPositions.length))]),n("h3",[t._v("Open Positions")]),n("ul",[n("li",[t._v(" "+t._s(t.openedPositions.length)+" ")])]),n("h3",[t._v("Total Closed Positions")]),n("ul",[n("li",[t._v(" "+t._s(t.closedPositions.length)+" ")])]),n("h3",[t._v("Unique Position Holders: "+t._s(Object.keys(t.uniqueWallets).length))]),n("ul",t._l(t.uniqueWallets,(function(e,r){return n("li",{key:r},[t._v(" "+t._s(r)+": "+t._s(e)+" ")])})),0)])},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("mAsset")]),n("th",[t._v("TVL")])])}],a=n("1da1"),l=(n("d3b7"),n("25f0"),n("820e"),n("3ca3"),n("ddb0"),n("4e82"),n("96cf"),n("b8b0")),c=n("901e"),m={terra1vxtwu4ehgzz77mnfwrntyrmgl64qjs75mpwqaz:"mAAPL",terra14y5affaarufk3uscy2vr6pe6w6zqf2wpjzn5sh:"mTSLA",terra1jsxngqasf2zynj5kyh0tgq9mj3zksa5gk35j4k:"mNFLX",terra1dk3g53js3034x4v5c3vavhj2738une880yu6kx:"mETH",terra1csk6tc7pdmpr782w527hwhez6gfv632tyf72cp:"mQQQ",terra1cc3enj9qgchlrj34cnzhwuclc4vl2z3jl7tkqg:"mTWTR",terra1227ppwxxj3jxz8cfgq00jgnxqcny7ryenvkwj6:"mMSFT",terra165nd2qmrtszehcfrntlplzern7zl4ahtlhd5t2:"mAMZN",terra1w7zgkcyt7y4zpct9dw8mw362ywvdlydnum2awa:"mBABA",terra10h7ry7apm55h4ez502dqdv9gr53juu85nkd4aq:"mIAU",terra1kscs6uhrqwy6rx5kuw5lwpuqvm3t6j2d6uf2lp:"mSLV",terra1lvmx8fsagy70tv0fhmfzdw9h6s3sy4prz38ugf:"mUSO",terra19cmt6vzvhnnnfsmccaaxzy2uaj06zjktu6yzjx:"mVIXY",terra1mqsjugsugfprn3cvgxsrr8akkvdxv2pzc74us7:"mFB",terra1h8arz2k547uvmpxctuwush3jzc8fun4s96qgwt:"mGOOGL",terra18wayjpyq28gd970qzgjfmsjj7dmgdk039duhph:"mCOIN",terra18yqdfzfhnguerz9du5mnvxsh5kxlknqhcxzjfr:"mHOOD",terra1qqfx5jph0rsmkur2zgzyqnfucra45rtjae5vh6:"mARKK",terra1l5lrxtwd98ylfy09fn866au6dp76gu8ywnudls:"mGLXY",terra1u43zu5amjlsgty5j64445fr9yglhm53m576ugh:"mSQ",terra1g4x2pzmkc9z3mseewxf758rllg08z3797xly0n:"mABNB",terra1aa00lpfexyycedfg5k2p60l9djcmw0ue5l8fhc:"mSPY",terra19ya4jpvjvvtggepvmmj6ftmwly3p7way0tt08r:"mDOT",terra18ej5nsuu867fkx4tuy2aglpvqjrkcrjjslap3z:"mAMD",terra137drsu8gce5thf6jr5mxlfghw36rpljt3zj73v:"mGS",terra1qsnj5gvq8rgs7yws8x5u02gwd5wvtu4tks0hjm:"mKO",terra1rh2907984nudl7vh56qjdtvv7947z4dujj92sx:"mPYPL",terra1246zy658dfgtausf0c4a6ly8sc2e285q4kxqga:"mSBUX",terra1ptdxmj3xmmljzx02nr4auwfuelmj0cnkh8egs2:"mJNJ",terra1rhhvx8nzfrx5fufkuft06q5marfkucdqwq5sjw:"mBTC",terra1drsjzvzej4h4qlehcfwclxg4w5l3h5tuvd3jd8:"mNVDA",terra1dj2cj02zak0nvwy3uj9r9dhhxhdwxnw6psse6p:"mNIO",terra149755r3y0rve30e209awkhn5cxgkn5c8ju9pm5:"mDIS",terra17ana8hvzea0q7w367dm0dw48sxwql39qekpt7g:"mNKE"},p={name:"HelloWorld",props:{msg:String},mounted:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.init(),e.next=3,t.crunchData();case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{client:void 0,uniqueWallets:{},openedPositions:[],closedPositions:[],tvl:Object(c["BigNumber"])(0),sumOpenPositionInitialSizes:Object(c["BigNumber"])(0),sumAllPositionInitialSizes:Object(c["BigNumber"])(0),sumOpenPositionSpectrumTVLContributions:Object(c["BigNumber"])(0),mAssetToTVL:{}}},computed:{getTVL:function(){return this.tvl.dividedBy(Object(c["BigNumber"])(1e6)).toString()},getSumOpenPositionInitialSizes:function(){return this.sumOpenPositionInitialSizes.dividedBy(Object(c["BigNumber"])(1e6)).toString()},getSumAllPositionInitialSizes:function(){return this.sumAllPositionInitialSizes.dividedBy(Object(c["BigNumber"])(1e6)).toString()},getSumOpenPositionSpectrumTVLContributions:function(){return this.sumOpenPositionSpectrumTVLContributions.dividedBy(Object(c["BigNumber"])(1e6)).toString()}},methods:{init:function(){for(var t in console.log("initializing..."),this.client=new l["LCDClient"]({URL:"https://thrumming-wispy-snow.terra-mainnet.quiknode.pro/767455606a361ac0fdfba9d94fbc16f307f4096b/",chainID:"columbus-5"}),m)this.mAssetToTVL[m[t]]=Object(c["BigNumber"])(0)},crunchData:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,r,i,o,s,u,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.client){e.next=3;break}return console.log("Client is uninitialized."),e.abrupt("return");case 3:return n="terra1ajkmy2c0g84seh66apv9x6xt6kd3ag80jmcvtz",r=t.client,e.next=7,r.wasm.contractQuery(n,{get_next_position_id:{}});case 7:return i=e.sent,console.log("next position id: ",i.next_position_id),e.next=11,r.wasm.contractQuery(n,{get_strategy_metadata:{strategy_id:"0"}});case 11:for(o=e.sent,s=o.manager_addr,u=[],a=0;a<parseInt(i.next_position_id);a++)u.push(t.worker(n,s,r,a));return console.log("Waiting for ".concat(u.length," requests to complete.")),e.next=18,Promise.allSettled(u);case 18:t.openedPositions.sort(),t.closedPositions.sort(),t.isMounted=!0,console.log(t.uniqueWallets),console.log(t.openedPositions),console.log(t.closedPositions);case 24:case"end":return e.stop()}}),e)})))()},worker:function(t,e,n,r){var i=this;return Object(a["a"])(regeneratorRuntime.mark((function o(){var s,u,a,l,p,d;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,n.wasm.contractQuery(t,{get_terra_position_info:{position_id:r.toString()}});case 2:return s=o.sent,u=s.holder,u in i.uniqueWallets?i.uniqueWallets[u]++:i.uniqueWallets[u]=1,o.next=7,n.wasm.contractQuery(e,{get_position_contract_addr:{position:{chain_id:3,position_id:r.toString()}}});case 7:return a=o.sent,o.next=10,n.wasm.contractQuery(a,{get_position_info:{}});case 10:l=o.sent,console.log("position_info: ",l),i.sumAllPositionInitialSizes=i.sumAllPositionInitialSizes.plus(l.position_open_info.uusd_amount),null==l.detailed_info?i.closedPositions.push(r):(i.openedPositions.push(r),i.sumOpenPositionInitialSizes=i.sumOpenPositionInitialSizes.plus(l.position_open_info.uusd_amount),i.sumOpenPositionSpectrumTVLContributions=i.sumOpenPositionSpectrumTVLContributions.plus(Object(c["BigNumber"])(l.detailed_info.state.uusd_long_farm).multipliedBy(2)),i.tvl=i.tvl.plus(Object(c["BigNumber"])(l.detailed_info.uusd_value)),p=l.mirror_asset_cw20_addr,d=m[p],d in i.mAssetToTVL?i.mAssetToTVL[d]=i.mAssetToTVL[d].plus(Object(c["BigNumber"])(l.detailed_info.uusd_value).dividedBy(Object(c["BigNumber"])(1e6))):i.mAssetToTVL[d]=Object(c["BigNumber"])(l.detailed_info.uusd_value).dividedBy(Object(c["BigNumber"])(1e6)));case 14:case"end":return o.stop()}}),o)})))()}}},d=p,f=(n("ee74"),n("2877")),g=Object(f["a"])(d,s,u,!1,null,"3171178b",null),h=g.exports,v={name:"App",components:{HelloWorld:h}},j=v,_=(n("034f"),Object(f["a"])(j,i,o,!1,null,null,null)),y=_.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(y)}}).$mount("#app")},6:function(t,e){},7:function(t,e){},8:function(t,e){},"85ec":function(t,e,n){},9:function(t,e){},c151:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},ee74:function(t,e,n){"use strict";n("c151")}});
//# sourceMappingURL=app.111672f6.js.map