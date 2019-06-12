// COUNTER

var statics = $('#statics').offset();

const sm = window.matchMedia( "(max-width: 992px)" );
const md = window.matchMedia( "(min-width: 1000px)" );
// if (mq.matches) {
	$(window).scroll(function(){
		if ($(window).scrollTop() >= statics.top - 120) {
			$('.count').each(function() {
			var $this = $(this),
						countTo = $this.attr('data-count');
				$({ countNum: $this.text()}).animate({
					countNum: countTo
				},
				{
					duration: 1000,
					easing:'swing',
					step: function() {
						$this.text(Math.floor(this.countNum));
					},
					complete: function() {
						$this.text(this.countNum);
						//alert('finished');
					}
				});
		});
	}
})
// }

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


// SECTIONS VARIABLES

	var briefSection = $('#brief').offset();
	var sponsorsSection = $('#sponsors').offset();
	var cicloSection = $('#ciclo').offset();
	var partnersSection = $('#partners').offset();
	var certificadosSection = $('#certificados').offset();


// SHOW ELEMENTS ANIMATE

	window.addEventListener('scroll', function(){
		if ($(window).scrollTop() + 100 >= briefSection.top ) {
			$('#briefParagraph').addClass('element_hide-show');
			$('#briefLine').addClass('element_hide-show');
		} else {
			$('#briefParagraph').removeClass('element_hide-show');
			$('#briefLine').removeClass('element_hide-show');
		}

		if ($(window).scrollTop() + 250 >= sponsorsSection.top ) {
			$('#sponsorsFlex').addClass('element_hide-show');
		} else {
			$('#sponsorsFlex').removeClass('element_hide-show');
		}

		if ($(window).scrollTop() + 300 >= cicloSection.top ) {
			$('#cicloGraphic').addClass('element_hide-show');
			$('#cicloIcons').addClass('element_hide-show');
		} else {
			$('#cicloGraphic').removeClass('element_hide-show');
			$('#cicloIcons').removeClass('element_hide-show');
		}

		if ($(window).scrollTop() + 200 >= partnersSection.top ) {
			$('#partnersFlex').addClass('element_hide-show');
		} else {
			$('#partnersFlex').removeClass('element_hide-show');
		}

		if ($(window).scrollTop() + 200 >= certificadosSection.top ) {
			$('#certificadosFlex').addClass('element_hide-show');
		} else {
			$('#certificadosFlex').removeClass('element_hide-show');
		}
	})

	if (md.matches) {
		$(window).scroll(function(){

			window.addEventListener('scroll', function(){
				if ($(window).scrollTop() + 250 >= briefSection.top ) {
					$('#briefParagraph').addClass('element_hide-show');
					$('#briefLine').addClass('element_hide-show');
				} else {
					$('#briefParagraph').removeClass('element_hide-show');
					$('#briefLine').removeClass('element_hide-show');
				}

				if ($(window).scrollTop() + 350 >= sponsorsSection.top ) {
					$('#sponsorsFlex').addClass('element_hide-show');
				} else {
					$('#sponsorsFlex').removeClass('element_hide-show');
				}

				if ($(window).scrollTop() + 350 >= cicloSection.top ) {
					$('#cicloGraphic').addClass('element_hide-show');
					$('#cicloIcons').addClass('element_hide-show');
				} else {
					$('#cicloGraphic').removeClass('element_hide-show');
					$('#cicloIcons').removeClass('element_hide-show');
				}

				if ($(window).scrollTop() + 400 >= partnersSection.top ) {
					$('#partnersFlex').addClass('element_hide-show');
				} else {
					$('#partnersFlex').removeClass('element_hide-show');
				}

				if ($(window).scrollTop() + 200 >= certificadosSection.top ) {
					$('#certificadosFlex').addClass('element_hide-show');
				} else {
					$('#certificadosFlex').removeClass('element_hide-show');
				}
			})
		})
	}

// MENU COLOR CHANGE

	// if (md.matches) {
	// 	$(window).scroll(function() {
	//
	// 		if($(window).scrollTop() + 200 >= sectionOne.top) {
	// 			$('.menu__full-list-link').addClass('menu__full-list-link-grey');
	// 			$('.menu__full-list-img-white').css('display', 'none');
	// 			$('.menu__full-list-img-black').css('display', 'inline');
	// 			$('.menu__full-list').children('li:nth-child(3)').children('a').children('h4').css('font-weight', '400');
	// 			$('.menu__full-list').children('li:nth-child(4)').children('a').children('h4').addClass('menu__full-list-link-select-black');
	// 			$('.menu__full-list').children('li:nth-child(5)').children('a').children('h4').css('font-weight', '400');
	// 			$('.ciclo__section').addClass('element_hide-show');
	// 		} else {
	// 			$('.menu__full-list-link').removeClass('menu__full-list-link-grey');
	// 			$('.menu__full-list-img-white').css('display', 'inline');
	// 			$('.menu__full-list-img-black').css('display', 'none');
	// 			$('.menu__full-list').children('li:nth-child(3)').children('a').children('h4').css('font-weight', '600');
	// 			$('.menu__full-list').children('li:nth-child(4)').children('a').children('h4').removeClass('menu__full-list-link-select-black');
	// 		}
	//
	// 		if ( $(window).scrollTop() + 200 >= sectionTwo.top ) {
	// 			$('.menu__full-list-link').removeClass('menu__full-list-link-grey');
	// 			$('.menu__full-list-img-white').css('display', 'inline');
	// 			$('.menu__full-list-img-black').css('display', 'none');
	// 			$('.menu__full-list').children('li:nth-child(4)').children('a').children('h4').removeClass('menu__full-list-link-select-black');
	// 			$('.menu__full-list').children('li:nth-child(5)').children('a').children('h4').css('font-weight', '600');
	// 			$('.menu__full-list').children('li:nth-child(6)').children('a').children('h4').removeClass('menu__full-list-link-select-black');
	// 			$('.socios').addClass('element_hide-show');
	// 			$('.certificados').addClass('element_hide-show');
	// 		}
	//
	// 		if ( $(window).scrollTop() >= sectionThree.top ) {
	// 			$('.menu__full-list-link').addClass('menu__full-list-link-grey');
	// 			$('.menu__full-list-img-white').css('display', 'none');
	// 			$('.menu__full-list-img-black').css('display', 'inline');
	// 			$('.menu__full-list').children('li:nth-child(5)').children('a').children('h4').css('font-weight', '400');
	// 			$('.menu__full-list').children('li:nth-child(6)').children('a').children('h4').addClass('menu__full-list-link-select-black');
	// 			$('.menu__full-list').children('li:nth-child(7)').children('a').children('h4').removeClass('menu__full-list-link-select-black');
	// 		}
	//
	// 		if ( $(window).scrollTop() + 200 >= sectionFour.top ) {
	// 			$('.menu__full-list-link').addClass('menu__full-list-link-grey');
	// 			$('.menu__full-list-img-white').css('display', 'none');
	// 			$('.menu__full-list-img-black').css('display', 'inline');
	// 			$('.menu__full-list').children('li:nth-child(6)').children('a').children('h4').removeClass('menu__full-list-link-select-black');
	// 			$('.menu__full-list').children('li:nth-child(7)').children('a').children('h4').addClass('menu__full-list-link-select-black');
	// 			$('.element_hide-tres').addClass('element_hide-show');
	// 		}
	//
	// 	})
	// }


// CONTACT BUTTON

	$('.contact_button').on('click', function() {
		$('.contact_block-top').toggleClass('contact_block-show');
		$('.contact_block-bottom').toggleClass('contact_block-show');
	})
