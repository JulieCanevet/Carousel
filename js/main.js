var mesImages = document.getElementsByTagName('IMG');
var next = document.getElementById('apres');
var index = 0;
var previous = document.getElementById('avant');
var indexA = (mesImages.length)-1;
var ed = setInterval(suivant, 5000);


  for (var x=0; x < mesImages.length; x++){
  	mesImages[x].style.zIndex = "10000";
  }


// Passer a l'image précédente
 function precedent () {
    	if (indexA < mesImages.length && indexA >=0) {
    		mesImages[indexA].style.zIndex--; 
    		indexA --;
    	} else if(indexA < 0) {
    		indexA = (mesImages.length) -1;
    		mesImages[indexA].style.zIndex--; 
    		indexA --;
    	}
	}

// Passer à l'image suivante
    function suivant() {

    	if ((index < mesImages.length) && (index>=0)) {
    		mesImages[index].style.zIndex++; 
    		index ++;
    	} else if (index == mesImages.length) {
    		index = 0;
    		mesImages[index].style.zIndex++; 
    		index++;
    	}
 	}