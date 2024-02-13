// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';
// import { getImages } from './js/pixabay-api';

// let searchInput = document.querySelector('#search-input');
// let searchButton = document.querySelector('#search-button');
// let gallery = document.querySelector('#gallery');

// searchButton.addEventListener('click', e => {
//   console.log(searchInput.value);

//     getImages(searchInput.value)
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {
//       const galleryTemplate = data.hits
//         .map(hit => {
//           return `<div class="gallery-item">
//         <a class="gallery-link" href="${hit.largeImageURL}">
//             <img class="gallery-image" src="${hit.webformatURL}" alt="${hit.tags}" />
//         </a>
//         <div class="image-info">
//             <p>Likes: ${hit.likes}</p>
//             <p>Views: ${hit.views}</p>
//             <p>Comments: ${hit.comments}</p>
//             <p>Downloads: ${hit.downloads}</p>
//         </div>
//         </div>`;
//         })
//         .join('');
//       gallery.innerHTML = galleryTemplate;
//     })
//     .catch(error => {
//       console.log(error);
//       iziToast.show({
//         message: `"Sorry, there are no images matching your search query. Please try again!"`,
//         position: 'topRight',
//         title: '',
//         color: 'red',
//       });
//     });

//   searchInput.value = '';
// });
