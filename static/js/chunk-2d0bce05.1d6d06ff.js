(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bce05"],{"2a33":function(l,s,e){"use strict";e.r(s);var t=function(){var l=this,s=l.$createElement,e=l._self._c||s;return e("div",{staticClass:"app-container"},[e("el-row",[e("el-col",{staticClass:"card-box",attrs:{span:12}},[e("el-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("span",[l._v("CPU")])]),e("div",{staticClass:"el-table el-table--enable-row-hover el-table--medium"},[e("table",{staticStyle:{width:"100%"},attrs:{cellspacing:"0"}},[e("thead",[e("tr",[e("th",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v("属性")])]),e("th",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v("值")])])])]),e("tbody",[e("tr",[e("td",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v("核心数")])]),e("td",{staticClass:"el-table__cell is-leaf"},[l.server.cpu?e("div",{staticClass:"cell"},[l._v(l._s(l.server.cpu.cpuNum))]):l._e()])]),e("tr",[e("td",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v("用户使用率")])]),e("td",{staticClass:"el-table__cell is-leaf"},[l.server.cpu?e("div",{staticClass:"cell"},[l._v(l._s(l.server.cpu.used)+"%")]):l._e()])]),e("tr",[e("td",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v("系统使用率")])]),e("td",{staticClass:"el-table__cell is-leaf"},[l.server.cpu?e("div",{staticClass:"cell"},[l._v(l._s(l.server.cpu.sys)+"%")]):l._e()])]),e("tr",[e("td",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v("当前空闲率")])]),e("td",{staticClass:"el-table__cell is-leaf"},[l.server.cpu?e("div",{staticClass:"cell"},[l._v(l._s(l.server.cpu.free)+"%")]):l._e()])])])])])])],1),e("el-col",{staticClass:"card-box",attrs:{span:12}},[e("el-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("span",[l._v("内存")])]),e("div",{staticClass:"el-table el-table--enable-row-hover el-table--medium"},[e("table",{staticStyle:{width:"100%"},attrs:{cellspacing:"0"}},[e("thead",[e("tr",[e("th",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v("属性")])]),e("th",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v("内存")])]),e("th",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v("JVM")])])])]),e("tbody",[e("tr",[e("td",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v("总内存")])]),e("td",{staticClass:"el-table__cell is-leaf"},[l.server.mem?e("div",{staticClass:"cell"},[l._v(l._s(l.server.mem.total)+"G")]):l._e()]),e("td",{staticClass:"el-table__cell is-leaf"},[l.server.jvm?e("div",{staticClass:"cell"},[l._v(l._s(l.server.jvm.total)+"M")]):l._e()])]),e("tr",[e("td",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v("已用内存")])]),e("td",{staticClass:"el-table__cell is-leaf"},[l.server.mem?e("div",{staticClass:"cell"},[l._v(l._s(l.server.mem.used)+"G")]):l._e()]),e("td",{staticClass:"el-table__cell is-leaf"},[l.server.jvm?e("div",{staticClass:"cell"},[l._v(l._s(l.server.jvm.used)+"M")]):l._e()])]),e("tr",[e("td",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v("剩余内存")])]),e("td",{staticClass:"el-table__cell is-leaf"},[l.server.mem?e("div",{staticClass:"cell"},[l._v(l._s(l.server.mem.free)+"G")]):l._e()]),e("td",{staticClass:"el-table__cell is-leaf"},[l.server.jvm?e("div",{staticClass:"cell"},[l._v(l._s(l.server.jvm.free)+"M")]):l._e()])]),e("tr",[e("td",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v("使用率")])]),e("td",{staticClass:"el-table__cell is-leaf"},[l.server.mem?e("div",{staticClass:"cell",class:{"text-danger":l.server.mem.usage>80}},[l._v(l._s(l.server.mem.usage)+"%")]):l._e()]),e("td",{staticClass:"el-table__cell is-leaf"},[l.server.jvm?e("div",{staticClass:"cell",class:{"text-danger":l.server.jvm.usage>80}},[l._v(l._s(l.server.jvm.usage)+"%")]):l._e()])])])])])])],1),e("el-col",{staticClass:"card-box",attrs:{span:24}},[e("el-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("span",[l._v("服务器信息")])]),e("div",{staticClass:"el-table el-table--enable-row-hover el-table--medium"},[e("table",{staticStyle:{width:"100%"},attrs:{cellspacing:"0"}},[e("tbody",[e("tr",[e("td",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v("服务器名称")])]),e("td",{staticClass:"el-table__cell is-leaf"},[l.server.sys?e("div",{staticClass:"cell"},[l._v(l._s(l.server.sys.computerName))]):l._e()]),e("td",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v("操作系统")])]),e("td",{staticClass:"el-table__cell is-leaf"},[l.server.sys?e("div",{staticClass:"cell"},[l._v(l._s(l.server.sys.osName))]):l._e()])]),e("tr",[e("td",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v("服务器IP")])]),e("td",{staticClass:"el-table__cell is-leaf"},[l.server.sys?e("div",{staticClass:"cell"},[l._v(l._s(l.server.sys.computerIp))]):l._e()]),e("td",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v("系统架构")])]),e("td",{staticClass:"el-table__cell is-leaf"},[l.server.sys?e("div",{staticClass:"cell"},[l._v(l._s(l.server.sys.osArch))]):l._e()])])])])])])],1),e("el-col",{staticClass:"card-box",attrs:{span:24}},[e("el-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("span",[l._v("Java虚拟机信息")])]),e("div",{staticClass:"el-table el-table--enable-row-hover el-table--medium"},[e("table",{staticStyle:{width:"100%"},attrs:{cellspacing:"0"}},[e("tbody",[e("tr",[e("td",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v("Java名称")])]),e("td",{staticClass:"el-table__cell is-leaf"},[l.server.jvm?e("div",{staticClass:"cell"},[l._v(l._s(l.server.jvm.name))]):l._e()]),e("td",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v("Java版本")])]),e("td",{staticClass:"el-table__cell is-leaf"},[l.server.jvm?e("div",{staticClass:"cell"},[l._v(l._s(l.server.jvm.version))]):l._e()])]),e("tr",[e("td",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v("启动时间")])]),e("td",{staticClass:"el-table__cell is-leaf"},[l.server.jvm?e("div",{staticClass:"cell"},[l._v(l._s(l.server.jvm.startTime))]):l._e()]),e("td",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v("运行时长")])]),e("td",{staticClass:"el-table__cell is-leaf"},[l.server.jvm?e("div",{staticClass:"cell"},[l._v(l._s(l.server.jvm.runTime))]):l._e()])]),e("tr",[e("td",{staticClass:"el-table__cell is-leaf",attrs:{colspan:"1"}},[e("div",{staticClass:"cell"},[l._v("安装路径")])]),e("td",{staticClass:"el-table__cell is-leaf",attrs:{colspan:"3"}},[l.server.jvm?e("div",{staticClass:"cell"},[l._v(l._s(l.server.jvm.home))]):l._e()])]),e("tr",[e("td",{staticClass:"el-table__cell is-leaf",attrs:{colspan:"1"}},[e("div",{staticClass:"cell"},[l._v("项目路径")])]),e("td",{staticClass:"el-table__cell is-leaf",attrs:{colspan:"3"}},[l.server.sys?e("div",{staticClass:"cell"},[l._v(l._s(l.server.sys.userDir))]):l._e()])]),e("tr",[e("td",{staticClass:"el-table__cell is-leaf",attrs:{colspan:"1"}},[e("div",{staticClass:"cell"},[l._v("运行参数")])]),e("td",{staticClass:"el-table__cell is-leaf",attrs:{colspan:"3"}},[l.server.jvm?e("div",{staticClass:"cell"},[l._v(l._s(l.server.jvm.inputArgs))]):l._e()])])])])])])],1),e("el-col",{staticClass:"card-box",attrs:{span:24}},[e("el-card",[e("div",{attrs:{slot:"header"},slot:"header"},[e("span",[l._v("磁盘状态")])]),e("div",{staticClass:"el-table el-table--enable-row-hover el-table--medium"},[e("table",{staticStyle:{width:"100%"},attrs:{cellspacing:"0"}},[e("thead",[e("tr",[e("th",{staticClass:"el-table__cell el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v("盘符路径")])]),e("th",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v("文件系统")])]),e("th",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v("盘符类型")])]),e("th",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v("总大小")])]),e("th",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v("可用大小")])]),e("th",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v("已用大小")])]),e("th",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v("已用百分比")])])])]),l.server.sysFiles?e("tbody",l._l(l.server.sysFiles,(function(s,t){return e("tr",{key:t},[e("td",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v(l._s(s.dirName))])]),e("td",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v(l._s(s.sysTypeName))])]),e("td",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v(l._s(s.typeName))])]),e("td",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v(l._s(s.total))])]),e("td",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v(l._s(s.free))])]),e("td",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell"},[l._v(l._s(s.used))])]),e("td",{staticClass:"el-table__cell is-leaf"},[e("div",{staticClass:"cell",class:{"text-danger":s.usage>80}},[l._v(l._s(s.usage)+"%")])])])})),0):l._e()])])])],1)],1)],1)},a=[],c=e("b775");function i(){return Object(c["a"])({url:"/monitor/server",method:"get"})}var _={name:"Server",data:function(){return{server:[]}},created:function(){this.getList(),this.openLoading()},methods:{getList:function(){var l=this;i().then((function(s){l.server=s.data,l.$modal.closeLoading()}))},openLoading:function(){this.$modal.loading("正在加载服务监控数据，请稍候！")}}},v=_,r=e("2877"),d=Object(r["a"])(v,t,a,!1,null,null,null);s["default"]=d.exports}}]);