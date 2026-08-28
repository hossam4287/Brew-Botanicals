document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       MOBILE MENU
    ========================================== */

    const menuButton =
        document.getElementById("mobileMenuBtn");

    const mobileMenu =
        document.getElementById("mobileMenu");


    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("open");

    });


    /* ==========================================
       BUTTON PRESS EFFECT
    ========================================== */

    const buttons =
        document.querySelectorAll(
            ".primary-btn, .secondary-btn, .nav-order-btn"
        );


    buttons.forEach(button => {

        button.addEventListener("mousedown", () => {

            button.style.transform =
                "scale(0.96)";

        });


        button.addEventListener("mouseup", () => {

            button.style.transform =
                "scale(1)";

        });


        button.addEventListener("mouseleave", () => {

            button.style.transform =
                "scale(1)";

        });

    });


    /* ==========================================
       SCROLL REVEAL
    ========================================== */

    const sections =
        document.querySelectorAll(
            ".featured, .story, .footer"
        );


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                });

            },
            {
                threshold: 0.08
            }
        );


    sections.forEach(section => {

        section.classList.add("reveal");

        observer.observe(section);

    });


    /* ==========================================
       NEWSLETTER
    ========================================== */

    const newsletter =
        document.querySelector(".newsletter form");


    if (newsletter) {

        newsletter.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                const input =
                    newsletter.querySelector("input");

                if (!input.value.trim()) {

                    input.focus();

                    return;

                }

                alert(
                    "Thank you for joining our botanical society!"
                );

                input.value = "";

            }
        );

    }

});