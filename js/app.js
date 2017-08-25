var enviar=document.getElementById("enviar");
enviar.addEventListener("submit", validacion );
//enviar.addEventListener("click", limpiar);

nombre = document.getElementById("nombre").value;
email = document.getElementById("email").value;
numero = document.getElementById("numero").value;

//object .onsubmit = function(){ myScript };

 function validacion() {
 //nombre
if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
   alert('[ERROR] El campo debe tener un valor de...');
   return false;
}
 //numeroCelular
if( !(/^\d{9}$/.test(numero)) ) {
   alert('[ERROR] El campo debe tener un valor de...');
    return false;
  }
   
 //direcion de email
if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email)) ) {
   alert('[ERROR] El campo debe tener un valor de...');
  return false;
}
  
   return true;

}

function limpiar(){
  document.getElementById("nombre").value="";
  document.getElementById("email").value="";
  document.getElementById("numero").value="";
   document.getElementById("mensaje").value="";
 
}

