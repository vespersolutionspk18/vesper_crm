import{F as N}from"./Fields-bccd83f4.js";import{i as O,x as D,j as M,r as h,b as i,c as $,d as n,w as u,e as o,n as w,t as g,R as F,p as E,g as v,l as L,u as d,m as R,h as I,k as S,a as J,U,V as z,z as A,I as Q}from"./index-9a3d44ca.js";import{a as T}from"./Link-b1fdcf99.js";import{D as B,a as j}from"./DragVerticalIcon-21aa16a4.js";import{D as H,u as K}from"./Dropdown-d1bc143c.js";const P={class:"flex items-center justify-between pb-2"},q={class:"flex h-7 max-w-fit cursor-pointer items-center gap-2 text-base font-semibold leading-5"},G={key:1,class:"flex gap-2 items-center"},W={class:"px-1.5 py-1 border rounded text-base text-gray-800 flex items-center justify-between gap-2"},X={class:"flex items-center gap-2"},Y={class:"flex flex-col gap-1"},Z={class:"text-gray-500 text-sm"},ee={class:"py-2 border-t"},le={__name:"QuickEntryLayoutBuilder",props:{sections:Object,doctype:String},setup(f){const c=f,k=["Table","Geolocation","Attach","Attach Image","HTML","Signature"],r=O(()=>({doctype:c.doctype,restricted_fieldtypes:k,as_array:!0})),m=D({url:"crm.api.doc.get_fields_meta",params:r.value,cache:["fieldsMeta",c.doctype],auto:!0});function x(e,a){a&&e.fields.push(a)}function _(e){return[{label:"Edit",icon:"edit",onClick:()=>e.editingLabel=!0,condition:()=>e.editable!==!1},{label:e.hideLabel?"Show Label":"Hide Label",icon:e.hideLabel?"eye":"eye-off",onClick:()=>e.hideLabel=!e.hideLabel},{label:e.hideBorder?"Show Border":"Hide Border",icon:"minus",onClick:()=>e.hideBorder=!e.hideBorder},{label:"Add Column",icon:"columns",onClick:()=>e.columns=e.columns?e.columns+1:4,condition:()=>!e.columns||e.columns<4},{label:"Remove Column",icon:"columns",onClick:()=>e.columns=e.columns?e.columns-1:2,condition:()=>!e.columns||e.columns>1},{label:"Remove Section",icon:"trash-2",onClick:()=>c.sections.splice(c.sections.indexOf(e),1),condition:()=>e.editable!==!1}]}return M(()=>c.doctype,()=>m.fetch(r.value),{immediate:!0}),(e,a)=>{const y=h("Input"),p=h("Button"),s=h("FeatherIcon");return i(),$("div",null,[n(d(B),{list:f.sections,"item-key":"label",class:"flex flex-col"},{item:u(({element:l})=>[o("div",{class:w(["py-2 first:pt-0",l.hideBorder?"":"border-t first:border-t-0"])},[o("div",P,[o("div",q,[l.editingLabel?(i(),$("div",G,[n(y,{modelValue:l.label,"onUpdate:modelValue":t=>l.label=t,onKeydown:F(t=>l.editingLabel=!1,["enter"]),onBlur:t=>l.editingLabel=!1,onClick:a[0]||(a[0]=E(()=>{},["stop"]))},null,8,["modelValue","onUpdate:modelValue","onKeydown","onBlur"]),l.editingLabel?(i(),v(p,{key:0,icon:"check",variant:"ghost",onClick:t=>l.editingLabel=!1},null,8,["onClick"])):L("",!0)])):(i(),$("div",{key:0,class:w(l.hideLabel?"text-gray-400":"")},g(e.__(l.label)||e.__("Untitled")),3))]),n(d(H),{options:_(l)},{default:u(()=>[n(p,{variant:"ghost"},{default:u(()=>[n(s,{name:"more-horizontal",class:"h-4"})]),_:1})]),_:2},1032,["options"])]),o("div",null,[n(d(B),{list:l.fields,group:"fields","item-key":"label",class:w(["grid gap-2",l.columns?"grid-cols-"+l.columns:"grid-cols-3"]),handle:".cursor-grab"},{item:u(({element:t})=>[o("div",W,[o("div",X,[n(j,{class:"h-3.5 cursor-grab"}),o("div",null,g(t.label),1)]),o("div",null,[n(p,{variant:"ghost",icon:"x",onClick:b=>l.fields.splice(l.fields.indexOf(t),1)},null,8,["onClick"])])])]),_:2},1032,["list","class"]),d(m).data?(i(),v(T,{key:0,value:"",options:d(m).data,onChange:t=>x(l,t)},{target:u(({togglePopover:t})=>[o("div",{class:w(["grid gap-2 w-full",l.columns?"grid-cols-"+l.columns:"grid-cols-3"])},[n(p,{class:"mt-2 w-full !h-[38px] !border-gray-200",variant:"outline",onClick:b=>t(),label:e.__("Add Field")},{prefix:u(()=>[n(s,{name:"plus",class:"h-4"})]),_:2},1032,["onClick","label"])],2)]),"item-label":u(({option:t})=>[o("div",Y,[o("div",null,g(t.label),1),o("div",Z,g(`${t.fieldname} - ${t.fieldtype}`),1)])]),_:2},1032,["options","onChange"])):L("",!0)])],2)]),_:1},8,["list"]),o("div",ee,[n(p,{class:"w-full !h-[38px] !border-gray-200",variant:"outline",label:e.__("Add Section"),onClick:a[1]||(a[1]=l=>f.sections.push({label:e.__("New Section"),opened:!0,fields:[]}))},{prefix:u(()=>[n(s,{name:"plus",class:"h-4"})]),_:1},8,["label"])])])}}},ae={class:"flex flex-col overflow-hidden h-[calc(100vh_-_8rem)]"},te={class:"flex flex-col gap-2 p-8 pb-5"},oe={class:"flex gap-2 text-xl font-semibold leading-none h-5 mb-4"},se={class:"flex gap-6 items-end"},ne={class:"flex flex-row-reverse gap-2"},ie={key:0,class:"overflow-y-auto p-8 pt-3"},de={class:"rounded-xl h-full inline-block w-full px-4 pb-6 pt-5 sm:px-6 transform overflow-y-auto bg-white text-left align-middle shadow-xl transition-all"},fe={__name:"QuickEntryModal",props:R({doctype:{type:String,default:"CRM Lead"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(f){const c=f,k=I(f,"modelValue"),r=S(c.doctype),m=S(!1),x=S(!1),_=S(!1);function e(){return{doctype:r.value,type:"Quick Entry"}}const a=D({url:"crm.fcrm.doctype.crm_fields_layout.crm_fields_layout.get_fields_layout",cache:["quick-entry-sections",r.value],params:e(),onSuccess(s){a.originalData=JSON.parse(JSON.stringify(s))}});M(()=>a==null?void 0:a.data,()=>{x.value=JSON.stringify(a==null?void 0:a.data)!==JSON.stringify(a==null?void 0:a.originalData)},{deep:!0}),J(()=>K(y,100)());function y(){A(()=>{a.params=e(),a.reload()})}function p(){let s=JSON.parse(JSON.stringify(a.data));s.forEach(l=>{l.fields&&(l.fields=l.fields.map(t=>t.fieldname||t.name))}),m.value=!0,Q("crm.fcrm.doctype.crm_fields_layout.crm_fields_layout.save_fields_layout",{doctype:r.value,type:"Quick Entry",layout:JSON.stringify(s)}).then(()=>{m.value=!1,y()})}return(s,l)=>{const t=h("FormControl"),b=h("Button");return i(),v(d(z),{modelValue:k.value,"onUpdate:modelValue":l[2]||(l[2]=C=>k.value=C),options:{size:"3xl"}},{body:u(()=>{var C;return[o("div",ae,[o("div",te,[o("h2",oe,[o("div",null,g(s.__("Edit Quick Entry Layout")),1),x.value?(i(),v(d(U),{key:0,label:s.__("Not Saved"),variant:"subtle",theme:"orange"},null,8,["label"])):L("",!0)]),o("div",se,[n(t,{class:"flex-1",type:"select",modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=V=>r.value=V),label:s.__("DocType"),options:["CRM Lead","CRM Deal","Contact","CRM Organization"],onChange:y},null,8,["modelValue","label"]),o("div",ne,[n(b,{loading:m.value,label:s.__("Save"),variant:"solid",onClick:p},null,8,["loading","label"]),n(b,{label:s.__("Reset"),onClick:y},null,8,["label"]),n(b,{label:_.value?s.__("Hide Preview"):s.__("Show Preview"),onClick:l[1]||(l[1]=V=>_.value=!_.value)},null,8,["label"])])])]),(C=d(a))!=null&&C.data?(i(),$("div",ie,[o("div",de,[_.value?(i(),v(N,{key:1,sections:d(a).data,data:{}},null,8,["sections"])):(i(),v(le,{key:0,sections:d(a).data,doctype:r.value},null,8,["sections","doctype"]))])])):L("",!0)])]}),_:1},8,["modelValue"])}}};export{fe as _};
//# sourceMappingURL=QuickEntryModal-95813af5.js.map
