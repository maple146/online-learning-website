// Highlight list item

let navigationBar = document.getElementById("navigation-bar");
// This includes the title as a link (mainNavLinks doesn't include it)
let navigationBarLinks = document.querySelectorAll(".nav-link"); 

let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");

function stickyNavbar() {
    window.addEventListener("scroll", () => {
        let fromTop = window.scrollY;

        // Highlight current list item
        mainNavLinks.forEach(link => {
            let section = document.querySelector(link.hash);
            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                link.classList.add("current-item");
            } else {
                link.classList.remove("current-item");
            }
        });
        // Change navbar background color and list items font color
        if (fromTop > 1) {
            navigationBar.classList.add("change-navbar-color");
            navigationBarLinks.forEach(e => e.style.color = "black");
        } else {
            navigationBar.classList.remove("change-navbar-color");
            navigationBarLinks.forEach(e => e.style.color = "white");
        }
        // Change navbar size
        if (fromTop > 50) {
            document.getElementById("navigation-bar").style.height = "4rem";
        } else {
            document.getElementById("navigation-bar").style.height = "6rem";
        }
        console.log(fromTop);
    });
}

stickyNavbar();