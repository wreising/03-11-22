// 1. Object
const nodejs = {
  pkgName: 'Node.js',
  type: 'JavaScript runtime environment',
};

// TODO: Destructure the object 'nodejs'

// console.log(pkgName); // <= Node.js
// console.log(type); // <= JavaScript runtime environment

// 2. Nested Object
const js = {
  name: 'JavaScript',
  type: 'programming language',
  version: 'ES6',
  tools: {
    frameworks: {
      framework1: 'AngularJS',
      framework2: 'Vue.js',
    },
    libraries: {
      library1: 'jQuery',
      library2: 'React',
    },
  },
};

// const { name, type, version, tools { frameworks { framework1, framework2 }, libraries { library1, library2 }}} = js

const { name, type, version, tools: { frameworks: { framework1, framework2 }, libraries } } = js

// const { name } = js

// TODO: Destructure the nested object 'js'

console.log(framework1); // <= AngularJS
console.log(framework2); // <= Vue.js

console.log(name)

// // 3. Arrays
// const languages = ['HTML', 'CSS', 'JavaScript'];

// // TODO: Destructure the array 'languages'

// console.log(markup, style, scripting); // <= HTML CSS JavaScript
// console.log(markup); // <= HTML