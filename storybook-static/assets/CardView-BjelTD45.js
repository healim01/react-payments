import{j as r}from"./jsx-runtime-BnIj46N_.js";import{u as s,S as x,a as u,D as h,C as a}from"./system-BSWeVBm7.js";const C="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJMAAABbCAYAAAB3XrfMAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMFSURBVHgB7dg7axRhFIfxc2Z3J5uYGMVUYhPwAppCsVDBJo1iL/oVRLBRtN5CEBSjhQj6EUJ6jU3QIilMYWEsDGIRwcJEjQlkLzPzOoMI2VxMsvyr+PzKd89u9TA75zUDAGDX8p0Mz87e6ErT7nhP0qq0Qnel2UpKhl0vrpTTVqORht5S49ixn3X3562N5rYVUxFRthj3xRYPJJ5e9eDn8q+ecLdDhl0vBPuSlzIXLBsPofQyWPNTfKBveXCwVl895//+kVo0M7W4L46rRyIPj/Lhc4b/XjAfzYKN1FfCx4WkujQ8XEuK801jmpiolQe6mweqleSaW3QzH9xrwCpZCCP1pHR/fiVeKILaMKa/IfWU0zvmftOATawOqrzRwKH+xv4oywgJW4ryRqrl1A72Ld1b92Sanq717I/ql/I/xjEDtsvtcrT2rCtp9oXMHhuwA/nGd6stpuKp1BNn51n5sVPFpt8WU7xS7wrBrxjQgbaYQpRUPLLjBnSgLaau7qic73pDBnQgMkCEmCBDTJAhJsgQE2SICTLEBBliggwxQYaYIENMkCEmyBATZIgJMsQEGWKCDDFBhpggQ0yQISbIEBNkiAkyxAQZYoIMMUGGmCBDTJAhJsgQE2SICTLEBBliggwxQYaYIENMkCEmyBATZIgJMsQEGWKCDDFBhpggQ0yQISbIEBNkiAkyxAQZYoIMMUGGmCBDTJAhJsgQE2SICTLEBBliggwxQYaYIENMkCEmyBATZIgJMsQEGWKCDDFBhpggsy6mYPbLgA60xdSqlNO8JmJCR9pi6u2NG1HJXxjQgbaYvr5dbIQQxg3oQFtMrz70NxpZfTJ/b5oyYEd8ztcezUxc7632772YvzuNGbBdbpfXbXMnhp8uJ1nrtbs9NGAbQt5KZv5mw3umo6fP/LBK9ICgsJUipChv5fCpU99906EwWvr8/t2AtbLbIdgtA1Yp7iPdw0OvlJ4NDp2cd7+SbnoDXnz4Z6h6Nw1+NpiPGlBwm8yCX1ipN58MDsXfilaK49/uZc1lJ6tUDAAAAABJRU5ErkJggg==",B=""+new URL("Visa-Dn0od9UD.png",import.meta.url).href,b=""+new URL("Mastercard-CJof_f93.png",import.meta.url).href;function N({cardInfo:t}){const g=e=>{if(Math.floor(e/10)===a.VISA)return!0},l=e=>{if(a.MASTER.START<=e&&e<=a.MASTER.END)return!0},m=e=>{const i=parseInt(e.substring(0,2),10);if(g(i))return"visa";if(l(i))return"master"},p=(e=>{const i=m(e);if(i==="visa")return B;if(i==="master")return b})(t.cardNumbers.cardNumber1),A=e=>e.length===1?`0${e}`:e;return r.jsxs(f,{children:[r.jsxs(w,{children:[r.jsx(o,{src:C}),p&&r.jsx(o,{src:p})]}),r.jsxs(E,{children:[r.jsx(d,{children:t.cardNumbers.cardNumber1}),r.jsx(d,{children:t.cardNumbers.cardNumber2}),r.jsx(c,{children:x.repeat(t.cardNumbers.cardNumber3.length)}),r.jsx(c,{children:x.repeat(t.cardNumbers.cardNumber4.length)})]}),r.jsxs(n,{children:[A(t.expiryDate.month),t.expiryDate.year.length>0?u:h,A(t.expiryDate.year)]}),r.jsx(n,{children:t.userName})]})}const f=s.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 215px;
  height: 130px;
  padding: 15px;
  border-radius: 4px;
  background-color: #333333;
  color: white;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
`,w=s.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,o=s.img`
  width: 36px;
  height: 22px;
`,n=s.p`
  display: flex;
  align-items: flex-end;
  height: 30px;
`,E=s(n)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`,d=s.div`
  width: 100px;
  letter-spacing: 3px;
`,c=s.div`
  width: 100px;
  font-size: 11px;
  letter-spacing: 0px;
`;N.__docgenInfo={description:"",methods:[],displayName:"CardView",props:{cardInfo:{required:!0,tsType:{name:"Card"},description:""}}};export{N as C};
