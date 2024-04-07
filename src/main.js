import fetchImg from '../src/js/pixabay-api';
import addHTML from '../src/js/render-functions';

const refs = {
  form: document.querySelector('.main-form'),
  gallery: document.querySelector('.gallery'),
};
const { form, gallery } = refs;
form.addEventListener('submit', fetchRequest);

function fetchRequest(e) {
  e.preventDefault();

  const inputValue = e.target.elements.request.value.trim();

  if (!inputValue) {
    return;
  }

  createElements(inputValue);
}

function createElements(inputValue) {
  gallery.innerHTML = '';
  let cardArray = fetchImg(inputValue);
  console.log(cardArray);
  addHTML(cardArray);
}
