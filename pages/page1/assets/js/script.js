window.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("zeus-title");
  const desc = document.getElementById("zeus-description");

  title.style.opacity = 0;
  desc.style.opacity = 0;

  setTimeout(() => {
    title.style.transition = "all 1s ease";
    title.style.opacity = 1;
    title.style.transform = "translateX(0)";
  }, 300);

  setTimeout(() => {
    desc.style.transition = "all 1s ease";
    desc.style.opacity = 1;
    desc.style.transform = "translateX(0)";
  }, 700);
});
