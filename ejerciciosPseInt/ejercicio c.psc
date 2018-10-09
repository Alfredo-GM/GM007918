Proceso Multiplo_3
	Definir N,M Como Entero;
	
	Escribir 'Digite el numero (M): ';
	Leer M;
	
	Escribir 'Digite el numero (N): ';
	Leer N;
	
	Definir cont como entero;
	cont = 0;
	
	Para i<-M Hasta N Con Paso 1 Hacer
		Si i MOD 3== 0  Entonces
			cont = cont + 1; 
		FinSi
	FinPara
	
	Escribir 'Los multiplos de 3 son: ', cont;
	
FinProceso
