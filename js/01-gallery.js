import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    galleryContainer: document.querySelector('.gallery'),
}

const galleryMarkUp = createGalleryMarkUp(galleryItems);
refs.galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkUp);
refs.galleryContainer.addEventListener('click', onClickOpenModal);
let instance;


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

function createModal(img) {
    instance = basicLightbox.create(`
        <img src="${img.dataset.source}" alt="${img.alt}" width="800" height="600">
    ` ,
        {
            onShow: () => document.addEventListener('keydown', exitWithEscBtn),
            onClose: () => document.removeEventListener('keydown', exitWithEscBtn)
        })

    instance.show()
}

function onClickOpenModal(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return
    }
    createModal(event.target);
}

function exitWithEscBtn(event) {
    if (event.code === 'Escape') {
        instance.close()
    }
}






