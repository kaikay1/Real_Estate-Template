const slide = document.querySelectorAll('.swiper-slide');
console.log(slide.length);
const slideImages = [
    "images/house_1.jpg",
    "images/house_2.jpg",
    "images/house_3.jpg",
    "images/house_4.webp",
    "images/house_5.jpg",
    "images/house_6.jpeg",
];
console.log(slideImages[0]);
slide.forEach((s,index)=>{
s.style.backgroundImage=`url('${slideImages[index]}')`;
});
const swiper = new Swiper('.swiper',{
    init:false,
    direction: 'horizontal',
    slidesPrevView:'auto',
    loop:true,
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
    },
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
    autoplay:{
delay:5000,
    }
}
);
swiper.init();
swiper.snapGrid = [...swiper.slidesGrid];