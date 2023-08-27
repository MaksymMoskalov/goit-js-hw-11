export function createCards({ hits }) {
  return hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<div class="photo-card">
  <div class= "thumb">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
   </div> 
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
      ${likes}
    </p>
    <p class="info-item">
      <b>Views</b>
      ${views}
    </p>
    <p class="info-item">
      <b>Comments</b>
      ${comments}
    </p>
    <p class="info-item">
      <b>Downloads</b>
      ${downloads}
    </p>
  </div>
</div>`;
      }
    )
    .join('');
}

export function clearMarkup(el) {
  el.innerHTML = '';
}

export function addMarkup(markup, el) {
  el.insertAdjacentHTML('beforeend', markup);
}
