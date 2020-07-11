// Nav section
// #navigation-bar
let navigationBar = document.getElementById("navigation-bar");

    // #website-name
    let websiteName = document.getElementById("website-name");

    // #navigation-bar-list
    let navigationBarList = document.getElementById("navigation-bar-list");

        // navigationBarListLinks includes the website name as a link
        let navigationBarListLinks = document.querySelectorAll(".nav-link"); 
        let navigationBarListItems = document.querySelectorAll("nav ul li a");

    // #mobile-menu-icon
    let mobileMenuIcon = document.getElementById("mobile-menu-icon");

// Main section
let mainSections = document.querySelectorAll("main section");

function stickyNavbar() {
    window.addEventListener("scroll", () => {
        let fromTop = window.scrollY;

        // Change navbar background color and navbar list items color
        if (fromTop > 1) {
            navigationBar.classList.add("change-navbar-color");
            navigationBarListLinks.forEach(e => e.style.color = "var(--dark-color)");
        } else {
            navigationBar.classList.remove("change-navbar-color");
            navigationBarListLinks.forEach(e => e.style.color = "var(--light-color)");
        }

        // Change navbar size
        if (fromTop > 50) {
            document.getElementById("navigation-bar").style.height = "4rem";
        } else {
            document.getElementById("navigation-bar").style.height = "6rem";
        }

        // Highlight list current active item
        navigationBarListItems.forEach(link => {
            let section = document.querySelector(link.hash);
            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    });
}

stickyNavbar();


function openMenu() {
    mobileMenuIcon.addEventListener('click', () => {
        navigationBar.classList.toggle("active-mobile-menu");
        navigationBarListLinks.forEach(e => e.style.color = "var(--light-color)");
        navigationBarList.classList.toggle("display");
        websiteName.classList.toggle("hide");
        if (navigationBar.classList.contains('active-mobile-menu')) {
            disableScroll();
        } else {
            enableScroll();
        }
        console.log("Clicked mobile menu icon")
    });
}

openMenu();


function closeMenu() {
    for (let i = 0; i < navigationBarListItems.length; i++) {
        navigationBarListItems[i].addEventListener('click', () => {
            navigationBar.classList.remove("active-mobile-menu");
            navigationBarListLinks.forEach(e => e.style.color = "var(--dark-color)");
            navigationBarList.classList.remove("display");
            websiteName.classList.remove("hide");
            console.log("Clicked nav link")
            enableScroll();
        });
    }
}

closeMenu();


function disableScroll() { 
    document.body.classList.add("stop-scrolling"); 
} 

function enableScroll() { 
    document.body.classList.remove("stop-scrolling"); 
} 
