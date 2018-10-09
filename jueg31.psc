Funcion AleatorioBaraja <- barajaAzar ( usuario )
	
	Dimension vec[12]
	
	Para x<-1 Hasta 12 Hacer
		vec[x] <- azar(48)+1
	Fin Para
	
	Para i<-2 Hasta 12 Con Paso 1 Hacer
		aux<-vec[1]
		p<-i-1
		
		Mientras aux < vec[p] y p >= 1 Hacer
			vec[p + 1] <- vec[p] 
			p<-p-1
		FinMientras
		
		Si vec[p] <- aux  Entonces
			vec[p + 1] <- aux
		SiNo
			vec[p + 1] <- vec[p]
			vec[p] <- aux
		FinSi
		
	FinPara
	
	Para x <- 1 Hasta 12 Hacer
		Escribir vec[x]
	FinPara

Fin Funcion

Algoritmo juego_31
	
	Escribir "Bienvenido a 31: Juego de Cartas"
	Escribir "Si su suma es mas alta que la del banquero, usted gana"
	Escribir "Si su suma excede los 31, usted pierde"
	Escribir "-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-"
	
	sumUsuario<-0
	sumBanquero<-0
	cartaUsuario<- AleatorioBaraja(0)
	cartaBanquero<-AleatorioBaraja(1)
	
	Escribir "Aqui esta su primera carta: " + cartaUsuario
	sumUsuario<-sumUsuario + sumUsuario
	sumBanquero<-sumBanquero + sumBanquero
	Escribir("Digite 1 si desea otra carta:") 
 	
	Mientras solicitud = 1 Hacer
		cartaUsuario<-AleatorioBaraja
		cartaBanquero<-AleatorioBaraja
		sumUsuario<-sumUsuario + cartaUsuario
		sumBanquero<-sumBanquero + cartaBanquero
		
		Si sumUsuario>31 o sumBanquero>31 Entonces
			solicitud=0
		SiNo
			Escribir "Digite 1 si desea otra carta"
		Fin Si
	Fin Mientras
	
	
	Si sumUsuario==31 Entonces
		Escribir "Felicidades, eres el GANADOR!!! :D"
	
	SiNo
		Si sumBanquero>31 y sumUsuario<31 Entonces
			Escribir "Felicidades, eres el GANADOR!!! :D"
		SiNo
			Si sumBanquero<31 y sumUsuario>31 Entonces
				Escribir "El banquero ganó :("
			SiNo
				Si sumBanquero > sumUsuario Entonces
					Escribir "El banquero ganó :("
				SiNo
					Si sumUsuario > sumBanquero Entonces
						 Si sumBanquero>31 y sumUsuario<31 Entonces
							Escribir "Felicidades, eres el GANADOR!!! :D"
						SiNo
							Escribir "No hubo ganador en esta partida"
						FinSi
					FinSi
				FinSi
			FinSi
			
		FinSi
	Fin Si
	
	
FinAlgoritmo



