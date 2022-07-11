$(function(){
    $(document).bind("contextmenu",function(e){
        return false;
    });
});

function validacion(){
            var formvalido = true;

            var nom = document.getElementById("nombre").value;
            if(nom == null || nom.length == 0){
                alert("El nombre no puede estar vacío");
                formvalido = false;
            }
             var email = document.getElementById("correo").value;
            if(email == null || email.length == 0){
                alert("El correo no puede estar vacío");
                else if (email.match(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i) == null) {
                alert("El email no es correcto");
                return;
                formvalido = false;
            }
             var mens = document.getElementById("mensaje").value;
            if(mens == null || mens.length == 0){
                alert("El mensaje no puede estar vacío");
                formvalido = false;
            }

        }

