(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{526:function(e,a,t){"use strict";t.r(a);var r={props:{name:name},data:()=>({copying:!1,option:[{opt:"-t",longOpt:"target",desc:"部署方式(目前只支持yarn-per-job,application)",deprecated:!1,value:" yarn-per-job | application "},{opt:"-d",longOpt:"detached",desc:"是否以detached模式启动",deprecated:!1,value:"true | false"},{opt:"-n",longOpt:"allowNonRestoredState",desc:"从savePoint恢复失败时是否允许跳过该步骤",deprecated:!1,value:"true | false"},{opt:"-sae",longOpt:"shutdownOnAttachedExit",desc:"attached模式下任务停止时是否关闭集群",deprecated:!1,value:"true | false"},{opt:"-m",longOpt:"jobmanager",desc:"JobManager的连接地址",deprecated:!1,value:"yarn-cluster | 连接地址"},{opt:"-p",longOpt:"parallelism",desc:"程序并行度",deprecated:!0,value:"int"},{opt:"-c",longOpt:"class",desc:"程序的main方法的全名称",deprecated:!0,value:"String"}],property:[{name:"$internal.application.main",desc:"程序的主类(main)的完整类名",required:!0},{name:"yarn.application.name",desc:"程序的名称(YARN中显示的任务名称)",required:!0},{name:"yarn.application.queue",desc:"在YARN中运行的队列名称",required:!1},{name:"taskmanager.numberOfTaskSlots",desc:"taskmanager Slot的数量",required:!1},{name:"parallelism.default",desc:"程序的并行",required:!1}],memory:[{group:"JVM 堆内存",name:"jobmanager.memory.heap.size",desc:"JobManager 的 JVM 堆内存"},{group:"堆外内存",name:"jobmanager.memory.off-heap.size",desc:"JobManager 的堆外内存(直接内存或本地内存)"},{group:"JVM Metaspace",name:"jobmanager.memory.jvm-metaspace.size",desc:"Flink JVM进程的Metaspace"},{group:"JVM Metaspace",name:"jobmanager.memory.jvm-metaspace.size",desc:"Flink JVM进程的Metaspace"},{group:"JVM Metaspace",name:"jobmanager.memory.jvm-overhead.min",desc:"Flink JVM进程的Metaspace"},{group:"JVM 开销",name:"jobmanager.memory.jvm-metaspace.size",desc:"用于其他 JVM 开销的本地内存"},{group:"JVM 开销",name:"jobmanager.memory.jvm-overhead.max",desc:"用于其他 JVM 开销的本地内存"},{group:"JVM 开销",name:"jobmanager.memory.jvm-overhead.fraction",desc:"用于其他 JVM开销的本地内存"},{group:"框架堆内存",name:"taskmanager.memory.framework.heap.size",desc:"用于Flink 框架的JVM堆内存(进阶配置)"},{group:"任务堆内存",name:"taskmanager.memory.task.heap.size",desc:"由Flink管理的用于排序,哈希表,缓存状态后端的本地内存"},{group:"托管内存",name:"taskmanager.memory.managed.size",desc:"用于其他 JVM 开销的本地内存"},{group:"托管内存",name:"taskmanager.memory.managed.fraction",desc:"用于其他 JVM 开销的本地内存"},{group:"框架堆外内存",name:"taskmanager.memory.framework.off-heap.size",desc:"用于Flink框架的堆外内存(直接内存或本地内存)进阶配置"},{group:"任务堆外内存",name:"taskmanager.memory.task.off-heap.size",desc:"用于Flink应用的算子及用户代码的堆外内存(直接内存或本地内存)"},{group:"JVM Metaspace",name:"taskmanager.memory.jvm-metaspace.size",desc:"Flink JVM 进程的 Metaspace"}],totalMem:[{group:"Flink 总内存 ",tm:"taskmanager.memory.flink.size",jm:"jobmanager.memory.flink.size"},{group:"进程总内存",tm:"taskmanager.memory.process.size",jm:"jobmanager.memory.process.size"}],checkpoints:[{name:"enable",desc:"是否开启checkpoint",value:"true | false"},{name:"interval",desc:"checkpoint的间隔周期",value:"毫秒"},{name:"mode",desc:"语义",value:" EXACTLY_ONCE | AT_LEAST_ONCE "},{name:"timeout",desc:"超时时间",value:"毫秒"},{name:"unaligned",desc:"是否非对齐",value:"true | false"}],backend:[{name:"value",desc:"backend具体存储的类型",value:"jobmanager | filesystem | rocksdb",mode:""},{name:"memory",desc:"针对jobmanager有效,最大内存",value:"kb如(5242880)",mode:"jobmanager"},{name:"async",desc:"是否开启异步",value:" true | false",mode:"jobmanager | filesystem"},{name:"incremental",desc:"是否开启增量",value:" true | false",mode:"rocksdb"}],fixedDelay:[{name:"attempts",desc:"在Job最终宣告失败之前,Flink尝试重启的次数",value:"3"},{name:"delay",desc:"一个任务失败之后不会立即重启,这里指定间隔多长时间重启",value:"无 | s | m | min | h | d"}],failureRate:[{name:"max-failures-per-interval",desc:"在一个Job认定为失败之前,最大的重启次数",value:"3"},{name:"failure-rate-interval",desc:"计算失败率的时间间隔",value:"无 | s | m | min | h | d"},{name:"delay",desc:"两次连续重启尝试之间的时间间隔",value:"无 | s | m | min | h | d"}],tables:[{name:"planner",desc:"Table Planner",value:"blink | old | any"},{name:"mode",desc:"Table Mode",value:"streaming | batch"},{name:"catalog",desc:"指定catalog,如指定初始化时会使用到",value:""},{name:"database",desc:"指定database,如指定初始化时会使用到",value:""}],envs:[{name:"操作系统",version:"Linux",required:!0,other:"不支持Window系统"},{name:"JAVA",version:"1.8+",required:!0,other:null},{name:"Maven",version:"3+",required:!0,other:"部署机器必须安装Maven,且配置好环境变量(项目编译会用到)"},{name:"Node.js",version:"",required:!0,other:"NodeJs相关环境"},{name:"Flink",version:"1.12.0+",required:!0,other:"版本必须是1.11.1或以上版本"},{name:"Hadoop",version:"2+",required:!1,other:"可选,如果on yarn则需要hadoop环境,并且配置好相关环境变量"},{name:"MySQL",version:"5.6+",required:!1,other:"部署机器或者其他机器安装MySQL"},{name:"Python",version:"2+",required:!1,other:"可选,火焰图功能会用到Python"},{name:"Perl",version:"5.16.3+",required:!1,other:"可选,火焰图功能会用到Perl"}]}),methods:{onCopy:function(e){document.querySelector("#message-container").innerHTML='<div class="message move-in" v-if="copying">\n        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"\n             width="16"\n             height="16"\n             fill="#06a35a">\n          <path d="M822.812 824.618c-83.076 81.992-188.546 124.614-316.05 127.865-122.085-3.251-223.943-45.873-305.935-127.865S76.213 640.406 72.962 518.682c3.251-127.503 45.873-232.973 127.865-316.05 81.992-83.075 184.211-126.058 305.936-129.309 127.503 3.251 232.973 46.234 316.049 129.31 83.076 83.076 126.059 188.546 129.31 316.05-2.89 121.723-46.234 223.943-129.31 305.935zM432.717 684.111c3.973 3.974 8.307 5.78 13.364 6.14 5.057.362 9.753-1.444 13.365-5.417l292.57-287.515c3.974-3.973 5.78-8.307 5.78-13.364s-1.806-9.753-5.78-13.365l1.807 1.806c-3.973-3.973-8.669-5.779-14.087-6.14-5.418-.361-10.475 1.445-14.809 5.418L460.529 592.006c-3.973 3.25-8.669 4.695-14.448 4.695-5.78 0-10.836-1.445-15.531-3.973l-94.273-72.962c-4.335-3.251-9.392-4.335-14.448-3.973s-9.392 3.25-12.642 7.585l-2.89 3.973c-3.25 4.334-4.334 9.391-3.973 14.81.722 5.417 2.528 10.113 5.779 14.086L432.717 684.11z"></path>\n        </svg>\n        <span>复制成功 🎉</span>\n      </div>',setTimeout(()=>document.querySelector("#message-container").innerHTML="",2e3)},onError:function(e){alert("Failed to copy")}}},s=t(1),n=Object(s.a)(r,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",["option"===e.name?t("table",{staticClass:"table",staticStyle:{width:"100%",display:"inline-table"}},[e._m(0),e._v(" "),t("tbody",e._l(e.option,(function(a,r){return t("tr",{key:e.name.concat(r)},[t("td",[e._v(e._s(a.opt))]),e._v(" "),t("td",[e._v(e._s(a.longOpt))]),e._v(" "),t("td",[a.deprecated?t("span",{staticClass:"fa fa-times",staticStyle:{color:"red"}}):t("span",{staticClass:"fa fa-check",staticStyle:{color:"green"}})]),e._v(" "),t("td",[e._v(e._s(a.value))]),e._v(" "),t("td",[e._v(e._s(a.desc))])])})),0)]):e._e(),e._v(" "),"property"===e.name?t("table",{staticClass:"table",staticStyle:{width:"100%",display:"inline-table"}},[e._m(1),e._v(" "),t("tbody",e._l(e.property,(function(a,r){return t("tr",{key:e.name.concat(r)},[t("td",[t("span",{staticClass:"label-info"},[e._v(e._s(a.name))]),e._v(" "),t("i",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:a.name,expression:"item.name",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticClass:"fa fa-copy"})]),e._v(" "),t("td",[e._v(e._s(a.desc))]),e._v(" "),t("td",[a.required?t("span",{staticClass:"fa fa-toggle-on",staticStyle:{color:"green"},attrs:{title:"必须"}}):t("span",{staticClass:"fa fa-toggle-off",staticStyle:{color:"gray"},attrs:{title:"可选"}})])])})),0)]):e._e(),e._v(" "),"memory"===e.name?t("table",{staticClass:"table",staticStyle:{width:"100%",display:"inline-table"}},[e._m(2),e._v(" "),t("tbody",e._l(e.memory,(function(a,r){return t("tr",{key:e.name.concat(r)},[t("td",[t("span",{staticClass:"label-info"},[e._v(e._s(a.name))]),e._v(" "),t("i",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:a.name,expression:"item.name",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticClass:"fa fa-copy"})]),e._v(" "),t("td",[e._v(e._s(a.desc))])])})),0)]):e._e(),e._v(" "),"totalMem"===e.name?t("table",{staticClass:"table",staticStyle:{width:"100%",display:"inline-table"}},[e._m(3),e._v(" "),t("tbody",e._l(e.totalMem,(function(a,r){return t("tr",{key:e.name.concat(r)},[t("td",[e._v(e._s(a.group))]),e._v(" "),t("td",[t("span",{staticClass:"label-info"},[e._v(e._s(a.tm))]),e._v(" "),t("i",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:a.tm,expression:"item.tm",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticClass:"fa fa-copy"})]),e._v(" "),t("td",[t("span",{staticClass:"label-info"},[e._v(e._s(a.jm))]),e._v(" "),t("i",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:a.jm,expression:"item.jm",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticClass:"fa fa-copy"})])])})),0)]):e._e(),e._v(" "),"checkpoints"===e.name?t("table",{staticClass:"table",staticStyle:{width:"100%",display:"inline-table"}},[e._m(4),e._v(" "),t("tbody",e._l(e.checkpoints,(function(a,r){return t("tr",{key:e.name.concat(r)},[t("td",[t("span",{staticClass:"label-info"},[e._v(e._s(a.name))]),e._v(" "),t("i",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:a.name,expression:"item.name",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticClass:"fa fa-copy"})]),e._v(" "),t("td",[e._v(e._s(a.desc))]),e._v(" "),t("td",[e._v(e._s(a.value))])])})),0)]):e._e(),e._v(" "),"backend"===e.name?t("table",{staticClass:"table",staticStyle:{width:"100%",display:"inline-table"}},[e._m(5),e._v(" "),t("tbody",e._l(e.backend,(function(a,r){return t("tr",{key:e.name.concat(r)},[t("td",[t("span",{staticClass:"label-info"},[e._v(e._s(a.name))]),e._v(" "),t("i",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:a.name,expression:"item.name",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticClass:"fa fa-copy"})]),e._v(" "),t("td",[e._v(e._s(a.desc))]),e._v(" "),t("td",[e._v(e._s(a.value))]),e._v(" "),t("td",[e._v(e._s(a.mode))])])})),0)]):e._e(),e._v(" "),"fixed-delay"===e.name?t("table",{staticClass:"table",staticStyle:{width:"100%",display:"inline-table"}},[e._m(6),e._v(" "),t("tbody",e._l(e.fixedDelay,(function(a,r){return t("tr",{key:e.name.concat(r)},[t("td",[t("span",{staticClass:"label-info"},[e._v(e._s(a.name))]),e._v(" "),t("i",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:a.name,expression:"item.name",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticClass:"fa fa-copy"})]),e._v(" "),t("td",[e._v(e._s(a.desc))]),e._v(" "),t("td",[e._v(e._s(a.value))])])})),0)]):e._e(),e._v(" "),"failure-rate"===e.name?t("table",{staticClass:"table",staticStyle:{width:"100%",display:"inline-table"}},[e._m(7),e._v(" "),t("tbody",e._l(e.failureRate,(function(a,r){return t("tr",{key:e.name.concat(r)},[t("td",[t("span",{staticClass:"label-info"},[e._v(e._s(a.name))]),e._v(" "),t("i",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:a.name,expression:"item.name",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticClass:"fa fa-copy"})]),e._v(" "),t("td",[e._v(e._s(a.desc))]),e._v(" "),t("td",[e._v(e._s(a.value))])])})),0)]):e._e(),e._v(" "),"tables"===e.name?t("table",{staticClass:"table",staticStyle:{width:"100%",display:"inline-table"}},[e._m(8),e._v(" "),t("tbody",e._l(e.tables,(function(a,r){return t("tr",{key:e.name.concat(r)},[t("td",[t("span",{staticClass:"label-info"},[e._v(e._s(a.name))]),e._v(" "),t("i",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:a.name,expression:"item.name",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticClass:"fa fa-copy"})]),e._v(" "),t("td",[e._v(e._s(a.desc))]),e._v(" "),t("td",[e._v(e._s(a.value))])])})),0)]):e._e(),e._v(" "),"envs"===e.name?t("table",{staticClass:"envs",staticStyle:{width:"100%",display:"inline-table"}},[e._m(9),e._v(" "),t("tbody",e._l(e.envs,(function(a,r){return t("tr",{key:"envs".concat(r)},[t("td",[t("span",{staticClass:"label-info"},[e._v(e._s(a.name))])]),e._v(" "),t("td",[e._v(e._s(a.version))]),e._v(" "),t("td",[a.required?t("span",{staticClass:"fa fa-toggle-on",staticStyle:{color:"green"},attrs:{title:"必须"}}):t("span",{staticClass:"fa fa-toggle-off",staticStyle:{color:"gray"},attrs:{title:"可选"}})]),e._v(" "),t("td",[e._v(e._s(a.other))])])})),0)]):e._e()])}),[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("thead",[t("tr",[t("td",{staticStyle:{width:"45px"}},[e._v("短参数")]),e._v(" "),t("td",[e._v('完整参数(前缀"--")')]),e._v(" "),t("td",{staticStyle:{width:"30px"}},[e._v("有效")]),e._v(" "),t("td",[e._v("取值范围值或类型")]),e._v(" "),t("td",[e._v("作用描述")])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("thead",[a("tr",[a("td",[this._v("参数名称")]),this._v(" "),a("td",[this._v("作用描述")]),this._v(" "),a("td",[this._v("是否必须")])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("thead",[a("tr",[a("td",{staticStyle:{width:"380px"}},[this._v("参数名称")]),this._v(" "),a("td",[this._v("作用描述")])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("thead",[a("tr",[a("td",[this._v("配置项")]),this._v(" "),a("td",[this._v("TaskManager 配置参数")]),this._v(" "),a("td",[this._v("JobManager 配置参数")])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("thead",[a("tr",[a("td",[this._v("配置项")]),this._v(" "),a("td",[this._v("作用描述")]),this._v(" "),a("td",[this._v("参数值或类型")])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("thead",[a("tr",[a("td",[this._v("配置项")]),this._v(" "),a("td",[this._v("作用描述")]),this._v(" "),a("td",[this._v("参数值或类型")]),this._v(" "),a("td",[this._v("该配置在哪种类型下有效")])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("thead",[a("tr",[a("td",[this._v("配置项")]),this._v(" "),a("td",[this._v("作用描述")]),this._v(" "),a("td",[this._v("参数值或单位")])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("thead",[a("tr",[a("td",[this._v("配置项")]),this._v(" "),a("td",[this._v("作用描述")]),this._v(" "),a("td",[this._v("参数值或单位")])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("thead",[a("tr",[a("td",[this._v("配置项")]),this._v(" "),a("td",[this._v("作用描述")]),this._v(" "),a("td",[this._v("参数值")])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("thead",[a("tr",[a("td",[this._v("要求")]),this._v(" "),a("td",[this._v("版本")]),this._v(" "),a("td",[this._v("是否必须")]),this._v(" "),a("td",[this._v("其他事项")])])])}],!1,null,null,null);a.default=n.exports}}]);