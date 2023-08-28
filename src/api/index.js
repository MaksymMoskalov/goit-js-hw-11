import axios from 'axios';
import Notiflix from 'notiflix';

const BASE_URL = 'https://pixabay.com/api/';
const AUT_KEY = '39085850-22ba7d8df6e098b6440144e47';

axios.defaults.baseURL = BASE_URL;

export class ImmageGalery {
  constructor() {
    this.searchTag = '';
    this.pageNumber = 1;
  }

  async getData() {
    const response = await axios.get(
      `?key=${AUT_KEY}&q=${this.searchTag}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.pageNumber}`
    );
    if (response.data.hits.length === 0) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    this.pageNumber += 1;
    return response.data;
  }

  resetPage() {
    this.pageNumber = 1;
  }

  get tag() {
    return this.searchTag;
  }

  set tag(newTag) {
    this.searchTag = newTag;
  }
}
