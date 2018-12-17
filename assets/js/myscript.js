// var checker = true;
// var boton1 = document.getElementById("menuicon");
// var boton2 = document.getElementById("hamburger");



// function desplazar(){
//     targetLeft = checker ? "158px" : "20px";
//     targetRight = checker ? "130px" : "20px";
//     targetMiddle = checker ? "148px" : "20px";
//     $("#hamburger").animate({left: targetLeft},400);   
//     $('.menu-hide').toggleClass('show');
//     checker ? (checker = false) : (checker = true);
// }



//   $(".nav-menu-res").click(function () {
//   $(document).ready(function(){
//   desplazar();
// });
// });



//     $(document).ready(function(){
//     window.addEventListener('click', function(e){
//       var menu= document.getElementsByClassName("menu-hide show");
//    if (e.target.className != "menu-hide show" && checker===false && e.target!= boton1 && e.target != boton2) {
//         desplazar(); 

//      }

//     })
// })
	
	var menuHideShow = $('.nav-menu-res').children(".menu-hide").hasClass('show');

	function desplazar (){
		$('.menu-hide').toggleClass('show');
		$('#hamburger').toggleClass('hamburguer-slide');
		$('#menuicon-middle').toggleClass('menuicon-pequeno');
	}

	function esconder (e){		
		$('.menu-hide').removeClass('show');
		$('#hamburger').removeClass('hamburguer-slide');
		$('#menuicon-middle').removeClass('menuicon-pequeno');
	}

	$('#hamburger').on('click', function(e){		
		desplazar();
		e.stopPropagation();
		menuHideShow = $('.nav-menu-res').children(".menu-hide").hasClass('show');
		console.log(menuHideShow)
	})
	
   
	window.addEventListener('click', function(e){
		// var menuHide = $('.menu-hide');
		if (menuHideShow === true && e.target.className != 'menu-hide show') {
			desplazar();			
		}		
		console.log(e.target)
	})

	

