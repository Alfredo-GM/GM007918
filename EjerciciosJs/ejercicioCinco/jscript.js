var btnA = document.getElementById("btnAgregar");
btnA.addEventListener("click",agregar);

var btn = document.getElementById("btnBuscar");
btn.addEventListener("click",posicion);

var result =  document.getElementById("resultado");
var campo = document.getElementById("tamano");
var i = document.getElementById("numero");


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

function posicion(n) 
{
    var arreglo = (campo.value);
	var esta = -1;

	for (var i = 0; i <= campo.length; i++) {
		if (n == arreglo[i]) {
				esta = i;
			}
		}
		if (esta != -1) {
			result.innerHTML = "El numero esta en la posicion " + (esta + 1);
		}else{
			result.innerHTML = "El numero no se encuentra en el arreglo";
		}
}