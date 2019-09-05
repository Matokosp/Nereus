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
		$('#menuIconFirst').toggleClass('menuicon_first');
		$('#menuIconSecond').toggleClass('menuicon_second');
		$('#menuIconThird').toggleClass('menuicon_third');
		$('.menuicon').toggleClass('menuicon_white');
	}
	$('#hamburger').on('click', function(e){
		desplazar();
		e.stopPropagation();
		menuHideShow = $('.nav-menu-res').children(".menu-hide").hasClass('show');
		console.log(menuHideShow)
	})

	window.addEventListener('click', function(e){
		if (menuHideShow = true && e.target.className != 'menu-hide show') {
			$('.menu-hide').removeClass('show');
			$('#hamburger').removeClass('hamburguer-slide');
			$('#menuIconFirst').removeClass('menuicon_first');
			$('#menuIconSecond').removeClass('menuicon_second');
			$('#menuIconThird').removeClass('menuicon_third');
			$('.menuicon').removeClass('menuicon_white');
			e.stopPropagation();
		}
		console.log(e.target)
	})


// SECTIONS VARIABLES

	var briefSection = $('#brief').offset();
	var sponsorsSection = $('#sponsors').offset();
	var staticsSection = $('#statics').offset();
	var cicloSection = $('#ciclo').offset();
	var medidorAguaSection = $('#medidorAgua').offset();
	var medidorClimatizacionSection = $('#medidorClimatizacion').offset();
	var medidorIndustrialSection = $('#medidorIndustrial').offset();
	var partnersSection = $('#partners').offset();
	var certificadosSection = $('#certificados').offset();
	var contactoSection = $('#contacto').offset();


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

				if ($(window).scrollTop()  >= certificadosSection.top ) {
					$('#certificadosFlex').addClass('element_hide-show');
				} else {
					$('#certificadosFlex').removeClass('element_hide-show');
				}
			})
		})
	}

// MENU COLOR CHANGE

		var menuIconFirst = $('#menuIconFirst');
		var menuIconSecond = $('#menuIconSecond');
		var menuIconThird = $('#menuIconThird');

		$(window).scroll(function() {

			if($(window).scrollTop() >= sponsorsSection.top) {
				$(menuIconFirst).addClass('menuicon--black');
				$(menuIconSecond).addClass('menuicon--black');
				$(menuIconThird).addClass('menuicon--black');
			} else {
				$(menuIconFirst).removeClass('menuicon--black');
				$(menuIconSecond).removeClass('menuicon--black');
				$(menuIconThird).removeClass('menuicon--black');
			}

			if ($(window).scrollTop() + 100 >= staticsSection.top ) {
				$(menuIconFirst).removeClass('menuicon--black');
				$(menuIconSecond).removeClass('menuicon--black');
				$(menuIconThird).removeClass('menuicon--black');
			}

			if ($(window).scrollTop() + 100 >= cicloSection.top ) {
				$(menuIconFirst).addClass('menuicon--black');
				$(menuIconSecond).addClass('menuicon--black');
				$(menuIconThird).addClass('menuicon--black');
			}

			if ($(window).scrollTop() + 100 >= certificadosSection.top ) {
				$(menuIconFirst).removeClass('menuicon--black');
				$(menuIconSecond).removeClass('menuicon--black');
				$(menuIconThird).removeClass('menuicon--black');
			}
		})


// CONTACT BUTTON

	$('.contact_button').on('click', function() {
		$('.contact_block-top').toggleClass('contact_block-show');
		$('.contact_block-bottom').toggleClass('contact_block-show');
	})


	// WINDOW SCROLL NEXT SECTION CLICK

	$('a[href*="#"]').on('click', function(e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    500,
    'linear'
  )
})
