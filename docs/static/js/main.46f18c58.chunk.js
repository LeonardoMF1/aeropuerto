(this.webpackJsonpaeropuerto=this.webpackJsonpaeropuerto||[]).push([[0],{58:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(27),l=c.n(s),o=c(30),r=c(3),i=c(2),j=(c(7),c(0)),b=function(e){var t=e.texto,c=e.id,n=e.value,a=e.checked,s=void 0!==a&&a,l=e.onChange;return Object(j.jsxs)("div",{className:"form-check form-check-inline",children:[Object(j.jsx)("input",{type:"radio",className:"form-check-input",name:"inputTipo",id:c,value:n,checked:s,onChange:function(e){l(e.target.value)}}),Object(j.jsxs)("label",{htmlFor:c,className:"form-check-label",children:[t," "]})]})},u=function(e){var t=e.col,c=e.htmlfor,n=e.texto,a=e.type,s=e.id,l=e.onChange;return Object(j.jsxs)("div",{className:t,children:[Object(j.jsxs)("label",{htmlFor:c,className:"form-label",children:[n,": "]}),Object(j.jsx)("input",{type:a,name:s,className:"form-control p-2",id:s,onChange:function(e){l(e.target.value)}})]})},d=c(17),O=c.n(d),x=c(9),h=c(28),m=c(29),p=c.n(m),f="http://localhost:3001",v=function(){var e=Object(h.a)(O.a.mark((function e(t){var c,n,a,s,l=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=l.length>1&&void 0!==l[1]?l[1]:{},n=l.length>2&&void 0!==l[2]?l[2]:"GET",a="".concat(f,"/").concat(t),console.log("URL: ",a),s={method:n,url:a,headers:g()},e.t0=n,e.next="GET"===e.t0?8:"POST"===e.t0?10:12;break;case 8:return c&&(s=Object(x.a)(Object(x.a)({},s),{},{params:c})),e.abrupt("break",13);case 10:return c&&(s=Object(x.a)(Object(x.a)({},s),{},{data:c})),e.abrupt("break",13);case 12:case 13:return e.prev=13,e.next=16,p()(s);case 16:return e.abrupt("return",e.sent);case 19:return e.prev=19,e.t1=e.catch(13),console.log(e.t1.response),e.abrupt("return",e.t1.response);case 23:case"end":return e.stop()}}),e,null,[[13,19]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){return{"content-type":"application/json; charset=utf-8"}},N=v,S=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(),l=Object(i.a)(s,2),o=l[0],r=l[1],d=Object(n.useState)(),O=Object(i.a)(d,2),x=O[0],h=O[1],m=Object(n.useState)(""),p=Object(i.a)(m,2),f=p[0],v=p[1],g=Object(n.useState)(""),S=Object(i.a)(g,2),F=S[0],C=S[1],y=Object(n.useState)(""),E=Object(i.a)(y,2),V=E[0],T=E[1],A=Object(n.useState)(""),k=Object(i.a)(A,2),w=k[0],P=k[1],L=Object(n.useState)(""),D=Object(i.a)(L,2),I=D[0],B=D[1],M=Object(n.useState)(""),R=Object(i.a)(M,2),U=R[0],_=R[1],H=Object(n.useState)(""),G=Object(i.a)(H,2),J=G[0],$=G[1],q=Object(n.useState)(),z=Object(i.a)(q,2),K=z[0],Q=z[1],W=Object(n.useState)(""),X=Object(i.a)(W,2),Y=X[0],Z=X[1],ee=Object(n.useState)(),te=Object(i.a)(ee,2),ce=te[0],ne=te[1],ae=Object(n.useState)(""),se=Object(i.a)(ae,2),le=se[0],oe=se[1],re=Object(n.useState)(""),ie=Object(i.a)(re,2),je=ie[0],be=ie[1],ue=Object(n.useState)("1"),de=Object(i.a)(ue,2),Oe=de[0],xe=de[1],he=function(){var e="C"+(parseInt(x[0][1].slice(1,3))+1);console.log(e),v(e),e="A"+(parseInt(x[0][1].slice(1,3))+1),C(e)};Object(n.useEffect)((function(){x||N("compra").then((function(e){h(e.data)}))}),[x]),Object(n.useEffect)((function(){c||N("nacionalidad").then((function(e){a(e.data)}))}),[c]);return console.log(o),c&&x?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:"h2",children:"Reservar un vuelo"})," ",Object(j.jsx)("hr",{}),Object(j.jsxs)("section",{className:"container",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col-md-4",children:[Object(j.jsx)("label",{htmlFor:"inputCompra",className:"form-label",children:" Compra: "}),Object(j.jsx)("input",{type:"text",name:"inputCompra",id:"inputCompra",className:"form-control p2",disabled:!0,defaultValue:f})]}),Object(j.jsxs)("div",{className:"col-md-4",children:[Object(j.jsx)("label",{htmlFor:"inputBoleto",className:"form-label",children:" Boleto: "}),Object(j.jsx)("input",{type:"text",name:"inputBoleto",id:"inputBoleto",className:"form-control p2",disabled:!0,defaultValue:F})]})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)(u,{col:"col-md-4",htmlFor:"inputName",texto:"Nombre(s)",type:"text",id:"inputName",defaultValue:I,onChange:function(e){B(e),he()}}),Object(j.jsx)(u,{col:"col-md-4",htmlFor:"inputLastName",texto:"Apellido Paterno",type:"text",id:"inputLastName",defaultValue:U,onChange:function(e){_(e),he()}}),Object(j.jsx)(u,{col:"col-md-4",htmlFor:"inputLastName_2",texto:"Apellido Materno",type:"text",id:"inputLastName_2",defaultValue:J,onChange:function(e){$(e),he()}})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"input col-md-6 align-self-end",children:[Object(j.jsx)("label",{htmlFor:"selectNacionalidad",className:"mb-2",children:"Nacionalidad: "}),Object(j.jsxs)("select",{className:"form-select point",id:"selectNacionalidad",defaultValue:je,onChange:function(e){be(e.target.value),he()},children:[Object(j.jsx)("option",{children:"Elija una nacionalidad"}),c.map((function(e){return Object(j.jsx)("option",{defaultValue:e[0],children:e[1]},e[0])}))]})]}),Object(j.jsx)(u,{col:"col-md-3",htmlFor:"inputTelefono",texto:"Telefono",type:"tel",id:"inputTelefono",defaultValue:K,onChange:function(e){Q(e),he()}}),Object(j.jsx)(u,{col:"col-md-3",htmlFor:"inputEdad",texto:"Edad",type:"number",id:"inputEdad",defaultValue:ce,onChange:function(e){ne(e),he()}})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)(u,{col:"col-md-6",htmlFor:"inputCorreo",texto:"Correo",type:"email",id:"inputCorreo",defaultValue:Y,onChange:function(e){Z(e),he()}}),Object(j.jsxs)("div",{className:"col-md-6 align-self-center",children:[Object(j.jsx)("p",{className:"fs-6 mt-4",children:"Tipo de pasajero:"}),Object(j.jsx)(b,{texto:"Menor o estudiante",id:"radioMenor",value:"1",checked:"1"===Oe,onChange:function(e){xe(e)}}),Object(j.jsx)(b,{texto:"Adulto",id:"radioAdulto",value:"2",checked:"2"===Oe,onChange:function(e){xe(e)}}),Object(j.jsx)(b,{texto:"Tercera edad o discapacitado",id:"radioTercera",value:"3",checked:"3"===Oe,onChange:function(e){xe(e)}})]})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)(u,{col:"col-md-3",htmlfor:"inputPasaporte",texto:"Pasaporte",type:"text",id:"inputPasaporte",defaultValue:le,onChange:function(e){oe(e),he()}}),Object(j.jsx)(u,{col:"col-md-3",htmlfor:"inputVuelo",texto:"Numero de vuelo",type:"text",id:"inputVuelo",defaultValue:w,onChange:function(e){P(e),he()}}),Object(j.jsx)(u,{col:"col-md-3",htmlfor:"inputAsiento",texto:"Asiento",type:"text",id:"inputAsiento",defaultValue:V,onChange:function(e){T(e),he()}})]}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"col-md-1",id:"btnSubmit",children:Object(j.jsx)("button",{type:"submit",className:"btn btn-success mb-5",onClick:function(e){N("reserva",{codigo:f,boleto:F,asiento:V,vuelo:parseInt(w),nombre:I,apellidoP:U,apellidoM:J,telefono:K,correo:Y,edad:ce,pasaporte:le,nacionalidad:je,tipo:parseInt(Oe)},"POST").then((function(e){r(e.data)}))},children:"Comprar"})})]})]}):null},F=c(14),C=c(12),y=function(e){var t=e.icono,c=e.texto,n=e.context;return Object(j.jsx)("li",{className:"nav-item rounded-pill",children:Object(j.jsxs)("a",{className:"nav-link-active ",href:n,children:[Object(j.jsx)(C.a,{icon:t,style:{color:"white"}})," ",c]})})},E=function(e){var t=e.texto,c=e.context;return Object(j.jsx)("a",{className:"dropdown-item",href:c,children:t})},V=function(){return Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light ",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("img",{className:"img-1 img-fluid rounded float-start",src:"https://pbs.twimg.com/profile_images/1423918272/esimetwitter_400x400.png",alt:"Logo ESIME",width:"120",height:"96"}),Object(j.jsxs)("ul",{className:"nav justify-content-center fs-5",children:[Object(j.jsx)(y,{icono:F.b,texto:"RESERVAS",context:"/"}),Object(j.jsx)(y,{icono:F.a,texto:"VUELOS",context:"vuelos"}),Object(j.jsxs)("li",{className:"nav-item rounded-pill dropdown ",children:[Object(j.jsx)(C.a,{icon:F.c,style:{color:"white"}}),Object(j.jsx)("button",{type:"button",className:" dropdown-toggle",id:"navbarDropdownMenuLink","data-bs-toggle":"dropdown","aria-expanded":"false",children:" ADMINISTRADOR"}),Object(j.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink",children:[Object(j.jsx)(E,{texto:"DETALLE DE VENTA",context:"detalle-compra"}),Object(j.jsx)(E,{texto:"VUELOS TOTALES",context:"vuelos-totales"}),Object(j.jsx)(E,{texto:"VUELOS POR PAIS",context:"vuelos-pais"}),Object(j.jsx)(E,{texto:"AEROPUERTOS",context:"aeropuertos"}),Object(j.jsx)(E,{texto:"VENTAS",context:"ventas"})]})]})]})]})})},T=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(V,{}),Object(j.jsx)(S,{})]})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,59)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,l=t.getTTFB;c(e),n(e),a(e),s(e),l(e)}))},k=function(e){var t=e.data[0].map((function(e){return e})),c=function(e){return e.substring(8,10)+":"+e.substring(7,5)+":"+e.substring(2,4)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("hr",{className:"style1"}),Object(j.jsx)("h3",{children:Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["Numero de vuelo: ",t[0]]}),Object(j.jsxs)("li",{children:["Fecha: ",t[1].slice(0,10)]}),Object(j.jsxs)("li",{children:["Hora de abordaje: ",c(t[2].slice(0,10))]}),Object(j.jsxs)("li",{children:["Hora de llegada: ",c(t[3].slice(0,10))]}),Object(j.jsxs)("li",{children:["Destino: ",t[4]]}),Object(j.jsxs)("li",{children:["Origen: ",t[5]]}),Object(j.jsxs)("li",{children:["Matricula: ",t[6]]}),Object(j.jsxs)("li",{children:["Aeropuerto de llegada: ",t[7]]})]})})]})},w=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),l=Object(i.a)(s,2),o=l[0],r=l[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:"h2",children:"Buscar un vuelo"})," ",Object(j.jsx)("hr",{}),Object(j.jsxs)("section",{className:"text-center",children:[Object(j.jsxs)("label",{className:"form-label mb-4",htmlFor:"numVuelo",children:[" Numero de vuelo:",Object(j.jsx)("input",{type:"text",name:"numVuelo",id:"numVuelo",className:"form-control p-2 mt-4",value:o,onChange:function(e){return r(e.target.value)}})]}),Object(j.jsx)("div",{id:"btnSubmit",children:Object(j.jsx)("button",{type:"submit",className:"btn btn-success mb-5",onClick:function(e){N("vuelos",{vuelo:o}).then((function(e){200!==e.status?alert(e.data.message):a(e.data)})),e.preventDefault()},children:"Buscar"})}),c?Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(k,{data:Object.values(c)})}):null]})]})},P=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(V,{}),Object(j.jsx)(w,{})]})},L=function(e){var t=e.data[0].map((function(e){return e}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("hr",{className:"style1"}),Object(j.jsx)("h3",{children:Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["Clave de compra: ",t[0]]}),Object(j.jsxs)("li",{children:["Boleto: ",t[1]]}),Object(j.jsxs)("li",{children:["Asiento: ",t[2]]}),Object(j.jsxs)("li",{children:["Precio: $",t[3]]}),Object(j.jsxs)("li",{children:["Numero de vuelo: ",t[4]]}),Object(j.jsxs)("li",{children:["Nombre: ",t[5]]}),Object(j.jsxs)("li",{children:["Apellido paterno: ",t[6]]}),Object(j.jsxs)("li",{children:["Apellido materno: ",t[7]]}),Object(j.jsxs)("li",{children:["Telefono: ",t[8]]}),Object(j.jsxs)("li",{children:["Correo: ",t[9]]}),Object(j.jsxs)("li",{children:["Edad: ",t[10]]}),Object(j.jsxs)("li",{children:["Pasaporte: ",t[11]]}),Object(j.jsxs)("li",{children:["Nacionalidad: ",t[12]]}),Object(j.jsxs)("li",{children:["Tipo de pasajero: ",t[13]]})]})})]})},D=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),l=Object(i.a)(s,2),o=l[0],r=l[1];return console.log(c),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:"h2",children:"Detalle de una venta:"})," ",Object(j.jsx)("hr",{}),Object(j.jsxs)("section",{className:"text-center",children:[Object(j.jsxs)("label",{className:"form-label mb-4",htmlFor:"boleto",children:[" Asiento:",Object(j.jsx)("input",{type:"text",name:"boleto",id:"boleto",className:"form-control p-2 mt-4",value:o,onChange:function(e){return r(e.target.value)}})]}),Object(j.jsx)("div",{id:"btnSubmit",children:Object(j.jsx)("button",{type:"submit",className:"btn btn-success mb-5",onClick:function(e){N("detalle-compra",{boleto:o}).then((function(e){200!==e.status?alert(e.data.message):a(e.data)})),e.preventDefault()},children:"Buscar"})}),c?Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(L,{data:Object.values(c)})}):null]})]})},I=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(V,{}),Object(j.jsx)(D,{})]})},B=function(e){var t=e.data.map((function(e){return e})),c=function(e){return e.substring(8,10)+":"+e.substring(7,5)+":"+e.substring(2,4)};return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("h3",{className:" text-center",children:Object(j.jsx)("ul",{children:t.map((function(e){return Object(j.jsxs)("li",{children:[" ",Object(j.jsx)("b",{children:" Numero de vuelo: "})," ",e[0]," ",Object(j.jsx)("b",{children:"Fecha:"})," ",e[1].slice(0,10)," ",Object(j.jsx)("br",{})," ",Object(j.jsx)("b",{children:"Hora de abordaje:"})," ",c(e[2])," --\x3e ",Object(j.jsx)("b",{children:"Hora de llegada:"})," ",c(e[3])," ",Object(j.jsx)("br",{})," ",Object(j.jsx)("b",{children:" Destino:"})," ",e[4]," ",Object(j.jsx)("b",{children:" Origen:"})," ",e[5]," ",Object(j.jsx)("b",{children:" Matricula:"})," ",e[6]]},e.toString())}))})})})},M=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){c||N("total-vuelos").then((function(e){200!==e.status?alert(e.data.message):a(e.data)}))})),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(V,{}),Object(j.jsxs)("h2",{children:["Informacion sobre los vuelos ",Object(j.jsx)("br",{})," "]})," ",Object(j.jsx)("hr",{}),c?Object(j.jsx)(B,{data:c}):null]})},R=function(e){var t=e.data.map((function(e){return e}));return console.log(t),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("h4",{className:" text-center",children:Object(j.jsx)("ul",{children:t.map((function(e){return Object(j.jsxs)("li",{children:["Numero: ",e[0],Object(j.jsx)("br",{})," Nombre: ",e[1],", Pais: ",e[2],",   Estado: ",e[3],Object(j.jsx)("br",{})," Avenida: ",e[4],", Codigo postal: ",e[5],", Telefono: ",e[6]," "]},e.toString())}))})})})},U=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){c||N("aeropuertos").then((function(e){200!==e.status?alert(e.data.message):a(e.data)}))})),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(V,{}),Object(j.jsx)("h2",{children:"Informacion sobre los aeropuertos"}),Object(j.jsx)("hr",{}),c?Object(j.jsx)(R,{data:c}):null]})},_=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),l=Object(i.a)(s,2),o=l[0],r=l[1],b=Object(n.useState)(""),u=Object(i.a)(b,2),d=u[0],O=u[1];return console.log(o),console.log(d),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:"h2",children:"Ventas por fecha:"})," ",Object(j.jsx)("hr",{}),Object(j.jsxs)("section",{className:"text-center row section_Ventas container",children:[Object(j.jsxs)("label",{className:"form-label mb-4 col-md-4",htmlFor:"inicial",children:[" Fecha inicial:",Object(j.jsx)("input",{type:"date",name:"inicial",id:"inicial",className:"form-control p-2 mt-4",defaultValue:o,onChange:function(e){return r(e.target.value)}})]}),Object(j.jsxs)("label",{className:"form-label mb-4 col-md-4",htmlFor:"final",children:[" Fecha final:",Object(j.jsx)("input",{type:"date",name:"final",id:"final",className:"form-control p-2 mt-4",defaultValue:d,onChange:function(e){return O(e.target.value)}})]}),Object(j.jsx)("div",{id:"btnSubmit",children:Object(j.jsx)("button",{type:"submit",className:"btn btn-success mb-5",onClick:function(e){N("dates",{inicial:o,final:d}).then((function(e){200!==e.status?alert(e.data.message):a(e.data)})),e.preventDefault()},children:"Buscar"})}),c?Object(j.jsxs)("h2",{children:["Ganancia: $",c[0]," "]}):null]})]})},H=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(V,{}),Object(j.jsx)(_,{})]})},G=function(e){var t=e.data.map((function(e){return e}));return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("h3",{className:" text-center",children:Object(j.jsx)("ul",{children:t.map((function(e){return Object(j.jsxs)("li",{children:["Pais numero ",e[0]," : ",Object(j.jsx)("b",{children:e[1]})," -> ",e[2]]},e.toString())}))})})})},J=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){c||N("vuelos-pais").then((function(e){200!==e.status?alert(e.data.message):a(e.data)}))})),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(V,{}),Object(j.jsxs)("h2",{children:["Informacion sobre los vuelos por pais",Object(j.jsx)("br",{})," (Pais - Total de vuelos)"]})," ",Object(j.jsx)("hr",{}),c?Object(j.jsx)(G,{data:c}):null]})};l.a.render(Object(j.jsxs)(a.a.StrictMode,{children:[Object(j.jsx)(o.a,{children:Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{path:"/",element:Object(j.jsx)(T,{})}),Object(j.jsx)(r.a,{path:"/vuelos",element:Object(j.jsx)(P,{})}),Object(j.jsx)(r.a,{path:"/detalle-compra",element:Object(j.jsx)(I,{})}),Object(j.jsx)(r.a,{path:"/vuelos-pais",element:Object(j.jsx)(J,{})}),Object(j.jsx)(r.a,{path:"/vuelos-totales",element:Object(j.jsx)(M,{})}),Object(j.jsx)(r.a,{path:"/aeropuertos",element:Object(j.jsx)(U,{})}),Object(j.jsx)(r.a,{path:"/ventas",element:Object(j.jsx)(H,{})})]})}),","]}),document.getElementById("root")),A()},7:function(e,t,c){}},[[58,1,2]]]);
//# sourceMappingURL=main.46f18c58.chunk.js.map