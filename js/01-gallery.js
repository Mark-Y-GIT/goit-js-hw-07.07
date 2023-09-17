import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

let instance = null;

const createMarkup = items => {
  return items
    .map(
      ({ preview, description, original }) =>
        `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"git
      alt="${description}"
    />
  </a>
</li> `
    )
    .join('');
};

const addMarkup = items => (galleryEl.innerHTML = createMarkup(items));

addMarkup(galleryItems);

const escHandler = e => {
  if (e.code !== 'Escape') {
    return;
  }

  instance.close();
};

const createModal = e => {
  instance = basicLightbox.create(
    `
 <img src="${e.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: instance => {
        document.addEventListener('keydown', escHandler);
      },
      onClose: instance => {
        document.removeEventListener('keydown', escHandler);
      },
    }
  );

  return instance;
};

const modalHandler = e => {
  e.preventDefault();

  const modal = createModal(e);

  modal.show();
};

galleryEl.addEventListener('click', modalHandler);
