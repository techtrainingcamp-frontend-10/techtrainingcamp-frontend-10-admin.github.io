(this.webpackJsonpbackstage=this.webpackJsonpbackstage||[]).push([[0],{181:function(e,t,n){},275:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(27),o=n.n(a),i=(n(181),n(168)),s=n(26),r=n(25),l=n(172),u=n(282),d=n(283),j=n(38),b=n(23);function h(){return localStorage.getItem("token")}function O(){return localStorage.getItem("userId")}function m(){return!!localStorage.getItem("token")}var x=n(156),p=n(157),f=n(158),g=n.n(f).a.create({baseURL:"https://qcmt57.fn.thelarkcloud.com",timeout:5e3});g.interceptors.request.use((function(e){var t=O(),n=h();return t&&n&&(e.data||(e.data={}),e.data.userId=t,e.data.token=n),e}),(function(e){})),g.interceptors.response.use((function(e){return e.data}),(function(e){if(e&&e.response)switch(e.response.status){case 400:console.log("\u8bf7\u6c42\u9519\u8bef");break;case 401:console.log("\u672a\u6388\u6743\u8bbf\u95ee");break;default:console.log("\u5176\u4ed6\u9519\u8bef\u4fe1\u606f")}return e}));var v,I,C,k,y,S,w=g,E=function(){return w({method:"post",url:"/searchVideo"})},z=function(){return w({method:"post",url:"/searchLive"})},D=n(176),F=function(){function e(){Object(x.a)(this,e),this.isLogin=!1}return Object(p.a)(e,[{key:"login",value:function(e,t,n){var c=this;(function(e,t){return w({url:"/managerLogin",data:{userName:e,password:t}})})(e,t).then((function(e){console.log(e),c.isLogin=!0,n(e)})).catch((function(e){var t;alert("\u767b\u5f55\u5931\u8d25"),t="error",D.a[t]({message:"\u767b\u5f55\u5931\u8d25",description:"\u8bf7\u68c0\u67e5\u60a8\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u8f93\u5165\u662f\u5426\u6b63\u786e"})}))}}]),e}(),N=n(6),A=Object(b.f)((function(e){var t=Object(c.useState)(""),n=Object(r.a)(t,2),a=n[0],o=n[1],i=Object(c.useState)(""),b=Object(r.a)(i,2),h=b[0],O=b[1];return Object(N.jsxs)(u.a,Object(s.a)(Object(s.a)({},{labelCol:{span:8},wrapperCol:{span:8}}),{},{name:"basic",initialValues:{remember:!0},onFinish:function(e){console.log("Success:",e)},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(N.jsx)(u.a.Item,{label:"\u7528\u6237\u540d",name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}],children:Object(N.jsx)(d.a,{onInput:function(e){o(e.target.value)}})}),Object(N.jsx)(u.a.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}],children:Object(N.jsx)(d.a.Password,{onInput:function(e){O(e.target.value)}})}),Object(N.jsxs)(u.a.Item,Object(s.a)(Object(s.a)({},{wrapperCol:{offset:8,span:16}}),{},{children:[Object(N.jsx)(j.a,{type:"primary",disabled:!(a.length>0&&h.length>0),onClick:function(){(new F).login(a,h,(function(t){var n,c;n=t.token,localStorage.setItem("token",n),c=t.userId,localStorage.setItem("userId",c),l.b.success("\u767b\u5f55\u6210\u529f\uff01"),e.history.push("/live")}))},children:"\u767b\u5f55"}),Object(N.jsxs)(u.a.Item,{children:["\u60a8\u662f\u65b0\u7528\u6237\uff1f ",Object(N.jsx)("a",{href:"/register",children:"\u6ce8\u518c"})]})]}))]}))})),L=Object(c.memo)((function(){return Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{children:"\u767b\u5f55"}),Object(N.jsx)(A,{})]})})),T=n(33),q=n(34),_=q.a.div(v||(v=Object(T.a)(["\n  .new-button {\n    margin: 20px 0;\n    background: #5276F0;\n    border-color: #5276F0;\n  }\n"]))),M=n(284),P=n(289),R={labelCol:{span:6},wrapperCol:{span:15}},V=function(e){var t=e.onAdd,n=Object(c.useState)(!1),a=Object(r.a)(n,2),o=a[0],i=a[1],b=Object(c.useState)(!1),h=Object(r.a)(b,2),O=h[0],m=h[1],x=Object(c.useState)(""),p=Object(r.a)(x,2),f=p[0],g=p[1],v=Object(c.useState)(""),I=Object(r.a)(v,2),C=I[0],k=I[1],y=function(e){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)},S=u.a.useForm(),w=Object(r.a)(S,1)[0];return Object(N.jsxs)("div",{children:[Object(N.jsx)(j.a,{className:"new-button",type:"primary",onClick:function(){g(""),k(""),i(!0)},children:"\u65b0\u5efa\u76f4\u64ad"}),Object(N.jsx)(M.a,{title:"\u65b0\u5efa\u76f4\u64ad",visible:o,onOk:function(){console.log(y(C)),f.length>0&&y(C)?(m(!0),setTimeout((function(){t(f,C),g(""),k(""),i(!1),m(!1),l.b.success("\u914d\u7f6e\u6210\u529f"),D.a.open({message:"\u5c0f\u63d0\u793a",description:"\u53ef\u4ee5\u70b9\u51fb\u76f4\u64ad\u95f4\u5361\u7247\u6765\u6682\u505c/\u7ee7\u7eed\u76f4\u64ad\u54e6\uff01",icon:Object(N.jsx)(P.a,{style:{color:"#108ee9"}})})}),500)):l.b.warning("\u8bf7\u6b63\u786e\u586b\u5199\u4fe1\u606f\uff1a\u68c0\u67e5\u76f4\u64ad\u6e90\u548c\u6807\u9898\u586b\u5199")},confirmLoading:O,onCancel:function(){i(!1)},cancelText:"\u53d6\u6d88",okText:"\u4fdd\u5b58\u5e76\u914d\u7f6e",children:Object(N.jsxs)(u.a,Object(s.a)(Object(s.a)({form:w},R),{},{name:"basic",children:[Object(N.jsx)(u.a.Item,{label:"\u6807\u9898",name:"title",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u76f4\u64ad\u95f4\u7684\u540d\u79f0"}],children:Object(N.jsx)(d.a,{value:f,onChange:function(e){g(e.target.value)}})}),Object(N.jsx)(u.a.Item,{label:"\u76f4\u64ad\u6e90",name:"url",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6709\u6548\u7684m3u8\u76f4\u64ad\u6e90URL"}],children:Object(N.jsx)(d.a,{value:C,onChange:function(e){k(e.target.value)}})})]}))})]})},G=n(281),U=n(285),J=n(286),B=n(287),H=n(124),K=q.a.div(I||(I=Object(T.a)(["\n  .ant-card-actions {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n  }\n\n  .ant-tag {\n    position:absolute;\n    top: 10px;\n    left: 10px;\n  }\n"]))),$=G.a.Meta,Q=function(e){var t=e.liveCard,n=e.onDelete,c=e.onStatus;return Object(N.jsx)(K,{children:Object(N.jsxs)(G.a,{size:"small",style:{width:300},cover:Object(N.jsx)("img",{alt:t.alt,src:"https://s3.ax1x.com/2021/02/23/ybuuad.jpg"}),hoverable:!0,actions:[Object(N.jsx)(J.a,{overlay:function(){return Object(N.jsxs)(U.a,{children:[Object(N.jsx)(U.a.Item,{onClick:function(){return c(t.videoId)},children:t.status?"\u4e0b\u64ad":"\u4e0a\u7ebf"}),Object(N.jsx)(U.a.Item,{onClick:function(){return n(t.videoId)},children:"\u5220\u9664"})]})},placement:"topCenter",arrow:!0,children:Object(N.jsx)(H.a,{},"ellipsis")})],children:[Object(N.jsx)($,{title:t.videoName,description:t.updatedAt}),t.status?Object(N.jsx)(B.a,{color:"#82C2C4",children:"\u76f4\u64ad\u4e2d"}):Object(N.jsx)(B.a,{color:"#E9967A",children:"\u5df2\u6682\u505c"})]})})},W=n(288),X=function(e){var t=e.liveCards,n=e.onDelete,c=e.onStatus;return Object(N.jsx)("div",{children:Object(N.jsx)(W.b,{size:[60,30],wrap:!0,children:t.map((function(e){return Object(N.jsx)(Q,{liveCard:e,onDelete:n,onStatus:c},e.videoId)}))})})},Y=n(84),Z=Object(c.memo)((function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){z().then((function(e){a(e.success.list),console.log(e.success)}))}),[]);return Object(N.jsx)(_,{children:Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{children:"\u76f4\u64ad\u5217\u8868"}),Object(N.jsx)(V,{onAdd:function(e,t){(function(e,t){return w({method:"post",url:"/createLive",data:{videoName:e,url:t,controller:O()}})})(e,t).then((function(e){z().then((function(e){a(e.success.list)}))})),z().then((function(e){a(e.success.list),console.log(e.success)}))}}),n.length>0?Object(N.jsx)(X,{liveCards:n,onDelete:function(e){(function(e){return w({method:"post",url:"/delete",data:{videoId:e,judge:"live",controller:O()}})})(e).then((function(e){z().then((function(e){a(e.success.list)}))}))},onStatus:function(e){a(n.map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{status:!t.status}):t})))}}):Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(Y.a,{image:Y.a.PRESENTED_IMAGE_SIMPLE,description:"\u7a7a\u7a7a\u5982\u4e5f\uff5e \u70b9\u51fb\u65b0\u5efa\u76f4\u64ad\u6765\u914d\u7f6e\u60a8\u7684\u7b2c\u4e00\u4e2a\u76f4\u64ad\u95f4\u5427!"})})]})})})),ee=n(279),te=n(290),ne={labelCol:{span:6},wrapperCol:{span:15}},ce=function(e){var t=e.onAdd,n=Object(c.useState)(!1),a=Object(r.a)(n,2),o=a[0],i=a[1],b=Object(c.useState)(!1),m=Object(r.a)(b,2),x=m[0],p=m[1],f=Object(c.useState)(""),g=Object(r.a)(f,2),v=g[0],I=g[1],C=Object(c.useState)(""),k=Object(r.a)(C,2),y=k[0],S=k[1],w={name:"file",headers:{authorization:"authorization-text"},action:"https://qcmt57.fn.thelarkcloud.com/fileUpload",data:function(e){return{userId:O(),token:h(),file:e}},onChange:function(e){"uploading"!==e.file.status&&(S(e.file.response.url),console.log(e.file.response.url,e.fileList)),"done"===e.file.status?l.b.success("".concat(e.file.name," \u4e0a\u4f20\u6210\u529f")):"error"===e.file.status&&l.b.error("".concat(e.file.name," \u4e0a\u4f20\u5931\u8d25"))}},E=u.a.useForm(),z=Object(r.a)(E,1)[0];return Object(N.jsxs)("div",{children:[Object(N.jsx)(j.a,{className:"new-button",type:"primary",onClick:function(){I(""),S(""),i(!0)},children:"\u4e0a\u4f20\u89c6\u9891"}),Object(N.jsx)(M.a,{title:"\u4e0a\u4f20\u89c6\u9891",visible:o,onOk:function(){v.length>0?(p(!0),setTimeout((function(){t(v,y),I(""),S(""),i(!1),p(!1),l.b.success("\u6295\u653e\u6210\u529f"),D.a.open({message:"\u89c6\u9891\u5df2\u6295\u653e",description:"\u73b0\u5728\u5927\u5bb6\u53ef\u4ee5\u770b\u5230\u60a8\u7684\u4f5c\u54c1\u5566",icon:Object(N.jsx)(P.a,{style:{color:"#108ee9"}})})}),500)):l.b.warning("\u8bf7\u5b8c\u6574\u586b\u5199\u4fe1\u606f")},confirmLoading:x,onCancel:function(){i(!1)},cancelText:"\u53d6\u6d88",okText:"\u6295\u653e",children:Object(N.jsxs)(u.a,Object(s.a)(Object(s.a)({form:z},ne),{},{name:"basic",initialValues:{title:""},children:[Object(N.jsx)(u.a.Item,{label:"\u4f5c\u54c1\u6807\u9898",name:"title",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u89c6\u9891\u6807\u9898"}],children:Object(N.jsx)(d.a,{value:v,onChange:function(e){I(e.target.value)}})}),Object(N.jsx)(u.a.Item,{label:"\u60a8\u7684\u4f5c\u54c1",rules:[{required:!0}],children:Object(N.jsx)(ee.a,Object(s.a)(Object(s.a)({},w),{},{maxCount:1,children:Object(N.jsx)(j.a,{icon:Object(N.jsx)(te.a,{}),children:"\u4e0a\u4f20\u89c6\u9891"})}))})]}))})]})},ae=q.a.div(C||(C=Object(T.a)(["\n  .ant-card-actions {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n  }\n\n  .ant-tag {\n    position:absolute;\n    top: 10px;\n    left: 10px;\n  }\n"]))),oe=G.a.Meta,ie=function(e){var t=e.liveCard,n=e.onDelete,c=e.onStatus;return Object(N.jsx)(ae,{children:Object(N.jsxs)(G.a,{size:"small",style:{width:300},cover:Object(N.jsx)("img",{alt:t.alt,src:t.img_url||"https://s3.ax1x.com/2021/02/23/ybuuad.jpg"}),hoverable:!0,actions:[Object(N.jsx)(J.a,{overlay:function(){return Object(N.jsxs)(U.a,{children:[Object(N.jsx)(U.a.Item,{onClick:function(){return c(t.videoId)},children:t.status?"\u8bbe\u4e3a\u79c1\u5bc6":"\u8bbe\u4e3a\u516c\u5f00"}),Object(N.jsx)(U.a.Item,{onClick:function(){return n(t.videoId)},children:"\u5220\u9664"})]})},placement:"topCenter",arrow:!0,children:Object(N.jsx)(H.a,{},"ellipsis")})],children:[Object(N.jsx)(oe,{title:t.videoName,description:t.updatedAt}),t.status?Object(N.jsx)(B.a,{color:"#82C2C4",children:"\u516c\u5f00"}):Object(N.jsx)(B.a,{color:"#E9967A",children:"\u79c1\u5bc6"})]})})},se=function(e){var t=e.liveCards,n=e.onDelete,c=e.onStatus;return Object(N.jsx)("div",{children:Object(N.jsx)(W.b,{size:[60,30],wrap:!0,children:t.map((function(e){return Object(N.jsx)(ie,{liveCard:e,onDelete:n,onStatus:c},e.videoId)}))})})},re=q.a.div(k||(k=Object(T.a)(["\n  .new-button {\n    margin: 20px 0;\n    background: #5276F0;\n    border-color: #5276F0;\n  }\n"]))),le=Object(c.memo)((function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){E().then((function(e){a(e.success.list),console.log(e.success)}))}),[]);return Object(N.jsx)(re,{children:Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{children:"\u77ed\u89c6\u9891\u9875"}),Object(N.jsx)(ce,{onAdd:function(e,t){(function(e,t){return w({method:"post",url:"/createVideo",data:{videoName:e,url:t,controller:O()}})})(e,t).then((function(e){E().then((function(e){a(e.success.list)}))}))}}),n.length>0?Object(N.jsx)(se,{liveCards:n,onDelete:function(e){(function(e){return w({method:"post",url:"/delete",data:{videoId:e,judge:"video",controller:O()}})})(e).then((function(e){E().then((function(e){a(e.success.list)}))}))},onStatus:function(e){a(n.map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{status:!t.status}):t})))}}):Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(Y.a,{image:Y.a.PRESENTED_IMAGE_SIMPLE,description:"\u7a7a\u7a7a\u5982\u4e5f\uff5e \u70b9\u51fb\u4e0a\u4f20\u89c6\u9891\u6765\u4e0a\u4f20\u4f60\u7684\u7b2c\u4e00\u4e2a\u4f5c\u54c1\u5427!"})})]})})})),ue=q.a.div(y||(y=Object(T.a)(["\n  .new-button {\n    margin: 20px 0;\n    background: #5276F0;\n    border-color: #5276F0;\n  }\n"]))),de=q.a.div(S||(S=Object(T.a)(["\n  .ant-card-actions {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n  }\n\n  .ant-tag {\n    position:absolute;\n    top: 10px;\n    left: 10px;\n  }\n"]))),je=G.a.Meta,be=function(e){var t=e.liveCard,n=e.onDelete,c=e.onStatus,a=e.onDetail;return Object(N.jsx)(de,{children:Object(N.jsx)(G.a,{size:"small",onClick:function(){a(t.videoId)},style:{width:300},cover:Object(N.jsx)("img",{alt:"userAdd",src:"https://s3.ax1x.com/2021/02/23/ybuuad.jpg"}),hoverable:!0,actions:[Object(N.jsx)(J.a,{overlay:function(){return Object(N.jsxs)(U.a,{children:[Object(N.jsx)(U.a.Item,{onClick:function(){return c(t.videoId)},children:t.status?"\u4e0b\u64ad":"\u4e0a\u7ebf"}),Object(N.jsx)(U.a.Item,{onClick:function(){return n(t.videoId)},children:"\u5220\u9664"})]})},placement:"topCenter",arrow:!0,children:Object(N.jsx)(H.a,{},"ellipsis")})],children:Object(N.jsx)(je,{title:t.videoName,description:t.updatedAt})})})},he=function(e){var t=e.liveCards,n=e.onDelete,c=e.onStatus,a=e.onDetail;return Object(N.jsx)("div",{children:Object(N.jsx)(W.b,{size:[60,30],wrap:!0,children:t.map((function(e){return Object(N.jsx)(be,{liveCard:e,onDelete:n,onStatus:c,onDetail:a},e.videoId)}))})})};var Oe,me=Object(b.f)((function(e){var t=Object(c.useState)([]),n=Object(r.a)(t,2),a=n[0],o=n[1];return Object(c.useEffect)((function(){E().then((function(e){o(e.success.list),console.log(e.success)}))}),[]),Object(N.jsx)(ue,{children:Object(N.jsx)("div",{children:a.length>0?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("h2",{children:"\u77ed\u89c6\u9891\u5217\u8868"}),Object(N.jsx)(he,{liveCards:a,onDelete:function(e){o(a.filter((function(t){return t.id!==e})))},onStatus:function(e){o(a.map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{status:!t.status}):t})))},onDetail:function(t){console.log(t),e.history.push({pathname:"/detail",query:{videoId:t}})}})]}):Object(N.jsx)(Y.a,{image:Y.a.PRESENTED_IMAGE_SIMPLE,description:"\u8fd8\u6ca1\u6709\u76f4\u64ad\u54e6\uff5e "})})})})),xe=n(280),pe=n(277),fe=q.a.div(Oe||(Oe=Object(T.a)(["\n    .edit {\n        color: #5276F0;\n        font-size: 12px;\n    }\n\n    .delete {\n        color: #c0392b;\n        margin-left: 4px;\n        font-size: 12px;\n    }\n"])));var ge,ve=[{path:"/",exact:!0,component:L},{path:"/login",component:L},{path:"/live",component:Z},{path:"/video",component:le},{path:"/comment",component:me},{path:"/detail",component:function(e){var t=e.location.query.videoId,n=Object(c.useState)([]),a=Object(r.a)(n,2),o=a[0],i=a[1];return Object(c.useEffect)((function(){var e;(e=t,w({method:"post",url:"/getComment",data:{videoId:e}})).then((function(e){i(e.data),console.log(e.data)}))}),[t]),Object(N.jsx)(fe,{className:"wrap-v2",children:Object(N.jsx)(xe.b,{className:"comment-list",header:"".concat(o.length," \u6761\u8bc4\u8bba"),itemLayout:"horizontal",dataSource:o,renderItem:function(e){return Object(N.jsx)("li",{children:Object(N.jsx)(pe.a,{actions:[Object(N.jsx)(j.a,{className:"edit",type:"text",children:"\u7f16\u8f91"}),Object(N.jsx)(j.a,{className:"delete",type:"text",children:"\u5220\u9664"})],content:e.comment,datetime:e.updatedAt})})}})})}}],Ie=n(87),Ce=n(278),ke=q.a.div(ge||(ge=Object(T.a)(["\n  .logo {\n    float: left;\n    width: 120px;\n    height: 31px;\n    line-height: 33px;\n    font-size: 14px;\n    margin: 16px 24px 16px 0;\n  }\n\n  .login {\n    position: absolute;\n    right: 40px;\n    top: 16px;\n  }\n\n  .ant-layout {\n    width:100%;\n    height:100vh; \n  }\n\n  .site-layout-background {\n    height: 100%;\n    background: #fff;\n    overflow: auto;\n    padding: 16px 28px;\n  }\n\n  .ant-layout-header {\n    background: white;\n  }\n\n  .ant-menu {\n    background: white;\n    color: black;\n  }\n\n  .ant-menu-item {\n    color: black;\n  }\n\n  .ant-menu.ant-menu-dark .ant-menu-item-selected, \n  .ant-menu-dark .ant-menu-item:hover {\n    color: #5276F0;\n    background-color: transparent;\n  }\n"]))),ye=Ce.a.Header,Se=Ce.a.Content,we=Ce.a.Footer;var Ee=Object(b.f)((function(e){return Object(N.jsx)(ke,{children:Object(N.jsxs)(Ce.a,{children:[Object(N.jsxs)(ye,{style:{position:"fixed",zIndex:1,width:"100%"},children:[Object(N.jsx)("div",{className:"logo",children:"\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf"}),Object(N.jsxs)(U.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],children:[Object(N.jsx)(U.a.Item,{onClick:function(t){m()?e.history.push("/live"):e.history.push("/login")},children:"\u76f4\u64ad\u95f4\u7ba1\u7406"},"1"),Object(N.jsx)(U.a.Item,{onClick:function(t){m()?e.history.push("/video"):e.history.push("/login")},children:"\u77ed\u89c6\u9891\u7ba1\u7406"},"2"),Object(N.jsx)(U.a.Item,{onClick:function(t){m()?e.history.push("/comment"):e.history.push("/login")},children:"\u8bc4\u8bba\u7ba1\u7406"},"3")]}),Object(N.jsx)(j.a,{className:"login",type:"text",onClick:function(){m()&&(l.b.warning("\u5df2\u767b\u51fa"),localStorage.removeItem("token")),e.history.push("/login")},children:m()?"\u9000\u51fa":"\u767b\u5f55"})]}),Object(N.jsx)(Se,{className:"site-layout",style:{padding:"20px 48px",marginTop:64},children:Object(N.jsx)("div",{className:"site-layout-background",children:e.children})}),Object(N.jsx)(we,{style:{textAlign:"center"},children:"\xa92021 Created by TechTrainingCamp Frontend 10"})]})})})),ze=Object(c.memo)((function(){return Object(N.jsx)("div",{children:Object(N.jsx)(Ie.a,{children:Object(N.jsx)(Ee,{children:Object(i.a)(ve)})})})}));o.a.render(Object(N.jsx)(ze,{}),document.getElementById("root"))}},[[275,1,2]]]);
//# sourceMappingURL=main.d9f3e922.chunk.js.map