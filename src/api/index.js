import axios from 'axios';
import Notiflix from 'notiflix';

const BASE_URL = 'https://pixabay.com/api/';
const AUT_KEY = '39085850-22ba7d8df6e098b6440144e47';

axios.defaults.baseURL = BASE_URL;
// axios.defaults.headers.common['key'] = '39085850-22ba7d8df6e098b6440144e47';

export class ImmageGalery {
  constructor() {
    this.searchTag = '';
    this.pageNumber = 1;
  }

  getData() {
    return axios
      .get(
        `?key=${AUT_KEY}&q=${this.searchTag}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.pageNumber}`
      )
      .then(({ data }) => {
        this.pageNumber += 1;
        if (data.hits.length === 0) {
          Notiflix.Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
        return data;
      });
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
