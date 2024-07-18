import{_ as W}from"./CustomActions-dd6491ed.js";import{O as E}from"./OrganizationsIcon-f5eb7efc.js";import{_ as N,a as q}from"./LayoutHeader-f400e0a9.js";import{_ as T}from"./OrganizationModal-7c7ff91b.js";import{_ as j}from"./QuickEntryModal-95813af5.js";import{m as h,h as R,i as x,s as S,j as H,k as y,r as F,b as i,c,d as l,w as d,u as v,F as M,f as I,g as _,n as D,l as w,e as O,t as B,p as J,A as Q}from"./index-9a3d44ca.js";import{_ as G,H as P,a as K,f as X,b as Y,g as Z,c as ee,d as te,e as oe}from"./ListBulkActions-9fa5be79.js";import{b as ae,_ as le}from"./global-005ed632.js";import{D as ne}from"./Dropdown-d1bc143c.js";import{_ as se}from"./ListFooter-3ed6863c.js";import{_ as ie}from"./ViewControls-4002c267.js";import{b as ue,d as re,t as de,a as me}from"./index-23e032df.js";import"./settings-5e848745.js";import"./Fields-bccd83f4.js";import"./NestedPopover-767b5999.js";import"./EditIcon-5c615a04.js";import"./IndicatorIcon-8bdc1dd8.js";import"./Link-b1fdcf99.js";import"./DragVerticalIcon-21aa16a4.js";import"./AssignmentModal-b9aa1b53.js";import"./label-c0466358.js";import"./DetailsIcon-e1b98c12.js";import"./views-43c0d23f.js";import"./FadedScrollableDiv-3ad27946.js";const pe={key:0},fe=["onClick"],ve={key:1},ce={key:2},ke=["onClick"],ye={__name:"OrganizationsListView",props:h({rows:{type:Array,required:!0},columns:{type:Array,required:!0},options:{type:Object,default:()=>({selectable:!0,showTooltip:!0,resizeColumn:!1,totalCount:0,rowCount:0})}},{modelValue:{},modelModifiers:{},list:{},listModifiers:{}}),emits:h(["loadMore","updatePageCount","columnWidthUpdated","applyFilter","applyLikeFilter","likeDoc"],["update:modelValue","update:list"]),setup(m,{expose:U,emit:$}){const p=$,k=R(m,"modelValue"),g=R(m,"list"),L=x(()=>{var u,n;return!!((n=(u=g.value.params)==null?void 0:u.filters)!=null&&n._liked_by)}),{user:s}=S();function V(u){if(u)return JSON.parse(u).includes(s)}H(k,(u,n)=>{u!==n&&p("updatePageCount",u)});const C=y(null);return U({customListActions:x(()=>{var u;return(u=C.value)==null?void 0:u.customListActions})}),(u,n)=>{const z=F("Button"),A=F("FormControl");return i(),c(M,null,[l(v(te),{columns:m.columns,rows:m.rows,options:{getRowRoute:o=>({name:"Organization",params:{organizationId:o.name}}),selectable:m.options.selectable,showTooltip:m.options.showTooltip,resizeColumn:m.options.resizeColumn},"row-key":"name"},{default:d(()=>[l(v(G),{class:"sm:mx-5 mx-3",onColumnWidthUpdated:n[1]||(n[1]=o=>p("columnWidthUpdated"))},{default:d(()=>[(i(!0),c(M,null,I(m.columns,o=>(i(),_(v(K),{key:o.key,item:o,onColumnWidthUpdated:e=>p("columnWidthUpdated",o)},{default:d(()=>[o.key=="_liked_by"?(i(),_(z,{key:0,variant:"ghosted",class:D(["!h-4",L.value?"fill-red-500":"fill-white"]),onClick:n[0]||(n[0]=()=>p("applyLikeFilter"))},{default:d(()=>[l(P,{class:"h-4 w-4"})]),_:1},8,["class"])):w("",!0)]),_:2},1032,["item","onColumnWidthUpdated"]))),128))]),_:1}),l(v(X),{class:"mx-3 sm:mx-5",id:"list-rows"},{default:d(()=>[(i(!0),c(M,null,I(m.rows,o=>(i(),_(v(Z),{key:o.name,row:o},{default:d(({idx:e,column:r,item:a})=>[l(v(Y),{item:a},{prefix:d(()=>[r.key==="organization_name"?(i(),c("div",pe,[a.label?(i(),_(v(ae),{key:0,class:"flex items-center",image:a.logo,label:a.label,size:"sm"},null,8,["image","label"])):w("",!0)])):w("",!0)]),default:d(({label:t})=>[["modified","creation"].includes(r.key)?(i(),c("div",{key:0,class:"truncate text-base",onClick:b=>p("applyFilter",{event:b,idx:e,column:r,item:a,firstColumn:m.columns[0]})},[l(v(le),{text:a.label},{default:d(()=>[O("div",null,B(a.timeAgo),1)]),_:2},1032,["text"])],8,fe)):r.type==="Check"?(i(),c("div",ve,[l(A,{type:"checkbox",modelValue:a,disabled:!0,class:"text-gray-900"},null,8,["modelValue"])])):r.key==="_liked_by"?(i(),c("div",ce,[r.key=="_liked_by"?(i(),_(z,{key:0,variant:"ghosted",class:D(V(a)?"fill-red-500":"fill-white"),onClick:J(()=>p("likeDoc",{name:o.name,liked:V(a)}),["stop","prevent"])},{default:d(()=>[l(P,{class:"h-4 w-4"})]),_:2},1032,["class","onClick"])):w("",!0)])):(i(),c("div",{key:3,class:"truncate text-base",onClick:b=>p("applyFilter",{event:b,idx:e,column:r,item:a,firstColumn:m.columns[0]})},B(t),9,ke))]),_:2},1032,["item"])]),_:2},1032,["row"]))),128))]),_:1}),l(v(ee),null,{actions:d(({selections:o,unselectAll:e})=>[l(v(ne),{options:C.value.bulkActions(o,e)},{default:d(()=>[l(z,{icon:"more-horizontal",variant:"ghost"})]),_:2},1032,["options"])]),_:1})]),_:1},8,["columns","rows","options"]),l(v(se),{class:"border-t sm:px-5 px-3 py-2",modelValue:k.value,"onUpdate:modelValue":n[2]||(n[2]=o=>k.value=o),options:{rowCount:m.options.rowCount,totalCount:m.options.totalCount},onLoadMore:n[3]||(n[3]=o=>p("loadMore"))},null,8,["modelValue","options"]),l(oe,{ref_key:"listBulkActionsRef",ref:C,modelValue:g.value,"onUpdate:modelValue":n[4]||(n[4]=o=>g.value=o),doctype:"CRM Organization",options:{hideAssign:!0}},null,8,["modelValue"])],64)}}},_e={key:1,class:"flex h-full items-center justify-center"},ge={class:"flex flex-col items-center gap-3 text-xl font-medium text-gray-500"},je={__name:"Organizations",setup(m){const U=Q(),$=y(null),p=y(!1),k=y(!1),g=x(()=>{var o,e,r;return(r=(e=(o=s.value)==null?void 0:o.data)==null?void 0:e.data)==null?void 0:r.find(a=>a.name===U.params.organizationId)}),L=x(()=>{let o=[{label:__("Organizations"),route:{name:"Organizations"}}];return g.value&&o.push({label:__(g.value.name),route:{name:"Organization",params:{organizationId:g.value.name}}}),o}),s=y({}),V=y(1),C=y(1),u=y(20),n=y(null),z=x(()=>{var o,e,r;return!((e=(o=s.value)==null?void 0:o.data)!=null&&e.data)||!["list","group_by"].includes(s.value.data.view_type)?[]:(r=s.value)==null?void 0:r.data.data.map(a=>{var b;let t={};return(b=s.value)==null||b.data.rows.forEach(f=>{t[f]=a[f],f==="organization_name"?t[f]={label:a.organization_name,logo:a.organization_logo}:f==="website"?t[f]=A(a.website):f==="annual_revenue"?t[f]=ue(a.annual_revenue,a.currency):["modified","creation"].includes(f)&&(t[f]={label:re(a[f],me),timeAgo:__(de(a[f]))})}),t})});function A(o){return o&&o.replace(/^(?:https?:\/\/)?(?:www\.)?/i,"")}return(o,e)=>{const r=F("FeatherIcon"),a=F("Button");return i(),c(M,null,[l(N,null,{"left-header":d(()=>[l(v(q),{items:L.value},null,8,["items"])]),"right-header":d(()=>{var t;return[(t=$.value)!=null&&t.customListActions?(i(),_(W,{key:0,actions:$.value.customListActions},null,8,["actions"])):w("",!0),l(a,{variant:"solid",label:o.__("Create"),onClick:e[0]||(e[0]=b=>p.value=!0)},{prefix:d(()=>[l(r,{name:"plus",class:"h-4"})]),_:1},8,["label"])]}),_:1}),l(ie,{ref_key:"viewControls",ref:n,modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=t=>s.value=t),loadMore:V.value,"onUpdate:loadMore":e[2]||(e[2]=t=>V.value=t),resizeColumn:C.value,"onUpdate:resizeColumn":e[3]||(e[3]=t=>C.value=t),updatedPageCount:u.value,"onUpdate:updatedPageCount":e[4]||(e[4]=t=>u.value=t),doctype:"CRM Organization"},null,8,["modelValue","loadMore","resizeColumn","updatedPageCount"]),s.value.data&&z.value.length?(i(),_(ye,{key:0,ref_key:"organizationsListView",ref:$,modelValue:s.value.data.page_length_count,"onUpdate:modelValue":e[5]||(e[5]=t=>s.value.data.page_length_count=t),list:s.value,"onUpdate:list":e[6]||(e[6]=t=>s.value=t),rows:z.value,columns:s.value.data.columns,options:{showTooltip:!1,resizeColumn:!0,rowCount:s.value.data.row_count,totalCount:s.value.data.total_count},onLoadMore:e[7]||(e[7]=()=>V.value++),onColumnWidthUpdated:e[8]||(e[8]=()=>C.value++),onUpdatePageCount:e[9]||(e[9]=t=>u.value=t),onApplyFilter:e[10]||(e[10]=t=>n.value.applyFilter(t)),onApplyLikeFilter:e[11]||(e[11]=t=>n.value.applyLikeFilter(t)),onLikeDoc:e[12]||(e[12]=t=>n.value.likeDoc(t))},null,8,["modelValue","list","rows","columns","options"])):s.value.data?(i(),c("div",_e,[O("div",ge,[l(E,{class:"h-10 w-10"}),O("span",null,B(o.__("No {0} Found",[o.__("Organizations")])),1),l(a,{label:o.__("Create"),onClick:e[13]||(e[13]=t=>p.value=!0)},{prefix:d(()=>[l(r,{name:"plus",class:"h-4"})]),_:1},8,["label"])])])):w("",!0),l(T,{modelValue:p.value,"onUpdate:modelValue":e[14]||(e[14]=t=>p.value=t),quickEntry:k.value,"onUpdate:quickEntry":e[15]||(e[15]=t=>k.value=t)},null,8,["modelValue","quickEntry"]),k.value?(i(),_(j,{key:2,modelValue:k.value,"onUpdate:modelValue":e[16]||(e[16]=t=>k.value=t),doctype:"CRM Organization"},null,8,["modelValue"])):w("",!0)],64)}}};export{je as default};
//# sourceMappingURL=Organizations-3673a775.js.map