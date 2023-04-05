import { renderThumbnails } from './thumbnail.js';
import {showBigPicture} from './big-picture.js';

const container = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {

    const thumbnail = evt.target.dataset.id;
    if (!thumbnail) {
      return;
    }
    evt.preventDefault();
    const picture = pictures.find((item) => item.id === +thumbnail);
    showBigPicture(picture);
  });

  renderThumbnails(pictures, container);
};

export {renderGallery};
