
$(window).scroll(function(){
    if ($(window).scrollTop() >= 50) {
        $('.menu').addClass('fixed-top');
    }
    else {
        $('.menu').removeClass('fixed-top');
    }
});

var newcolor = document.getElementById('wish-active')
$('.wish-active').click(function(){
 
    $(this).find('i').toggleClass('fas far');
    

});

$('body').scrollspy({ target: '#get-now' });


function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}





