// Non-blocking code
var fs = require('fs');

fs.readFile('./data/data_25mb.json', 'utf8', function(error, content) {
    console.log(content);
});

console.log("------------------- DONE -------------------");