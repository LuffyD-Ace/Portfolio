document.addEventListener("DOMContentLoaded", () => {
  // Scroll Animation Delay
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.2}s`;
  });

  // Dark Mode Umschalter
  const toggleButton = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const mode = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", mode);
  });

  // Typewriter Effekt
  const text = "Hi, ich bin [Dein Name]";
  const typewriter = document.getElementById("typewriter");
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