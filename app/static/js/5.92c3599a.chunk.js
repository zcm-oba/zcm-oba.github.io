(this["webpackJsonpmove-world"]=this["webpackJsonpmove-world"]||[]).push([[5],{1001:function(e,t){},1502:function(e,t,a){"use strict";a.r(t);var n=a(6),l=a(0),r=a.n(l),c=a(662),o=a(693),s=a(61),i=a(137),m=a(4),u=a(669),d=a.n(u),y=a(1055),p=a.n(y),g=a(476),E=a.n(g),b=a(1498),T=a(1503),h=a(39),x=a(20),f=a(24),v=a(770),k=a(23),w=a(5),O=a(10),j=a(73),A=a.n(j),C=a(815),D=a(33),N=a(834),B=a.n(N),I=a(9),S=a(256),P=70,z=110,M=5,q=10,L=182,R=72,U=6,F=118,H=353,W=6,V=375,Q=25,G=52,_=200,J=305,X=355,K=405,Y=455,Z=15,$=10,ee=function(e,t,a,n){return{top:e,left:t,fontSize:a,width:n||220,border:0,margin:0,padding:0}},te=function(e,t,a,n){return{top:e,left:t,fontSize:a,width:n,border:0,position:"absolute"}},ae=function(e){var t;return t={},Object(O.a)(t,"pack"+e+"no",te(V+Z*e,Q,$,20)),Object(O.a)(t,"pack"+e+"type",te(V+Z*e,G,$,130)),Object(O.a)(t,"pack"+e+"size",te(V+Z*e,_,$-1,80)),Object(O.a)(t,"pack"+e+"quantity",te(V+Z*e,J,$,30)),Object(O.a)(t,"pack"+e+"weight",te(V+Z*e,X,$,30)),Object(O.a)(t,"pack"+e+"volume",te(V+Z*e,K,$,30)),Object(O.a)(t,"pack"+e+"remarks",te(V+Z*e,Y,$,120)),t},ne=v.StyleSheet.create(Object(w.a)(Object(w.a)(Object(w.a)(Object(w.a)(Object(w.a)(Object(w.a)(Object(w.a)(Object(w.a)(Object(w.a)(Object(w.a)(Object(w.a)(Object(w.a)(Object(w.a)(Object(w.a)(Object(w.a)(Object(w.a)(Object(w.a)({pageBackground:{position:"absolute",display:"block",height:854910/1042,width:590},barcode:{position:"absolute",top:152,left:5,height:55,width:250},qrcode:{position:"absolute",top:135,left:185,height:75,width:80},date:ee(P+0*M,z+0,q),time:ee(P+1*M,z+0,q),cargoType:ee(P+2*M,z+0,q),destination:ee(P+3*M,z+0,q),hbl:ee(P+4*M,z+0,q),name:ee(L+0*U,R+0,8),name2:ee(L+1*U,R+0,8),address:ee(L+2*U,R+0,8),address2:ee(L+3*U,R+0,8),qid:ee(L+4*U+5,R+0,9),contact:ee(L+5*U+6,R+0,9),ppNo:ee(L+6*U+7,R+0,9),slName:ee(F+0*W,H+0,8),slName2:ee(F+1*W,H+0,8),slAddress:ee(F+2*W,H+0,8),slAddress2:ee(F+3*W,H+0,8),slQid:ee(F+4*W+2,H+0,9),slContact:ee(F+5*W+3,H+0,9),slPpNo:ee(F+6*W+4,H+0,9)},ae(0)),ae(1)),ae(2)),ae(3)),ae(4)),ae(5)),ae(6)),ae(7)),ae(8)),ae(9)),ae(10)),ae(11)),ae(12)),ae(13)),ae(14)),ae(15)),{},{totalQuantity:te(620,105,10),totalVolume:te(637,105,10),totalWeight:te(655,105,10),totalAmount1:te(620,305,10),totalAmount2:te(637,305,10),totalAmount3:te(655,305,10),totalAmount4:te(620,495,10),totalAmount5:te(637,495,10),totalAmount6:te(655,495,10),amountInWords:te(675,80,9),note:te(800,20,10)})),le=function(e){var t,a,l,c,o,s,i,m,u,d=e.cargo,y=e.packages,p=Object(k.a)(y.slice(0,16)),g=r.a.useState(null),E=Object(n.a)(g,2),b=E[0],T=E[1];if(r.a.useEffect((function(){d.name||setTimeout((function(){var e=document.getElementById("qrcode-mw");e&&T(e.toDataURL())}),1500)}),[d.name]),!d)return r.a.createElement(v.Document,null);u=document.createElement("canvas"),B()(u,d.hbl,{displayValue:!1});var h=u.toDataURL(),x=Object(I.b)(d.branch),f=Object(S.b)(x.printPriceBreakdown,d);return r.a.createElement(v.Document,null,r.a.createElement(v.Page,{size:"A4",orientation:"portrait"},r.a.createElement(v.Image,{src:"/app/images/"+x.parent+"/"+d.branch+"/hbl.jpg",style:ne.pageBackground}),x.barcode&&r.a.createElement(v.Image,{src:h,style:ne.barcode}),x.qrcode&&b&&r.a.createElement(v.Image,{src:b,style:ne.qrcode}),r.a.createElement(v.Text,{style:ne.date},d.pickedUpDate||d.pickupDate),r.a.createElement(v.Text,{style:ne.time},d.pickedUpTime||d.pickupTime),r.a.createElement(v.Text,{style:ne.cargoType},d.cargoMode,"/",d.deliveryType),r.a.createElement(v.Text,{style:ne.destination},d.warehouseLocation||"-"),r.a.createElement(v.Text,{style:ne.hbl},d.hbl),r.a.createElement(v.Text,{style:ne.name},(null===(t=d.name)||void 0===t?void 0:t.substring(0,47))||"-"),r.a.createElement(v.Text,{style:ne.name2},(null===(a=d.name)||void 0===a?void 0:a.substring(47))||"  "),r.a.createElement(v.Text,{style:ne.address},(null===(l=d.address)||void 0===l?void 0:l.substring(0,47))||"-"),r.a.createElement(v.Text,{style:ne.address2},(null===(c=d.address)||void 0===c?void 0:c.substring(47))||"  "),r.a.createElement(v.Text,{style:ne.qid},d.qid||"-"),r.a.createElement(v.Text,{style:ne.contact},d.contact||"-"),r.a.createElement(v.Text,{style:ne.ppNo},d.ppNo||"-"),r.a.createElement(v.Text,{style:ne.slName},(null===(o=d.slName)||void 0===o?void 0:o.substring(0,47))||"-"),r.a.createElement(v.Text,{style:ne.slName2},(null===(s=d.slName)||void 0===s?void 0:s.substring(47))||"  "),r.a.createElement(v.Text,{style:ne.slAddress},(null===(i=d.slAddress)||void 0===i?void 0:i.substring(0,47))||"-"),r.a.createElement(v.Text,{style:ne.slAddress2},(null===(m=d.slAddress)||void 0===m?void 0:m.substring(47))||"  "),r.a.createElement(v.Text,{style:ne.slQid},"  "),r.a.createElement(v.Text,{style:ne.slContact},d.slContact||"-"),r.a.createElement(v.Text,{style:ne.slPpNo},d.slPpNo||"-"),r.a.createElement(v.Text,{style:ne.totalQuantity},A()(y,(function(e,t){return e+t.quantity}),0)||"-"),r.a.createElement(v.Text,{style:ne.totalVolume},Object(D.h)(y)||"-"),r.a.createElement(v.Text,{style:ne.totalWeight},Object(D.i)(y)||"-"),x.printPriceBreakdown&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v.Text,{style:ne.totalAmount1},f.frieghtCharges+" "+d.currency||"-"),r.a.createElement(v.Text,{style:ne.totalAmount2},f.hblCharge+" "+d.currency||"-"),r.a.createElement(v.Text,{style:ne.totalAmount3},f.hblVat+" "+d.currency||"-"),r.a.createElement(v.Text,{style:ne.totalAmount4},f.destiCharges+" "+d.currency||"-"),r.a.createElement(v.Text,{style:ne.totalAmount5},f.grandTotal+" "+d.currency||"-"),r.a.createElement(v.Text,{style:ne.totalAmount6},f.paid+" "+d.currency||"-")),!x.printPriceBreakdown&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v.Text,{style:ne.totalAmount1},d.paid+" "+d.currency||"-"),r.a.createElement(v.Text,{style:ne.totalAmount2},d.paid+" "+d.currency||"-")),r.a.createElement(v.Text,{style:ne.amountInWords},(Object(C.a)(d.paid)+" only"||!1).toUpperCase()),r.a.createElement(v.Text,{style:ne.note},(x.showBalanceOnRemarks&&d.amount-d.paid>.1?"Destination Freight Collection: "+Object(D.b)(d.amount-d.paid)+" "+d.currency+". ":"")+(d.note||"")),p.map((function(e,t){return r.a.createElement(v.Text,{style:ne["pack"+t+"no"]},t+1)})),p.map((function(e,t){return r.a.createElement(v.Text,{style:ne["pack"+t+"type"]},e.type)})),p.map((function(e,t){return r.a.createElement(v.Text,{style:ne["pack"+t+"size"]},e.length+" X "+e.breadth+" X "+e.height)})),p.map((function(e,t){return r.a.createElement(v.Text,{style:ne["pack"+t+"quantity"]},e.quantity)})),p.map((function(e,t){return r.a.createElement(v.Text,{style:ne["pack"+t+"weight"]},e.weight)})),p.map((function(e,t){return r.a.createElement(v.Text,{style:ne["pack"+t+"volume"]},Object(D.f)(e))})),p.map((function(e,t){return r.a.createElement(v.Text,{style:ne["pack"+t+"remarks"]},e.remarks)}))))},re=125,ce=20,oe=10,se=function(e,t,a,n){return{top:e,left:t,fontSize:a,width:n,border:0,position:"absolute"}},ie=v.StyleSheet.create({pageBackground:{position:"absolute",display:"block",height:854910/1042,width:590},hbl:se(re+0,ce+355,oe),date:se(re+12,ce+355,oe),time:se(re+24,ce+355,oe),driver:se(re+36,ce+355,oe),name:se(re+12,ce+27,oe),name2:se(re+24,ce+27,oe),address:se(re+40,ce+27,oe),address2:se(re+52,ce+27,oe),row1:se(re+130,ce+30,oe),row2:se(re+130,ce+155,oe),row3:se(re+130,ce+290,oe),row4:se(re+130,ce+455,oe),total:se(re+403,ce+455,oe-1),discount:se(re+413,ce+455,oe-1),net:se(re+426,ce+455,oe-1),amountInWords:se(re+442,ce+110,oe-1),remarks:se(re+480,ce+40,oe-1),cash:se(re+532,ce+220,oe-1),finalTotal:se(re+573,ce+220,oe-1)}),me=function(e){var t,a,n,l,c=e.cargo;if(!c)return r.a.createElement(v.Document,null);var o=Object(I.b)(c.branch);return r.a.createElement(v.Document,null,r.a.createElement(v.Page,{size:"A4",orientation:"portrait"},r.a.createElement(v.Image,{src:"/app/images/"+o.parent+"/"+c.branch+"/cr.jpg",style:ie.pageBackground}),r.a.createElement(v.Text,{style:ie.hbl},c.hbl+2777),r.a.createElement(v.Text,{style:ie.date},c.pickedUpDate||c.pickupDate),r.a.createElement(v.Text,{style:ie.time},c.pickedUpTime||c.pickupTime),r.a.createElement(v.Text,{style:ie.driver},c.auth||"-"),r.a.createElement(v.Text,{style:ie.name},(null===(t=c.name)||void 0===t?void 0:t.substring(0,42))||"-"),r.a.createElement(v.Text,{style:ie.name2},null===(a=c.name)||void 0===a?void 0:a.substring(42)),r.a.createElement(v.Text,{style:ie.address},(null===(n=c.address)||void 0===n?void 0:n.substring(0,42))||"-"),r.a.createElement(v.Text,{style:ie.address2},null===(l=c.address)||void 0===l?void 0:l.substring(42)),r.a.createElement(v.Text,{style:ie.row1},"1"),r.a.createElement(v.Text,{style:ie.row2},c.hbl),r.a.createElement(v.Text,{style:ie.row3},c.cargoMode+"\\"+c.deliveryType),r.a.createElement(v.Text,{style:ie.row4},c.paid+" "+c.currency),r.a.createElement(v.Text,{style:ie.total},c.paid+" "+c.currency),r.a.createElement(v.Text,{style:ie.discount},"-"),r.a.createElement(v.Text,{style:ie.net},c.paid+" "+c.currency),r.a.createElement(v.Text,{style:ie.amountInWords},Object(C.a)(c.paid)+" only"||!1),r.a.createElement(v.Text,{style:ie.remarks},c.remarks||"-"),r.a.createElement(v.Text,{style:ie.cash},"cash"),r.a.createElement(v.Text,{style:ie.finalTotal},c.paid+" "+c.currency)))},ue=a(26),de=0,ye=0,pe=function(e,t,a,n){return{top:e,left:t,fontSize:a,width:n,border:0,position:"absolute"}},ge=function(e){return{top:e,borderBottom:1,width:290,position:"absolute"}},Ee=v.StyleSheet.create({barcode:{position:"absolute",top:450,left:20,height:120,width:250},logo:{position:"absolute",top:30,left:20,height:38,width:42},date:pe(de+10,ye+10,8),hotline:pe(de+10,ye+115,8),website:pe(de+10,ye+225,8),packageCountStr:pe(de+28,ye+225,7),packageCount:pe(de+35,ye+225,24),cargoMode:pe(de+32,ye+105,13),deliveryType:pe(de+45,ye+105,13),from:pe(de+72,ye+10,8),name:pe(de+80,ye+10,10),name2:pe(de+90,ye+10,10),address:pe(de+102,ye+10,10),address2:pe(de+112,ye+10,10),contact:pe(de+124,ye+10,10),to:pe(de+152,ye+10,8),slName:pe(de+160,ye+10,10),slName2:pe(de+170,ye+10,10),slAddress:pe(de+182,ye+10,10),slAddress2:pe(de+192,ye+10,10),slContact:pe(de+204,ye+10,10),originText:pe(de+232,ye+10,8),destinationText:pe(de+232,ye+150,8),origin:pe(de+240,ye+10,18),destination:pe(de+240,ye+150,18),weightText:pe(de+287,ye+10,8),volumeText:pe(de+287,ye+150,8),weight:pe(de+295,ye+10,14),volume:pe(de+295,ye+150,14),hblText:pe(de+322,ye+10,8),packPid:pe(de+322,ye+150,8),packType:pe(de+330,ye+150,14),mhblText:pe(de+370,ye+10,8),hbl:pe(de+330,ye+10,30)}),be=function(e){var t=e.cargo,a=e.packages;if(!t)return r.a.createElement(v.Document,null);var n=[];a.forEach((function(e){var a;a=document.createElement("canvas"),B()(a,t.hbl+"|"+e.id,{displayValue:!1});var l=a.toDataURL();n.push(l)}));var l=Object(I.b)(t.branch);return r.a.createElement(v.Document,null,a.map((function(e,c){var o,s,i,m,u,d,y,p;return r.a.createElement(v.Page,{size:{width:"102mm",height:"203mm"}},r.a.createElement(v.Text,{style:Ee.date},"Date: ",t.pickedUpDate||t.pickupDate," ",t.pickedUpTime||t.pickupTime),r.a.createElement(v.Text,{style:Ee.hotline},l.phone),r.a.createElement(v.Text,{style:Ee.website},l.website),r.a.createElement(v.Text,{style:ge(0)},"  "),r.a.createElement(v.Image,{src:"/app/images/"+l.parent+"/"+t.branch+"/logo_client.jpg",style:Ee.logo}),r.a.createElement(v.Text,{style:Ee.packageCountStr},"PACKAGES"),r.a.createElement(v.Text,{style:Ee.packageCount},c+1,"/",Object(ue.size)(a)),r.a.createElement(v.Text,{style:Ee.cargoMode},t.cargoMode),r.a.createElement(v.Text,{style:Ee.deliveryType},t.deliveryType),r.a.createElement(v.Text,{style:ge(50)},"  "),r.a.createElement(v.Text,{style:Ee.from},"FROM:"),r.a.createElement(v.Text,{style:Ee.name},null===(o=t.name)||void 0===o?void 0:o.substring(0,45)),r.a.createElement(v.Text,{style:Ee.name2},null===(s=t.name)||void 0===s?void 0:s.substring(45)),r.a.createElement(v.Text,{style:Ee.address},null===(i=t.address)||void 0===i?void 0:i.substring(0,45)),r.a.createElement(v.Text,{style:Ee.address2},null===(m=t.address)||void 0===m?void 0:m.substring(45)),r.a.createElement(v.Text,{style:Ee.contact},t.contact),r.a.createElement(v.Text,{style:ge(120)},"  "),r.a.createElement(v.Text,{style:Ee.to},"TO:"),r.a.createElement(v.Text,{style:Ee.slName},null===(u=t.slName)||void 0===u?void 0:u.substring(0,45)),r.a.createElement(v.Text,{style:Ee.slName2},null===(d=t.slName)||void 0===d?void 0:d.substring(45)),r.a.createElement(v.Text,{style:Ee.slAddress},null===(y=t.slAddress)||void 0===y?void 0:y.substring(0,45)),r.a.createElement(v.Text,{style:Ee.slAddress2},null===(p=t.slAddress)||void 0===p?void 0:p.substring(45)),r.a.createElement(v.Text,{style:Ee.slContact},t.slContact),r.a.createElement(v.Text,{style:ge(200)},"  "),r.a.createElement(v.Text,{style:Ee.originText},"ORIGIN:"),r.a.createElement(v.Text,{style:Ee.origin},"DOH"),r.a.createElement(v.Text,{style:Ee.destinationText},"DESTINATION:"),r.a.createElement(v.Text,{style:Ee.destination},"CMB"),r.a.createElement(v.Text,{style:ge(260)},"  "),r.a.createElement(v.Text,{style:Ee.weightText},"WEIGHT:"),r.a.createElement(v.Text,{style:Ee.weight},e.weight||"-"),r.a.createElement(v.Text,{style:Ee.volumeText},"VOLUME:"),r.a.createElement(v.Text,{style:Ee.volume},Object(D.f)(e)),r.a.createElement(v.Text,{style:ge(295)},"  "),r.a.createElement(v.Text,{style:Ee.hblText},"HBL:"),r.a.createElement(v.Text,{style:Ee.hbl},t.hbl),r.a.createElement(v.Text,{style:Ee.packPid},"PID: ",e.id),r.a.createElement(v.Text,{style:Ee.packType},e.type),r.a.createElement(v.Text,{style:Ee.mhblText},"MHBL:"),r.a.createElement(v.Text,{style:ge(410)},"  "),r.a.createElement(v.Image,{src:n[c],style:Ee.barcode}))})))},Te=a(1499),he=a(1491),xe=a.n(he),fe=["HBL","CR","BAR"];t.default=function(e){var t,a,l,u,y=Object(f.useSnackbar)().enqueueSnackbar,g=e.match.params.id,k=e.match.params.branch,w=+(e.match.params.tab||1)-1,O=Object(c.a)("print"),j=r.a.useState(fe[w]),A=Object(n.a)(j,2),C=A[0],D=A[1],N=r.a.useState({cargo:{},packages:[]}),B=Object(n.a)(N,2),S=B[0],P=B[1],z=r.a.useState(!1),M=Object(n.a)(z,2),q=M[0],L=M[1];return r.a.useEffect((function(){I.f.getBranchDetails(k).then((function(e){h.a.getCargo(g).then((function(e){Object(I.d)().branch===e.cargo.branch||Object(I.d)().branch===e.cargo.destination?P(e):y("You are not Authorized",{variant:"warning"})})).catch((function(e){y("Could not fetch",{variant:"error"})})).finally((function(e){return L(!1)}))})).catch((function(e){L(!1),y("Could not fetch",{variant:"error"})}))}),[y,g,k]),r.a.createElement(o.a,null,!O&&r.a.createElement(o.a,{container:!0,spacing:1,justify:"space-between",alignContent:"space-between",alignItems:"space-between",style:{padding:20,marginBottom:20,background:x.a.shades.light}},r.a.createElement(m.j,{size:4,title:"Print HBL/CR",subtitle:"MoveWorlde"}),r.a.createElement("div",{style:{display:"none"}},(null===(t=S.cargo)||void 0===t?void 0:t.name)&&r.a.createElement(xe.a,{id:"qrcode-mw",value:(null===(a=S.cargo)||void 0===a?void 0:a.name)+"\n"+(null===(l=S.cargo)||void 0===l?void 0:l.contact)+"\n"+(null===(u=S.cargo)||void 0===u?void 0:u.qid),size:200,level:"H",includeMargin:!1})),r.a.createElement(o.a,{container:!0,spacing:2,xs:8,justify:"flex-end",alignContent:"center",alignItems:"center",style:{paddingRight:10,paddingTop:10}},r.a.createElement(T.a,{value:C,onChange:function(e,t){return D(t)},exclusive:!0},r.a.createElement(b.a,{value:fe[0],style:C===fe[0]?{background:x.a.shades.green}:{}},r.a.createElement(p.a,null),r.a.createElement(s.a,null,"\xa0 HBL Form")),r.a.createElement(b.a,{value:fe[1],style:C===fe[1]?{background:x.a.shades.green}:{}},r.a.createElement(d.a,null),r.a.createElement(s.a,null,"\xa0 Cash Reciept")),r.a.createElement(b.a,{value:fe[2],style:C===fe[2]?{background:x.a.shades.green}:{}},r.a.createElement(Te.a,null),r.a.createElement(s.a,null,"\xa0 Barcode"))),r.a.createElement("div",null,!q&&S.cargo&&r.a.createElement(v.PDFDownloadLink,{document:C===fe[0]?r.a.createElement(le,{cargo:S.cargo,packages:S.packages}):C===fe[1]?r.a.createElement(me,{cargo:S.cargo}):r.a.createElement(be,{cargo:S.cargo,packages:S.packages}),fileName:C+"_"+S.cargo.hbl+"_"+S.cargo.branch+".pdf"},(function(e){e.blob,e.url;var t=e.loading,a=e.error;return console.log("file error",a),t?"Loading...":r.a.createElement(i.a,{startIcon:r.a.createElement(E.a,null),color:"primary",variant:"contained",size:"large",style:{marginLeft:10}},"Print PDF")}))))),!q&&S.cargo&&r.a.createElement(o.a,{style:{padding:30}},r.a.createElement(v.PDFViewer,{width:1100,height:800},C===fe[0]?r.a.createElement(le,{cargo:S.cargo,packages:S.packages}):C===fe[2]?r.a.createElement(be,{cargo:S.cargo,packages:S.packages}):r.a.createElement(me,{cargo:S.cargo}))))}},815:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=["","one","two","three","four","five","six","seven","eight","nine"],l=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"],r=["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];function c(e){return e>=1e3?o(Math.floor(e/1e3))+" thousand "+o(e%1e3):o(e)}function o(e){return e>99?n[Math.floor(e/100)]+" hundred "+s(e%100):s(e)}function s(e){return e<10?n[e]:e>=10&&e<20?r[e-10]:l[Math.floor(e/10)]+" "+n[e%10]}function i(e){return void 0===e?"":0===e?"zero":function e(t){return t>=1e6?e(Math.floor(t/1e6))+" million "+c(t%1e6):c(t)}(e)}},886:function(e,t){},887:function(e,t){},894:function(e,t){},895:function(e,t){},947:function(e,t){},948:function(e,t){},971:function(e,t){},973:function(e,t){},974:function(e,t){},977:function(e,t){},978:function(e,t){},983:function(e,t){},984:function(e,t){},991:function(e,t){},992:function(e,t){},998:function(e,t){}}]);