require('http').createServer( function( request, response) {
	if ( request.url == '/' ){
		// 응답
		response.write('<!DOCTYPE html>');
		response.write('<html>');
		response.write('<head>');
		response.write('	<title> asfdf </title>');
		response.write('</head>');
		response.write('<body>');
		response.write('	<h1> forever </h1> ');
		response.write('</body>');
		response.write('<html>');
		response.end();
	} else {
		// error
		console.log ("dfsdafasd");
		error.error.error();
	}
}).listen(52273, function() {
	console.log( "fdsafsdfS");
});
