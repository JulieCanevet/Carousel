//carrousel avec les images au clique

var mesImages = document.getElementsByTagName('IMG');
var next = document.getElementById('apres');
var index = 0;
var previous = document.getElementById('avant');

// Passer a l'image précédente
    previous.onclick = function () {
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
    next.onclick = function() {
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