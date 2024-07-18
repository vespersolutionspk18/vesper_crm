import{_ as j}from"./CustomActions-dd6491ed.js";import{E as N}from"./EmailIcon-5d882006.js";import{_ as R,a as I}from"./LayoutHeader-f400e0a9.js";import{_ as S}from"./ViewControls-4002c267.js";import{m as A,h as B,i as L,s as q,j as H,k as y,r as h,b as i,c as v,d as a,w as m,u as f,F as x,f as z,g,n as D,l as F,e as U,t as M,p as O}from"./index-9a3d44ca.js";import{_ as J,H as P,a as G,f as K,b as Q,g as X,c as Y,d as Z,e as ee}from"./ListBulkActions-9fa5be79.js";import{D as te}from"./Dropdown-d1bc143c.js";import{_ as le}from"./ListFooter-3ed6863c.js";import{_ as oe}from"./global-005ed632.js";import{_ as ae}from"./EmailTemplateModal-8f279830.js";import{d as se,t as ne,a as ie}from"./index-23e032df.js";import"./settings-5e848745.js";import"./DetailsIcon-e1b98c12.js";import"./Link-b1fdcf99.js";import"./NestedPopover-767b5999.js";import"./EditIcon-5c615a04.js";import"./views-43c0d23f.js";import"./FadedScrollableDiv-3ad27946.js";import"./DragVerticalIcon-21aa16a4.js";import"./AssignmentModal-b9aa1b53.js";import"./label-c0466358.js";const ue=["onClick"],re={key:1,class:"truncate text-base"},me={key:2},de={key:3},pe=["onClick"],fe={__name:"EmailTemplatesListView",props:A({rows:{type:Array,required:!0},columns:{type:Array,required:!0},options:{type:Object,default:()=>({selectable:!0,showTooltip:!0,resizeColumn:!1,totalCount:0,rowCount:0})}},{modelValue:{},modelModifiers:{},list:{},listModifiers:{}}),emits:A(["loadMore","updatePageCount","showEmailTemplate","columnWidthUpdated","applyFilter","applyLikeFilter","likeDoc"],["update:modelValue","update:list"]),setup(u,{expose:E,emit:V}){const l=V,_=B(u,"modelValue"),C=B(u,"list"),T=L(()=>{var r,s;return!!((s=(r=C.value.params)==null?void 0:r.filters)!=null&&s._liked_by)}),{user:w}=q();function b(r){if(r)return JSON.parse(r).includes(w)}H(_,(r,s)=>{r!==s&&l("updatePageCount",r)});const k=y(null);return E({customListActions:L(()=>{var r;return(r=k.value)==null?void 0:r.customListActions})}),(r,s)=>{const d=h("Button"),e=h("Badge"),c=h("FormControl");return i(),v(x,null,[a(f(Z),{columns:u.columns,rows:u.rows,options:{onRowClick:o=>l("showEmailTemplate",o.name),selectable:u.options.selectable,showTooltip:u.options.showTooltip,resizeColumn:u.options.resizeColumn},"row-key":"name"},{default:m(()=>[a(f(J),{class:"sm:mx-5 mx-3",onColumnWidthUpdated:s[1]||(s[1]=o=>l("columnWidthUpdated"))},{default:m(()=>[(i(!0),v(x,null,z(u.columns,o=>(i(),g(f(G),{key:o.key,item:o,onColumnWidthUpdated:t=>l("columnWidthUpdated",o)},{default:m(()=>[o.key=="_liked_by"?(i(),g(d,{key:0,variant:"ghosted",class:D(["!h-4",T.value?"fill-red-500":"fill-white"]),onClick:s[0]||(s[0]=()=>l("applyLikeFilter"))},{default:m(()=>[a(P,{class:"h-4 w-4"})]),_:1},8,["class"])):F("",!0)]),_:2},1032,["item","onColumnWidthUpdated"]))),128))]),_:1}),a(f(K),{class:"mx-3 sm:mx-5",id:"list-rows"},{default:m(()=>[(i(!0),v(x,null,z(u.rows,o=>(i(),g(f(X),{key:o.name,row:o},{default:m(({idx:t,column:p,item:n})=>[a(f(Q),{item:n},{default:m(({label:W})=>[["modified","creation"].includes(p.key)?(i(),v("div",{key:0,class:"truncate text-base",onClick:$=>l("applyFilter",{event:$,idx:t,column:p,item:n,firstColumn:u.columns[0]})},[a(f(oe),{text:n.label},{default:m(()=>[U("div",null,M(n.timeAgo),1)]),_:2},1032,["text"])],8,ue)):p.key==="status"?(i(),v("div",re,[a(e,{variant:"subtle",theme:n.color,size:"md",label:n.label,onClick:$=>l("applyFilter",{event:$,idx:t,column:p,item:n,firstColumn:u.columns[0]})},null,8,["theme","label","onClick"])])):p.type==="Check"?(i(),v("div",me,[a(c,{type:"checkbox",modelValue:n,disabled:!0,class:"text-gray-900"},null,8,["modelValue"])])):p.key==="_liked_by"?(i(),v("div",de,[p.key=="_liked_by"?(i(),g(d,{key:0,variant:"ghosted",class:D(b(n)?"fill-red-500":"fill-white"),onClick:O(()=>l("likeDoc",{name:o.name,liked:b(n)}),["stop","prevent"])},{default:m(()=>[a(P,{class:"h-4 w-4"})]),_:2},1032,["class","onClick"])):F("",!0)])):(i(),v("div",{key:4,class:"truncate text-base",onClick:$=>l("applyFilter",{event:$,idx:t,column:p,item:n,firstColumn:u.columns[0]})},M(W),9,pe))]),_:2},1032,["item"])]),_:2},1032,["row"]))),128))]),_:1}),a(f(Y),null,{actions:m(({selections:o,unselectAll:t})=>[a(f(te),{options:k.value.bulkActions(o,t)},{default:m(()=>[a(d,{icon:"more-horizontal",variant:"ghost"})]),_:2},1032,["options"])]),_:1})]),_:1},8,["columns","rows","options"]),a(f(le),{class:"border-t sm:px-5 px-3 py-2",modelValue:_.value,"onUpdate:modelValue":s[2]||(s[2]=o=>_.value=o),options:{rowCount:u.options.rowCount,totalCount:u.options.totalCount},onLoadMore:s[3]||(s[3]=o=>l("loadMore"))},null,8,["modelValue","options"]),a(ee,{ref_key:"listBulkActionsRef",ref:k,modelValue:C.value,"onUpdate:modelValue":s[4]||(s[4]=o=>C.value=o),doctype:"Email Template",options:{hideAssign:!0}},null,8,["modelValue"])],64)}}},ce={key:1,class:"flex h-full items-center justify-center"},ve={class:"flex flex-col items-center gap-3 text-xl font-medium text-gray-500"},Pe={__name:"EmailTemplates",setup(u){const E=[{label:__("Email Templates"),route:{name:"Email Templates"}}],V=y(null),l=y({}),_=y(1),C=y(1),T=y(20),w=y(null),b=L(()=>{var d,e,c;return!((e=(d=l.value)==null?void 0:d.data)!=null&&e.data)||!["list","group_by"].includes(l.value.data.view_type)?[]:(c=l.value)==null?void 0:c.data.data.map(o=>{var p;let t={};return(p=l.value)==null||p.data.rows.forEach(n=>{t[n]=o[n],["modified","creation"].includes(n)&&(t[n]={label:se(o[n],ie),timeAgo:ne(o[n])})}),t})}),k=y(!1),r=y({subject:"",response:"",response_html:"",name:"",enabled:1,use_html:0,owner:"",reference_doctype:"CRM Deal"});function s(d){var c;let e=(c=b.value)==null?void 0:c.find(o=>o.name===d);r.value={subject:e.subject,response:e.response,response_html:e.response_html,name:e.name,enabled:e.enabled,use_html:e.use_html,owner:e.owner,reference_doctype:e.reference_doctype},k.value=!0}return(d,e)=>{const c=h("FeatherIcon"),o=h("Button");return i(),v(x,null,[a(R,null,{"left-header":m(()=>[a(f(I),{items:E})]),"right-header":m(()=>{var t;return[(t=V.value)!=null&&t.customListActions?(i(),g(j,{key:0,actions:V.value.customListActions},null,8,["actions"])):F("",!0),a(o,{variant:"solid",label:d.__("Create"),onClick:e[0]||(e[0]=p=>k.value=!0)},{prefix:m(()=>[a(c,{name:"plus",class:"h-4"})]),_:1},8,["label"])]}),_:1}),a(S,{ref_key:"viewControls",ref:w,modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=t=>l.value=t),loadMore:_.value,"onUpdate:loadMore":e[2]||(e[2]=t=>_.value=t),resizeColumn:C.value,"onUpdate:resizeColumn":e[3]||(e[3]=t=>C.value=t),updatedPageCount:T.value,"onUpdate:updatedPageCount":e[4]||(e[4]=t=>T.value=t),doctype:"Email Template"},null,8,["modelValue","loadMore","resizeColumn","updatedPageCount"]),l.value.data&&b.value.length?(i(),g(fe,{key:0,ref_key:"emailTemplatesListView",ref:V,modelValue:l.value.data.page_length_count,"onUpdate:modelValue":e[5]||(e[5]=t=>l.value.data.page_length_count=t),list:l.value,"onUpdate:list":e[6]||(e[6]=t=>l.value=t),rows:b.value,columns:l.value.data.columns,options:{showTooltip:!1,resizeColumn:!0,rowCount:l.value.data.row_count,totalCount:l.value.data.total_count},onLoadMore:e[7]||(e[7]=()=>_.value++),onColumnWidthUpdated:e[8]||(e[8]=()=>C.value++),onUpdatePageCount:e[9]||(e[9]=t=>T.value=t),onShowEmailTemplate:s,onApplyFilter:e[10]||(e[10]=t=>w.value.applyFilter(t)),onApplyLikeFilter:e[11]||(e[11]=t=>w.value.applyLikeFilter(t)),onLikeDoc:e[12]||(e[12]=t=>w.value.likeDoc(t))},null,8,["modelValue","list","rows","columns","options"])):l.value.data?(i(),v("div",ce,[U("div",ve,[a(N,{class:"h-10 w-10"}),U("span",null,M(d.__("No {0} Found",[d.__("Email Templates")])),1),a(o,{label:d.__("Create"),onClick:e[13]||(e[13]=t=>k.value=!0)},{prefix:m(()=>[a(c,{name:"plus",class:"h-4"})]),_:1},8,["label"])])])):F("",!0),a(ae,{modelValue:k.value,"onUpdate:modelValue":e[14]||(e[14]=t=>k.value=t),reloadEmailTemplates:l.value,"onUpdate:reloadEmailTemplates":e[15]||(e[15]=t=>l.value=t),emailTemplate:r.value},null,8,["modelValue","reloadEmailTemplates","emailTemplate"])],64)}}};export{Pe as default};
//# sourceMappingURL=EmailTemplates-5089be70.js.map
