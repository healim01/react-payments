import{C as I}from"./CardView-Cpszefbe.js";import"./system-DZ7tp2lm.js";import"./index-CsdIBAqE.js";const i={cardNumbers:{cardNumber1:"",cardNumber2:"",cardNumber3:"",cardNumber4:""},expiryDate:{month:"",year:""},userName:""},f={cardNumbers:{cardNumber1:"4123",cardNumber2:"1234",cardNumber3:"1234",cardNumber4:"1234"},expiryDate:{month:"1",year:"1"},userName:"HAILEY CHOI"},N={cardNumbers:{cardNumber1:"5123",cardNumber2:"1234",cardNumber3:"1234",cardNumber4:"1234"},expiryDate:{month:"12",year:"30"},userName:"HAILEY CHOI"},C={title:"CardView",component:I,tags:["autodocs"],argTypes:{cardInfo:{options:["Default","Visa","Master"],mapping:{Default:i,Visa:f,Master:N}}}},r={args:{cardInfo:i}},a={args:{cardInfo:f}},e={args:{cardInfo:N}};var s,o,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    cardInfo: mockDefaultCardInfo
  }
}`,...(c=(o=r.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var t,m,n;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    cardInfo: mockVisaCardInfo
  }
}`,...(n=(m=a.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var d,u,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    cardInfo: mockMasterCardInfo
  }
}`,...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const D=["Default","Visa","Master"];export{r as Default,e as Master,a as Visa,D as __namedExportsOrder,C as default};
