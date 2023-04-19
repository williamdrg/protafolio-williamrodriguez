const openModal = document.querySelector(".btn__submit");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close")

openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal__show');
} );

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal__show');
} )
