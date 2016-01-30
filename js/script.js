var $ = jQuery;

jQuery(document).ready(function($) {

    $(window).load(function(){
        $('#preloader').fadeOut('slow',function(){$(this).remove();});
    });

});

// Setting up Video

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

ResizeAll($(window).width(), $(window).height());

//$(window).resize(function () {
//    var vidWidth = $(window).width(), vidHeight = $(window).height();
//    ResizeAll(vidWidth, vidHeight);
//});

// Navbar fixing

$("#nav-menu").stick_in_parent()


// Calling Wow

new WOW().init();

// Count Down Timer

$('.countdown').final_countdown({
    start : new Date().getTime()/4000,
    end   : new Date(2016, 01, 26, 9, 0, 0, 0).getTime()/4000,
    now   : new Date().getTime()/4000,
    seconds: {
    borderColor: '#5677fc',
    borderWidth: '3'
},
minutes: {
    borderColor: '#7e57c2',
    borderWidth: '3'
},
hours: {
    borderColor: '#4db6ac',
    borderWidth: '3'
},
days: {
    borderColor: '#d81b60',
    borderWidth: '3'
}}, function() {
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
/*
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
