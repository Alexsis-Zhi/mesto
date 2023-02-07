let popup = document.querySelector('.popup'); 
let openPopupButton = document.querySelector('.profile__edit-button'); 
let closePopupButton = document.querySelector('.popup__escape-button'); 

let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.form__input-name');
let jobInput = document.querySelector('.form__input-job');
let nameForm = document.querySelector('.profile__username');
let jobForm = document.querySelector('.profile__description');

const openPopup = () => {
    popup.classList.add('popup__active');
    nameInput.value = nameForm.textContent;
    jobInput.value = jobForm.textContent;
  };
  
const closePopup = () => {
    popup.classList.remove('popup__active'); 
  };
  
openPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    nameForm.textContent = nameInput.value;
    jobForm.textContent = jobInput.value;
    closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);