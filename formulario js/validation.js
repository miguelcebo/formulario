function validar_correomovil() {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(correomovil.value)){
            return true;
        } else if(/^([9,7,6]{1})+([0-9]{8})$/.test(correomovil.value)){
            return true;
        }else{
            return false;
        }
    }

    function validar_clave(){

			if(contraseña1.value.length >= 8)
			{		
				var mayuscula = false;
				var minuscula = false;
				var numero = false;
				var caracter_raro = false;
				
				for(var i = 0;i<contraseña1.value.length;i++)
				{
					if(contraseña1.value.charCodeAt(i) >= 65 && contraseña1.value.charCodeAt(i) <= 90)
					{
                        mayuscula = true;
					}
					else if(contraseña1.value.charCodeAt(i) >= 97 && contraseña1.value.charCodeAt(i) <= 122)
					{
                        minuscula = true;
					}
					else if(contraseña1.value.charCodeAt(i) >= 48 && contraseña1.value.charCodeAt(i) <= 57)
					{
                        numero = true;
					}
					else
					{
                        caracter_raro = true;
					}
                }
				if(mayuscula == true && minuscula == true && caracter_raro == true && numero == true)
				{
                    return true;
				}
            }
            
			return false;
        }
        
    function validar_contraseñas(){
            
        if (contraseña1.value == contraseña2.value) {

            return true;
            
        } else {
            return false; 
        }
    }

 
        

