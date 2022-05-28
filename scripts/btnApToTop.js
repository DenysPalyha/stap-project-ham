const btnWrapperToTop = document.querySelector(".btn__up-wrapper");
const btnToTop = document.querySelector(".btn__to-top");

function isApToTop() {
  window.addEventListener("scroll", handleScroll);
}

function handleScroll() {
  if (window.pageYOffset >= document.documentElement.clientHeight) {
    btnWrapperToTop.classList.add("show-btn-toTop");
  } else {
    btnWrapperToTop.classList.remove("show-btn-toTop");
  }
}

btnToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

export default isApToTop;
