(this["webpackJsonphh-school-react-2021"]=this["webpackJsonphh-school-react-2021"]||[]).push([[0],{37:function(t,e,n){},39:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(13),s=n.n(a),i=n(4),o=n(5),l=n.n(o),u=n(8);function b(){return(b=Object(u.a)(l.a.mark((function t(e){var n,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.replace("https://github.com/",""),t.prev=1,t.next=4,fetch("https://api.github.com/repos/".concat(n,"/contributors"));case 4:if(!(c=t.sent).ok){t.next=11;break}return t.next=8,c.json();case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=[];case 12:return t.abrupt("return",t.t0);case 15:return t.prev=15,t.t1=t.catch(1),console.log(t.t1),t.abrupt("return",[]);case 19:case"end":return t.stop()}}),t,null,[[1,15]])})))).apply(this,arguments)}var j="RECEIVE_USERS";function d(t){var e=t.replace("https://github.com/","");return function(n){return n(function(t){return{type:"REQUEST_USERS",repo:t}}(t)),fetch("https://api.github.com/repos/".concat(e,"/contributors")).then((function(t){return t.json()}),(function(t){return console.log("An error occurred.",t)})).then((function(e){return n(function(t,e){return{type:j,repo:t,users:e}}(t,e))})).catch((function(){return console.log("some error")}))}}var p=n(9),h=n(6),O=n(15),f=n(10),x=(n(37),n(0));function g(t){return Object(x.jsxs)("div",{className:"review_card ".concat(t.black?"black_label":""),children:[Object(x.jsx)(m,{image:t.image}),Object(x.jsx)(v,{name:t.name}),t.onClick||t.onBlackList?Object(x.jsxs)("div",{className:"review_buttons",children:[t.onClick?Object(x.jsx)("button",{onClick:function(){t.onClick&&t.onClick(t.name)},children:"Review"}):Object(x.jsx)(x.Fragment,{}),t.onBlackList&&!t.black?Object(x.jsx)("button",{onClick:function(){t.onBlackList&&t.onBlackList(t.name)},children:"\u0412 \u0447\u0435\u0440\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a"}):Object(x.jsx)(x.Fragment,{}),t.onRemoveBl&&t.black?Object(x.jsx)("button",{onClick:function(){t.onRemoveBl&&t.onRemoveBl(t.name)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u0427\u0421"}):Object(x.jsx)(x.Fragment,{})]}):null]})}function v(t){return Object(x.jsx)("div",{children:t.name})}function m(t){return Object(x.jsx)("img",{className:"image",src:t.image})}function k(t){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("ul",{children:Array.isArray(t.blacklist)?t.blacklist.map((function(e){return Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{children:e}),Object(x.jsx)("button",{onClick:function(){t.onDelete(e)},children:"-"})]},e)})):null}),Object(x.jsx)("button",{onClick:function(){return t.clearAll()},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a"})]})}function y(t){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("table",{children:Object(x.jsxs)("tbody",{children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"\u041b\u043e\u0433\u0438\u043d \u0440\u0435\u0432\u044c\u044e\u0432\u0435\u0440\u0430"}),Object(x.jsx)("td",{children:Object(x.jsx)("input",{placeholder:"login",defaultValue:t.user,readOnly:!0})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439"}),Object(x.jsx)("td",{children:Object(x.jsx)("input",{placeholder:"repository",value:t.repo,onChange:function(e){t.onChangeRepo(e.target.value)}})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"\u0427\u0435\u0440\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a"}),Object(x.jsx)("td",{children:Object(x.jsx)(k,{onAdd:function(e){t.onAdd&&t.onAdd(e)},onDelete:function(e){t.onDelete&&t.onDelete(e)},clearAll:function(){t.clearAll&&t.clearAll()},blacklist:t.blacklist})})]})]})}),Object(x.jsx)("button",{onClick:function(){t.onSaveSettings&&t.onSaveSettings({user:t.user,repo:t.repo,blacklist:t.blacklist})},title:"\u0415\u0441\u043b\u0438 \u0432\u0440\u0443\u0447\u043d\u0443\u044e \u043c\u0435\u043d\u044f\u0435\u043c \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})]})}function S(t){return Object(x.jsx)("button",{onClick:function(){t.onClick&&t.onClick()},id:"settings-button",children:t.text})}var _="https://github.com/Pre77/hh-school-react-2021",E="Pre77",w=[];function A(t){var e=Object(f.c)({display:t.isAbout?"block":"none",to:function(){var t=Object(u.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e({transform:"translateX(0%)"});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),from:function(){var t=Object(u.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(O.delay)(700);case 2:return t.next=4,e({transform:"translateX(-100%)"});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()});return Object(x.jsxs)(f.a.div,{id:"help",style:Object(p.a)(Object(p.a)({},e),{},{display:t.isAbout?"block":"none"}),children:[Object(x.jsx)("h1",{children:"\u0417\u0430\u0434\u0430\u043d\u0438\u0435 \u043f\u043e React"}),Object(x.jsx)("p",{children:"\u041d\u0443\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043e\u0434\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u043d\u0430\u0439\u0442\u0438 \u0440\u0435\u0432\u044c\u044e\u0435\u0440\u0430."}),Object(x.jsx)("p",{children:"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b:"}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:"\u043a\u043d\u043e\u043f\u043a\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a, \u043f\u043e \u043a\u043b\u0438\u043a\u0443 \u043d\u0430 \u043d\u0435\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0442\u044c \u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a."}),Object(x.jsxs)("li",{children:["\u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u0445 3 \u043f\u043e\u043b\u044f:",Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:"login \u0434\u043b\u044f \u0432\u0432\u043e\u0434\u0430 \u043b\u043e\u0433\u0438\u043d\u0430 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u044e\u0437\u0435\u0440\u0430"}),Object(x.jsx)("li",{children:"repo \u0434\u043b\u044f \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0438\u0449\u0435\u043c \u0440\u0435\u0432\u044c\u044e\u0435\u0440\u0430"}),Object(x.jsx)("li",{children:"blacklist \u0434\u043b\u044f \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u0441\u043f\u0438\u0441\u043a\u0430 login-\u043e\u0432, \u043a\u0442\u043e \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0440\u0435\u0432\u044c\u044e\u0435\u0440\u043e\u043c"})]})]}),Object(x.jsx)("li",{children:"\u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u0432 localStorage"}),Object(x.jsx)("li",{children:"\u0434\u043b\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u0440\u0435\u0432\u044c\u044e\u0435\u0440\u0430 \u043d\u0443\u0436\u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0430 \u043f\u043e\u0438\u0441\u043a\u0430 \u0440\u0435\u0432\u044c\u044e\u0435\u0440\u0430, \u043f\u043e \u043a\u043b\u0438\u043a\u0443 \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d \u0440\u0430\u043d\u0434\u043e\u043c\u043d\u044b\u0439 \u0440\u0435\u0432\u044c\u044e\u0435\u0440 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430 \u043a\u043e\u043d\u0442\u0440\u0438\u0431\u044c\u044e\u0442\u0435\u0440\u043e\u0432 \u0440\u0435\u043f\u0437\u0438\u0442\u043e\u0440\u0438\u044f \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u0432 \u043f\u0443\u043d\u043a\u0442\u0435 2 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a, \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u044f blacklist \u043f\u0443\u043d\u043a\u0442\u0430 3."}),Object(x.jsx)("li",{children:"\u043f\u0440\u0438 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u0440\u0435\u0432\u044c\u044e\u0435\u0440\u0430 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438 \u043f\u0435\u0440\u0435\u0431\u0438\u0440\u0430\u0435\u043c\u044b\u0435 \u0432\u0430\u043c\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u0434\u043b\u044f \u0440\u0435\u0432\u044c\u044e."})]}),Object(x.jsx)("p",{children:"\u0414\u043e\u043a\u0430 \u043f\u043e API https://docs.github.com/en/rest. \u041f\u0440\u0438\u043c\u0435\u0440, \u043a\u0430\u043a \u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0431\u043b\u043e\u043a \u0441 \u0440\u0435\u0432\u044c\u044e\u0435\u0440\u043e\u043c."}),Object(x.jsx)("p",{children:"\u041c\u0430\u043a\u0435\u0442\u043e\u0432 \u043d\u0435\u0442, \u043c\u043e\u0436\u043d\u043e \u0434\u0435\u043b\u0430\u0442\u044c \u043d\u0430 \u0432\u0430\u0448 \u0432\u043a\u0443\u0441 \u0438 \u0446\u0432\u0435\u0442, \u0432\u043a\u043b\u044e\u0447\u0430\u0439\u0442\u0435 \u0444\u0430\u043d\u0442\u0430\u0437\u0438\u044e). \u041e\u0446\u0435\u043d\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u0431\u0443\u0434\u0435\u0442 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f, \u0430 \u043d\u0435 \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c. \u041f\u0440\u0438 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0442\u043e\u043b\u044c\u043a\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b, \u043a\u043b\u0430\u0441\u0441 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u044b."})]})}var C="SET_REPO",N="ADD_BLACKLIST",I="REMOVE_BLACKLIST",L="CLEAR_BLACKLIST",R="SET_USER",T="SETTINGS_PANEL_ON",B="SETTINGS_PANEL_OFF",P="ABOUT_PANEL_ON",F="ABOUT_PANEL_OFF",D=function(t){return{type:C,payload:t}};var U=function(){var t,e,n=Object(i.d)((function(t){return t.settings.repo}),i.b),c=Object(i.d)((function(t){return t.settings.user}),i.b),r=Object(i.d)((function(t){return Object(h.a)(t.settings.blacklist)}),i.b),a=Object(i.d)((function(t){return t.users}),i.b),s=Object(i.c)(),o=Object(i.d)((function(t){return t.appstate.settings}),i.b),b=Object(i.d)((function(t){return t.appstate.about}),i.b),j=Object(f.c)(Object(p.a)(Object(p.a)({},f.b.slow),{},{state:o?"in":"out",to:function(){var t=Object(u.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e({transform:"translateX(0%)"});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),from:function(){var t=Object(u.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(O.delay)(700);case 2:return t.next=4,e({transform:"translateX(-100%)"});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}));function v(t){s({type:N,payload:t})}function m(t){s({type:I,payload:t})}function k(t){s(function(t){return{type:R,payload:t}}(t))}function _(t){s(t?{type:P}:{type:F})}function E(t){s(t?{type:T}:{type:B})}return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsxs)("div",{className:"buttons",children:[Object(x.jsx)(S,{text:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",onClick:function(){E(!o)}}),Object(x.jsx)(S,{text:"\u0420\u0430\u043d\u0434\u043e\u043c\u043d\u044b\u0439 reviewer",onClick:function(){var t,e,n=a.filter((function(t){return!Object(h.a)(r).includes(t.login)}));n.length>0?k(n[(t=0,e=n.length,Math.floor(Math.random()*(e-t)+t))].login):alert("\u041d\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0434\u043b\u044f review! \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438...")}}),Object(x.jsx)(S,{text:"\u0417\u0430\u0434\u0430\u043d\u0438\u0435",onClick:function(){_(!b)}})]}),Object(x.jsxs)("div",{className:"wrapper",children:[Object(x.jsx)(A,{isAbout:b}),Object(x.jsxs)(f.a.div,{className:"sidebar",children:[Object(x.jsx)(g,{black:Object(h.a)(r).includes(c),name:c,image:null===a||void 0===a||null===(t=a.find)||void 0===t||null===(e=t.call(a,(function(t){return t.login===c})))||void 0===e?void 0:e.avatar_url}),Object(x.jsx)(f.a.div,{style:Object(p.a)(Object(p.a)({},j),{},{display:o?"block":"none"}),children:Object(x.jsx)(y,{blacklist:Object(h.a)(r),user:c,repo:n,onNewReviewer:function(){},onChangeRepo:function(t){s(D(t)),s(d(t))},clearAll:function(){s({type:L})},onSaveSettings:function(t){s(D(n)),s(d(n))},onAdd:v,onDelete:m})})]}),Object(x.jsx)("div",{className:"content",children:Array.isArray(a)?a.map((function(t){return Object(x.jsx)(g,{black:Object(h.a)(r).includes(t.login),name:t.login,image:t.avatar_url,onBlackList:v,onRemoveBl:m,onClick:k},t.id)})):null})]})]})},X=(n(39),"userName"),M="repository",J="blacklist";var V=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),a(t),s(t)}))},K=n(7),G=n(21),Q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{about:!1,settings:!1},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case T:return t.settings=!0,t;case B:return t.settings=!1,t;case P:return t.about=!0,t;case F:return t.about=!1,t;default:return t}},q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{repo:_,user:E,blacklist:w},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case C:return t.repo=e.payload,t;case N:var n=t.blacklist.indexOf(e.payload);return n<0&&t.blacklist.push(e.payload),t;case I:var c=t.blacklist.indexOf(e.payload);return c>=0&&t.blacklist.splice(c,1),t;case L:return t.blacklist=[],t;case R:return t.user=e.payload,t;default:return t}},z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:return t=e.users;default:return t}},H=Object(K.c)({settings:q,appstate:Q,users:z}),W="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):K.d,Y=[G.a],Z=W(K.a.apply(void 0,Y)),$=function(){var t={},e=localStorage.getItem(X),n=localStorage.getItem(M),c=localStorage.getItem(J);return null==e&&(localStorage.setItem(X,"Pre77"),localStorage.setItem(M,"https://github.com/Pre77/hh-school-react-2021"),localStorage.setItem(J,JSON.stringify([]))),t.user=e||"Pre77",t.repo=n||"https://github.com/Pre77/hh-school-react-2021",t.blacklist=c?JSON.parse(c):[],t}(),tt={settings:$,appstate:{settings:!1,about:!1},users:Object.values(function(t){return b.apply(this,arguments)}($.repo))},et=Object(K.e)(H,tt,Z);s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(i.a,{store:et,children:Object(x.jsx)(U,{})})}),document.getElementById("root")),et.dispatch(d(et.getState().settings.repo)),et.subscribe((function(){!function(t){t.user&&localStorage.setItem(X,t.user),t.repo&&localStorage.setItem(M,t.repo),t.blacklist&&localStorage.setItem(J,JSON.stringify(t.blacklist))}(et.getState().settings)})),V()}},[[40,1,2]]]);
//# sourceMappingURL=main.d3004fa2.chunk.js.map