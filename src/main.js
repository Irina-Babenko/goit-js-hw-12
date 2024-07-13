import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
import iziToast from 'izitoast';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
const loader = document.querySelector('.loader');

let searchQuery = '';
let page = 1;

form.addEventListener('submit', async event => {
  event.preventDefault();
  searchQuery = event.target.elements.searchQuery.value.trim();

  if (!searchQuery) {
    return;
  }

  page = 1;
  gallery.innerHTML = '';
  loadMoreBtn.style.display = 'none';
  loader.style.display = 'block';

  try {
    const data = await fetchImages(searchQuery, page);
    loader.style.display = 'none';

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again.',
      });
      return;
    }

    renderGallery(data.hits);
    loadMoreBtn.style.display = 'block';

    if (data.totalHits <= 15) {
      loadMoreBtn.style.display = 'none';
      iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    loader.style.display = 'none';
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  loader.style.display = 'block';

  try {
    const data = await fetchImages(searchQuery, page);
    loader.style.display = 'none';

    renderGallery(data.hits);

    if (data.hits.length < 15 || page * 15 >= data.totalHits) {
      loadMoreBtn.style.display = 'none';
      iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }

    window.scrollBy({
      top:
        document.querySelector('.photo-card').getBoundingClientRect().height *
        2,
      behavior: 'smooth',
    });
  } catch (error) {
    loader.style.display = 'none';
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
  }
});
