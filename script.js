document.querySelectorAll(".accordion-header").forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    content.style.maxHeight
      ? content.style.maxHeight = null
      : content.style.maxHeight = content.scrollHeight + "px";
  });
});
