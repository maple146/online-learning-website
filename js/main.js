// Highlight list item

let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");
let navigationBar = document.getElementById("navigation-bar");

function stickyNavbar() {
    window.addEventListener("scroll", () => {
        let fromTop = window.scrollY;
        mainNavLinks.forEach(link => {
            let section = document.querySelector(link.hash);
            // Highlight list item
            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                link.classList.add("current");
            } else {
                link.classList.remove("current");
            }
            // Change navbar color on scroll
            if (fromTop > 100) {
                navigationBar.classList.add("change-navbar-color");
            } else {
                navigationBar.classList.remove("change-navbar-color");
            }
        });
        console.log(fromTop);
    });
}

stickyNavbar();