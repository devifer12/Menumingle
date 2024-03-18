let menuLines = document.querySelector(".ri-menu-3-fill");
let menucross = document.querySelector(".ri-close-fill");
let navBar = document.querySelectorAll(".nav-links a");
let navLinks = document.querySelector(".nav-links");
let open = true;

// Function to handle the click event for the menu lines
function handleMenuClick() {
    if (open) {
        menucross.classList.add("close");
        menucross.classList.remove("ri-close-fill");
        navLinks.classList.add("mobile-links");
        setTimeout(() => {
            navBar.forEach((a) => {
                a.classList.remove("active");
                a.style.fontSize = "5vw";
            });
        }, 200); // Adjust the delay (in milliseconds) according to your preference
        open = false;
    }
    menucross.classList.remove("close");
    menucross.classList.add("ri-close-fill");
    menuLines.classList.remove("ri-menu-3-fill");
}

// Function to handle the click event for the menu cross
function handleCrossClick() {
    if (!open) {
        navBar.forEach((a) => {
            a.classList.add("active");
            a.style.fontSize = "1.4vw";
        });
        navLinks.classList.remove("mobile-links");
        open = true;
    }
    menucross.classList.add("close");
    menucross.classList.remove("ri-close-fill");
    menuLines.classList.add("ri-menu-3-fill");
}

// Function to check window width and toggle event listeners
function toggleEventListeners() {
    if (window.innerWidth < 900) {
        // If the window width is < 900, add the event listeners
        menuLines.addEventListener("click", handleMenuClick);
        menucross.addEventListener("click", handleCrossClick);
    } else {
        // If the window width is >= 900, ensure that the mobile-links class is removed
        menuLines.removeEventListener("click", handleMenuClick);
        menucross.removeEventListener("click", handleCrossClick);
        // If the window width is >= 900, ensure that the mobile-links class is removed
        navLinks.classList.remove("mobile-links");
        navBar.forEach((a) => {
            a.style.fontSize = "1.4vw";
        });

    }
}

// Call the function initially
toggleEventListeners();

// Listen for window resize events
window.addEventListener("resize", toggleEventListeners);
