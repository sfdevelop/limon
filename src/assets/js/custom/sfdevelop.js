//Крепим меню при прокрутке
$(document).ready(function () {

	var $menu = $("#menu");

	$(window).scroll(function () {
		if ($(this).scrollTop() > 100 && $menu.hasClass("menu")) {
			$menu.addClass("fixedsf");
		} else if ($(this).scrollTop() <= 100 && $menu.hasClass("fixedsf")) {
			$menu.removeClass("fixedsf").addClass("menu");
		}
	}); //scroll 
});

// основной слайдер
$(document).ready(function () {
	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		pauseOnHover: false,
		autoplay: true,
		autoplaySpeed: 6000
	});
});
// слайдер контактов
$(document).ready(function () {
	$('.slider_contacts').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		pauseOnHover: false,
		autoplay: true,
		autoplaySpeed: 6000
	});
});
// слайдер отзывов
$(document).ready(function () {
	$('.slider_rewiev').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		pauseOnHover: false,
		autoplay: true,
		autoplaySpeed: 8000
	});
});

//боковое  меню
$(document).ready(function () {
	$("#navToggle").click(function () {
		$(this).toggleClass("active");
		$(".overlay").toggleClass("open");
		// this line ▼ prevents content scroll-behind
		$("body").toggleClass("locked");
	});
	$('.mobile_li').click(function (ev) {
		$(this).find('>ul').slideToggle();
		ev.stopPropagation();
	});
});

