$(function(){

    $('a[href^="#"]').click(function(e){
          var target = $(this).attr('href');
          var strip = targrt.slice(1);
          var anchor = $("a[name='" + strip + "']");

          e.preventFefault();
          $('html, body').animate({

            scrolltop: anchor.offset().top
          }. '1');

    });


});
