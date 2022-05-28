function loyautHtmlAbout(item) {
  return `
    <div class="section__about-dataElem">
            <p class="section__about-info--text">${item.description}</p>
                <p class="section__about-info--name">${item.name}</p>
                    <p class="section__about-info--prof">${item.profession}</p>
                <div class="section__about-info--bg">
            <img class="section__about-info--img" src=${item.url} alt=${item.name}>
        </div>
    </div>
    `;
}

export default loyautHtmlAbout;
