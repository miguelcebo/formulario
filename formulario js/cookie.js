function crearCookie(clave, valor, diasexpiracion) {
    var d = new Date();
    d.setTime(d.getTime() + (diasexpiracion*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = clave + "=" + valor + ";" + expires +";path=/";
}

function obtenerCookie(clave) {
    var name = clave + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}