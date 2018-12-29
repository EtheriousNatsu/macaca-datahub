(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{164:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"webpack-tutorial"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-tutorial","aria-hidden":"true"}},[t._v("#")]),t._v(" Webpack Tutorial")]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("p",[t._v("Macaca DataHub and DataHub Proxy Middleware are distibuted through npm. To install it, run the command line below:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i macaca-datahub --save-dev\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i datahub-proxy-middleware --save-dev\n")])])]),s("h2",{attrs:{id:"sample-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sample-project","aria-hidden":"true"}},[t._v("#")]),t._v(" Sample Project")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"//github.com/macaca-sample/webpack-datahub-sample"}},[t._v("webpack-datahub-sample")])])]),t._v(" "),s("h2",{attrs:{id:"how-a-webpack-project-integrates-datahub"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-a-webpack-project-integrates-datahub","aria-hidden":"true"}},[t._v("#")]),t._v(" How a webpack project integrates DataHub")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" DataHub "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'macaca-datahub'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" datahubMiddleware "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'datahub-proxy-middleware'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// datahub config")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// document: https://github.com/macacajs/macaca-datahub#configuration")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" datahubConfig "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5678")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  hostname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'127.0.0.1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'..'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  proxy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'^/api'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      hub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sample'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  showBoard"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" defaultDatahub "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DataHub")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" datahubConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// devServer field")]),t._v("\ndevServer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  before"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("datahubMiddleware")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("datahubConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  after"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    defaultDatahub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("datahubConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'datahub ready'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("You can also get others extra build infomation. If you want more, please modify the "),s("a",{attrs:{href:"//github.com/macacajs/macaca-datahub#configuration"}},[t._v("custom config")]),t._v(" file.")]),t._v(" "),s("h2",{attrs:{id:"quick-start"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quick-start","aria-hidden":"true"}},[t._v("#")]),t._v(" Quick Start")]),t._v(" "),s("h3",{attrs:{id:"step1-create-new-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step1-create-new-project","aria-hidden":"true"}},[t._v("#")]),t._v(" Step1 - Create New Project")]),t._v(" "),s("p",[t._v("Create a new item named sample.")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://ws1.sinaimg.cn/large/796b664dgy1fuueeskabij21yg1bo43p.jpg",width:"75%"}})]),t._v(" "),s("h3",{attrs:{id:"step2-add-an-interface"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step2-add-an-interface","aria-hidden":"true"}},[t._v("#")]),t._v(" Step2 - Add An Interface")]),t._v(" "),s("p",[t._v("Add the interface named "),s("code",[t._v("test1")]),t._v(", request the interface "),s("code",[t._v("http://localhost:8080/api/test1")]),t._v(" and get the corresponding mock data.")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://ws1.sinaimg.cn/large/796b664dgy1fuueesm0htj21xm1aidla.jpg",width:"75%"}})]),t._v(" "),s("h3",{attrs:{id:"step3-build-interface"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step3-build-interface","aria-hidden":"true"}},[t._v("#")]),t._v(" Step3 - Build Interface")]),t._v(" "),s("p",[t._v("Rewrite Response, set the interface response information, and return status code "),s("code",[t._v("200")]),t._v(" if not set.")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://ws1.sinaimg.cn/large/796b664dgy1fuueesq1f2j21y21as45g.jpg",width:"75%"}})]),t._v(" "),s("p",[t._v("The scene management, add scenario content corresponding to Response, and the development environment adds multiple scenarios which is conducive to rapid switching.")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://ws1.sinaimg.cn/large/796b664dgy1fuueesm7o3j21xw1asdl2.jpg",width:"75%"}})]),t._v(" "),s("p",[t._v("The proxy pattern, it can be configured if required.")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://ws1.sinaimg.cn/large/796b664dgy1fuueesyt33j21y61ay463.jpg",width:"75%"}})]),t._v(" "),s("p",[t._v("Request field description, you can use scheme JSON for validation and choose whether to open validation or not.")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://ws1.sinaimg.cn/large/796b664dgy1fuueesm12ej21y01aqtew.jpg",width:"75%"}})]),t._v(" "),s("p",[t._v("Response field description, you can use scheme JSON for validation and choose whether to open validation or not. Response descriptions are automatically generated based on scenario information configuration.")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://ws1.sinaimg.cn/large/796b664dgy1fuueesmb50j21xe1bqq94.jpg",width:"75%"}})]),t._v(" "),s("h3",{attrs:{id:"step4-generating-document"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step4-generating-document","aria-hidden":"true"}},[t._v("#")]),t._v(" Step4 - Generating Document")]),t._v(" "),s("p",[t._v("Automatically generate documents based on interfaces.")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://ws1.sinaimg.cn/large/796b664dgy1fuueet04ehj21yk1b4gst.jpg",width:"75%"}})]),t._v(" "),s("h3",{attrs:{id:"step5-build-now"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step5-build-now","aria-hidden":"true"}},[t._v("#")]),t._v(" Step5 - Build Now")]),t._v(" "),s("p",[t._v("Specific code reference "),s("a",{attrs:{href:"//github.com/macaca-sample/webpack-datahub-sample"}},[t._v("webpack-datahub-sample")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" request "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nrequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/test1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nrequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onreadystatechange")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" json "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseText"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#value'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nrequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("The mock data is displayed in the page after requesting the "),s("code",[t._v("http://localhost:8080/api/test1")]),t._v(" interface.")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://ws1.sinaimg.cn/large/796b664dgy1fuugd10nbyj21t21amq9p.jpg",width:"75%"}})]),t._v(" "),s("h3",{attrs:{id:"step6-history-request-information"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step6-history-request-information","aria-hidden":"true"}},[t._v("#")]),t._v(" Step6 - History Request Information")]),t._v(" "),s("p",[t._v("This page displays historical request details.")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://ws1.sinaimg.cn/large/796b664dgy1fuuewr0rmyj21xu1aytet.jpg",width:"75%"}})])])}],!1,null,null,null);e.options.__file="quick-start.md";a.default=e.exports}}]);