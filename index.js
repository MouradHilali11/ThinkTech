const bars = document.querySelector("#bars");
const x = document.querySelector(".x_close");

function showSideBar() {
  const menu = document.querySelector(".header_navigation");
  menu.style.display = "flex";
}
function hideSideBar() {
  const menu = document.querySelector(".header_navigation");
  menu.style.display = "none";
}
bars.addEventListener("click", showSideBar);
x.addEventListener("click", hideSideBar);

const cardContainer = document.getElementById('cardsContainer');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const cardWidth = document.querySelector('.projects_card_img').offsetWidth;
  
  prevButton.addEventListener('click', () => {
    cardContainer.scrollBy({
      left: - cardWidth,
      behavior: 'smooth'
    });
  });
  
  nextButton.addEventListener('click', () => {
    cardContainer.scrollBy({
      left: cardWidth,
      behavior: 'smooth'
    });
  });
