document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      sections.forEach((section) =>
        section.removeAttribute("transition-style")
      );

      targetSection.setAttribute("transition-style", "in:wipe:up");

      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});
