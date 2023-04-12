import { renderGallery } from './gallery.js';
import { setupForm } from './form.js';
import { getData } from './load.js';
import { showAlert, debounce } from './alert.js';
import { initFilters, getFilteredPictures } from './filter.js';
import './upload-images.js';


setupForm();

try {
  const data = await getData();
  const debouncedRenderGallery = debounce(renderGallery);
  initFilters(data, debouncedRenderGallery);
  renderGallery(getFilteredPictures());
} catch (err) {
  showAlert(err.message);
}
