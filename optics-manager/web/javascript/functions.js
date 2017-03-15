$(window).on('scroll', function(){
    var mainFooterHeight = $('#mainFooter').height();
    var bottomFooterHeight = $('#bottomFooter').height();
    var nonMovingFooterHeight =  $('#nonMovingFooter').height();
    var scrollPos = $(this).scrollTop() + $(window).height();//+ $(this).height(); // Current Scroll position plus height of window
    var scrollPos2 = $(this).scrollTop() + $(this).height(); // Current Scroll position plus height of window
    console.log("current"+ scrollPos);
    console.log(scrollPos2);
    //var stopPosition = 631;
    var stopPosition = $(document).height() - (nonMovingFooterHeight);
    console.log("stop"+stopPosition);
    if (scrollPos > stopPosition) {
      $('#topFooter').removeClass('fixed-bottom', true);
    }else  {
      $('#topFooter').addClass('fixed-bottom', true);
    }
});
