// Dark Mode Logic
const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

// Mobile Hamburger Menu Logic
const sideMenu = document.getElementById("side-menu");
const openBtn = document.getElementById("menu-open");
const closeBtn = document.getElementById("menu-close");

function toggleMenu() {
  sideMenu.classList.toggle("translate-x-full");
}

[openBtn, closeBtn].forEach((el) => el.addEventListener("click", toggleMenu));

// Fungsi untuk kembali ke atas
const backToTop = document.getElementById("back-to-top");
if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.remove("opacity-0", "pointer-events-none");
    backToTop.classList.add("opacity-100");
  } else {
    backToTop.classList.add("opacity-0", "pointer-events-none");
    backToTop.classList.remove("opacity-100");
  }
});

// Untuk navbar agar bisa deteksi section mana yang sedang aktif saat di scroll
const sections = document.querySelectorAll("section");
const desktopLinks = document.querySelectorAll(".nav-link");
const mobileLinks = document.querySelectorAll(".nav-link-mobile");

const observerOptions = {
  root: null,
  threshold: 0.4,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");

      // Update Desktop Links
      desktopLinks.forEach((link) => {
        const isActive = link.getAttribute("data-section") === id;
        link.classList.toggle("text-main", isActive);
        link.classList.toggle("font-semibold", isActive);
      });

      // Update Mobile Links
      mobileLinks.forEach((link) => {
        const isActive = link.getAttribute("data-section") === id;
        link.classList.toggle("text-main", isActive);
        link.classList.toggle("font-semibold", isActive);
      });
    }
  });
}, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Panggil fungsi toggleMenu yang sudah kita buat sebelumnya
    toggleMenu();
  });
});
