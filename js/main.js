$(function(){
    $('.slaider').slick({
        infinite: true,
        slidesToShow: 4,
        
        prevArrow: '<button class="slick-btn slick-prev"><img src="images/arrow__left.png" alt="prev"></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="images/arrow__right.png" alt="next"></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }                
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }                
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }                
            } 
        ]
});
    $('.carousel__inner').slick({
        arrows: false,
        dots: true 
    });	

});