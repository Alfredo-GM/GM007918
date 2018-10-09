Proceso EncontrarNumero	
	Definir num2 Como Entero;
	
	Escribir 'Digite el numero: ';
	Leer num1;
	
	num2 = ConvertirANumero(num1);
	
	num1<-encontrar(num2);
FinProceso

SubProceso num1 <- encontrar (num2)
	Definir entra como logico;

	Dimension num[5];
	num[0]<-1;
	num[1]<-2;
	num[2]<-3;
	num[3]<-4;
	num[4]<-5;
	
	Para i<-0 Hasta 4 Con Paso 1 Hacer
		Si num2 == num[i] Entonces
			entra = Verdadero;
		FinSi
	FinPara
	Si entra Entonces
		Escribir 'El numero esta en el arreglo';
	SiNo
		Escribir 'El numero no esta';
	FinSi
FinSubProceso

