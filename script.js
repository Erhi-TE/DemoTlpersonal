document.querySelectorAll(".accordion-header").forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.maxHeight =
      content.style.maxHeight ? null : content.scrollHeight + "px";
  });
});
