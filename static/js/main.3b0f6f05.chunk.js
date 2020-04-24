(this["webpackJsonpreact-corona"]=this["webpackJsonpreact-corona"]||[]).push([[0],{104:function(e,t,a){e.exports=a(226)},109:function(e,t,a){},15:function(e,t,a){e.exports={container:"Cards_container__346T_",card:"Cards_card__1I-kR",infected:"Cards_infected__1NRnN",recovered:"Cards_recovered__20nR3",deaths:"Cards_deaths__3IMxy"}},226:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),l=(a(109),a(7)),u=a.n(l),i=a(10),s=a(86),d=a(87),m=a(100),f=a(99),p=a(244),h=a(246),v=a(247),E=a(248),y=a(41),g=a.n(y),b=a(42),C=a.n(b),x=a(15),_=a.n(x),k=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:_.a.container},r.a.createElement(p.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(p.a,{item:!0,component:h.a,xs:12,md:3,className:C()(_.a.card,_.a.infected)},r.a.createElement(v.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(E.a,{variant:"h5"},r.a.createElement(g.a,{start:0,end:a.value,duration:3,separator:","})),r.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(E.a,{variant:"body2"},"Number of active cases of COVID-19"))),r.a.createElement(p.a,{item:!0,component:h.a,xs:12,md:3,className:C()(_.a.card,_.a.recovered)},r.a.createElement(v.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(E.a,{variant:"h5"},r.a.createElement(g.a,{start:0,end:n.value,duration:3,separator:","})),r.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(E.a,{variant:"body2"},"Number of recoveries from COVID-19"))),r.a.createElement(p.a,{item:!0,component:h.a,xs:12,md:3,className:C()(_.a.card,_.a.deaths)},r.a.createElement(v.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(E.a,{variant:"h5"},r.a.createElement(g.a,{start:0,end:c.value,duration:3,separator:","})),r.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(E.a,{variant:"body2"},"Number of deaths caused by COVID-19"))))):"Loading..."},w=a(40),O=a(43),j=a.n(O),S="https://covid19.mathdro.id/api",D=function(){var e=Object(i.a)(u.a.mark((function e(t){var a,n,r,c,o,l,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=S,t&&(a="".concat(S,"/countries/").concat(t)),e.prev=2,e.next=5,j.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,l=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:l,lastUpdate:i});case 14:e.prev=14,e.t0=e.catch(2);case 16:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat(S,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat(S,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),I=a(56),P=a(93),R=a.n(P),B=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,l=e.country,s=Object(n.useState)([]),d=Object(w.a)(s,2),m=d[0],f=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=a?r.a.createElement(I.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"Pepple",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(l)}}}):null,h=m.length?r.a.createElement(I.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:R.a.container},l?p:h)},V=a(255),A=a(253),T=a(94),U=a.n(T),q=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(w.a)(a,2),o=c[0],l=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,M();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),r.a.createElement(V.a,{className:U.a.formControl},r.a.createElement(A.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},F=a(249),J=a(250),L=a(254),W=a(95),G=a.n(W),H=a(96),Q=a.n(H),$=a(252),z=Object($.a)((function(){return{headerTypography:{flex:1}}})),K=function(e){var t=e.themeMode,a=e.lightMode,n=e.darkMode,c=z();return r.a.createElement(F.a,{position:"static",color:"primary"},r.a.createElement(J.a,null,r.a.createElement(E.a,{className:c.headerTypography},"COVID-19 Tracker APP"),"light"===t?r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,"Light theme"),r.a.createElement(L.a,{color:"inherit",onClick:n},r.a.createElement(G.a,null))):r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,"Dark theme"),r.a.createElement(L.a,{color:"inherit",onClick:a},r.a.createElement(Q.a,null)))))},X=a(98),Y=a(251),Z=a(44),ee=a.n(Z),te=a(97),ae=a.n(te),ne=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:"",themeMode:"light"},e.handleCountryChange=function(){var t=Object(i.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.country,c=t.themeMode,o=Object(X.a)({palette:{type:c,primary:{main:"light"===c?"#3f51b5":"#388e3c"}}});return r.a.createElement(Y.a,{theme:o},r.a.createElement("div",null,r.a.createElement(K,{themeMode:c,lightMode:function(){document.querySelector("body").style.backgroundColor="#fff",e.setState({themeMode:"light"})},darkMode:function(){document.querySelector("body").style.backgroundColor="#2e2e2e",e.setState({themeMode:"dark"})}}),r.a.createElement("div",{className:ee.a.container},r.a.createElement("img",{src:ae.a,className:ee.a.image,alt:"COVID-19"}),r.a.createElement(k,{data:a}),r.a.createElement(q,{handleCountryChange:this.handleCountryChange}),r.a.createElement(B,{data:a,country:n}),r.a.createElement("div",{className:ee.a.footer},r.a.createElement(E.a,{color:"textSecondary",variant:"caption"},r.a.createElement("footer",null,"Minh Tran \xa9 2020"))))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},44:function(e,t,a){e.exports={container:"App_container__PDsPj",image:"App_image__1tRgj",footer:"App_footer__1HPed"}},93:function(e,t,a){e.exports={container:"Chart_container__1Qj5R"}},94:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__741IB"}},97:function(e,t,a){e.exports=a.p+"static/media/corona.d7265326.png"}},[[104,1,2]]]);
//# sourceMappingURL=main.3b0f6f05.chunk.js.map