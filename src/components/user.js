import Notiflix from 'notiflix';
import { getData } from '../api';
import { userIdMarkup, createAlbumList } from '../markup';
import { jsUserTableEl, jsalbumEl } from '../refs';
import { addMarkup } from '../utils';

const searchParams = new URLSearchParams(location.search);
const userId = searchParams.get('user-id');

getData(`users/${userId}`)
  .then((data) => {
    console.log(data);
    const markup = userIdMarkup(data);
    addMarkup(markup, jsUserTableEl);
  })
  .catch((error) => {
    console.log(error);
    Notiflix.Notify.failure(error.message);
  });

getData(`albums?userId=${userId}`)
  .then((data) => {
    const markupAlbum = createAlbumList(data);
    addMarkup(markupAlbum, jsalbumEl);
    // console.log(markupAlbum);
  })
  .catch((error) => {
    console.log(error);
    Notiflix.Notify.failure(error.message);
  });

jsalbumEl.addEventListener('click', onClick);

function onClick(e) {
  const liAlbum = e.target.closest('.js-list-user-album');
  if (liAlbum.nodeName !== 'LI') {
    return;
  }

  const albumId = liAlbum.getAttribute('data-id');
  location.href = `album.html?album-id=${userId}`;
  console.log(liAlbum);
}
