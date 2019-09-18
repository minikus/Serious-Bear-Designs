/* about img carousel*/

$(document).ready(function () {
    'use strict';
    $('.carousel').slick({
        displayArrows: true,


		slidesToShow: 1,
		slidesToScroll: 1,
        arrows: true,
        dots: true,
        slide: "div",
        autoplay: true,
		autoplaySpeed: 5000,
		fade: true,
		cssEase: 'linear'

        /*centerMode: true,*/
        /*centerPadding: 5*/
    });
});

/* about testimonial carousel*/

$(document).ready(function () {
    'use strict';
    $('.testimonials').slick({
        displayArrows: true,


		slidesToShow: 1,
		slidesToScroll: 1,
        arrows: true,
        dots: true,
        slide: "div",
        autoplay: true,
		autoplaySpeed: 8000,
// 		fade: true,
// 		cssEase: 'linear'

        /*centerMode: true,*/
        /*centerPadding: 5*/
    });
});


/*animate phone number*/

$('.icon-phone-3').click(function(){
    $('.ph-no').animate({width: 'toggle'}, "normal");
});


/*this hides hidden info*/
/*
function hideit() {
	$('.ph-no').slideToggle(1100);
}

$('.icon-phone-3').click(hideit);
*/





/* show more hidden info*/

/*
function showMore() {
	$('.ph-no').slideToggle(500);


}

$('.icon-phone-3').click(showMore);
*/
 /* smootherscroll */

$(function() {
  $('.scroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
