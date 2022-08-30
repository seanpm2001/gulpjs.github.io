(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{108:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,b=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return t?a.a.createElement(b,s(s({ref:n},l),{},{components:t})):a.a.createElement(b,s({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},99:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(8),o=(t(0),t(108)),i={id:"automate-releases",title:"Automate Releases",hide_title:!0,sidebar_label:"Automate Releases"},s={unversionedId:"recipes/automate-releases",id:"recipes/automate-releases",isDocsHomePage:!1,title:"Automate Releases",description:"Automate Releases",source:"@site/docs/recipes/automate-releases.md",slug:"/recipes/automate-releases",permalink:"/docs/en/recipes/automate-releases",version:"current",sidebar_label:"Automate Releases",sidebar:"docs",previous:{title:"Creating Custom Registries",permalink:"/docs/en/advanced/creating-custom-registries"},next:{title:"API Concepts",permalink:"/docs/en/api/concepts"}},c=[],l={toc:c};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"automate-releases"},"Automate Releases"),Object(o.b)("p",null,"If your project follows a semantic versioning, it may be a good idea to automatize the steps needed to do a release.\nThe recipe below bumps the project version, commits the changes to git and creates a new GitHub release."),Object(o.b)("p",null,"For publishing a GitHub release you'll need to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token"}),"create a personal access token")," and add it to your project. However, we don't want to commit it, so we'll use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/dotenv"}),Object(o.b)("inlineCode",{parentName:"a"},"dotenv"))," to load it from a git-ignored ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"GH_TOKEN=ff34885...\n")),Object(o.b)("p",null,"Don't forget to add ",Object(o.b)("inlineCode",{parentName:"p"},".env")," to your ",Object(o.b)("inlineCode",{parentName:"p"},".gitignore"),"."),Object(o.b)("p",null,"Next, install all the necessary dependencies for this recipe:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save-dev conventional-recommended-bump conventional-changelog-cli conventional-github-releaser dotenv execa\n")),Object(o.b)("p",null,"Based on your environment, setup and preferences, your release workflow might look something like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const gulp = require('gulp');\nconst conventionalRecommendedBump = require('conventional-recommended-bump');\nconst conventionalGithubReleaser = require('conventional-github-releaser');\nconst execa = require('execa');\nconst fs = require('fs');\nconst { promisify } = require('util');\nconst dotenv = require('dotenv');\n\n// load environment variables\nconst result = dotenv.config();\n\nif (result.error) {\n  throw result.error;\n}\n\n// Conventional Changelog preset\nconst preset = 'angular';\n// print output of commands into the terminal\nconst stdio = 'inherit';\n\nasync function bumpVersion() {\n  // get recommended version bump based on commits\n  const { releaseType } = await promisify(conventionalRecommendedBump)({ preset });\n  // bump version without committing and tagging\n  await execa('npm', ['version', releaseType, '--no-git-tag-version'], {\n    stdio,\n  });\n}\n\nasync function changelog() {\n  await execa(\n    'npx',\n    [\n      'conventional-changelog',\n      '--preset',\n      preset,\n      '--infile',\n      'CHANGELOG.md',\n      '--same-file',\n    ],\n    { stdio }\n  );\n}\n\nasync function commitTagPush() {\n  // even though we could get away with \"require\" in this case, we're taking the safe route\n  // because \"require\" caches the value, so if we happen to use \"require\" again somewhere else\n  // we wouldn't get the current value, but the value of the last time we called \"require\"\n  const { version } = JSON.parse(await promisify(fs.readFile)('package.json'));\n  const commitMsg = `chore: release ${version}`;\n  await execa('git', ['add', '.'], { stdio });\n  await execa('git', ['commit', '--message', commitMsg], { stdio });\n  await execa('git', ['tag', `v${version}`], { stdio });\n  await execa('git', ['push', '--follow-tags'], { stdio });\n}\n\nfunction githubRelease(done) {\n  conventionalGithubReleaser(\n    { type: 'oauth', token: process.env.GH_TOKEN },\n    { preset },\n    done\n  );\n}\n\nexports.release = gulp.series(\n  bumpVersion,\n  changelog,\n  commitTagPush,\n  githubRelease\n);\n")))}u.isMDXComponent=!0}}]);