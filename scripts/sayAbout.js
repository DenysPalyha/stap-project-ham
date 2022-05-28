import aboutItems from "./about-items.js";
import loyautHtmlAbout from "./loyautHtmlAbout.js";

const btnPrev = document.querySelector(".btnPrev");
const btnNext = document.querySelector(".btnNext");
const sectionCoruselIcon = document.querySelector(
  ".section__about-inner--icon"
);
const aboutDescriptionWrapper = document.querySelector(
  ".section__about-wrapper"
);
const sectionAboutHiden = document.querySelector(".section__about-inner--icon");

const isSayAboutSection = () => {
  btnPrev.addEventListener("click", isActionBtnToSidePrev);
  btnNext.addEventListener("click", isActionBtnToSideNext);
  sectionAboutHiden.addEventListener("click", isActionBtnCoruselColection);
};

$(".section__about-inner--icon").css({
  "margin-left": "435px",
});

let currentValue = 1;

const currentImagesNext = document.getElementById(`${currentValue}`);
currentImagesNext.style.bottom = "10px";

isAboutDesc(currentValue);

function isActionBtnToSidePrev() {
  isActivPosition();
  if (currentValue > 1) {
    currentValue -= 1;
  }
  isAboutDesc(currentValue);
  animateBtnPrev(currentValue);

  const currentImagesNext = document.getElementById(`${currentValue}`);
  currentImagesNext.classList.add("active__say");
  animateElemShow(currentImagesNext);
}

function isActionBtnToSideNext() {
  isActivPosition();

  if (currentValue <= aboutItems.length - 1) {
    currentValue += 1;
  }

  isAboutDesc(currentValue);
  animateBtnNext(currentValue);

  const currentImagesNext = document.getElementById(`${currentValue}`);
  currentImagesNext.classList.add("active__say");
  currentImagesNext.style.bottom = "0";
  animateElemShow(currentImagesNext);
}

function isActionBtnCoruselColection(e) {
  const target = e.target;
  if (target === e.currentTarget) {
    return;
  }
  if (target.nodeName === "DIV") {
    return;
  }

  isActivPosition();

  currentValue = Number(target.parentElement.id);
  isCoruselColectionDesc(target.dataset.imgabout);

  animatePositionCorusel(currentValue);
  animateCoruselPrevPosition(currentValue);

  const currentImagesNext = document.getElementById(
    `${target.parentElement.id}`
  );
  currentImagesNext.classList.add("active__say");
  animateElemShow(currentImagesNext);
}

function isActivPosition() {
  const isActiv = sectionCoruselIcon.querySelector(".active__say");
  const isElemData = document.querySelector(".section__about-dataElem");
  if (isActiv) {
    isActiv.classList.remove("active__say");
    animateElemHiden(isActiv);
    isElemData.remove();
  }
}

function isAboutDesc(currentId) {
  const currentDescItem = aboutItems.filter((item) => item.id === currentId);
  const htmlCurrentDeskItem = currentDescItem.map((item) => {
    return loyautHtmlAbout(item);
  });

  aboutDescriptionWrapper.insertAdjacentHTML(
    "beforeend",
    htmlCurrentDeskItem.join("")
  );
}

function isCoruselColectionDesc(imgAboutData) {
  const dataCurrentItem = aboutItems.filter(
    (item) => item.data === imgAboutData
  );
  const htmlDataCurrentItem = dataCurrentItem.map((item) => {
    return loyautHtmlAbout(item);
  });

  aboutDescriptionWrapper.insertAdjacentHTML(
    "beforeend",
    htmlDataCurrentItem.join("")
  );
}

// ____________section animate function______________________________

function animateElemShow(currentImages) {
  $(`#${currentImages.id}`).animate(
    {
      bottom: "10px",
    },
    300
  );
}

function animateElemHiden(currentImages) {
  $(`#${currentImages.id}`).animate(
    {
      bottom: "0",
    },
    300
  );
}

function animateBtnPrev(num) {
  if (num <= 4) {
    $(".section__about-inner--icon").animate(
      {
        "margin-left": "435px",
        "margin-right": "0px",
      },
      1000
    );
  }
}

function animateBtnNext(num) {
  if (num >= 5) {
    $(".section__about-inner--icon").animate(
      {
        "margin-right": "435px",
        "margin-left": "0px",
      },
      1000
    );
  }
}

function animatePositionCorusel(num) {
  if (num === 7) {
    $(".section__about-inner--icon").animate(
      {
        "margin-right": "215px",
        "margin-left": "0px",
      },
      1000
    );
  }

  if (num === 4) {
    $(".section__about-inner--icon").animate(
      {
        "margin-right": "215px",
        "margin-left": "0px",
      },
      1000
    );
  }
}

function animateCoruselPrevPosition(num) {
  if (num === 5) {
    $(".section__about-inner--icon").animate(
      {
        "margin-right": "0px",
        "margin-left": "215px",
      },
      1000
    );
  }

  if (num === 6) {
    $(".section__about-inner--icon").animate(
      {
        "margin-right": "435px",
        "margin-left": "0px",
      },
      1000
    );
  }

  if (num === 3) {
    $(".section__about-inner--icon").animate(
      {
        "margin-left": "435px",
      },
      1000
    );
  }

  if (num === 2) {
    $(".section__about-inner--icon").animate(
      {
        "margin-left": "215px",
      },
      1000
    );
  }
}

// ____________section animate function______________________________

export default isSayAboutSection;
