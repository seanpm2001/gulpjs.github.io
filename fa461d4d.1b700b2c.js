(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return l}));var a=n(1),r=n(10),c=(n(0),n(174)),b={id:"task",title:"task()",hide_title:!0,sidebar_label:"task()"},i={id:"api/task",title:"task()",description:"# task()",source:"@site/docs/api/task.md",permalink:"/docs/en/api/task",sidebar_label:"task()",sidebar:"docs",previous:{title:"watch()",permalink:"/docs/en/api/watch"},next:{title:"registry()",permalink:"/docs/en/api/registry"}},o=[{value:"Usage",id:"usage",children:[]},{value:"Signature",id:"signature",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Errors",id:"errors",children:[]}]},{value:"Task metadata",id:"task-metadata",children:[]}],s={rightToc:o};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"task"},"task()"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Reminder"),": This API isn't the recommended pattern anymore - ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/en/getting-started/creating-tasks"}),"export your tasks"),"."),Object(c.b)("p",null,"Defines a task within the task system. The task can then be accessed from the command line and the ",Object(c.b)("inlineCode",{parentName:"p"},"series()"),", ",Object(c.b)("inlineCode",{parentName:"p"},"parallel()"),", and ",Object(c.b)("inlineCode",{parentName:"p"},"lastRun()")," APIs."),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("p",null,"Register a named function as a task:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { task } = require('gulp');\n\nfunction build(cb) {\n  // body omitted\n  cb();\n}\n\ntask(build);\n")),Object(c.b)("p",null,"Register an anonymous function as a task:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { task } = require('gulp');\n\ntask('build', function(cb) {\n  // body omitted\n  cb();\n});\n")),Object(c.b)("p",null,"Retrieve a task that has been registered previously:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { task } = require('gulp');\n\ntask('build', function(cb) {\n  // body omitted\n  cb();\n});\n\nconst build = task('build');\n")),Object(c.b)("h2",{id:"signature"},"Signature"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"task([taskName], taskFunction)\n")),Object(c.b)("h3",{id:"parameters"},"Parameters"),Object(c.b)("p",null,"If the ",Object(c.b)("inlineCode",{parentName:"p"},"taskName")," is not provided, the task will be referenced by the ",Object(c.b)("inlineCode",{parentName:"p"},"name")," property of a named function or a user-defined ",Object(c.b)("inlineCode",{parentName:"p"},"displayName")," property. The ",Object(c.b)("inlineCode",{parentName:"p"},"taskName")," parameter must be used for anonymous functions missing a ",Object(c.b)("inlineCode",{parentName:"p"},"displayName")," property."),Object(c.b)("p",null,"Since any registered task can be run from the command line, avoid using spaces in task names."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"parameter"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"note"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"taskName"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"An alias for the task function within the the task system. Not needed when using named functions for ",Object(c.b)("inlineCode",{parentName:"td"},"taskFunction"),".")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"taskFunction",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"(required)")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"function"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A ",Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/en/api/concepts#tasks"}),"task function")," or composed task - generated by ",Object(c.b)("inlineCode",{parentName:"td"},"series()")," and ",Object(c.b)("inlineCode",{parentName:"td"},"parallel()"),". Ideally a named function. ",Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"#task-metadata"}),"Task metadata")," can be attached to provide extra information to the command line.")))),Object(c.b)("h3",{id:"returns"},"Returns"),Object(c.b)("p",null,"When registering a task, nothing is returned."),Object(c.b)("p",null,"When retrieving a task, a wrapped task (not the original function) registered as ",Object(c.b)("inlineCode",{parentName:"p"},"taskName")," will be returned. The wrapped task has an ",Object(c.b)("inlineCode",{parentName:"p"},"unwrap()")," method that will return the original function."),Object(c.b)("h3",{id:"errors"},"Errors"),Object(c.b)("p",null,"When registering a task where ",Object(c.b)("inlineCode",{parentName:"p"},"taskName")," is missing and ",Object(c.b)("inlineCode",{parentName:"p"},"taskFunction"),' is anonymous, will throw an error with the message, "Task name must be specified".'),Object(c.b)("h2",{id:"task-metadata"},"Task metadata"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"property"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"note"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"name"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A special property of named functions. Used to register the task.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Note:")," ",Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name"}),Object(c.b)("inlineCode",{parentName:"a"},"name"))," is not writable; it cannot be set or changed.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"displayName"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"When attached to a ",Object(c.b)("inlineCode",{parentName:"td"},"taskFunction")," creates an alias for the task. If using characters that aren't allowed in function names, use this property.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"description"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"When attached to a ",Object(c.b)("inlineCode",{parentName:"td"},"taskFunction")," provides a description to be printed by the command line when listing tasks.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"flags"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"object"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"When attached to a ",Object(c.b)("inlineCode",{parentName:"td"},"taskFunction")," provides flags to be printed by the command line when listing tasks. The keys of the object represent the flags and the values are their descriptions.")))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { task } = require('gulp');\n\nconst clean = function(cb) {\n  // body omitted\n  cb();\n};\nclean.displayName = 'clean:all';\n\ntask(clean);\n\nfunction build(cb) {\n  // body omitted\n  cb();\n}\nbuild.description = 'Build the project';\nbuild.flags = { '-e': 'An example flag' };\n\ntask(build);\n")))}l.isMDXComponent=!0},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,u=p["".concat(b,".").concat(m)]||p[m]||d[m]||c;return n?r.a.createElement(u,i({ref:t},s,{components:n})):r.a.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,b=new Array(c);b[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var s=2;s<c;s++)b[s]=n[s];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);