$(function(){
    $('.slaider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button class="slick-btn slick-prev"><img src="images/arrow__left.png" alt="prev"></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="images/arrow__right.png" alt="next"></button>',
        responsive: [
            {
                breakpoint: 1095,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }                
            },
            {
                breakpoint: 839,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }                
            },
            {
                breakpoint: 579,
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
    
    $('.menu__burger').click(function(event){
        $('.menu__list').toggleClass('active'),
        $('.menu__burger').toggleClass('burger__active')
    });
    
});