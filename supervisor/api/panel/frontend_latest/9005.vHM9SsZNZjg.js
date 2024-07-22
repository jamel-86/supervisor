export const id=9005;export const ids=[9005];export const modules={47147:(e,i,t)=>{t.a(e,(async(e,i)=>{try{var a=t(62659),s=t(98597),d=t(196),n=t(45081),l=t(77664),r=t(47038),o=t(95507),c=t(38696),u=t(1169),h=t(35641),v=(t(39335),e([h]));h=(v.then?(await v)():v)[0];const p=e=>s.qy`<ha-list-item .twoline="${!!e.area}"> <span>${e.name}</span> <span slot="secondary">${e.area}</span> </ha-list-item>`;(0,a.A)([(0,d.EM)("ha-device-picker")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,d.MZ)()],key:"value",value:void 0},{kind:"field",decorators:[(0,d.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,d.MZ)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,d.MZ)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,d.MZ)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,d.MZ)({type:Array,attribute:"exclude-devices"})],key:"excludeDevices",value:void 0},{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"deviceFilter",value:void 0},{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"entityFilter",value:void 0},{kind:"field",decorators:[(0,d.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,d.MZ)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,d.wk)()],key:"_opened",value:void 0},{kind:"field",decorators:[(0,d.P)("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"field",key:"_init",value:()=>!1},{kind:"field",key:"_getDevices",value(){return(0,n.A)(((e,i,t,a,s,d,n,l,c)=>{if(!e.length)return[{id:"no_devices",area:"",name:this.hass.localize("ui.components.device-picker.no_devices"),strings:[]}];let h={};(a||s||d||l)&&(h=(0,u.g2)(t));let v=e.filter((e=>e.id===this.value||!e.disabled_by));a&&(v=v.filter((e=>{const i=h[e.id];return!(!i||!i.length)&&h[e.id].some((e=>a.includes((0,r.m)(e.entity_id))))}))),s&&(v=v.filter((e=>{const i=h[e.id];return!i||!i.length||t.every((e=>!s.includes((0,r.m)(e.entity_id))))}))),c&&(v=v.filter((e=>!c.includes(e.id)))),d&&(v=v.filter((e=>{const i=h[e.id];return!(!i||!i.length)&&h[e.id].some((e=>{const i=this.hass.states[e.entity_id];return!!i&&(i.attributes.device_class&&d.includes(i.attributes.device_class))}))}))),l&&(v=v.filter((e=>{const i=h[e.id];return!(!i||!i.length)&&i.some((e=>{const i=this.hass.states[e.entity_id];return!!i&&l(i)}))}))),n&&(v=v.filter((e=>e.id===this.value||n(e))));const p=v.map((e=>{const t=(0,u.xn)(e,this.hass,h[e.id]);return{id:e.id,name:t,area:e.area_id&&i[e.area_id]?i[e.area_id].name:this.hass.localize("ui.components.device-picker.no_area"),strings:[t||""]}}));return p.length?1===p.length?p:p.sort(((e,i)=>(0,o.x)(e.name||"",i.name||"",this.hass.locale.language))):[{id:"no_devices",area:"",name:this.hass.localize("ui.components.device-picker.no_match"),strings:[]}]}))}},{kind:"method",key:"open",value:async function(){var e;await this.updateComplete,await(null===(e=this.comboBox)||void 0===e?void 0:e.open())}},{kind:"method",key:"focus",value:async function(){var e;await this.updateComplete,await(null===(e=this.comboBox)||void 0===e?void 0:e.focus())}},{kind:"method",key:"updated",value:function(e){if(!this._init&&this.hass||this._init&&e.has("_opened")&&this._opened){this._init=!0;const e=this._getDevices(Object.values(this.hass.devices),this.hass.areas,Object.values(this.hass.entities),this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter,this.entityFilter,this.excludeDevices);this.comboBox.items=e,this.comboBox.filteredItems=e}}},{kind:"method",key:"render",value:function(){return s.qy` <ha-combo-box .hass="${this.hass}" .label="${void 0===this.label&&this.hass?this.hass.localize("ui.components.device-picker.device"):this.label}" .value="${this._value}" .helper="${this.helper}" .renderer="${p}" .disabled="${this.disabled}" .required="${this.required}" item-id-path="id" item-value-path="id" item-label-path="name" @opened-changed="${this._openedChanged}" @value-changed="${this._deviceChanged}" @filter-changed="${this._filterChanged}"></ha-combo-box> `}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_filterChanged",value:function(e){const i=e.target,t=e.detail.value.toLowerCase();i.filteredItems=t.length?(0,c.H)(t,i.items||[]):i.items}},{kind:"method",key:"_deviceChanged",value:function(e){e.stopPropagation();let i=e.detail.value;"no_devices"===i&&(i=""),i!==this._value&&this._setValue(i)}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value}},{kind:"method",key:"_setValue",value:function(e){this.value=e,setTimeout((()=>{(0,l.r)(this,"value-changed",{value:e}),(0,l.r)(this,"change")}),0)}}]}}),s.WF);i()}catch(e){i(e)}}))},93302:(e,i,t)=>{t.a(e,(async(e,i)=>{try{var a=t(62659),s=t(98597),d=t(196),n=t(77664),l=t(47147),r=e([l]);l=(r.then?(await r)():r)[0];(0,a.A)([(0,d.EM)("ha-devices-picker")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,d.MZ)({type:Array})],key:"value",value:void 0},{kind:"field",decorators:[(0,d.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,d.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,d.MZ)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,d.MZ)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,d.MZ)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,d.MZ)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,d.MZ)({attribute:"picked-device-label"})],key:"pickedDeviceLabel",value:void 0},{kind:"field",decorators:[(0,d.MZ)({attribute:"pick-device-label"})],key:"pickDeviceLabel",value:void 0},{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"deviceFilter",value:void 0},{kind:"field",decorators:[(0,d.MZ)({attribute:!1})],key:"entityFilter",value:void 0},{kind:"method",key:"render",value:function(){if(!this.hass)return s.s6;const e=this._currentDevices;return s.qy` ${e.map((e=>s.qy` <div> <ha-device-picker allow-custom-entity .curValue="${e}" .hass="${this.hass}" .deviceFilter="${this.deviceFilter}" .entityFilter="${this.entityFilter}" .includeDomains="${this.includeDomains}" .excludeDomains="${this.excludeDomains}" .includeDeviceClasses="${this.includeDeviceClasses}" .value="${e}" .label="${this.pickedDeviceLabel}" .disabled="${this.disabled}" @value-changed="${this._deviceChanged}"></ha-device-picker> </div> `))} <div> <ha-device-picker allow-custom-entity .hass="${this.hass}" .helper="${this.helper}" .deviceFilter="${this.deviceFilter}" .entityFilter="${this.entityFilter}" .includeDomains="${this.includeDomains}" .excludeDomains="${this.excludeDomains}" .excludeDevices="${e}" .includeDeviceClasses="${this.includeDeviceClasses}" .label="${this.pickDeviceLabel}" .disabled="${this.disabled}" .required="${this.required&&!e.length}" @value-changed="${this._addDevice}"></ha-device-picker> </div> `}},{kind:"get",key:"_currentDevices",value:function(){return this.value||[]}},{kind:"method",key:"_updateDevices",value:async function(e){(0,n.r)(this,"value-changed",{value:e}),this.value=e}},{kind:"method",key:"_deviceChanged",value:function(e){e.stopPropagation();const i=e.currentTarget.curValue,t=e.detail.value;t!==i&&(void 0===t?this._updateDevices(this._currentDevices.filter((e=>e!==i))):this._updateDevices(this._currentDevices.map((e=>e===i?t:e))))}},{kind:"method",key:"_addDevice",value:async function(e){e.stopPropagation();const i=e.detail.value;if(e.currentTarget.value="",!i)return;const t=this._currentDevices;t.includes(i)||this._updateDevices([...t,i])}},{kind:"field",static:!0,key:"styles",value:()=>s.AH`div{margin-top:8px}`}]}}),s.WF);i()}catch(e){i(e)}}))},39335:(e,i,t)=>{var a=t(62659),s=t(76504),d=t(80792),n=t(46175),l=t(45592),r=t(98597),o=t(196);(0,a.A)([(0,o.EM)("ha-list-item")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,s.A)((0,d.A)(t.prototype),"renderRipple",this).call(this)}},{kind:"get",static:!0,key:"styles",value:function(){return[l.R,r.AH`:host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-inline-start:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px));padding-inline-end:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)!important}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)!important}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center;flex-shrink:0}:host([graphic=icon]:not([twoline])) .mdc-deprecated-list-item__graphic{margin-inline-end:var(--mdc-list-item-graphic-margin,20px)!important}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}`,"rtl"===document.dir?r.AH`span.material-icons:first-of-type,span.material-icons:last-of-type{direction:rtl!important;--direction:rtl}`:r.AH``]}}]}}),n.J)},89005:(e,i,t)=>{t.a(e,(async(e,a)=>{try{t.r(i),t.d(i,{HaDeviceSelector:()=>f});var s=t(62659),d=t(76504),n=t(80792),l=t(98597),r=t(196),o=t(45081),c=t(68286),u=t(77664),h=t(1169),v=t(62901),p=t(94988),y=t(47147),m=t(93302),k=e([y,m]);[y,m]=k.then?(await k)():k;let f=(0,s.A)([(0,r.EM)("ha-selector-device")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[(0,r.wk)()],key:"_entitySources",value:void 0},{kind:"field",decorators:[(0,r.MZ)()],key:"value",value:void 0},{kind:"field",decorators:[(0,r.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,r.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,r.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,r.MZ)({type:Boolean})],key:"required",value:()=>!0},{kind:"field",key:"_deviceIntegrationLookup",value:()=>(0,o.A)(h.fk)},{kind:"method",key:"_hasIntegration",value:function(e){var i,t;return(null===(i=e.device)||void 0===i?void 0:i.filter)&&(0,c.e)(e.device.filter).some((e=>e.integration))||(null===(t=e.device)||void 0===t?void 0:t.entity)&&(0,c.e)(e.device.entity).some((e=>e.integration))}},{kind:"method",key:"willUpdate",value:function(e){var i,t;e.has("selector")&&void 0!==this.value&&(null!==(i=this.selector.device)&&void 0!==i&&i.multiple&&!Array.isArray(this.value)?(this.value=[this.value],(0,u.r)(this,"value-changed",{value:this.value})):null!==(t=this.selector.device)&&void 0!==t&&t.multiple||!Array.isArray(this.value)||(this.value=this.value[0],(0,u.r)(this,"value-changed",{value:this.value})))}},{kind:"method",key:"updated",value:function(e){(0,d.A)((0,n.A)(t.prototype),"updated",this).call(this,e),e.has("selector")&&this._hasIntegration(this.selector)&&!this._entitySources&&(0,v.c)(this.hass).then((e=>{this._entitySources=e}))}},{kind:"method",key:"render",value:function(){var e,i,t;return this._hasIntegration(this.selector)&&!this._entitySources?l.s6:null!==(e=this.selector.device)&&void 0!==e&&e.multiple?l.qy` ${this.label?l.qy`<label>${this.label}</label>`:""} <ha-devices-picker .hass="${this.hass}" .value="${this.value}" .helper="${this.helper}" .deviceFilter="${this._filterDevices}" .entityFilter="${null!==(i=this.selector.device)&&void 0!==i&&i.entity?this._filterEntities:void 0}" .disabled="${this.disabled}" .required="${this.required}"></ha-devices-picker> `:l.qy` <ha-device-picker .hass="${this.hass}" .value="${this.value}" .label="${this.label}" .helper="${this.helper}" .deviceFilter="${this._filterDevices}" .entityFilter="${null!==(t=this.selector.device)&&void 0!==t&&t.entity?this._filterEntities:void 0}" .disabled="${this.disabled}" .required="${this.required}" allow-custom-entity></ha-device-picker> `}},{kind:"field",key:"_filterDevices",value(){return e=>{var i;if(null===(i=this.selector.device)||void 0===i||!i.filter)return!0;const t=this._entitySources?this._deviceIntegrationLookup(this._entitySources,Object.values(this.hass.entities)):void 0;return(0,c.e)(this.selector.device.filter).some((i=>(0,p.vX)(i,e,t)))}}},{kind:"field",key:"_filterEntities",value(){return e=>(0,c.e)(this.selector.device.entity).some((i=>(0,p.Ru)(i,e,this._entitySources)))}}]}}),l.WF);a()}catch(e){a(e)}}))},62901:(e,i,t)=>{t.d(i,{c:()=>d});const a=async(e,i,t,s,d,...n)=>{const l=d,r=l[e],o=r=>s&&s(d,r.result)!==r.cacheKey?(l[e]=void 0,a(e,i,t,s,d,...n)):r.result;if(r)return r instanceof Promise?r.then(o):o(r);const c=t(d,...n);return l[e]=c,c.then((t=>{l[e]={result:t,cacheKey:null==s?void 0:s(d,t)},setTimeout((()=>{l[e]=void 0}),i)}),(()=>{l[e]=void 0})),c},s=e=>e.callWS({type:"entity/source"}),d=e=>a("_entitySources",3e4,s,(e=>Object.keys(e.states).length),e)}};
//# sourceMappingURL=9005.vHM9SsZNZjg.js.map