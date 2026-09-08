document.addEventListener("DOMContentLoaded", () => {

  // Smooth scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });


  // Add a shadow to the header after scrolling
  const header = document.querySelector(".topbar");

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        header.style.boxShadow = "0 10px 30px rgba(0,35,90,.16)";
      } else {
        header.style.boxShadow = "0 6px 25px rgba(0,35,90,.08)";
      }
    });
  }


  // Reveal sections gently as they enter the screen
  const revealItems = document.querySelectorAll(
    ".service-card, .split-content, .wildlife-content, .about-grid, .contact-card"
  );

  revealItems.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(24px)";
    item.style.transition = "opacity .7s ease, transform .7s ease";
  });


  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });


  revealItems.forEach(item => {
    observer.observe(item);
  });

});
