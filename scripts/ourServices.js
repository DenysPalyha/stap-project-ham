const btnServiceWrapper = document.querySelector(
  ".section__services-btn_wrapper-js"
);
const servicesContact = document.querySelector(
  ".section__services-search_content-js"
);

const isOurServices = () => {
  btnServiceWrapper.addEventListener("click", showTabsCard);
};

function showTabsCard(e) {
  if (e.target === e.currentTarget) {
    return;
  }
  getActiveClassAndRemove();

  const getDataSetBtn = e.target.dataset.namebtn;

  const getDataServicesContent = document.querySelector(
    `div[ data-nameText="${e.target.dataset.namebtn}"]`
  );

  if (getDataSetBtn === getDataServicesContent.dataset.nametext) {
    e.target.classList.add("active");
    getDataServicesContent.classList.add("show-content");
  }
}

function getActiveClassAndRemove() {
  const activeBtn = btnServiceWrapper.querySelector(".active");
  const showContentActive = servicesContact.querySelector(".show-content");

  if (activeBtn) {
    activeBtn.classList.remove("active");
    showContentActive.classList.remove("show-content");
  }
}

export default isOurServices;
