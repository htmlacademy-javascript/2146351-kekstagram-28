const thumbnailTemplate = document.querySelector('#picture').
  content.querySelector('.picture');
const containerPicture = document.querySelector('.picture');


const createThumbnail = ({url, likes, comments, description}) => {
  const thumbanail = thumbnailTemplate.cloneNode(true);

  thumbanail.querySelector('.picture__img').src = url;
  thumbanail.querySelector('.picture__likes').textContent = likes;
  thumbanail.querySelector('.picture__comments').textContent = comments.length;
  thumbanail.querySelector('.picture__likes').alt = description;

  return thumbanail;
};

const renderThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbanail = createThumbnail(picture);
    fragment.append(thumbanail);
  });

  containerPicture.append(fragment);
};

export {renderThumbnails};
