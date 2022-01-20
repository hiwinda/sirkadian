$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $(this).toggleClass('active')
        if ($(this).hasClass("active")) {
            $('body').addClass("nav-mobile-active");
        } else {
            $('body').removeClass("nav-mobile-active");
        }
    });
    $('.slick-headline').slick({
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.slick-article').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1
    });
});