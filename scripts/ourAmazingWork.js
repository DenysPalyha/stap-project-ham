import items from "./amazing-items.js";
import loyautHtmlAmazing from "./loyautHtmlAmazing.js";

const amazingWrapperSection = document.querySelector(
  ".section__amazing-btn--wrapper"
);
const wrapperCard = document.querySelector(".section__amazing-img--wrapper");
const btnLoadMore = document.querySelector(
  ".section__amazing-loadMore--wrapper"
);

const loader = document.querySelector(".loader__wrapper");

const isOurAmazingWork = () => {
  amazingWrapperSection.addEventListener("click", showImagesColection);
  btnLoadMore.addEventListener("click", loadMoreAddImages);
};

isCategoryAllAddColectionsImages();

function showImagesColection(e) {
  const dataNameBtn = e.target.dataset.amazing;
  if (e.target === e.currentTarget) {
    return;
  }

  isActivTab();
  if (dataNameBtn === "all") {
    isCategoryAllAddColectionsImages();
  }
  if (dataNameBtn === "graphic") {
    isAddColectionsImeges(dataNameBtn);
  }
  if (dataNameBtn === "web") {
    isAddColectionsImeges(dataNameBtn);
  }
  if (dataNameBtn === "landing") {
    isAddColectionsImeges(dataNameBtn);
  }
  if (dataNameBtn === "wordpress") {
    isAddColectionsImeges(dataNameBtn);
  }
  e.target.classList.add("active-amazing");
}

function isActivTab() {
  const isActiveAmazing =
    amazingWrapperSection.querySelector(".active-amazing");
  const childrenElemCard = document.querySelectorAll(".section__amazing-card");
  const loadMoreHiden = btnLoadMore.querySelector(".load-more-hiden");

  if (isActiveAmazing) {
    isActiveAmazing.classList.remove("active-amazing");
    childrenElemCard.forEach((elem) => wrapperCard.removeChild(elem));

    if (loadMoreHiden !== null) {
      loadMoreHiden.classList.remove("load-more-hiden");
    }
  }
}

function loadMoreAddImages(e) {
  if (e.target === e.currentTarget) {
    return;
  }

  const activeBtn = amazingWrapperSection.querySelector(".active-amazing");

  const dataElem = activeBtn.dataset.amazing;

  if (dataElem === "all") {
    loader.classList.add("loader__active");
    btnLoadMore.classList.add("load-more-hiden");
    setTimeout(() => {
      loader.classList.remove("loader__active");
      btnLoadMore.classList.remove("load-more-hiden");
      isCategoryAllAddColectionsImages();
    }, 2000);
  }

  if (
    dataElem === "graphic" ||
    dataElem === "web" ||
    dataElem === "landing" ||
    dataElem === "wordpress"
  ) {
    loader.classList.add("loader__active");
    btnLoadMore.classList.add("load-more-hiden");
    setTimeout(() => {
      loader.classList.remove("loader__active");
      btnLoadMore.classList.remove("load-more-hiden");
      isAddColectionsImeges(dataElem);
    }, 2000);
  }

  if (wrapperCard.childElementCount === 24) {
    e.target.classList.add("load-more-hiden");
  }
}

function isCategoryAllAddColectionsImages() {
  const sirtItems = items.sort(() => Math.random() - 0.5);

  const newAtemsList = sirtItems.slice(0, 12);
  const htmlItemsColection = newAtemsList.map((item) => {
    return loyautHtmlAmazing(item);
  });
  wrapperCard.insertAdjacentHTML("beforeend", htmlItemsColection.join(" "));
}

function isAddColectionsImeges(dataNameBtn) {
  const graphicItems = items.filter((item) => item.data === dataNameBtn);
  const htmlGraphicItems = graphicItems.map((item) => {
    return loyautHtmlAmazing(item);
  });
  wrapperCard.insertAdjacentHTML("beforeend", htmlGraphicItems.join(" "));
}

export default isOurAmazingWork;
