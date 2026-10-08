// Marca el enlace activo del menú según la página actual
document.addEventListener("DOMContentLoaded", () => {
  const actual = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    if (a.getAttribute("href") === actual) a.classList.add("active");
  });

  // Año dinámico en el footer
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Formulario de contacto (demostración, sin backend)
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const msg = document.getElementById("form-msg");
      msg.style.display = "block";
      form.reset();
    });
  }
});
