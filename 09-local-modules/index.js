require("./add.js"); // using js is not required with CommonJS

console.log("Hello from index.js");

/* 

- In node.js, each file is a module that is isolated by default;
- To load a module into another file, we use require function;
- When index.js is executed, the code in the module is also executed;
- If the file we are requiring is a javascript file, we can skip specifying the extension and node.js will infer it on our behalf;

*/
