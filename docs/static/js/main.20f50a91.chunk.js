(this["webpackJsonpejercicio-poo"]=this["webpackJsonpejercicio-poo"]||[]).push([[0],{16:function(e,t,r){},17:function(e,t,r){"use strict";r.r(t);var o=r(0),n=r(2),a=r(9),c=r.n(a),i=r(1),l=r(5),s=r(4),d=r(10),j=r(8),b=r(7),u=function e(t,r,o,n,a){Object(s.a)(this,e),this.nombre=t,this.apellido=r,this.edad=o,this.id=n,this.profesion=a},p=function(e){Object(j.a)(r,e);var t=Object(b.a)(r);function r(e,o,n,a,c,i){var l;return Object(s.a)(this,r),(l=t.call(this,e,o,n,a,c)).lenguaje=i,l}return r}(u),m=function(e){Object(j.a)(r,e);var t=Object(b.a)(r);function r(e,o,n,a,c,i){var l;return Object(s.a)(this,r),(l=t.call(this,e,o,n,a,c)).tipo=i,l}return r}(u),h=function(){function e(t,r){Object(s.a)(this,e),this.nombre=t,this.id=r,this.empleados=[]}return Object(d.a)(e,[{key:"agregarEmpleados",value:function(e){var t=e.nombre,r=e.apellido,o=e.edad,n=e.id,a=e.profesion,c=e.lenguaje,i=e.tipo;if("Programador"===a){var l=new p(t,r,o,n,a,c);this.empleados.push(l)}else{var s=new m(t,r,o,n,a,i);this.empleados.push(s)}}},{key:"obtenerEmpleados",value:function(){console.log(this.empleados)}},{key:"obtenerEmpleadosPorId",value:function(e){var t=[];return t.push(this.empleados.find((function(t){return t.id===e}))),t}},{key:"obtenerPromedioEdadEmpleados",value:function(){for(var e=0,t=0;t<this.empleados.length;t++)e+=Number(this.empleados[t].edad);return e/this.empleados.length}}]),e}(),O=r(3),f=r.n(O),x=new h("Daniela Vazquez SA.",1),g=function(){var e={nombre:"",apellido:"",edad:"",id:"",profesion:"Click para seleccionar",lenguaje:"Click para seleccionar",tipo:"Click para seleccionar"},t=Object(n.useState)(e),r=Object(l.a)(t,2),a=r[0],c=r[1],s=Object(n.useState)(""),d=Object(l.a)(s,2),j=d[0],b=d[1],u=Object(n.useState)([]),p=Object(l.a)(u,2),m=p[0],h=p[1],O=Object(n.useState)(!1),g=Object(l.a)(O,2),v=g[0],y=g[1],C=Object(n.useRef)(null);return console.log(!!m.nombre),Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row justify-content-center",children:[Object(o.jsx)("div",{className:"col",children:Object(o.jsxs)("form",{ref:C,className:"form-container",onSubmit:function(t){t.preventDefault(),function(e){return 0===e.nombre.trim().length?(f.a.fire({icon:"error",title:"Error",text:"El nombre es requerido"}),!1):0===e.apellido.trim().length?(f.a.fire({icon:"error",title:"Error",text:"El apellido es requerido"}),!1):0===e.edad.length?(console.log(typeof e.edad),f.a.fire({icon:"error",title:"Error",text:"La edad es requerida"}),!1):0===e.id.length?(f.a.fire({icon:"error",title:"Error",text:"El id es requerido"}),!1):"Click para seleccionar"===e.profesion?(f.a.fire({icon:"error",title:"Error",text:"La profesi\xf3n es requerida"}),!1):"Programador"===e.profesion&&"Click para seleccionar"===e.lenguaje?(f.a.fire({icon:"error",title:"Error",text:"El lenguaje es requerido"}),!1):"Dise\xf1ador"!==e.profesion||"Click para seleccionar"!==e.tipo||(f.a.fire({icon:"error",title:"Error",text:"El tipo de dise\xf1ador es requerido"}),!1)}(a)&&(x.agregarEmpleados(a),c(e),C.current.reset())},children:[Object(o.jsx)("h1",{className:"nombreEmpresa text-center",children:"Daniela Vazquez S.A."}),Object(o.jsx)("hr",{}),Object(o.jsx)("label",{children:"Nombre"}),Object(o.jsx)("input",{type:"text",name:"nombre",className:"form-control my-3",autoComplete:"off",onChange:function(e){return c(Object(i.a)(Object(i.a)({},a),{},{nombre:e.target.value}))}}),Object(o.jsx)("label",{children:"Apellido"}),Object(o.jsx)("input",{type:"text",name:"apellido",className:"form-control my-3",autoComplete:"off",onChange:function(e){return c(Object(i.a)(Object(i.a)({},a),{},{apellido:e.target.value}))}}),Object(o.jsx)("label",{children:"Edad"}),Object(o.jsx)("input",{type:"text",name:"edad",className:"form-control my-3",autoComplete:"off",onChange:function(e){return c(Object(i.a)(Object(i.a)({},a),{},{edad:e.target.value}))}}),Object(o.jsx)("label",{children:"Id"}),Object(o.jsx)("input",{type:"text",name:"id",className:"form-control my-3",autoComplete:"off",onChange:function(e){return c(Object(i.a)(Object(i.a)({},a),{},{id:e.target.value}))}}),Object(o.jsx)("label",{children:"Profesi\xf3n"}),Object(o.jsxs)("select",{className:"form-control my-3",onChange:function(e){return c(Object(i.a)(Object(i.a)({},a),{},{profesion:e.target.value}))},children:[Object(o.jsx)("option",{children:"Click para seleccionar"}),Object(o.jsx)("option",{children:"Programador"}),Object(o.jsx)("option",{children:"Dise\xf1ador"})]}),"Programador"===a.profesion&&Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Lenguaje de programaci\xf3n"}),Object(o.jsxs)("select",{className:"form-control my-3",onChange:function(e){return c(Object(i.a)(Object(i.a)({},a),{},{lenguaje:e.target.value}))},children:[Object(o.jsx)("option",{children:"Click para seleccionar"}),Object(o.jsx)("option",{children:"PHP"}),Object(o.jsx)("option",{children:"NET"}),Object(o.jsx)("option",{children:"Python"})]})]}),"Dise\xf1ador"===a.profesion&&Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Tipo de dise\xf1ador"}),Object(o.jsxs)("select",{className:"form-control my-3",onChange:function(e){return c(Object(i.a)(Object(i.a)({},a),{},{tipo:e.target.value}))},children:[Object(o.jsx)("option",{children:"Click para seleccionar"}),Object(o.jsx)("option",{children:"Gr\xe1fico"}),Object(o.jsx)("option",{children:"Web"})]})]}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary btn-block my-3",autoComplete:"off",children:"Agregar empleado"})]})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsxs)("div",{className:"form-container",children:[Object(o.jsx)("h3",{className:"text-center",children:"Lista de empleados"}),x.empleados.map((function(e,t){return Object(o.jsxs)("ul",{children:[Object(o.jsx)("hr",{}),Object(o.jsx)("h5",{children:Object(o.jsx)("b",{children:"".concat(e.nombre," ").concat(e.apellido)})}),Object(o.jsxs)("li",{children:[e.edad," a\xf1os"]}),Object(o.jsxs)("li",{children:["id: ",e.id," "]}),Object(o.jsxs)("li",{children:["".concat(e.profesion," ")," ",e.lenguaje,e.tipo]})]},t)})),Object(o.jsx)("hr",{}),Object(o.jsx)("label",{children:"Filtrar empleado por id:"}),Object(o.jsx)("input",{onChange:function(e){b(e.target.value),y(!1)},type:"text",className:"form-control my-3",autoComplete:"off"}),Object(o.jsx)("button",{onClick:function(){h(x.obtenerEmpleadosPorId(j)),y(!0)},className:"btn btn-primary btn-block mb-3",autoComplete:"off",children:"Buscar"}),Object(o.jsx)("hr",{}),void 0!==m[0]?Object(o.jsxs)("ul",{children:[Object(o.jsx)("h5",{children:Object(o.jsx)("b",{children:"".concat(m[0].nombre," ").concat(m[0].apellido)})}),Object(o.jsxs)("li",{children:[m[0].edad," a\xf1os"]}),Object(o.jsxs)("li",{children:["id: ",m[0].id," "]}),Object(o.jsxs)("li",{children:["".concat(m[0].profesion," ")," ",m[0].lenguaje,m[0].tipo]})]}):""!==j&&v&&Object(o.jsx)("div",{className:"alert alert-danger",children:"No se encontr\xf3 un empleado que coincida con el id"}),Object(o.jsx)("hr",{}),Object(o.jsxs)("label",{className:"d-block",children:["Promedio de edad: ",x.empleados.length>0&&x.obtenerPromedioEdadEmpleados()]})]})})]})})};r(16);c.a.render(Object(o.jsx)(g,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.20f50a91.chunk.js.map