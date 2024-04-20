import{u as d,j as e,D as r}from"./system-DZ7tp2lm.js";import{r as N}from"./index-CsdIBAqE.js";import{C as E}from"./CardView-Cpszefbe.js";import{I as i}from"./InputField-DMOdhfB4.js";import{a as o}from"./inputType-e6zxELwx.js";function c({cardInfo:t,handleInput:n}){const f=a=>{n({...t,cardNumbers:{...t.cardNumbers,...a}})},h=a=>{n({...t,expiryDate:{...t.expiryDate,...a}})},y=a=>{n({...t,...a})};return e.jsxs(I,{children:[e.jsx(i,{title:"결제할 카드 번호를 입력해 주세요",subtitle:"본인 명의의 카드만 결제 가능합니다.",inputTypes:o.CARD_NUMBER,handleInput:f}),e.jsx(i,{title:"카드 유효기간을 입력해 주세요",subtitle:"월/년도(MMYY)를 순서대로 입력해 주세요.",inputTypes:o.EXPIRY_DATE,handleInput:h}),e.jsx(i,{title:"카드 소유자 이름을 입력해 주세요",inputTypes:o.USER_NAME,handleInput:y})]})}const I=d.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;c.__docgenInfo={description:"",methods:[],displayName:"InputForm",props:{cardInfo:{required:!0,tsType:{name:"Card"},description:""},handleInput:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: Card) => void",signature:{arguments:[{type:{name:"Card"},name:"value"}],return:{name:"void"}}},description:""}}};const g=d.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,_=d.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;

  @media screen and (max-width: 500px) {
    width: 85vw;
  }
`;function l(){const[t,n]=N.useState({cardNumbers:{cardNumber1:r,cardNumber2:r,cardNumber3:r,cardNumber4:r},expiryDate:{month:r,year:r},userName:r});return e.jsx(g,{children:e.jsxs(_,{children:[e.jsx(E,{cardInfo:t}),e.jsx(c,{cardInfo:t,handleInput:n})]})})}l.__docgenInfo={description:"",methods:[],displayName:"EnrollCard"};function x(){return e.jsx(e.Fragment,{children:e.jsx(l,{})})}x.__docgenInfo={description:"",methods:[],displayName:"App"};const v={title:"App",component:x},s={};var p,m,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const A=["Default"];export{s as Default,A as __namedExportsOrder,v as default};
