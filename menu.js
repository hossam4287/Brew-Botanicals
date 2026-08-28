/* =========================
   MOBILE MENU
========================= */

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuBtn.addEventListener("click", function () {

    mobileMenu.classList.toggle("show");

    const icon = mobileMenuBtn.querySelector(".material-symbols-outlined");

    if (mobileMenu.classList.contains("show")) {
        icon.textContent = "close";
    } else {
        icon.textContent = "menu";
    }

});


/* =========================
   CLOSE MOBILE MENU
========================= */

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.remove("show");

        const icon =
            mobileMenuBtn.querySelector(".material-symbols-outlined");

        icon.textContent = "menu";

    });

});


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 20) {

        navbar.style.boxShadow =
            "0 5px 20px rgba(39, 19, 16, 0.10)";

    } else {

        navbar.style.boxShadow =
            "0 2px 12px rgba(39, 19, 16, 0.06)";

    }

});


/* =========================
   SIMPLE SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".menu-panel, .slow-bar, .botanicals, .beyond-section"
);

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform = "translateY(25px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});


/* =========================
   BUTTON PRESS EFFECT
========================= */

document.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

        this.style.transform = "scale(.97)";

        setTimeout(() => {
            this.style.transform = "";
        }, 120);

    });

}); 