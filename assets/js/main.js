$(document).ready(function(){
  var scrollLink = $('.scroll');
  scrollLink.click(function(e){
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });
  $(window).scroll(function(){ 
    var scrollBar = $(this).scrollTop();
    scrollLink.each(function(){
      var secOf = $(this.hash).offset().top;
      if(secOf <= scrollBar){
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });
});
