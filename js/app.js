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





$(".add-to-cart").click(function (event) {
    event.preventDefault();
    var name = $(this).attr("data-name");
    var price = Number($(this).attr("data-price"));

    shoppingCart.addItemToCart(name, price, 1);
    displayCart();
});

$(".clear-cart").click(function (event) {
    shoppingCart.clearCart();
    displayCart();
});


function displayCart() {
    var cartArray = shoppingCart.listCart();
    console.log(cartArray);
    var output = "";

    $("#count-cart-basket-nav").html(shoppingCart.countCart());
    $("#count-cart-basket-cart").html(shoppingCart.countCart());
    $("#count-cart-basket-summary").html(shoppingCart.countCart());

    $("#total-cart-basket-cart").html(shoppingCart.totalCart());
    $("#total-cart-basket-confirm").html(shoppingCart.totalCart());
    $("#total-cart-basket-order").html(shoppingCart.totalCart());
}

$(".basket__buttons").on("click", ".remove-from-cart", function (event) {
    var name = $(this).attr("data-name");
    shoppingCart.removeItemFromCart(name);
    displayCart();
});

displayCart();