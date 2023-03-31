const thumbnailTemplate = document.querySelector('#picture').
  content.querySelector('.picture');
const containerPicture = document.querySelector('.pictures');


const createThumbnail = ({url, likes, comments, description, id}) => {
  const thumbanail = thumbnailTemplate.cloneNode(true);

  thumbanail.querySelector('.picture__img').src = url;
  thumbanail.querySelector('.picture__likes').textContent = likes;
  thumbanail.querySelector('.picture__comments').textContent = comments.length;
  thumbanail.querySelector('.picture__likes').alt = description;
  thumbanail.querySelector('.picture__img').dataset.id = id;

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
