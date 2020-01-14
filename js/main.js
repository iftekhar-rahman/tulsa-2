;(function($){
    $(document).ready(function($){      

        /*-----------------------Home Page JS------------------------------*/ 
        // phone icon on mobile device
        if ($(window).width() < 960) {
            $(".phone-icon").addClass("change-color");
        }
        else {
            $(".phone-icon").removeClass("change-color");
        }
        // responsive menu
        $('#menu').slicknav();
        
        // nice select
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

        /*----------  Range Slider 3  ----------*/
        $(function () {
            $("#range-slider-3").slider({
                range: true,
                min: 0,
                max: 500,
                step: 1,
                values: [80, 320],
                slide: function (event, ui) {
                    // $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
                    $('.slider-price .min-price').val("$" + ui.values[0]);
                    $('.slider-price .max-price').val("$" + ui.values[1]);
                }
            });
            $('.slider-price .min-price').val("$" + $("#range-slider-3").slider("values", 0));
            $('.slider-price .max-price').val("$" + $("#range-slider-3").slider("values", 1));
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
    

        /*--------------------CarDetails Page JS------------------*/
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
        // slick slider
        $('.slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            vertical:true,
            fade: false,
            asNavFor: '.slider-nav-thumbnails',
            responsive: [
                {
                    breakpoint: 750,
                    settings: {
                        vertical:false,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        vertical:false,
                    }
                }
            ]
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
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 4,
                        vertical:false,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        vertical:false,
                    }
                }
            ]
        });
        // magnificPopup for video
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
        //jQuery smooth scroll
        $('.smooth-menu a').bind('click', function(event) {
            var $anchor = $(this);
            var headerH = '150';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInOutExpo');
            
            event.preventDefault();
        });
        // submenu-area
        $(".submenu-area").sticky({ topSpacing: 0 });


        /*--------------------Listing Page JS-----------------------*/ 
        // refine search box js
        $(".refine-text").on("click", function(){
            $(".listing-content-wrapper, .sidebar-wrapper, .refine-text, .listing-content-wrap ul").addClass("show-searchbox");
        });
        $(".refine-close").on("click", function(){
            $(".listing-content-wrapper, .sidebar-wrapper, .refine-text, .listing-content-wrap ul").removeClass("show-searchbox");
        });

        // jQuery for clicking effect on sidebar single item
        $('.toggle-btn').click(function() {
            var $pane = $(this).closest('.single-sidebar-item').find('.pane');
            if ($pane.hasClass('inactive')) {
                $('.single-sidebar-item .pane').addClass('inactive');
                $pane.removeClass('inactive');
            } else {
                $pane.addClass('inactive');
            }
        });

        // jquery code to highlight the search bar header
        $(".search-header h5").on('click', function(){
            $(".search-header h5").removeClass("active");
            $(this).toggleClass("active");
        });
        $(".sidebar-close, .refine-close, .single-dropdown-item .nice-select").on('click', function(){
            $(".search-header h5").removeClass("active");
        });
    
        // jQuery to close sidebar content
        $(".sidebar-close, .single-dropdown-item.age, .single-dropdown-item.years-dropdown, .refine-close, .single-color").on("click", function(){
            $(".search-body.pane").addClass("inactive");
        });

        $(".refine-text").on("click", function(){
            $(".refine-search-box").css("left", "0px");
        });
        $(".refine-close").on("click", function(){
            $(".refine-search-box").css("left", "-300px");
        });
        
        // toogle button
        $(".btn-grp").on('click', function(){
            $(".btn-grp").removeClass("active_btn");
            $(this).addClass("active_btn");
        });

        $(".refine-text").on("click", function(){
            $(".footer-area").removeClass("footer-margin");
        });
        $(".refine-close").on("click", function(){
            $(".footer-area").addClass("footer-margin");
        });


       
        
    
        
    
    });
})(jQuery);




// $(window).load(function() {
//     alert("window load occurred!");
// });