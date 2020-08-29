
$(window).scroll(function(){
    if ($(window).scrollTop() >= 50) {
        $('.menu').addClass('fixed-top');
    }
    else {
        $('.menu').removeClass('fixed-top');
    }
});


var wish_active = document.getElementById("wish-active");
var wish_inactive = document.getElementById("wish-inactive");

$(".wish-active").click(function(){
  wish_active.style.display = "none";
  wish_inactive.style.display = "block";
  
});

$(".wish-inactive").click(function(){
  wish_inactive.style.display = "none";
  wish_active.style.display = "block";
  
});



