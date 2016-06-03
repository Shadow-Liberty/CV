$(window).on('scroll', function() {
    scrollPosition = $(this).scrollTop();
    if (scrollPosition >= 329) {
        $('#scrollTop').css('top','0px');
        $('#scrollTop').css('opacity','1')

      } else {
        $('#scrollTop').css('top','40px');
        $('#scrollTop').css('opacity','0')
      }
});
