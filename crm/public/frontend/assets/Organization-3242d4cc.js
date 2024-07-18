import{k as w,v as ae,J as oe,i as b,B as E,q as te,aj as R,r as z,b as s,c as d,u as a,g as c,w as u,l as i,d as l,K as ne,F as se,I as B,e as r,C as ie,G as C,t as _,H as F,n as j}from"./index-9a3d44ca.js";import{g as le,b as re}from"./global-005ed632.js";import{_ as me,a as de}from"./LayoutHeader-f400e0a9.js";import{D as ce}from"./Dropdown-d1bc143c.js";import{F as ue}from"./FileUploader-e02978ad.js";import{_ as _e}from"./Tabs-9ce471e9.js";import{_ as ge,W as pe,T as fe,M as ye}from"./OrganizationModal-7c7ff91b.js";import{_ as be}from"./QuickEntryModal-95813af5.js";import{_ as he}from"./DealsListView-c0ffb5e0.js";import{_ as ve}from"./ContactsListView-b9703a92.js";import{E as we}from"./EditIcon-5c615a04.js";import{C as ze}from"./CameraIcon-d076352a.js";import{D as xe}from"./DealsIcon-3bb51480.js";import{C as ke}from"./ContactsIcon-5941e60f.js";import{s as Ce}from"./statuses-c18f787a.js";import{b as $,d as N,t as U,a as S}from"./index-23e032df.js";import"./Fields-bccd83f4.js";import"./NestedPopover-767b5999.js";import"./IndicatorIcon-8bdc1dd8.js";import"./Link-b1fdcf99.js";import"./OrganizationsIcon-f5eb7efc.js";import"./DragVerticalIcon-21aa16a4.js";import"./ListBulkActions-9fa5be79.js";import"./AssignmentModal-b9aa1b53.js";import"./PhoneIcon-2b0b9034.js";import"./ListRows-bf71bc40.js";import"./ListFooter-3ed6863c.js";import"./label-c0466358.js";const Ie={key:1,class:"flex flex-1 flex-col overflow-hidden"},Oe={class:"flex items-start justify-start gap-6 p-5 sm:items-center"},De={class:"group relative h-24 w-24"},Me={class:"z-1 absolute bottom-0 left-0 right-0 flex h-13 cursor-pointer items-center justify-center rounded-b-full bg-black bg-opacity-40 pt-3 opacity-0 duration-300 ease-in-out group-hover:opacity-100",style:{"-webkit-clip-path":"inset(12px 0 0 0)","clip-path":"inset(12px 0 0 0)"}},Ve={class:"flex flex-col justify-center gap-2 sm:gap-0.5"},Ee={class:"text-3xl font-semibold text-gray-900"},Re={class:"flex flex-col flex-wrap gap-3 text-base text-gray-700 sm:flex-row sm:items-center sm:gap-2"},Be={key:0,class:"flex items-center gap-1.5"},Fe={class:""},je={key:1,class:"hidden text-3xl leading-[0] text-gray-600 sm:flex"},$e={key:2,class:"flex items-center gap-1.5"},Ne={class:""},Ue={key:3,class:"hidden text-3xl leading-[0] text-gray-600 sm:flex"},Se={key:4,class:"flex items-center gap-1.5"},Le={class:""},Te={key:5,class:"hidden text-3xl leading-[0] text-gray-600 sm:flex"},qe={key:6,class:"flex items-center gap-1.5"},Ae={class:""},Pe={key:7,class:"hidden text-3xl leading-[0] text-gray-600 sm:flex"},Ge={class:"mt-2 flex gap-1.5"},Je={key:2,class:"grid flex-1 place-items-center text-xl font-medium text-gray-500"},We={class:"flex flex-col items-center justify-center space-y-3"},za={__name:"Organization",props:{organizationId:{type:String,required:!0}},setup(L){const m=L,{$dialog:T}=le(),{getDealStatus:q}=Ce(),h=w(!1),g=w(!1),x=w(!1),A=ae(),o=oe({doctype:"CRM Organization",name:m.organizationId,cache:["organization",m.organizationId],fields:["*"],auto:!0}),P=b(()=>{let e=[{label:__("Organizations"),route:{name:"Organizations"}}];return e.push({label:m.organizationId,route:{name:"Organization",params:{organizationId:m.organizationId}}}),e});function G(e){let t=e.name.split(".").pop().toLowerCase();if(!["png","jpg","jpeg"].includes(t))return __("Only PNG and JPG images are allowed")}async function I(e){await B("frappe.client.set_value",{doctype:"CRM Organization",name:m.organizationId,fieldname:"organization_logo",value:(e==null?void 0:e.file_url)||""}),o.reload()}async function J(){T({title:__("Delete organization"),message:__("Are you sure you want to delete this organization?"),actions:[{label:__("Delete"),theme:"red",variant:"solid",async onClick(e){await B("frappe.client.delete",{doctype:"CRM Organization",name:m.organizationId}),e(),A.push({name:"Organizations"})}}]})}function W(e){return e&&e.replace(/^(?:https?:\/\/)?(?:www\.)?/i,"")}const p=w(0),H=[{label:"Deals",icon:E(xe,{class:"h-4 w-4"}),count:b(()=>{var e;return(e=D.data)==null?void 0:e.length})},{label:"Contacts",icon:E(ke,{class:"h-4 w-4"}),count:b(()=>{var e;return(e=M.data)==null?void 0:e.length})}],{getUser:O}=te(),D=R({type:"list",doctype:"CRM Deal",cache:["deals",m.organizationId],fields:["name","organization","currency","annual_revenue","status","email","mobile_no","deal_owner","modified"],filters:{organization:m.organizationId},orderBy:"modified desc",pageLength:20,auto:!0}),M=R({type:"list",doctype:"Contact",cache:["contacts",m.organizationId],fields:["name","full_name","image","email_id","mobile_no","company_name","modified"],filters:{company_name:m.organizationId},orderBy:"modified desc",pageLength:20,auto:!0}),f=b(()=>{let e=[];return e=p.value?M:D,e.data?e.data.map(t=>p.value?Q(t):K(t)):[]}),V=b(()=>p.value===0?X:Y);function K(e){var t,y;return{name:e.name,organization:{label:e.organization,logo:(t=m.organization)==null?void 0:t.organization_logo},annual_revenue:$(e.annual_revenue,e.currency),status:{label:e.status,color:(y=q(e.status))==null?void 0:y.iconColorClass},email:e.email,mobile_no:e.mobile_no,deal_owner:{label:e.deal_owner&&O(e.deal_owner).full_name,...e.deal_owner&&O(e.deal_owner)},modified:{label:N(e.modified,S),timeAgo:__(U(e.modified))}}}function Q(e){var t;return{name:e.name,full_name:{label:e.full_name,image_label:e.full_name,image:e.image},email:e.email_id,mobile_no:e.mobile_no,company_name:{label:e.company_name,logo:(t=m.organization)==null?void 0:t.organization_logo},modified:{label:N(e.modified,S),timeAgo:__(U(e.modified))}}}const X=[{label:__("Organization"),key:"organization",width:"11rem"},{label:__("Amount"),key:"annual_revenue",width:"9rem"},{label:__("Status"),key:"status",width:"10rem"},{label:__("Email"),key:"email",width:"12rem"},{label:__("Mobile no"),key:"mobile_no",width:"11rem"},{label:__("Deal owner"),key:"deal_owner",width:"10rem"},{label:__("Last modified"),key:"modified",width:"8rem"}],Y=[{label:__("Name"),key:"full_name",width:"17rem"},{label:__("Email"),key:"email",width:"12rem"},{label:__("Phone"),key:"mobile_no",width:"12rem"},{label:__("Organization"),key:"company_name",width:"12rem"},{label:__("Last modified"),key:"modified",width:"8rem"}];return(e,t)=>{const y=z("FeatherIcon"),k=z("Button"),Z=z("ErrorMessage"),ee=z("Badge");return s(),d(se,null,[a(o).doc?(s(),c(me,{key:0},{"left-header":u(()=>[l(a(de),{items:P.value},null,8,["items"])]),_:1})):i("",!0),a(o).doc?(s(),d("div",Ie,[l(a(ue),{onSuccess:I,validateFile:G},{default:u(({openFileSelector:n,error:v})=>[r("div",Oe,[r("div",De,[l(a(re),{size:"3xl",image:a(o).doc.organization_logo,label:a(o).doc.name,class:"!h-24 !w-24"},null,8,["image","label"]),(s(),c(C(a(o).doc.organization_logo?a(ce):"div"),ie(a(o).doc.organization_logo?{options:[{icon:"upload",label:a(o).doc.organization_logo?e.__("Change image"):e.__("Upload image"),onClick:n},{icon:"trash-2",label:e.__("Remove image"),onClick:()=>I("")}]}:{onClick:n},{class:"!absolute bottom-0 left-0 right-0"}),{default:u(()=>[r("div",Me,[l(ze,{class:"h-6 w-6 cursor-pointer text-white"})])]),_:2},1040))]),r("div",Ve,[r("div",Ee,_(a(o).doc.name),1),r("div",Re,[a(o).doc.website?(s(),d("div",Be,[l(pe,{class:"h-4 w-4"}),r("span",Fe,_(W(a(o).doc.website)),1)])):i("",!0),a(o).doc.website?(s(),d("span",je," · ")):i("",!0),a(o).doc.industry?(s(),d("div",$e,[l(y,{name:"briefcase",class:"h-4 w-4"}),r("span",Ne,_(a(o).doc.industry),1)])):i("",!0),a(o).doc.industry?(s(),d("span",Ue," · ")):i("",!0),a(o).doc.territory?(s(),d("div",Se,[l(fe,{class:"h-4 w-4"}),r("span",Le,_(a(o).doc.territory),1)])):i("",!0),a(o).doc.territory?(s(),d("span",Te," · ")):i("",!0),a(o).doc.annual_revenue?(s(),d("div",qe,[l(ye,{class:"size-4"}),r("span",Ae,_(a($)(a(o).doc.annual_revenue,a(o).doc.currency)),1)])):i("",!0),a(o).doc.annual_revenue?(s(),d("span",Pe," · ")):i("",!0),a(o).doc.website||a(o).doc.industry||a(o).doc.territory||a(o).doc.annual_revenue?(s(),c(k,{key:8,variant:"ghost",label:e.__("More"),class:"w-fit cursor-pointer hover:text-gray-900 sm:-ml-1",onClick:t[0]||(t[0]=()=>{x.value=!0,h.value=!0})},null,8,["label"])):i("",!0)]),r("div",Ge,[l(k,{label:e.__("Edit"),size:"sm",onClick:t[1]||(t[1]=()=>{x.value=!1,h.value=!0})},{prefix:u(()=>[l(we,{class:"h-4 w-4"})]),_:1},8,["label"]),l(k,{label:e.__("Delete"),theme:"red",size:"sm",onClick:J},{prefix:u(()=>[l(y,{name:"trash-2",class:"h-4 w-4"})]),_:1},8,["label"])]),l(Z,{class:"mt-2",message:e.__(v)},null,8,["message"])])])]),_:1}),l(a(_e),{modelValue:p.value,"onUpdate:modelValue":t[2]||(t[2]=n=>p.value=n),tabs:H},{tab:u(({tab:n,selected:v})=>[r("button",{class:j(["group flex items-center gap-2 border-b border-transparent py-2.5 text-base text-gray-600 duration-300 ease-in-out hover:border-gray-400 hover:text-gray-900",{"text-gray-900":v}])},[n.icon?(s(),c(C(n.icon),{key:0,class:"h-5"})):i("",!0),F(" "+_(e.__(n.label))+" ",1),l(ee,{class:j(["group-hover:bg-gray-900",[v?"bg-gray-900":"bg-gray-600"]]),variant:"solid",theme:"gray",size:"sm"},{default:u(()=>[F(_(n.count),1)]),_:2},1032,["class"])],2)]),default:u(({tab:n})=>[n.label==="Deals"&&f.value.length?(s(),c(he,{key:0,class:"mt-4",rows:f.value,columns:V.value,options:{selectable:!1,showTooltip:!1}},null,8,["rows","columns"])):i("",!0),n.label==="Contacts"&&f.value.length?(s(),c(ve,{key:1,class:"mt-4",rows:f.value,columns:V.value,options:{selectable:!1,showTooltip:!1}},null,8,["rows","columns"])):i("",!0),f.value.length?i("",!0):(s(),d("div",Je,[r("div",We,[(s(),c(C(n.icon),{class:"!h-10 !w-10"})),r("div",null,_(e.__("No {0} Found",[e.__(n.label)])),1)])]))]),_:1},8,["modelValue"])])):i("",!0),l(ge,{modelValue:h.value,"onUpdate:modelValue":t[3]||(t[3]=n=>h.value=n),quickEntry:g.value,"onUpdate:quickEntry":t[4]||(t[4]=n=>g.value=n),organization:a(o),"onUpdate:organization":t[5]||(t[5]=n=>ne(o)?o.value=n:null),options:{detailMode:x.value}},null,8,["modelValue","quickEntry","organization","options"]),g.value?(s(),c(be,{key:2,modelValue:g.value,"onUpdate:modelValue":t[6]||(t[6]=n=>g.value=n),doctype:"CRM Organization"},null,8,["modelValue"])):i("",!0)],64)}}};export{za as default};
//# sourceMappingURL=Organization-3242d4cc.js.map
