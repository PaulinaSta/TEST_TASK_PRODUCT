var shoppingCart = (function () {
    var cart = [];

    function Item(name, price, count) {
        this.name = name
        this.price = price
        this.count = count
    }

    function saveCart() {
        localStorage.setItem("shoppingCart", JSON.stringify(cart));
    }

    function loadCart() {
        cart = JSON.parse(localStorage.getItem("shoppingCart"));
        if (cart === null) {
            cart = []
        }
    }

    loadCart();



    var obj = {};

    obj.addItemToCart = function (name, price, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count += count;
                saveCart();
                return;
            }
        }

        console.log("addItemToCart:", name, price, count);

        var item = new Item(name, price, count);
        cart.push(item);
        saveCart();
    };

    obj.setCountForItem = function (name, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
        saveCart();
    };


    obj.removeItemFromCart = function (name) { // Removes one item
        for (var i in cart) {
            if (cart[i].name === name) { // "3" === 3 false
                cart[i].count--; // cart[i].count --
                if (cart[i].count === 0) {
                    cart.splice(i, 1);
                }
                break;
            }
        }
        saveCart();
    };


    obj.removeItemFromCartAll = function (name) { // removes all item name
        for (var i in cart) {
            if (cart[i].name === name) {
                cart.splice(i, 1);
                break;
            }
        }
        saveCart();
    };


    obj.clearCart = function () {
        cart = [];
        saveCart();
    }


    obj.countCart = function () { // -> return total count
        var totalCount = 0;
        for (var i in cart) {
            totalCount += cart[i].count;
        }

        return totalCount;
    };

    obj.totalCart = function () { // -> return total cost
        var totalCost = 0;
        for (var i in cart) {
            totalCost += cart[i].price * cart[i].count;
        }
        return totalCost.toFixed(2);
    };

    obj.listCart = function () { // -> array of Items
        var cartCopy = [];
        console.log("Listing cart");
        console.log(cart);
        for (var i in cart) {
            console.log(i);
            var item = cart[i];
            var itemCopy = {};
            for (var p in item) {
                itemCopy[p] = item[p];
            }
            itemCopy.total = (item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy);
        }
        return cartCopy;
    };

    // ----------------------------
    return obj;
})();




function displayCart() {
    var cartArray = shoppingCart.listCart();
    console.log(cartArray);
    var output = "";

    $("#count-cart-index-nav").html(shoppingCart.countCart());
    $("#count-cart-index-nav--mobile").html(shoppingCart.countCart());
    $("#count-cart-basket-nav").html(shoppingCart.countCart());
    $("#count-cart-basket-nav--mobile").html(shoppingCart.countCart());
    $("#count-cart-basket-cart--desktop").html(shoppingCart.countCart());
    $("#count-cart-basket-cart").html(shoppingCart.countCart());
    $("#count-cart-basket-cart--mobile").html(shoppingCart.countCart());
    $("#count-cart-basket-summary").html(shoppingCart.countCart());
    $("#count-cart-delivery-nav").html(shoppingCart.countCart());
    $("#count-cart-delivery-nav--mobile").html(shoppingCart.countCart());
    $("#count-cart-order-nav").html(shoppingCart.countCart());
    $("#count-cart-order-nav--mobile").html(shoppingCart.countCart());

    $("#total-cart-basket-cart").html(shoppingCart.totalCart());
    $("#total-cart-basket-cart--mobile").html(shoppingCart.totalCart());
    $("#total-cart-basket-confirm").html(shoppingCart.totalCart());
    $("#total-cart-basket-order").html(shoppingCart.totalCart());
}


$(".payment__button--1").on("click", ".add-item-index", function (event) {
    var name = $(this).attr("data-name");
    var price = Number($(this).attr("data-price"));
    shoppingCart.addItemToCart(name, price, 1);
    displayCart();
});

$(".basket__buttons").on("click", ".add-item-basket", function (event) {
    var name = $(this).attr("data-name");
    var price = Number($(this).attr("data-price"));
    shoppingCart.addItemToCart(name, price, 1);
    displayCart();
});

$(".basket__buttons").on("click", ".remove-item", function (event) {
    var name = $(this).attr("data-name");
    shoppingCart.removeItemFromCart(name);
    displayCart();
});

$(".basket__button-container").on("click", ".clear-cart", function (event) {
    var name = $(this).attr("data-name");
    shoppingCart.clearCart();
    displayCart();
});

displayCart();