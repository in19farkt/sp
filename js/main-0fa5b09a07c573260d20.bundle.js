(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t){},127:function(e,t){},128:function(e,t,n){"use strict";n.r(t);n(95);var a=n(0),r=n.n(a),o=n(11),l=n.n(o),i=n(189),c=n(35),s=n(13),u=n(178),m=n(192),p=n(182),d=n(183),g=n(184),h=n(196),E=n(185),f=n(193),b=n(191),v=n(133);class C extends r.a.Component{constructor(){super(...arguments),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error(e,t)}render(){const{hasError:e,error:t}=this.state,{children:n}=this.props;return e?r.a.createElement("div",null,r.a.createElement("h1",null,"Something went wrong."),r.a.createElement("pre",null,t.toString())):n}}n(46);var S=n(48);const w="#f8f8f8",x="#EFEBF7",k=Object(S.a)(),y=Object(S.a)({overrides:{MuiCssBaseline:{"@global":{html:{boxSizing:"border-box",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",fontSize:16,fontFamily:"OpenSans, sans-serif"},body:{margin:0,fontSize:"1rem",backgroundColor:w},"html, body, #root":{height:"100%"},"#root":{zIndex:1,position:"relative"},"*, *::before, *::after":{boxSizing:"inherit"},"@media print":{body:{backgroundColor:"#fff"}},"#walletconnect-wrapper":{zIndex:k.zIndex.modal,position:"relative"}}}}});var F=n(47);Object(F.a)(e=>({root:{display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"0.25rem",backgroundColor:x,textAlign:"center","&$isSmall":{padding:e.spacing(.5,1.5),minHeight:e.spacing(4)},"&$isMedium":{padding:e.spacing(1.5,3),minHeight:e.spacing(6)}},isSmall:{},isMedium:{}}));n(188),n(187);Object(F.a)({linearProgress:{flexGrow:1}});var P=n(80),j=n(81),R=n.n(j),O=n(190);const _=Object(F.a)({icon:{fontSize:20}});function z(e){const{children:t}=e,n=_(),r=a.createRef(),o=a.useCallback(e=>()=>{r.current&&r.current.closeSnackbar(e)},[r.current]),l=a.useMemo(e=>()=>a.createElement(O.a,{key:"close","aria-label":"close",color:"inherit",onClick:o(e)},a.createElement(R.a,{className:n.icon})),[o,n]);return a.createElement(P.SnackbarProvider,{maxSnack:3,ref:r,anchorOrigin:{vertical:"bottom",horizontal:"right"},action:l},t)}var I=n(63),D=n.n(I);const $={home:null,price:{supplier:Object(I.getParam)(null)},demo:null},N=D()($);function V(){return a.createElement(s.b,{path:"/:page"},({match:e})=>a.createElement(f.a,{value:e&&e.params.page||"home"},a.createElement(E.a,{label:"Home",component:c.b,value:N.home.getElementKey(),to:N.home.getRedirectPath()}),a.createElement(E.a,{label:"Price",component:c.b,value:N.price.getElementKey(),to:N.price.getRedirectPath()}),!1))}function H(){return a.createElement(u.a,{position:"static"},a.createElement(p.a,null,a.createElement(V,null)))}function M(){return a.createElement("div",null,a.createElement(v.a,null,"Home page"))}var B,A=n(40),J=n(16),K=n.n(J);function G(e){return e.replace(/"/g,"")}function L(e){return e.replace(/\//g,"\\").slice(0,2500)}function T(e,t,n){return e&&e.split(n||"\n").map(e=>L(e.trim())).filter(e=>{var n;return!!e&&!(null===(n=t)||void 0===n?void 0:n.test(e))}).join("; ")}function W(e){return Object(A.a)(this,void 0,void 0,(function*(){return new Promise((t,n)=>{const a=new FileReader;a.onabort=n,a.onerror=n,a.onload=e=>{var a;return(null===(a=e.target)||void 0===a?void 0:a.result)&&"string"!=typeof e.target.result?t(K.a.read(e.target.result,{type:"buffer",codepage:1251})):n(new Error("File parsing failed"))},a.readAsArrayBuffer(e)})}))}function q(e,t){K.a.writeFile(e,`${(new Date).toLocaleDateString()} - ${t} - Прайс.xlsx`)}!function(e){e[e.VendorCode=0]="VendorCode",e[e.Name=1]="Name",e[e.Price=2]="Price",e[e.Category=3]="Category",e[e.Sizes=4]="Sizes",e[e.Color=5]="Color",e[e.Features=6]="Features",e[e.Description=7]="Description",e[e.Images=8]="Images"}(B||(B={}));const Q=/^(размер:|цвет:).+$/i;function U(){const[e,t]=a.useState(null),n=a.useCallback(e=>{const n=e.target.files&&e.target.files[0];t(n)},[]);return a.useEffect(()=>{(()=>Object(A.a)(this,void 0,void 0,(function*(){if(!e)return;const t=yield W(e),n=K.a.utils.sheet_to_json(t.Sheets.Sheet1).map(e=>({[B.VendorCode]:e["Артикул"],[B.Name]:G(e["Наименование"]),[B.Price]:Math.ceil(e["Цена, руб."]),[B.Category]:e["Название раздела"],[B.Sizes]:X(e["РАЗМЕР"]),[B.Color]:e["ЦВЕТ"],[B.Features]:T(e["Все характеристики"],Q),[B.Description]:L(e["Описание"]||""),[B.Images]:e["Изображение"]})),a=K.a.utils.json_to_sheet(n,{skipHeader:!0}),r=K.a.utils.book_new();K.a.utils.book_append_sheet(r,a,"Sheet1"),q(r,"Пальто Пенза")})))()},[e]),a.createElement(g.a,{container:!0,spacing:2},a.createElement(g.a,{item:!0},a.createElement(v.a,null,"Выгрузка Turbo.Parser (.csv):")),a.createElement(g.a,{item:!0},a.createElement("input",{type:"file",onChange:n,accept:".csv"})),a.createElement(g.a,{item:!0}))}function X(e){return String(e).replace(/\//g,"-").replace(/;/g,"/")}const Y=Object(F.a)({selector:{width:200}}),Z=[{value:"palto-penza",label:"Пальто Пенза"},{value:"optolider",label:"ОптоЛидер"},{value:"saks",label:"САКС Игрушки"}];const ee=Object(s.g)((function(e){const{match:t}=e,n=Y();return a.createElement(b.a,{select:!0,label:"Выберите поставщика",value:t.params.supplier,className:n.selector,variant:"outlined"},Z.map(e=>a.createElement(h.a,{component:c.b,key:e.value,value:e.value,to:N.price.supplier.getRedirectPath({supplier:e.value})},e.label)))}));function te(){return a.createElement(g.a,{container:!0,spacing:2},a.createElement(g.a,{item:!0},a.createElement(v.a,null,"Coming Soon")))}var ne,ae=n(194);function re(){const[e,t]=a.useState(null),n=a.useCallback(e=>{const n=e.target.files&&e.target.files[0];t(n)},[]);return a.useEffect(()=>{(()=>Object(A.a)(this,void 0,void 0,(function*(){if(!e)return;const t=yield W(e);let n=Object(ae.a)((e,t)=>e[ne.VendorCode]===t[ne.VendorCode],(a=t,K.a.utils.sheet_to_json(a.Sheets[a.SheetNames[0]]).map(e=>({[ne.VendorCode]:ie(e["Ссылка"]),[ne.Name]:G(e["Наименование"]),[ne.Price]:Math.ceil(e["Цена, руб."]),[ne.Category]:e["Название раздела"],[ne.Color]:ce(e["ЦВЕТ"]||""),[ne.Description]:L(e["Описание"]||""),[ne.Features]:T(e["Все характеристики"]||"",oe),[ne.Images]:e["Изображение"],[ne.RowCount]:""}))));var a;n=n.filter(e=>!!e[ne.Price]);const{withRow:r,withoutRow:o}=function(e){const t=e.filter(e=>!/Заказ от: \d+? шт/.test(e[ne.Features].toString())||e[ne.Features].toString().includes("Заказ от: 1 шт")).map(e=>Object.assign(Object.assign({},e),{[ne.Features]:T(e[ne.Features].toString(),le,"; ")}));return{withRow:e.filter(e=>/Заказ от: \d+? шт/.test(e[ne.Features].toString())&&!e[ne.Features].toString().includes("Заказ от: 1 шт")).map(e=>Object.assign(Object.assign({},e),{[ne.RowCount]:e[ne.Features].toString().replace(/^.*?Заказ от: (\d+?) шт.*?$/,"$1"),[ne.Features]:T(e[ne.Features].toString(),le,"; ")})),withoutRow:t}}(n),l=K.a.utils.json_to_sheet(r,{skipHeader:!0}),i=K.a.utils.json_to_sheet(o,{skipHeader:!0}),c=K.a.utils.book_new();K.a.utils.book_append_sheet(c,l,"Sheet1");const s=K.a.utils.book_new();K.a.utils.book_append_sheet(s,i,"Sheet1"),q(c,"ОптоЛидер Ряды"),q(s,"ОптоЛидер")})))()},[e]),a.createElement(g.a,{container:!0,spacing:2},a.createElement(g.a,{item:!0,xs:4},a.createElement(v.a,null,"Выгрузка всех товаров (один файл .xls):")),a.createElement(g.a,{item:!0,xs:8},a.createElement("input",{type:"file",onChange:n,accept:".xls"})))}!function(e){e[e.VendorCode=0]="VendorCode",e[e.Name=1]="Name",e[e.Price=2]="Price",e[e.Category=3]="Category",e[e.Color=4]="Color",e[e.Description=5]="Description",e[e.Features=6]="Features",e[e.Images=7]="Images",e[e.RowCount=8]="RowCount"}(ne||(ne={}));const oe=/^(Дропшиппинг|от \d+? шт).+$/i,le=/^(Заказ от: \d+? шт).*$/i;function ie(e){return e.replace(/^.+?\/product\/(.+?)\//,"$1")}function ce(e){return String(e).replace(/,/g,"/")}function se(){return a.createElement(g.a,{container:!0,spacing:2},a.createElement(g.a,{item:!0,xs:12},a.createElement(g.a,{container:!0,spacing:2},a.createElement(g.a,{item:!0},a.createElement(v.a,{variant:"h4"},"Обработка прайсов")),a.createElement(g.a,{item:!0},a.createElement(ee,null)))),a.createElement(g.a,{item:!0,xs:12},a.createElement(s.d,null,a.createElement(s.b,{exact:!0,path:N.price.supplier.getRedirectPath({supplier:"palto-penza"}),component:U}),a.createElement(s.b,{exact:!0,path:N.price.supplier.getRedirectPath({supplier:"optolider"}),component:re}),a.createElement(s.b,{exact:!0,path:N.price.supplier.getRedirectPath({supplier:"saks"}),component:te}))))}function ue(){return a.createElement(a.Fragment,null,a.createElement(H,null),a.createElement(m.a,{clone:!0,mt:{xs:2,lg:3}},a.createElement(p.a,null,a.createElement(s.d,null,!1,a.createElement(s.b,{exact:!0,path:N.price.getRoutePath()},a.createElement(s.a,{to:N.price.supplier.getRedirectPath({supplier:"palto-penza"})})),a.createElement(s.b,{exact:!0,path:N.price.supplier.getRoutePath(),component:se}),a.createElement(s.b,{exact:!0,path:N.home.getRoutePath(),component:M}),a.createElement(s.a,{to:N.price.getRedirectPath()})))))}class me{}const pe=r.a.createContext(null);var de;de=r.a.createElement((function(){const e=new me;return r.a.createElement(C,null,r.a.createElement(c.a,{basename:"/sp"},r.a.createElement(z,null,r.a.createElement(i.a,{theme:y},r.a.createElement(pe.Provider,{value:e},r.a.createElement(d.a,null),r.a.createElement(ue,null))))))}),null),l.a.render(de,window.document.getElementById("root"))},79:function(e,t){}},[[128,1,2]]]);