var potencia = document.getElementById("calculo");
potencia.addEventListener("click",calcularPotencia);

var resultado = document.getElementById("resultado");

function calcularPotencia(){
	var n = 1;
	var potencia = 0;
	var campo = document.getElementById("numero");
        
    while(potencia <= campo.value){
		potencia = 2^n;
		n=n+1;
	}
        potencia = potencia/2-1;
        resultado.innerHTML = "La potencia de 2 más cercana es: " + potencia;
	}
	
	 
