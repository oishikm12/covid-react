(this.webpackJsonpcorona=this.webpackJsonpcorona||[]).push([[0],{14:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},207:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),c=a.n(r),o=a(71),s=a.n(o),i=a(6),u=a.n(i),d=a(11),l=a(72),p=a(73),j=a(81),f=a(80),h=a(225),b=a(229),v=a(226),x=a(227),m=a(31),O=a.n(m),y=a(32),g=a.n(y),_=a(14),C=a.n(_);var w=function(e){var t=e.data.confirmed,a=e.data.recovered,r=e.data.deaths,c=e.data.lastUpdate;return t?Object(n.jsx)("div",{className:C.a.container,children:Object(n.jsxs)(h.a,{container:!0,spacing:3,justify:"center",children:[Object(n.jsx)(h.a,{item:!0,component:b.a,xs:12,md:3,className:g()(C.a.card,C.a.infected),children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)(x.a,{color:"textSecondary",gutterBottom:!0,children:"Infected"}),Object(n.jsx)(x.a,{variant:"h5",children:Object(n.jsx)(O.a,{start:0,end:t.value,duration:2,separator:","})}),Object(n.jsx)(x.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(n.jsx)(x.a,{variant:"body2",children:"Number of active cases."})]})}),Object(n.jsx)(h.a,{item:!0,component:b.a,xs:12,md:3,className:g()(C.a.card,C.a.recovered),children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)(x.a,{color:"textSecondary",gutterBottom:!0,children:"Recoveries"}),Object(n.jsx)(x.a,{variant:"h5",children:Object(n.jsx)(O.a,{start:0,end:a.value,duration:2,separator:","})}),Object(n.jsx)(x.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(n.jsx)(x.a,{variant:"body2",children:"Number of recovered people."})]})}),Object(n.jsx)(h.a,{item:!0,component:b.a,xs:12,md:3,className:g()(C.a.card,C.a.deaths),children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)(x.a,{color:"textSecondary",gutterBottom:!0,children:"Death"}),Object(n.jsx)(x.a,{variant:"h5",children:Object(n.jsx)(O.a,{start:0,end:r.value,duration:2,separator:","})}),Object(n.jsx)(x.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(n.jsx)(x.a,{variant:"body2",children:"Number of deaths."})]})})]})}):"Loading ..."},k=a(30),D=a(45),S=a(33),N=a.n(S),I="https://covid19.mathdro.id/api",B=0;function A(e){return G.apply(this,arguments)}function G(){return(G=Object(d.a)(u.a.mark((function e(t){var a,n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V(),a=I,t&&(a="".concat(I,"/countries/").concat(t)),e.prev=3,e.next=6,N.a.get(a);case 6:return n=e.sent,r=n.data,c={confirmed:r.confirmed,recovered:r.recovered,deaths:r.deaths,lastUpdate:r.lastUpdate},e.abrupt("return",c);case 12:e.prev=12,e.t0=e.catch(3),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})))).apply(this,arguments)}function U(){return E.apply(this,arguments)}function E(){return(E=Object(d.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V(),e.prev=1,e.next=4,N.a.get("".concat(I,"/daily"));case 4:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,recovered:e.recovered.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function J(){return M.apply(this,arguments)}function M(){return(M=Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V(),e.prev=1,e.next=4,N.a.get("".concat(I,"/countries"));case 4:return t=e.sent,a=t.data,e.abrupt("return",a.countries.map((function(e){return e.name})));case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function V(){B+=1,console.log("API called ".concat(B))}var z=a(78),L=a.n(z);var P=function(e){var t=Object(r.useState)([]),a=Object(k.a)(t,2),c=a[0],o=a[1],s=e.data,i=e.country;Object(r.useEffect)((function(){function e(){return(e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,U();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var l=c.length?Object(n.jsx)(D.Line,{data:{labels:c.map((function(e){return e.date})),datasets:[{data:c.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:c.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null,p=s.confirmed?Object(n.jsx)(D.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[s.confirmed.value,s.recovered.value,s.deaths.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(i)}}}):null;return Object(n.jsx)("div",{className:L.a.container,children:i?p:l})},Q=a(230),R=a(228),Z=a(79),q=a.n(Z);var K=function(e){var t=Object(r.useState)([]),a=Object(k.a)(t,2),c=a[0],o=a[1];return Object(r.useEffect)((function(){function e(){return(e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,J();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[o]),Object(n.jsx)(Q.a,{className:q.a.formControl,children:Object(n.jsxs)(R.a,{defaultValue:"",onChange:function(t){return e.countryChange(t.target.value)},children:[Object(n.jsx)("option",{value:"Global",children:"Global"}),c.map((function(e,t){return Object(n.jsx)("option",{value:e,children:e},t)}))]})})},Y=a(46),F=a.n(Y),H=a.p+"static/media/image.9e5d4fc7.png",T=function(e){Object(j.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:void 0},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"countryChange",value:function(){var e=Object(d.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"Global"===t&&(t=void 0),e.next=3,A(t);case 3:a=e.sent,this.setState({data:a,country:t});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return Object(n.jsxs)("div",{className:F.a.container,children:[Object(n.jsx)("img",{className:F.a.image,alt:"COVID 19",src:H}),Object(n.jsx)(w,{data:t}),Object(n.jsx)(K,{countryChange:this.countryChange.bind(this)}),Object(n.jsx)(P,{data:t,country:a})]})}}]),a}(c.a.Component);s.a.render(Object(n.jsx)(T,{}),document.getElementById("root"))},46:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},78:function(e,t,a){e.exports={container:"Charts_container__1mZfu"}},79:function(e,t,a){e.exports={formControl:"Countries_formControl__3VMJK"}}},[[207,1,2]]]);
//# sourceMappingURL=main.2c67c450.chunk.js.map