import{I,a as l}from"./inputType-e6zxELwx.js";import{a as m}from"./chunk-MZXVCX43-DWuJqIWT.js";import"./system-DZ7tp2lm.js";import"./index-CsdIBAqE.js";import"./v4-D8aEg3BZ.js";const M={title:"Input",component:I},p=0,u=l.CARD_NUMBER,d=m("handleInput"),i=m("setErrorMessages"),r={args:{info:u.inputInfo[p],handleInput:d,isError:!1,handleErrorMessage:i}},o={args:{info:u.inputInfo[p],handleInput:d,isError:!0,handleErrorMessage:i}};var e,n,s;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    info: mockInfo.inputInfo[mockIndex],
    handleInput: mockHandleInput,
    isError: false,
    handleErrorMessage: mockSetErrorMessages
  }
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var a,t,c;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    info: mockInfo.inputInfo[mockIndex],
    handleInput: mockHandleInput,
    isError: true,
    handleErrorMessage: mockSetErrorMessages
  }
}`,...(c=(t=o.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const S=["Default","Error"];export{r as Default,o as Error,S as __namedExportsOrder,M as default};
