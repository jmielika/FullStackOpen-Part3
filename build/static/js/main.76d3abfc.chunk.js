(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(14),o=t.n(u),c=t(4),l=t(2),i=t(3),m=t.n(i),s="/api/people",f=function(){return m.a.get(s).then((function(e){return e.data}))},d=function(e){return m.a.post(s,e).then((function(e){return e.data}))},h=function(e,n){return m.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){return m.a.delete("".concat(s,"/").concat(e)).then((function(e){return e.data}))},b=function(e){var n=e.name,t=e.number,a=e.handleDeletePerson;return r.a.createElement("li",null,n," ",t,r.a.createElement("button",{type:"submit",onClick:a},"delete"))},g=function(e){var n,t,a=e.people,u=e.nameFilter,o=(e.i,e.handleDeletePerson);return r.a.createElement("ul",null,(n=a,t=u,n.filter((function(e){return-1!==e.name.toLowerCase().indexOf(t.toLowerCase())}))).map((function(e){return r.a.createElement(b,{key:e.id,id:e.id,name:e.name,number:e.number,handleDeletePerson:function(){return o(e.id)}})})))},E=function(e){var n=e.onChange,t=e.nameFilter;return r.a.createElement("div",null,"filter shown with",r.a.createElement("input",{type:"text",placeholder:"Search name...",value:t,onChange:n}))},v=function(e){var n=e.onSubmit,t=e.name,a=e.onNameChange,u=e.phoneNumber,o=e.onNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:u,onChange:o})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},w=function(e){var n=e.errorMessage;return null===n?null:r.a.createElement("div",{className:n.type},n.message)},y=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),m=i[0],s=i[1],b=Object(a.useState)(""),y=Object(l.a)(b,2),C=y[0],O=y[1],j=Object(a.useState)(""),S=Object(l.a)(j,2),N=S[0],k=S[1],D=Object(a.useState)(null),L=Object(l.a)(D,2),P=L[0],F=L[1];Object(a.useEffect)((function(){f().then((function(e){u(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(w,{errorMessage:P}),r.a.createElement(E,{onChange:function(e){k(e.target.value)},nameFilter:N}),r.a.createElement("h3",null,"add a new"),r.a.createElement(v,{onSubmit:function(e){e.preventDefault();var n,a={name:""+m.trim().replace(/  +/g," "),number:""+C.trim().replace(/  +/g," ")},r=t.filter((function(e){return e.name.toLocaleLowerCase().trim().replace(/  +/g," ")===a.name.toLocaleLowerCase()}));r.length>0?(a=Object(c.a)(Object(c.a)({},a),{},{id:r[0].id}),window.confirm("".concat(a.name," has ").concat(r.length," entries in phonebook, want replace every entry of old number with a new one?"))&&(r.forEach((function(e){e.id!==a.id&&p(e.id).then((function(){u(t.filter((function(n){return e.id!==n.id})))}))})),h((n=a).id,n).then((function(e){u(t.map((function(t){return t.id!==n.id?t:e})))})).catch((function(e){e.response.data.error?F({message:e.response.data.error,type:"errorUnsuccessful"}):F({message:"No data of ".concat(n.name," on the server, deleting person"),type:"errorUnsuccessful"}),setTimeout((function(){F(null)}),5e3)})),F({message:"".concat(n.name,"'s number changed to ").concat(n.number),type:"errorSuccessful"}),setTimeout((function(){F(null)}),5e3),s(""),O(""),s(""),O(""))):d(a).then((function(e){u(t.concat(e)),s(""),O(""),F({message:"".concat(a.name," and their number ").concat(a.number," added to the phonebook"),type:"errorSuccessful"})})).catch((function(e){F({message:e.response.data.error,type:"errorUnsuccessful"})})),setTimeout((function(){F(null)}),5e3)},name:m,onNameChange:function(e){s(e.target.value)},phoneNumber:C,onNumberChange:function(e){O(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement("ul",null,r.a.createElement(g,{people:t,nameFilter:N,handleDeletePerson:function(e){var n=t.filter((function(n){return n.id===e}))[0];window.confirm("Delete ".concat(n.name,"?"))&&p(e).then((function(){u(t.filter((function(n){return n.id!==e}))),F({message:"".concat(n.name," and their number ").concat(n.number," deleted from the phonebook"),type:"errorSuccessful"}),setTimeout((function(){F(null)}),5e3)}))}})))};t(37);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.76d3abfc.chunk.js.map