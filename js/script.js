var $ = jQuery;

jQuery(document).ready(function($) {

    $(window).load(function(){
        $('#preloader').fadeOut('slow',function(){$(this).remove();});
    });

});

// Setting up Video

var $ = jQuery;

ResizeAll = function(width, height){
  vidWidth = width;
  vidHeight = height;

    $("#googleMapsFrame").css({
        'width': width,
        'height': height / 2
    })

    $("#video-wrap").css({
        'width': width,
        'height': height
    });

    $('#video').videoBG({
        mp4:'assets/bg.mp4',
        ogv:'assets/bg.ogv',
        webm:'assets/bg.webm',
        poster:'assets/poster.jpg',
        scale:true,
        zIndex:0,
        height: height
    });
};

var vidWidth = $(window).width(), vidHeight = $(window).height();
ResizeAll(vidWidth, vidHeight);

//$(window).resize(function () {
//    var newVidWidth = $(window).width(), newVidHeight = $(window).height();
//    if(newVidWidth != vidWidth || newVidHeight != vidHeight)
//      ResizeAll(newVidWidth, newVidHeight);
//});

// Navbar fixing

$("#nav-menu").stick_in_parent()


// Calling Wow

new WOW().init();

// rotating text

(function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(1000)
            .delay(1000)
            .fadeOut(1000, showNextQuote);
    }

    showNextQuote();

})();

// smooth mouse wheel
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
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
});//*/
