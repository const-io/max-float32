'use strict';

// MODULES //

var toFloat32 = require( 'float64-to-float32' );


// EXPORTS //

// Math.pow( 2, 127 ) * (2 - 1 / Math.pow( 2, 23 ) )
module.exports = toFloat32( 3.4028234663852886e+38 );
