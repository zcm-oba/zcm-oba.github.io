(this["webpackJsonpmove-world"]=this["webpackJsonpmove-world"]||[]).push([[4],{1002:function(e,t){},1501:function(e,t,a){"use strict";a.r(t);var n=a(6),l=a(0),r=a.n(l),c=a(663),s=a(695),o=a(62),i=a(138),m=a(4),d=a(1056),u=a.n(d),p=a(477),y=a.n(p),g=a(1499),E=a(1503),b=a(43),T=a(21),h=a(24),x=a(771),f=a(23),v=a(5),k=a(10),j=a(80),O=a.n(j),w=a(816),A=a(35),D=a(835),N=a.n(D),C=a(9),S=70,I=110,P=5,B=10,L=182,z=72,M=6,U=118,q=353,W=6,H=375,R=25,V=52,_=200,F=305,Q=355,G=405,J=455,X=15,K=10,Y=function(e,t,a,n){return{top:e,left:t,fontSize:a,width:n||220,border:0,margin:0,padding:0}},Z=function(e,t,a,n){return{top:e,left:t,fontSize:a,width:n,border:0,position:"absolute"}},$=function(e){var t;return t={},Object(k.a)(t,"pack"+e+"no",Z(H+X*e,R,K,20)),Object(k.a)(t,"pack"+e+"type",Z(H+X*e,V,K,130)),Object(k.a)(t,"pack"+e+"size",Z(H+X*e,_,K-1,80)),Object(k.a)(t,"pack"+e+"quantity",Z(H+X*e,F,K,30)),Object(k.a)(t,"pack"+e+"weight",Z(H+X*e,Q,K,30)),Object(k.a)(t,"pack"+e+"volume",Z(H+X*e,G,K,30)),Object(k.a)(t,"pack"+e+"remarks",Z(H+X*e,J,K,120)),t},ee=x.StyleSheet.create(Object(v.a)(Object(v.a)(Object(v.a)(Object(v.a)(Object(v.a)(Object(v.a)(Object(v.a)(Object(v.a)(Object(v.a)(Object(v.a)(Object(v.a)(Object(v.a)(Object(v.a)(Object(v.a)(Object(v.a)(Object(v.a)(Object(v.a)({pageBackground:{position:"absolute",display:"block",height:854910/1042,width:590},barcode:{position:"absolute",top:152,left:5,height:55,width:250},date:Y(S+0*P,I+0,B),time:Y(S+1*P,I+0,B),cargoType:Y(S+2*P,I+0,B),destination:Y(S+3*P,I+0,B),hbl:Y(S+4*P,I+0,B),name:Y(L+0*M,z+0,8),name2:Y(L+1*M,z+0,8),address:Y(L+2*M,z+0,8),address2:Y(L+3*M,z+0,8),qid:Y(L+4*M+5,z+0,9),contact:Y(L+5*M+6,z+0,9),ppNo:Y(L+6*M+7,z+0,9),slName:Y(U+0*W,q+0,8),slName2:Y(U+1*W,q+0,8),slAddress:Y(U+2*W,q+0,8),slAddress2:Y(U+3*W,q+0,8),slQid:Y(U+4*W+2,q+0,9),slContact:Y(U+5*W+3,q+0,9),slPpNo:Y(U+6*W+4,q+0,9)},$(0)),$(1)),$(2)),$(3)),$(4)),$(5)),$(6)),$(7)),$(8)),$(9)),$(10)),$(11)),$(12)),$(13)),$(14)),$(15)),{},{totalQuantity:Z(620,105,10),totalVolume:Z(635,105,10),totalWeight:Z(650,105,10),totalAmount:Z(620,360,10),totalPaid:Z(635,360,10),amountInWords:Z(675,80,9),note:Z(800,20,10)})),te=function(e){var t,a,n,l,c,s,o,i,m,d=e.cargo,u=e.packages,p=Object(f.a)(u.slice(0,16));m=document.createElement("canvas"),N()(m,d.hbl,{displayValue:!1});var y=m.toDataURL(),g=Object(C.b)(d.branch);return r.a.createElement(x.Page,{size:"A4",orientation:"portrait"},r.a.createElement(x.Image,{src:"/app/images/"+g.parent+"/"+d.branch+"/hbl.jpg",style:ee.pageBackground}),r.a.createElement(x.Image,{src:y,style:ee.barcode}),r.a.createElement(x.Text,{style:ee.date},d.pickedUpDate||d.pickupDate),r.a.createElement(x.Text,{style:ee.time},d.pickedUpTime||d.pickupTime),r.a.createElement(x.Text,{style:ee.cargoType},d.cargoMode,"/",d.deliveryType),r.a.createElement(x.Text,{style:ee.destination},d.warehouseLocation||"-"),r.a.createElement(x.Text,{style:ee.hbl},d.hbl),r.a.createElement(x.Text,{style:ee.name},(null===(t=d.name)||void 0===t?void 0:t.substring(0,47))||"-"),r.a.createElement(x.Text,{style:ee.name2},(null===(a=d.name)||void 0===a?void 0:a.substring(47))||"  "),r.a.createElement(x.Text,{style:ee.address},(null===(n=d.address)||void 0===n?void 0:n.substring(0,47))||"-"),r.a.createElement(x.Text,{style:ee.address2},(null===(l=d.address)||void 0===l?void 0:l.substring(47))||"  "),r.a.createElement(x.Text,{style:ee.qid},d.qid||"-"),r.a.createElement(x.Text,{style:ee.contact},d.contact||"-"),r.a.createElement(x.Text,{style:ee.ppNo},d.ppNo||"-"),r.a.createElement(x.Text,{style:ee.slName},(null===(c=d.slName)||void 0===c?void 0:c.substring(0,47))||"-"),r.a.createElement(x.Text,{style:ee.slName2},(null===(s=d.slName)||void 0===s?void 0:s.substring(47))||"  "),r.a.createElement(x.Text,{style:ee.slAddress},(null===(o=d.slAddress)||void 0===o?void 0:o.substring(0,47))||"-"),r.a.createElement(x.Text,{style:ee.slAddress2},(null===(i=d.slAddress)||void 0===i?void 0:i.substring(47))||"  "),r.a.createElement(x.Text,{style:ee.slQid},"  "),r.a.createElement(x.Text,{style:ee.slContact},d.slContact||"-"),r.a.createElement(x.Text,{style:ee.slPpNo},d.slPpNo||"-"),r.a.createElement(x.Text,{style:ee.totalQuantity},O()(u,(function(e,t){return e+t.quantity}),0)||"-"),r.a.createElement(x.Text,{style:ee.totalVolume},Object(A.h)(u)||"-"),r.a.createElement(x.Text,{style:ee.totalWeight},Object(A.i)(u)||"-"),r.a.createElement(x.Text,{style:ee.totalAmount},d.paid+" "+d.currency||"-"),r.a.createElement(x.Text,{style:ee.totalPaid},d.paid+" "+d.currency||"-"),r.a.createElement(x.Text,{style:ee.amountInWords},(Object(w.a)(d.paid)+" only"||!1).toUpperCase()),r.a.createElement(x.Text,{style:ee.note},d.note||"-"),p.map((function(e,t){return r.a.createElement(x.Text,{style:ee["pack"+t+"no"]},t+1)})),p.map((function(e,t){return r.a.createElement(x.Text,{style:ee["pack"+t+"type"]},e.type)})),p.map((function(e,t){return r.a.createElement(x.Text,{style:ee["pack"+t+"size"]},e.length+" X "+e.breadth+" X "+e.height)})),p.map((function(e,t){return r.a.createElement(x.Text,{style:ee["pack"+t+"quantity"]},e.quantity)})),p.map((function(e,t){return r.a.createElement(x.Text,{style:ee["pack"+t+"weight"]},e.weight)})),p.map((function(e,t){return r.a.createElement(x.Text,{style:ee["pack"+t+"volume"]},Object(A.f)(e))})),p.map((function(e,t){return r.a.createElement(x.Text,{style:ee["pack"+t+"remarks"]},e.remarks)})))},ae=function(e){var t=e.details;return 0===t.length?r.a.createElement(x.Document,null):r.a.createElement(x.Document,null,t.map((function(e){return r.a.createElement(te,{cargo:e.cargo,packages:e.packages})})))},ne=125,le=20,re=10,ce=function(e,t,a,n){return{top:e,left:t,fontSize:a,width:n,border:0,position:"absolute"}},se=x.StyleSheet.create({pageBackground:{position:"absolute",display:"block",height:854910/1042,width:590},hbl:ce(ne+0,le+355,re),date:ce(ne+12,le+355,re),time:ce(ne+24,le+355,re),driver:ce(ne+36,le+355,re),name:ce(ne+12,le+27,re),name2:ce(ne+24,le+27,re),address:ce(ne+40,le+27,re),address2:ce(ne+52,le+27,re),row1:ce(ne+130,le+30,re),row2:ce(ne+130,le+155,re),row3:ce(ne+130,le+290,re),row4:ce(ne+130,le+455,re),total:ce(ne+403,le+455,re-1),discount:ce(ne+413,le+455,re-1),net:ce(ne+426,le+455,re-1),amountInWords:ce(ne+442,le+110,re-1),remarks:ce(ne+480,le+40,re-1),cash:ce(ne+532,le+220,re-1),finalTotal:ce(ne+573,le+220,re-1)}),oe=function(e){var t,a,n,l,c=e.cargo;if(!c)return r.a.createElement(x.Document,null);var s=Object(C.b)(c.branch);return r.a.createElement(x.Document,null,r.a.createElement(x.Page,{size:"A4",orientation:"portrait"},r.a.createElement(x.Image,{src:"/app/images/"+s.parent+"/"+c.branch+"/cr.jpg",style:se.pageBackground}),r.a.createElement(x.Text,{style:se.hbl},c.hbl+2777),r.a.createElement(x.Text,{style:se.date},c.pickedUpDate||c.pickupDate),r.a.createElement(x.Text,{style:se.time},c.pickedUpTime||c.pickupTime),r.a.createElement(x.Text,{style:se.driver},c.auth||"-"),r.a.createElement(x.Text,{style:se.name},(null===(t=c.name)||void 0===t?void 0:t.substring(0,42))||"-"),r.a.createElement(x.Text,{style:se.name2},null===(a=c.name)||void 0===a?void 0:a.substring(42)),r.a.createElement(x.Text,{style:se.address},(null===(n=c.address)||void 0===n?void 0:n.substring(0,42))||"-"),r.a.createElement(x.Text,{style:se.address2},null===(l=c.address)||void 0===l?void 0:l.substring(42)),r.a.createElement(x.Text,{style:se.row1},"1"),r.a.createElement(x.Text,{style:se.row2},c.hbl),r.a.createElement(x.Text,{style:se.row3},c.cargoMode+"\\"+c.deliveryType),r.a.createElement(x.Text,{style:se.row4},c.paid+" "+c.currency),r.a.createElement(x.Text,{style:se.total},c.paid+" "+c.currency),r.a.createElement(x.Text,{style:se.discount},"-"),r.a.createElement(x.Text,{style:se.net},c.paid+" "+c.currency),r.a.createElement(x.Text,{style:se.amountInWords},Object(w.a)(c.paid)+" only"||!1),r.a.createElement(x.Text,{style:se.remarks},c.remarks||"-"),r.a.createElement(x.Text,{style:se.cash},"cash"),r.a.createElement(x.Text,{style:se.finalTotal},c.paid+" "+c.currency)))},ie=a(28),me=0,de=0,ue=function(e,t,a,n){return{top:e,left:t,fontSize:a,width:n,border:0,position:"absolute"}},pe=function(e){return{top:e,borderBottom:1,width:290,position:"absolute"}},ye=x.StyleSheet.create({barcode:{position:"absolute",top:450,left:20,height:120,width:250},logo:{position:"absolute",top:30,left:20,height:38,width:42},date:ue(me+10,de+10,8),hotline:ue(me+10,de+115,8),website:ue(me+10,de+225,8),packageCountStr:ue(me+28,de+225,7),packageCount:ue(me+35,de+225,24),cargoMode:ue(me+32,de+105,13),deliveryType:ue(me+45,de+105,13),from:ue(me+72,de+10,8),name:ue(me+80,de+10,10),name2:ue(me+90,de+10,10),address:ue(me+102,de+10,10),address2:ue(me+112,de+10,10),contact:ue(me+124,de+10,10),to:ue(me+152,de+10,8),slName:ue(me+160,de+10,10),slName2:ue(me+170,de+10,10),slAddress:ue(me+182,de+10,10),slAddress2:ue(me+192,de+10,10),slContact:ue(me+204,de+10,10),originText:ue(me+232,de+10,8),destinationText:ue(me+232,de+150,8),origin:ue(me+240,de+10,18),destination:ue(me+240,de+150,18),weightText:ue(me+287,de+10,8),volumeText:ue(me+287,de+150,8),weight:ue(me+295,de+10,14),volume:ue(me+295,de+150,14),hblText:ue(me+322,de+10,8),packPid:ue(me+322,de+150,8),packType:ue(me+330,de+150,14),mhblText:ue(me+370,de+10,8),hbl:ue(me+330,de+10,30)}),ge=function(e){var t=e.cargo,a=e.packages;if(!t)return r.a.createElement(x.Document,null);var n=[];a.forEach((function(e){var a;a=document.createElement("canvas"),N()(a,t.hbl+"|"+e.id,{displayValue:!1});var l=a.toDataURL();n.push(l)}));var l=Object(C.b)(t.branch);return r.a.createElement(x.Document,null,a.map((function(e,c){var s,o,i,m,d,u,p,y;return r.a.createElement(x.Page,{size:{width:"102mm",height:"203mm"}},r.a.createElement(x.Text,{style:ye.date},"Date: ",t.pickedUpDate||t.pickupDate," ",t.pickedUpTime||t.pickupTime),r.a.createElement(x.Text,{style:ye.hotline},l.phone),r.a.createElement(x.Text,{style:ye.website},l.website),r.a.createElement(x.Text,{style:pe(0)},"  "),r.a.createElement(x.Image,{src:"/app/images/"+l.parent+"/"+t.branch+"/logo_client.jpg",style:ye.logo}),r.a.createElement(x.Text,{style:ye.packageCountStr},"PACKAGES"),r.a.createElement(x.Text,{style:ye.packageCount},"1/",Object(ie.size)(a)),r.a.createElement(x.Text,{style:ye.cargoMode},t.cargoMode),r.a.createElement(x.Text,{style:ye.deliveryType},t.deliveryType),r.a.createElement(x.Text,{style:pe(50)},"  "),r.a.createElement(x.Text,{style:ye.from},"FROM:"),r.a.createElement(x.Text,{style:ye.name},null===(s=t.name)||void 0===s?void 0:s.substring(0,45)),r.a.createElement(x.Text,{style:ye.name2},null===(o=t.name)||void 0===o?void 0:o.substring(45)),r.a.createElement(x.Text,{style:ye.address},null===(i=t.address)||void 0===i?void 0:i.substring(0,45)),r.a.createElement(x.Text,{style:ye.address2},null===(m=t.address)||void 0===m?void 0:m.substring(45)),r.a.createElement(x.Text,{style:ye.contact},t.contact),r.a.createElement(x.Text,{style:pe(120)},"  "),r.a.createElement(x.Text,{style:ye.to},"TO:"),r.a.createElement(x.Text,{style:ye.slName},null===(d=t.slName)||void 0===d?void 0:d.substring(0,45)),r.a.createElement(x.Text,{style:ye.slName2},null===(u=t.slName)||void 0===u?void 0:u.substring(45)),r.a.createElement(x.Text,{style:ye.slAddress},null===(p=t.slAddress)||void 0===p?void 0:p.substring(0,45)),r.a.createElement(x.Text,{style:ye.slAddress2},null===(y=t.slAddress)||void 0===y?void 0:y.substring(45)),r.a.createElement(x.Text,{style:ye.slContact},t.slContact),r.a.createElement(x.Text,{style:pe(200)},"  "),r.a.createElement(x.Text,{style:ye.originText},"ORIGIN:"),r.a.createElement(x.Text,{style:ye.origin},"DOH"),r.a.createElement(x.Text,{style:ye.destinationText},"DESTINATION:"),r.a.createElement(x.Text,{style:ye.destination},"CMB"),r.a.createElement(x.Text,{style:pe(260)},"  "),r.a.createElement(x.Text,{style:ye.weightText},"WEIGHT:"),r.a.createElement(x.Text,{style:ye.weight},e.weight||"-"),r.a.createElement(x.Text,{style:ye.volumeText},"VOLUME:"),r.a.createElement(x.Text,{style:ye.volume},Object(A.f)(e)),r.a.createElement(x.Text,{style:pe(295)},"  "),r.a.createElement(x.Text,{style:ye.hblText},"HBL:"),r.a.createElement(x.Text,{style:ye.hbl},t.hbl),r.a.createElement(x.Text,{style:ye.packPid},"PID: ",e.id),r.a.createElement(x.Text,{style:ye.packType},e.type),r.a.createElement(x.Text,{style:ye.mhblText},"MHBL:"),r.a.createElement(x.Text,{style:pe(410)},"  "),r.a.createElement(x.Image,{src:n[c],style:ye.barcode}))})))},Ee=["HBL","CR","BAR"];t.default=function(e){var t=Object(h.useSnackbar)().enqueueSnackbar,a=e.match.params.id,l=e.match.params.branch,d=+(e.match.params.tab||1)-1,p=Object(c.a)("print"),f=r.a.useState(Ee[d]),v=Object(n.a)(f,2),k=v[0],j=v[1],O=r.a.useState([]),w=Object(n.a)(O,2),A=w[0],D=w[1],N=r.a.useState(!1),S=Object(n.a)(N,2),I=S[0],P=S[1];return r.a.useEffect((function(){C.f.getBranchDetails(l).then((function(e){b.a.getLoadedCargos(a).then((function(e){var a=Object(ie.orderBy)(e,"cargo.hbl");Object(C.d)().branch===a[0].cargo.branch||Object(C.d)().branch===a[0].cargo.destination?D(a):t("You are not Authorized",{variant:"warning"})})).catch((function(e){t("Could not fetch",{variant:"error"})})).finally((function(e){return P(!1)}))})).catch((function(e){P(!1),t("Could not fetch",{variant:"error"})}))}),[t,a,l]),r.a.createElement(s.a,null,!p&&r.a.createElement(s.a,{container:!0,spacing:1,justify:"space-between",alignContent:"space-between",alignItems:"space-between",style:{padding:20,marginBottom:20,background:T.a.shades.light}},r.a.createElement(m.j,{size:4,title:"Print All HBL",subtitle:"MoveWorlde"}),r.a.createElement(s.a,{container:!0,spacing:2,xs:8,justify:"flex-end",alignContent:"center",alignItems:"center",style:{paddingRight:10,paddingTop:10}},r.a.createElement(E.a,{value:k,onChange:function(e,t){return j(t)},exclusive:!0},r.a.createElement(g.a,{value:Ee[0],style:k===Ee[0]?{background:T.a.shades.green}:{}},r.a.createElement(u.a,null),r.a.createElement(o.a,null,"\xa0 ALL HBL"))),r.a.createElement("div",null,!I&&r.a.createElement(x.PDFDownloadLink,{document:k===Ee[0]?r.a.createElement(ae,{details:A}):k===Ee[1]?r.a.createElement(oe,{cargo:A.cargo}):r.a.createElement(ge,{cargo:A.cargo,packages:A.packages}),fileName:k+"_full_loading_"+l+"_"+a+".pdf"},(function(e){e.blob,e.url;var t=e.loading,a=e.error;return console.log("file error",a),t?"Loading...":r.a.createElement(i.a,{startIcon:r.a.createElement(y.a,null),color:"primary",variant:"contained",size:"large",style:{marginLeft:10}},"Print PDF")}))))),!I&&r.a.createElement(s.a,{style:{padding:30}},r.a.createElement(x.PDFViewer,{width:1100,height:800},k===Ee[0]?r.a.createElement(ae,{details:A}):k===Ee[2]?r.a.createElement(ge,{cargo:A.cargo,packages:A.packages}):r.a.createElement(oe,{cargo:A.cargo}))))}},816:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=["","one","two","three","four","five","six","seven","eight","nine"],l=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"],r=["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];function c(e){return e>=1e3?s(Math.floor(e/1e3))+" thousand "+s(e%1e3):s(e)}function s(e){return e>99?n[Math.floor(e/100)]+" hundred "+o(e%100):o(e)}function o(e){return e<10?n[e]:e>=10&&e<20?r[e-10]:l[Math.floor(e/10)]+" "+n[e%10]}function i(e){return void 0===e?"":0===e?"zero":function e(t){return t>=1e6?e(Math.floor(t/1e6))+" million "+c(t%1e6):c(t)}(e)}},887:function(e,t){},888:function(e,t){},895:function(e,t){},896:function(e,t){},948:function(e,t){},949:function(e,t){},972:function(e,t){},974:function(e,t){},975:function(e,t){},978:function(e,t){},979:function(e,t){},984:function(e,t){},985:function(e,t){},992:function(e,t){},993:function(e,t){},999:function(e,t){}}]);