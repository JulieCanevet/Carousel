//carrousel avec les images au clic
var mesImages = document.getElementsByTagName('IMG');
var next = document.getElementById('apres');
var index = 0;
var previous = document.getElementById('avant');

// Passer a l'image précédente
    var interval = setInterval(apres, 3000);

    previous.onclick = function (){
      clearInterval(interval);
      avant(); 
      interval = setInterval(apres, 3000);
}


    function avant() {
    index --;
   	for (var x=0; x < mesImages.length; x++){
  	mesImages[x].style.display = "none";
  }
    	if ((index < mesImages.length) && (index >=0)){
    		mesImages[index].style.display="block";
    	} else if(index < 0){
    		index = (mesImages.length) -1;
    		mesImages[index].style.display = "block";
    	}
	}

// Passer à l'image suivante
    next.onclick = function (){
      clearInterval(interval);
      apres();
      interval = setInterval(apres, 3000);

    }

    function apres() {
   	index++;
  	for (var x=0; x < mesImages.length; x++){
  	mesImages[x].style.display = "none";
  }
    	if ((index < mesImages.length) && (index>=0)) {
    		mesImages[index].style.display = "block"; 
    	} else if (index == mesImages.length) {
    		index = 0;
    		mesImages[index].style.display = "block";
    	}
 	}