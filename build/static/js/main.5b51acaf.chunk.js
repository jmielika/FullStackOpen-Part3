(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(14),c=t.n(r),u=t(4),l=t(2),i=t(3),m=t.n(i),s="/api/people",d=function(){return m.a.get(s).then((function(e){return e.data}))},f=function(e){return m.a.post(s,e).then((function(e){return e.data}))},h=function(e,n){return console.log("P\xe4ivitet\xe4\xe4n id ".concat(e,' osoitteessa "').concat(s,"/").concat(e,'"')),m.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},b=function(e){return console.log("Poistetaan id ".concat(e,' osoitteessa "').concat(s,"/").concat(e,'"')),m.a.delete("".concat(s,"/").concat(e)).then((function(e){return e.data}))},p=function(e){var n=e.name,t=e.number,a=e.handleDeletePerson;return o.a.createElement("li",null,n," ",t,o.a.createElement("button",{type:"submit",onClick:a},"delete"))},g=function(e){var n,t,a=e.people,r=e.nameFilter,c=(e.i,e.handleDeletePerson);return o.a.createElement("ul",null,(n=a,t=r,n.filter((function(e){return-1!==e.name.toLowerCase().indexOf(t.toLowerCase())}))).map((function(e){return o.a.createElement(p,{key:e.id,id:e.id,name:e.name,number:e.number,handleDeletePerson:function(){return c(e.id)}})})))},E=function(e){var n=e.onChange,t=e.nameFilter;return o.a.createElement("div",null,"filter shown with",o.a.createElement("input",{type:"text",placeholder:"Search name...",value:t,onChange:n}))},v=function(e){var n=e.onSubmit,t=e.name,a=e.onNameChange,r=e.phoneNumber,c=e.onNumberChange;return o.a.createElement("form",{onSubmit:n},o.a.createElement("div",null,"name: ",o.a.createElement("input",{value:t,onChange:a})),o.a.createElement("div",null,"number: ",o.a.createElement("input",{value:r,onChange:c})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add")))},w=function(e){var n=e.errorMessage;return null===n?null:o.a.createElement("div",{className:n.type},n.message)},C=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),i=Object(l.a)(c,2),m=i[0],s=i[1],p=Object(a.useState)(""),C=Object(l.a)(p,2),O=C[0],j=C[1],S=Object(a.useState)(""),y=Object(l.a)(S,2),L=y[0],k=y[1],N=Object(a.useState)(null),P=Object(l.a)(N,2),D=P[0],F=P[1];Object(a.useEffect)((function(){d().then((function(e){r(e)}))}),[]);return o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(w,{errorMessage:D}),o.a.createElement(E,{onChange:function(e){k(e.target.value)},nameFilter:L}),o.a.createElement("h3",null,"add a new"),o.a.createElement(v,{onSubmit:function(e){e.preventDefault();var n={name:m,number:O},a=t.filter((function(e){return e.name.toLocaleLowerCase()===m.toLocaleLowerCase()}));console.log(a),1===a.length&&(console.log(a[0].id),n=Object(u.a)(Object(u.a)({},n),{},{id:a[0].id})),a.map((function(e){return e.name.toLocaleLowerCase})).includes(m.toLocaleLowerCase,0)?(window.confirm("".concat(m," is already added to phonebook, replace the old number with a new one?"))&&(console.log("".concat(n.name," is added, changing number")),h(n.id,n).then((function(e){r(t.map((function(t){return t.id!==n.id?t:e})))})).catch((function(e){r(t.filter((function(e){return e.id!==n.id}))),F({message:"Information of ".concat(n.name," has already been removed from server"),type:"errorUnsuccessful"}),setTimeout((function(){F(null)}),5e3)})),F({message:"".concat(n.name,"'s number changed to ").concat(n.number),type:"errorSuccessful"}),setTimeout((function(){F(null)}),5e3)),s(""),j("")):(console.log("".concat(n.name," is a new person, adding person to the database")),f(n).then((function(e){r(t.concat(e)),s(""),j("")})),F({message:"".concat(n.name," and their number ").concat(n.number," added to the phonebook"),type:"errorSuccessful"}),setTimeout((function(){F(null)}),5e3))},name:m,onNameChange:function(e){s(e.target.value)},phoneNumber:O,onNumberChange:function(e){j(e.target.value)}}),o.a.createElement("h2",null,"Numbers"),o.a.createElement("ul",null,o.a.createElement(g,{people:t,nameFilter:L,handleDeletePerson:function(e){var n=t.filter((function(n){return n.id===e}))[0];window.confirm("Delete ".concat(n.name,"?"))&&b(e).then((function(){r(t.filter((function(n){return n.id!==e}))),F({message:"".concat(n.name," and their number ").concat(n.number," deleted from the phonebook"),type:"errorSuccessful"}),setTimeout((function(){F(null)}),5e3)}))}})))};t(37);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(C,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5b51acaf.chunk.js.map