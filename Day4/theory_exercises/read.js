var fs = require('fs');

function print (error, content){
	console.log(content);
}

fs.readFile('hola.txt', 'utf8', print);