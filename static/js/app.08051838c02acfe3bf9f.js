webpackJsonp([1],Array(18).concat([function(t,e,n){"use strict";var s=n(4),a=n(104),o=n(84),i=n.n(o),c=n(85),r=n.n(c),l=n(83),u=n.n(l),d=n(86),p=n.n(d);s.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"Hello",component:i.a},{path:"/list",name:"List",component:r.a},{path:"/add",name:"Add",component:u.a},{path:"/send",name:"Send",component:p.a}]})},function(t,e,n){function s(t){n(64)}var a=n(0)(n(23),n(95),s,null,null);t.exports=a.exports},,function(t,e,n){"use strict";var s=n(34),a=n.n(s),o=n(4),i=new o.a;a()(o.a.prototype,{$bus:{get:function(){return i}}}),e.a=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(4),a=n(19),o=n.n(a),i=n(18);s.a.config.productionTip=!1,new s.a({el:"#app",router:i.a,template:"<App/>",components:{App:o.a}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(3),a=n(91),o=n.n(a),i=n(21),c=new s.a("ET_transactions",{auto_compaction:!0,size:100});console.log(c),console.log(i.a),e.default={name:"app",created:function(){this.$bus.$on("DELETE_ITEM",function(t){c.get(t).then(function(t){c.remove(t)}).catch(function(t){console.log(t)})})},components:{AppShell:o.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(3),a=n(87),o=n.n(a),i=n(90),c=n.n(i),r=n.i(s.a)("ET_transactions");e.default={name:"add-page",components:{CameraInput:o.a,ToggleSwitch:c.a},data:function(){return{description:"",date:"",amount:"",donors:[],colleagues:[],alcohol:"",receipt:"",notes:"",sentTo:[]}},methods:{submitHandler:function(){var t=this,e={_id:Date.now().toString(),description:this.description,date:new Date(this.date.replace(/-/g,"//").replace(/T.+/,"")),amount:this.amount,donors:this.donors,colleagues:this.colleagues,alcohol:this.alcohol,notes:this.notes,_attachments:{receipt:{content_type:this.receipt.type,data:this.receipt}}};r.put(e).then(function(e){t.$bus.$emit("ADD_ITEM_SUCCESS",e.id),console.log(e),t.$bus.$emit("FORM_RESET"),t.description="",t.date="",t.amount="",t.donors=[],t.colleagues=[],t.alcohol="",t.receipt="",t.notes="",t.sentTo=[]}).catch(function(t){console.log(t)}),console.log(e)},captureHandler:function(t){this.receipt=t}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(3),a=n(88),o=n.n(a),i=n.i(s.a)("ET_transactions");e.default={name:"list",components:{ListItem:o.a},data:function(){return{transactions:[]}},created:function(){var t=this;this.fetchData(),this.$bus.$on("DELETE_ITEM",function(e){var n=t.transactions.map(function(t){return t.id}).indexOf(e);t.transactions.splice(n,1)})},methods:{fetchData:function(){var t=this;i.allDocs({include_docs:!0,attachments:!0}).then(function(e){t.transactions=e.rows.map(function(t){return t.doc})})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(3),a=n(76),o=n.n(a),i=n(77),c=n.n(i),r=n(89),l=n.n(r),u=n.i(s.a)("ET_transactions"),d=c.a.pdfMake.vfs;o.a.vfs=d,e.default={name:"send-page",components:{SendItem:l.a},data:function(){return{transactions:[],selected:[],trip:"",officer:"",coordinator:""}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;u.allDocs({include_docs:!0,attachments:!0}).then(function(e){t.transactions=e.rows.map(function(t){return t.doc})})},selectItem:function(t){if("add"===t.type)this.selected.push(t.transaction);else if("remove"===t.type){var e=this.selected.indexOf(t.transaction);console.log(e),this.selected.splice(e,1)}console.log(t)},generatePDF:function(){for(var t={content:[{text:this.trip+" Report",style:"h1"},"_______________________________","\n",{text:"Gift Officer: "+this.officer,style:["em","small"]},{text:"Coordinator: "+this.coordinator,style:["em","small"]},"\n"],styles:{h1:{fontSize:20,bold:!0},h2:{fontSize:16,bold:!0},h3:{fontSize:14},h4:{fontSize:11,color:"silver"},em:{italics:!0},small:{fontSize:10}}},e=0,n=this.selected.length;e<n;e+=1){var s=e,a=this.transactions[s];console.log(a),t.content.push({text:"Expense #"+(e+1),style:"h2"},"\n",{columns:[[{text:"Details",style:"h3"},"\n",{text:"Date",style:"h4"},{text:""+new Date(a.date).toDateString()},{text:"\n",fontSize:4},{text:"Description",style:"h4"},{text:""+a.description},{text:"\n",fontSize:4},{text:"Amount",style:"h4"},{text:"$"+a.amount},{text:"\n",fontSize:4},{text:"Alcohol",style:"h4"},{text:""+a.alcohol},{text:"\n",fontSize:4},{text:"Donors",style:"h4"},{type:"circle",ul:[""+a.donors],margin:[20,0,0,0]},{text:"\n",fontSize:4},{text:"Colleagues",style:"h4"},{type:"circle",ul:[""+a.colleagues],margin:[20,0,0,0]},{text:"\n",fontSize:4},{text:"Notes",style:"h4"},{text:""+a.notes}],{image:"data:"+a._attachments.receipt.content_type+";base64, "+a._attachments.receipt.data,width:300}],pageBreak:s===n?"":"after"})}o.a.createPdf(t).open()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"",data:function(){return{receipt:""}},created:function(){var t=this;this.$bus.$on("FORM_RESET",function(){t.receipt=""})},computed:{thumbnail:function(){return window.URL.createObjectURL(this.receipt)}},methods:{imageHandler:function(t){var e=t.target.files[0];this.receipt=e,this.$emit("capture",e)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"",props:["expense"],data:function(){return{collapsed:!0,toggled:!1}},computed:{formattedDate:function(){return new Date(this.expense.date).toDateString().slice(4)},imageURL:function(){return this.expense._attachments.receipt.data&&this.toggled?"data:img/jpeg;base64, "+this.expense._attachments.receipt.data:0}},methods:{clickHandler:function(){this.collapsed=!this.collapsed,this.toggled=!0},deleteItem:function(){this.$bus.$emit("DELETE_ITEM_REQ",this.expense._id)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"",props:["expense","selected"],data:function(){return{picked:!1}},computed:{formattedDate:function(){return new Date(this.expense.date).toDateString().slice(4)}},methods:{select:function(){this.picked=!this.picked,this.picked?this.$emit("select",{transaction:this.expense,type:"add"}):this.$emit("select",{transaction:this.expense,type:"remove"})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"toggle-switch",props:["trueValue","falseValue"],data:function(){return{selected:!1,value:this.falseValue}},created:function(){var t=this;this.$bus.$on("FORM_RESET",function(){t.selected=!1,t.value=t.falseValue})},methods:{clickHandler:function(t){var e=t.target.checked?this.trueValue:this.falseValue;this.selected=!this.selected,this.value=e,this.$emit("toggle",e)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(92),a=n.n(s);e.default={name:"app-shell",components:{Toast:a.a},data:function(){return{}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"toast",created:function(){var t=this;this.$bus.$on("DELETE_ITEM_REQ",function(e){t.target=e}),this.$bus.$on("ADD_ITEM_SUCCESS",function(e){t.success=e,window.setTimeout(function(){t.success=""},2500)})},data:function(){return{target:"",success:""}},methods:{cancelDelete:function(){this.target=""},acceptDelete:function(){this.$bus.$emit("DELETE_ITEM",this.target),this.target=""}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,,,,,function(t,e,n){function s(t){n(62)}var a=n(0)(n(24),n(93),s,null,null);t.exports=a.exports},function(t,e,n){function s(t){n(63)}var a=n(0)(n(25),n(94),s,"data-v-05d091de",null);t.exports=a.exports},function(t,e,n){function s(t){n(66)}var a=n(0)(n(26),n(97),s,"data-v-2a22b37c",null);t.exports=a.exports},function(t,e,n){function s(t){n(67)}var a=n(0)(n(27),n(98),s,"data-v-35d77fa8",null);t.exports=a.exports},function(t,e,n){function s(t){n(68)}var a=n(0)(n(28),n(99),s,"data-v-5004cf1e",null);t.exports=a.exports},function(t,e,n){function s(t){n(70)}var a=n(0)(n(29),n(101),s,null,null);t.exports=a.exports},function(t,e,n){function s(t){n(71)}var a=n(0)(n(30),n(102),s,"data-v-bcc4f0c2",null);t.exports=a.exports},function(t,e,n){function s(t){n(69)}var a=n(0)(n(31),n(100),s,"data-v-5ee7580c",null);t.exports=a.exports},function(t,e,n){function s(t){n(72)}var a=n(0)(n(32),n(103),s,null,null);t.exports=a.exports},function(t,e,n){function s(t){n(65)}var a=n(0)(n(33),n(96),s,"data-v-1dfbfb34",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=this,n=e.$createElement,s=e._self._c||n;return s("div",{staticClass:"page-content",attrs:{id:"add-page"}},[s("h1",{staticClass:"page-title"},[e._v("Add Transaction")]),e._v(" "),s("form",{staticClass:"add-transaction-form",attrs:{action:"",method:""}},[s("section",{staticClass:"control"},[s("label",{staticClass:"label",attrs:{for:"description"}},[e._v("Description")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],staticClass:"input",attrs:{type:"text",name:"description"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}})]),e._v(" "),s("section",{staticClass:"half-width control",staticStyle:{width:"calc(66% - 5px)"}},[s("label",{staticClass:"label",attrs:{for:"date"}},[e._v("Date")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.date,expression:"date"}],staticClass:"input",attrs:{type:"date",name:"date"},domProps:{value:e.date},on:{input:function(t){t.target.composing||(e.date=t.target.value)}}})]),e._v(" "),s("section",{staticClass:"half-width control",staticStyle:{width:"calc(33% - 5px)"}},[s("label",{staticClass:"label",attrs:{for:"amount"}},[e._v("Amount")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"amount"}],staticClass:"input",attrs:{type:"number",name:"amount"},domProps:{value:e.amount},on:{input:function(t){t.target.composing||(e.amount=t.target.value)}}})]),e._v(" "),s("section",{staticClass:"control"},[s("label",{staticClass:"label",attrs:{for:"donors"}},[e._v("Donor Attendance")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.donors,expression:"donors"}],staticClass:"input",attrs:{type:"text",name:"donors"},domProps:{value:e.donors},on:{input:function(t){t.target.composing||(e.donors=t.target.value)}}})]),e._v(" "),s("section",{staticClass:"control"},[s("label",{staticClass:"label",attrs:{for:"colleagues"}},[e._v("Colleague Attendance")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.colleagues,expression:"colleagues"}],staticClass:"input",attrs:{type:"text",name:"colleagues"},domProps:{value:e.colleagues},on:{input:function(t){t.target.composing||(e.colleagues=t.target.value)}}})]),e._v(" "),s("section",{staticClass:"control",staticStyle:{width:"calc(33% - 5px)",display:"inline-block"}},[s("label",{staticClass:"label",attrs:{for:""}},[e._v("Alcohol?")]),e._v(" "),s("toggle-switch",{attrs:{"true-value":"Alcohol present","false-value":"No alcohol"},on:{toggle:function(e){t.alcohol=e}}})],1),e._v(" "),s("section",{staticClass:"camera-input",staticStyle:{width:"calc(66% - 5px)",display:"inline-block"}},[s("camera-input",{on:{capture:e.captureHandler}})],1),e._v(" "),s("section",{staticClass:"control"},[s("label",{staticClass:"label",attrs:{for:"notes"}},[e._v("Notes")]),e._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.notes,expression:"notes"}],staticClass:"textarea",attrs:{name:"notes"},domProps:{value:e.notes},on:{input:function(t){t.target.composing||(e.notes=t.target.value)}}})]),e._v(" "),s("section",[s("button",{staticClass:"submit-button",attrs:{type:"button",name:"button"},on:{click:e.submitHandler}},[e._v("Submit")])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[t._v("Gitter Chat")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("app-shell")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"toast"}},[n("transition",{attrs:{name:"slide-in"}},[t.success?n("div",{staticClass:"notification is-success"},[t._v("\n      Successfully added transaction!\n    ")]):t._e()]),t._v(" "),n("transition",{attrs:{name:"slide-in"}},[t.target?n("div",{staticClass:"notification is-danger"},[n("p",[t._v("Are you sure you want to delete this item?")]),t._v(" "),n("div",{staticClass:"controls"},[n("button",{on:{click:t.acceptDelete}},[t._v("Yes")]),t._v(" "),n("button",{on:{click:t.cancelDelete}},[t._v("No")])])]):t._e()])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-content",attrs:{id:"list"}},[n("h1",{staticClass:"page-title"},[t._v("List Transactions")]),t._v(" "),n("ul",t._l(t.transactions,function(t){return n("li",[n("ListItem",{attrs:{expense:t}})],1)}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-content",attrs:{id:"send"}},[n("h1",{staticClass:"page-title"},[t._v("Generate Report")]),t._v(" "),n("div",{staticClass:"input-group control"},[n("label",{staticClass:"label",attrs:{for:"trip"}},[t._v("Trip Name")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.trip,expression:"trip"}],staticClass:"input",attrs:{type:"text",name:"trip",value:""},domProps:{value:t.trip},on:{input:function(e){e.target.composing||(t.trip=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input-group control"},[n("label",{staticClass:"label",attrs:{for:"trip"}},[t._v("Gift Officer")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.officer,expression:"officer"}],staticClass:"input",attrs:{type:"text",name:"officer",value:""},domProps:{value:t.officer},on:{input:function(e){e.target.composing||(t.officer=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input-group control"},[n("label",{staticClass:"label",attrs:{for:"trip"}},[t._v("Coordinator")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.coordinator,expression:"coordinator"}],staticClass:"input",attrs:{type:"text",name:"coordinator",value:""},domProps:{value:t.coordinator},on:{input:function(e){e.target.composing||(t.coordinator=e.target.value)}}})]),t._v(" "),n("h2",{staticClass:"label"},[t._v("Select Expenses")]),t._v(" "),n("ul",t._l(t.transactions,function(e){return n("li",[n("SendItem",{attrs:{expense:e},on:{select:t.selectItem}})],1)})),t._v(" "),n("section",[n("button",{on:{click:t.generatePDF}},[t._v("Generate")])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("label",{attrs:{for:"receipt"}},[t.receipt?n("img",{attrs:{src:t.thumbnail,alt:""}}):n("svg",{attrs:{viewBox:"0 0 32 32"}},[n("path",{attrs:{fill:"#1C1C1C",d:"M16,12c-3.314,0-6,2.686-6,6s2.686,6,6,6s6-2.686,6-6S19.314,12,16,12z M16,23c-2.761,0-5-2.239-5-5\n      s2.239-5,5-5s5,2.239,5,5S18.761,23,16,23z"}}),t._v(" "),n("path",{attrs:{fill:"#1C1C1C",d:"M28,9c-1.105,0-2,0.895-2,2c0,1.105,0.895,2,2,2s2-0.895,2-2C30,9.895,29.105,9,28,9z M28,12\n      c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1s1,0.448,1,1C29,11.552,28.552,12,28,12z"}}),t._v(" "),n("path",{attrs:{fill:"#1C1C1C",d:"M16,9c-4.971,0-9,4.029-9,9c0,4.971,4.029,9,9,9s9-4.029,9-9C25,13.029,20.971,9,16,9z M16,26\n      c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S20.418,26,16,26z"}}),t._v(" "),n("path",{attrs:{fill:"#1C1C1C",d:"M30,7h-7V5c0-1.105-0.895-2-2-2H11C9.895,3,9,3.895,9,5v2H2C0.895,7,0,7.895,0,9v18c0,1.105,0.895,2,2,2h28\n      c1.105,0,2-0.895,2-2V9C32,7.895,31.105,7,30,7z M31,26c0,1.105-0.895,2-2,2H3c-1.105,0-2-0.895-2-2V10c0-1.105,0.895-2,2-2h7V7V6\n      c0-1.105,0.895-2,2-2h8c1.105,0,2,0.895,2,2v1v1h7c1.105,0,2,0.895,2,2V26z"}})])]),t._v(" "),n("input",{attrs:{id:"receipt",type:"file",accept:"image/*"},on:{change:t.imageHandler}}),t._v(" "),n("p",[t._v("Receipt")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"toggle-switch"},[n("input",{attrs:{type:"checkbox"},domProps:{checked:t.selected},on:{change:t.clickHandler}}),t._v(" "),n("div",{staticClass:"checkbox"})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"box list-item",class:{collapsed:this.collapsed},on:{click:t.clickHandler}},[n("div",{staticClass:"first-row"},[n("div",{staticClass:"column column-40"},[n("h6",[t._v("Date")]),t._v(" "),n("p",[t._v(t._s(t.formattedDate))])]),t._v(" "),n("div",{staticClass:"column column-40"},[n("h6",[t._v("Description")]),t._v(" "),n("p",[t._v(t._s(t.expense.description))])]),t._v(" "),n("div",{staticClass:"column"},[n("h6",[t._v("Amount")]),t._v(" "),n("p",[t._v(t._s(t.expense.amount))])])]),t._v(" "),n("div",{staticClass:"hidden-row"},[n("div",{staticClass:"details"},[n("div",{staticClass:"values"},[n("h6",[t._v("Donors")]),t._v(" "),n("p",[t._v(t._s(t.expense.donors))]),t._v(" "),n("h6",[t._v("Colleagues")]),t._v(" "),n("p",[t._v(t._s(t.expense.colleagues))]),t._v(" "),n("h6",[t._v("Alcohol")]),t._v(" "),n("p",[t._v(t._s(t.expense.alcohol))]),t._v(" "),n("h6",[t._v("Notes")]),t._v(" "),n("p",[t._v(t._s(t.expense.notes))])]),t._v(" "),n("div",{staticClass:"receipt"},[n("h6",[t._v("Receipt")]),t._v(" "),n("img",{attrs:{src:t.imageURL,alt:""}})])]),t._v(" "),n("footer",[n("span",{on:{click:t.deleteItem}},[t._v("Delete")])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"box list-item",on:{click:t.select}},[n("div",{staticClass:"first-row"},[n("div",{staticClass:"column column-40"},[n("h6",[t._v("Date")]),t._v(" "),n("p",[t._v(t._s(t.formattedDate))])]),t._v(" "),n("div",{staticClass:"column column-40"},[n("h6",[t._v("Description")]),t._v(" "),n("p",[t._v(t._s(t.expense.description))])]),t._v(" "),n("div",{staticClass:"column",staticStyle:{display:"flex","justify-content":"flex-end","align-items":"center"}},[t.picked?n("svg",{attrs:{x:"0px",y:"0px",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12,0C5.373,0,0,5.373,0,12s5.373,12,12,12s12-5.373,12-12S18.627,0,12,0z M12,22C6.477,22,2,17.522,2,12S6.477,2,12,2\n        s10,4.478,10,10S17.523,22,12,22z"}}),t._v(" "),n("path",{attrs:{d:"M16.814,7.33c-0.439-0.439-1.15-0.439-1.59,0l-5.033,5.033L8.158,10.33c-0.439-0.439-1.152-0.439-1.592,0L5.33,11.567\n        c-0.439,0.439-0.439,1.152,0,1.591l4.861,4.861l7.861-7.861c0.439-0.438,0.439-1.151,0-1.591L16.814,7.33z M10.191,16.605\n        l-4.242-4.242l1.414-1.414l2.828,2.828l5.828-5.828l1.414,1.414L10.191,16.605z"}})]):t._e()])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app-shell"}},[n("nav",[n("router-link",{attrs:{to:"/list"}},[n("button",{staticClass:"list-button",attrs:{type:"button",name:"button"}},[t._v("List")])]),t._v(" "),n("router-link",{attrs:{to:"/add"}},[n("button",{staticClass:"add-button",attrs:{type:"button",name:"button"}},[t._v("Add")])]),t._v(" "),n("router-link",{attrs:{to:"/send"}},[n("button",{staticClass:"send-button",attrs:{type:"button",name:"button"}},[t._v("Send")])])],1),t._v(" "),n("router-view"),t._v(" "),n("toast")],1)},staticRenderFns:[]}}]),[22]);
//# sourceMappingURL=app.08051838c02acfe3bf9f.js.map