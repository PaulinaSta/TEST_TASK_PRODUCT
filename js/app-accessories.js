new Glide('.accessories', {
    type: 'carousel',
    gap: 30,
    perView: 4,
    breakpoints: {
        1024: {
            perView: 3
        },
        767: {
            perView: 2
        }
    }
}).mount()