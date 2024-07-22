export const id=2839;export const ids=[2839];export const modules={32839:(e,t,i)=>{i.a(e,(async(e,t)=>{try{var a=i(62659),n=(i(39335),i(98597)),s=i(196),d=i(45081),l=i(77664),o=i(47038),r=i(82931),c=i(38696),u=i(35641),h=(i(72214),i(1683),i(92943),i(95507)),m=i(61536),p=i(58587),y=i(17876),v=e([u]);u=(v.then?(await v)():v)[0];const _="___create-new-entity___";(0,a.A)([(0,s.EM)("ha-entity-picker")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.MZ)({type:Boolean})],key:"autofocus",value:()=>!1},{kind:"field",decorators:[(0,s.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,s.MZ)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,s.MZ)({type:Boolean,attribute:"allow-custom-entity"})],key:"allowCustomEntity",value:void 0},{kind:"field",decorators:[(0,s.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,s.MZ)()],key:"value",value:void 0},{kind:"field",decorators:[(0,s.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,s.MZ)({type:Array})],key:"createDomains",value:void 0},{kind:"field",decorators:[(0,s.MZ)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,s.MZ)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,s.MZ)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,s.MZ)({type:Array,attribute:"include-unit-of-measurement"})],key:"includeUnitOfMeasurement",value:void 0},{kind:"field",decorators:[(0,s.MZ)({type:Array,attribute:"include-entities"})],key:"includeEntities",value:void 0},{kind:"field",decorators:[(0,s.MZ)({type:Array,attribute:"exclude-entities"})],key:"excludeEntities",value:void 0},{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"entityFilter",value:void 0},{kind:"field",decorators:[(0,s.MZ)({type:Boolean})],key:"hideClearIcon",value:()=>!1},{kind:"field",decorators:[(0,s.MZ)({attribute:"item-label-path"})],key:"itemLabelPath",value:()=>"friendly_name"},{kind:"field",decorators:[(0,s.wk)()],key:"_opened",value:()=>!1},{kind:"field",decorators:[(0,s.P)("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"method",key:"open",value:async function(){var e;await this.updateComplete,await(null===(e=this.comboBox)||void 0===e?void 0:e.open())}},{kind:"method",key:"focus",value:async function(){var e;await this.updateComplete,await(null===(e=this.comboBox)||void 0===e?void 0:e.focus())}},{kind:"field",key:"_initedStates",value:()=>!1},{kind:"field",key:"_states",value:()=>[]},{kind:"field",key:"_rowRenderer",value(){return e=>n.qy`<ha-list-item graphic="avatar" .twoline="${!!e.entity_id}"> ${e.state?n.qy`<state-badge slot="graphic" .stateObj="${e}" .hass="${this.hass}"></state-badge>`:""} <span>${e.friendly_name}</span> <span slot="secondary">${e.entity_id.startsWith(_)?this.hass.localize("ui.components.entity.entity-picker.new_entity"):e.entity_id}</span> </ha-list-item>`}},{kind:"field",key:"_getStates",value(){return(0,d.A)(((e,t,i,a,n,s,d,l,c,u)=>{let m=[];if(!t)return[];let v=Object.keys(t.states);const f=null!=u&&u.length?u.map((e=>{const i=t.localize("ui.components.entity.entity-picker.create_helper",{domain:(0,y.z)(e)?t.localize(`ui.panel.config.helpers.types.${e}`):(0,p.p$)(t.localize,e)});return{entity_id:_+e,state:"on",last_changed:"",last_updated:"",context:{id:"",user_id:null,parent_id:null},friendly_name:i,attributes:{icon:"mdi:plus"},strings:[e,i]}})):[];return v.length?l?(v=v.filter((e=>this.includeEntities.includes(e))),v.map((e=>{const i=(0,r.u)(t.states[e])||e;return{...t.states[e],friendly_name:i,strings:[e,i]}})).sort(((e,t)=>(0,h.S)(e.friendly_name,t.friendly_name,this.hass.locale.language)))):(c&&(v=v.filter((e=>!c.includes(e)))),i&&(v=v.filter((e=>i.includes((0,o.m)(e))))),a&&(v=v.filter((e=>!a.includes((0,o.m)(e))))),m=v.map((e=>{const i=(0,r.u)(t.states[e])||e;return{...t.states[e],friendly_name:i,strings:[e,i]}})).sort(((e,t)=>(0,h.S)(e.friendly_name,t.friendly_name,this.hass.locale.language))),s&&(m=m.filter((e=>e.entity_id===this.value||e.attributes.device_class&&s.includes(e.attributes.device_class)))),d&&(m=m.filter((e=>e.entity_id===this.value||e.attributes.unit_of_measurement&&d.includes(e.attributes.unit_of_measurement)))),n&&(m=m.filter((e=>e.entity_id===this.value||n(e)))),m.length?(null!=f&&f.length&&m.push(...f),m):[{entity_id:"",state:"",last_changed:"",last_updated:"",context:{id:"",user_id:null,parent_id:null},friendly_name:this.hass.localize("ui.components.entity.entity-picker.no_match"),attributes:{friendly_name:this.hass.localize("ui.components.entity.entity-picker.no_match"),icon:"mdi:magnify"},strings:[]},...f]):[{entity_id:"",state:"",last_changed:"",last_updated:"",context:{id:"",user_id:null,parent_id:null},friendly_name:this.hass.localize("ui.components.entity.entity-picker.no_entities"),attributes:{friendly_name:this.hass.localize("ui.components.entity.entity-picker.no_entities"),icon:"mdi:magnify"},strings:[]},...f]}))}},{kind:"method",key:"shouldUpdate",value:function(e){return!!(e.has("value")||e.has("label")||e.has("disabled"))||!(!e.has("_opened")&&this._opened)}},{kind:"method",key:"willUpdate",value:function(e){var t;(!this._initedStates||e.has("_opened")&&this._opened)&&(this._states=this._getStates(this._opened,this.hass,this.includeDomains,this.excludeDomains,this.entityFilter,this.includeDeviceClasses,this.includeUnitOfMeasurement,this.includeEntities,this.excludeEntities,this.createDomains),this._initedStates&&(this.comboBox.filteredItems=this._states),this._initedStates=!0),e.has("createDomains")&&null!==(t=this.createDomains)&&void 0!==t&&t.length&&this.hass.loadFragmentTranslation("config")}},{kind:"method",key:"render",value:function(){return n.qy` <ha-combo-box item-value-path="entity_id" .itemLabelPath="${this.itemLabelPath}" .hass="${this.hass}" .value="${this._value}" .label="${void 0===this.label?this.hass.localize("ui.components.entity.entity-picker.entity"):this.label}" .helper="${this.helper}" .allowCustomValue="${this.allowCustomEntity}" .filteredItems="${this._states}" .renderer="${this._rowRenderer}" .required="${this.required}" .disabled="${this.disabled}" @opened-changed="${this._openedChanged}" @value-changed="${this._valueChanged}" @filter-changed="${this._filterChanged}"> </ha-combo-box> `}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value}},{kind:"method",key:"_valueChanged",value:function(e){var t;e.stopPropagation();const i=null===(t=e.detail.value)||void 0===t?void 0:t.trim();if(i&&i.startsWith(_)){const e=i.substring(_.length);(0,m.$)(this,{domain:e,dialogClosedCallback:e=>{e.entityId&&this._setValue(e.entityId)}})}else i!==this._value&&this._setValue(i)}},{kind:"method",key:"_filterChanged",value:function(e){const t=e.target,i=e.detail.value.trim().toLowerCase();t.filteredItems=i.length?(0,c.H)(i,this._states):this._states}},{kind:"method",key:"_setValue",value:function(e){this.value=e,setTimeout((()=>{(0,l.r)(this,"value-changed",{value:e}),(0,l.r)(this,"change")}),0)}}]}}),n.WF);t()}catch(e){t(e)}}))},39335:(e,t,i)=>{var a=i(62659),n=i(76504),s=i(80792),d=i(46175),l=i(45592),o=i(98597),r=i(196);(0,a.A)([(0,r.EM)("ha-list-item")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,n.A)((0,s.A)(i.prototype),"renderRipple",this).call(this)}},{kind:"get",static:!0,key:"styles",value:function(){return[l.R,o.AH`:host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-inline-start:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px));padding-inline-end:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)!important}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)!important}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center;flex-shrink:0}:host([graphic=icon]:not([twoline])) .mdc-deprecated-list-item__graphic{margin-inline-end:var(--mdc-list-item-graphic-margin,20px)!important}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}`,"rtl"===document.dir?o.AH`span.material-icons:first-of-type,span.material-icons:last-of-type{direction:rtl!important;--direction:rtl}`:o.AH``]}}]}}),d.J)},58587:(e,t,i)=>{i.d(t,{QC:()=>s,fK:()=>n,p$:()=>a});const a=(e,t,i)=>e(`component.${t}.title`)||(null==i?void 0:i.name)||t,n=(e,t)=>{const i={type:"manifest/list"};return t&&(i.integrations=t),e.callWS(i)},s=(e,t)=>e.callWS({type:"manifest/get",integration:t})},61536:(e,t,i)=>{i.d(t,{$:()=>s});var a=i(77664);const n=()=>Promise.all([i.e(2658),i.e(8280)]).then(i.bind(i,48280)),s=(e,t)=>{(0,a.r)(e,"show-dialog",{dialogTag:"dialog-helper-detail",dialogImport:n,dialogParams:t})}}};
//# sourceMappingURL=2839.ortszvBE2eg.js.map