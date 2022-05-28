const lodeMoreBtn = document.querySelector(".section__gallery-btn--loadMore");
const loader = document.querySelector(".loader__inner");
const notification = document.querySelector(".notification");

lodeMoreBtn.addEventListener("click", addImagesInGallery);

function galleryBestMasonry() {
  window.onload = () => {
    const grid = document.querySelector(".grid");

    const item = new Masonry(grid, {
      itemSelector: ".grid-item",
      columns: 3,
      gutter: 15,
      columnWidth: 374,
    });
  };
}

const actionSize = document.querySelector(".action-size");

const action = new Masonry(actionSize, {
  itemSelector: ".average",
  columns: 2,
  gutter: 3,
  columnWidth: 185,
});

const gridInner = document.querySelector(".action-inner");

const innerMasonry = new Masonry(gridInner, {
  itemSelector: ".smale",
  columns: 3,
  gutter: 2,
  columnWidth: 123,
});

function addImagesInGallery() {
  lodeMoreBtn.classList.add("btn-block");
  loader.classList.add("loader__show");

  setTimeout(() => {
    loader.classList.remove("loader__show");
    notification.classList.add("show-notification");
  }, 2000);
  setTimeout(() => {
    notification.classList.remove("show-notification");
    lodeMoreBtn.classList.remove("btn-block");
  }, 5000);
}

export default galleryBestMasonry;
