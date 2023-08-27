import Notiflix from 'notiflix';
import { ImmageGalery } from '../api';
import { formEl, cardsEl, loadMoreBtn } from '../refs/refs';
import { createCards, clearMarkup, addMarkup } from '../markup/markup';

const immageGalery = new ImmageGalery();

formEl.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSubmit(e) {
  loadMoreBtn.classList.add('is-hidden');
  e.preventDefault();
  immageGalery.tag = e.currentTarget.elements.searchQuery.value;
  clearMarkup(cardsEl);
  immageGalery.resetPage();

  try {
    const cardsData = await immageGalery.getData();

    const markup = createCards(cardsData);
    addMarkup(markup, cardsEl);
  } catch (error) {
    Notiflix.Notify.failure('Woops... something went wrong');
  }

  loadMoreBtn.classList.remove('is-hidden');
}

async function onLoadMore() {
  try {
    const cardsData = await immageGalery.getData();
    const markup = createCards(cardsData);
    addMarkup(markup, cardsEl);
  } catch (error) {
    Notiflix.Notify.failure(
      "We're sorry, but you've reached the end of search results."
    );
  }
}
