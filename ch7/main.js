var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

http.createServer( function (request, response) {
	fs.readFile('ejsPage.js', 'utf8', function (error, data) {
		response.writeHead(200, { 'Content-Type' : 'text/html' });
		response.end(ejs.render(data, {
			name : 'gyyoon',
			description : 'fuck '
		}));
	});
}).listen(52273, function () {
	console.log('server running');
});
