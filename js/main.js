jQuery(document).ready(function($){

    // $(".header-area").sticky({ topSpacing: 0 });

    $('select').niceSelect();

    // homepage-slides
	$(".homepage-slides").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		dots: false,
        autoplay: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	});

    // perfectScrollbar
    $(".nice-select .list").perfectScrollbar();

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
                margin: 3,
                nav: false
            },
            720: {
                items: 4,
                margin: 3,
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
            481: {
                items: 2,
                margin: 15,
                nav: false
            },
            720: {
                items: 3,
                margin: 15,
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
    // homepage-slides
	// $(".review-carousel").owlCarousel({
	// 	items: 1,
	// 	loop: true,
	// 	nav: false,
	// 	dots: true,
    //     autoplay: false,
    // });
    $(".review-carousel").owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		dots: true,
        autoplay: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	});




	// $(".bodytype-carousel-wrap").magnificPopup({
	// 	type: 'image',
    //     gallery: {
    //         enabled: true
    //     }
	// });



// slick slider
// $('.slider').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: false,
//     asNavFor: '.slider-nav-thumbnails',
// });

// $('.slider-nav-thumbnails').slick({
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     asNavFor: '.slider',
//     prevArrow: '<span class="arrow-left"><i class="fa fa-arrow-left"></i></span>',
//     nextArrow: '<span class="arrow-right"><i class="fa fa-arrow-right"></i></span>',
//     dots: false,
//     centerMode: true,
//     centerPadding: '10px',
//     focusOnSelect: true,
//     // lazyLoad: 5000,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 5,
//             }
//         },
//         {
//             breakpoint: 950,
//             settings: {
//                 slidesToShow: 4,
//             }
//         },
//         {
//             breakpoint: 750,
//             settings: {
//                 slidesToShow: 4,
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 2,
//             }
//         }
//     ]
// });
    

    

});


// $(window).load(function() {
//     alert("window load occurred!");
// });