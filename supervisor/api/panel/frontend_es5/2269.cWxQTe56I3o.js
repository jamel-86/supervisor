"use strict";(self.webpackChunkedashboard_frontend=self.webpackChunkedashboard_frontend||[]).push([[2269],{48962:function(e,t,r){r.d(t,{d:function(){return o}});var o=function(e){return e.stopPropagation()}},26250:function(e,t,r){var o,i=r(6238),n=r(95803),a=r(94881),d=r(1781),s=r(36683),l=r(89231),u=r(29864),c=r(83647),h=r(8364),f=r(76504),p=r(80792),v=(r(27934),r(77052),r(21950),r(53156),r(36724),r(71936),r(848),r(650),r(1158),r(68113),r(55888),r(58971),r(56262),r(98168),r(8339),r(98597)),m=r(196),k=r(45081),y=r(77664),_=r(48962),C={key:"Mod-s",run:function(e){return(0,y.r)(e.dom,"editor-save"),!0}},M=function(e){var t=document.createElement("ha-icon");return t.icon=e.label,t};(0,h.A)([(0,m.EM)("ha-code-editor")],(function(e,t){var h,g,A=function(t){function r(){var t;(0,l.A)(this,r);for(var o=arguments.length,i=new Array(o),n=0;n<o;n++)i[n]=arguments[n];return t=(0,u.A)(this,r,[].concat(i)),e(t),t}return(0,c.A)(r,t),(0,s.A)(r)}(t);return{F:A,d:[{kind:"field",key:"codemirror",value:void 0},{kind:"field",decorators:[(0,m.MZ)()],key:"mode",value:function(){return"yaml"}},{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,m.MZ)({type:Boolean})],key:"autofocus",value:function(){return!1}},{kind:"field",decorators:[(0,m.MZ)({type:Boolean})],key:"readOnly",value:function(){return!1}},{kind:"field",decorators:[(0,m.MZ)({type:Boolean})],key:"linewrap",value:function(){return!1}},{kind:"field",decorators:[(0,m.MZ)({type:Boolean,attribute:"autocomplete-entities"})],key:"autocompleteEntities",value:function(){return!1}},{kind:"field",decorators:[(0,m.MZ)({type:Boolean,attribute:"autocomplete-icons"})],key:"autocompleteIcons",value:function(){return!1}},{kind:"field",decorators:[(0,m.MZ)({type:Boolean})],key:"error",value:function(){return!1}},{kind:"field",decorators:[(0,m.wk)()],key:"_value",value:function(){return""}},{kind:"field",key:"_loadedCodeMirror",value:void 0},{kind:"field",key:"_iconList",value:void 0},{kind:"set",key:"value",value:function(e){this._value=e}},{kind:"get",key:"value",value:function(){return this.codemirror?this.codemirror.state.doc.toString():this._value}},{kind:"get",key:"hasComments",value:function(){if(!this.codemirror||!this._loadedCodeMirror)return!1;var e=this._loadedCodeMirror.highlightingFor(this.codemirror.state,[this._loadedCodeMirror.tags.comment]);return!!this.renderRoot.querySelector("span.".concat(e))}},{kind:"method",key:"connectedCallback",value:function(){(0,f.A)((0,p.A)(A.prototype),"connectedCallback",this).call(this),this.hasUpdated&&this.requestUpdate(),this.addEventListener("keydown",_.d),this.codemirror&&!1!==this.autofocus&&this.codemirror.focus()}},{kind:"method",key:"disconnectedCallback",value:function(){var e=this;(0,f.A)((0,p.A)(A.prototype),"disconnectedCallback",this).call(this),this.removeEventListener("keydown",_.d),this.updateComplete.then((function(){e.codemirror.destroy(),delete e.codemirror}))}},{kind:"method",key:"scheduleUpdate",value:(g=(0,d.A)((0,a.A)().mark((function e(){var t;return(0,a.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(t=this._loadedCodeMirror)||void 0===t){e.next=4;break}e.next=7;break;case 4:return e.next=6,Promise.all([r.e(5894),r.e(1469),r.e(9881)]).then(r.bind(r,46054));case 6:this._loadedCodeMirror=e.sent;case 7:(0,f.A)((0,p.A)(A.prototype),"scheduleUpdate",this).call(this);case 8:case"end":return e.stop()}}),e,this)}))),function(){return g.apply(this,arguments)})},{kind:"method",key:"update",value:function(e){if((0,f.A)((0,p.A)(A.prototype),"update",this).call(this,e),this.codemirror){var t,r=[];if(e.has("mode")&&r.push({effects:this._loadedCodeMirror.langCompartment.reconfigure(this._mode)}),e.has("readOnly")&&r.push({effects:this._loadedCodeMirror.readonlyCompartment.reconfigure(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly))}),e.has("linewrap")&&r.push({effects:this._loadedCodeMirror.linewrapCompartment.reconfigure(this.linewrap?this._loadedCodeMirror.EditorView.lineWrapping:[])}),e.has("_value")&&this._value!==this.value&&r.push({changes:{from:0,to:this.codemirror.state.doc.length,insert:this._value}}),r.length>0)(t=this.codemirror).dispatch.apply(t,r);e.has("error")&&this.classList.toggle("error-state",this.error)}else this._createCodeMirror()}},{kind:"get",key:"_mode",value:function(){return this._loadedCodeMirror.langs[this.mode]}},{kind:"method",key:"_createCodeMirror",value:function(){if(!this._loadedCodeMirror)throw new Error("Cannot create editor before CodeMirror is loaded");var e=[this._loadedCodeMirror.lineNumbers(),this._loadedCodeMirror.history(),this._loadedCodeMirror.drawSelection(),this._loadedCodeMirror.EditorState.allowMultipleSelections.of(!0),this._loadedCodeMirror.rectangularSelection(),this._loadedCodeMirror.crosshairCursor(),this._loadedCodeMirror.highlightSelectionMatches(),this._loadedCodeMirror.highlightActiveLine(),this._loadedCodeMirror.keymap.of([].concat((0,n.A)(this._loadedCodeMirror.defaultKeymap),(0,n.A)(this._loadedCodeMirror.searchKeymap),(0,n.A)(this._loadedCodeMirror.historyKeymap),(0,n.A)(this._loadedCodeMirror.tabKeyBindings),[C])),this._loadedCodeMirror.langCompartment.of(this._mode),this._loadedCodeMirror.haTheme,this._loadedCodeMirror.haSyntaxHighlighting,this._loadedCodeMirror.readonlyCompartment.of(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly)),this._loadedCodeMirror.linewrapCompartment.of(this.linewrap?this._loadedCodeMirror.EditorView.lineWrapping:[]),this._loadedCodeMirror.EditorView.updateListener.of(this._onUpdate)];if(!this.readOnly){var t=[];this.autocompleteEntities&&this.hass&&t.push(this._entityCompletions.bind(this)),this.autocompleteIcons&&t.push(this._mdiCompletions.bind(this)),t.length>0&&e.push(this._loadedCodeMirror.autocompletion({override:t,maxRenderedOptions:10}))}this.codemirror=new this._loadedCodeMirror.EditorView({state:this._loadedCodeMirror.EditorState.create({doc:this._value,extensions:e}),parent:this.renderRoot})}},{kind:"field",key:"_getStates",value:function(){return(0,k.A)((function(e){return e?Object.keys(e).map((function(t){return{type:"variable",label:t,detail:e[t].attributes.friendly_name,info:"State: ".concat(e[t].state)}})):[]}))}},{kind:"method",key:"_entityCompletions",value:function(e){var t=e.matchBefore(/[a-z_]{3,}\.\w*/);if(!t||t.from===t.to&&!e.explicit)return null;var r=this._getStates(this.hass.states);return r&&r.length?{from:Number(t.from),options:r,validFor:/^[a-z_]{3,}\.\w*$/}:null}},{kind:"field",key:"_getIconItems",value:function(){var e=this;return(0,d.A)((0,a.A)().mark((function t(){var o;return(0,a.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e._iconList){t.next=9;break}0,o=[],t.next=8;break;case 5:return t.next=7,r.e(5143).then(r.t.bind(r,25143,19));case 7:o=t.sent.default;case 8:e._iconList=o.map((function(e){return{type:"variable",label:"mdi:".concat(e.name),detail:e.keywords.join(", "),info:M}}));case 9:return t.abrupt("return",e._iconList);case 10:case"end":return t.stop()}}),t)})))}},{kind:"method",key:"_mdiCompletions",value:(h=(0,d.A)((0,a.A)().mark((function e(t){var r,o;return(0,a.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((r=t.matchBefore(/mdi:\S*/))&&(r.from!==r.to||t.explicit)){e.next=3;break}return e.abrupt("return",null);case 3:return e.next=5,this._getIconItems();case 5:return o=e.sent,e.abrupt("return",{from:Number(r.from),options:o,validFor:/^mdi:\S*$/});case 7:case"end":return e.stop()}}),e,this)}))),function(e){return h.apply(this,arguments)})},{kind:"field",key:"_onUpdate",value:function(){var e=this;return function(t){t.docChanged&&(e._value=t.state.doc.toString(),(0,y.r)(e,"value-changed",{value:e._value}))}}},{kind:"get",static:!0,key:"styles",value:function(){return(0,v.AH)(o||(o=(0,i.A)([":host(.error-state) .cm-gutters{border-color:var(--error-state-color,red)}"])))}}]}}),v.mN)},55118:function(e,t,r){var o,i,n=r(6238),a=r(36683),d=r(89231),s=r(29864),l=r(83647),u=r(8364),c=(r(77052),r(98597)),h=r(196);(0,u.A)([(0,h.EM)("ha-input-helper-text")],(function(e,t){var r=function(t){function r(){var t;(0,d.A)(this,r);for(var o=arguments.length,i=new Array(o),n=0;n<o;n++)i[n]=arguments[n];return t=(0,s.A)(this,r,[].concat(i)),e(t),t}return(0,l.A)(r,t),(0,a.A)(r)}(t);return{F:r,d:[{kind:"method",key:"render",value:function(){return(0,c.qy)(o||(o=(0,n.A)(["<slot></slot>"])))}},{kind:"field",static:!0,key:"styles",value:function(){return(0,c.AH)(i||(i=(0,n.A)([":host{display:block;color:var(--mdc-text-field-label-ink-color,rgba(0,0,0,.6));font-size:.75rem;padding-left:16px;padding-right:16px;padding-inline-start:16px;padding-inline-end:16px}"])))}}]}}),c.WF)},62269:function(e,t,r){r.r(t),r.d(t,{HaTemplateSelector:function(){return m}});var o,i,n,a,d=r(6238),s=r(36683),l=r(89231),u=r(29864),c=r(83647),h=r(8364),f=(r(77052),r(98597)),p=r(196),v=r(77664),m=(r(26250),r(55118),(0,h.A)([(0,p.EM)("ha-selector-template")],(function(e,t){var r=function(t){function r(){var t;(0,l.A)(this,r);for(var o=arguments.length,i=new Array(o),n=0;n<o;n++)i[n]=arguments[n];return t=(0,u.A)(this,r,[].concat(i)),e(t),t}return(0,c.A)(r,t),(0,s.A)(r)}(t);return{F:r,d:[{kind:"field",decorators:[(0,p.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,p.MZ)()],key:"value",value:void 0},{kind:"field",decorators:[(0,p.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,p.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,p.MZ)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,p.MZ)({type:Boolean})],key:"required",value:function(){return!0}},{kind:"method",key:"render",value:function(){return(0,f.qy)(o||(o=(0,d.A)([" ",' <ha-code-editor mode="jinja2" .hass="','" .value="','" .readOnly="','" autofocus autocomplete-entities autocomplete-icons @value-changed="','" dir="ltr" linewrap></ha-code-editor> '," "])),this.label?(0,f.qy)(i||(i=(0,d.A)(["<p>","","</p>"])),this.label,this.required?"*":""):"",this.hass,this.value,this.disabled,this._handleChange,this.helper?(0,f.qy)(n||(n=(0,d.A)(["<ha-input-helper-text>","</ha-input-helper-text>"])),this.helper):"")}},{kind:"method",key:"_handleChange",value:function(e){var t=e.target.value;this.value!==t&&(0,v.r)(this,"value-changed",{value:t})}},{kind:"get",static:!0,key:"styles",value:function(){return(0,f.AH)(a||(a=(0,d.A)(["p{margin-top:0}"])))}}]}}),f.WF))}}]);
//# sourceMappingURL=2269.cWxQTe56I3o.js.map