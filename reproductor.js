// Reproductor de video v0.1
// Autor: ben yair
// Referencias: EL GRAN LIBRO DE HTML5 CSS3 y JS

function iniciar(){
	//Variable que marca la longitud maxima de la barra de progreso.
	this.maximo=600;
	//Declaracion de los elementos que componen al reprouctor.
	medio=document.getElementById('medio');
	reproducir=document.getElementById('reproducir');
	barra=document.getElementById('barra');
	progreso=document.getElementById('progreso');
    //Declaracion de eventos escucha
	reproducir.addEventListener('click', presionar,false);
	barra.addEventListener('click', mover, false);
}
//funcion que controla la reproduccion del video
function presionar(){
    if(!medio.paused && !medio.ended){
        medio.pause();
        reproducir.innerHTML='Reproducir';
        window.clearInterval(bucle);
    }
    else{
    	medio.play();
    	reproducir.innerHTML='Pausa';
    	bucle = setInterval(estado,1000);
    }
}
//Funcion que controla el estado de la barra de progreso en estado automatico
function estado(){
    if (!medio.ended) {
    	var total=parseInt(medio.currentTime*iniciar.maximo/medio.duration);
    	progreso.style.width=total+'px';
    }else{
    	progreso.style.width='0px';
    	reproducir.innerHTML='Reproducir';
    	window.clearInterval(bucle);
    }
}
// funcin que controla los eventos sobre la barra de progreso.
function mover(e){
	if(!medio.paused && !medio.ended){
		var ratonX=e.pageX-barra.offsetLeft;
		var nuevoTiempo = ratonX*medio.duration/maximo;
		medio.currentTime = nuevoTiempo;
		progreso.style.width=ratonX +'px';
	}
}

//linea que inicia nuestro codigo JS al cargar la pagina web
window.addEventListener('load',iniciar,false)