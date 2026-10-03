const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Mobile menu
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

// Automatically show current year in footer
document.getElementById("year").textContent = new Date().getFullYear();
