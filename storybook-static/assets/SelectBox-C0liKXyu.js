import{u as o,j as n}from"./styled-components.browser.esm-BJwir-wm.js";function u({options:t,selectedOption:r,onChange:d}){const i=e=>{const a=t.find(s=>s.name===e.target.value);a&&d(a)};return n.jsxs(l,{onChange:i,defaultValue:"defaultSelected",children:[n.jsx("option",{value:"defaultSelected",disabled:!0,hidden:!0,children:r}),t.map(e=>n.jsx("option",{value:e.name,children:e.name},e.name))]})}const l=o.select`
  padding: 10px;
`;u.__docgenInfo={description:"",methods:[],displayName:"SelectBox",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"CardCompany"}],raw:"CardCompany[]"},description:""},selectedOption:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: CardCompany) => void",signature:{arguments:[{type:{name:"CardCompany"},name:"value"}],return:{name:"void"}}},description:""}}};export{u as S};
