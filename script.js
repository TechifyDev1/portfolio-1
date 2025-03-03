document.addEventListener("DOMContentLoaded", function() {
    gsap.to("body", {opacity: 1, duration: 1});
    gsap.to(".project-card", {opacity: 1, y: 0, duration: 1, stagger: 0.2});

    const sideBarToggler = document.querySelector(".menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");

    sideBarToggler.addEventListener("click", () => {
        if (mobileNav.style.transform === "translateX(0%)") {
            mobileNav.style.transform = "translateX(100%)";
        } else {
            mobileNav.style.transform = "translateX(0%)";
        }
    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
        if (!mobileNav.contains(event.target) && !sideBarToggler.contains(event.target)) {
            mobileNav.style.transform = "translateX(-100%)";
        }
    });
});
