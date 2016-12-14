function leftPad( n, width ) {
    return n.length < width ?
        new Array( width - n.length + 1 ).join( "0" ) + n :
        n;
}

function hexvert24( i ) {
    var scaled = Math.floor( i * ( 255 / 24 ) );
    return leftPad( scaled.toString( 16 ), 2 );
}

function hexvert60( i ) {
    var scaled = Math.floor( i * ( 255 / 60 ) );
    return leftPad( scaled.toString( 16 ), 2 );
}

function getHexTime( d ) {
    var h = hexvert24( d.getHours() );
    var m = hexvert60( d.getMinutes() );
    var s = hexvert60( d.getSeconds() );

    return "#" + h + m + s;
}

function updateTime() {
    var hexTime = getHexTime( new Date() );

    document.getElementById("hex").innerHTML = hexTime;
    document.body.style.backgroundColor = hexTime;
}

document.body.onload = function() {
    setInterval( updateTime, 500 )
};
