import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    galleryContainer: document.querySelector('.gallery'),
}

const galleryMarkUp = createGalleryMarkUp(galleryItems);
refs.galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkUp);


function createGalleryMarkUp(items) {
    return items.map(({ preview, original, description } = {}) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    })
        .join('')
}

let lightbox = new SimpleLightbox('.gallery a',
    {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
        captionPosition: 'bottom'
    });

