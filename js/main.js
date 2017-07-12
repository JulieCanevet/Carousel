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

var mesImages = document.getElementsByTagName('IMG');
console.log(mesImages);


  for (var x=0; x < mesImages.length; x++){
  	mesImages[x].style.zIndex = "10000";

    mesImages[x].onclick = function() {

    	this.style.zIndex--; 

    };
}




// var mesImages = document.getElementsByTagName('IMG');
// console.log(mesImages);
// var previous = document.getElementById('avant');
// var next = document.getElementById('apres');
// var index = 0;

// previous.onclick = function() {
//     	mesImages[index].style.zIndex--; 
//     	if (index < mesImages.length) {
//     		index ++;
//     	} else {index = O;}
//     }

// next.onclick = function(){
// 	mesImages[index].style.zIndex++;
// 	if (index < mesImages.length){
// 		index --;
// 	}else 


// }







//   for (var x=0; x < mesImages.length; x++){
//   	mesImages[x].style.zIndex = "10000";

    

    
// }



























