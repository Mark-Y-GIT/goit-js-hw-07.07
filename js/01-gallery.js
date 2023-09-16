import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryEl = document.querySelector('.gallery');

const galleryItemsMarkup = galleryItems
  .map(el => {
    const { description, original, preview } = el;

    return `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li> `;
  })
  .join('');

galleryEl.innerHTML = galleryItemsMarkup;
