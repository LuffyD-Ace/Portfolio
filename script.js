document.addEventListener("DOMContentLoaded", () => {
  // Scroll Animation
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.2}s`;
  });

  // Darkmode Toggle Switch (Apple Style)
  const toggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggle.checked = true; // iOS-Style Switch aktiv
  }

  toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    const mode = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", mode);
  });

  // Typewriter Effekt
  const typewriter = document.getElementById("typewriter");
  const text = "Hi, ich bin Ricci";
  let index = 0;
  function type() {
    if (typewriter && index < text.length) {
      typewriter.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }
  type();
});

// Formular Bestätigung
function showMessage() {
  const confirmText = document.getElementById("confirmation");
  if (confirmText) {
    confirmText.style.display = "block";
    setTimeout(() => (confirmText.style.display = "none"), 4000);
  }
  return true;
}

