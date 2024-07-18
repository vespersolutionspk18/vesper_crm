import{j as y,D as k}from"./Dropdown-d1bc143c.js";import{Z as b,v as C,i as p,b as s,c as o,F as h,d as v,w as f,Y as $,l as _,e as t,f as B,g as w,L as l,t as T,C as L,G as D,k as j,z as E,aG as N}from"./index-9a3d44ca.js";const S={class:"flex min-w-0 items-center"},V=t("svg",{class:"w-4 text-gray-600",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[t("circle",{cx:"12",cy:"12",r:"1"}),t("circle",{cx:"19",cy:"12",r:"1"}),t("circle",{cx:"5",cy:"12",r:"1"})],-1),z=t("span",{class:"ml-1 mr-0.5 text-base text-gray-500","aria-hidden":"true"}," / ",-1),F={class:"flex min-w-0 items-center overflow-hidden text-ellipsis whitespace-nowrap"},G={key:0,class:"mx-0.5 text-base text-gray-500","aria-hidden":"true"},Y=b({__name:"Breadcrumbs",props:{items:{}},setup(m){const n=m,a=C(),{width:i}=y(),u=p(()=>(n.items||[]).filter(Boolean)),x=p(()=>i.value>640?[]:u.value.slice(0,-2).map(r=>{let e=r.onClick?r.onClick:()=>a.push(r.route);return{...r,icon:null,label:r.label,onClick:e}})),d=p(()=>i.value>640?u.value:u.value.slice(-2));return(c,r)=>(s(),o("div",S,[x.value.length?(s(),o(h,{key:0},[v(k,{class:"h-7",options:x.value},{default:f(()=>[v($,{variant:"ghost"},{icon:f(()=>[V]),_:1})]),_:1},8,["options"]),z],64)):_("",!0),t("div",F,[(s(!0),o(h,null,B(d.value,(e,g)=>(s(),o(h,{key:e.label},[(s(),w(D(e.route?"router-link":"button"),L({class:["flex items-center rounded px-0.5 py-1 text-lg font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400",[g==d.value.length-1?"text-gray-900":"text-gray-600 hover:text-gray-700"]]},e.route?{to:e.route}:{onClick:e.onClick}),{default:f(()=>[l(c.$slots,"prefix",{item:e}),t("span",null,T(e.label),1),l(c.$slots,"suffix",{item:e})]),_:2},1040,["class"])),g!=d.value.length-1?(s(),o("span",G," / ")):_("",!0)],64))),128))])]))}}),H={class:"flex h-12 items-center justify-between py-2.5 pl-5"},I={class:"flex items-center gap-2"},P={class:"flex items-center gap-2"},Z={__name:"LayoutHeader",setup(m){const n=j(!1);return E(()=>{n.value=!0}),(a,i)=>n.value?(s(),w(N,{key:0,to:"#app-header"},[l(a.$slots,"default",{},()=>[t("header",H,[t("div",I,[l(a.$slots,"left-header")]),t("div",P,[l(a.$slots,"right-header",{class:"flex items-center gap-2"})])])])])):_("",!0)}};export{Z as _,Y as a};
//# sourceMappingURL=LayoutHeader-f400e0a9.js.map
