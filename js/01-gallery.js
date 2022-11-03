import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const refs = {
    galleryContainer: document.querySelector('.gallery')
}

const galleryMarkUp = createGalleryMarkUp(galleryItems);
refs.galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkUp);


refs.galleryContainer.addEventListener('click', onImageClick);

function createGalleryMarkUp(items) {
    return items.map(({ preview, original, description } = {}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div> `
    })
        .join('')
}

function onImageClick(event) {
    event.preventDefault();
    createLightBox(event.target);
}

function createLightBox(img) {
    const instance = basicLightbox.create(`
        <img src="${img.dataset.source}" width="800" height="600">
    `)
    instance.show()
}




