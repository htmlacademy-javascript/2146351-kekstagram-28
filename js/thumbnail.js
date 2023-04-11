const thumbnailTemplate = document.querySelector('#picture').
  content.querySelector('.picture');

const containerPicture = document.querySelector('.pictures');


const createThumbnail = (picture) => {
  const thumbanail = thumbnailTemplate.cloneNode(true);

  thumbanail.querySelector('.picture__img').src = picture.url;
  thumbanail.querySelector('.picture__likes').textContent = picture.likes;
  thumbanail.querySelector('.picture__comments').textContent = picture.comments.length;
  thumbanail.querySelector('.picture__likes').alt = picture.description;
  thumbanail.querySelector('.picture__img').dataset.id = picture.id;

  return thumbanail;
};

const renderThumbnails = (pictures) => {
  const oldPictures = document.querySelectorAll('.picture');
  if (oldPictures.length) {
    oldPictures.forEach((oldPicture) => {
      oldPicture.remove();
    });
  }

  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });

  containerPicture.append(fragment);
};

export {renderThumbnails};
