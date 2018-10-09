var btnA = document.getElementById("btnAgregar");
btnA.addEventListener("click",agregar);

var btn = document.getElementById("btnBuscar");
btn.addEventListener("click",buscar);

var result =  document.getElementById("resultado");
var campo = document.getElementById("tamano");


function agregar()
{


   if (campo.value == "" )
     {
        alert("Ingrese un número"); 
     }
     else 
     {
         alert("Ingresado correctamente");
         
     }
  
}
   

function buscar ()
{   var n = document.getElementById("tamano");
    var num = document.getElementById("numero");
    var arreglo = (campo.value);
    posicion = false;
    
    for (var i = 0; i <= arreglo.length; i++) {
		if (num == arreglo[i]) {
			posicion=true;
			}
		}
		if (num <= arreglo.length) {
			result.innerHTML = "el numero esta en el arreglo";
		}else{
			result.innerHTML = "el numero no esta en el arreglo";
		}



}

