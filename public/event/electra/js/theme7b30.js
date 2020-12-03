"use strict";

var triggerscroll = true;

// Prealoder
function prealoader() {
    if ($('#preloader_1').length) {
        $('#preloader_1').delay(500).fadeOut('slow'); // will first fade out the loading animation
        $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow': 'visible'});
        $('head').delay(1000).append('<style>.regbut>a:before{animation:voavoa 0.08s 16 linear alternate; animation-delay: 1s}.regbut>a:after{animation:voavoa2 0.08s 16 linear alternate; animation-delay: 1s}</style>');
        $("#esumlogo").delay(1000).addClass("esumlogo");
        $("#esumlogo").css("opacity", "1");
    }
}


// placeholder remove
function removePlaceholder() {
    if ($("input,textarea").length) {
        $("input,textarea").each(
            function () {
                $(this).data('holder', $(this).attr('placeholder'));
                $(this).on('focusin', function () {
                    $(this).attr('placeholder', '');
                });
                $(this).on('focusout', function () {
                    $(this).attr('placeholder', $(this).data('holder'));
                });

            });
    }
}


// Scroll to top
function scrollToTop() {
    if ($('.scroll-top').length) {

        //Check to see if the window is top if not then display button
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 200) {
                $('.scroll-top').fadeIn();
            } else {
                $('.scroll-top').fadeOut();
            }
        });

        //Click event to scroll to top
        $('.scroll-top').on('click', function () {
            $('html, body').animate({scrollTop: 0}, 1500);
            return false;
        });
    }
}


// Theme-banner Video slider
function BannerVideoSlider() {
    var banner = $("#main-banner-slider.video-slider");
    if (banner.length) {
        banner.revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            loops: false,
            delay: 10000,
            navigation: {
                arrows: {
                    style: "hermes",
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: false,
                    tmp: '<div class="tp-arr-allwrapper"> <div class="tp-arr-imgholder"></div>  <div class="tp-arr-titleholder">{{title}}</div> </div>',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: false,
                }

            },
            responsiveLevels: [2220, 1183, 975, 751],
            gridwidth: [1170, 970, 770, 350],
            gridheight: [850, 850, 850, 700],
            shadow: 0,
            spinner: "off",
            autoHeight: "off",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                disableFocusListener: false,
            }
        });
    }
    ;
}


//Add OnepageNav / Sidebar
function onePageFixedNav() {
    if ($('body').length) {
        // Add scrollspy to
        $('body').scrollspy({target: ".theme-main-header", offset: 70});

        // Add smooth scrolling on all links inside the one-page-menu
        $(".one-page-menu li a").on('click', function (event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 1000, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            }  // End if
        });
    }
}


// Mixitup gallery
function mixitupGallery() {
    var mixItem = $(".project-gallery");
    if (mixItem.length) {
        mixItem.mixItUp()
    }
    mixItem.click(function () {
        (this).sort('s:asc')
            .then(function (state) {
                console.log(state.activeSort.sortString); // 'price:desc'
            });
    });
}

// Progress Bar
function bootstrapProgress() {
    var smartskill = $('.skills');
    if (smartskill.length) {
        smartskill.skill();
    }
}

//event mobile animation
// function triggerevent() {
//     $.fn.isInViewport = function() {
//         var elementTop = $(this).offset().top;
//         var elementBottom = elementTop + 0.005*($(this).outerHeight());
//
//         var viewportTop = $(window).scrollTop();
//         var viewportBottom = viewportTop + $(window).height();
//
//         return elementBottom > viewportTop && elementTop < viewportBottom;
//     };
//
//     $(window).on('resize scroll', function() {
//         $('.single-service-content').each(function() {
//             if ($(this).isInViewport()) {
//                 // $( this ).children('')
//                 var current =this;
//                 setTimeout(function(){
//                     $(current).css("padding","118px 23px 65px 23px");
//                 },1000);
//
//
//             }
//         });
//     });
// }


// Client SLider
function clientSlider() {
    var cSldier = $(".client-slider");
    if (cSldier.length) {
        cSldier.owlCarousel({
            animateOut: 'slideOutLeft',
            loop: true,
            nav: false,
            navText: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 7000,
            autoplaySpeed: 5500,
            lazyLoad: true,
            items: 1,
        })
    }
}


// Partner Logo Footer
function partnersLogo() {
    var logoSlide = $("#partner_logo");
    if (logoSlide.length) {
        logoSlide.owlCarousel({
            loop: true,
            margin: -1,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplaySpeed: 1000,
            lazyLoad: true,
            singleItem: true,
            responsive: {
                0: {
                    items: 1
                },
                550: {
                    items: 2
                },
                751: {
                    items: 3
                },
                1001: {
                    items: 5
                }
            }
        })
    }
}


//Contact Form Validation
function contactFormValidation() {
    var activeForm = $('.form-validation');
    if (activeForm.length) {
        activeForm.validate({ // initialize the plugin
            rules: {
                Fname: {
                    required: true
                },
                Lname: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                sub: {
                    required: true
                },
                message: {
                    required: true
                }
            },
            submitHandler: function (form) {
                $(form).ajaxSubmit({
                    success: function () {
                        $('.form-validation :input').attr('disabled', 'disabled');
                        activeForm.fadeTo("slow", 1, function () {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor', 'default');
                            $('#alert-success').fadeIn();
                        });
                    },
                    error: function () {
                        activeForm.fadeTo("slow", 1, function () {
                            $('#alert-error').fadeIn();
                        });
                    }
                });
            }
        });
    }
}

// Close suddess Alret
function closeSuccessAlert() {
    var closeButton = $(".closeAlert");
    if (closeButton.length) {
        closeButton.on('click', function () {
            $(".alert-wrapper").fadeOut();
        });
        closeButton.on('click', function () {
            $(".alert-wrapper").fadeOut();
        })
    }
}


// Sticky header
function stickyHeader() {
    if ($('.theme-main-header').length) {
        var sticky = $('.theme-main-header'),
            scroll = $(window).scrollTop();
        if (scroll > 0) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    }
}

function counter() {
    if (triggerscroll) {
        triggerscroll = false;
        $('.count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }
}

// Calendar
function cladendar() {
    var calender = $('#blog-calendar');
    if (calender.length) {
        calender.monthly();
    }
}

// Tooggle Home page menu click Function
function subMenuExpend() {
    if ($(".theme-main-header").length) {
        $('.theme-main-header li.dropdown-holder').append(function () {
            return '<i class="fa fa-angle-down"></i>';
        });
        $('.theme-main-header li.dropdown-holder .fa').on('click', function () {
            $(this).parent('li').children('ul').slideToggle();
        });
    }
}

//smooth animate
(function ($) {

    var contentWayPoint = function () {
        var i = 0;
        $('.ftco-animate').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function () {

                    $('body .ftco-animate.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn ftco-animated');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft ftco-animated');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight ftco-animated');
                            } else {
                                el.addClass('fadeInUp ftco-animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 50, 'easeInOutExpo');
                    });

                }, 100);

            }

        }, {offset: '95%'});
    };
    contentWayPoint();
})(jQuery);


// DOM ready function
jQuery(document).on('ready', function () {
    (function ($) {
        AOS.init({
            anchorPlacement: 'bottom',
            delay: 100,
            duration: 500,
            easing: 'ease'
        });
        removePlaceholder();
        scrollToTop();
        BannerVideoSlider();
        onePageFixedNav();
        mixitupGallery();
        bootstrapProgress();
        clientSlider();
        partnersLogo();
        contactFormValidation();
        closeSuccessAlert();
        cladendar();
        subMenuExpend();
        if ($(window).width() < 550) {
            $('.navbar-collapse li a').click(function () {
                $(".navbar-toggle").click();
            });
            $(document.body).click(function () {
                if (!($(".navbar-toggle").hasClass("collapsed"))) {
                    $(".navbar-toggle").addClass("collapsed");
                    $(".navbar-toggle").click();
                }
            });
        }
    })(jQuery);
});


// Window scroll function
jQuery(window).on('scroll', function () {
    (function ($) {
        stickyHeader();
        counter();

    })(jQuery);
});


// Window load function
jQuery(window).on('load', function () {
    (function ($) {
        prealoader();
    })(jQuery);
});
