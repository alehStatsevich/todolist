(this["webpackJsonptodo-16"]=this["webpackJsonptodo-16"]||[]).push([[0],{106:function(t,e,n){},107:function(t,e,n){},131:function(t,e,n){"use strict";n.r(e);var a,c,i=n(3),o=n(0),r=n.n(o),s=n(10),l=n.n(s),d=(n(106),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,190)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),i(t),o(t)}))}),u=(n(107),n(176)),j=n(189),b=n(177),O=n(178),f=n(179),h=n(169),T=n(133),m=n(173),g=n(172),p=n(181),v=n(182),x=n(180),k=n(17),I=n(8),S=n(61),C=n(82),E=n.n(C).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"b7767f53-d182-4cb8-b9c3-5dfc49acb60e"}}),y=function(){return E.get("todo-lists")},A=function(t){return E.post("todo-lists",{title:t})},D=function(t){return E.delete("todo-lists/".concat(t))},L=function(t,e){return E.put("todo-lists/".concat(t),{title:e})},w=function(t){return E.get("todo-lists/".concat(t,"/tasks"))},P=function(t,e){return E.delete("todo-lists/".concat(t,"/tasks/").concat(e))},N=function(t,e){return E.post("todo-lists/".concat(t,"/tasks"),{title:e})},F=function(t,e,n){return E.put("todo-lists/".concat(t,"/tasks/").concat(e),n)},R=function(t){return E.post("/auth/login",t)},G=function(){return E.get("auth/me")},M=function(){return E.delete("auth/login")};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(a||(a={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(c||(c={}));var K=function(t,e){t.messages.length?e(Z(t.messages[0])):e(Z("Some error occurred")),e(B("failed"))},U=function(t,e){e(Z(t.message?t.message:"Some error occurred")),e(B("failed"))},H={isLoggedIn:!1},V=function(t){return{type:"login/SET-IS-LOGGED-IN",value:t}},z={status:"idle",error:null,isInitialized:!1},Z=function(t){return{type:"APP/SET-ERROR",error:t}},B=function(t){return{type:"APP/SET-STATUS",status:t}},q=[],Y=n(36),J={},_=function(t,e,n){return function(a,c){var i=c().tasks[n].find((function(e){return e.id===t}));if(i){var o=Object(I.a)({deadline:i.deadline,description:i.description,priority:i.priority,startDate:i.startDate,title:i.title,status:i.status},e);F(n,t,o).then((function(c){if(0===c.data.resultCode){var i=function(t,e,n){return{type:"UPDATE-TASK",model:e,todolistId:n,taskId:t}}(t,e,n);a(i)}else K(c.data,a)})).catch((function(t){U(t,a)}))}else console.warn("task not found in the state")}},$=n(132),Q=n(45),W=n(183),X=n(170),tt=r.a.memo((function(t){var e=t.addItem,n=t.disabled,a=void 0!==n&&n;console.log("AddItemForm called");var c=Object(o.useState)(""),r=Object(Q.a)(c,2),s=r[0],l=r[1],d=Object(o.useState)(null),u=Object(Q.a)(d,2),j=u[0],b=u[1],O=function(){""!==s.trim()?(e(s),l("")):b("Title is required")};return Object(i.jsxs)("div",{children:[Object(i.jsx)(W.a,{variant:"outlined",disabled:a,error:!!j,value:s,onChange:function(t){l(t.currentTarget.value)},onKeyPress:function(t){null!==j&&b(null),13===t.charCode&&O()},label:"Title",helperText:j}),Object(i.jsx)(h.a,{color:"primary",onClick:O,disabled:a,children:Object(i.jsx)(X.a,{})})]})})),et=n(90),nt=r.a.memo((function(t){console.log("EditableSpan called");var e=Object(o.useState)(!1),n=Object(Q.a)(e,2),a=n[0],c=n[1],r=Object(o.useState)(t.value),s=Object(Q.a)(r,2),l=s[0],d=s[1];return a?Object(i.jsx)(W.a,{value:l,onChange:function(t){d(t.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),t.onChange(l)}}):Object(i.jsx)("span",{onDoubleClick:function(){c(!0),d(t.value)},children:t.value})})),at=n(171),ct=n(185),it=r.a.memo((function(t){var e=Object(o.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),n=Object(o.useCallback)((function(e){var n=e.currentTarget.checked;t.changeTaskStatus(t.task.id,n?a.Completed:a.New,t.todolistId)}),[t.task.id,t.todolistId]),c=Object(o.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return Object(i.jsxs)("div",{className:t.task.status===a.Completed?"is-done":"",children:[Object(i.jsx)(ct.a,{checked:t.task.status===a.Completed,color:"primary",onChange:n}),Object(i.jsx)(nt,{value:t.task.title,onChange:c}),Object(i.jsx)(h.a,{onClick:e,children:Object(i.jsx)(at.a,{})})]},t.task.id)})),ot=r.a.memo((function(t){var e=t.demo,n=void 0!==e&&e,c=Object(et.a)(t,["demo"]);console.log("Todolist called");var r=Object(k.b)();Object(o.useEffect)((function(){if(!n){var t,e=(t=c.todolist.id,function(e){e(B("loading")),w(t).then((function(n){var a=n.data.items;e(function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(a,t)),e(B("succeeded"))}))});r(e)}}),[]);var s=Object(o.useCallback)((function(t){c.addTask(t,c.todolist.id)}),[c.addTask,c.todolist.id]),l=Object(o.useCallback)((function(t){c.changeTodolistTitle(c.todolist.id,t)}),[c.todolist.id,c.changeTodolistTitle]),d=Object(o.useCallback)((function(){return c.changeFilter("all",c.todolist.id)}),[c.todolist.id,c.changeFilter]),u=Object(o.useCallback)((function(){return c.changeFilter("active",c.todolist.id)}),[c.todolist.id,c.changeFilter]),j=Object(o.useCallback)((function(){return c.changeFilter("completed",c.todolist.id)}),[c.todolist.id,c.changeFilter]),b=c.tasks;return"active"===c.todolist.filter&&(b=c.tasks.filter((function(t){return t.status===a.New}))),"completed"===c.todolist.filter&&(b=c.tasks.filter((function(t){return t.status===a.Completed}))),Object(i.jsxs)("div",{children:[Object(i.jsxs)("h3",{children:[Object(i.jsx)(nt,{value:c.todolist.title,onChange:l}),Object(i.jsx)(h.a,{onClick:function(){c.removeTodolist(c.todolist.id)},disabled:"loading"===c.todolist.entityStatus,children:Object(i.jsx)(at.a,{})})]}),Object(i.jsx)(tt,{addItem:s,disabled:"loading"===c.todolist.entityStatus}),Object(i.jsx)("div",{children:b.map((function(t){return Object(i.jsx)(it,{task:t,todolistId:c.todolist.id,removeTask:c.removeTask,changeTaskTitle:c.changeTaskTitle,changeTaskStatus:c.changeTaskStatus},t.id)}))}),Object(i.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(i.jsx)(g.a,{variant:"all"===c.todolist.filter?"outlined":"text",onClick:d,color:"default",children:"All"}),Object(i.jsx)(g.a,{variant:"active"===c.todolist.filter?"outlined":"text",onClick:u,color:"primary",children:"Active"}),Object(i.jsx)(g.a,{variant:"completed"===c.todolist.filter?"outlined":"text",onClick:j,color:"secondary",children:"Completed"})]})]})})),rt=n(14),st=function(t){var e=t.demo,n=void 0!==e&&e,a=Object(k.c)((function(t){return t.todolists})),c=Object(k.c)((function(t){return t.tasks})),r=Object(k.c)((function(t){return t.auth.isLoggedIn})),s=Object(k.b)();Object(o.useEffect)((function(){if(!n&&r){var t=function(t){t(B("loading")),y().then((function(e){t({type:"SET-TODOLISTS",todolists:e.data}),t(B("succeeded"))}))};s(t)}}),[]);var l=Object(o.useCallback)((function(t,e){var n=function(t,e){return function(n){P(e,t).then((function(a){var c=function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}}(t,e);n(c)}))}}(t,e);s(n)}),[]),d=Object(o.useCallback)((function(t,e){var n=function(t,e){return function(n){n(B("loading")),N(e,t).then((function(t){if(0===t.data.resultCode){var e={type:"ADD-TASK",task:t.data.data.item};n(e),n(B("succeeded"))}else K(t.data,n)})).catch((function(t){U(t,n)}))}}(t,e);s(n)}),[]),u=Object(o.useCallback)((function(t,e,n){var a=_(t,{status:e},n);s(a)}),[]),j=Object(o.useCallback)((function(t,e,n){var a=_(t,{title:e},n);s(a)}),[]),b=Object(o.useCallback)((function(t,e){var n={type:"CHANGE-TODOLIST-FILTER",id:e,filter:t};s(n)}),[]),O=Object(o.useCallback)((function(t){var e,n=(e=t,function(t){t(B("loading")),t({type:"CHANGE-TODOLIST-ENTITY-STATUS",id:e,status:"loading"}),D(e).then((function(n){t(function(t){return{type:"REMOVE-TODOLIST",id:t}}(e)),t(B("succeeded"))}))});s(n)}),[]),f=Object(o.useCallback)((function(t,e){var n=function(t,e){return function(n){L(t,e).then((function(a){n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e))}))}}(t,e);s(n)}),[]),h=Object(o.useCallback)((function(t){var e=function(t){return function(e){e(B("loading")),A(t).then((function(t){e({type:"ADD-TODOLIST",todolist:t.data.data.item}),e(B("succeeded"))}))}}(t);s(e)}),[s]);return r?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(m.a,{container:!0,style:{padding:"20px"},children:Object(i.jsx)(tt,{addItem:h})}),Object(i.jsx)(m.a,{container:!0,spacing:3,children:a.map((function(t){var e=c[t.id];return Object(i.jsx)(m.a,{item:!0,children:Object(i.jsx)($.a,{style:{padding:"10px"},children:Object(i.jsx)(ot,{todolist:t,tasks:e,removeTask:l,changeFilter:b,addTask:d,changeTaskStatus:u,removeTodolist:O,changeTaskTitle:j,changeTodolistTitle:f,demo:n})})},t.id)}))})]}):Object(i.jsx)(rt.a,{to:"/login"})},lt=n(187),dt=n(184);function ut(t){return Object(i.jsx)(dt.a,Object(I.a)({elevation:6,variant:"filled"},t))}function jt(){var t=Object(k.c)((function(t){return t.app.error})),e=Object(k.b)(),n=function(t,n){"clickaway"!==n&&e(Z(null))},a=null!==t;return Object(i.jsx)(lt.a,{open:a,autoHideDuration:6e3,onClose:n,children:Object(i.jsx)(ut,{onClose:n,severity:"error",children:t})})}var bt=n(188),Ot=n(168),ft=n(174),ht=n(175),Tt=n(89),mt=function(){var t=Object(k.b)(),e=Object(k.c)((function(t){return t.auth.isLoggedIn})),n=Object(Tt.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Required",t.password?t.password.length<3&&(e.password="Must be 3 characters or less"):e.password="Required",e},onSubmit:function(e){var a;t((a=e,function(t){t(B("loading")),R(a).then((function(e){0===e.data.resultCode?(t(V(!0)),t(B("succeeded"))):K(e.data,t)})).catch((function(e){U(e,t)}))})),n.resetForm()}});return e?Object(i.jsx)(rt.a,{to:"/"}):Object(i.jsx)(m.a,{container:!0,justify:"center",children:Object(i.jsx)(m.a,{item:!0,xs:4,children:Object(i.jsx)("form",{onSubmit:n.handleSubmit,children:Object(i.jsxs)(bt.a,{children:[Object(i.jsxs)(Ot.a,{children:[Object(i.jsxs)("p",{children:["To log in get registered",Object(i.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:"here"})]}),Object(i.jsx)("p",{children:"or use common test account credentials:"}),Object(i.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(i.jsx)("p",{children:"Password: free"})]}),Object(i.jsxs)(ft.a,{children:[Object(i.jsx)(W.a,Object(I.a)({label:"Email",margin:"normal"},n.getFieldProps("email"))),n.touched.email?Object(i.jsx)("div",{style:{color:"red"},children:n.errors.email}):null,Object(i.jsx)(W.a,Object(I.a)({type:"password",label:"Password",margin:"normal"},n.getFieldProps("password"))),n.touched.password?Object(i.jsx)("div",{style:{color:"red"},children:n.errors.password}):null,Object(i.jsx)(ht.a,{label:"Remember me",control:Object(i.jsx)(ct.a,{name:"rememberMe",onChange:n.handleChange,checked:n.values.rememberMe})}),Object(i.jsx)(g.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})]})})})})};var gt=function(t){var e=t.demo,n=void 0!==e&&e,a=Object(u.a)((function(t){return Object(j.a)({root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1}})}))(),c=Object(k.c)((function(t){return t.app.status})),r=Object(k.c)((function(t){return t.app.isInitialized})),s=Object(k.c)((function(t){return t.auth.isLoggedIn})),l=Object(k.b)();return Object(o.useEffect)((function(){l((function(t){G().then((function(e){0===e.data.resultCode&&t(V(!0))})).finally((function(){t({type:"APP/SET-IS-INITIALIZED",isInitialized:!0})}))}))}),[]),r?Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(jt,{}),Object(i.jsxs)("div",{className:a.root,children:[Object(i.jsxs)(O.a,{position:"static",children:[Object(i.jsxs)(f.a,{children:[Object(i.jsx)(h.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(i.jsx)(x.a,{})}),Object(i.jsx)(T.a,{variant:"h6",children:"News"}),Object(i.jsx)(T.a,{variant:"h6",className:a.title}),Object(i.jsx)(m.a,{style:{padding:"20px"},children:s&&Object(i.jsx)(g.a,{color:"inherit",onClick:function(){l((function(t){t(B("loading")),M().then((function(e){0===e.data.resultCode?(t(V(!1)),t(B("succeeded"))):K(e.data,t)})).catch((function(e){U(e,t)}))}))},children:"Logout"})})]}),"loading"===c&&Object(i.jsx)(p.a,{})]}),Object(i.jsx)(v.a,{fixed:!0,children:Object(i.jsxs)(rt.d,{children:[Object(i.jsx)(rt.b,{exact:!0,path:"/",render:function(){return Object(i.jsx)(st,{demo:n})}}),Object(i.jsx)(rt.b,{exact:!0,path:"/login",render:function(){return Object(i.jsx)(mt,{})}}),Object(i.jsx)(rt.b,{path:"/404",render:function(){return Object(i.jsx)("h1",{children:"404.PAGE NOT FOUND"})}}),Object(i.jsx)(rt.a,{from:"*",to:"/404"})]})})]})]}):Object(i.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(i.jsx)(b.a,{})})},pt=n(42),vt=n(88),xt=Object(pt.c)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":return Object(I.a)(Object(I.a)({},t),{},Object(Y.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!=e.taskId}))));case"ADD-TASK":return Object(I.a)(Object(I.a)({},t),{},Object(Y.a)({},e.task.todoListId,[e.task].concat(Object(S.a)(t[e.task.todoListId]))));case"UPDATE-TASK":return Object(I.a)(Object(I.a)({},t),{},Object(Y.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(I.a)(Object(I.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(I.a)(Object(I.a)({},t),{},Object(Y.a)({},e.todolist.id,[]));case"REMOVE-TODOLIST":var n=Object(I.a)({},t);return delete n[e.id],n;case"SET-TODOLISTS":var a=Object(I.a)({},t);return e.todolists.forEach((function(t){a[t.id]=[]})),a;case"SET-TASKS":return Object(I.a)(Object(I.a)({},t),{},Object(Y.a)({},e.todolistId,e.tasks));default:return t}},todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!=e.id}));case"ADD-TODOLIST":return[Object(I.a)(Object(I.a)({},e.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(S.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(I.a)(Object(I.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(I.a)(Object(I.a)({},t),{},{filter:e.filter}):t}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.id?Object(I.a)(Object(I.a)({},t),{},{entityStatus:e.status}):t}));case"SET-TODOLISTS":return e.todolists.map((function(t){return Object(I.a)(Object(I.a)({},t),{},{filter:"all",entityStatus:"idle"})}));default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-STATUS":return Object(I.a)(Object(I.a)({},t),{},{status:e.status});case"APP/SET-ERROR":return Object(I.a)(Object(I.a)({},t),{},{error:e.error});case"APP/SET-IS-INITIALIZED":return Object(I.a)(Object(I.a)({},t),{},{isInitialized:e.isInitialized});default:return Object(I.a)({},t)}},auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"login/SET-IS-LOGGED-IN":return Object(I.a)(Object(I.a)({},t),{},{isLoggedIn:e.value});default:return t}}}),kt=Object(pt.d)(xt,Object(pt.a)(vt.a));window.store=kt;var It=n(48);l.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(It.a,{children:Object(i.jsx)(k.a,{store:kt,children:Object(i.jsx)(gt,{})})})}),document.getElementById("root")),d()}},[[131,1,2]]]);
//# sourceMappingURL=main.c1990dd9.chunk.js.map