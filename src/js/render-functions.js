const gallery = document.querySelector('.gallery');
{/* <a class="gallery-link" href="${largeImageURL}">  </a> */}

function createMarkupElement({
  webformatURL,
  // largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<li class="gallery-item">
  <img src="${webformatURL}" alt="${tags}" class="image">
  </img>

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

function addHTML(params) {
  params
    .then(({ hits }) => {
      return hits;
    })
    .then(hits => {
      return hits.map(createMarkupElement);
    })
    .then(hit=>{return hit.join('')})
    .then(hit => gallery.insertAdjacentHTML('beforeend', hit));
}

export default addHTML;
