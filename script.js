const buttonSearch = document.querySelector('.search-hotel-button');
const modal = document.querySelector('.modal-form');

buttonSearch.addEventListener('click', function () {
  modal.classList.add('modal-show');
});
