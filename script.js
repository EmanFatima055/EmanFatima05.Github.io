
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

/* =====================================
   PREMIUM SCROLL REVEAL ANIMATIONS
===================================== */

// Select elements to animate

const revealElements = document.querySelectorAll(
    ".categories-section .section-heading, " +
    ".category-card, " +
    ".products-section .section-heading, " +
    ".product-card, " +
    ".about-image, " +
    ".about-content, " +
    ".features-section .section-heading, " +
    ".feature-item, " +
    ".reviews-section .section-heading, " +
    ".review-card, " +
    ".newsletter-section > *"
);


// Add reveal classes and stagger delays

revealElements.forEach(function(element, index) {

    element.classList.add("reveal");

    // Animate cards one after another
    const parent = element.parentElement;

    if (
        parent &&
        (
            parent.classList.contains("category-grid") ||
            parent.classList.contains("product-grid") ||
            parent.classList.contains("features-grid")
        )
    ) {
        const cardIndex = Array.from(parent.children).indexOf(element);

        element.style.setProperty(
            "--reveal-delay",
            (cardIndex * 150) + "ms"
        );
    }

});


// Detect elements entering the screen

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        function(entries, observer) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    // Stop observing after animation
                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }
    );


    revealElements.forEach(function(element) {

        revealObserver.observe(element);

    });

} else {

    // Fallback for older browsers

    revealElements.forEach(function(element) {

        element.classList.add("is-visible");

    });

}
