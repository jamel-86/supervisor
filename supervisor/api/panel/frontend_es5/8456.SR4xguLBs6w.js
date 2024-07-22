"use strict";(self.webpackChunkedashboard_frontend=self.webpackChunkedashboard_frontend||[]).push([[8456],{30963:function(i,e,t){t.d(e,{MV:function(){return s},d8:function(){return r}});var a=t(94881),n=t(1781),r=function(){var i=(0,n.A)((0,a.A)().mark((function i(e){return(0,a.A)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",e.callWS({type:"application_credentials/config"}));case 1:case"end":return i.stop()}}),i)})));return function(e){return i.apply(this,arguments)}}(),s=function(){var i=(0,n.A)((0,a.A)().mark((function i(e,t,n,r,s){return(0,a.A)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",e.callWS({type:"application_credentials/create",domain:t,client_id:n,client_secret:r,name:s}));case 1:case"end":return i.stop()}}),i)})));return function(e,t,a,n,r){return i.apply(this,arguments)}}()},48456:function(i,e,t){var a=t(1781).A,n=t(94881).A;t.a(i,function(){var i=a(n().mark((function i(a,r){var s,o,c,l,d,h,p,u,_,m,f,k,v,g,b,y,A,w,x,z,D,q,C,V,I,M,S,H,P,F,L,W,B,T,Z,$,j;return n().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(i.prev=0,t.r(e),t.d(e,{DialogAddApplicationCredential:function(){return j}}),s=t(94881),o=t(1781),c=t(36683),l=t(89231),d=t(29864),h=t(83647),p=t(8364),u=t(6238),_=t(77052),m=t(36724),f=t(848),k=t(1158),v=t(98168),t(58068),t(23981),g=t(98597),b=t(196),y=t(77664),t(12261),t(75048),A=t(35641),w=t(95439),t(78216),t(42398),x=t(30963),z=t(58587),D=t(14126),q=t(92483),!(C=a([A])).then){i.next=44;break}return i.next=40,C;case 40:i.t1=i.sent,i.t0=(0,i.t1)(),i.next=45;break;case 44:i.t0=C;case 45:A=i.t0[0],Z="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z",$=function(i){return(0,g.qy)(V||(V=(0,u.A)(["<mwc-list-item> <span>","</span> </mwc-list-item>"])),i.name)},j=(0,p.A)([(0,b.EM)("dialog-add-application-credential")],(function(i,e){var t,a,n,r=function(e){function t(){var e;(0,l.A)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return e=(0,d.A)(this,t,[].concat(n)),i(e),e}return(0,h.A)(t,e),(0,c.A)(t)}(e);return{F:r,d:[{kind:"field",decorators:[(0,b.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,b.wk)()],key:"_loading",value:function(){return!1}},{kind:"field",decorators:[(0,b.wk)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,b.wk)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,b.wk)()],key:"_domain",value:void 0},{kind:"field",decorators:[(0,b.wk)()],key:"_manifest",value:void 0},{kind:"field",decorators:[(0,b.wk)()],key:"_name",value:void 0},{kind:"field",decorators:[(0,b.wk)()],key:"_description",value:void 0},{kind:"field",decorators:[(0,b.wk)()],key:"_clientId",value:void 0},{kind:"field",decorators:[(0,b.wk)()],key:"_clientSecret",value:void 0},{kind:"field",decorators:[(0,b.wk)()],key:"_domains",value:void 0},{kind:"field",decorators:[(0,b.wk)()],key:"_config",value:void 0},{kind:"method",key:"showDialog",value:function(i){this._params=i,this._domain=i.selectedDomain,this._manifest=i.manifest,this._name="",this._description="",this._clientId="",this._clientSecret="",this._error=void 0,this._loading=!1,this._fetchConfig()}},{kind:"method",key:"_fetchConfig",value:(n=(0,o.A)((0,s.A)().mark((function i(){var e=this;return(0,s.A)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,x.d8)(this.hass);case 2:return this._config=i.sent,this._domains=Object.keys(this._config.integrations).map((function(i){return{id:i,name:(0,z.p$)(e.hass.localize,i)}})),i.next=6,this.hass.loadBackendTranslation("application_credentials");case 6:this._updateDescription();case 7:case"end":return i.stop()}}),i,this)}))),function(){return n.apply(this,arguments)})},{kind:"method",key:"render",value:function(){var i,e;if(!this._params||!this._domains)return g.s6;var t=this._params.selectedDomain?(0,z.p$)(this.hass.localize,this._domain):"";return(0,g.qy)(I||(I=(0,u.A)([' <ha-dialog open @closed="','" scrimClickAction escapeKeyAction .heading="','"> <div> '," "," "," "," ",' <ha-textfield class="name" name="name" .label="','" .value="','" required @input="','" .validationMessage="','" dialogInitialFocus></ha-textfield> <ha-textfield class="clientId" name="clientId" .label="','" .value="','" required @input="','" .validationMessage="','" dialogInitialFocus .helper="','" helperPersistent></ha-textfield> <ha-textfield .label="','" type="password" name="clientSecret" .value="','" required @input="','" .validationMessage="','" .helper="','" helperPersistent></ha-textfield> </div> '," </ha-dialog> "])),this._abortDialog,(0,w.l)(this.hass,this.hass.localize("ui.panel.config.application_credentials.editor.caption")),this._error?(0,g.qy)(M||(M=(0,u.A)(['<ha-alert alert-type="error">',"</ha-alert> "])),this._error):"",this._params.selectedDomain&&!this._description?(0,g.qy)(S||(S=(0,u.A)(["<p> "," "," </p>"])),this.hass.localize("ui.panel.config.application_credentials.editor.missing_credentials",{integration:t}),null!==(i=this._manifest)&&void 0!==i&&i.is_built_in||null!==(e=this._manifest)&&void 0!==e&&e.documentation?(0,g.qy)(H||(H=(0,u.A)(['<a href="','" target="_blank" rel="noreferrer"> ',' <ha-svg-icon .path="','"></ha-svg-icon> </a>'])),this._manifest.is_built_in?(0,q.o)(this.hass,"/integrations/".concat(this._domain)):this._manifest.documentation,this.hass.localize("ui.panel.config.application_credentials.editor.missing_credentials_domain_link",{integration:t}),Z):""):"",this._params.selectedDomain&&this._description?"":(0,g.qy)(P||(P=(0,u.A)(["<p> ",' <a href="','" target="_blank" rel="noreferrer"> ',' <ha-svg-icon .path="','"></ha-svg-icon> </a> </p>'])),this.hass.localize("ui.panel.config.application_credentials.editor.description"),(0,q.o)(this.hass,"/integrations/application_credentials"),this.hass.localize("ui.panel.config.application_credentials.editor.view_documentation"),Z),this._params.selectedDomain?"":(0,g.qy)(F||(F=(0,u.A)(['<ha-combo-box name="domain" .hass="','" .label="','" .value="','" .renderer="','" .items="','" item-id-path="id" item-value-path="id" item-label-path="name" required @value-changed="','"></ha-combo-box>'])),this.hass,this.hass.localize("ui.panel.config.application_credentials.editor.domain"),this._domain,$,this._domains,this._handleDomainPicked),this._description?(0,g.qy)(L||(L=(0,u.A)(['<ha-markdown breaks .content="','"></ha-markdown>'])),this._description):"",this.hass.localize("ui.panel.config.application_credentials.editor.name"),this._name,this._handleValueChanged,this.hass.localize("ui.common.error_required"),this.hass.localize("ui.panel.config.application_credentials.editor.client_id"),this._clientId,this._handleValueChanged,this.hass.localize("ui.common.error_required"),this.hass.localize("ui.panel.config.application_credentials.editor.client_id_helper"),this.hass.localize("ui.panel.config.application_credentials.editor.client_secret"),this._clientSecret,this._handleValueChanged,this.hass.localize("ui.common.error_required"),this.hass.localize("ui.panel.config.application_credentials.editor.client_secret_helper"),this._loading?(0,g.qy)(W||(W=(0,u.A)([' <div slot="primaryAction" class="submit-spinner"> <ha-circular-progress indeterminate></ha-circular-progress> </div> ']))):(0,g.qy)(B||(B=(0,u.A)([' <mwc-button slot="primaryAction" @click="','"> ',' </mwc-button> <mwc-button slot="primaryAction" .disabled="','" @click="','"> '," </mwc-button> "])),this._abortDialog,this.hass.localize("ui.common.cancel"),!this._domain||!this._clientId||!this._clientSecret,this._addApplicationCredential,this.hass.localize("ui.panel.config.application_credentials.editor.add")))}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,this._domains=void 0,(0,y.r)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"_handleDomainPicked",value:function(i){i.stopPropagation(),this._domain=i.detail.value,this._updateDescription()}},{kind:"method",key:"_updateDescription",value:(a=(0,o.A)((0,s.A)().mark((function i(){var e;return(0,s.A)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(this._domain){i.next=2;break}return i.abrupt("return");case 2:return i.next=4,this.hass.loadBackendTranslation("application_credentials",this._domain);case 4:e=this._config.integrations[this._domain],this._description=this.hass.localize("component.".concat(this._domain,".application_credentials.description"),e.description_placeholders);case 6:case"end":return i.stop()}}),i,this)}))),function(){return a.apply(this,arguments)})},{kind:"method",key:"_handleValueChanged",value:function(i){this._error=void 0;var e=i.target.name,t=i.target.value;this["_".concat(e)]=t}},{kind:"method",key:"_abortDialog",value:function(){this._params&&this._params.dialogAbortedCallback&&this._params.dialogAbortedCallback(),this.closeDialog()}},{kind:"method",key:"_addApplicationCredential",value:(t=(0,o.A)((0,s.A)().mark((function i(e){var t;return(0,s.A)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(e.preventDefault(),this._domain&&this._clientId&&this._clientSecret){i.next=3;break}return i.abrupt("return");case 3:return this._loading=!0,this._error="",i.prev=5,i.next=8,(0,x.MV)(this.hass,this._domain,this._clientId,this._clientSecret,this._name);case 8:t=i.sent,i.next=16;break;case 11:return i.prev=11,i.t0=i.catch(5),this._loading=!1,this._error=i.t0.message,i.abrupt("return");case 16:this._params.applicationCredentialAddedCallback(t),this.closeDialog();case 18:case"end":return i.stop()}}),i,this,[[5,11]])}))),function(i){return t.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return[D.nA,(0,g.AH)(T||(T=(0,u.A)(["ha-dialog{--mdc-dialog-max-width:500px;--dialog-z-index:10}.row{display:flex;padding:8px 0}ha-combo-box{display:block;margin-bottom:24px}ha-textfield{display:block;margin-bottom:24px}a{text-decoration:none}a ha-svg-icon{--mdc-icon-size:16px}ha-markdown{margin-bottom:16px}"])))]}}]}}),g.WF),r(),i.next=55;break;case 52:i.prev=52,i.t2=i.catch(0),r(i.t2);case 55:case"end":return i.stop()}}),i,null,[[0,52]])})));return function(e,t){return i.apply(this,arguments)}}())}}]);
//# sourceMappingURL=8456.SR4xguLBs6w.js.map