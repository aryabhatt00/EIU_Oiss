// Dropdown menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown > a");

  dropdowns.forEach(toggle => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelectorAll(".dropdown").forEach(drop => {
        if (drop !== this.parentElement) {
          drop.classList.remove("open");
          const otherMenu = drop.querySelector(".dropdown-menu");
          if (otherMenu) otherMenu.style.display = "none";
        }
      });

      const dropdown = this.parentElement;
      const menu = dropdown.querySelector(".dropdown-menu");
      const isOpen = dropdown.classList.contains("open");

      dropdown.classList.toggle("open", !isOpen);
      if (menu) menu.style.display = isOpen ? "none" : "block";
    });
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown")) {
      document.querySelectorAll(".dropdown").forEach(drop => {
        drop.classList.remove("open");
        const menu = drop.querySelector(".dropdown-menu");
        if (menu) menu.style.display = "none";
      });
    }
  });
});

// Accordion
document.querySelectorAll('.accordion-title')?.forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    item.classList.toggle('active');
  });
});

// Active tile highlight
document.addEventListener('click', (e) => {
  const link = e.target.closest('.tile');
  if (!link) return;
  const list = link.closest('.tiles');
  if (!list) return;
  list.querySelectorAll('.tile.is-active').forEach(t => t.classList.remove('is-active'));
  link.classList.add('is-active');
});

// Timeline toggle
function toggleTimeline(header) {
  const body = header.nextElementSibling;
  const arrow = header.querySelector(".arrow");
  const isOpen = body.style.display === "block";

  document.querySelectorAll('.timeline-body').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.arrow').forEach(el => el.style.transform = 'rotate(0deg)');

  if (!isOpen) {
    body.style.display = "block";
    arrow.style.transform = "rotate(90deg)";
  }
}

// CPT Slider
const slides = document.querySelectorAll(".highlight-slider .slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  currentSlide = index;
}

function changeSlide(direction) {
  const totalSlides = slides.length;
  const newIndex = (currentSlide + direction + totalSlides) % totalSlides;
  showSlide(newIndex);
}

document.querySelector(".highlight-slider .prev")?.addEventListener("click", () => changeSlide(-1));
document.querySelector(".highlight-slider .next")?.addEventListener("click", () => changeSlide(1));

setInterval(() => changeSlide(1), 5000);
