export const id=1052;export const ids=[1052];export const modules={31052:(a,e,i)=>{i.r(e);var o=i(62659),s=i(47420),t=i(98597),r=i(196),d=i(45081),n=i(77664),l=i(95507),c=(i(95439),i(14109),i(72214),i(95492),i(14126));const h=(0,d.A)(((a,e,i,o)=>e.devices.filter((e=>{var o;return(a||["tty","gpio","input"].includes(e.subsystem))&&((null===(o=e.by_id)||void 0===o?void 0:o.toLowerCase().includes(i))||e.name.toLowerCase().includes(i)||e.dev_path.toLocaleLowerCase().includes(i)||JSON.stringify(e.attributes).toLocaleLowerCase().includes(i))})).sort(((a,e)=>(0,l.x)(a.name,e.name,o)))));(0,o.A)([(0,r.EM)("dialog-hassio-hardware")],(function(a,e){return{F:class extends e{constructor(...e){super(...e),a(this)}},d:[{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.wk)()],key:"_dialogParams",value:void 0},{kind:"field",decorators:[(0,r.wk)()],key:"_filter",value:void 0},{kind:"method",key:"showDialog",value:function(a){this._dialogParams=a}},{kind:"method",key:"closeDialog",value:function(){this._dialogParams=void 0,(0,n.r)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){var a;if(!this._dialogParams)return t.s6;const e=h((null===(a=this.hass.userData)||void 0===a?void 0:a.showAdvanced)||!1,this._dialogParams.hardware,(this._filter||"").toLowerCase(),this.hass.locale.language);return t.qy` <ha-dialog open scrimClickAction hideActions @closed="${this.closeDialog}" .heading="${this._dialogParams.supervisor.localize("dialog.hardware.title")}"> <div class="header" slot="heading"> <h2> ${this._dialogParams.supervisor.localize("dialog.hardware.title")} </h2> <ha-icon-button .label="${this._dialogParams.supervisor.localize("common.close")}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" dialogAction="close"></ha-icon-button> <search-input .hass="${this.hass}" .filter="${this._filter}" @value-changed="${this._handleSearchChange}" .label="${this._dialogParams.supervisor.localize("dialog.hardware.search")}"> </search-input> </div> ${e.map((a=>t.qy`<ha-expansion-panel .header="${a.name}" .secondary="${a.by_id||void 0}" outlined> <div class="device-property"> <span> ${this._dialogParams.supervisor.localize("dialog.hardware.subsystem")}: </span> <span>${a.subsystem}</span> </div> <div class="device-property"> <span> ${this._dialogParams.supervisor.localize("dialog.hardware.device_path")}: </span> <code>${a.dev_path}</code> </div> ${a.by_id?t.qy` <div class="device-property"> <span> ${this._dialogParams.supervisor.localize("dialog.hardware.id")}: </span> <code>${a.by_id}</code> </div>`:""} <div class="attributes"> <span> ${this._dialogParams.supervisor.localize("dialog.hardware.attributes")}: </span> <pre>${(0,s.Bh)(a.attributes,{indent:2})}</pre> </div> </ha-expansion-panel>`))} </ha-dialog> `}},{kind:"method",key:"_handleSearchChange",value:function(a){this._filter=a.detail.value}},{kind:"get",static:!0,key:"styles",value:function(){return[c.RF,c.nA,t.AH`ha-icon-button{position:absolute;right:16px;inset-inline-end:16px;inset-inline-start:initial;top:10px;text-decoration:none;color:var(--primary-text-color)}h2{margin:18px 42px 0 18px;margin-inline-start:18px;margin-inline-end:42px;color:var(--primary-text-color)}ha-expansion-panel{margin:4px 0}code,pre{background-color:var(--markdown-code-background-color,none);border-radius:3px}pre{padding:16px;overflow:auto;line-height:1.45;font-family:var(--code-font-family, monospace)}code{font-size:85%;padding:.2em .4em}search-input{margin:8px 16px 0;display:block}.device-property{display:flex;justify-content:space-between}.attributes{margin-top:12px}`]}}]}}),t.WF)}};
//# sourceMappingURL=1052.1goCUiwRNPA.js.map