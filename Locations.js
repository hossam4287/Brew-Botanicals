
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");

    const icon = mobileMenuBtn.querySelector(".material-symbols-outlined");

    if (mobileMenu.classList.contains("show")) {
        icon.textContent = "close";
    } else {
        icon.textContent = "menu";
    }
});


/* Close mobile menu after clicking a link */

const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("show");

        const icon = mobileMenuBtn.querySelector(
            ".material-symbols-outlined"
        );

        icon.textContent = "menu";
    });
});


/* Close menu when clicking outside */

document.addEventListener("click", (event) => {

    if (
        !mobileMenu.contains(event.target) &&
        !mobileMenuBtn.contains(event.target)
    ) {
        mobileMenu.classList.remove("show");

        const icon = mobileMenuBtn.querySelector(
            ".material-symbols-outlined"
        );

        icon.textContent = "menu";
    }

});
