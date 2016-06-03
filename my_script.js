var elementPosition = $('#mainNav').offset();

$(window).scroll(function(){
        if($(window).scrollTop() > elementPosition.top){
              $('#mainNav').css('position','fixed').css('top','0');
              $('#mainNav').css('background-color','white');
              $('#mainNav').css('box-shadow', '0 2px 4px 0 rgba(0,0,0,.15)');
              $('#talk').css('top','0');
              $('#bell2').css('display','block');
              $('#banner').css('margin-top','45px');
              $('#logo').css('margin-left','0');
              $('#dropdown').css('margin-left','7px');
              $('#label').css('display','none');
              $('#dropdown').css('width','41px');
              $('#dropdown').css('background-color','#f5f5f5');
        } else {
            $('#mainNav').css('position','static');
            $('#mainNav').css('background-color','#F5F5F5')
            $('#mainNav').css('box-shadow', 'none');
            $('#talk').css('top','60px');
            $('#bell2').css('display','none');
            $('#banner').css('margin-top','0');
            $('#logo').css('margin-left','-45px');
            $('#dropdown').css('margin-left','30px');
            $('#label').css('display','inline-block');
            $('#dropdown').css('width','81.219px');
            $('#dropdown').css('background-color','#fff');
        }
});
