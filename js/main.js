let navigationBar = document.getElementById("navigation-bar");
// navigationBarLinks includes the site logo as a link so the color gets changed on scroll too
let navigationBarLinks = document.querySelectorAll(".nav-link"); 
let navigationBarItems = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");

function stickyNavbar() {
    window.addEventListener("scroll", () => {
        let fromTop = window.scrollY;

        // Change navbar background color and list items color
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

        // Highlight list current active item
        navigationBarItems.forEach(link => {
            let section = document.querySelector(link.hash);
            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
        // console.log(fromTop);
    });
}

stickyNavbar();