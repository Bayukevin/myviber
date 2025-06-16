const swiperArticle = new Swiper('.swiper-container-article', {
    loop: true,
    speed: 600,
});

document.querySelector('.next-article').addEventListener('click', () => {
    swiperArticle.slideNext();
});

document.querySelector('.prev-article').addEventListener('click', () => {
    swiperArticle.slidePrev();
});

const swiperTesti = new Swiper('.swiper-container-testi', {
    loop: true,
    speed: 600,
});

document.querySelector('.next-testi').addEventListener('click', () => {
    swiperTesti.slideNext();
});

document.querySelector('.prev-testi').addEventListener('click', () => {
    swiperTesti.slidePrev();
});
