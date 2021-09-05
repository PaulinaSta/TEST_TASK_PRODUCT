new Glide('.product__glide', {
    type: 'carousel',
    perView: 1,
    gap: 30,
}).mount();

new Glide('.testimonials__glide', {
    type: 'carousel',
    perView: 2,
    gap: 30,
}).mount();





// const showCircle = () => {
//     $('.add-item-index').on('click', function () {
//         $('.icons__circle').addClass('icons__circle--show');
//     });
// };


// const app = () => {
//     showCircle();
// };

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