function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function hexvert24( i ) {
    var scaled = Math.floor( i * ( 255 / 24 ) )
    return pad( scaled.toString( 16 ), 2 );
}

function hexvert60( i ) {
    var scaled = Math.floor( i * ( 255 / 60 ) );
    return pad( scaled.toString( 16 ), 2 );
}

function updateTime()
{
    var d = new Date();
    var h = hexvert24(d.getHours());
    var m = hexvert60(d.getMinutes());
    var s = hexvert60(d.getSeconds());

    document.getElementById("hex").innerHTML = "#" + h + m + s;
    
    document.getElementById("hex").style.fontFamily = "Roboto";
    document.getElementById("hex").style.fontSize = 250 + "px";
    /*document.getElementById("hex").style.paddingTop = 19 + "vh";*/

    if (/([0-9A-F]{6}$)|([0-9A-F]{3}$)/i.test("Default"))
    {
        document.body.style.backgroundColor = "#Default";
    } else
    {
        document.body.style.backgroundColor = "#" + h + m + s;
    }

    var height = window.innerHeight;
    height = (height/2)-125;
    document.getElementById("hex").style.paddingTop = height + "px";


    setTimeout(function ()
    {
        updateTime();
    }, 500);
}

document.body.onload = function ()
{
    updateTime();
};
