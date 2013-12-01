$(document).ready(function(){

  var $window = $(window);

  $('section[data-type="background"]').each(function(){
    var $bgobj = $(this);

    $(window).scroll(function(){
      var ypos = - (($window.scrollTop() - $bgobj.offset().top) / $bgobj.data('speed'));
      var coords = '50% ' + ypos + 'px';

      // Moving the background
      $bgobj.css({backgroundPosition: coords});

    });

  });
  
});