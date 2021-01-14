$(document).ready(function(){
   
    $('.banner-area').owlCarousel({
    loop:true,
    dots:true,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
});
     $('.testimonial').owlCarousel({
    loop:true,
    dots:true,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:2
        }
    }
});
     $('.clients').owlCarousel({
    loop:true,
    dots:true,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
    $('.project-popup').magnificPopup({
        type:'image',
        gallery: {
      enabled: true
    }
    });
   $('.counter').counterUp({
    delay: 100,
    time: 10000
});
    $('.video-popup').magnificPopup({
        type:'iframe',
       
    });
    
    $('#nav').onePageNav();
});


$(window).on('scroll', function () {
    if ($(this).scrollTop() > 1) {
        $('.header-area').addClass("sticky");
    } else {
        $('.header-area').removeClass("sticky");
    }
});

