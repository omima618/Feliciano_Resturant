"use strict";
const navbar = document.querySelector("nav");
// change navbar position on scroll
window.addEventListener("scroll", () => {
    if (window.scrollY >= 500) {
        navbar.classList.add("sticky-nav");
    } else {
        navbar.classList.remove("sticky-nav");
    }
});
// dynamic active class in navbar
const allLinks = Array.from(document.querySelectorAll("nav ul li"));
// function toggles class active
function toggleActive(link) {
    allLinks.forEach((li) => {
        li.classList.remove("active");
    });
    link.classList.add("active");
}
// class active handler
if (window.location.href.includes("about")) {
    toggleActive(allLinks[1]);
} else if (window.location.href.includes("menu")) {
    toggleActive(allLinks[2]);
} else if (window.location.href.includes("blogs")) {
    toggleActive(allLinks[3]);
} else if (window.location.href.includes("contact")) {
    toggleActive(allLinks[4]);
} else if (window.location.href.includes("booking")) {
    toggleActive(allLinks[5]);
}
//
$(".statistics").each(function () {
    $(this)
        .prop("Counter", 0)
        .animate(
            {
                Counter: $(this).text(),
            },
            {
                duration: 5000,
                easing: "swing",
                step: function (now) {
                    $(this).text(Math.ceil(now));
                },
            }
        );
});
// testimonial section carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        767: {
            items: 2,
        },
        991: {
            items: 3,
        },
    },
});
// menu page > categories handler
const categoriesContainer = document.querySelector(".categories-container");
const allCategories = Array.from(
    document.querySelectorAll(".specialties-menu article")
);
const allMenuItems = Array.from(document.querySelectorAll(".categories li"));
// function controls categories classes & show certain category
function categoriesHandler(i) {
    allCategories.forEach((category) => {
        category.classList.add("hide-category");
        category.classList.remove("show-category");
    });
    allCategories[i].classList.add("show-category");
    categoriesContainer.innerHTML = "";
    categoriesContainer.appendChild(allCategories[i]);
}
// event show category on click
allMenuItems.forEach((item) => {
    item.addEventListener("click", () => {
        allMenuItems.forEach((item) => {
            item.classList.remove("active");
        });
        item.classList.add("active");
        if (item.textContent === "Breakfast") {
            categoriesHandler(0);
        } else if (item.textContent === "Lunch") {
            categoriesHandler(1);
        } else if (item.textContent === "Dinner") {
            categoriesHandler(2);
        } else if (item.textContent === "Drinks") {
            categoriesHandler(3);
        } else if (item.textContent === "Desserts") {
            categoriesHandler(4);
        }
    });
});
