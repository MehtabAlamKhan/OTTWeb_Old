"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[885],{9885:function(e,t,i){i.r(t),i.d(t,{default:function(){return xe}});var n,o=i(8152),a=i(5751),r=i(2791),s=(i(7123),i(2167)),c=i(4165),l=i(5861),d=i(364),p=i(9135),h="d0a6b59ce5d4305ca6cf3e0124eeec2f",m={fetchPopularTvShows:"https://api.themoviedb.org/3/tv/popular?api_key=".concat(h,"&language=en-US&page=1"),fetchPopularMovies:"https://api.themoviedb.org/3/movie/popular?api_key=".concat(h,"&language=en-US&page=1"),fetchTrending:"/trending/all/day?api_key=".concat(h,"&language=en-US"),fetchNetflixOriginals:"discover/tv?api_key=".concat(h,"&&with_networks=213"),fetchTopRated:"https://api.themoviedb.org/3/tv/top_rated?api_key=".concat(h,"&language=en-US&page=1"),fetchActionMovies:"/discover/movie?api_key=".concat(h,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(h,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(h,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(h,"&with_genres=10749"),fetchDocumentries:"/discover/movie?api_key=".concat(h,"&with_genres=99")},u={fetchLatestMovies:"/movie/latest?api_key=".concat(h,"&language=en-US"),fetchNowPlayingMovies:"/movie/now_playing?api_key=".concat(h,"&language=en-US&page=1"),fetchPopularMovies:"/movie/popular?api_key=".concat(h,"&language=en-US&page=1"),fetchTopRatedMovies:"/movie/top_rated?api_key=".concat(h,"&language=en-US&page=1"),fetchUpComingMovies:"/movie/upcoming?api_key=".concat(h,"&language=en-US&page=1")},f={fetchLatestTV:"/tv/latest?api_key=".concat(h,"&language=en-US"),fetchAiringTodayTV:"/tv/airing_today?api_key=".concat(h,"&language=en-US&page=1"),fetchOnTheAirTV:"/tv/on_the_air?api_key=".concat(h,"&language=en-US&page=1"),fetchPopularTV:"/tv/popular?api_key=".concat(h,"&language=en-US&page=1"),fetchTopRatedTV:"/tv/top_rated?api_key=".concat(h,"&language=en-US&page=1")},g={fetchPopular:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(h,"&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=16"),fetchLatest:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(h,"&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&with_genres=16"),fetchJapanese:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(h,"&language=en-US&region=JP&include_adult=false&include_video=false&page=1&with_genres=16")},x=i(1523),v=i(4071),y=i(3669),w=i(6907),_=i(1138),k=i(184);var b=(0,d.$j)((function(e){return{isAuthenticated:e.auth.isAuthenticated,user:e.auth.user,error:e.error}}),{bookmark:w.vj,deleteBookmark:w.Tc})((function(e){var t,i=(0,r.useState)([]),a=(0,o.Z)(i,2),d=a[0],h=a[1],u=(0,r.useState)(!1),f=(0,o.Z)(u,2),g=(f[0],f[1],(0,r.useState)(0)),w=(0,o.Z)(g,2),b=w[0],j=w[1],S=(0,r.useState)(0),N=(0,o.Z)(S,2),P=N[0],C=N[1],Z=null===(t=e.user)||void 0===t?void 0:t.bookmarks,I=(0,r.useState)(!1),U=(0,o.Z)(I,2),T=U[0],B=U[1];function E(e){C(100*e)}return(0,r.useEffect)((function(){function e(){return(e=(0,l.Z)((0,c.Z)().mark((function e(){var t,i;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=function(){h(t.data.results)},e.next=3,p.Z.get(m.fetchNetflixOriginals);case 3:return t=e.sent,0===d.length&&i(),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){}}),[]),(0,r.useEffect)((function(){return 0!==d.length&&(n=setInterval((function(){j((function(e){return j(e+1)}))}),5e3)),function(){}}),[d]),(0,r.useEffect)((function(){return 0!==b&&B(!1),b===d.length?(j(0),C(0)):E(b),function(){}}),[b]),(0,r.useEffect)((function(){null===Z||void 0===Z||Z.map((function(e){var t;(null===e||void 0===e?void 0:e.id)===(null===(t=d[b])||void 0===t?void 0:t.id)&&"tv"===(null===e||void 0===e?void 0:e.media_type)&&B(!0)}))}),[Z,b,d]),(0,k.jsxs)("div",{className:"bannerContainer",children:[(0,k.jsx)("div",{className:"bgImageCont",children:d&&d.map((function(e,t){return(0,k.jsx)("div",{className:"bgImage",style:{backgroundSize:"cover",backgroundPosition:"center center",backgroundImage:'url("https://image.tmdb.org/t/p/w200/'.concat(null===e||void 0===e?void 0:e.backdrop_path,'")'),transform:"translateX(-".concat(P,"%)")}},t)}))}),(0,k.jsx)("div",{className:"sliderContainer",children:d&&d.map((function(t,i){var n,o,a;return(0,k.jsx)("header",{className:"bannerImage",style:{resize:"both",backgroundSize:"cover",backgroundPosition:"center center",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===t||void 0===t?void 0:t.backdrop_path,'")'),imageRendering:"-webkit-optimize-contrast",transform:"translateX(-".concat(P,"%)")},children:(0,k.jsxs)("div",{className:"banner-contents",children:[(0,k.jsx)(x.rU,(n={style:{width:"fit-content"},to:"/tv/".concat(t&&t.id)},(0,s.Z)(n,"style",{textDecoration:"none"}),(0,s.Z)(n,"target","_blank"),(0,s.Z)(n,"title","Title"),(0,s.Z)(n,"children",(0,k.jsx)("h1",{className:"banner-title",children:(null===t||void 0===t?void 0:t.name)||(null===t||void 0===t?void 0:t.title)||(null===t||void 0===t?void 0:t.original_name)})),n)),(0,k.jsxs)("div",{className:"button-cont",children:[(0,k.jsx)("div",{className:"buttons",children:(0,k.jsx)("img",{className:"play",src:v.Z,alt:"Play",title:"Play"})}),(0,k.jsx)("div",{onLoad:function(e){},style:{backgroundColor:T?"white":""},onClick:function(){!function(){if(!e.isAuthenticated)_.Z}(),e.isAuthenticated&&(T||e.bookmark({id:t.id,media_type:"tv"}),T&&e.deleteBookmark({id:t.id,media_type:"tv"}),B((function(e){return B(!e)})))},className:"buttons",children:(0,k.jsx)("img",{className:"my-list",src:y.Z,alt:"Bookmark",title:"Bookmark"})})]}),(0,k.jsx)("h3",{className:"banner-description",children:(o="".concat(null===t||void 0===t?void 0:t.overview),a=160,(null===o||void 0===o?void 0:o.length)>a?o.substr(0,a-1)+"...":o)})]})},i)}))}),(0,k.jsx)("div",{className:"navigationcontainer",children:d&&d.map((function(e,t){return(0,k.jsx)("div",{onClick:function(){j(t),E(t),clearInterval(n)},className:"navigationCircles ".concat(b===t&&"navigationCirclesWhite")},t)}))}),(0,k.jsx)("div",{className:"banner-fade"})]})})),j=JSON.parse('{"v":"5.4.4","fr":24,"ip":0,"op":28,"w":64,"h":64,"nm":"search","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Magnifier","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":3,"s":[0],"e":[7]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":11,"s":[7],"e":[-14]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":20,"s":[-14],"e":[0]},{"t":25}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":3,"s":[28.3,31.425,0],"e":[22.8,31.175,0],"to":[-0.932,0.849,0],"ti":[0.365,0.724,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":9,"s":[22.8,31.175,0],"e":[26.11,27.081,0],"to":[-0.865,-1.63,0],"ti":[-1.479,-0.01,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":18,"s":[26.11,27.081,0],"e":[28.3,31.425,0],"to":[1.401,0.057,0],"ti":[0.979,-1.193,0]},{"t":25}],"ix":2},"a":{"a":0,"k":[-3.7,-0.575,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.75,0],[0,0.7],[0,0],[0.75,0],[0.05,0],[0,-0.75],[0,0]],"o":[[0.7,0],[0,0],[0,-0.75],[0,0],[-0.7,0],[0,0],[0.05,0.7]],"v":[[-13.1,3.25],[-11.8,1.95],[-11.8,1.8],[-13.1,0.45],[-13.15,0.45],[-14.45,1.75],[-14.45,1.95]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.7,-0.2],[-0.15,0],[-0.2,0.55],[-3.6,0],[0,0.7],[0.7,0],[1.6,-4.5]],"o":[[0.15,0.05],[0.55,0],[1.2,-3.45],[0.7,0],[0,-0.7],[-4.75,0],[-0.25,0.65]],"v":[[-13.45,-2.7],[-13,-2.6],[-11.75,-3.5],[-3.65,-9.3],[-2.35,-10.6],[-3.65,-11.9],[-14.25,-4.35]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[19.9,25.2],[13,18.2],[14.9,16.3],[21.8,23.3]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[9.6,0],[0,9.7],[-9.6,0],[0,-9.7]],"o":[[-9.6,0],[0,-9.7],[9.6,0],[0,9.7]],"v":[[-3.7,17],[-21.1,-0.55],[-3.7,-18.15],[13.7,-0.55]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0.6,0.55],[0,0],[0.4,0],[0.25,-0.3],[0,0],[0,0],[0,5.2],[11.25,0],[0,-11.35],[-11.25,0],[-3.6,3.2],[0,0],[0,0],[-0.6,-0.6],[0,0],[-0.4,0],[-0.25,0.3],[0,0]],"o":[[0,0],[-0.3,-0.3],[-0.4,0],[0,0],[0,0],[3.15,-3.65],[0,-11.35],[-11.25,0],[0,11.4],[5.15,0],[0,0],[0,0],[-0.6,0.6],[0,0],[0.3,0.3],[0.4,0],[0,0],[0.55,-0.6]],"v":[[24.9,22.2],[15.9,13.1],[14.85,12.65],[13.8,13.1],[12.75,14.2],[11.6,13],[16.7,-0.6],[-3.7,-21.2],[-24.1,-0.6],[-3.7,20],[9.75,14.85],[10.9,16],[9.85,17.1],[9.85,19.25],[18.85,28.35],[19.9,28.8],[20.95,28.35],[24.95,24.3]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":4,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":28,"st":0,"bm":0}],"markers":[]}'),S=a.ZP.section.withConfig({displayName:"SectionNavBar__Conatiner",componentId:"sc-1nkkjxf-0"})(["margin-top:10px;margin-bottom:40px;height:40px;color:white;width:100%;display:flex;flex-direction:row;justify-content:space-between;min-width:851px;align-items:center;"]),N=a.ZP.div.withConfig({displayName:"SectionNavBar__Sections",componentId:"sc-1nkkjxf-1"})(["display:flex;flex-direction:row;margin-left:10%;height:100%;"]),P=a.ZP.button.withConfig({displayName:"SectionNavBar__Button",componentId:"sc-1nkkjxf-2"})(["color:rgba(129,129,129,0.924);font-family:custom;outline:none;background-color:transparent;border:none;font-size:1.2rem;cursor:pointer;padding:0px 15px 0px 15px;transition:all 200ms ease-in-out;border-bottom:2px solid rgba(173,173,173,0.26);&:hover{background-color:rgba(173,173,173,0.157);}"]),C=a.ZP.div.withConfig({displayName:"SectionNavBar__SearchBar",componentId:"sc-1nkkjxf-3"})(["display:flex;flex-direction:row;align-items:center;margin-right:7%;"]),Z=a.ZP.input.withConfig({displayName:"SectionNavBar__Input",componentId:"sc-1nkkjxf-4"})(["padding:5px;padding-left:10px;padding-right:40px;outline:none;border:1px solid rgba(129,129,129,0.924);background-color:transparent;color:white;width:400px;height:20px;font-family:custom;font-size:1rem;transition:all 300ms ease-in-out;&:focus{border:1px solid white;}@media screen and (max-width:1200px){width:200px;}"]);a.ZP.img.withConfig({displayName:"SectionNavBar__Icon",componentId:"sc-1nkkjxf-5"})(["background-image:src(",");height:40px;width:40px;margin-left:10px;"],j);var I=i.p+"static/media/Spinner.60cc8c9b21a167880b51aa2cb4e36590.svg",U=a.ZP.div.withConfig({displayName:"SearchBar__SearchWrapper",componentId:"sc-7er1m1-0"})(["position:relative;right:2%;"]),T=a.ZP.button.withConfig({displayName:"SearchBar__Cross",componentId:"sc-7er1m1-1"})(["position:absolute;transform:translateX(-100%);cursor:pointer;height:100%;color:rgba(129,129,129,0.924);background-color:transparent;padding:0;width:30px;border:none;outline:none;transition:all 200ms ease-in-out;&:hover{color:white;background-color:rgba(140,140,140,0.3);}"]),B=a.ZP.div.withConfig({displayName:"SearchBar__ResultsWrapper",componentId:"sc-7er1m1-2"})(["margin-top:5px;z-index:20;position:absolute;display:flex;flex-direction:column;max-height:500px;overflow-y:scroll;overflow-x:hidden;width:100%;background-color:#1a1a1a;transition:all 300ms ease-in-out;&::-webkit-scrollbar{width:3px;}"]),E=a.ZP.div.withConfig({displayName:"SearchBar__SearchResults",componentId:"sc-7er1m1-3"})([""]),R=a.ZP.img.attrs((function(e){return{style:{background:e.background}}})).withConfig({displayName:"SearchBar__Image",componentId:"sc-7er1m1-4"})(["max-height:100px;image-rendering:auto;backface-visibility:hidden;-webkit-backface-visibility:hidden;"]),A=a.ZP.div.withConfig({displayName:"SearchBar__ResultCont",componentId:"sc-7er1m1-5"})(["color:white;display:flex;flex-direction:row;align-items:center;width:100%;padding:10px;transition:all 200ms ease-in-out;cursor:pointer;font-family:custom;&:hover{background-color:#ffffff18;}"]),M=a.ZP.div.withConfig({displayName:"SearchBar__Details",componentId:"sc-7er1m1-6"})(["display:flex;flex-direction:column;padding:5px;padding-right:15px;margin-left:10px;"]),O=a.ZP.div.withConfig({displayName:"SearchBar__Name",componentId:"sc-7er1m1-7"})(["margin-bottom:15px;"]),V=a.ZP.div.withConfig({displayName:"SearchBar__Release",componentId:"sc-7er1m1-8"})(["margin-bottom:5px;font-family:customThin;font-size:0.8rem;"]),L=a.ZP.div.withConfig({displayName:"SearchBar__Rating",componentId:"sc-7er1m1-9"})(["margin-bottom:5px;font-family:customThin;font-size:0.8rem;"]);var D=function(){var e=(0,r.useState)([]),t=(0,o.Z)(e,2),i=t[0],n=t[1],a=(0,r.useState)(""),s=(0,o.Z)(a,2),d=s[0],h=s[1],m=(0,r.useState)(!1),u=(0,o.Z)(m,2),f=u[0],g=u[1];return(0,r.useEffect)((function(){function e(){return(e=(0,l.Z)((0,c.Z)().mark((function e(){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,p.Z.get("/search/multi?api_key=d0a6b59ce5d4305ca6cf3e0124eeec2f&language=en-US&query=".concat(d,"&page=1&include_adult=true")).then((function(e){n(e.data.results),g(!1)})).catch((function(e){}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}d?function(){e.apply(this,arguments)}():n([])}),[d]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(U,{children:[(0,k.jsx)(Z,{name:"hidden",type:"text",autoComplete:"off",autoSave:"off",onChange:function(e){var t=e.target;return h(t.value)},id:"inp",placeholder:"Search"}),0!==d.length&&(0,k.jsx)(T,{onClick:function(){h(""),document.getElementById("inp").value=""},children:"\u2716"}),(0,k.jsx)(B,{children:i&&i.map((function(e,t){return e.poster_path&&(0,k.jsx)(E,{children:(0,k.jsx)(x.rU,{to:"".concat(e.media_type,"/").concat(e.id),style:{textDecoration:"none",textDecorationColor:"none"},children:(0,k.jsxs)(A,{children:[f?(0,k.jsx)(R,{src:I}):(0,k.jsx)(R,{src:"".concat("https://image.tmdb.org/t/p/original").concat(e.poster_path)}),(0,k.jsxs)(M,{children:[(0,k.jsx)(O,{children:e.title||e.original_name}),(0,k.jsxs)(V,{children:["Release Date: ",e.release_date]}),(0,k.jsxs)(L,{children:["Rating: ",e.vote_average]})]})]})})},t)}))})]}),(0,k.jsx)("div",{onClick:function(){document.getElementById("inp").focus()},style:{cursor:"pointer"}})]})};function G(e){var t=e.selectedSection,i=e.setSelectedSection,n={color:"white",borderBottom:"2px solid white"};return(0,k.jsxs)(S,{children:[(0,k.jsx)(N,{children:(0,k.jsxs)(r.Suspense,{fallback:(0,k.jsx)("h1",{style:{position:"absolute",display:"flex",color:"white",alignItems:"center",justifyContent:"center",height:"100%",width:"100%"},children:"Loading"}),children:[(0,k.jsx)(P,{style:"Home"===t?n:null,onClick:function(){return i("Home")},children:"Home"}),(0,k.jsx)(P,{style:"Movies"===t?n:null,onClick:function(){return i("Movies")},children:"Movies"}),(0,k.jsx)(P,{style:"TV"===t?n:null,onClick:function(){return i("TV")},children:"TV"}),(0,k.jsx)(P,{style:"Animated"===t?n:null,onClick:function(){return i("Animated")},children:"Animated"})]})}),(0,k.jsx)(C,{onClick:function(e){return function(e){e.isPropagationStopped()&&console.log("stopped")}(e)},children:(0,k.jsx)(D,{})})]})}var z,H=function(e){var t=e.title,i=e.fetchUrl,n=e.isLargeRow,a=void 0!==n&&n,s=(e.md_tv,e.md_movie),d=void 0!==s&&s,h=(0,r.useState)([{media_type:""}]),m=(0,o.Z)(h,2),u=m[0],f=m[1],g=(0,r.useState)(!1),v=(0,o.Z)(g,2),y=v[0],w=v[1];function _(){return(_=(0,l.Z)((0,c.Z)().mark((function e(t,i){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.target.offsetParent.offsetParent.children[1].style.opacity+="1";case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(b=(0,l.Z)((0,c.Z)().mark((function e(t,i){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.target.offsetParent.offsetParent.children[1].style.opacity="0";case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t){var i=e.view.document.activeElement.parentNode.children[2];"left"===t?i.scrollLeft-=500:i.scrollLeft+=500}return(0,r.useEffect)((function(){function e(){return(e=(0,l.Z)((0,c.Z)().mark((function e(){var t;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.Z.get(i);case 2:return t=e.sent,f(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[i]),(0,k.jsx)("div",{className:"rowContainer",children:(0,k.jsxs)("div",{className:"row",children:[(0,k.jsx)("button",{onClick:function(e){return j(e,"left")},onMouseEnter:function(){w(!0)},onMouseLeave:function(){w(!1)},style:{opacity:y?"1":"0"},className:"left-arrow ".concat(a&&"left-arrow-large"),children:(0,k.jsx)("img",{className:"arrow-img ".concat(a&&"arrow-img-large"),src:"https://www.svgrepo.com/show/90610/left-arrow-chevron.svg",alt:"Scroll Left"})}),(0,k.jsx)("h2",{className:"genre-title ".concat(a&&"large-title"),children:t}),(0,k.jsx)("div",{className:"row-posts",children:u&&u.map((function(e,t){return(a&&e.poster_path||!a&&e.backdrop_path)&&(0,k.jsxs)("div",{className:"row-poster-cont",children:[(0,k.jsx)("div",{className:"poster-cont ".concat(a&&"poster-cont-larger"),children:(0,k.jsx)(x.rU,{target:"_blank",to:"/".concat(d||"movie"===e.media_type?"movie":"tv","/").concat(e.id),children:(0,k.jsx)("img",{style:{resize:"both"},onMouseEnter:function(e){!function(e,t){_.apply(this,arguments)}(e,t)},onMouseOut:function(e){!function(e,t){b.apply(this,arguments)}(e,t)},className:"row-poster ".concat(a&&"row-poster-larger"),src:"".concat(a?"https://image.tmdb.org/t/p/w220_and_h330_face/":"https://image.tmdb.org/t/p/w300/").concat(a?e.poster_path:e.backdrop_path),alt:e.name})})}),(0,k.jsx)("div",{className:"row-poster-tooltip-cont",children:(0,k.jsx)("div",{className:"row-poster-tooltip",children:(i="".concat(e.name||e.title||e.original_name),n=30,(null===i||void 0===i?void 0:i.length)>n?i.substr(0,n-1)+"...":i)})})]},e.id);var i,n}))}),(0,k.jsx)("button",{onClick:function(e){return j(e,"right")},onMouseEnter:function(){w(!0)},onMouseLeave:function(){w(!1)},style:{opacity:y?"1":"0",scrollBehavior:"smooth"},className:"right-arrow ".concat(a&&"right-arrow-large"),children:(0,k.jsx)("img",{className:"arrow-img ".concat(a&&"arrow-img-large"),src:"https://www.svgrepo.com/show/5102/right-chevron.svg",alt:""})})]})})},F=a.ZP.div.withConfig({displayName:"styles__SliderWrapper",componentId:"sc-1d99ygb-0"})(["width:100%;position:relative;display:flex;justify-content:center;align-items:center;margin-bottom:50px;margin-top:20px;"]),W=a.ZP.div.withConfig({displayName:"styles__SliderOuterContainer",componentId:"sc-1d99ygb-1"})(["width:90%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;"]),J=a.ZP.h2.withConfig({displayName:"styles__SliderHeading",componentId:"sc-1d99ygb-2"})(["display:flex;justify-content:center;align-items:center;color:white;margin-bottom:10px;width:100%;font-family:monospace;font-size:1.9rem;-webkit-user-select:none;user-select:none;margin-bottom:20px;"]),Y=a.ZP.div.withConfig({displayName:"styles__SliderContainer",componentId:"sc-1d99ygb-3"})(["width:1100px;min-width:1000px;height:450px;display:flex;flex-direction:row;position:relative;"]),X=a.ZP.div.withConfig({displayName:"styles__SliderDetailsCont",componentId:"sc-1d99ygb-4"})(["height:100%;width:1000px;overflow:hidden;border-radius:10px;display:flex;flex-direction:column;"]),q=a.ZP.div.withConfig({displayName:"styles__SliderNav",componentId:"sc-1d99ygb-5"})(["position:absolute;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;width:20px;"]),K=a.ZP.div.withConfig({displayName:"styles__SliderMovieCont",componentId:"sc-1d99ygb-6"})(["position:relative;display:flex;flex-direction:row;height:100%;width:1000px;transition:all 300ms ease;"]),$=a.ZP.img.withConfig({displayName:"styles__SliderPoster",componentId:"sc-1d99ygb-7"})(["height:450px;object-fit:cover;width:300px;image-rendering:-webkit-optimize-contrast;cursor:pointer;"]),Q=a.ZP.div.withConfig({displayName:"styles__DetailsCont",componentId:"sc-1d99ygb-8"})(["position:relative;height:100%;width:700px;object-fit:cover;"]),ee=a.ZP.img.withConfig({displayName:"styles__SliderBg",componentId:"sc-1d99ygb-9"})(["position:absolute;height:450px;object-fit:cover;width:100%;-webkit-mask-image:linear-gradient( to left,rgba(0,0,0,0.5),rgba(0,0,0,0) );-webkit-mask-size:100% 100%;-webkit-mask-repeat:no-repeat;-webkit-mask-position:left top,left bottom;z-index:-1;filter:opacity(0.7);image-rendering:-webkit-optimize-contrast;"]),te=(a.ZP.div.withConfig({displayName:"styles__SliderPost",componentId:"sc-1d99ygb-10"})([""]),a.ZP.div.withConfig({displayName:"styles__Details",componentId:"sc-1d99ygb-11"})(["height:max-content;padding:40px;"])),ie=a.ZP.h2.withConfig({displayName:"styles__DetailsTitle",componentId:"sc-1d99ygb-12"})(["margin:0;color:white;font-family:custom;font-size:2.2rem;"]),ne=a.ZP.div.withConfig({displayName:"styles__GenreCont",componentId:"sc-1d99ygb-13"})([""]),oe=a.ZP.div.withConfig({displayName:"styles__Genre",componentId:"sc-1d99ygb-14"})([""]),ae=a.ZP.div.withConfig({displayName:"styles__ButtonsCont",componentId:"sc-1d99ygb-15"})(["width:100px;margin-top:15px;display:flex;justify-content:space-between;"]),re=a.ZP.img.withConfig({displayName:"styles__Play",componentId:"sc-1d99ygb-16"})(["height:35px;width:35px;cursor:pointer;transition:all 200ms ease;&:hover{transform:scale(1.09);}"]),se=a.ZP.img.withConfig({displayName:"styles__Bookmark",componentId:"sc-1d99ygb-17"})(["height:35px;width:35px;cursor:pointer;transition:all 200ms ease;&:hover{transform:scale(1.09);}"]),ce=a.ZP.div.withConfig({displayName:"styles__Overview",componentId:"sc-1d99ygb-18"})(["color:white;margin-top:45px;font-family:customThin;font-weight:300;line-height:1.5;"]),le=a.ZP.div.withConfig({displayName:"styles__NavCircle",componentId:"sc-1d99ygb-19"})(["height:5px;margin:5px 0px 5px 0px;width:5px;border:2px solid grey;border-radius:50%;cursor:pointer;transition:all 200ms ease-in-out;&:hover{border-color:white;}"]);i(7051);var de=function(e){var t=e.fetchUrl,i=e.md_movie,n=void 0!==i&&i,a=e.title,s=(0,r.useState)([]),d=(0,o.Z)(s,2),h=d[0],m=d[1],u=(0,r.useState)(0),f=(0,o.Z)(u,2),g=f[0],w=f[1],_=(0,r.useState)(0),b=(0,o.Z)(_,2),j=b[0],S=b[1],N="https://image.tmdb.org/t/p/w500/";function P(e){S(100*e)}return(0,r.useEffect)((function(){function e(){return(e=(0,l.Z)((0,c.Z)().mark((function e(){var i,n;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(){m(i.data.results)},e.next=3,p.Z.get(t);case 3:return i=e.sent,0===h.length&&n(),e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,r.useEffect)((function(){0!==h.length&&(z=setInterval((function(){w((function(e){return w(e+1)}))}),5e3))}),[h]),(0,r.useEffect)((function(){g===h.length?(w(0),S(0)):P(g)}),[g]),(0,k.jsx)(F,{children:(0,k.jsxs)(W,{children:[(0,k.jsx)(J,{children:a}),(0,k.jsxs)(Y,{children:[(0,k.jsx)(X,{children:h&&h.map((function(e,t){return(0,k.jsxs)(K,{style:{transform:"translateY(-".concat(j,"%)")},children:[(0,k.jsx)(x.rU,{target:"_blank",to:"/".concat(n||"movie"===e.media_type?"movie":"tv","/").concat(e.id),children:(0,k.jsx)($,{src:"".concat(N).concat(e.poster_path),alt:"Poster"})}),(0,k.jsxs)(Q,{children:[(0,k.jsx)(ee,{src:"".concat(N).concat(e.backdrop_path),alt:"Background Wall"}),(0,k.jsxs)(te,{children:[(0,k.jsx)(ie,{children:(null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.original_name)}),(0,k.jsx)(ne,{children:e.genre&&e.genre.map((function(e,t){return(0,k.jsx)(oe,{children:e.name},t)}))}),(0,k.jsxs)(ae,{children:[(0,k.jsx)(re,{src:v.Z}),(0,k.jsx)(se,{src:y.Z})]}),(0,k.jsx)(ce,{children:(i="".concat(null===e||void 0===e?void 0:e.overview),o=450,(null===i||void 0===i?void 0:i.length)>o?i.substr(0,o-1)+"...":i)})]})]})]},t);var i,o}))}),(0,k.jsx)(q,{children:h&&h.map((function(e,t){return(0,k.jsx)(le,{onClick:function(){w(t),P(t),clearInterval(z)},style:{backgroundColor:g===t?"white":"transparent",borderColor:g===t?"white":""}},t)}))})]})]})})};function pe(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(H,{title:"MAK ORIGINALS",fetchUrl:m.fetchNetflixOriginals,isLargeRow:!0,md_tv:!0}),(0,k.jsx)(H,{title:"POPULAR TV SHOWS",fetchUrl:m.fetchPopularTvShows,isLargeRow:!0,md_tv:!0}),(0,k.jsx)(de,{title:"TRENDING NOW",fetchUrl:m.fetchTrending}),(0,k.jsx)(H,{title:"TOP RATED TV SHOWS",fetchUrl:m.fetchTopRated,md_tv:!0}),(0,k.jsx)(H,{title:"POPULAR MOVIES",fetchUrl:m.fetchPopularMovies,md_movie:!0}),(0,k.jsx)(H,{title:"COMEDY MOVIES",fetchUrl:m.fetchComedyMovies,md_movie:!0}),(0,k.jsx)(H,{title:"HORROR MOVIES",fetchUrl:m.fetchHorrorMovies,md_movie:!0})]})}var he=function(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(H,{title:"POPULAR MOVIES",fetchUrl:u.fetchPopularMovies,isLargeRow:!0,md_movie:!0}),(0,k.jsx)(de,{fetchUrl:u.fetchTopRatedMovies,md_movie:!0,title:"TOP RATED MOVIES"}),(0,k.jsx)(H,{title:"NOW PLAYING",fetchUrl:u.fetchNowPlayingMovies,md_movie:!0,isLargeRow:!0}),(0,k.jsx)(H,{title:"UPCOMING MOVIES",fetchUrl:u.fetchUpComingMovies,md_movie:!0,isLargeRow:!0})]})};var me=function(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(H,{title:"ON THE AIR",fetchUrl:f.fetchOnTheAirTV,isLargeRow:!0,md_tv:!0}),(0,k.jsx)(H,{title:"AIRING TODAY",fetchUrl:f.fetchAiringTodayTV,isLargeRow:!0,md_tv:!0}),(0,k.jsx)(de,{md_tv:!0,fetchUrl:f.fetchPopularTV,title:"POPULAR"}),(0,k.jsx)(H,{title:"TOP RATED",fetchUrl:f.fetchTopRatedTV,md_tv:!0,isLargeRow:!0})]})};var ue=function(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(H,{title:"POPULAR",fetchUrl:g.fetchPopular,isLargeRow:!0,md_movie:!0}),(0,k.jsx)(de,{md_movie:!0,title:"JAPANESE",fetchUrl:g.fetchJapanese}),(0,k.jsx)(H,{title:"COMING SOON",fetchUrl:g.fetchLatest,isLargeRow:!0,md_movie:!0})]})},fe=i(2871),ge=a.ZP.div.withConfig({displayName:"HomeScreen__SectionContainer",componentId:"sc-18akd9-0"})(["width:100%;height:100%;position:relative;margin-bottom:40px;"]);var xe=function(){var e=(0,r.useState)("Home"),t=(0,o.Z)(e,2),i=t[0],n=t[1];return(0,r.useEffect)((function(){}),[i]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(b,{}),(0,k.jsx)(G,{selectedSection:i,setSelectedSection:n}),(0,k.jsxs)(ge,{children:["Home"===i&&(0,k.jsx)(pe,{}),"Movies"===i&&(0,k.jsx)(he,{}),"TV"===i&&(0,k.jsx)(me,{}),"Animated"===i&&(0,k.jsx)(ue,{})]}),(0,k.jsx)(fe.Z,{})]})}}}]);
//# sourceMappingURL=885.28e9bd9b.chunk.js.map