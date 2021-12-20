(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{565:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"k8s-pvc-资源使用说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#k8s-pvc-资源使用说明"}},[t._v("#")]),t._v(" K8s PVC 资源使用说明")]),t._v(" "),a("p",[t._v("当前版本 StreamX Flink-K8s 任务对 PVC 资源（挂载 checkpoint/savepoint/logs 等文件资源）的支持基于 pod-template。")]),t._v(" "),a("p",[t._v("Native-Kubernetes Session 由创建 Session Cluster 时控制，这里不再赘述。Native-Kubernetes Application 支持在 StreamX 页面上直接编写 "),a("code",[t._v("pod-template")]),t._v("，"),a("code",[t._v("jm-pod-template")]),t._v("，"),a("code",[t._v("tm-pod-template")]),t._v(" 配置。")]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("以下是一个简要的示例，假设已经提前创建 "),a("code",[t._v("flink-checkpoint")]),t._v("， "),a("code",[t._v("flink-savepoint")]),t._v(" 两个 PVC ：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://assets.streamxhub.com/k8s_pvc.png",alt:"image-20210927215912190"}})]),t._v(" "),a("p",[t._v("pod-template 配置文本如下：")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Pod\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("template\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("container\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" checkpoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pvc\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /opt/flink/checkpoints\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" savepoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pvc\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /opt/flink/savepoints\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" checkpoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pvc\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("persistentVolumeClaim")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("claimName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("checkpoint\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" savepoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pvc\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("persistentVolumeClaim")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("claimName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("savepoint\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])]),a("p",[t._v("由于使用了 "),a("code",[t._v("rockdb-backend")]),t._v("，该依赖可以由 3 种方式提供：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("提供的 Flink Base Docker Image 已经包含该依赖（用户自行解决依赖冲突）；")])]),t._v(" "),a("li",[a("p",[t._v("在 StreamX 本地 "),a("code",[t._v("Workspace/jars")]),t._v(" 目录下放置 "),a("code",[t._v("flink-statebackend-rocksdb_xx.jar")]),t._v(" 依赖；")])]),t._v(" "),a("li",[a("p",[t._v("在 StreamX Dependency 配置中加入 rockdb-backend 依赖（此时 StreamX 会自动解决依赖冲突）：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://assets.streamxhub.com/rocksdb_dependency.png",alt:"image-20210927220203314"}})])])]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("在随后版本中，我们会提供一种优雅的 pod-template 配置自动生成的方式，来简化 k8s-pvc 挂载这一过程 : )")])])}),[],!1,null,null,null);s.default=e.exports}}]);