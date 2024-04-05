import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

function createMarkupElement({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<li class="gallery-item">
 <a class="gallery-link" href="${largeImageURL}">  

    <img src="${webformatURL}" alt="${tags}" class="image">
    </img>
  </a>
        <ul class="stats-list">
            <li class="stats-item">
                <h3 class="stats-header">Likes</h3>
                <p class="stats-p">${likes}</p>
            </li>
            <li class="stats-item">
                <h3 class="stats-header">Views</h3>
                <p class="stats-p">${views}</p>
            </li>
            <li class="stats-item">
                <h3 class="stats-header">Comments</h3>
                <p class="stats-p">${comments}</p>
            </li>
            <li class="stats-item">
                <h3 class="stats-header">Downloads</h3>
                <p class="stats-p">${downloads}</p>
            </li>
        </ul>
</li>`;
}

function joinArr(arr) {
  return arr.join('');
}

function addDOM(str) {
  gallery.insertAdjacentHTML('beforeend', str);
}

function addLightBox() {
  const box = new SimpleLightbox('.gallery-link');
  const a = document.querySelectorAll('.gallery-link');
  a.forEach(element => {
    element.SimpleLightbox;
  });
}

function addHTML(params) {
  params
    .then(({ hits }) => hits)
    .then(hits => {
      return hits.map(createMarkupElement);
    })
    .then(joinArr)
    .then(addDOM)
    .then(addLightBox);
}

export default addHTML;
