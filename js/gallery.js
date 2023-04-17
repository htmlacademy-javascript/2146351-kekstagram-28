import { renderThumbnails } from './thumbnail.js';
import {showBigPicture} from './big-picture.js';

const container = document.querySelector('.pictures');
let renderPictures = [];
const onPicturesContainerClick = (evt) => {
  const thumbnail = evt.target.dataset.id;
  if (!thumbnail) {
    return;
  }
  evt.preventDefault();
  const picture = renderPictures.find((item)=> item.id === +thumbnail);
  showBigPicture(picture);
};

const renderGallery = (pictures) => {
  renderPictures = pictures;
  container.addEventListener('click', onPicturesContainerClick);

  renderThumbnails(pictures, container);
};

export {renderGallery};
