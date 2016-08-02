var http = require('http');
var fs = require('fs');
var jade = require('jade');

http.createServer(function (request, response) {
	fs.readFile('jadePage.jade', 'utf8', function (error, data) {

		var fn = jade.compile(data);

		response.writeHead(200, { 'Content-Type' : 'Text/html' });
		response.end(fn({
			name: 'gyyoon',
			description: 'hooly mole'

		}));
	});
}).listen(52273, function () {
	console.log ('log log ');
});
