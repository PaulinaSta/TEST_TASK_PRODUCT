// const addToCart = () => {
//     $('.payment__link--1').on('click', function () {
//         document.querySelector(".basket__items").classList.add("basket__items--show");
//         // $('.basket__items').addClass('basket__items--show');
//     });
// };

// addToCart();



new Glide('.product__glide', {
    type: 'carousel',
    gap: 30,
    perView: 1,
}).mount();

new Glide('.testimonials__glide', {
    type: 'carousel',
    gap: 30,
    perView: 2,
    breakpoints: {
        1024: {
            perView: 1
        }
    }
}).mount();



const toggleHeart = () => {
    $('.price__icon').on('click', function () {
        $('.price__icon').toggleClass('price__icon--show');
    });
};


const checkColor = () => {
    $('.specifications__color').on('click', function () {
        $('.specifications__color').not(this).removeClass('specifications__color--active');
        $(this).addClass('specifications__color--active');
    });
};


const checkPayment = () => {
    $('.payment__check1').on('click', function () {
        $('.payment__check1').not(this).removeClass('payment__check1--show');
        $(this).addClass('payment__check1--show');
    });

    $('.payment__check2').on('click', function () {
        $('.payment__check2').not(this).removeClass('payment__check2--show');
        $(this).addClass('payment__check2--show');
    });
};

const app = () => {
    toggleHeart();
    checkColor();
    checkPayment();
};

app();