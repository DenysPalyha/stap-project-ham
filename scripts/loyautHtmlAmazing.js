function loyautHtmlAmazing(item) {
  return `
      <div class="section__amazing-card" data-amazing=${item.dataAll}>
      <div class="section__amazing-front">
        <img
          src=${item.url}
          alt=${item.alt}
          class="section__amazing-img--front"
        />
      </div>
      <div class="section__amazing-hiden">
        <div class="section__amazing-hiden--inner">
          <button type="button" class="section__amazing-hiden--btn">
            <svg class="icon-layer">
              <use href="./img/icon/amazing-worck.svg#icon-shape"></use>
            </svg>
          </button>
          <button type="button" class="section__amazing-hiden--btn">
            <svg class="icon-shape">
              <use href="./img/icon/amazing-worck.svg#icon-layer"></use>
            </svg>
          </button>
        </div>
        <h2 class="section__amazing-hiden--heading">creative design</h2>
        <p class="section__amazing-hiden--text">${item.description}</p>
      </div>
    </div>
  </div>
      `;
}

export default loyautHtmlAmazing;
