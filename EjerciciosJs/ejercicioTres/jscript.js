var numN = document.getElementById("numN");
var numM = document.getElementById("numM");


var result = document.getElementById("multiplos");
var btn = document.getElementById("btnMultiplos");

var contador = 0;

btn.addEventListener("click",calcularMultiplos);

function calcularMultiplos(){
	var num1 = parseInt(numN.value);
    var num2 = parseInt(numM.value);

	if(num1 < 0 || num2 < 0){
        //swal ("No puedes usar números negativos");
        swal({  title: "Error!",   
                text: "No puedes usar números negativos",   
                type: "error",   
                confirmButtonText: "Cool" });
	}
	else{
		if(num1 < num2){
			while(num1 <= num2){
				if (num1 % 3 == 0) {
					contador = contador + 1;
				}
				num1++;
				result.innerHTML = "Los multiplos de 3 son : " + contador;
			}
		}else{
			while(num2 <= num1){
				if (num2 % 3 == 0) {
					contador = contador + 1;
				}
				num2++;
				result.innerHTML = contador + " Múltiplos"  ;
			}
		}
	}
}