document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.getElementById("theme-switch");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggleSwitch.checked = true;
  }

  toggleSwitch.addEventListener("change", () => {
    if (toggleSwitch.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  });

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
