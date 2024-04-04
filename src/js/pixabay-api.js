const options = {
  key: `21174821-fd3fd6848262c16aee96184b8`,
  q: '',
  image_type: `photo`,
  orientations: `horizontal`,
  safesearch: true,
};

const { key, q, image_type, orientations, safesearch } = options;

function createUrl(request) {
  options.q = request;

  return `https://pixabay.com/api/?key=${key}&q=${options.q}&image_type=${image_type}&orientation=${orientations}&safesearch=${safesearch}`;
}

function fetchImg(request) {
  return fetch(`${createUrl(request)}`)
    .then(r => {
      return r.json();
    })
    .catch(e => console.log(e));
}

export default fetchImg;
