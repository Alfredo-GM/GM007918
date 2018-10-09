var puntox1 = document.getElementById("x1");
var puntoy1 = document.getElementById("y1");

var puntox2 = document.getElementById("x2");
var puntoy2 = document.getElementById("y2");

var puntox3 = document.getElementById("x3");
var puntoy3 = document.getElementById("y3");

var btnXY1 = document.getElementById("boton1");
btnXY1.addEventListener("click", validarXY1);

var btnXY2 = document.getElementById("boton2");
btnXY2.addEventListener("click", validarXY2);

var btnXY3 = document.getElementById("boton3");
btnXY3.addEventListener("click", validarXY3);

var cuadrito = document.getElementById("areatrabajo");
var papel = cuadrito.getContext("2d");

var limpiar = document.getElementById("limpiarCanvas");
limpiar.addEventListener("click",borrarCanvas,false);

var puntos = document.getElementById("puntosCercanos");
var botonPuntos = document.getElementById("calcularPuntos");
botonPuntos.addEventListener("click", puntosCercanos);


dibujarLinea("#D8A47F", 450,1,450,900, papel);
dibujarLinea("#D8A47F", 1,450,900,450, papel);

  //Dibuja las lineas vertical y horizontal en el canvas
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
  //dibuja el circulo
function dibujaCirculo(x, y){
    var radio = 8; // Cambia el tamaño del punto
    var ctx = document.getElementById("areatrabajo").getContext("2d");


    ctx.fillStyle = "#f05d5e"; // Color rojo
    ctx.beginPath(); // Inicia trazo
    ctx.arc(x, y, radio, 0, Math.PI * 2); // Dibujar un punto usando la funcion arc
    //x, y = coordenadas en el plano...radio= tamaño del circulo...0= inicia en cero para hacer circulo completo
    ctx.fill(); // Termina el trazo
}

          // FUNCION PARA VALIDAR LOS BOTONES
function validarXY1()
{
  //Boton 1: x1, y1
  if (puntox1.value > 900 || puntox1.value < 0 || puntox1.value == "")
  {
    swal({  title: "Error!",
                text: "Debe ingresar un numero, \n no debe de ser mayor a 900 \n ni negativo",
                type: "error",
                confirmButtonText: "Cool" });
  }else{
    if(puntoy1.value > 900 || puntoy1.value < 0 || puntoy1.value == "")
    {
      swal({  title: "Error!",
                text: "Debe ingresar un numero, \n no debe de ser mayor a 900 \n  ni negativo",
                type: "error",
                confirmButtonText: "Cool" });
    }else{
    dibujaCirculo(puntox1.value , puntoy1.value);
  }
  }
}

  //Boton 2:x2, y2
  function validarXY2()
  {
  if (puntox2.value > 900 || puntox2.value < 0 || puntox2.value == "")
  {
    swal({  title: "Error!",
                text: "Debe ingresar un numero, \n no debe de ser mayor a 900 \n ni negativo",
                type: "error",
                confirmButtonText: "Cool" });
  }else{
    if(puntoy2.value > 900 || puntoy2.value < 0 || puntoy2.value == "")
    {
      swal({  title: "Error!",
                text: "Debe ingresar un numero, \n no debe de ser mayor a 900 \n  ni negativo",
                type: "error",
                confirmButtonText: "Cool" });
    }
    dibujaCirculo(puntox2.value , puntoy2.value);
  }
}
  //Boton 3: x3,y3
  function validarXY3()
  {
  if (puntox3.value > 900 || puntox3.value < 0 || puntox3.value == "")
  {
    swal({  title: "Error!",
                text: "Debe ingresar un numero, \n no debe de ser mayor a 900 \n ni negativo",
                type: "error",
                confirmButtonText: "Cool" });
  }else{
    if(puntoy3.value > 900 || puntoy3.value < 0 || puntoy3.value == "")
    {
      swal({  title: "Error!",
                text: "Debe ingresar un numero, \n no debe de ser mayor a 900 \n  ni negativo",
                type: "error",
                confirmButtonText: "Cool" });
    }
    dibujaCirculo(puntox3.value , puntoy3.value);
  }
}

  //Funcion para limpiar el canvas
  function borrarCanvas()
  {

		papel.clearRect(0,0,cuadrito.width,cuadrito.height);
		dibujarLinea("#D8A47F", 450,1,450,900, papel);
    dibujarLinea("#D8A47F", 1,450,900,450, papel);
  }

    //funcion para calcular los puntos mas cercanos

    function puntosCercanos()
    {
        var punto1 = 0;
        var punto2 = 0;
        var punto3 = 0;

        //calcular distancia entre punto1 y punto2
	punto1 = Math.sqrt( (Math.pow((puntox2.value-puntox1.value),2)) + (Math.pow((puntoy2.value-puntoy1.value),2)) );

	      //calcular distancia entre punto2 y punto3
	punto2 = Math.sqrt( (Math.pow((puntox2.value-puntox3.value),2)) + (Math.pow((puntoy2.value-puntoy3.value),2)) );

        //calcular distancia entre punto1 y punto3
	punto3 = Math.sqrt( (Math.pow((puntox3.value-puntox1.value),2)) + (Math.pow((puntoy3.value-puntoy1.value),2)) );

  if(punto1 < punto2 && punto1 < punto3)
  {
		puntos.innerHTML = "los puntos 1 y 2 son mas cercanos";
	}
  else if (punto2 < punto3 && punto2 < punto1)
  {
		puntos.innerHTML = "los puntos 2 y 3 son mas cercanos";
	}
  else if (punto3 < punto2 && punto3 < punto1)
  {
		puntos.innerHTML = "los puntos 1 y 3 son mas cercanos";
	}
	else{
		puntos.innerHTML = "no hay mas proximo";
	}
}
