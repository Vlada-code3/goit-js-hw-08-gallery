import gallery from "./gallery-items.js";
console.log(gallery);

const galleryList = document.querySelector('.js-gallery')
const galleryModal = document.querySelector('.js-lightbox')
const btnCloseModal = document.querySelector('.lightbox__button')
const modalPicture = document.querySelector('.lightbox__image')
const overlay = document.querySelector('.lightbox__overlay')
console.log(galleryList);

gallery.forEach(el=>{
 const listRef = `<li class='gallery__item'>
<a
  class='gallery__link'
  href=${el.original}
>
  <img
    class= 'gallery__image'
    src=${el.preview}
    data-source=${el.original}
    alt=${el.description}
  />
</a>
</li>`
galleryList.insertAdjacentHTML('beforeend', listRef)
});

const makeMarkupModal = (e)=>{
e.preventDefault();
if(e.target.nodeName!== 'IMG'){
return
}
modalPicture.src = e.target.dataset.source;
modalPicture.alt = e.target.alt
onModalOpen();
}
const onModalOpen = ()=>{
    galleryModal.classList.add('is-open')
    window.addEventListener('keydown',onEscPress)
}

const closeModal = (event)=>{

    if(event.target === modalPicture) {
        return
    }
    window.removeEventListener('click', onEscPress);
    galleryModal.classList.remove('is-open');
    modalPicture.src = "";
    modalPicture.alt = "";
   
}


galleryList.addEventListener('click', makeMarkupModal)

galleryModal.addEventListener('click', closeModal,);


//Дополнительно
// Следующий функционал не обязателен при сдаче задания, но будет хорошей практикой по работе с событиями.

// Закрытие модального окна по клику на div.lightbox__overlay.
// Закрытие модального окна по нажатию клавиши ESC.
// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".


//Закрытие модального окна по нажатию клавиши ESC.
const onEscPress = e => {
  if (e.key === 'Escape') {
    galleryModal.classList.remove('is-open');
  }
};
galleryModal.addEventListener('keydown', onEscPress);


// Закрытие модального окна по клику на div.lightbox__overlay.

overlay.addEventListener('click', onClick);
function onClick(event) {
    
    if (event.target.nodeName === event.target.classList.contains('.lightbox__overlay')){
        return
    }
     console.log(event.target.nodeName);
};

// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".

//........?
