import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getImages } from './pixabay-api';

let searchInput = document.querySelector('#search-input');
let searchButton = document.querySelector('#search-button');
let gallery = document.querySelector('#gallery');
let loader = document.querySelector('.loader');

let lightbox = new SimpleLightbox('#gallery .gallery-item .gallery-link ', {
  dowload: false,
  close: true,
  closeText: '×',
  captions: true,
  captionsData: 'alt',
  captionType: 'attr',
  captionDelay: 250,
  captionSelector: 'img',
});

searchButton.addEventListener('click', () => {
  loader.style.display = 'inline-block';
  console.log(searchInput.value);

  getImages(searchInput.value)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const galleryTemplate = data.hits
        .map(hit => {
          return `<div class="gallery-item">
        <a class="gallery-link" href="${hit.largeImageURL}">
            <img class="gallery-image" src="${hit.webformatURL}" alt="${hit.tags}" />
        </a>
        <div class="image-info">
            <div>Likes: ${hit.likes}</div>
            <div>Views: ${hit.views}</div>
            <div>Comments: ${hit.comments}</div>
            <div>Downloads: ${hit.downloads}</div>
        </div>
        </div>`;
        })
        .join('');
      loader.style.display = 'none';
      gallery.innerHTML = galleryTemplate;
      lightbox.refresh();
    })
    .catch(error => {
      iziToast.show({
        message: `"Sorry, there are no images matching your search query. Please try again!"`,
        position: 'topRight',
        title: '',
        color: 'red',
      });
    });

  searchInput.value = '';
});
