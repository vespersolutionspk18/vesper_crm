import{i as f,r as k,b as a,c as u,u as c,F as h,f as g,g as C,E as w,w as i,d as r,l as _}from"./index-9a3d44ca.js";import{D as x}from"./Dropdown-d1bc143c.js";import{i as p}from"./settings-5e848745.js";const E={__name:"CustomActions",props:{actions:{type:Object,required:!0}},setup(L){const m=L,b=f(()=>m.actions.filter(t=>!t.group)),s=f(()=>{let t=[];return m.actions.filter(o=>o.buttonLabel&&o.group).forEach(o=>{let e=t.findIndex(l=>l.label===o.buttonLabel);e>-1?t[e].action.push(o):t.push({label:o.buttonLabel,action:[o]})}),t}),d=f(()=>{let t=[],o=b.value;return p.value&&o.length&&t.push({group:__("Actions"),hideLabel:!0,items:o.map(e=>({label:e.label,onClick:e.onClick,icon:e.icon}))}),p.value&&s.value.length&&s.value.map(e=>{e.action.forEach(l=>t.push(l))}),t=t.concat(m.actions.filter(e=>e.group&&!e.buttonLabel)),t});return(t,o)=>{const e=k("FeatherIcon"),l=k("Button");return a(),u(h,null,[b.value.length&&!c(p)?(a(!0),u(h,{key:0},g(b.value,n=>(a(),C(l,{label:n.label,onClick:v=>n.onClick()},w({_:2},[n.icon?{name:"prefix",fn:i(()=>[r(e,{name:n.icon,class:"h-4 w-4"},null,8,["name"])]),key:"0"}:void 0]),1032,["label","onClick"]))),256)):_("",!0),d.value.length?(a(),C(c(x),{key:1,options:d.value},{default:i(()=>[r(l,{icon:"more-horizontal"})]),_:1},8,["options"])):_("",!0),s.value.length&&!c(p)?(a(!0),u(h,{key:2},g(s.value,n=>(a(),u("div",{key:n.label},[r(c(x),{options:n.action},{default:i(({open:v})=>[r(l,{label:n.label},{suffix:i(()=>[r(e,{name:v?"chevron-up":"chevron-down",class:"h-4"},null,8,["name"])]),_:2},1032,["label"])]),_:2},1032,["options"])]))),128)):_("",!0)],64)}}};export{E as _};
//# sourceMappingURL=CustomActions-dd6491ed.js.map
