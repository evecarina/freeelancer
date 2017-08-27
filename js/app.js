
var enviar=document.getElementById("enviar");
enviar.addEventListener("click", validacion );
//enviar.addEventListener("click", limpiar);


//object .onsubmit = function(){ myScript };

 function validacion() {


//var numero = '999999999';
var regExp = /^9[0-9]{8}$/;
//if(!regExp.test(numero)) { alert("error");  }
  nombre = document.getElementById("nombre").value;
  email = document.getElementById("email").value;
 numero = document.getElementById("numero").value;

 //nombre
if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
   alert('[ERROR_Nombre]');
   return false;
}
 //numeroCelular
if( !regExp.test(numero)){
  alert('[ERROR_Teléfono]');
  return false;

}
 //direcion de email
if((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)) ) {
   alert('[ERROR_Email]');
  return false;
}
    limpiar();
   return true;

}

function limpiar(){
  document.getElementById("nombre").value="";
  document.getElementById("email").value="";
  document.getElementById("numero").value="";
  document.getElementById("mensaje").value="";

}

