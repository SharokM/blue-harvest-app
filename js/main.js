const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("navbar-links");
const menuBtnIcon = menuBtn.querySelector("i");

// NAVBAR LINK AND NAV BAR ID/ CLASS MAY BE CONFUSED, FIX NAV BAR

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open")
    menuBtnIcon.setAttribute("class", "ri-menu-line")
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header-image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header-content h2", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header-content h1", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".order-card", {
    ...scrollRevealOption,
    interval:500,
});

ScrollReveal().reveal(".event-content", {
    duration: 1000,
});

