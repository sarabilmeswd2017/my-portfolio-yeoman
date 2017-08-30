$(function() {

  var $window           = $(window),
      win_height_padded = $window.height() * 1.1,
      isTouch           = Modernizr.touch;

  if (isTouch) { $('.revealOnScroll').addClass('animated'); }

  $window.on('scroll', revealOnScroll);

  function revealOnScroll() {
    var scrolled = $window.scrollTop(),
        win_height_padded = $window.height() * 1.1;

    // Showed...
    $(".revealOnScroll:not(.animated)").each(function () {
      var $this     = $(this),
          offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
        if ($this.data('timeout')) {
          window.setTimeout(function(){
            $this.addClass('animated ' + $this.data('animation'));
          }, parseInt($this.data('timeout'),10));
        } else {
          $this.addClass('animated ' + $this.data('animation'));
        }
      }
    });
    // Hidden...
   $(".revealOnScroll.animated").each(function (index) {
      var $this     = $(this),
          offsetTop = $this.offset().top;
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('animated fadeInUp flipInX lightSpeedIn')
      }
    });
  }

  revealOnScroll();
});


//$(document).ready(function(){
  $(".ion-navicon-round").click(function(){
    $(".hidden-nav-1").toggle();
  });
//});

/*$(document).ready(function(){ 
  $(".ion-navicon-round").hover(function(){
    $(".nav-box").show();
  }, function(){
    $(".nav-box").hide();
  });
 });*/


//$(document).ready(function(){
  $(".ion-navicon-round").click(function(){
    $(".nav-rectangle").toggle();
  });
//});


//$(document).ready(function(){ 
if ($(".hidden-nav-1").is(':visible')) {
  $(document).ready(function(){
    $(".ion-navicon-round").hover(function(){
      $(".nav-box").show();

    });
  });
}
  else {
    $(document).ready(function(){
      $(".ion-navicon-round").hover(function(){
        $(".nav-box").show();
      }, function(){
        $(".nav-box").hide();
      });
     });
    }
  
//});

/*$(document).ready(function(){
  $(".ion-ios-home").hover(function(){
    $(".active-home").animate({right: '400px', opacity: '1'});
  });
});*/

$(document).ready(function(){
  $(".ion-ios-home").hover(function(){
    $(".home-active").removeClass("hidden");
  });
});

$(document).ready(function(){
  $(".ion-ios-briefcase").hover(function(){
    $(".active-portfolio").fadeIn();
  });
});


/*$(document).ready(function() {
  $(".hidden-nav-1").hover(function() {
        $(this).children(".nav-word").stop().animate({ opacity: 1} , 500);   
    }, function() {
        $(this).children(".nav-word").stop().animate({ opacity: 0}, 500);       
      });
 
});*/