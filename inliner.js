var fs = require('fs');
var juice = require('juice'); 

// var filePath = fs('./test.html');
var source = fs.readFile('./test.html', 'utf-8');

juice.juiceFile(source, ()=>(err, html));

console.log(html)
