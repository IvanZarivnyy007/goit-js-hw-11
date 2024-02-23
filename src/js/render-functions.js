import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './pixabay-api';

const searchInput = document.querySelector('#search-input');
const gallery = document.querySelector('#gallery');
const loader = document.querySelector('.loader');
const navigationForm = document.querySelector('.navigation');

export const refs = {
  searchInput,
  gallery,
  loader,
  navigationForm,
};

export const lightbox = new SimpleLightbox(
  '#gallery .gallery-item .gallery-link ',
  {
    dowload: false,
    close: true,
    closeText: '×',
    captions: true,
    captionsData: 'alt',
    captionType: 'attr',
    captionDelay: 250,
    captionSelector: 'img',
  }
);

export function getGallery() {
  showLoder();

  fetchImages(searchInput.value)
    .then(response => {
      return response.json();
    })
    .then(data => {
      arrLengthChecker(data.hits);
      const galleryTemplate = data.hits
        .map(hit => {
          return `<div class="gallery-item">
        <a class="gallery-link" href="${hit.largeImageURL}">
            <img class="gallery-image" src="${hit.webformatURL}" alt="${hit.tags}" />
        </a>
        <div class="image-info">
            <div><b>Likes</b> ${hit.likes}</div>
            <div><b>Views</b> ${hit.views}</div>
            <div><b>Comments</b> ${hit.comments}</div>
            <div><b>Downloads</b> ${hit.downloads}</div>
        </div>
        </div>`;
        })
        .join('');

      gallery.innerHTML = galleryTemplate;
      lightbox.refresh();
    })
    .catch(() => {
      iziToast.show({
        message: `"Sorry, there are no images matching your search query. Please try again!"`,
        position: 'topRight',
        title: '',
        color: 'red',
      });
    })
    .finally(() => {
      closeLoder();
    });

  searchInput.value = '';
}

export function showLoder() {
  refs.loader.style.display = 'inline-block';
}

export function closeLoder() {
  refs.loader.style.display = 'none';
}

export function arrLengthChecker(arr) {
  if (!arr.length) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
      title: '',
      color: 'red',
    });
  }
}
