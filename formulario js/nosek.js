document.getElementById('registro').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {

        if(validar_correomovil() == true && validar_clave() == true && validar_contraseñas() == true){
            crearCookie(usuario.value , contraseña1.value, 1);
            document.getElementById("registro").style.display = "none";
            document.getElementById("login").style.display = "block";
            
        }
    }
});

document.getElementById('login').addEventListener('keypress', function (e){
    if(e.key === 'Enter') {
    
        if(document.getElementById("contraseña3").value == obtenerCookie(document.getElementById("usuario").value)){
            crearCookie("sesion", usuario.value, 1/24);
            document.getElementById("login").style.display = "none";
            document.getElementById("logout").style.display = "block";
        }
        
    }    
});

document.getElementById("boton2").addEventListener("click", function(){
        crearCookie("sesion", usuario.value,-1);
        document.getElementById("login").style.display = "block";
        document.getElementById("logout").style.display = "none";
});

document.getElementById('boton1').addEventListener('click', function (){
    var clave = document.getElementById("contraseña3");
    if(clave.type == "password"){
        clave.type = "text";
    }else{
        clave.type = "password";
    }
});