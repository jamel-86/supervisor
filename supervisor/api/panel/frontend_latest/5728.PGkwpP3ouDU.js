export const id=5728;export const ids=[5728];export const modules={38696:(e,t,i)=>{i.d(t,{H:()=>k});let o=function(e){return e[e.Null=0]="Null",e[e.Backspace=8]="Backspace",e[e.Tab=9]="Tab",e[e.LineFeed=10]="LineFeed",e[e.CarriageReturn=13]="CarriageReturn",e[e.Space=32]="Space",e[e.ExclamationMark=33]="ExclamationMark",e[e.DoubleQuote=34]="DoubleQuote",e[e.Hash=35]="Hash",e[e.DollarSign=36]="DollarSign",e[e.PercentSign=37]="PercentSign",e[e.Ampersand=38]="Ampersand",e[e.SingleQuote=39]="SingleQuote",e[e.OpenParen=40]="OpenParen",e[e.CloseParen=41]="CloseParen",e[e.Asterisk=42]="Asterisk",e[e.Plus=43]="Plus",e[e.Comma=44]="Comma",e[e.Dash=45]="Dash",e[e.Period=46]="Period",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Colon=58]="Colon",e[e.Semicolon=59]="Semicolon",e[e.LessThan=60]="LessThan",e[e.Equals=61]="Equals",e[e.GreaterThan=62]="GreaterThan",e[e.QuestionMark=63]="QuestionMark",e[e.AtSign=64]="AtSign",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.G=71]="G",e[e.H=72]="H",e[e.I=73]="I",e[e.J=74]="J",e[e.K=75]="K",e[e.L=76]="L",e[e.M=77]="M",e[e.N=78]="N",e[e.O=79]="O",e[e.P=80]="P",e[e.Q=81]="Q",e[e.R=82]="R",e[e.S=83]="S",e[e.T=84]="T",e[e.U=85]="U",e[e.V=86]="V",e[e.W=87]="W",e[e.X=88]="X",e[e.Y=89]="Y",e[e.Z=90]="Z",e[e.OpenSquareBracket=91]="OpenSquareBracket",e[e.Backslash=92]="Backslash",e[e.CloseSquareBracket=93]="CloseSquareBracket",e[e.Caret=94]="Caret",e[e.Underline=95]="Underline",e[e.BackTick=96]="BackTick",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.g=103]="g",e[e.h=104]="h",e[e.i=105]="i",e[e.j=106]="j",e[e.k=107]="k",e[e.l=108]="l",e[e.m=109]="m",e[e.n=110]="n",e[e.o=111]="o",e[e.p=112]="p",e[e.q=113]="q",e[e.r=114]="r",e[e.s=115]="s",e[e.t=116]="t",e[e.u=117]="u",e[e.v=118]="v",e[e.w=119]="w",e[e.x=120]="x",e[e.y=121]="y",e[e.z=122]="z",e[e.OpenCurlyBrace=123]="OpenCurlyBrace",e[e.Pipe=124]="Pipe",e[e.CloseCurlyBrace=125]="CloseCurlyBrace",e[e.Tilde=126]="Tilde",e}({});const a=128;function r(){const e=[],t=[];for(let e=0;e<=a;e++)t[e]=0;for(let i=0;i<=a;i++)e.push(t.slice(0));return e}function n(e,t){if(t<0||t>=e.length)return!1;const i=e.codePointAt(t);switch(i){case o.Underline:case o.Dash:case o.Period:case o.Space:case o.Slash:case o.Backslash:case o.SingleQuote:case o.DoubleQuote:case o.Colon:case o.DollarSign:case o.LessThan:case o.OpenParen:case o.OpenSquareBracket:return!0;case void 0:return!1;default:return(a=i)>=127462&&a<=127487||8986===a||8987===a||9200===a||9203===a||a>=9728&&a<=10175||11088===a||11093===a||a>=127744&&a<=128591||a>=128640&&a<=128764||a>=128992&&a<=129003||a>=129280&&a<=129535||a>=129648&&a<=129750?!0:!1}var a}function l(e,t){if(t<0||t>=e.length)return!1;switch(e.charCodeAt(t)){case o.Space:case o.Tab:return!0;default:return!1}}function s(e,t,i){return t[e]!==i[e]}var d=function(e){return e[e.Diag=1]="Diag",e[e.Left=2]="Left",e[e.LeftLeft=3]="LeftLeft",e}(d||{});function c(e,t,i,o,r,n,l){const c=e.length>a?a:e.length,m=o.length>a?a:o.length;if(i>=c||n>=m||c-i>m-n)return;if(!function(e,t,i,o,a,r,n=!1){for(;t<i&&a<r;)e[t]===o[a]&&(n&&(h[t]=a),t+=1),a+=1;return t===i}(t,i,c,r,n,m,!0))return;let k;!function(e,t,i,o,a,r){let n=e-1,l=t-1;for(;n>=i&&l>=o;)a[n]===r[l]&&(v[n]=l,n--),l--}(c,m,i,n,t,r);let g,y,M=1;const _=[!1];for(k=1,g=i;g<c;k++,g++){const a=h[g],l=v[g],s=g+1<c?v[g+1]:m;for(M=a-n+1,y=a;y<s;M++,y++){let s=Number.MIN_SAFE_INTEGER,c=!1;y<=l&&(s=u(e,t,g,i,o,r,y,m,n,0===b[k-1][M-1],_));let h=0;s!==Number.MAX_SAFE_INTEGER&&(c=!0,h=s+f[k-1][M-1]);const v=y>a,O=v?f[k][M-1]+(b[k][M-1]>0?-5:0):0,x=y>a+1&&b[k][M-1]>0,L=x?f[k][M-2]+(b[k][M-2]>0?-5:0):0;if(x&&(!v||L>=O)&&(!c||L>=h))f[k][M]=L,p[k][M]=d.LeftLeft,b[k][M]=0;else if(v&&(!c||O>=h))f[k][M]=O,p[k][M]=d.Left,b[k][M]=0;else{if(!c)throw new Error("not possible");f[k][M]=h,p[k][M]=d.Diag,b[k][M]=b[k-1][M-1]+1}}}if(!_[0]&&!l)return;k--,M--;const O=[f[k][M],n];let x=0,L=0;for(;k>=1;){let e=M;do{const t=p[k][e];if(t===d.LeftLeft)e-=2;else{if(t!==d.Left)break;e-=1}}while(e>=1);x>1&&t[i+k-1]===r[n+M-1]&&!s(e+n-1,o,r)&&x+1>b[k][e]&&(e=M),e===M?x++:x=1,L||(L=e),k--,M=e-1,O.push(M)}m===c&&(O[0]+=2);const C=L-c;return O[0]-=C,O}function u(e,t,i,o,a,r,d,c,u,h,v){if(t[i]!==r[d])return Number.MIN_SAFE_INTEGER;let b=1,f=!1;return d===i-o?b=e[i]===a[d]?7:5:!s(d,a,r)||0!==d&&s(d-1,a,r)?!n(r,d)||0!==d&&n(r,d-1)?(n(r,d-1)||l(r,d-1))&&(b=5,f=!0):b=5:(b=e[i]===a[d]?7:5,f=!0),b>1&&i===o&&(v[0]=!0),f||(f=s(d,a,r)||n(r,d-1)||l(r,d-1)),i===o?d>u&&(b-=f?3:5):b+=h?f?2:0:f?0:1,d+1===c&&(b-=f?3:5),b}const h=m(256),v=m(256),b=r(),f=r(),p=r();function m(e){const t=[];for(let i=0;i<=e;i++)t[i]=0;return t}const k=(e,t)=>t.map((t=>(t.score=((e,t)=>{let i=Number.NEGATIVE_INFINITY;for(const o of t.strings){const t=c(e,e.toLowerCase(),0,o,o.toLowerCase(),0,!0);if(!t)continue;const a=0===t[0]?1:t[0];a>i&&(i=a)}if(i!==Number.NEGATIVE_INFINITY)return i})(e,t),t))).filter((e=>void 0!==e.score)).sort((({score:e=0},{score:t=0})=>e>t?-1:e<t?1:0))},35641:(e,t,i)=>{i.a(e,(async(e,t)=>{try{var o=i(62659),a=i(76504),r=i(80792),n=i(54854),l=i(66505),s=i(45584),d=i(98597),c=i(196),u=i(79278),h=i(77664),v=(i(72214),i(39335),i(42398),e([l]));l=(v.then?(await v)():v)[0];const b="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",f="M7,10L12,15L17,10H7Z",p="M7,15L12,10L17,15H7Z";(0,s.SF)("vaadin-combo-box-item",d.AH`:host{padding:0!important}:host([focused]:not([disabled])){background-color:rgba(var(--rgb-primary-text-color,0,0,0),.12)}:host([selected]:not([disabled])){background-color:transparent;color:var(--mdc-theme-primary);--mdc-ripple-color:var(--mdc-theme-primary);--mdc-theme-text-primary-on-background:var(--mdc-theme-primary)}:host([selected]:not([disabled])):before{background-color:var(--mdc-theme-primary);opacity:.12;content:"";position:absolute;top:0;left:0;width:100%;height:100%}:host([selected][focused]:not([disabled])):before{opacity:.24}:host(:hover:not([disabled])){background-color:transparent}[part=content]{width:100%}[part=checkmark]{display:none}`);(0,o.A)([(0,c.EM)("ha-combo-box")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,c.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,c.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,c.MZ)()],key:"value",value:void 0},{kind:"field",decorators:[(0,c.MZ)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,c.MZ)()],key:"validationMessage",value:void 0},{kind:"field",decorators:[(0,c.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,c.MZ)({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[(0,c.MZ)({type:Boolean})],key:"invalid",value:()=>!1},{kind:"field",decorators:[(0,c.MZ)({type:Boolean})],key:"icon",value:()=>!1},{kind:"field",decorators:[(0,c.MZ)({attribute:!1})],key:"items",value:void 0},{kind:"field",decorators:[(0,c.MZ)({attribute:!1})],key:"filteredItems",value:void 0},{kind:"field",decorators:[(0,c.MZ)({attribute:!1})],key:"dataProvider",value:void 0},{kind:"field",decorators:[(0,c.MZ)({attribute:"allow-custom-value",type:Boolean})],key:"allowCustomValue",value:()=>!1},{kind:"field",decorators:[(0,c.MZ)({attribute:"item-value-path"})],key:"itemValuePath",value:()=>"value"},{kind:"field",decorators:[(0,c.MZ)({attribute:"item-label-path"})],key:"itemLabelPath",value:()=>"label"},{kind:"field",decorators:[(0,c.MZ)({attribute:"item-id-path"})],key:"itemIdPath",value:void 0},{kind:"field",decorators:[(0,c.MZ)({attribute:!1})],key:"renderer",value:void 0},{kind:"field",decorators:[(0,c.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,c.MZ)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,c.MZ)({type:Boolean,reflect:!0})],key:"opened",value:()=>!1},{kind:"field",decorators:[(0,c.P)("vaadin-combo-box-light",!0)],key:"_comboBox",value:void 0},{kind:"field",decorators:[(0,c.P)("ha-textfield",!0)],key:"_inputElement",value:void 0},{kind:"field",key:"_overlayMutationObserver",value:void 0},{kind:"field",key:"_bodyMutationObserver",value:void 0},{kind:"method",key:"open",value:async function(){var e;await this.updateComplete,null===(e=this._comboBox)||void 0===e||e.open()}},{kind:"method",key:"focus",value:async function(){var e,t;await this.updateComplete,await(null===(e=this._inputElement)||void 0===e?void 0:e.updateComplete),null===(t=this._inputElement)||void 0===t||t.focus()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.A)((0,r.A)(i.prototype),"disconnectedCallback",this).call(this),this._overlayMutationObserver&&(this._overlayMutationObserver.disconnect(),this._overlayMutationObserver=void 0),this._bodyMutationObserver&&(this._bodyMutationObserver.disconnect(),this._bodyMutationObserver=void 0)}},{kind:"get",key:"selectedItem",value:function(){return this._comboBox.selectedItem}},{kind:"method",key:"setInputValue",value:function(e){this._comboBox.value=e}},{kind:"method",key:"render",value:function(){var e;return d.qy` <vaadin-combo-box-light .itemValuePath="${this.itemValuePath}" .itemIdPath="${this.itemIdPath}" .itemLabelPath="${this.itemLabelPath}" .items="${this.items}" .value="${this.value||""}" .filteredItems="${this.filteredItems}" .dataProvider="${this.dataProvider}" .allowCustomValue="${this.allowCustomValue}" .disabled="${this.disabled}" .required="${this.required}" ${(0,n.d)(this.renderer||this._defaultRowRenderer)} @opened-changed="${this._openedChanged}" @filter-changed="${this._filterChanged}" @value-changed="${this._valueChanged}" attr-for-value="value"> <ha-textfield label="${(0,u.J)(this.label)}" placeholder="${(0,u.J)(this.placeholder)}" ?disabled="${this.disabled}" ?required="${this.required}" validationMessage="${(0,u.J)(this.validationMessage)}" .errorMessage="${this.errorMessage}" class="input" autocapitalize="none" autocomplete="off" autocorrect="off" input-spellcheck="false" .suffix="${d.qy`<div style="width:28px" role="none presentation"></div>`}" .icon="${this.icon}" .invalid="${this.invalid}" .helper="${this.helper}" helperPersistent> <slot name="icon" slot="leadingIcon"></slot> </ha-textfield> ${this.value?d.qy`<ha-svg-icon role="button" tabindex="-1" aria-label="${(0,u.J)(null===(e=this.hass)||void 0===e?void 0:e.localize("ui.common.clear"))}" class="clear-button" .path="${b}" @click="${this._clearValue}"></ha-svg-icon>`:""} <ha-svg-icon role="button" tabindex="-1" aria-label="${(0,u.J)(this.label)}" aria-expanded="${this.opened?"true":"false"}" class="toggle-button" .path="${this.opened?p:f}" @click="${this._toggleOpen}"></ha-svg-icon> </vaadin-combo-box-light> `}},{kind:"field",key:"_defaultRowRenderer",value(){return e=>d.qy`<ha-list-item> ${this.itemLabelPath?e[this.itemLabelPath]:e} </ha-list-item>`}},{kind:"method",key:"_clearValue",value:function(e){e.stopPropagation(),(0,h.r)(this,"value-changed",{value:void 0})}},{kind:"method",key:"_toggleOpen",value:function(e){var t,i;this.opened?(null===(t=this._comboBox)||void 0===t||t.close(),e.stopPropagation()):null===(i=this._comboBox)||void 0===i||i.inputElement.focus()}},{kind:"method",key:"_openedChanged",value:function(e){e.stopPropagation();const t=e.detail.value;if(setTimeout((()=>{this.opened=t}),0),(0,h.r)(this,"opened-changed",{value:e.detail.value}),t){const e=document.querySelector("vaadin-combo-box-overlay");e&&this._removeInert(e),this._observeBody()}else{var i;null===(i=this._bodyMutationObserver)||void 0===i||i.disconnect(),this._bodyMutationObserver=void 0}}},{kind:"method",key:"_observeBody",value:function(){"MutationObserver"in window&&!this._bodyMutationObserver&&(this._bodyMutationObserver=new MutationObserver((e=>{e.forEach((e=>{e.addedNodes.forEach((e=>{"VAADIN-COMBO-BOX-OVERLAY"===e.nodeName&&this._removeInert(e)})),e.removedNodes.forEach((e=>{var t;"VAADIN-COMBO-BOX-OVERLAY"===e.nodeName&&(null===(t=this._overlayMutationObserver)||void 0===t||t.disconnect(),this._overlayMutationObserver=void 0)}))}))})),this._bodyMutationObserver.observe(document.body,{childList:!0}))}},{kind:"method",key:"_removeInert",value:function(e){var t;if(e.inert)return e.inert=!1,null===(t=this._overlayMutationObserver)||void 0===t||t.disconnect(),void(this._overlayMutationObserver=void 0);"MutationObserver"in window&&!this._overlayMutationObserver&&(this._overlayMutationObserver=new MutationObserver((e=>{e.forEach((e=>{if("inert"===e.attributeName){const i=e.target;var t;if(i.inert)null===(t=this._overlayMutationObserver)||void 0===t||t.disconnect(),this._overlayMutationObserver=void 0,i.inert=!1}}))})),this._overlayMutationObserver.observe(e,{attributes:!0}))}},{kind:"method",key:"_filterChanged",value:function(e){e.stopPropagation(),(0,h.r)(this,"filter-changed",{value:e.detail.value})}},{kind:"method",key:"_valueChanged",value:function(e){e.stopPropagation(),this.allowCustomValue||(this._comboBox._closeOnBlurIsPrevented=!0);const t=e.detail.value;t!==this.value&&(0,h.r)(this,"value-changed",{value:t||void 0})}},{kind:"get",static:!0,key:"styles",value:function(){return d.AH`:host{display:block;width:100%}vaadin-combo-box-light{position:relative;--vaadin-combo-box-overlay-max-height:calc(45vh - 56px)}ha-textfield{width:100%}ha-textfield>ha-icon-button{--mdc-icon-button-size:24px;padding:2px;color:var(--secondary-text-color)}ha-svg-icon{color:var(--input-dropdown-icon-color);position:absolute;cursor:pointer}.toggle-button{right:12px;top:-10px;inset-inline-start:initial;inset-inline-end:12px;direction:var(--direction)}:host([opened]) .toggle-button{color:var(--primary-color)}.clear-button{--mdc-icon-size:20px;top:-7px;right:36px;inset-inline-start:initial;inset-inline-end:36px;direction:var(--direction)}`}}]}}),d.WF);t()}catch(e){t(e)}}))},86176:()=>{Element.prototype.toggleAttribute||(Element.prototype.toggleAttribute=function(e,t){return void 0!==t&&(t=!!t),this.hasAttribute(e)?!!t||(this.removeAttribute(e),!1):!1!==t&&(this.setAttribute(e,""),!0)})},74808:(e,t,i)=>{i.a(e,(async(e,t)=>{try{"function"!=typeof window.ResizeObserver&&(window.ResizeObserver=(await i.e(6071).then(i.bind(i,76071))).default),t()}catch(e){t(e)}}),1)}};
//# sourceMappingURL=5728.PGkwpP3ouDU.js.map