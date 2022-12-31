const path = require("node:path");

console.log(path.resolve("folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "//folder2", "index.html")); // considers folder2 as the root
console.log(path.resolve("/folder1", "//folder2", "../index.html")); //goes back one folder
console.log(path.resolve(__dirname, "data.json"));
