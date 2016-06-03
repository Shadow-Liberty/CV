$(window).on('scroll', function() {
    scrollPosition = $(this).scrollTop();
    if (scrollPosition >= 409) {
            $('#secondaryNav').css('position','fixed').css('top','44px');
            $('#secondaryNav').css('background-color','#f5f5f5');
            $('#secondaryNav').css('width','100%');
            $('#secondaryNav').css('left','0');
            $('#secondaryNav').css('box-shadow','0 2px 4px 0 rgba(0,0,0,.15');

      } else {
          $('#secondaryNav').css('position','static');
          $('#secondaryNav').css('background-color','white');
          $('#secondaryNav').css('width','900px');
          $('#secondaryNav').css('box-shadow','none');
      }
});
