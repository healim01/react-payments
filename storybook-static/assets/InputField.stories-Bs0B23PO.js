import{I as d}from"./InputField-DMOdhfB4.js";import{a as u}from"./inputType-e6zxELwx.js";import{a as m}from"./chunk-MZXVCX43-DWuJqIWT.js";import"./system-DZ7tp2lm.js";import"./index-CsdIBAqE.js";import"./v4-D8aEg3BZ.js";const y={title:"InputField",component:d,tags:["autodocs"],argTypes:{inputTypes:{options:["CARD_NUMBER","EXPIRY_DATE","USER_NAME"],mapping:{CARD_NUMBER:u.CARD_NUMBER,EXPIRY_DATE:u.EXPIRY_DATE,USER_NAME:u.USER_NAME}}}},r=m("handleInput"),e={args:{title:"기본 입력 필드 제목",subtitle:"기본 입력 필드 부제목",inputTypes:{inputLabel:"기본 입력 필드",inputInfo:Array.from({length:1},(R,_)=>({property:`기본 ${_+1}`,validateType:"기본 타입",maxLength:10,placeHolder:"기본 입력 필드 플레이스홀더",error:"기본 입력 필드 에러 메시지"}))},handleInput:r}},t={args:{title:"결제할 카드 번호를 입력해 주세요",subtitle:"본인 명의의 카드만 결제 가능합니다.",inputTypes:u.CARD_NUMBER,handleInput:r}},n={args:{title:"카드 유효기간을 입력해 주세요",subtitle:"월/년도(MMYY)를 순서대로 입력해 주세요.",inputTypes:u.EXPIRY_DATE,handleInput:r}},C={args:{title:"카드 소유자 이름을 입력해 주세요",inputTypes:u.USER_NAME,handleInput:r}};var a,p,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: '기본 입력 필드 제목',
    subtitle: '기본 입력 필드 부제목',
    inputTypes: {
      inputLabel: '기본 입력 필드',
      inputInfo: Array.from({
        length: 1
      }, (_, index) => ({
        property: \`기본 \${index + 1}\`,
        validateType: '기본 타입',
        maxLength: 10,
        placeHolder: '기본 입력 필드 플레이스홀더',
        error: '기본 입력 필드 에러 메시지'
      }))
    },
    handleInput: mockHandleInput
  }
}`,...(s=(p=e.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};var o,E,B;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: '결제할 카드 번호를 입력해 주세요',
    subtitle: '본인 명의의 카드만 결제 가능합니다.',
    inputTypes: INPUT_TYPE_CATEGORIES.CARD_NUMBER,
    handleInput: mockHandleInput
  }
}`,...(B=(E=t.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var i,D,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: '카드 유효기간을 입력해 주세요',
    subtitle: '월/년도(MMYY)를 순서대로 입력해 주세요.',
    inputTypes: INPUT_TYPE_CATEGORIES.EXPIRY_DATE,
    handleInput: mockHandleInput
  }
}`,...(l=(D=n.parameters)==null?void 0:D.docs)==null?void 0:l.source}}};var A,c,I;C.parameters={...C.parameters,docs:{...(A=C.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: '카드 소유자 이름을 입력해 주세요',
    inputTypes: INPUT_TYPE_CATEGORIES.USER_NAME,
    handleInput: mockHandleInput
  }
}`,...(I=(c=C.parameters)==null?void 0:c.docs)==null?void 0:I.source}}};const P=["Default","CARD_NUMBER_FIELD","EXPIRY_DATE_FIELD","USER_NAME_FIELD"];export{t as CARD_NUMBER_FIELD,e as Default,n as EXPIRY_DATE_FIELD,C as USER_NAME_FIELD,P as __namedExportsOrder,y as default};
