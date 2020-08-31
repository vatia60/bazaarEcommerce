
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


