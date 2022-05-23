(function(t){function e(e){for(var i,o,s=e[0],u=e[1],l=e[2],m=0,d=[];m<s.length;m++)o=s[m],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);c&&c(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"18c5":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("img",{attrs:{alt:"Aperture logo",src:n("cf05")}}),i("Metrics",{attrs:{network:t.network}})],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[t.isLoading?n("h1",[t._v("Loading...")]):t._e(),t.isLoading?t._e():n("div",[n("h1",[t._v("Aperture Dashboard")]),n("h3",[t._v("Aggregated from positions:")]),n("p",[t._v(t._s(t.getCompletedPositionQueries)+" / "+t._s(t.getNumPositions))]),n("h3",[t._v("Total value of open positions (TVL)")]),n("p",[t._v(t._s(t.getTVL))]),n("h3",[t._v("Total initial investment size of open positions")]),n("p",[t._v(t._s(t.getSumOpenPositionInitialSizes))]),n("h3",[t._v("Total initial investment size of ALL positions")]),n("p",[t._v(t._s(t.getSumAllPositionInitialSizes))]),n("h3",[t._v("Total contribution to Spectrum TVL from open positions")]),n("p",[t._v(t._s(t.getSumOpenPositionSpectrumTVLContributions))]),n("h3",[t._v("Sum of unrealized gain across open positions with unrealized gain")]),n("p",[t._v(t._s(t.getSumUnrealizedGain))]),n("h3",[t._v("Sum of short farm UST value across open positions")]),n("p",[t._v(t._s(t.getSumShortFarmValueAcrossOpenPositions))]),n("h3",[t._v(" Sum of short farm UST value across open positions with unrealized gain ")]),n("p",[t._v(" "+t._s(t.getSumShortFarmValueAcrossOpenPositionsWithUnrealizedGain)+" ")]),t._m(0),n("vue-good-table",{staticClass:"center",attrs:{columns:t.openPositionTableColumns,rows:t.openPositionTableData,"sort-option":{enabled:!0,initialSortBy:{field:"id",type:"asc"}},"search-options":{enabled:!0},"pagination-options":{enabled:!0,perPageDropdown:[10,20,50,100],jumpFirstOrLast:!0}}}),t._m(1),n("vue-good-table",{staticClass:"center",attrs:{columns:t.closedPositionTableColumns,rows:t.closedPositionTableData,"sort-option":{enabled:!0,initialSortBy:{field:"id",type:"asc"}},"search-options":{enabled:!0},"pagination-options":{enabled:!0,perPageDropdown:[10,20,50,100],jumpFirstOrLast:!0}}}),n("GChart",{staticStyle:{height:"600px"},attrs:{type:"BarChart",data:t.getCountChartData,options:t.countChartOptions}}),n("GChart",{staticStyle:{height:"600px"},attrs:{type:"BarChart",data:t.getSumChartData,options:t.sumChartOptions}}),n("GChart",{staticStyle:{height:"600px"},attrs:{type:"LineChart",data:t.getUniqueWalletCountsChartData,options:t.uniqueWalletCountsChartOptions}}),n("h3",[t._v("TVL per mAsset")]),n("table",{staticStyle:{"margin-left":"auto","margin-right":"auto"}},[t._m(2),t._l(t.mAssetToTVL,(function(e,i){return n("tr",{key:i},[n("td",[t._v(t._s(i))]),n("td",[t._v(t._s(e.toFormat(6)))])])}))],2)],1)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[n("br"),n("br"),t._v("Open Positions")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[n("br"),n("br"),t._v("Closed Positions")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("mAsset")]),n("th",[t._v("TVL")])])}],u=n("b85c"),l=n("1da1"),c=n("2909"),m=(n("96cf"),n("d81d"),n("d3b7"),n("ddb0"),n("99af"),n("07ac"),n("0481"),n("4069"),n("a15b"),n("25f0"),n("4de4"),n("b64b"),n("cb43")),d=n("901e"),p=n("bc3a"),f=n.n(p),h=n("6434"),g=(n("dac4"),n("f617"));d["BigNumber"].config({FORMAT:{prefix:"$",decimalSeparator:".",groupSeparator:",",groupSize:3,secondaryGroupSize:0,fractionGroupSeparator:" ",fractionGroupSize:0,suffix:""}});var v={terra1vxtwu4ehgzz77mnfwrntyrmgl64qjs75mpwqaz:"mAAPL",terra14y5affaarufk3uscy2vr6pe6w6zqf2wpjzn5sh:"mTSLA",terra1jsxngqasf2zynj5kyh0tgq9mj3zksa5gk35j4k:"mNFLX",terra1dk3g53js3034x4v5c3vavhj2738une880yu6kx:"mETH",terra1csk6tc7pdmpr782w527hwhez6gfv632tyf72cp:"mQQQ",terra1cc3enj9qgchlrj34cnzhwuclc4vl2z3jl7tkqg:"mTWTR",terra1227ppwxxj3jxz8cfgq00jgnxqcny7ryenvkwj6:"mMSFT",terra165nd2qmrtszehcfrntlplzern7zl4ahtlhd5t2:"mAMZN",terra1w7zgkcyt7y4zpct9dw8mw362ywvdlydnum2awa:"mBABA",terra10h7ry7apm55h4ez502dqdv9gr53juu85nkd4aq:"mIAU",terra1kscs6uhrqwy6rx5kuw5lwpuqvm3t6j2d6uf2lp:"mSLV",terra1lvmx8fsagy70tv0fhmfzdw9h6s3sy4prz38ugf:"mUSO",terra19cmt6vzvhnnnfsmccaaxzy2uaj06zjktu6yzjx:"mVIXY",terra1mqsjugsugfprn3cvgxsrr8akkvdxv2pzc74us7:"mFB",terra1h8arz2k547uvmpxctuwush3jzc8fun4s96qgwt:"mGOOGL",terra18wayjpyq28gd970qzgjfmsjj7dmgdk039duhph:"mCOIN",terra18yqdfzfhnguerz9du5mnvxsh5kxlknqhcxzjfr:"mHOOD",terra1qqfx5jph0rsmkur2zgzyqnfucra45rtjae5vh6:"mARKK",terra1l5lrxtwd98ylfy09fn866au6dp76gu8ywnudls:"mGLXY",terra1u43zu5amjlsgty5j64445fr9yglhm53m576ugh:"mSQ",terra1g4x2pzmkc9z3mseewxf758rllg08z3797xly0n:"mABNB",terra1aa00lpfexyycedfg5k2p60l9djcmw0ue5l8fhc:"mSPY",terra19ya4jpvjvvtggepvmmj6ftmwly3p7way0tt08r:"mDOT",terra18ej5nsuu867fkx4tuy2aglpvqjrkcrjjslap3z:"mAMD",terra137drsu8gce5thf6jr5mxlfghw36rpljt3zj73v:"mGS",terra1qsnj5gvq8rgs7yws8x5u02gwd5wvtu4tks0hjm:"mKO",terra1rh2907984nudl7vh56qjdtvv7947z4dujj92sx:"mPYPL",terra1246zy658dfgtausf0c4a6ly8sc2e285q4kxqga:"mSBUX",terra1ptdxmj3xmmljzx02nr4auwfuelmj0cnkh8egs2:"mJNJ",terra1rhhvx8nzfrx5fufkuft06q5marfkucdqwq5sjw:"mBTC",terra1drsjzvzej4h4qlehcfwclxg4w5l3h5tuvd3jd8:"mNVDA",terra1dj2cj02zak0nvwy3uj9r9dhhxhdwxnw6psse6p:"mNIO",terra149755r3y0rve30e209awkhn5cxgkn5c8ju9pm5:"mDIS",terra17ana8hvzea0q7w367dm0dw48sxwql39qekpt7g:"mNKE",terra16vfxm98rxlc8erj4g0sj5932dvylgmdufnugk0:"mAAPL",terra1qg9ugndl25567u03jrr79xur2yk9d632fke3h2:"mGOOGL",terra1nslem9lgwx53rvgqwd8hgq7pepsry6yr3wsen4:"mTSLA",terra1djnlav60utj06kk9dl7defsv8xql5qpryzvm3h:"mNFLX",terra18yx7ff8knc98p07pdkhm3u36wufaeacv47fuha:"mQQQ",terra1ax7mhqahj6vcqnnl675nqq2g9wghzuecy923vy:"mTWTR",terra12s2h8vlztjwu440khpc0063p34vm7nhu25w4p9:"mMSFT",terra12saaecsqwxj04fn0jsv4jmdyp6gylptf5tksge:"mAMZN",terra15dr4ah3kha68kam7a907pje9w6z2lpjpnrkd06:"mBABA",terra1fdkfhgk433tar72t4edh6p6y9rmjulzc83ljuw:"mSLV",terra1fucmfp8x4mpzsydjaxyv26hrkdg4vpdzdvf647:"mUSO",terra18gphn8r437p2xmjpw7a79hgsglf5y4t0x7s5ee:"mVIXY",terra14gq9wj0tt6vu0m4ec2tkkv4ln3qrtl58lgdl2c:"mFB",terra1qre9crlfnulcg0m68qqywqqstplgvrzywsg3am:"mCOIN",terra179na3xcvjastpptnh9g6lnf75hqqjnsv9mqm3j:"mHOOD",terra1avryzxnsn2denq7p2d7ukm6nkck9s0rz2llgnc:"mABNB",terra1fs6c6y65c65kkjanjwvmnrfvnm2s58ph88t9ky:"mDOT",terra13myzfjdmvqkama2tt3v5f7quh75rv78w8kq6u6:"mGS",terra1csr22xvxs6r3gkjsl7pmjkmpt39mwjsrm0e2r8:"mBTC",terra1ys4dwwzaenjg2gy02mslmc96f267xvpsjat7gx:"mETH"},b=[500,1e3,2e3,5e3,1e4,2e4,5e4,1e5,2e5,5e5,1e100];function j(t,e){return t>=e?[]:Object(c["a"])(Array(e-t).keys()).map((function(e){return e+t}))}var y={name:"Metrics",props:{network:{type:String}},components:{GChart:m["GChart"],VueGoodTable:g["a"]},mounted:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.init(),e.next=3,t.crunchData();case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{uniqueWallets:{},historicalStats:[],nextHistoricalStatsIndex:0,initialInvestmentUSTOpenPositions:[],initialInvestmentUSTAllPositions:[],numPositions:0,completedPositionQueries:0,tvl:Object(d["BigNumber"])(0),sumOpenPositionInitialSizes:Object(d["BigNumber"])(0),sumAllPositionInitialSizes:Object(d["BigNumber"])(0),sumOpenPositionSpectrumTVLContributions:Object(d["BigNumber"])(0),sumUnrealizedGain:Object(d["BigNumber"])(0),sumShortFarmValueAcrossOpenPositions:Object(d["BigNumber"])(0),sumShortFarmValueAcrossOpenPositionsWithUnrealizedGain:Object(d["BigNumber"])(0),mAssetToTVL:{},countChartOptions:{title:"Initial Investment UST Size (bucketed counts)",bars:"horizontal"},sumChartOptions:{title:"Initial Investment UST Size (bucketed sum)",bars:"horizontal"},uniqueWalletCountsChartOptions:{title:"Unique Wallet Counts"},isLoading:!0,openPositionTableColumns:[{label:"ID",field:"id",type:"number"},{label:"Opened at",field:"creationTime",formatFn:function(t){return new Date(t).toLocaleString()}},{label:"mAsset",field:"mAsset"},{label:"Initial Value",field:"initValue",type:"number",formatFn:function(t){return Object(d["BigNumber"])(t).toFormat(6)}},{label:"Current Value",field:"curValue",type:"number",formatFn:function(t){return Object(d["BigNumber"])(t).toFormat(6)}},{label:"P/L percentage",field:"profitRatio",type:"percentage"},{label:"APR",field:"apr",type:"percentage"},{label:"Target CR",field:"tcr",sortable:!1},{label:"Current CR",field:"cr",type:"percentage"},{label:"Holder",field:"holder",html:!0,sortable:!1},{label:"Contract",field:"contract",html:!0,sortable:!1}],closedPositionTableColumns:[{label:"ID",field:"id",type:"number"},{label:"Opened at",field:"creationTime",formatFn:function(t){return new Date(t).toLocaleString()}},{label:"Closed at",field:"closureTime",formatFn:function(t){return new Date(t).toLocaleString()}},{label:"mAsset",field:"mAsset"},{label:"Initial Value",field:"initValue",type:"number",formatFn:function(t){return Object(d["BigNumber"])(t).toFormat(6)}},{label:"Final Value (amount disbursed)",field:"finalValue",type:"number",formatFn:function(t){return Object(d["BigNumber"])(t).toFormat(6)}},{label:"P/L percentage",field:"profitRatio",type:"percentage"},{label:"APR",field:"apr",type:"percentage"},{label:"Holder",field:"holder",html:!0,sortable:!1},{label:"Contract",field:"contract",html:!0,sortable:!1}],openPositionTableData:[],closedPositionTableData:[]}},computed:{getUniqueWalletCountsChartData:function(){var t,e=[["Time","Unique Wallet Count"]],n=Object(u["a"])(this.historicalStats);try{for(n.s();!(t=n.n()).done;){var i=t.value;e.push([i.blockTime.toLocaleDateString(),i.uniqueWallets])}}catch(r){n.e(r)}finally{n.f()}return e},getCountChartData:function(){var t,e=[["Range","Active Positions (count)","All Positions (count)"],["(0, $500]",0,0],["($500, $1,000]",0,0],["($1,000, 2,000]",0,0],["($2,000, 5,000]",0,0],["($5,000, 10,000]",0,0],["($10,000, 20,000]",0,0],["($20,000, 50,000]",0,0],["($50,000, 100,000]",0,0],["($100,000, 200,000]",0,0],["($200,000, 500,000]",0,0],["($500,000, Infinity)",0,0]],n=Object(u["a"])(this.initialInvestmentUSTOpenPositions);try{for(n.s();!(t=n.n()).done;){var i,r=t.value,a=0,o=Object(u["a"])(b);try{for(o.s();!(i=o.n()).done;){var s=i.value;if(r<=s)break;a++}}catch(g){o.e(g)}finally{o.f()}e[a+1][1]++}}catch(g){n.e(g)}finally{n.f()}var l,c=Object(u["a"])(this.initialInvestmentUSTAllPositions);try{for(c.s();!(l=c.n()).done;){var m,d=l.value,p=0,f=Object(u["a"])(b);try{for(f.s();!(m=f.n()).done;){var h=m.value;if(d<=h)break;p++}}catch(g){f.e(g)}finally{f.f()}e[p+1][2]++}}catch(g){c.e(g)}finally{c.f()}return e},getSumChartData:function(){var t,e=[["Range","Active Positions (sum)","All Positions (sum)"],["(0, $500]",0,0],["($500, $1,000]",0,0],["($1,000, 2,000]",0,0],["($2,000, 5,000]",0,0],["($5,000, 10,000]",0,0],["($10,000, 20,000]",0,0],["($20,000, 50,000]",0,0],["($50,000, 100,000]",0,0],["($100,000, 200,000]",0,0],["($200,000, 500,000]",0,0],["($500,000, Infinity)",0,0]],n=Object(u["a"])(this.initialInvestmentUSTOpenPositions);try{for(n.s();!(t=n.n()).done;){var i,r=t.value,a=0,o=Object(u["a"])(b);try{for(o.s();!(i=o.n()).done;){var s=i.value;if(r<=s)break;a++}}catch(g){o.e(g)}finally{o.f()}e[a+1][1]+=r}}catch(g){n.e(g)}finally{n.f()}var l,c=Object(u["a"])(this.initialInvestmentUSTAllPositions);try{for(c.s();!(l=c.n()).done;){var m,d=l.value,p=0,f=Object(u["a"])(b);try{for(f.s();!(m=f.n()).done;){var h=m.value;if(d<=h)break;p++}}catch(g){f.e(g)}finally{f.f()}e[p+1][2]+=d}}catch(g){c.e(g)}finally{c.f()}return e},getNumPositions:function(){return this.numPositions},getCompletedPositionQueries:function(){return this.completedPositionQueries},getTVL:function(){return this.tvl.dividedBy(Object(d["BigNumber"])(1e6)).toFormat(6)},getSumOpenPositionInitialSizes:function(){return this.sumOpenPositionInitialSizes.dividedBy(Object(d["BigNumber"])(1e6)).toFormat(6)},getSumAllPositionInitialSizes:function(){return this.sumAllPositionInitialSizes.dividedBy(Object(d["BigNumber"])(1e6)).toFormat(6)},getSumOpenPositionSpectrumTVLContributions:function(){return this.sumOpenPositionSpectrumTVLContributions.dividedBy(Object(d["BigNumber"])(1e6)).toFormat(6)},getSumUnrealizedGain:function(){return this.sumUnrealizedGain.dividedBy(Object(d["BigNumber"])(1e6)).toFormat(6)},getSumShortFarmValueAcrossOpenPositions:function(){return this.sumShortFarmValueAcrossOpenPositions.dividedBy(Object(d["BigNumber"])(1e6)).toFormat(6)},getSumShortFarmValueAcrossOpenPositionsWithUnrealizedGain:function(){return this.sumShortFarmValueAcrossOpenPositionsWithUnrealizedGain.dividedBy(Object(d["BigNumber"])(1e6)).toFormat(6)}},methods:{init:function(){for(var t in v)this.mAssetToTVL[v[t]]=Object(d["BigNumber"])(0)},crunchData:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var n,i,r,a,o,s,u,c,m,p,g,b,y,_,w,O,S;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=function(t,e){return f()({method:"post",url:"mainnet"==e?"https://solitary-wind-b421.hyperfocal-dev.workers.dev/graphql":"https://cold-voice-73a0.hyperfocal-dev.workers.dev/graphql",data:{query:t}})},i="mainnet"==t.network?"terra1ajkmy2c0g84seh66apv9x6xt6kd3ag80jmcvtz":"terra1pzmq3sacc2z3pk8el3rk0q584qtuuhnv4fwp8n",e.next=4,n('\n      {\n        tendermint {\n          blockInfo {\n            block {\n              header {\n                height\n                time\n              }\n            }\n          }\n        }\n        wasm {\n          contractQuery(\n            contractAddress: "'.concat(i,'"\n            query: {\n              get_next_position_id: {}\n            }\n          )\n        }\n      }'),t.network);case 4:for(r=e.sent,t.numPositions=r.data.data.wasm.contractQuery.next_position_id,a=r.data.data.tendermint.blockInfo.block.header.height,o="mainnet"==t.network?6276761:7576578,s=8e3,u="{tendermint{",c=o;c<a+s;c+=s)c>a&&(c=a),u+="\n          q".concat(c,": blockInfo(height: ").concat(c,") {\n            block {\n              header {\n                height\n                time\n              }\n            }\n          }");for(u+="}wasm{",m=o;m<a+s;m+=s)m>a&&(m=a),u+="\n          q".concat(m,': contractQuery(\n            contractAddress: "').concat(i,'"\n            query: {\n              get_next_position_id: {}\n            }\n            height: ').concat(m,"\n          )");return u+="}}",e.next=16,n(u,t.network);case 16:for(p=e.sent,g=Object.values(p.data.data.tendermint),b=Object.values(p.data.data.wasm),y=0;y<g.length;++y)t.historicalStats.push({blockTime:new Date(Date.parse(g[y].block.header.time)),positionCount:parseInt(b[y].next_position_id)});return _="mainnet"==t.network?"terra1jvehz6d9gk3gl4tldrzd8qzj8zfkurfvtcg99x":"terra1qycrwtsmxnnklc42yzexveyhjls657qhuwhmlw",w=600,O=Math.ceil(t.numPositions/w),e.next=25,Object(h["a"])({collection:j(0,O),maxConcurrency:10,task:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(i){var r,a,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=i*w,a=Math.min(r+w,t.numPositions),o="{wasm{"+j(r,a).map((function(t){return"q"+t+':contractQuery(contractAddress:"'.concat(_,'"query:{batch_get_position_info:{positions:[{chain_id:3,position_id:"')+t.toString()+'"}]}})'})).join()+"}}",e.next=5,n(o,t.network);case 5:return s=e.sent,e.abrupt("return",Object.values(s.data.data.wasm).map((function(t){return t.items[0]})));case 7:case"end":return e.stop()}}),e)})));function i(t){return e.apply(this,arguments)}return i}()});case 25:S=e.sent.flat(),t.openPositionTableData=S.filter((function(t){return null===t.info.position_close_info})).map((function(e){return{id:parseInt(e.position.position_id),mAsset:v[e.info.mirror_asset_cw20_addr],initValue:Object(d["BigNumber"])(e.info.position_open_info.uusd_amount)/1e6,curValue:Object(d["BigNumber"])(e.info.detailed_info.uusd_value)/1e6,creationTime:new Date(e.info.position_open_info.time_nanoseconds/1e6),cr:parseFloat(e.info.detailed_info.collateral_ratio),tcr:e.info.detailed_info.target_collateral_ratio_range.min+" ~ "+e.info.detailed_info.target_collateral_ratio_range.max,holder:'<a href="https://terrasco.pe/'.concat(t.network,"/address/")+e.holder+'">Holder</a>',contract:'<a href="https://terrasco.pe/'.concat(t.network,"/address/")+e.contract+'">Contract</a>',generateAdditionalFields:function(){if(this.profitRatio=(this.curValue-this.initValue)/this.initValue,this.profitRatio>0){var t=(Date.now()-this.creationTime)/1e3/3600/24;this.apr=this.profitRatio/t*365}return this}}.generateAdditionalFields()})),t.closedPositionTableData=S.filter((function(t){return null!==t.info.position_close_info})).map((function(e){return{id:parseInt(e.position.position_id),mAsset:v[e.info.mirror_asset_cw20_addr],initValue:Object(d["BigNumber"])(e.info.position_open_info.uusd_amount)/1e6,finalValue:Object(d["BigNumber"])(e.info.position_close_info.uusd_amount)/1e6,creationTime:new Date(e.info.position_open_info.time_nanoseconds/1e6),closureTime:new Date(e.info.position_close_info.time_nanoseconds/1e6),holder:'<a href="https://terrasco.pe/'.concat(t.network,"/address/")+e.holder+'">Holder</a>',contract:'<a href="https://terrasco.pe/'.concat(t.network,"/address/")+e.contract+'">Contract</a>',generateAdditionalFields:function(){if(this.profitRatio=(this.finalValue-this.initValue)/this.initValue,this.profitRatio>0){var t=(this.closureTime-this.creationTime)/1e3/3600/24;this.apr=this.profitRatio/t*365}return this}}.generateAdditionalFields()})),S.map((function(e){t.processPositionResult(e)})),t.isLoading=!1,t.isMounted=!0,console.log(t.nextHistoricalStatsIndex),console.log(t.historicalStats);case 33:case"end":return e.stop()}}),e)})))()},processPositionResult:function(t){var e=t.holder;e in this.uniqueWallets?this.uniqueWallets[e]++:this.uniqueWallets[e]=1;var n=t.info,i=parseInt(t.position.position_id);while(this.nextHistoricalStatsIndex<this.historicalStats.length&&this.historicalStats[this.nextHistoricalStatsIndex].positionCount==i+1)this.historicalStats[this.nextHistoricalStatsIndex].uniqueWallets=Object.keys(this.uniqueWallets).length,++this.nextHistoricalStatsIndex;var r=n.position_open_info.uusd_amount;this.sumAllPositionInitialSizes=this.sumAllPositionInitialSizes.plus(r);var a=Object(d["BigNumber"])(r)/1e6;if(this.initialInvestmentUSTAllPositions.push(a),null!==n.detailed_info){this.initialInvestmentUSTOpenPositions.push(a),this.sumOpenPositionInitialSizes=this.sumOpenPositionInitialSizes.plus(n.position_open_info.uusd_amount);var o=0;null!==n.detailed_info.state&&(this.sumOpenPositionSpectrumTVLContributions=this.sumOpenPositionSpectrumTVLContributions.plus(Object(d["BigNumber"])(n.detailed_info.state.uusd_long_farm).multipliedBy(2)),o=Object(d["BigNumber"])(n.detailed_info.state.mirror_asset_short_amount).times(Object(d["BigNumber"])(n.detailed_info.state.mirror_asset_oracle_price)),this.sumShortFarmValueAcrossOpenPositions=this.sumShortFarmValueAcrossOpenPositions.plus(o)),Object(d["BigNumber"])(n.detailed_info.uusd_value)>Object(d["BigNumber"])(n.position_open_info.uusd_amount)&&(this.sumShortFarmValueAcrossOpenPositionsWithUnrealizedGain=this.sumShortFarmValueAcrossOpenPositionsWithUnrealizedGain.plus(o),this.sumUnrealizedGain=this.sumUnrealizedGain.plus(Object(d["BigNumber"])(n.detailed_info.uusd_value)-Object(d["BigNumber"])(n.position_open_info.uusd_amount))),this.tvl=this.tvl.plus(Object(d["BigNumber"])(n.detailed_info.uusd_value));var s=n.mirror_asset_cw20_addr,u=v[s];u in this.mAssetToTVL?this.mAssetToTVL[u]=this.mAssetToTVL[u].plus(Object(d["BigNumber"])(n.detailed_info.uusd_value).dividedBy(Object(d["BigNumber"])(1e6))):this.mAssetToTVL[u]=Object(d["BigNumber"])(n.detailed_info.uusd_value).dividedBy(Object(d["BigNumber"])(1e6))}this.completedPositionQueries++}}},_=y,w=(n("729a"),n("2877")),O=Object(w["a"])(_,o,s,!1,null,"1dad2342",null),S=O.exports,k={name:"App",components:{Metrics:S},data:function(){var t="mainnet";return"/testnet"==window.location.pathname&&(t="testnet"),{network:t}}},x=k,z=(n("034f"),Object(w["a"])(x,r,a,!1,null,null,null)),q=z.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(q)}}).$mount("#app")},"729a":function(t,e,n){"use strict";n("18c5")},"85ec":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.9f25601d.png"}});
//# sourceMappingURL=app.fcbd0a31.js.map