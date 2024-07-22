/*! For license information please see 109.J7hIdh8fQoY.js.LICENSE.txt */
export const id=109;export const ids=[109];export const modules={96996:(e,t,r)=>{r.r(t);var n=r(62659),a=r(98597),i=r(196);r(52287),r(28913);(0,n.A)([(0,i.EM)("update-available-dashboard")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,i.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,i.MZ)({attribute:!1})],key:"supervisor",value:void 0},{kind:"field",decorators:[(0,i.MZ)({type:Boolean})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,i.MZ)({attribute:!1})],key:"route",value:void 0},{kind:"method",key:"render",value:function(){return a.qy` <hass-subpage .hass="${this.hass}" .narrow="${this.narrow}" .route="${this.route}"> <update-available-card .hass="${this.hass}" .supervisor="${this.supervisor}" .route="${this.route}" .narrow="${this.narrow}" @update-complete="${this._updateComplete}"></update-available-card> </hass-subpage> `}},{kind:"method",key:"_updateComplete",value:function(){history.back()}},{kind:"get",static:!0,key:"styles",value:function(){return a.AH`hass-subpage{--app-header-background-color:var(--primary-background-color);--app-header-text-color:var(--sidebar-text-color)}update-available-card{margin:auto;margin-top:16px;margin-bottom:24px;max-width:600px}`}}]}}),a.WF)},12261:(e,t,r)=>{r.r(t);var n=r(62659),a=r(98597),i=r(196),o=r(69760),s=r(77664);r(72214),r(1683);const c={info:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",warning:"M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16",error:"M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",success:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2,4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"};(0,n.A)([(0,i.EM)("ha-alert")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,i.MZ)()],key:"title",value:()=>""},{kind:"field",decorators:[(0,i.MZ)({attribute:"alert-type"})],key:"alertType",value:()=>"info"},{kind:"field",decorators:[(0,i.MZ)({type:Boolean})],key:"dismissable",value:()=>!1},{kind:"method",key:"render",value:function(){return a.qy` <div class="issue-type ${(0,o.H)({[this.alertType]:!0})}" role="alert"> <div class="icon ${this.title?"":"no-title"}"> <slot name="icon"> <ha-svg-icon .path="${c[this.alertType]}"></ha-svg-icon> </slot> </div> <div class="content"> <div class="main-content"> ${this.title?a.qy`<div class="title">${this.title}</div>`:""} <slot></slot> </div> <div class="action"> <slot name="action"> ${this.dismissable?a.qy`<ha-icon-button @click="${this._dismiss_clicked}" label="Dismiss alert" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}"></ha-icon-button>`:""} </slot> </div> </div> </div> `}},{kind:"method",key:"_dismiss_clicked",value:function(){(0,s.r)(this,"alert-dismissed-clicked")}},{kind:"field",static:!0,key:"styles",value:()=>a.AH`.issue-type{position:relative;padding:8px;display:flex}.issue-type::after{position:absolute;top:0;right:0;bottom:0;left:0;opacity:.12;pointer-events:none;content:"";border-radius:4px}.icon{z-index:1}.icon.no-title{align-self:center}.content{display:flex;justify-content:space-between;align-items:center;width:100%;text-align:var(--float-start)}.action{z-index:1;width:min-content;--mdc-theme-primary:var(--primary-text-color)}.main-content{overflow-wrap:anywhere;word-break:break-word;margin-left:8px;margin-right:0;margin-inline-start:8px;margin-inline-end:0}.title{margin-top:2px;font-weight:700}.action ha-icon-button,.action mwc-button{--mdc-theme-primary:var(--primary-text-color);--mdc-icon-button-size:36px}.issue-type.info>.icon{color:var(--info-color)}.issue-type.info::after{background-color:var(--info-color)}.issue-type.warning>.icon{color:var(--warning-color)}.issue-type.warning::after{background-color:var(--warning-color)}.issue-type.error>.icon{color:var(--error-color)}.issue-type.error::after{background-color:var(--error-color)}.issue-type.success>.icon{color:var(--success-color)}.issue-type.success::after{background-color:var(--success-color)}:host ::slotted(ul){margin:0;padding-inline-start:20px}`}]}}),a.WF)},84292:(e,t,r)=>{r.d(t,{LV:()=>p});const n=Symbol("Comlink.proxy"),a=Symbol("Comlink.endpoint"),i=Symbol("Comlink.releaseProxy"),o=Symbol("Comlink.finalizer"),s=Symbol("Comlink.thrown"),c=e=>"object"==typeof e&&null!==e||"function"==typeof e,l=new Map([["proxy",{canHandle:e=>c(e)&&e[n],serialize(e){const{port1:t,port2:r}=new MessageChannel;return u(e,t),[r,[r]]},deserialize:e=>(e.start(),p(e))}],["throw",{canHandle:e=>c(e)&&s in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function u(e,t=globalThis,r=["*"]){t.addEventListener("message",(function a(i){if(!i||!i.data)return;if(!function(e,t){for(const r of e){if(t===r||"*"===r)return!0;if(r instanceof RegExp&&r.test(t))return!0}return!1}(r,i.origin))return void console.warn(`Invalid origin '${i.origin}' for comlink proxy`);const{id:c,type:l,path:p}=Object.assign({path:[]},i.data),h=(i.data.argumentList||[]).map(w);let m;try{const t=p.slice(0,-1).reduce(((e,t)=>e[t]),e),r=p.reduce(((e,t)=>e[t]),e);switch(l){case"GET":m=r;break;case"SET":t[p.slice(-1)[0]]=w(i.data.value),m=!0;break;case"APPLY":m=r.apply(t,h);break;case"CONSTRUCT":m=function(e){return Object.assign(e,{[n]:!0})}(new r(...h));break;case"ENDPOINT":{const{port1:t,port2:r}=new MessageChannel;u(e,r),m=function(e,t){return b.set(e,t),e}(t,[t])}break;case"RELEASE":m=void 0;break;default:return}}catch(e){m={value:e,[s]:0}}Promise.resolve(m).catch((e=>({value:e,[s]:0}))).then((r=>{const[n,i]=k(r);t.postMessage(Object.assign(Object.assign({},n),{id:c}),i),"RELEASE"===l&&(t.removeEventListener("message",a),d(t),o in e&&"function"==typeof e[o]&&e[o]())})).catch((e=>{const[r,n]=k({value:new TypeError("Unserializable return value"),[s]:0});t.postMessage(Object.assign(Object.assign({},r),{id:c}),n)}))})),t.start&&t.start()}function d(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function p(e,t){return y(e,[],t)}function h(e){if(e)throw new Error("Proxy has been released and is not useable")}function m(e){return L(e,{type:"RELEASE"}).then((()=>{d(e)}))}const f=new WeakMap,v="FinalizationRegistry"in globalThis&&new FinalizationRegistry((e=>{const t=(f.get(e)||0)-1;f.set(e,t),0===t&&m(e)}));function y(e,t=[],r=function(){}){let n=!1;const o=new Proxy(r,{get(r,a){if(h(n),a===i)return()=>{!function(e){v&&v.unregister(e)}(o),m(e),n=!0};if("then"===a){if(0===t.length)return{then:()=>o};const r=L(e,{type:"GET",path:t.map((e=>e.toString()))}).then(w);return r.then.bind(r)}return y(e,[...t,a])},set(r,a,i){h(n);const[o,s]=k(i);return L(e,{type:"SET",path:[...t,a].map((e=>e.toString())),value:o},s).then(w)},apply(r,i,o){h(n);const s=t[t.length-1];if(s===a)return L(e,{type:"ENDPOINT"}).then(w);if("bind"===s)return y(e,t.slice(0,-1));const[c,l]=g(o);return L(e,{type:"APPLY",path:t.map((e=>e.toString())),argumentList:c},l).then(w)},construct(r,a){h(n);const[i,o]=g(a);return L(e,{type:"CONSTRUCT",path:t.map((e=>e.toString())),argumentList:i},o).then(w)}});return function(e,t){const r=(f.get(t)||0)+1;f.set(t,r),v&&v.register(e,t,e)}(o,e),o}function g(e){const t=e.map(k);return[t.map((e=>e[0])),(r=t.map((e=>e[1])),Array.prototype.concat.apply([],r))];var r}const b=new WeakMap;function k(e){for(const[t,r]of l)if(r.canHandle(e)){const[n,a]=r.serialize(e);return[{type:"HANDLER",name:t,value:n},a]}return[{type:"RAW",value:e},b.get(e)||[]]}function w(e){switch(e.type){case"HANDLER":return l.get(e.name).deserialize(e.value);case"RAW":return e.value}}function L(e,t,r){return new Promise((n=>{const a=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(r){r.data&&r.data.id&&r.data.id===a&&(e.removeEventListener("message",t),n(r.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:a},t),r)}))}}};
//# sourceMappingURL=109.J7hIdh8fQoY.js.map