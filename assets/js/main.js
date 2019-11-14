(function ($) {
    "use strict";

    //    Preloader  ======================

    var preloader = $('#preloader');
    $(window).on('load', function () {
        preloader.fadeOut('slow', function () {
            $(this).remove();
        });
    });


    // scrollTop=================
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('.header-area').addClass("sticky");
        } else {
            $('.header-area').removeClass("sticky");
        }
    });


    // SmartMenus init ===================
    $(function () {
        $('#main-menu').smartmenus({
            mainMenuSubOffsetX: -1,
            mainMenuSubOffsetY: 4,
            subMenusSubOffsetX: 6,
            subMenusSubOffsetY: -6
        });
    });

    // SmartMenus mobile menu toggle button
    $(function () {
        var $mainMenuState = $('#main-menu-state');
        if ($mainMenuState.length) {
            // animate mobile menu
            $mainMenuState.change(function (e) {
                var $menu = $('#main-menu');
                if (this.checked) {
                    $menu.hide().slideDown(250, function () {
                        $menu.css('display', '');
                    });
                } else {
                    $menu.show().slideUp(250, function () {
                        $menu.css('display', '');
                    });
                }
            });
            // hide mobile menu beforeunload
            $(window).bind('beforeunload unload', function () {
                if ($mainMenuState[0].checked) {
                    $mainMenuState[0].click();
                }
            });
        }
    });



    //      Main Slider Area   ==============

    $('.slider').owlCarousel({
        smartSpeed: 1500,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        items: 1,
        autoplay: false,
        nav: true,
        dots: false,
        animateOut: "slideOutDown",
        animateIn: "slideInDown",
        navText: ['<span class="fas fa-chevron-left"></span>', '<span class="fas fa-chevron-right"></span>'],
    });

    $(".slider").on("translate.owl.carousel", function () {
        $(".slider .slider-content h2").removeClass("animated fadeInRight").css("opacity", "0");
        $(".slider .slider-content p").removeClass("animated fadeInLeft").css("opacity", "0");
        $(".slider .slider-content .slider-btn .theme-btn.btn-left ").removeClass("animated fadeInLeft").css("opacity", "0");
        $(".slider .slider-content .slider-btn .theme-btn.btn-right ").removeClass("animated fadeInRight").css("opacity", "0");
    });

    $(".slider").on("translated.owl.carousel", function () {
        $(".slider .slider-content h2").addClass("animated fadeInRight").css("opacity", "0");
        $(".slider .slider-content p").addClass("animated fadeInLeft").css("opacity", "0");
        $(".slider .slider-content .slider-btn .theme-btn.btn-left").addClass("animated fadeInLeft").css("opacity", "0");
        $(".slider .slider-content .slider-btn .theme-btn.btn-right").addClass("animated fadeInRight").css("opacity", "0");
    });


    //============= Photo gallery     

    $('.clients-active').owlCarousel({
        smartSpeed: 1500,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        nav: true,
        navText: ['<i class="fas fa-chevron-right"></i>', '<i class="fas fa-chevron-left"></i>'],
        dots: false,
        items: 1,
        autoplay: true,
    });


    //    Blog-page Slider  ==========*/


    $('.photo-gallery').owlCarousel({
        smartSpeed: 1500,
        loop: true,
        autoplay: false,
        dots: false,
        nav: true,
        margin: 15,
        navText: ['<i class="fas fa-chevron-right"></i>', '<i class="fas fa-chevron-left"></i>'],
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });


    // ======== all-client  slider

    $('.service-active').owlCarousel({
        loop: true,
        autoplay: false,
        dots: true,
        nav: false,
        margin: 0,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });


    //=======  reservation-slider


    //=======  reservation-slider


    //   WOW js  ==================================*/

    new WOW().init();

})(jQuery);
