import axios from 'axios';

const API_KEY = '44920148-106a3962957378fd34fa469a9';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1) {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  });

  return response.data;
}
