document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const mainNav = document.getElementById("mainNav");

  if (!menuButton || !mainNav) {
    return;
  }

  menuButton.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("active");

    menuButton.classList.toggle("active", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Fermer le menu" : "Ouvrir le menu",
    );

    document.body.classList.toggle("menu-open", isOpen);
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("active");
      menuButton.classList.remove("active");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Ouvrir le menu");
      document.body.classList.remove("menu-open");
    });
  });

  /*
   * Smooth reveal of project images and sections.
   * The content remains visible if IntersectionObserver
   * is not available.
   */

  const revealElements = document.querySelectorAll(
    ".project, .about-layout, .contact-layout",
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observerInstance.unobserve(entry.target);
        });
      },
      {
        threshold: 0.08,
      },
    );

    revealElements.forEach((element) => {
      element.classList.add("reveal");
      observer.observe(element);
    });
  }

  /*
   * Close the mobile menu when the viewport becomes larger.
   */

  window.addEventListener("resize", () => {
    if (window.innerWidth > 850) {
      mainNav.classList.remove("active");
      menuButton.classList.remove("active");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Ouvrir le menu");
      document.body.classList.remove("menu-open");
    }
  });
});
