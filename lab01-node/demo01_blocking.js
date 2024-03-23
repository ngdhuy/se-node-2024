// Blocking code 
var fs = require('fs');
var content = fs.readFileSync('./data/data_25mb.json', 'utf8');
console.log(content);
console.log("------------------- DONE -------------------");