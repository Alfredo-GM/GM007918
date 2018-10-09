Proceso Encontrar
	Definir posicion como entero;
	posicion = -1;
	
	Definir num2 como entero;
	
	Escribir 'Digite un numero: ';
	Leer num1;
	
	num2 = ConvertirANumero(num1);
	
	num1<-retornar(num2);
FinProceso

SubProceso posicion <- retornar ( num2 )
	Dimension num[5];
	num[0]<-1;
	num[1]<-2;
	num[2]<-3;
	num[3]<-4;
	num[4]<-5;
	
	Para i<-0 Hasta 4 Con Paso 1 Hacer
		Si num2 == num[i] Entonces
			posicion=i;
		FinSi
	FinPara
	Si posicion== -1 Entonces
		Escribir 'A';
	SiNo
		Escribir  posicion;
	FinSi
FinSubProceso


