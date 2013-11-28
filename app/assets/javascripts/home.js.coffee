$(document).ready(function(){

  $('section[data-type="background"]').each(function(){
    var $bgobj = $(this);

    $(window).scroll(function(){
      var ypos = ($window.scrollTop() / $bgobj.data('speed'));

    });

  });
  
});