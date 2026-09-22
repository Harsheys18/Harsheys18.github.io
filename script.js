// Footer year.
const yearTarget = document.getElementById("year");

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

// Mark the current page in the nav even if the markup misses it (e.g. a new
// blog post added later without touching the header).
const here = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".site-nav a").forEach((link) => {
  const target = link.getAttribute("href").split("/").pop();
  if (target === here) {
    link.classList.add("active");
  }
});
