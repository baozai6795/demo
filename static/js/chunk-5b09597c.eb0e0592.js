(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b09597c"],{4599:function(e,t,n){"use strict";n("f861")},"5aee":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"icon-body"},[n("el-input",{staticStyle:{position:"relative"},attrs:{clearable:"",placeholder:"请输入图标名称"},on:{clear:e.filterIcons},nativeOn:{input:function(t){return e.filterIcons(t)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}},[n("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"suffix"},slot:"suffix"})]),n("div",{staticClass:"icon-list"},e._l(e.iconList,(function(t,r){return n("div",{key:r,on:{click:function(n){return e.selectedIcon(t)}}},[n("svg-icon",{staticStyle:{height:"30px",width:"16px"},attrs:{"icon-class":t}}),n("span",[e._v(e._s(t))])],1)})),0)],1)},a=[],l=(n("b0c0"),n("4de4"),n("d3b7"),n("caad"),n("2532"),n("ddb0"),n("d81d"),n("ac1f"),n("466d"),n("23f1")),i=function(e){return e.keys()},o=/\.\/(.*)\.svg/,s=i(l).map((function(e){return e.match(o)[1]})),m=s,u={name:"IconSelect",data:function(){return{name:"",iconList:m}},methods:{filterIcons:function(){var e=this;this.iconList=m,this.name&&(this.iconList=this.iconList.filter((function(t){return t.includes(e.name)})))},selectedIcon:function(e){this.$emit("selected",e),document.body.click()},reset:function(){this.name="",this.iconList=m}}},c=u,d=(n("4599"),n("2877")),p=Object(d["a"])(c,r,a,!1,null,"0273f142",null);t["a"]=p.exports},ba95:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,size:"small",inline:!0}},[n("el-form-item",{attrs:{label:"所属项目",prop:"menuName"}},[n("el-select",{attrs:{placeholder:"所属项目",clearable:""},model:{value:e.queryParams.status,callback:function(t){e.$set(e.queryParams,"status",t)},expression:"queryParams.status"}},e._l(e.dict.type.sys_normal_disable,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),e._v(" 项目资料 "),n("el-row",{staticClass:"mb8",staticStyle:{marginTop:"10px"},attrs:{gutter:10}},[n("el-col",{attrs:{span:1.5}},[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:menu:add"],expression:"['system:menu:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("打包下载")])],1),n("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),e.refreshTable?n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.menuList,"row-key":"menuId","default-expand-all":e.isExpandAll,"tree-props":{children:"children",hasChildren:"hasChildren"}}},[n("el-table-column",{attrs:{type:"selection",width:"50",align:"center"}}),n("el-table-column",{attrs:{prop:"menuName",label:"版本号","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{prop:"orderNum",label:"名称","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{prop:"perms",label:"提交人","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{prop:"component",label:"提交时间","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:menu:edit"],expression:"['system:menu:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(n){return e.handleUpdate(t.row)}}},[e._v("查看")]),n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:menu:remove"],expression:"['system:menu:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(n){return e.handleDelete(t.row)}}},[e._v("下载")]),n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:menu:remove"],expression:"['system:menu:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(n){return e.handleDelete(t.row)}}},[e._v("历史版本")])]}}],null,!1,2503155624)})],1):e._e(),n("div",{staticStyle:{"margin-top":"20px","margin-bottom":"10px"}},[e._v(" 评审意见汇总 ")]),n("el-row",{staticClass:"mb8",staticStyle:{marginTop:"10px"},attrs:{gutter:10}},[e._v("、 "),n("el-col",{attrs:{span:1.5}},[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:menu:add"],expression:"['system:menu:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("打包下载")])],1)],1),e.refreshTable?n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.menuList2,"row-key":"menuId","default-expand-all":e.isExpandAll,"tree-props":{children:"children",hasChildren:"hasChildren"}}},[n("el-table-column",{attrs:{type:"selection",width:"50",align:"center"}}),n("el-table-column",{attrs:{prop:"menuName",label:"意见发送时间","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{prop:"orderNum",label:"意见简述","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{prop:"perms",label:"回复简述","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:menu:edit"],expression:"['system:menu:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(n){return e.handleUpdate(t.row)}}},[e._v("附件下载")]),n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:menu:remove"],expression:"['system:menu:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(n){return e.handleDelete(t.row)}}},[e._v("查看")])]}}],null,!1,2515524787)})],1):e._e(),n("div",{staticStyle:{"margin-top":"20px","margin-bottom":"10px"}},[e._v(" 评审报告 ")]),e.refreshTable?n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.menuList3,"row-key":"menuId","default-expand-all":e.isExpandAll,"tree-props":{children:"children",hasChildren:"hasChildren"}}},[n("el-table-column",{attrs:{prop:"menuName1",label:"报告名称","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{prop:"orderNum1",label:"版本号","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{prop:"perms1",label:"发布者","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{prop:"menuName",label:"发布时间","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:menu:edit"],expression:"['system:menu:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(n){return e.handleUpdate(t.row)}}},[e._v("历史版本")]),n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:menu:remove"],expression:"['system:menu:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(n){return e.handleDelete(t.row)}}},[e._v("下载")])]}}],null,!1,144319775)})],1):e._e(),n("div",{staticStyle:{"margin-top":"20px","margin-bottom":"10px"}},[e._v(" 附件 ")]),n("el-row",{staticClass:"mb8",staticStyle:{marginTop:"10px"},attrs:{gutter:10}},[e._v("、 "),n("el-col",{attrs:{span:1.5}},[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:menu:add"],expression:"['system:menu:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("打包下载")])],1)],1),e.refreshTable?n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.menuList4,"row-key":"menuId","default-expand-all":e.isExpandAll,"tree-props":{children:"children",hasChildren:"hasChildren"}}},[n("el-table-column",{attrs:{type:"selection",width:"50",align:"center"}}),n("el-table-column",{attrs:{prop:"menuName1",label:"附件名称","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{prop:"orderNum1",label:"上传者","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{prop:"perms1",label:"上传时间","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:menu:edit"],expression:"['system:menu:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(n){return e.handleUpdate(t.row)}}},[e._v("下载")])]}}],null,!1,2393749430)})],1):e._e(),n("el-dialog",{attrs:{title:e.title,visible:e.open,width:"680px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[n("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"项目名称",prop:"menuName"}},[n("el-input",{attrs:{placeholder:"请输入项目名称"},model:{value:e.form.menuName,callback:function(t){e.$set(e.form,"menuName",t)},expression:"form.menuName"}})],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"编制单位",prop:"menuName"}},[n("el-input",{attrs:{placeholder:"请输入编制单位"},model:{value:e.form.menuName,callback:function(t){e.$set(e.form,"menuName",t)},expression:"form.menuName"}})],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"合同编号",prop:"menuName"}},[n("el-input",{attrs:{placeholder:"请输入合同编号"},model:{value:e.form.menuName,callback:function(t){e.$set(e.form,"menuName",t)},expression:"form.menuName"}})],1)],1),n("el-col",{attrs:{span:24}},[n("el-form-item",{attrs:{label:"项目类型",prop:"menuType"}},[n("el-radio-group",{model:{value:e.form.menuType,callback:function(t){e.$set(e.form,"menuType",t)},expression:"form.menuType"}},[n("el-radio",{attrs:{label:"M"}},[e._v("目录")]),n("el-radio",{attrs:{label:"C"}},[e._v("菜单")]),n("el-radio",{attrs:{label:"F"}},[e._v("按钮")])],1)],1)],1)],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),n("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},a=[],l=n("bf97"),i=n("ca17"),o=n.n(i),s=(n("542c"),n("5aee")),m={name:"Menu",dicts:["sys_show_hide","sys_normal_disable"],components:{Treeselect:o.a,IconSelect:s["a"]},data:function(){return{loading:!0,showSearch:!0,menuList:[],menuList2:[],menuList3:[],menuList4:[],menuOptions:[],title:"",open:!1,isExpandAll:!1,refreshTable:!0,queryParams:{menuName:void 0,visible:void 0},form:{},rules:{menuName:[{required:!0,message:"菜单名称不能为空",trigger:"blur"}],orderNum:[{required:!0,message:"菜单顺序不能为空",trigger:"blur"}],path:[{required:!0,message:"路由地址不能为空",trigger:"blur"}]}}},created:function(){this.getList()},methods:{getList:function(){this.loading=!0,this.menuList=[{menuName:"3",orderNum:"示例资料1",perms:"回复简述1",component:"2022-04-02 21:43:48"},{menuName:"2",orderNum:"示例资料2",perms:"李四",component:"2022-04-02 21:43:48"},{menuName:"3",orderNum:"示例资料3",perms:"张三",component:"2022-04-02 21:43:48"}],this.menuList2=[{orderNum:"意见简述1",perms:"回复简述1",menuName:"2022-04-02 21:43:48"},{orderNum:"意见简述2",perms:"回复简述2",menuName:"2022-04-02 21:43:48"},{orderNum:"意见简述3",perms:"回复简述3",menuName:"2022-04-02 21:43:48"}],this.menuList3=[{menuName1:"示例报告",orderNum1:"5",perms1:"张三",menuName:"2022-04-02 21:43:48"}],this.menuList4=[{menuName1:"示例附件1",orderNum1:"张三",perms1:"2022-04-02 21:43:48"},{menuName1:"示例附件2",orderNum1:"张三",perms1:"2022-04-02 21:43:48"}],this.loading=!1},normalizer:function(e){return e.children&&!e.children.length&&delete e.children,{id:e.menuId,label:e.menuName,children:e.children}},getTreeselect:function(){var e=this;Object(l["listMenu"])().then((function(t){e.menuOptions=[];var n={menuId:0,menuName:"主类目",children:[]};n.children=e.handleTree(t.data,"menuId"),e.menuOptions.push(n)}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={menuId:void 0,parentId:0,menuName:void 0,icon:void 0,menuType:"M",orderNum:void 0,isFrame:"1",isCache:"0",visible:"0",status:"0"},this.resetForm("form")},handleQuery:function(){this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleAdd:function(e){null!=e&&e.menuId?this.form.parentId=e.menuId:this.form.parentId=0,this.open=!0,this.title="添加菜单"},toggleExpandAll:function(){var e=this;this.refreshTable=!1,this.isExpandAll=!this.isExpandAll,this.$nextTick((function(){e.refreshTable=!0}))},handleUpdate:function(e){var t=this;this.reset(),this.getTreeselect(),Object(l["getMenu"])(e.menuId).then((function(e){t.form=e.data,t.open=!0,t.title="修改菜单"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(void 0!=e.form.menuId?Object(l["updateMenu"])(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})):Object(l["addMenu"])(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()})))}))},handleDelete:function(e){var t=this;this.$modal.confirm('是否确认删除名称为"'+e.menuName+'"的数据项？').then((function(){return Object(l["delMenu"])(e.menuId)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))}}},u=m,c=n("2877"),d=Object(c["a"])(u,r,a,!1,null,null,null);t["default"]=d.exports},bf97:function(e,t,n){"use strict";n.d(t,"j",(function(){return a})),n.d(t,"k",(function(){return l})),n.d(t,"g",(function(){return i})),n.d(t,"i",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"n",(function(){return m})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return c})),n.d(t,"o",(function(){return d})),n.d(t,"l",(function(){return p}));var r=n("b775");function a(e){return Object(r["a"])({url:"/project/pageList",method:"get",params:e})}function l(){return Object(r["a"])({url:"/project/listRunning",method:"get"})}function i(e){return Object(r["a"])({url:"/project/getById/"+e,method:"get"})}function o(e){return Object(r["a"])({url:"/project/queryByName?query="+e,method:"get"})}function s(e){return Object(r["a"])({url:"/project/add",method:"post",data:e})}function m(e){return Object(r["a"])({url:"/project/update",method:"put",data:e})}function u(e){return Object(r["a"])({url:"/project/check",method:"post",data:e})}function c(e){return Object(r["a"])({url:"/project/deleteById?id="+e,method:"delete"})}function d(e,t){return Object(r["a"])({url:"/project/updateStatus/"+e+"/"+t,method:"get"})}function p(e){return Object(r["a"])({url:"/project/selectUserByProjectId/"+e,method:"get"})}},f861:function(e,t,n){}}]);