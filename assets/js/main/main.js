$(document).ready(function(){var t=$(".scroll");t.click(function(t){t.preventDefault(),$("body, html").animate({scrollTop:$(this.hash).offset().top},1e3)}),$(window).scroll(function(){var s=$(this).scrollTop();t.each(function(){$(this.hash).offset().top-40<=s&&($(this).parent().addClass("active"),$(this).parent().siblings().removeClass("active"))})})});