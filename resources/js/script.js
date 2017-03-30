jQuery(function($){
    $('.he').matchHeight();
});


// Open Overlay
$(".hamburger").click(function(){
  $("div.overlay").slideDown();
});

// Close Overlay
$(".close").click(function(){
  $("div.overlay").slideUp();
});

// Close Overlay When Clicked On Link
$(".overlay a").click(function(){
  $("div.overlay").slideUp();
});


// FIXED NABAR - Blue Hamburger
$(".hamburger-blue").click(function(){
  $("div.overlay").slideDown();
});


// Book Appointment Overlay
$(".book-overlay-btn").click(function(){
  $(".appointment-overlay").fadeIn();
});

$(".close-btn").click(function(){
  $(".appointment-overlay").fadeOut();
});


// JQUERY UI Calender
$( function() {
    $( "#date" ).datepicker();
  } );


  // Navigation Scroll
    $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });




  $('.js-text-box').waypoint(function(direction) {
    if (direction == 'down') {
      $('nav').addClass('fixed-navbar');
      $('.fixed-navbar').fadeIn();
    } else {
      $('nav').removeClass('fixed-navbar');

    }

  });