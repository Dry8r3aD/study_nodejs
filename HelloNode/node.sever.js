var http = require ( 'http' );

http.createServer ( function ( request, response ) {
	response.writeHead ( 200, { 'Content-Type' : 'text/html' } );
	response.end ( '<h1> Hello World Bro </h1>' );
}).listen ( 52273, function () {
	console.log ( 'server running and listening to 52237' );
});
