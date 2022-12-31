const path = require("node:path");

console.log(__filename);
console.log(__dirname);

console.log("*** basename ***");
console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log("*** extname ***");
console.log(path.extname(__filename));
console.log(path.extname(__dirname));

console.log("*** parse ***");
console.log(path.parse(__filename));

console.log("*** format ***");
console.log(path.format(path.parse(__filename)));

console.log("*** isAbsolute ***");
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute("./data.txt"));

console.log("*** end ***");
