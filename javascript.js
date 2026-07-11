
function myFunction() {
  document.body.classList.toggle("dark-mode");
}

function toggleMenu() {
  document.getElementById("navbar").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("projects-slider");
  const prevBtn = document.querySelector(".slider-control.prev");
  const nextBtn = document.querySelector(".slider-control.next");

  if (slider && prevBtn && nextBtn) {
    const scrollAmount = 324; // Card width (300px) + gap (24px)

    prevBtn.addEventListener("click", () => {
      slider.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
      });
    });

    nextBtn.addEventListener("click", () => {
      slider.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    });

    // Toggle navigation buttons' opacity and clickability based on scroll position
    const toggleButtons = () => {
      const isAtStart = slider.scrollLeft <= 5;
      const isAtEnd = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5;

      prevBtn.style.opacity = isAtStart ? "0.3" : "1";
      prevBtn.style.pointerEvents = isAtStart ? "none" : "auto";

      nextBtn.style.opacity = isAtEnd ? "0.3" : "1";
      nextBtn.style.pointerEvents = isAtEnd ? "none" : "auto";
    };

    slider.addEventListener("scroll", toggleButtons);
    // Initial check
    toggleButtons();
    // Check again on window resize
    window.addEventListener("resize", toggleButtons);
  }
});