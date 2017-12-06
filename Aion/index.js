$(document).ready(function() {
  var toggleAffix = function(affixElement, scrollElement, wrapper) {
      var height = affixElement.outerHeight(),
          top = wrapper.offset().top;
      if (scrollElement.scrollTop() >= top){
          wrapper.height(height);
          affixElement.addClass("affix");
          $('.nav_logo_aion').addClass('shrink_down');
      }
      else {
          affixElement.removeClass("affix");
          $('.nav_logo_aion').removeClass('shrink_down');
          wrapper.height('auto');
      }
  };
  $('[data-toggle="affix"]').each(function() {
      var ele = $(this),
          wrapper = $('<div></div>');
      ele.before(wrapper);
      $(window).on('scroll resize', function() {
          toggleAffix(ele, $(this), wrapper);
      });
      // init
      toggleAffix(ele, $(window), wrapper);
  });
});
$(document).ready(function() {
  $('#myCarousel').carousel({
      interval: 10000
  })
  $('#myCarousel').on('slid.bs.carousel', function() {
      //alert("slid");
  });
});