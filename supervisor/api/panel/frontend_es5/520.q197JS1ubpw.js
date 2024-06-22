"use strict";(self.webpackChunkedashboard_frontend=self.webpackChunkedashboard_frontend||[]).push([[520],{48962:function(e,t,r){r.d(t,{d:function(){return o}});var o=function(e){return e.stopPropagation()}},36639:function(e,t,r){r.d(t,{l:function(){return a}});var o=r(94881),i=r(1781),a=function(){var e=(0,i.A)((0,o.A)().mark((function e(t){var r;return(0,o.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!navigator.clipboard){e.next=9;break}return e.prev=1,e.next=4,navigator.clipboard.writeText(t);case 4:return e.abrupt("return");case 7:e.prev=7,e.t0=e.catch(1);case 9:(r=document.createElement("textarea")).value=t,document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r);case 15:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},26250:function(e,t,r){var o,i=r(6238),a=r(95803),n=r(94881),d=r(1781),s=r(36683),l=r(89231),u=r(29864),c=r(83647),h=r(8364),f=r(76504),p=r(80792),m=(r(27934),r(77052),r(21950),r(53156),r(36724),r(71936),r(848),r(650),r(1158),r(68113),r(55888),r(58971),r(56262),r(98168),r(8339),r(98597)),v=r(196),y=r(45081),k=r(77664),_=r(48962),C={key:"Mod-s",run:function(e){return(0,k.r)(e.dom,"editor-save"),!0}},M=function(e){var t=document.createElement("ha-icon");return t.icon=e.label,t};(0,h.A)([(0,v.EM)("ha-code-editor")],(function(e,t){var h,b,g=function(t){function r(){var t;(0,l.A)(this,r);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=(0,u.A)(this,r,[].concat(i)),e(t),t}return(0,c.A)(r,t),(0,s.A)(r)}(t);return{F:g,d:[{kind:"field",key:"codemirror",value:void 0},{kind:"field",decorators:[(0,v.MZ)()],key:"mode",value:function(){return"yaml"}},{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,v.MZ)({type:Boolean})],key:"autofocus",value:function(){return!1}},{kind:"field",decorators:[(0,v.MZ)({type:Boolean})],key:"readOnly",value:function(){return!1}},{kind:"field",decorators:[(0,v.MZ)({type:Boolean})],key:"linewrap",value:function(){return!1}},{kind:"field",decorators:[(0,v.MZ)({type:Boolean,attribute:"autocomplete-entities"})],key:"autocompleteEntities",value:function(){return!1}},{kind:"field",decorators:[(0,v.MZ)({type:Boolean,attribute:"autocomplete-icons"})],key:"autocompleteIcons",value:function(){return!1}},{kind:"field",decorators:[(0,v.MZ)({type:Boolean})],key:"error",value:function(){return!1}},{kind:"field",decorators:[(0,v.wk)()],key:"_value",value:function(){return""}},{kind:"field",key:"_loadedCodeMirror",value:void 0},{kind:"field",key:"_iconList",value:void 0},{kind:"set",key:"value",value:function(e){this._value=e}},{kind:"get",key:"value",value:function(){return this.codemirror?this.codemirror.state.doc.toString():this._value}},{kind:"get",key:"hasComments",value:function(){if(!this.codemirror||!this._loadedCodeMirror)return!1;var e=this._loadedCodeMirror.highlightingFor(this.codemirror.state,[this._loadedCodeMirror.tags.comment]);return!!this.renderRoot.querySelector("span.".concat(e))}},{kind:"method",key:"connectedCallback",value:function(){(0,f.A)((0,p.A)(g.prototype),"connectedCallback",this).call(this),this.hasUpdated&&this.requestUpdate(),this.addEventListener("keydown",_.d),this.codemirror&&!1!==this.autofocus&&this.codemirror.focus()}},{kind:"method",key:"disconnectedCallback",value:function(){var e=this;(0,f.A)((0,p.A)(g.prototype),"disconnectedCallback",this).call(this),this.removeEventListener("keydown",_.d),this.updateComplete.then((function(){e.codemirror.destroy(),delete e.codemirror}))}},{kind:"method",key:"scheduleUpdate",value:(b=(0,d.A)((0,n.A)().mark((function e(){var t;return(0,n.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(t=this._loadedCodeMirror)||void 0===t){e.next=4;break}e.next=7;break;case 4:return e.next=6,Promise.all([r.e(5894),r.e(1469),r.e(9881)]).then(r.bind(r,46054));case 6:this._loadedCodeMirror=e.sent;case 7:(0,f.A)((0,p.A)(g.prototype),"scheduleUpdate",this).call(this);case 8:case"end":return e.stop()}}),e,this)}))),function(){return b.apply(this,arguments)})},{kind:"method",key:"update",value:function(e){if((0,f.A)((0,p.A)(g.prototype),"update",this).call(this,e),this.codemirror){var t,r=[];if(e.has("mode")&&r.push({effects:this._loadedCodeMirror.langCompartment.reconfigure(this._mode)}),e.has("readOnly")&&r.push({effects:this._loadedCodeMirror.readonlyCompartment.reconfigure(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly))}),e.has("linewrap")&&r.push({effects:this._loadedCodeMirror.linewrapCompartment.reconfigure(this.linewrap?this._loadedCodeMirror.EditorView.lineWrapping:[])}),e.has("_value")&&this._value!==this.value&&r.push({changes:{from:0,to:this.codemirror.state.doc.length,insert:this._value}}),r.length>0)(t=this.codemirror).dispatch.apply(t,r);e.has("error")&&this.classList.toggle("error-state",this.error)}else this._createCodeMirror()}},{kind:"get",key:"_mode",value:function(){return this._loadedCodeMirror.langs[this.mode]}},{kind:"method",key:"_createCodeMirror",value:function(){if(!this._loadedCodeMirror)throw new Error("Cannot create editor before CodeMirror is loaded");var e=[this._loadedCodeMirror.lineNumbers(),this._loadedCodeMirror.history(),this._loadedCodeMirror.drawSelection(),this._loadedCodeMirror.EditorState.allowMultipleSelections.of(!0),this._loadedCodeMirror.rectangularSelection(),this._loadedCodeMirror.crosshairCursor(),this._loadedCodeMirror.highlightSelectionMatches(),this._loadedCodeMirror.highlightActiveLine(),this._loadedCodeMirror.keymap.of([].concat((0,a.A)(this._loadedCodeMirror.defaultKeymap),(0,a.A)(this._loadedCodeMirror.searchKeymap),(0,a.A)(this._loadedCodeMirror.historyKeymap),(0,a.A)(this._loadedCodeMirror.tabKeyBindings),[C])),this._loadedCodeMirror.langCompartment.of(this._mode),this._loadedCodeMirror.haTheme,this._loadedCodeMirror.haSyntaxHighlighting,this._loadedCodeMirror.readonlyCompartment.of(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly)),this._loadedCodeMirror.linewrapCompartment.of(this.linewrap?this._loadedCodeMirror.EditorView.lineWrapping:[]),this._loadedCodeMirror.EditorView.updateListener.of(this._onUpdate)];if(!this.readOnly){var t=[];this.autocompleteEntities&&this.hass&&t.push(this._entityCompletions.bind(this)),this.autocompleteIcons&&t.push(this._mdiCompletions.bind(this)),t.length>0&&e.push(this._loadedCodeMirror.autocompletion({override:t,maxRenderedOptions:10}))}this.codemirror=new this._loadedCodeMirror.EditorView({state:this._loadedCodeMirror.EditorState.create({doc:this._value,extensions:e}),parent:this.renderRoot})}},{kind:"field",key:"_getStates",value:function(){return(0,y.A)((function(e){return e?Object.keys(e).map((function(t){return{type:"variable",label:t,detail:e[t].attributes.friendly_name,info:"State: ".concat(e[t].state)}})):[]}))}},{kind:"method",key:"_entityCompletions",value:function(e){var t=e.matchBefore(/[a-z_]{3,}\.\w*/);if(!t||t.from===t.to&&!e.explicit)return null;var r=this._getStates(this.hass.states);return r&&r.length?{from:Number(t.from),options:r,validFor:/^[a-z_]{3,}\.\w*$/}:null}},{kind:"field",key:"_getIconItems",value:function(){var e=this;return(0,d.A)((0,n.A)().mark((function t(){var o;return(0,n.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e._iconList){t.next=9;break}0,o=[],t.next=8;break;case 5:return t.next=7,r.e(5143).then(r.t.bind(r,25143,19));case 7:o=t.sent.default;case 8:e._iconList=o.map((function(e){return{type:"variable",label:"mdi:".concat(e.name),detail:e.keywords.join(", "),info:M}}));case 9:return t.abrupt("return",e._iconList);case 10:case"end":return t.stop()}}),t)})))}},{kind:"method",key:"_mdiCompletions",value:(h=(0,d.A)((0,n.A)().mark((function e(t){var r,o;return(0,n.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((r=t.matchBefore(/mdi:\S*/))&&(r.from!==r.to||t.explicit)){e.next=3;break}return e.abrupt("return",null);case 3:return e.next=5,this._getIconItems();case 5:return o=e.sent,e.abrupt("return",{from:Number(r.from),options:o,validFor:/^mdi:\S*$/});case 7:case"end":return e.stop()}}),e,this)}))),function(e){return h.apply(this,arguments)})},{kind:"field",key:"_onUpdate",value:function(){var e=this;return function(t){t.docChanged&&(e._value=t.state.doc.toString(),(0,k.r)(e,"value-changed",{value:e._value}))}}},{kind:"get",static:!0,key:"styles",value:function(){return(0,m.AH)(o||(o=(0,i.A)([":host(.error-state) .cm-gutters{border-color:var(--error-state-color,red)}"])))}}]}}),m.mN)},20520:function(e,t,r){var o,i,a,n,d=r(94881),s=r(1781),l=r(6238),u=r(36683),c=r(89231),h=r(29864),f=r(83647),p=r(8364),m=r(76504),v=r(80792),y=r(67234),k=(r(77052),r(47420)),_=r(98597),C=r(196),M=r(77664),b=r(14126),g=(r(26250),r(75610)),A=r(36639);(0,p.A)([(0,C.EM)("ha-yaml-editor")],(function(e,t){var r,p=function(t){function r(){var t;(0,c.A)(this,r);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=(0,h.A)(this,r,[].concat(i)),e(t),t}return(0,f.A)(r,t),(0,u.A)(r)}(t);return{F:p,d:[{kind:"field",decorators:[(0,C.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,C.MZ)()],key:"value",value:void 0},{kind:"field",decorators:[(0,C.MZ)({attribute:!1})],key:"yamlSchema",value:function(){return k.my}},{kind:"field",decorators:[(0,C.MZ)()],key:"defaultValue",value:void 0},{kind:"field",decorators:[(0,C.MZ)({type:Boolean})],key:"isValid",value:function(){return!0}},{kind:"field",decorators:[(0,C.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,C.MZ)({type:Boolean})],key:"autoUpdate",value:function(){return!1}},{kind:"field",decorators:[(0,C.MZ)({type:Boolean})],key:"readOnly",value:function(){return!1}},{kind:"field",decorators:[(0,C.MZ)({type:Boolean})],key:"required",value:function(){return!1}},{kind:"field",decorators:[(0,C.MZ)({type:Boolean})],key:"copyClipboard",value:function(){return!1}},{kind:"field",decorators:[(0,C.wk)()],key:"_yaml",value:function(){return""}},{kind:"method",key:"setValue",value:function(e){try{this._yaml=e&&!function(e){if("object"!==(0,y.A)(e))return!1;for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(e)?(0,k.Bh)(e,{schema:this.yamlSchema,quotingType:'"',noRefs:!0}):""}catch(t){console.error(t,e),alert("There was an error converting to YAML: ".concat(t))}}},{kind:"method",key:"firstUpdated",value:function(){this.defaultValue&&this.setValue(this.defaultValue)}},{kind:"method",key:"willUpdate",value:function(e){(0,m.A)((0,v.A)(p.prototype),"willUpdate",this).call(this,e),this.autoUpdate&&e.has("value")&&this.setValue(this.value)}},{kind:"method",key:"render",value:function(){return void 0===this._yaml?_.s6:(0,_.qy)(o||(o=(0,l.A)([" ",' <ha-code-editor .hass="','" .value="','" .readOnly="','" mode="yaml" autocomplete-entities autocomplete-icons .error="','" @value-changed="','" dir="ltr"></ha-code-editor> '," "])),this.label?(0,_.qy)(i||(i=(0,l.A)(["<p>","","</p>"])),this.label,this.required?" *":""):"",this.hass,this._yaml,this.readOnly,!1===this.isValid,this._onChange,this.copyClipboard?(0,_.qy)(a||(a=(0,l.A)(['<div class="card-actions"> <mwc-button @click="','"> '," </mwc-button> </div>"])),this._copyYaml,this.hass.localize("ui.components.yaml-editor.copy_to_clipboard")):_.s6)}},{kind:"method",key:"_onChange",value:function(e){var t;e.stopPropagation(),this._yaml=e.detail.value;var r=!0;if(this._yaml)try{t=(0,k.Hh)(this._yaml,{schema:this.yamlSchema})}catch(o){r=!1}else t={};this.value=t,this.isValid=r,(0,M.r)(this,"value-changed",{value:t,isValid:r})}},{kind:"get",key:"yaml",value:function(){return this._yaml}},{kind:"method",key:"_copyYaml",value:(r=(0,s.A)((0,d.A)().mark((function e(){return(0,d.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.yaml){e.next=4;break}return e.next=3,(0,A.l)(this.yaml);case 3:(0,g.P)(this,{message:this.hass.localize("ui.common.copied_clipboard")});case 4:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return[b.RF,(0,_.AH)(n||(n=(0,l.A)([".card-actions{border-radius:var(--actions-border-radius,0px 0px var(--ha-card-border-radius,12px) var(--ha-card-border-radius,12px));border:1px solid var(--divider-color);padding:5px 16px}ha-code-editor{flex-grow:1}"])))]}}]}}),_.WF)},75610:function(e,t,r){r.d(t,{P:function(){return i}});var o=r(77664),i=function(e,t){return(0,o.r)(e,"hass-notification",t)}}}]);
//# sourceMappingURL=520.q197JS1ubpw.js.map