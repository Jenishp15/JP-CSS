

$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};


$('#number1').jQuerySimpleCounter({end: 232,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 521,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 1463,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 15,duration: 2500});



  /* AUTHOR LINK */
 $('.about-me-img').hover(function(){
        $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
    }, function(){
        $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
    });


    $(document).ready(function(){
        $(".box1").click(function(){
            $('.autoplay').slick({
                slidesToShow: 3,
                slidesToScroll: 3,
                autoplay: true,
                autoplaySpeed: 2000,
              });
        })
    })
    

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      $(document).ready(function(){
        $(".box6").ready(function(){
            $(".p6").hide();
        })
    })
    $(document).ready(function(){
        $(".box6").click(function(){
            $(".p6").slideToggle();
        })
    })

        $(document).ready(function(){
            $(".box2").ready(function(){
                $(".p2").hide();
            })
        })
        $(document).ready(function(){
            $(".box2").click(function(){
                $(".p2").slideToggle();
            })
        })

        $(document).ready(function(){
            $(".box3").ready(function(){
                $(".p3").hide();
            })
        })
        $(document).ready(function(){
            $(".box3").click(function(){
                $(".p3").slideToggle();
            })
        })

        $(document).ready(function(){
            $(".box4").ready(function(){
                $(".p4").hide();
            })
        })
        $(document).ready(function(){
            $(".box4").click(function(){
                $(".p4").slideToggle();
            })
        })

        $(document).ready(function(){
            $(".box5").ready(function(){
                $(".p5").hide();
            })
        })
        $(document).ready(function(){
            $(".box5").click(function(){
                $(".p5").slideToggle();
            })
        })

        