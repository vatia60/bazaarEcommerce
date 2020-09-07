$(window).scroll(function() {
    if ($(window).scrollTop() >= 50) {
        $('.menu').addClass('fixed-top');
    } else {
        $('.menu').removeClass('fixed-top');
    }
});

var newcolor = document.getElementById('wish-active')
$('.wish-active').click(function() {

    $(this).find('i').toggleClass('fas far');


});

$('body').scrollspy({ target: '#get-now' });







$(document).ready(function() {

    $('.detail-color-box').on('click', 'img', function() {
        $('.detail-color-box img.color-active').removeClass('color-active');
        $(this).addClass('color-active');
    });
});








$(document).ready(function() {
    if (window.innerWidth < 576) {
        $('.card-flex-all').addClass('card-flex-xs').removeClass('card-flex-md');
    } else if (window.innerWidth < 768) {
        $('.card-flex-all').addClass('card-flex-sm').removeClass('card-flex-md');
    } else {
        $('.card-flex-all').addClass('card-flex-md');
    };
});

$(document).ready(function() {
    if (window.innerWidth < 576) {
        $('.card-flex-all-8').addClass('card-flex-xs-8').removeClass('card-flex-md-8');
    } else if (window.innerWidth < 768) {
        $('.card-flex-all-8').addClass('card-flex-sm-8').removeClass('card-flex-md-8');
    } else {
        $('.card-flex-all-8').addClass('card-flex-md-8');
    };
});