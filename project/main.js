$(document).ready(function(){
    $('.owl-carousel').owlCarousel
    ({
        items : 1,
        nav:true,
        center:true,
        loop:true,
        navText: ["&lt;", "&gt"],
        autoplay:true,
        animateIn:'bounceInRight',
        animateOut:'bounceOutLeft',
        autoplayTimeout:3000,
        autoplaySpeed:1800,
        margin:40,
    });
})
