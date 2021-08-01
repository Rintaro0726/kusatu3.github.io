// Recommend Plan
//========================//

$(function(){
$('#rec-slick').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 1000,
    autoplay: 5000,
    arrows: false,
    centerPadding:'100px',
    centerMode:true,
    responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding:'0px',
            centerMode:true,
          }
        }
      ]
  });
});  

// FAQ
//========================//

$(function(){
    $(".js-accordion").on( 'click', function() {
        $(this).next().slideToggle();
    });
});


// Nav
//========================//

$(function(){
    $(".nav-btn").on( 'click', function() {
        $(this).toggleClass('-active');
        $('.header-nav').toggleClass('-active');
    });
});




// Animation
//========================//

$(function(){
    new WOW().init();  //wow.jsのhit
});
