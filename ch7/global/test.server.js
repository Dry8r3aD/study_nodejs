var http = require('http');

http.createServer( function (request, response) {
	response.writeHead(200, { 'Content-Type' : 'Text/html' });
	response.end('<h1> Test - File - 32dddddd44234243 </h1>');
}).listen(52273, function() {
	console.log ('fucklkkk');
});
