let button = document.getElementById("icono");

let nav = document.getElementById("animacion")

let contador = 0;

button.addEventListener("click", function(){
	if(contador === 0){
		nav.className = ("nav two");
		contador = 1;
	}else {
		nav.className = ("nav animated");
		contador = 0;
	}
})