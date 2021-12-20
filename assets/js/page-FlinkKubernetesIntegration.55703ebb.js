(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{540:function(e,t,r){"use strict";r.r(t);var s=r(1),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("StreamX Flink Kubernetes Integration is based on "),r("a",{attrs:{href:"https://ci.apache.org/projects/flink/flink-docs-stable/docs/deployment/resource-providers/native_kubernetes/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flink Native Kubernetes"),r("OutboundLink")],1),e._v(", and supports the following Flink-Native-K8s runtime mode:")]),e._v(" "),r("ul",[r("li",[e._v("Native-Kubernetes Application")]),e._v(" "),r("li",[e._v("Native-Kubernetes Session")])]),e._v(" "),r("p",[e._v("Currently, a single StreamX application instance supports only a single Kubernetes cluster.")]),e._v(" "),r("br"),e._v(" "),r("h2",{attrs:{id:"additional-software-environment"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#additional-software-environment"}},[e._v("#")]),e._v(" Additional Software Environment")]),e._v(" "),r("p",[e._v("StreamX Flink- K8s Integration requires the following additional software environment:")]),e._v(" "),r("ul",[r("li",[e._v("Kubernetes")]),e._v(" "),r("li",[e._v("Maven（StreamX running machines require）")]),e._v(" "),r("li",[e._v("Docker（StreamX running machines require）")])]),e._v(" "),r("p",[e._v("StreamX instance do not need to be mandatorily deployed on the Kubernetes nodes. It can be deployed on the machine external to the Kubernetes cluster, just needs to be open to networks communication with the Kubernetes cluster.")]),e._v(" "),r("br"),e._v(" "),r("h2",{attrs:{id:"deployment-preparation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deployment-preparation"}},[e._v("#")]),e._v(" Deployment Preparation")]),e._v(" "),r("h3",{attrs:{id:"kubernetes-access"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-access"}},[e._v("#")]),e._v(" Kubernetes Access")]),e._v(" "),r("p",[e._v("StreamX uses system file "),r("code",[e._v("～/.kube/config")]),e._v(" directly as the connection credential for Kubernetes cluster. An easy way to do this is to copy the "),r("code",[e._v("～/.kube/config")]),e._v(" from K8s node to user directory of StreamX node directly. Of course, you can generate conf file for K8s custom accounts to further constrain permission.")]),e._v(" "),r("p",[e._v("After that, you can quickly check the connectivity of the target K8s cluster via "),r("code",[e._v("kubectl")]),e._v(" on machine where StreamX was deployed:")]),e._v(" "),r("div",{staticClass:"language-shell line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[e._v("kubectl cluster-info\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("h3",{attrs:{id:"kubernetes-rbac"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-rbac"}},[e._v("#")]),e._v(" Kubernetes RBAC")]),e._v(" "),r("p",[e._v("The K8s RBAC resource used by Flink need to be created in advance, as described in the Flink Document. Refer to: https://ci.apache.org/projects/flink/flink-docs-stable/docs/deployment/resource-providers/native_kubernetes/#rbac")]),e._v(" "),r("p",[e._v("Assuming that Flink uses a k8s namespace of "),r("code",[e._v("flink-dev")]),e._v(" and does not explicitly specify K8s account, you can create a simple \t\t"),r("code",[e._v("clusterrolebinding")]),e._v(" resource as follows:")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("kubectl create clusterrolebinding flink-role-binding-default --clusterrole=edit --serviceaccount=flink-dev:default\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("h3",{attrs:{id:"remote-docker-register-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#remote-docker-register-service"}},[e._v("#")]),e._v(" Remote Docker Register Service")]),e._v(" "),r("p",[e._v("You need to configure the connection information for the remote Docker register service on the Settings page of StreamX.")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://assets.streamxhub.com/docker_register_setting.png",alt:"image-20210927182540478"}})]),e._v(" "),r("p",[e._v("You need to create a namespace named "),r("code",[e._v("streamx")]),e._v(" in remote docker register repository. The docker image automatically built by StreamX will be pushed to this namespace, so make sure that the "),r("em",[e._v("Docker Register User")]),e._v(" has "),r("code",[e._v("pull")]),e._v(" and "),r("code",[e._v("push")]),e._v(" permissions for this namespace.")]),e._v(" "),r("p",[e._v("Quick test using Docker command-line tool:")]),e._v(" "),r("div",{staticClass:"language-shell line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# verify access")]),e._v("\ndocker login --username"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your_username"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your_register_addr"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# verify push permission")]),e._v("\ndocker pull busybox\ndocker tag busybox "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your_register_addr"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/streamx/busybox\ndocker push "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your_register_addr"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/streamx/busybox\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# verify pull permission")]),e._v("\ndocker pull "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your_register_addr"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/streamx/busybox\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br")])]),r("br"),e._v(" "),r("h2",{attrs:{id:"flink-job-submission"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flink-job-submission"}},[e._v("#")]),e._v(" Flink Job Submission")]),e._v(" "),r("h3",{attrs:{id:"flink-application-job"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flink-application-job"}},[e._v("#")]),e._v(" Flink-Application Job")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://assets.streamxhub.com/k8s_application_submit.png",alt:"image-20210927203759713"}})]),e._v(" "),r("p",[e._v("The configuration to be specified are the following:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Flink Base Docker Image")]),e._v("： Tag of the base Flink Docker image can be obtained from "),r("a",{attrs:{href:"https://hub.docker.com/_/flink",target:"_blank",rel:"noopener noreferrer"}},[e._v("DockerHub - offical/flink"),r("OutboundLink")],1),e._v(", and also supports the user's private image.")]),e._v(" "),r("li",[r("strong",[e._v("Rest-Service Exposed Type")]),e._v("：Corresponds to the Flink native configuration of  "),r("a",{attrs:{href:"https://ci.apache.org/projects/flink/flink-docs-stable/docs/deployment/config/#kubernetes",target:"_blank",rel:"noopener noreferrer"}},[e._v("kubernetes.rest-service.exposed.type"),r("OutboundLink")],1),e._v(":\n"),r("ul",[r("li",[r("code",[e._v("ClusterIP")]),e._v("：Requires StreamX for direct access to the K8s internal network;")]),e._v(" "),r("li",[r("code",[e._v("LoadBalancer")]),e._v("：Requires K8s to create the LoadBalancer resource in advance while StreamX can access to that LoadBalancer gateway.")]),e._v(" "),r("li",[r("code",[e._v("NodePort")]),e._v("：Requires StreamX to be allowed to connect to all K8s nodes directly.")])])]),e._v(" "),r("li",[r("strong",[e._v("Kubernetes Pod Template")]),e._v("： Flink custom k8s pod-template configuration.")])]),e._v(" "),r("p",[e._v("When a Flink job is started, the Flink Web UI page can be accessed directly from the Detail page of StreamX:")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://assets.streamxhub.com/k8s_app_detail.png",alt:"image-20210927210034861"}})]),e._v(" "),r("h3",{attrs:{id:"flink-session-job"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flink-session-job"}},[e._v("#")]),e._v(" Flink-Session Job")]),e._v(" "),r("p",[e._v("The additional configuration of Flink-Native-Kubernetes Session job (e.g pod-template)  is entirely determined by the Flink-Session cluster deployed in advance, please refer to Flink Document: https://ci.apache.org/projects/flink/flink-docs-stable/docs/deployment/resource-providers/native_kubernetes")]),e._v(" "),r("br"),e._v(" "),r("h2",{attrs:{id:"related-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#related-configuration"}},[e._v("#")]),e._v(" Related Configuration")]),e._v(" "),r("p",[e._v("The Flink-K8s-Integration related configuration of StreamX in application.yaml are as follows:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Key")]),e._v(" "),r("th",[e._v("Description")]),e._v(" "),r("th",[e._v("Default Value")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("streamx.docker.register.image-namespace")]),e._v(" "),r("td",[e._v("Default namespace of remote docker register service repository.")]),e._v(" "),r("td",[e._v("steramx")])]),e._v(" "),r("tr",[r("td",[e._v("streamx.flink-k8s.tracking.polling-task-timeout-sec.job-status")]),e._v(" "),r("td",[e._v("Execution timeou for each group of flink state tracking tasks.")]),e._v(" "),r("td",[e._v("120")])]),e._v(" "),r("tr",[r("td",[e._v("streamx.flink-k8s.tracking.polling-task-timeout-sec.cluster-metric")]),e._v(" "),r("td",[e._v("Execution timeout for each group of flink metrics tracking tasks.")]),e._v(" "),r("td",[e._v("120")])]),e._v(" "),r("tr",[r("td",[e._v("streamx.flink-k8s.tracking.polling-interval-sec.job-status")]),e._v(" "),r("td",[e._v("Execution interval for each group of flink state tracking tasks.")]),e._v(" "),r("td",[e._v("5")])]),e._v(" "),r("tr",[r("td",[e._v("streamx.flink-k8s.tracking.polling-interval-sec.cluster-metric")]),e._v(" "),r("td",[e._v("Execution interval for each group of flink metrics tracking tasks")]),e._v(" "),r("td",[e._v("10")])]),e._v(" "),r("tr",[r("td",[e._v("streamx.flink-k8s.tracking.silent-state-keep-sec")]),e._v(" "),r("td",[e._v("Trace fault tolerance time for Slient state.")]),e._v(" "),r("td",[e._v("60")])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);