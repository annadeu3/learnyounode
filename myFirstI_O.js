var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]).toString();
var numLines = buffer.split("\n");

console.log(numLines.length-1);