import{k as b,b as n,c as x,L as z,M as O,N as D,e as a,n as B,O as I,_ as P,P as j,i as U,x as M,j as W,r as $,d as i,w as h,t as C,u as m,Q as E,R as A,p as N,g as k,l as w,S as J,T,m as G,h as K,a as Z,U as q,f as X,F as Q,V as Y,z as ee,I as te}from"./index-9a3d44ca.js";import{_ as le}from"./Section-e7f6a7fa.js";import{b as ae}from"./SLASection-60be6e93.js";import{a as se}from"./Link-b1fdcf99.js";import{D as F,a as oe}from"./DragVerticalIcon-21aa16a4.js";import{u as ie}from"./Dropdown-d1bc143c.js";const ne={__name:"Resizer",props:{defaultWidth:{type:Number,default:352},minWidth:{type:Number,default:16*16},maxWidth:{type:Number,default:30*16},side:{type:String,default:"left"},parent:{type:Object,default:null}},setup(f){const o=f,p=b(!1),t=b(o.defaultWidth);function y(){document.addEventListener("mousemove",g),document.addEventListener("mouseup",()=>{document.body.classList.remove("select-none"),document.body.classList.remove("cursor-col-resize"),document.querySelectorAll(".select-text1").forEach(s=>{s.classList.remove("select-text1"),s.classList.add("select-text")}),localStorage.setItem("sidebarWidth",t.value),p.value=!1,document.removeEventListener("mousemove",g)})}function g(s){p.value=!0,document.body.classList.add("select-none"),document.body.classList.add("cursor-col-resize"),document.querySelectorAll(".select-text").forEach(e=>{e.classList.remove("select-text"),e.classList.add("select-text1")}),t.value=o.side=="left"?s.clientX:window.innerWidth-s.clientX;let v=o.parent?d():0;t.value=t.value-v;let r=[o.defaultWidth-10,o.defaultWidth+10];t.value>r[0]&&t.value<r[1]&&(t.value=o.defaultWidth),t.value<o.minWidth&&(t.value=o.minWidth),t.value>o.maxWidth&&(t.value=o.maxWidth)}function d(){if(!o.parent)return 0;const s=o.parent.getBoundingClientRect();return window.innerWidth-s[o.side]}return(s,v)=>(n(),x("div",{class:"relative",style:I({width:`${t.value}px`})},[z(s.$slots,"default",O(D({sidebarResizing:p.value,sidebarWidth:t.value}))),a("div",{class:B(["absolute left-0 z-10 h-full w-1 cursor-col-resize bg-gray-300 opacity-0 transition-opacity hover:opacity-100",{"opacity-100":p.value}]),onMousedown:y},null,34)],4))}},de={},re={width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ue=j('<g filter="url(#filter0_b_525_5376)"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.50545 11.0115H11.5132C13.1775 11.0115 14.5268 9.66229 14.5268 7.99794C14.5268 6.3336 13.1775 4.98438 11.5132 4.98438L9.50545 4.98438V3.98438H11.5132C13.7298 3.98438 15.5268 5.78131 15.5268 7.99794C15.5268 10.2146 13.7298 12.0115 11.5132 12.0115H9.50545V11.0115ZM6.49422 4.98465H4.48647C2.82212 4.98465 1.4729 6.33387 1.4729 7.99822C1.4729 9.66256 2.82212 11.0118 4.48647 11.0118H6.49422V12.0118H4.48647C2.26984 12.0118 0.4729 10.2148 0.4729 7.99822C0.4729 5.78159 2.26983 3.98465 4.48647 3.98465H6.49422V4.98465ZM10.0079 8.49808H10.5079V7.49808H10.0079H5.99239H5.49239V8.49808H5.99239H10.0079Z" fill="currentColor"></path></g><defs><filter id="filter0_b_525_5376" x="-4" y="-4" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_525_5376"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_525_5376" result="shape"></feBlend></filter></defs>',2),ce=[ue];function fe(f,o){return n(),x("svg",re,ce)}const Ie=P(de,[["render",fe]]),me={class:"border-b"},pe={class:"flex items-center justify-between p-2"},ve=["onClick"],_e={key:0},he={key:1,class:"flex gap-2 items-center"},ye={class:"p-4 pt-0 pb-2"},ge={class:"px-1.5 py-1 border rounded text-base text-gray-800 flex items-center justify-between gap-2"},be={class:"flex items-center gap-2"},xe={class:"flex flex-col gap-1"},ke={class:"text-gray-500 text-sm"},Ce={key:1,class:"flex justify-center items-center border rounded border-dashed p-3"},we={class:"text-sm text-gray-500"},Se={class:"p-2"},$e={__name:"SidePanelLayoutBuilder",props:{sections:Object,doctype:String},setup(f){const o=f,p=["Table","Geolocation","Attach","Attach Image","HTML","Signature"],t=U(()=>({doctype:o.doctype,restricted_fieldtypes:p,as_array:!0})),y=M({url:"crm.api.doc.get_fields_meta",params:t.value,cache:["fieldsMeta",o.doctype],auto:!0});function g(d,s){s&&d.fields.push(s)}return W(()=>o.doctype,()=>y.fetch(t.value),{immediate:!0}),(d,s)=>{const v=$("FeatherIcon"),r=$("Button");return n(),x("div",null,[i(m(F),{list:f.sections,"item-key":"label",class:"flex flex-col"},{item:h(({element:e})=>[a("div",me,[a("div",pe,[a("div",{class:"flex h-7 max-w-fit cursor-pointer items-center gap-2 pl-2 pr-3 text-base font-semibold leading-5",onClick:l=>e.opened=!e.opened},[i(v,{name:"chevron-right",class:B(["h-4 text-gray-900 transition-all duration-300 ease-in-out",{"rotate-90":e.opened}])},null,8,["class"]),e.editingLabel?(n(),x("div",he,[i(m(E),{modelValue:e.label,"onUpdate:modelValue":l=>e.label=l,onKeydown:A(l=>e.editingLabel=!1,["enter"]),onBlur:l=>e.editingLabel=!1,onClick:s[0]||(s[0]=N(()=>{},["stop"]))},null,8,["modelValue","onUpdate:modelValue","onKeydown","onBlur"]),e.editingLabel?(n(),k(r,{key:0,icon:"check",variant:"ghost",onClick:N(l=>e.editingLabel=!1,["stop"])},null,8,["onClick"])):w("",!0)])):(n(),x("div",_e,C(d.__(e.label)||d.__("Untitled")),1))],8,ve),a("div",null,[e.editingLabel?w("",!0):(n(),k(r,{key:0,icon:"edit",variant:"ghost",onClick:l=>e.editingLabel=!0},null,8,["onClick"])),e.editable!==!1?(n(),k(r,{key:1,icon:"x",variant:"ghost",onClick:l=>f.sections.splice(f.sections.indexOf(e),1)},null,8,["onClick"])):w("",!0)])]),J(a("div",ye,[i(m(F),{list:e.fields,group:"fields","item-key":"label",class:"flex flex-col gap-1",handle:".cursor-grab"},{item:h(({element:l})=>[a("div",ge,[a("div",be,[i(oe,{class:"h-3.5 cursor-grab"}),a("div",null,C(l.label),1)]),a("div",null,[i(r,{variant:"ghost",icon:"x",onClick:L=>e.fields.splice(e.fields.indexOf(l),1)},null,8,["onClick"])])])]),_:2},1032,["list"]),m(y).data&&e.editable!==!1?(n(),k(se,{key:0,value:"",options:m(y).data,onChange:l=>g(e,l)},{target:h(({togglePopover:l})=>[i(r,{class:"w-full mt-2",variant:"outline",onClick:L=>l(),label:d.__("Add Field")},{prefix:h(()=>[i(v,{name:"plus",class:"h-4"})]),_:2},1032,["onClick","label"])]),"item-label":h(({option:l})=>[a("div",xe,[a("div",null,C(l.label),1),a("div",ke,C(`${l.fieldname} - ${l.fieldtype}`),1)])]),_:2},1032,["options","onChange"])):(n(),x("div",Ce,[a("div",we,C(d.__("This section is not editable")),1)]))],512),[[T,e.opened]])])]),_:1},8,["list"]),a("div",Se,[i(r,{class:"w-full",variant:"outline",label:d.__("Add Section"),onClick:s[1]||(s[1]=e=>f.sections.push({label:d.__("New Section"),opened:!0,fields:[]}))},{prefix:h(()=>[i(v,{name:"plus",class:"h-4"})]),_:1},8,["label"])])])}}},Le={class:"flex-1 flex flex-col justify-between gap-2 p-8"},Ve={class:"flex flex-col gap-2"},Be={class:"flex gap-2 text-xl font-semibold leading-none h-5 mb-4"},Ne={class:"flex flex-row-reverse gap-2"},Fe={class:"flex flex-1 flex-col justify-between overflow-hidden"},Me={class:"flex flex-col overflow-y-auto"},Pe={__name:"SidePanelModal",props:G({doctype:{type:String,default:"CRM Lead"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(f){const o=f,p=K(f,"modelValue"),t=b(o.doctype),y=b(null),g=b(!1),d=b(!1),s=b(!1),v=b({});function r(){return{doctype:t.value,type:"Side Panel"}}const e=M({url:"crm.fcrm.doctype.crm_fields_layout.crm_fields_layout.get_fields_layout",cache:["sidebar-sections",t.value],params:r(),onSuccess(u){e.originalData=JSON.parse(JSON.stringify(u))}});W(()=>e==null?void 0:e.data,()=>{d.value=JSON.stringify(e==null?void 0:e.data)!==JSON.stringify(e==null?void 0:e.originalData)},{deep:!0}),Z(()=>ie(l,100)());function l(){ee(()=>{e.params=r(),e.reload()})}function L(){let u=JSON.parse(JSON.stringify(e.data));u.forEach(c=>{c.fields&&(c.fields=c.fields.map(S=>S.fieldname||S.name))}),g.value=!0,te("crm.fcrm.doctype.crm_fields_layout.crm_fields_layout.save_fields_layout",{doctype:t.value,type:"Side Panel",layout:JSON.stringify(u)}).then(()=>{g.value=!1,l()})}return(u,c)=>{const S=$("FormControl"),V=$("Button");return n(),k(m(Y),{modelValue:p.value,"onUpdate:modelValue":c[3]||(c[3]=_=>p.value=_),options:{size:"3xl"}},{body:h(()=>[a("div",{ref_key:"parentRef",ref:y,class:"flex h-[calc(100vh_-_8rem)]"},[a("div",Le,[a("div",Ve,[a("h2",Be,[a("div",null,C(u.__("Edit Fields Layout")),1),d.value?(n(),k(m(q),{key:0,label:u.__("Not Saved"),variant:"subtle",theme:"orange"},null,8,["label"])):w("",!0)]),i(S,{type:"select",modelValue:t.value,"onUpdate:modelValue":c[0]||(c[0]=_=>t.value=_),label:u.__("DocType"),options:["CRM Lead","CRM Deal"],onChange:l},null,8,["modelValue","label"])]),a("div",Ne,[i(V,{loading:g.value,label:u.__("Save"),variant:"solid",onClick:L},null,8,["loading","label"]),i(V,{label:u.__("Reset"),onClick:l},null,8,["label"]),i(V,{label:s.value?u.__("Hide Preview"):u.__("Show Preview"),onClick:c[1]||(c[1]=_=>s.value=!s.value)},null,8,["label"])])]),m(e).data?(n(),k(ne,{key:0,class:"flex flex-col justify-between border-l",parent:y.value,side:"right"},{default:h(()=>[a("div",Fe,[a("div",Me,[s.value?(n(!0),x(Q,{key:1},X(m(e).data,(_,H)=>(n(),x("div",{key:_.label,class:B(["flex flex-col p-3",{"border-b":H!==m(e).data.length-1}])},[i(le,{"is-opened":_.opened,label:_.label},{default:h(()=>[i(ae,{fields:_.fields,modelValue:v.value,"onUpdate:modelValue":c[2]||(c[2]=R=>v.value=R)},null,8,["fields","modelValue"])]),_:2},1032,["is-opened","label"])],2))),128)):(n(),k($e,{key:0,sections:m(e).data,doctype:t.value},null,8,["sections","doctype"]))])])]),_:1},8,["parent"])):w("",!0)],512)]),_:1},8,["modelValue"])}}};export{Ie as L,ne as _,Pe as a};
//# sourceMappingURL=SidePanelModal-7abc63d3.js.map
