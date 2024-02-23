const BASE_URL = 'https://pixabay.com';
const END_POINT = '/api';
const PARAMS = `/?key=42279202-5e6657fc85e4b10c09189e202&image_type=photo&orientation=horizontal&safesearch=true`;

const url = BASE_URL + END_POINT + PARAMS;

export function fetchImages(searchParams) {
  const value = searchParams.trim();
  if (value) {
    return fetch(url + `&q=${value}`);
  } else {
    return Promise.reject();
  }
}
