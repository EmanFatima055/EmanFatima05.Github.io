
/* =====================================
   THE BEAUTY EDIT
   JavaScript Functionality
===================================== */


/* 1. SHOPPING CART */

let cartItems = [];

const cartButton = document.getElementById("cart-button");
const cartCount = document.getElementById("cart-count");

const addToCartButtons = document.querySelectorAll(".add-to-cart");


addToCartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const productName = button.dataset.name;
        const productPrice = Number(button.dataset.price);

        const product = {
            name: productName,
            price: productPrice
        };

        cartItems.push(product);

        // Update cart count
        cartCount.textContent = cartItems.length;

        // Button feedback
        button.textContent = "Added ✓";

        button.style.background = "#704C55";
        button.style.color = "#FFFFFF";

        setTimeout(function() {
            button.textContent = "Add to Bag";
            button.style.background = "";
            button.style.color = "";
        }, 1200);

    });

});


/* 2. VIEW SHOPPING BAG */

cartButton.addEventListener("click", function() {

    if (cartItems.length === 0) {

        alert("Your shopping bag is empty!");

        return;
    }

    let total = 0;

    let message = "YOUR BEAUTY BAG\n\n";

    cartItems.forEach(function(item, index) {

        message += (index + 1) + ". " + item.name +
            " - Rs. " + item.price + "\n";

        total += item.price;

    });

    message += "\nTotal: Rs. " + total;

    alert(message);

});


/* 3. WISHLIST */

const wishlistButtons = document.querySelectorAll(".wishlist-button");

wishlistButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        button.classList.toggle("active");

        if (button.classList.contains("active")) {

            button.textContent = "♥";

            button.style.color = "#B88A83";

        } else {

            button.textContent = "♡";

            button.style.color = "";

        }

    });

});


/* 4. PRODUCT SEARCH */

const searchButton = document.getElementById("search-button");

const productCards = document.querySelectorAll(".product-card");

searchButton.addEventListener("click", function() {

    let searchTerm = prompt("What beauty product are you looking for?");

    if (searchTerm === null || searchTerm.trim() === "") {
        return;
    }

    searchTerm = searchTerm.toLowerCase().trim();

    let foundProducts = 0;

    productCards.forEach(function(card) {

        const productText = card.textContent.toLowerCase();

        if (productText.includes(searchTerm)) {

            card.style.display = "";

            foundProducts++;

        } else {

            card.style.display = "none";

        }

    });

    // Show matching products
    document.getElementById("bestsellers").scrollIntoView({
        behavior: "smooth"
    });

    if (foundProducts === 0) {

        alert("Sorry! No matching products found.");

    }

});


/* 5. NEWSLETTER */

const newsletterForm = document.getElementById("newsletter-form");

const newsletterEmail = document.getElementById("newsletter-email");

const newsletterMessage = document.getElementById("newsletter-message");

newsletterForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = newsletterEmail.value.trim();

    if (email === "") {

        newsletterMessage.textContent = "Please enter your email.";

        return;

    }

    newsletterMessage.textContent =
        "Thank you! Welcome to The Beauty Edit. ♡";

    newsletterForm.reset();

});
