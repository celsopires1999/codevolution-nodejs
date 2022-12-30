require("./batman");
require("./superman");

/*
MODULE WRAPPER
- Every module in node.js gets wrapped in an IIFE before being loaded;
- IIFE helps keep top-level variables scoped to the module rather that the global object;
- The IIFE that wraps every module contains 5 parameters which are pretty important for the functioning of a module;
*/

// (function(exports, require, module, __filename, __dirname){
//     const superHero = "Batman";
//     console.log(superHero);
// })
