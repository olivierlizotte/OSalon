var $ = jQuery;

ResizeAll = function(width, height){

    $("#googleMapsFrame").css({
        'width': width,
        'height': height / 2
    })

    $("#video-wrap").css({
        'width': width,
        'height': height
    });
};

var vidWidth, vidHeight;
jQuery(document).ready(function($) {

    $(window).load(function(){
        $('#preloader').fadeOut('slow',function(){$(this).remove();});
    });


    // Setting up Video
    vidWidth = $(window).width();
    vidHeight = $(window).height();
    if(vidHeight < 450)
      vidHeight = 450;
    ResizeAll(vidWidth, vidHeight);

    $(window).resize(function () {
        var newVidWidth = $(window).width(), newVidHeight = $(window).height();
        if(newVidWidth != vidWidth || newVidHeight != vidHeight){

            vidWidth = width;
            vidHeight = height;

            if(newVidHeight < 450)
              newVidHeight = 450;
          ResizeAll(newVidWidth, newVidHeight);
        }
    });

    // Calling Wow

    new WOW().init();

    //Start video
    $('#video').videoBG({
        mp4:'assets/bg.mp4',
        ogv:'assets/bg.ogv',
        webm:'assets/bg.webm',
        /*poster:'assets/poster.jpg',*/
        scale:true,
        zIndex:0,
        height: vidHeight
    });

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
});


// Navbar fixing

$("#nav-menu").stick_in_parent()



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
