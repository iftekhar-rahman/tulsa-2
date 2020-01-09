// ;(function($){
    $(document).ready(function($){

        if ($(window).width() < 960) {
            $(".phone-icon").addClass("change-color");
        }
        else {
            $(".phone-icon").removeClass("change-color");
        }

        $('#menu').slicknav();
    
        $('select').niceSelect();
    
        // perfectScrollbar
        $(".nice-select .list").perfectScrollbar();

        // Sticky Header with smooth animation
        $(window).on('scroll', function() {
            if ($(window).scrollTop() >= 300) {
                $('.mainmenu-area').addClass('fixed');
            } else {
                $('.mainmenu-area').removeClass('fixed');
            }
        })
    
        /*----------  Range Slider 1  ----------*/
        $(function () {
            $("#range-slider-1").slider({
                range: true,
                min: 0,
                max: 5000,
                step: 100,
                values: [500, 5000],
                slide: function (event, ui) {
                    // $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
                    $('.slider-price .min-price').val("$" + ui.values[0]);
                    $('.slider-price .max-price').val("$" + ui.values[1]);
                }
            });
            $('.slider-price .min-price').val("$" + $("#range-slider-1").slider("values", 0));
            $('.slider-price .max-price').val("$" + $("#range-slider-1").slider("values", 1));
        });
    
        /*----------  Range Slider 2  ----------*/
        $(function () {
            var handle = $("#custom-handle");
            $("#range-slider-2").slider({
                range: "max",
                value: 200,
                min: 150,
                max: 250,
                step: 1,
                prefix: "$",
                create: function() {
                    handle.text( $( this ).slider( "value" ) );
                },
                slide: function( event, ui ) {
                    handle.text( ui.value );
                }
            });
        });
    
        // homepage-slides
        $(".homepage-slides").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: false,
            autoplay: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
        //review-carousel
        $(".review-carousel").owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            dots: true,
            autoplay: false,
            autoHeight: true,
            // navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
        //testimonial-carousel
        $(".testimonial-wrap").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: false,
            autoplay: false,
            autoHeight: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
        // .brand-carousel-wrap
        $(".brand-carousel-wrap").owlCarousel({
            items: 6,
            loop: true,
            nav: true,
            dots: false,
            autoplay: false,
            margin: 15,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 2,
                    margin: 15,
                    nav: false
                },
                580: {
                    items: 3,
                    margin: 10,
                    nav: false
                },
                720: {
                    items: 4,
                    margin: 10,
                    nav: false
                },
                960: {
                    items: 5
                },
                1140: {
                    items: 6
                }
    
            }
        });
        // body-style-carousel
        $(".body-style-carousel").owlCarousel({
            items: 5,
            loop: true,
            nav: true,
            dots: false,
            autoplay: false,
            margin: 15,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 2,
                    margin: 15,
                    nav: false
                },
                580: {
                    items: 3,
                    margin: 3,
                    nav: false
                },
                720: {
                    items: 4,
                    margin: 3,
                    nav: false,
                },
                960: {
                    items: 5,
                },
                1140: {
                    items: 5,
                }
    
            }
        });
        // featured-carousel
        $(".featured-wrap").owlCarousel({
            items: 4,
            loop: true,
            nav: true,
            dots: false,
            autoplay: false,
            margin: 15,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                    nav: false
                },
                520: {
                    items: 2,
                    margin: 10,
                    nav: false
                },
                720: {
                    items: 3,
                    margin: 10,
                    nav: false
                },
                960: {
                    items: 3,
                    margin: 25,
                },
                1140: {
                    items: 4
                }
    
            }
        });
       

        // Scroll To Top starts
        $(window).scroll(function(){
            if ($(this).scrollTop() > 50) {
            $('.scrollTop').addClass('scrollBtn');
            } else {
            $('.scrollTop').removeClass('scrollBtn');
            }
        });

        $(".scrollTop").click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        }); // click() scroll top ENDS
    
    
    
    
        // $(".bodytype-carousel-wrap").magnificPopup({
        // 	type: 'image',
        //     gallery: {
        //         enabled: true
        //     }
        // });
    
    
    
        // slick slider
        $('.slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            vertical:true,
            fade: false,
            asNavFor: '.slider-nav-thumbnails',
        });

        $('.slider-nav-thumbnails').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            vertical:true,
            arrows: true,
            slidesToScroll: 1,
            asNavFor: '.slider',
            prevArrow: '<span class="arrow-left"><i class="fa fa-angle-up"></i></span>',
            nextArrow: '<span class="arrow-right"><i class="fa fa-angle-down"></i></span>',
            // centerMode: true,
            // centerPadding: '20px',
            focusOnSelect: true,
            verticalSwiping:true,
            // lazyLoad: 5000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 950,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });

        $('.video-btn').magnificPopup({
            type : 'iframe',
            autoPlay: true,
            iframe: {
                markup: '<div class="mfp-iframe-scaler">'+
                          '<div class="mfp-close"></div>'+
                          '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                        '</div>', 
                patterns: {
                  youtube: {
                    index: 'youtube.com/',
                    id: 'v=', 
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                  },
                  vimeo: {
                    index: 'vimeo.com/',
                    id: '/',
                    src: 'https://player.vimeo.com/video/%id%?autoplay=1'
                  },
                  gmaps: {
                    index: 'https://maps.google.',
                    src: '%id%&output=embed'
                  }
                  // you may add here more sources
                },
                srcAction: 'iframe_src',
              }
        });

        // $(".finance-btn").modalVideo();

        $('body').scrollspy({ target: '#navbar-example2', offset: 200 })
        // $('body').scrollspy({ target: '#navbar-example2' })

        $(".submenu-area").sticky({ topSpacing: 0 });

        //jQuery smooth scroll
        $('li.smooth-menu a').bind('click', function(event) {
            var $anchor = $(this);
            var headerH = '150';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInOutExpo');

            event.preventDefault();
        });
        
    
        
    
    });
// })(jQuery);




// $(window).load(function() {
//     alert("window load occurred!");
// });