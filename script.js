document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.2}s`;
  });

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

  const typewriter = document.getElementById("typewriter");
  const text = "Hi, ich bin [Dein Name]";
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

function showMessage() {
  const confirmText = document.getElementById("confirmation");
  if (confirmText) {
    confirmText.style.display = "block";
    setTimeout(() => (confirmText.style.display = "none"), 4000);
  }
  return true;
}