(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||s;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<s;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),s=(n(0),n(108)),o={id:"async-completion",title:"Async Completion",hide_title:!0,sidebar_label:"Async Completion"},c={unversionedId:"getting-started/async-completion",id:"getting-started/async-completion",isDocsHomePage:!1,title:"Async Completion",description:"Async Completion",source:"@site/docs/getting-started/4-async-completion.md",slug:"/getting-started/async-completion",permalink:"/docs/en/getting-started/async-completion",version:"current",sidebar_label:"Async Completion",sidebar:"docs",previous:{title:"Creating Tasks",permalink:"/docs/en/getting-started/creating-tasks"},next:{title:"Working with Files",permalink:"/docs/en/getting-started/working-with-files"}},i=[{value:"Signal task completion",id:"signal-task-completion",children:[{value:"Returning a stream",id:"returning-a-stream",children:[]},{value:"Returning a promise",id:"returning-a-promise",children:[]},{value:"Returning an event emitter",id:"returning-an-event-emitter",children:[]},{value:"Returning a child process",id:"returning-a-child-process",children:[]},{value:"Returning an observable",id:"returning-an-observable",children:[]},{value:"Using an error-first callback",id:"using-an-error-first-callback",children:[]}]},{value:"No synchronous tasks",id:"no-synchronous-tasks",children:[]},{value:"Using async/await",id:"using-asyncawait",children:[]}],l={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"async-completion"},"Async Completion"),Object(s.b)("p",null,"Node libraries handle asynchronicity in a variety of ways. The most common pattern is ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://nodejs.org/api/errors.html#errors_error_first_callbacks"}),"error-first callbacks"),", but you might also encounter ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://nodejs.org/api/stream.html#stream_stream"}),"streams"),", ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises"}),"promises"),", ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://nodejs.org/api/events.html#events_events"}),"event emitters"),", ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://nodejs.org/api/child_process.html#child_process_child_process"}),"child processes"),", or ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/tc39/proposal-observable/blob/master/README.md"}),"observables"),". Gulp tasks normalize all these types of asynchronicity."),Object(s.b)("h2",{id:"signal-task-completion"},"Signal task completion"),Object(s.b)("p",null,"When a stream, promise, event emitter, child process, or observable is returned from a task, the success or error informs gulp whether to continue or end. If a task errors, gulp will end immediately and show that error."),Object(s.b)("p",null,"When composing tasks with ",Object(s.b)("inlineCode",{parentName:"p"},"series()"),", an error will end the composition and no further tasks will be executed. When composing tasks with ",Object(s.b)("inlineCode",{parentName:"p"},"parallel()"),", an error will end the composition but the other parallel tasks may or may not complete."),Object(s.b)("h3",{id:"returning-a-stream"},"Returning a stream"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { src, dest } = require('gulp');\n\nfunction streamTask() {\n  return src('*.js')\n    .pipe(dest('output'));\n}\n\nexports.default = streamTask;\n")),Object(s.b)("h3",{id:"returning-a-promise"},"Returning a promise"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function promiseTask() {\n  return Promise.resolve('the value is ignored');\n}\n\nexports.default = promiseTask;\n")),Object(s.b)("h3",{id:"returning-an-event-emitter"},"Returning an event emitter"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { EventEmitter } = require('events');\n\nfunction eventEmitterTask() {\n  const emitter = new EventEmitter();\n  // Emit has to happen async otherwise gulp isn't listening yet\n  setTimeout(() => emitter.emit('finish'), 250);\n  return emitter;\n}\n\nexports.default = eventEmitterTask;\n")),Object(s.b)("h3",{id:"returning-a-child-process"},"Returning a child process"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { exec } = require('child_process');\n\nfunction childProcessTask() {\n  return exec('date');\n}\n\nexports.default = childProcessTask;\n")),Object(s.b)("h3",{id:"returning-an-observable"},"Returning an observable"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { Observable } = require('rxjs');\n\nfunction observableTask() {\n  return Observable.of(1, 2, 3);\n}\n\nexports.default = observableTask;\n")),Object(s.b)("h3",{id:"using-an-error-first-callback"},"Using an error-first callback"),Object(s.b)("p",null,"If nothing is returned from your task, you must use the error-first callback to signal completion. The callback will be passed to your task as the only argument - named ",Object(s.b)("inlineCode",{parentName:"p"},"cb()")," in the examples below."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function callbackTask(cb) {\n  // `cb()` should be called by some async work\n  cb();\n}\n\nexports.default = callbackTask;\n")),Object(s.b)("p",null,"To indicate to gulp that an error occurred in a task using an error-first callback, call it with an ",Object(s.b)("inlineCode",{parentName:"p"},"Error")," as the only argument."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function callbackError(cb) {\n  // `cb()` should be called by some async work\n  cb(new Error('kaboom'));\n}\n\nexports.default = callbackError;\n")),Object(s.b)("p",null,"However, you'll often pass this callback to another API instead of calling it yourself."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const fs = require('fs');\n\nfunction passingCallback(cb) {\n  fs.access('gulpfile.js', cb);\n}\n\nexports.default = passingCallback;\n")),Object(s.b)("h2",{id:"no-synchronous-tasks"},"No synchronous tasks"),Object(s.b)("p",null,"Synchronous tasks are no longer supported. They often led to subtle mistakes that were hard to debug, like forgetting to return your streams from a task."),Object(s.b)("p",null,"When you see the ",Object(s.b)("em",{parentName:"p"},'"Did you forget to signal async completion?"')," warning, none of the techniques mentioned above were used. You'll need to use the error-first callback or return a stream, promise, event emitter, child process, or observable to resolve the issue."),Object(s.b)("h2",{id:"using-asyncawait"},"Using async/await"),Object(s.b)("p",null,"When not using any of the previous options, you can define your task as an ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.google.com/web/fundamentals/primers/async-functions"}),Object(s.b)("inlineCode",{parentName:"a"},"async")," function"),", which wraps your task in a promise. This allows you to work with promises synchronously using ",Object(s.b)("inlineCode",{parentName:"p"},"await")," and use other synchronous code."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const fs = require('fs');\n\nasync function asyncAwaitTask() {\n  const { version } = JSON.parse(fs.readFileSync('package.json', 'utf8'));\n  console.log(version);\n  await Promise.resolve('some result');\n}\n\nexports.default = asyncAwaitTask;\n")))}p.isMDXComponent=!0}}]);