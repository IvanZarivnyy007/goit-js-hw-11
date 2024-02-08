import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let searchInput = document.querySelector('#search-input');
let searchButton = document.querySelector('#search-button');
let gallery = document.querySelector('#gallery');

searchButton.addEventListener('click', e => {
  console.log(searchInput.value);

  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api';
  const PARAMS = `/?key=42279202-5e6657fc85e4b10c09189e202&image_type=photo&orientation=horizontal&safesearch=true&q=${searchInput.value}`;

  const url = BASE_URL + END_POINT + PARAMS;

  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      data.hits.map(hit => {
        const img = document.createElement('img');
        img.src = hit.webformatURL;
        img.alt = hit.tags;
        document.body.append(img);
      });
    })
    .catch(error => {
      console.log(error);
      iziToast.show({
        message: `"Sorry, there are no images matching your search query. Please try again!"`,
        position: 'topRight',
        title: '',
        color: 'red',
      });
    });

  searchInput.value = '';
});
