document.addEventListener("DOMContentLoaded", () => {
  // Dark Mode Umschalter
  const toggleButton = document.getElementById("theme-toggle");
  const mobileToggle = document.getElementById("mobile-theme-toggle");
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  const applyTheme = (theme) => {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("theme", theme);
  };

  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) applyTheme(currentTheme);

  const toggleTheme = () => {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  if (toggleButton) toggleButton.addEventListener("click", toggleTheme);
  if (mobileToggle) mobileToggle.addEventListener("click", toggleTheme);

  // Mobiles Menü öffnen/schließen
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.style.left = mobileMenu.style.left === "0%" ? "-100%" : "0%";
    });
  }

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