$(window).scroll(function() {
    if ($(window).scrollTop() >= 50) {
        $('.menu').addClass('fixed-top');

    } else {
        $('.menu').removeClass('fixed-top');

    }
});


if (window.innerWidth < 768) {
    $('.fixed-top-header').addClass('fixed-top');

} else {
    $('.fixed-top-header').removeClass('fixed-top');


}

/*Filter Mobile*/

$(window).scroll(function() {
    if ($(window).scrollTop() >= 720) {

        $('.mobile-filter-header').addClass('filter-fixed-top');
    } else {

        $('.mobile-filter-header').removeClass('filter-fixed-top');
    }
});

$(document).ready(function() {

    $('.filter-btn').on('click', function() {
        $('.mobile-filter').addClass('filter-active');
    });

    $('.filter-close-btn-all').on('click', function() {
        $('.mobile-filter.filter-active').removeClass('filter-active');
    });
});



/*Stop dropdown link click event*/
$(".menu .dropdown").click(function(e) {
    e.stopPropagation();
})
$(".category .dropdown").click(function(e) {
    e.stopPropagation();
})

/*Stop dropdown link click event*/
$(".menu .nav-absolute").click(function(e) {
    e.stopPropagation();
})




var newcolor = document.getElementById('wish-active')
$('.wish-active').click(function() {

    $(this).find('i').toggleClass('fas far');


});

$('body').scrollspy({
    target: '#get-now'
});






/*Detail Product Color*/
$(document).ready(function() {

    $('.detail-color-box').on('click', 'img', function() {
        $('.detail-color-box img.color-active').removeClass('color-active');
        $(this).addClass('color-active');
    });
});

/*Detail Product Size*/
$(document).ready(function() {

    $('.detail-size-box-all').on('click', 'button', function() {
        $('.detail-size-box-all button.color-active').removeClass('color-active');
        $(this).addClass('color-active');
    });
});

/*Detail Product Size*/
$(document).ready(function() {

    $('.detail-size-box').on('click', function() {
        $('.detail-size-box.color-active').removeClass('color-active');
        $(this).addClass('color-active');
    });
});

$(document).ready(function() {

    $('.zoom-slick img').on('click', function() {
        $('.zoom-slick img.color-active').removeClass('color-active');
        $(this).addClass('color-active');
    });
});

$(document).ready(function() {

    $('.show-small-img').on('click', function() {
        $('.show-small-img.color-active').removeClass('color-active');
        $(this).addClass('color-active');
    });
});

$(document).ready(function() {

    $('.related-product-button-ex button').on('click', function() {
        $('.related-product-button-ex button.color-active').removeClass('color-active');
        $(this).addClass('color-active');
    });
});



$(document).ready(function() {
    if (window.innerWidth < 576) {
        $('.card-flex-all-8').addClass('card-flex-xs-8').removeClass('card-flex-md-8');
    } else if (window.innerWidth < 992) {
        $('.card-flex-all-8').addClass('card-flex-sm-8').removeClass('card-flex-md-8');
    } else {
        $('.card-flex-all-8').addClass('card-flex-md-8');
    };
});


/*=======================================================
Coupon
========================================================*/


$(document).ready(function() {
    $('.dropdown-toggle-click').click(function(e) {
        $(this).siblings(".new-user-coupon-toggle").toggle();
        
        e.stopPropagation();
        e.preventDefault();

    });
});

$(document).click(function() {

    $(".new-user-coupon-toggle").css('display', 'none');
    $(".account").css('display', 'none');
    $(".bottom-chat-footer").css('display', 'none');
    $(".mobile-order-summary").css('display', 'none');
    $(".account-two").css('display', 'none');

    $('.account-btn').removeClass('n-bottom-active');
    $('.account-btn-two-bot').removeClass('n-bottom-active');
    $('.account-btn-search').removeClass('n-bottom-active');
    $('.account-btn-two').removeClass('n-bottom-active');
    $('body').css("overflow", "visible");
});


/*=======================================================
Product details page product image zoom detailproduct.html
========================================================*/


(function($) {

    $.fn.zoomImage = function(paras) {

        var defaultParas = {
            layerW: 300,
            layerH: 300,
            layerOpacity: 0.2,
            layerBgc: 'transparent',
            showPanelW: 445,
            showPanelH: 445,
            marginL: 5,
            marginT: 0
        };

        paras = $.extend({}, defaultParas, paras);

        $(this).each(function() {
            var self = $(this).css({
                position: 'relative'
            });
            var selfOffset = self.offset();
            var imageW = self.width();
            var imageH = self.height();

            self.find('img').css({
                width: '100%',
                height: '100%'
            });


            var wTimes = paras.showPanelW / paras.layerW;

            var hTimes = paras.showPanelH / paras.layerH;


            var img = $('<img>').attr('src', self.attr("href")).css({
                position: 'absolute',
                left: '0',
                top: '0',
                width: imageW * wTimes,
                height: imageH * hTimes
            }).attr('id', 'big-img');


            var layer = $('<div>').css({
                display: 'none',
                position: 'absolute',
                left: '0',
                top: '0',
                backgroundColor: paras.layerBgc,
                width: paras.layerW,
                height: paras.layerH,
                opacity: paras.layerOpacity,
                border: '1px solid #ccc',
                cursor: 'crosshair'
            });


            var showPanel = $('<div>').css({
                display: 'none',
                position: 'absolute',
                overflow: 'hidden',
                left: 0,
                top: paras.marginT,
                width: paras.showPanelW,
                height: paras.showPanelH
            }).append(img);

            self.append(layer).append(showPanel);

            self.on('mousemove', function(e) {

                var x = e.pageX - selfOffset.left;
                var y = e.pageY - selfOffset.top;

                if (x <= paras.layerW / 2) {
                    x = 0;
                } else if (x >= imageW - paras.layerW / 2) {
                    x = imageW - paras.layerW;
                } else {
                    x = x - paras.layerW / 2;
                }

                if (y < paras.layerH / 2) {
                    y = 0;
                } else if (y >= imageH - paras.layerH / 2) {
                    y = imageH - paras.layerH;
                } else {
                    y = y - paras.layerH / 2;
                }

                layer.css({
                    left: x,
                    top: y
                });

                img.css({
                    left: -x * wTimes,
                    top: -y * hTimes
                });
            }).on('mouseenter', function() {
                layer.show();
                showPanel.show();
            }).on('mouseleave', function() {
                layer.hide();
                showPanel.hide();
            });
        });
    }
})(jQuery);

if (window.innerWidth > 992) {
    $('.showhope').zoomImage();
}

$('.show-small-img:first-of-type').css({
    'border': 'solid 1px gray',
    'padding': '2px'
})
$('.show-small-img:first-of-type').attr('alt', 'now').siblings().removeAttr('alt')
$('.show-small-img').click(function() {
    $('#show-img').attr('src', $(this).attr('src'))
    $('#big-img').attr('src', $(this).attr('src'))
    $(this).attr('alt', 'now').siblings().removeAttr('alt')
    $(this).css({
        'border': 'solid 1px transparent',
        'padding': '2px'
    }).siblings().css({
        'border': 'none',
        'padding': '0'
    })
    if ($('#small-img-roll').children().length > 4) {
        if ($(this).index() >= 3 && $(this).index() < $('#small-img-roll').children().length - 1) {
            $('#small-img-roll').css('left', -($(this).index() - 2) * 76 + 'px')
        } else if ($(this).index() == $('#small-img-roll').children().length - 1) {
            $('#small-img-roll').css('left', -($('#small-img-roll').children().length - 4) * 76 + 'px')
        } else {
            $('#small-img-roll').css('left', '0')
        }
    }
})

$('#next-img').click(function() {
    $('#show-img').attr('src', $(".show-small-img[alt='now']").next().attr('src'))
    $('#big-img').attr('src', $(".show-small-img[alt='now']").next().attr('src'))
    $(".show-small-img[alt='now']").next().css({
        'border': 'solid 1px transparent',
        'padding': '2px'
    }).siblings().css({
        'border': 'none',
        'padding': '0'
    })
    $(".show-small-img[alt='now']").next().attr('alt', 'now').siblings().removeAttr('alt')
    if ($('#small-img-roll').children().length > 4) {
        if ($(".show-small-img[alt='now']").index() >= 3 && $(".show-small-img[alt='now']").index() < $('#small-img-roll').children().length - 1) {
            $('#small-img-roll').css('left', -($(".show-small-img[alt='now']").index() - 2) * 76 + 'px')
        } else if ($(".show-small-img[alt='now']").index() == $('#small-img-roll').children().length - 1) {
            $('#small-img-roll').css('left', -($('#small-img-roll').children().length - 4) * 76 + 'px')
        } else {
            $('#small-img-roll').css('left', '0')
        }
    }
})

$('#prev-img').click(function() {
    $('#show-img').attr('src', $(".show-small-img[alt='now']").prev().attr('src'))
    $('#big-img').attr('src', $(".show-small-img[alt='now']").prev().attr('src'))
    $(".show-small-img[alt='now']").prev().css({
        'border': 'solid 1px transparent',
        'padding': '2px'
    }).siblings().css({
        'border': 'none',
        'padding': '0'
    })
    $(".show-small-img[alt='now']").prev().attr('alt', 'now').siblings().removeAttr('alt')
    if ($('#small-img-roll').children().length > 4) {
        if ($(".show-small-img[alt='now']").index() >= 3 && $(".show-small-img[alt='now']").index() < $('#small-img-roll').children().length - 1) {
            $('#small-img-roll').css('left', -($(".show-small-img[alt='now']").index() - 2) * 76 + 'px')
        } else if ($(".show-small-img[alt='now']").index() == $('#small-img-roll').children().length - 1) {
            $('#small-img-roll').css('left', -($('#small-img-roll').children().length - 4) * 76 + 'px')
        } else {
            $('#small-img-roll').css('left', '0')
        }
    }
});

/* End zoom */

/*Product Show Normal or List*/
$(".product-normal-view-btn").click(function() {
    $(".product-normal-view").css("display", "block");
    $(".product-short-view").css("display", "none");

});
$(".product-short-view-btn").click(function() {
    $(".product-normal-view").css("display", "none");
    $(".product-short-view").css("display", "block");

});


/*Seller Information*/
$(".btn-sidebar").on("click", function() {

    $('.show').find('i').toggleClass('fa-chevron-down').toggleClass('fa-chevron-right');
    $('.show').find('span').toggleClass('new-color-change').toggleClass('new-color-normal');

});

$(".main-btn-sidebar").on("click", function() {

    $(this).find('i').toggleClass('fa-chevron-down').toggleClass('fa-chevron-right');
    $(this).find('span').toggleClass('new-border-change').toggleClass('new-border-normal');

});



$(".seller-home").click(function() {
    $(this).css("color", "#5CC19F");
    $('.seller-about').css("color", "#212529");
    $('.seller-term').css("color", "#212529");
    $('.seller-contact').css("color", "#212529");
    $(".about").css("display", "none");
    $(".term").css("display", "none");
    $(".contact").css("display", "none");
    $(".seller-differ-body").css("display", "block");


});

$(".seller-about").click(function() {
    $(this).css("color", "#5CC19F");
    $('.seller-home').css("color", "#212529");
    $('.seller-term').css("color", "#212529");
    $('.seller-contact').css("color", "#212529");
    $(".about").css("display", "block");
    $(".seller-differ-body").css("display", "none");
    $(".term").css("display", "none");
    $(".contact").css("display", "none");

});

$(".seller-term").click(function() {
    $(this).css("color", "#5CC19F");
    $('.seller-about').css("color", "#212529");
    $('.seller-home').css("color", "#212529");
    $('.seller-contact').css("color", "#212529");
    $(".term").css("display", "block");
    $(".seller-differ-body").css("display", "none");
    $(".about").css("display", "none");
    $(".contact").css("display", "none");

});

$(".seller-contact").click(function() {
    $(this).css("color", "#5CC19F");
    $('.seller-about').css("color", "#212529");
    $('.seller-term').css("color", "#212529");
    $('.seller-home').css("color", "#212529");
    $(".contact").css("display", "block");
    $(".seller-differ-body").css("display", "none");
    $(".about").css("display", "none");
    $(".term").css("display", "none");

});



/*WIN DEAL PAGE*/
$(".now-btn").click(function() {
    $(this).css({
        "background": "#5CC19F",
        "color": "#fff"
    });
    $('.upcoming-btn').css({
        "background": "transparent",
        "color": "#212529"
    });
    $(".now-body").css("display", "block");
    $(".upcoming-body").css("display", "none");

});

$(".upcoming-btn").click(function() {
    $(this).css({
        "background": "#5CC19F",
        "color": "#fff"
    });
    $('.now-btn').css({
        "background": "transparent",
        "color": "#212529"
    });
    $(".upcoming-body").css("display", "block");
    $(".now-body").css("display", "none");

});




$(function() {
    $('#carousel').carousel({
        interval: 2000
    })
});




/*Product Sidebar Filter Page*/
$(window).scroll(function() {

    if ($(window).innerWidth() > 992 && $(window).innerWidth() < 1500) {
        if ($(window).scrollTop() >= 650 && $(window).scrollTop() <= 2700) {

            $('.product-body-sidebar-scroll').addClass('sidebar-fixed-top');
        } else if ($(window).innerWidth() < 992) {
            $('.product-body-sidebar-scroll').css('height', 'auto');
        } else {
            $('.product-body-sidebar-scroll').css('height', '2840px');
            $('.product-body-sidebar-scroll').removeClass('sidebar-fixed-top');
        }
    } else if ($(window).innerWidth() > 1499 && $(window).innerWidth() < 2000) {
        if ($(window).scrollTop() >= 650 && $(window).scrollTop() <= 2300) {

            $('.product-body-sidebar-scroll').addClass('sidebar-fixed-top');
        } else if ($(window).innerWidth() < 992) {
            $('.product-body-sidebar-scroll').css('height', 'auto');
        } else {
            $('.product-body-sidebar-scroll').css('height', '2840px');
            $('.product-body-sidebar-scroll').removeClass('sidebar-fixed-top');
        }
    } else if ($(window).innerWidth() > 1999) {
        if ($(window).scrollTop() >= 650 && $(window).scrollTop() <= 2100) {

            $('.product-body-sidebar-scroll').addClass('sidebar-fixed-top');
        } else if ($(window).innerWidth() < 992) {
            $('.product-body-sidebar-scroll').css('height', 'auto');
        } else {
            $('.product-body-sidebar-scroll').css('height', '2840px');
            $('.product-body-sidebar-scroll').removeClass('sidebar-fixed-top');
        }
    }






});




$(".new-click-toggle").on("click", function() {

    $('.new-test-toggle').toggle('new-block new-none');

});


if ($('.new-block')) {
    $("body").on("click", function() {

        $('.new-test-toggle').toggle('new-block new-none');

    });
}

/*=============================================
Header and Footer Menu For Mobile
=============================================*/
$(".account-btn").on("click", function(e) {
    e.stopPropagation();

    $('.account').toggle();
    $('.account-two').css('display', 'none');
    $('.account-search').css('display', 'none');
    $('.account-btn-search').removeClass('n-bottom-active');
    $('.account-btn-two').removeClass('n-bottom-active');

    if ($('.account').css('display') == 'block') {
        $('.account-btn').addClass('n-bottom-active');
    }

});

$(".account-btn-two-bot").on("click", function(e) {
    e.stopPropagation();

    $('.bottom-chat-footer').toggle();

    if ($('.bottom-chat-footer').css('display') == 'block') {
        $('.account-btn-two-bot').addClass('n-bottom-active');
    }

});

$(".btn-total-shopingcart").on("click", function(e) {
    e.stopPropagation();
    $('.mobile-order-summary').toggle();

    if ($('.mobile-order-summaryr').css('display') == 'block') {
        $('.btn-total-shopingcart').addClass('n-bottom-active');
    }

});

$(".account-btn-two").on("click", function(e) {
    e.stopPropagation();

    $('.account-two').toggle();
    $('.account').css('display', 'none');
    $('.account-search').css('display', 'none');
    $('.account-btn-search').removeClass('n-bottom-active');
    $('.account-btn').removeClass('n-bottom-active');
    if ($('.account-two').css('display') == 'block') {
        $('.account-btn-two').addClass('n-bottom-active');

    }

});

$(".account-btn-search").on("click", function(e) {
    e.stopPropagation();

    $('.account-search').toggle();
    $('.account-two').css('display', 'none');
    $('.account').css('display', 'none');
    $('.account-btn-two').removeClass('n-bottom-active');
    $('.account-btn').removeClass('n-bottom-active');
    if ($('.account-search').css('display') == 'block') {
        $('.account-btn-search').addClass('n-bottom-active');

    }

});



$(".main-collections-block").on('touchstart', function(e) {
    $(this).addClass('new-ole');

});

$(".main-collections-block").on('touchend', function(e) {
    $(this).removeClass('new-ole');
});


if (window.innerWidth > 992) {
    $('.new-store-show').addClass('show');
    $('.seller-collapse').addClass('show');

} else {
    $('.new-store-show').removeClass('show');
    $('.seller-collapse').removeClass('show');


}




$(document).ready(function() {

    var quantitiy = 0;
    $('.quantity-right-plus-modal').click(function(e) {

        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#sh-modal-quantity').val());

        // If is not undefined

        $('#sh-modal-quantity').val(quantity + 1);


        // Increment

    });

    $('.quantity-left-minus-modal').click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#sh-modal-quantity').val());

        // If is not undefined

        // Increment
        if (quantity > 0) {
            $('#sh-modal-quantity').val(quantity - 1);
        }
    });

});


$('.shopingcart-check-all').change(function() {
    $('.shopingcart-check-single').prop('checked', this.checked);
});

$('.shopingcart-check-single').change(function() {
    if ($('.shopingcart-check-single:checked').length == $('.shopingcart-check-single').length) {
        $('.shopingcart-check-all').prop('checked', true);
    } else {
        $('.shopingcart-check-all').prop('checked', false);
    }
});

$('.modal').on('shown.bs.modal', function(e) {
    $('.zoom-quick-slick').slick('setPosition');
    $('.wrap-modal-slider').addClass('open');
})

$(document).ready(function() {
    $('.zoom-quick-slick').slick({
        responsive: [
                
                {
                  breakpoint: 767,
                settings: {
                  infinite: false,
                  slidesToShow: 3.4,
                  slidesToScroll: 1
                }
                 }
                ]
            });
});






if (window.innerWidth < 992) {
    $(".showhope-n-mobile").on("click", function(e) {
    
    $('.mobile-showhope').css('display', 'block');
    $('.mobile-showhope-btn').css('display', 'block');

});

$(".mobile-showhope-btn").on("click", function(e) {
    
    $('.mobile-showhope').css('display', 'none');

});
}