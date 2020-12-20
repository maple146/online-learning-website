// Nav section

// Variables
let navigationBar = document.getElementById("navigation-bar");
let websiteName = document.getElementById("website-name");
let navigationBarList = document.getElementById("navigation-bar-list");
// navigationBarListLinks includes the website name as a link
let navigationBarListLinks = document.querySelectorAll(".nav-link"); 
let navigationBarListItems = document.querySelectorAll("nav ul li a");
let mobileMenuIcon = document.getElementById("mobile-menu-icon");
let mainSections = document.querySelectorAll("main section");


// Sticky navbar
// This function will change the navbar background color and size when it's scrolled
// and will highlight the currect section on display.

function stickyNavbar() {
    window.addEventListener("scroll", () => {
        let fromTop = window.scrollY;
        // Change navbar background color and navbar list items color on scroll
        if (fromTop > 1) {
            navigationBar.classList.add("change-navbar-color");
            navigationBarListLinks.forEach(e => e.style.color = "#414141");
        } else {
            navigationBar.classList.remove("change-navbar-color");
            navigationBarListLinks.forEach(e => e.style.color = "#fafafa");
        }
        // Change navbar size on scroll
        if (fromTop > 50) {
            document.getElementById("navigation-bar").style.height = "4rem";
        } else {
            document.getElementById("navigation-bar").style.height = "6rem";
        }
        // Highlight list current active item based on the current section
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



// ### Custom mobile navbar menu ###

// This function will execute when you open the mobile navbar menu
// It's going to create a menu that will fill the entire screen, disable scrolling
// and display all the navbar items on a column. 

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


// This function will execute when you close the mobile navbar menu
// This will undo all the previous styles changes and return navbar to normal.

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

function focusInput() {
  document.getElementById("email").focus();
  document.documentElement.scrollTop = 0; 
}
