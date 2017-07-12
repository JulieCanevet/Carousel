	// var pos = 0;
 // 		function myMove(){
 // 			 pos -= 600;
 //  	 document.getElementById('slider').style.left = pos + "px";
 //  }
	


//  function myMove(){
//  	var pos = 0;
//  	var elem = document.getElementById("slider");
//  	var id = setInterval(slide, 1);

//  	function slide (){
//  	 	if (pos == -600){
//  			clearInterval(id);
//  	 }	
// 		 else{
//  			pos --;
//  			elem.style.left = pos + "px";
//   }
// }
// }


// carrousel avec les images au clique

// var mesImages = document.getElementsByTagName('IMG');
// console.log(mesImages);


//   for (var x=0; x < mesImages.length; x++){
//   	mesImages[x].style.zIndex = "10000";

//     mesImages[x].onclick = function() {

//     	this.style.zIndex--; 

//     };
// }




// var mesImages = document.getElementsByTagName('IMG');
// console.log(mesImages);
// var previous = document.getElementById('avant');
// var next = document.getElementById('apres');
// var index = 0;

// previous.onclick = function() {
    	
//     	mesImages[index].style.zIndex--; 
    	
//     	console.log(mesImages[index]);
//     	console.log (index);

//     	if (index < mesImages.length) {
//     		index ++;
//     	} else if (index == mesImages.length) {index = O;} 
//     }

// next.onclick = function(){
// 	mesImages[index].style.zIndex++;
// 	if (index < 0){
// 		index --;
// 		} else {index = mesImages.length;}

// }







//   for (var x=0; x < mesImages.length; x++){
//   	mesImages[x].style.zIndex = "10000";

    

    
// }


// carrousel avec les images au clique

var mesImages = document.getElementsByTagName('IMG');
console.log(mesImages);

var next = document.getElementById('apres');
console.log (next);

var index = 0;
console.log(index);

var previous = document.getElementById('avant');

var indexA = (mesImages.length)-1;
console.log(indexA);


  for (var x=0; x < mesImages.length; x++){
  	mesImages[x].style.zIndex = "10000";
  	console.log(mesImages[x]);
  }



    previous.onclick = function() {
    	if (indexA < mesImages.length && indexA >=0)
    	{
  			console.log(indexA);
    		mesImages[indexA].style.zIndex--; 
    		indexA --;
    		console.log(mesImages[indexA]);

    	}
    	else if(indexA < 0)
    	{
    		indexA = (mesImages.length) -1;
    		console.log(mesImages[indexA]);
    		mesImages[indexA].style.zIndex--; 
    		indexA --;
    	}
 }



    next.onclick = function() {

    	if ((index < mesImages.length) && (index>=0))
    	{
  			console.log(index);
    		mesImages[index].style.zIndex++; 
    		console.log(mesImages[index]);
    		index ++;

    	}
    	else if(index == mesImages.length)
    	{
    		index = 0;
    		console.log(index);
    		console.log(mesImages[index]);
    		mesImages[index].style.zIndex++; 
    		index++;


    	}
 }
























