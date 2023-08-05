jQuery(document).ready(function(){
    $('.slider').owlCarousel({
        items :1,
        nav:true,
        loop:true,
        navText: ["&lt;", "&gt"],
        autoplay:true,
        autoplayTimeout:3000,
        autoplaySpeed:1800,
        margin:10,
    })
})
$('.student').owlCarousel({
        items :1,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplaySpeed:1800,
        margin:10,
    
    })