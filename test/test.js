'use strict';

// MODULES //

var tape = require( 'tape' );
var toFloat32 = require( 'float64-to-float32' );
var pow = require( 'math-power' );
var CONST = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.equal( typeof CONST, 'number', 'main export is a number' );
	t.end();
});

tape( 'export equals the maximum single-precision floating-point number', function test( t ) {
	var v = pow( 2, 127 ) * (2 - 1/pow(2,23));
	t.equal( CONST, toFloat32( v ), 'equals max float' );
	t.end();
});
