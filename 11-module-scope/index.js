require("./batman");
require("./superman");

/*
- Immediately Invoked Function Expression (IIFE) in Node.js;
- Before a module is executed, Node.js will wrap it with a function wrapper that provides module scope;
- This save us from having to worry about conflicting variables or functions;
- There is proper encapsulation and reusability is unaffected;
- Each loaded module in Node.js is wrapped with an IIFE that provides private scoping of code;
- IIFE allows you to repeat variable or function names without any conflicts;
*/
