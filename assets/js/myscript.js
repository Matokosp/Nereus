// MENU

	// Sticky

	window.onscroll = function() {myFunction()};

	var navbar = document.getElementById("navbar");
	var sticky = navbar.offsetTop;

	function myFunction() {
	  if (window.pageYOffset >= sticky) {
	    navbar.classList.add("sticky")
	  } else {
	    navbar.classList.remove("sticky");
	  }
	}


// Menu Slide

	var menuHideShow = $('.nav-menu-res').children(".menu-hide").hasClass('show');

	function desplazar (){
		$('.menu-hide').toggleClass('show');
		$('#hamburger').toggleClass('hamburguer-slide');
	}
	$('#hamburger').on('click', function(e){		
		desplazar();
		e.stopPropagation();
		menuHideShow = $('.nav-menu-res').children(".menu-hide").hasClass('show');
		$('.menuicon').addClass('menuicon--black');
		console.log(menuHideShow)
	})
   
	window.addEventListener('click', function(e){
		if (menuHideShow = true && e.target.className != 'menu-hide show') {
			$('.menu-hide').removeClass('show');
			$('#hamburger').removeClass('hamburguer-slide');
			$('.menuicon').removeClass('menuicon--black');
			e.stopPropagation();		
		}
		console.log(e.target)
	})


// MENU COLOR CHANGE
	var sectionZero = $('.brief__section').offset();
	var sectionOne = $('.brief__section-bottom').offset();
	var sectionTwo = $('.socios').offset();
	var sectionThree = $('.marcas__section-bottom').offset();
	var sectionFour = $('#bottom').offset();

	const sm = window.matchMedia( "(max-width: 992px)" );
	const md = window.matchMedia( "(min-width: 992px)" );

	if (sm.matches) {
		$(window).scroll(function(){

			if ($(window).scrollTop() >= sectionOne.top ) {
				$('.menuicon').addClass('menuicon--black');
			} else {
				$('.menuicon').removeClass('menuicon--black');
			}

			if ($(window).scrollTop() >= sectionTwo.top) {
				$('.menuicon').removeClass('menuicon--black');
			}

			if ($(window).scrollTop() >= sectionThree.top) {
				$('.menuicon').addClass('menuicon--black');
			}

			// if ($(window).scrollTop() >= section4.top) {
			// 	$('.menuicon').removeClass('menuicon--black');
			// }
		})
	}

	if (md.matches) {
		$(window).scroll(function() {

			if ($(window).scrollTop() + 300 >= sectionZero.top ) {
				$('.element_hide-uno').addClass('element_hide-show');
				$('.element_hide-dos').addClass('element_hide-show');
			}

			if($(window).scrollTop() + 200 >= sectionOne.top) {
				$('.menu__full-list-link').addClass('menu__full-list-link-grey');
				$('.menu__full-list-img-white').css('display', 'none');
				$('.menu__full-list-img-black').css('display', 'inline');
				$('.menu__full-list').children('li:nth-child(3)').children('a').children('h4').css('font-weight', '400');
				$('.menu__full-list').children('li:nth-child(4)').children('a').children('h4').addClass('menu__full-list-link-select-black');
				$('.menu__full-list').children('li:nth-child(5)').children('a').children('h4').css('font-weight', '400');
				$('.ciclo__section').addClass('element_hide-show');
			} else {
				$('.menu__full-list-link').removeClass('menu__full-list-link-grey');
				$('.menu__full-list-img-white').css('display', 'inline');
				$('.menu__full-list-img-black').css('display', 'none');
				$('.menu__full-list').children('li:nth-child(3)').children('a').children('h4').css('font-weight', '600');
				$('.menu__full-list').children('li:nth-child(4)').children('a').children('h4').removeClass('menu__full-list-link-select-black');
			}

			if ( $(window).scrollTop() + 200 >= sectionTwo.top ) {
				$('.menu__full-list-link').removeClass('menu__full-list-link-grey');
				$('.menu__full-list-img-white').css('display', 'inline');
				$('.menu__full-list-img-black').css('display', 'none');
				$('.menu__full-list').children('li:nth-child(4)').children('a').children('h4').removeClass('menu__full-list-link-select-black');
				$('.menu__full-list').children('li:nth-child(5)').children('a').children('h4').css('font-weight', '600');
				$('.menu__full-list').children('li:nth-child(6)').children('a').children('h4').removeClass('menu__full-list-link-select-black');
				$('.socios').addClass('element_hide-show');
				$('.certificados').addClass('element_hide-show');
			}

			if ( $(window).scrollTop() >= sectionThree.top ) {
				$('.menu__full-list-link').addClass('menu__full-list-link-grey');
				$('.menu__full-list-img-white').css('display', 'none');
				$('.menu__full-list-img-black').css('display', 'inline');
				$('.menu__full-list').children('li:nth-child(5)').children('a').children('h4').css('font-weight', '400');
				$('.menu__full-list').children('li:nth-child(6)').children('a').children('h4').addClass('menu__full-list-link-select-black');
				$('.menu__full-list').children('li:nth-child(7)').children('a').children('h4').removeClass('menu__full-list-link-select-black');
			}

			if ( $(window).scrollTop() + 200 >= sectionFour.top ) {
				$('.menu__full-list-link').addClass('menu__full-list-link-grey');
				$('.menu__full-list-img-white').css('display', 'none');
				$('.menu__full-list-img-black').css('display', 'inline');
				$('.menu__full-list').children('li:nth-child(6)').children('a').children('h4').removeClass('menu__full-list-link-select-black');
				$('.menu__full-list').children('li:nth-child(7)').children('a').children('h4').addClass('menu__full-list-link-select-black');
				$('.element_hide-tres').addClass('element_hide-show');
			}

		})
	}


// CONTACT BUTTON

	$('.contact_button').on('click', function() {
		$('.contact_block-top').toggleClass('contact_block-show');
		$('.contact_block-bottom').toggleClass('contact_block-show');
	})


