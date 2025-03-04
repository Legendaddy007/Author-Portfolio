document.getElementById("scrollTopBtn").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("scrollBottomBtn").addEventListener("click", function () {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});

// Get button elements
const scrollTopBtn = document.getElementById("scrollTopBtn");
const scrollBottomBtn = document.getElementById("scrollBottomBtn");

// Function to check scroll position and show/hide buttons
function handleScroll() {
    // Show "Top" button only if not at the top
    if (window.scrollY > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }

    // Show "Bottom" button only if not at the bottom
    if (window.innerHeight + window.scrollY < document.body.scrollHeight - 100) {
        scrollBottomBtn.style.display = "block";
    } else {
        scrollBottomBtn.style.display = "none";
    }
}

// Scroll event listener
window.addEventListener("scroll", handleScroll);

// Scroll to top
scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Scroll to bottom
scrollBottomBtn.addEventListener("click", function () {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});

// Initialize button visibility on page load
handleScroll();

