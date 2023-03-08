const text = document.getElementById("demo-text");

window.addEventListener("scroll", () => {
  //   console.log(window.scrollY);
  text.style.left = `calc(110% - ${window.scrollY}px)`;
  text.style.top = ` ${window.scrollY + 350}px`;
});
