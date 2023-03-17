const thumbnailTemplate = document.querySelector('#picture').
  content.querySelector('.picture');
const container = document.querySelector('.picture');


const createThumbnail = ({url, likes, comments}) => {
  const thumbanail = thumbnailTemplate.cloneNode(true);

  thumbanail.querySelector('.picture__img').src = url;
  thumbanail.querySelector('.picture__likes').textContent = likes;
  thumbanail.querySelector('.picture__comments').textContent = comments;

  return thumbanail;
};

const renderThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbanail = createThumbnail(picture);
    fragment.append(thumbanail);
  });

  container.append(fragment);
};

export {renderThumbnails};
