//slick-slider
$(".about__slider").slick({
    infinite: false,
    fade: true,
    prevArrow: '<img class="slider__arrows slider__arrows-left" src="images/prev-arrow.png" alt="arrows-left">',
    nextArrow: '<img class="slider__arrows slider__arrows-right" src="images/next-arrow.png" alt="arrows-right">'
});

//burger
$(document).ready(function(){
    $(".burger-btn").click(function(event){
        $(".burger-btn,.menu,.top__btn,.menu__item").toggleClass("active");
        $("body").toggleClass("lock");
    });
    $(".menu__item").click(function(event){
        $(".burger-btn,.menu,.top__btn").removeClass("active");
        $("body").removeClass("lock");
    });
})



