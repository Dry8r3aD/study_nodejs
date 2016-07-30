console.time ( 'alpha' );

var output = 1;
for ( var i = 1; i <= 1009; i++ ) {
	output += i;
}
console.log ( "%d", output );

console.timeEnd ( 'alpha' );
