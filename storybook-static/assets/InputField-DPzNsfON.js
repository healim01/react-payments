import{j as e}from"./jsx-runtime-BnIj46N_.js";import{r as d}from"./index-CsdIBAqE.js";import{u as n}from"./system-BSWeVBm7.js";import{I as h}from"./inputType-ePO9YD_E.js";function l({title:o,subtitle:a}){return e.jsxs(e.Fragment,{children:[e.jsx(y,{children:o}),e.jsx(I,{children:a})]})}const y=n.h1`
  color: #000;
  font-size: 18px;
  margin-bottom: 4px;
`,I=n.p`
  color: #8b95a1;
  font-size: 9.5px;
  margin-bottom: 16px;
`;l.__docgenInfo={description:"",methods:[],displayName:"FieldTitle",props:{title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""}}};function j({title:o,subtitle:a,inputTypes:i,handleInput:c}){const[p,m]=d.useState({}),[u,g]=d.useState({}),x=(t,r)=>{m({...p,[i.inputInfo[t].property]:r}),c({...p,[i.inputInfo[t].property]:r})},f=(t,r)=>{g(s=>({...s,[t]:r}))};return e.jsxs(b,{children:[e.jsx(l,{title:o,subtitle:a}),e.jsx(v,{children:i.inputLabel}),e.jsx(T,{children:i.inputInfo.map((t,r)=>e.jsx(h,{info:t,handleInput:s=>x(r,s),isError:!!u[r],handleErrorMessage:s=>f(r,s)}))}),e.jsx(q,{children:Object.values(u).find(t=>t!=="")})]})}const b=n.div`
  display: flex;
  flex-direction: column;
  height: 120px;
`,v=n.p`
  color: var(--Text, #0a0d13);
  font-size: 12px;
  margin-bottom: 8px;
`,T=n.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 2rem;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 8px;
`,q=n.div`
  color: red;
  font-size: 9.5px;
`;j.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},inputTypes:{required:!0,tsType:{name:"InputType"},description:""},handleInput:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: { [key: string]: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ [key: string]: string }",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}},name:"value"}],return:{name:"void"}}},description:""}}};export{j as I};
