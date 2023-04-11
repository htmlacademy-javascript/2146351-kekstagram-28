import { renderGallery } from './gallery.js';
import { setupForm } from './form.js';
import { getData } from './load.js';
import { showAlert } from './alert.js';
import './upload-images.js';

setupForm();

try {
  const data = await getData();
  renderGallery(data);
} catch (err) {
  showAlert(err.message);
}
