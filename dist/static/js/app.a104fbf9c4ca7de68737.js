webpackJsonp([1],{"2SbN":function(n,t){},"9MoY":function(n,t){},BP7P:function(n,t){},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("7+uW"),r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"app_header_layout"},[t("div",{staticClass:"header_logo"},[t("h2",{staticClass:"inline_header"},[this._v("Corkboard")]),this._v(" "),t("span",{staticClass:"smaller"},[t("br"),this._v("\n      Draggable cards/background demo."),t("br"),this._v("\n      A proof-of-concept for draggable components via parent context query. Surprisingly challenging."),t("br"),this._v("\n      (Drag the background to move all cards.)\n    ")])])])}]};var d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"app_footer_layout"},[t("div",{staticClass:"footer_text"},[this._v("\n    Footer\n  ")])])}]};var o={name:"App",components:{AppHeader:e("VU/8")({data:function(){return{}}},r,!1,function(n){e("e8xb")},"data-v-301683c9",null).exports,AppFooter:e("VU/8")({data:function(){return{}}},d,!1,function(n){e("P2lO")},"data-v-4a23fe63",null).exports}},i={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"layout"},[t("app-header",{staticClass:"header"}),this._v(" "),t("router-view",{staticClass:"view"}),this._v(" "),t("app-footer",{staticClass:"footer"})],1)])},staticRenderFns:[]};var s=e("VU/8")(o,i,!1,function(n){e("BP7P")},null,null).exports,c=e("/ocq"),u={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"project_toolbar_layout"},[e("div",{staticClass:"controls"},[e("span",{staticClass:"fa_lower command_span",on:{click:function(t){n.sendAddCardCommand()}}},[e("i",{staticClass:"link fa fa-plus",attrs:{"aria-hidden":"true"}})]),n._v(" "),e("span",{staticClass:"smaller"},[n._v("(Click + to add card) Other corkboard tools will go here.")])])])},staticRenderFns:[]};var l=e("VU/8")({name:"ProjectToolbar",methods:{sendAddCardCommand:function(){this.$emit("add_card_command")}}},u,!1,function(n){e("d5Wj")},"data-v-eeee3506",null).exports,h=e("bOdI"),m=e.n(h),g={name:"CardNote",props:{id:String,markup:String},methods:{}},p={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"card_note_layout"},[t("pre",[this._v(this._s(this.markup))])])},staticRenderFns:[]};var f=e("VU/8")(g,p,!1,function(n){e("9MoY")},"data-v-15614f98",null).exports,v=m()({name:"CardComp",components:{CardNote:f},props:{id:String,title:String,notes:Array,x:Number,y:Number},data:function(){return{dragmovehandler_c:function(n){return function(t){if(t.stopPropagation(),!0===n.dragging){var e=t.clientX-n.downx,a=t.clientY-n.downy;n.$emit("move_card_command",{id:n.id,x:n.initx+e,y:n.inity+a})}}},dragmovehandler:void 0,dragendhandler_c:function(n){return function(t){t.stopPropagation(),n.dragging=!1,$(document).unbind("mousemove",n.dragmovehandler),$(document).unbind("mouseup",n.dragendhandler),$(document).unbind("blur",n.dragendhandler)}},dragendhandler:void 0,dragging:!1,initx:0,inity:0,downx:0,downy:0}},methods:{dragdown:function(n){0===n.button?(this.dragmovehandler=new this.dragmovehandler_c(this),$(document).mousemove(this.dragmovehandler),this.dragendhandler=new this.dragendhandler_c(this),$(document).mouseup(this.dragendhandler),$(document).blur(this.dragendhandler),this.dragging=!0,this.initx=this.x,this.inity=this.y,this.downx=n.clientX,this.downy=n.clientY):(this.dragging=!1,$(document).unbind("mousemove",this.dragmovehandler),$(document).unbind("mouseup",this.dragendhandler),$(document).unbind("blur",this.dragendhandler))},deleteCard:function(){this.$emit("delete_card_command",this.id)},split:function(n){return n.split("\n")}},computed:{style:function(){return"top:"+this.y+"px;left:"+this.x+"px;"}}},"components",{}),_={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"card_layout",style:n.style},[e("div",{staticClass:"draggable",on:{mousedown:function(t){t.stopPropagation(),n.dragdown(t)}}},[n._m(0),n._v(" "),e("span",{staticClass:"right_align",on:{click:function(t){n.deleteCard()}}},[e("i",{staticClass:"fa fa-window-close",attrs:{"aria-hidden":"true"}})])]),n._v(" "),e("h3",{staticClass:"title"},[n._v(n._s(n.title))]),n._v(" "),e("span",[n._v("Card notes JSON will be sub-components:")]),n._v(" "),n._l(n.notes,function(t){return e("pre",{staticClass:"note"},[n._v(n._s(t))])})],2)},staticRenderFns:[function(){var n=this.$createElement,t=this._self._c||n;return t("span",[t("i",{staticClass:"fas fa-th"})])}]};var b={name:"Project",data:function(){return{background:{dragmovehandler_c:function(n){return function(t){if(!0===n.background.dragging){var e=t.clientX-n.background.downx,a=t.clientY-n.background.downy;n.background.x=n.background.initx+e,n.background.y=n.background.inity+a}}},dragmovehandler:void 0,dragendhandler_c:function(n){return function(t){console.log("END"),n.background.dragging=!1,$(document).unbind("mousemove",n.background.dragmovehandler),$(document).unbind("mouseup",n.background.dragendhandler),$(document).unbind("blur",n.background.dragendhandler)}},dragendhandler:void 0,dragging:!1,initx:0,inity:0,downx:0,downy:0,x:0,y:0},nextcardid:2,cards:{0:{id:0,title:"Card name 0",notes:[{id:0,markup:"Some dummy info"},{id:1,markup:"Some more info"}],x:100,y:100},1:{id:1,title:"Card name 1",notes:[{id:0,markup:"Some dummy info"},{id:1,markup:"Some more info"}],x:500,y:100}}}},computed:{style:function(){return"top:"+this.background.y+"px;left:"+this.background.x+"px;"}},methods:{addcard:function(){console.log("added"),this.$set(this.cards,""+this.nextcardid,{id:this.nextcardid,title:"Card name "+this.nextcardid,notes:[{id:0,markup:"Some dummy info"},{id:1,markup:"Some more info"}],x:-this.background.x,y:75-this.background.y}),this.nextcardid++},deletecard:function(n){for(var t in this.cards)this.cards.hasOwnProperty(t)&&this.cards[t].hasOwnProperty("id")&&this.cards[t].id===n&&this.$delete(this.cards,t)},movecard:function(n){this.cards[n.id].x=n.x,this.cards[n.id].y=n.y},dragdown:function(n){0===n.button?(console.log(n),this.background.dragmovehandler=new this.background.dragmovehandler_c(this),$(document).mousemove(this.background.dragmovehandler),this.background.dragendhandler=new this.background.dragendhandler_c(this),$(document).mouseup(this.background.dragendhandler),$(document).blur(this.background.dragendhandler),this.background.dragging=!0,this.background.initx=this.background.x,this.background.inity=this.background.y,this.background.downx=n.clientX,this.background.downy=n.clientY):(this.background.dragging=!1,$(document).unbind("mousemove",this.background.dragmovehandler),$(document).unbind("mouseup",this.background.dragendhandler),$(document).unbind("blur",this.background.dragendhandler))}},components:{ProjectToolbar:l,CardComp:e("VU/8")(v,_,!1,function(n){e("XTCd")},"data-v-15c7b896",null).exports}},k={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"project_layout"},[e("project-toolbar",{on:{add_card_command:function(t){n.addcard()}}}),n._v(" "),e("div",{staticClass:"temp_container",on:{mousedown:function(t){n.dragdown(t)}}},[n._m(0),n._v(" "),e("div",{staticClass:"background",style:n.style},n._l(n.cards,function(t){return e("span",[e("card-comp",n._b({on:{move_card_command:function(t){n.movecard(t)},delete_card_command:function(t){n.deletecard(t)}}},"card-comp",t,!1))],1)}))])],1)},staticRenderFns:[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"project_path"},[this._v("\n      Project Name "),t("span",{staticClass:"fa_lower"},[t("i",{staticClass:"fas fa-chevron-right"})]),this._v(" Board Name\n    ")])}]};var C=e("VU/8")(b,k,!1,function(n){e("2SbN")},"data-v-dacb5a3a",null).exports;a.a.use(c.a);var y=new c.a({routes:[{path:"/",name:"Project",component:C}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:y,components:{App:s},template:"<App/>"})},P2lO:function(n,t){},XTCd:function(n,t){},d5Wj:function(n,t){},e8xb:function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.a104fbf9c4ca7de68737.js.map