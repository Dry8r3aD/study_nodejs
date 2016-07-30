var func = function () {
	process.exit();
};

process.argv.forEach ( function ( item, index) {
	console.log ( index  + ' : ' + typeof (item) + ' : ' + item );

	if (item == '--exit') {
		var exitTime = Number(process.argv[index+1]);

		setTimeout ( func, exitTime);
	}
});

