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

//слайдшоу в карточке
$(document).ready(function () {
    $('.slider_vacansie__box').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider_vacansie__nav'
    });
    $('.slider_vacansie__nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider_vacansie__box',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false
            }
        }]
    });
});
$('.input-group.date').datepicker({
    language: "ru",
    todayHighlight: true,
});


