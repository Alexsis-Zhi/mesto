let popup = document.querySelector('.popup'); 
let popupForm = document.querySelector('.popup__form-container'); 
let openPopupButton = document.querySelector('.profile__edit-button'); 
let closePopupButton = document.querySelector('.popup__escape-button'); 
let savePopupButton = document.querySelector('.popup__save-button');
const likeButton = document.querySelectorAll('.elements__card-like');

openPopupButton.addEventListener('click', (e) => { 
        e.preventDefault(); 
        popup.classList.add('popup__active'); 
    });

closePopupButton.addEventListener('click',() => { 
    popup.classList.remove('popup__active'); 
});

savePopupButton.addEventListener('click',() => { 
    popup.classList.remove('popup__active'); 
});

function likeButtonActive (likeButton) {
likeButton.addEventListener('click',() => { 
    likeButton.classList.toggle('elements__card-like_active');
});
}

likeButton.forEach(likeButtonActive);


let formElement = document.querySelector('.popup__form');

let nameInput = document.querySelector('.form__input-name');
let jobInput = document.querySelector('.form__input-job');


function handleFormSubmit (evt) {
    evt.preventDefault(); 
    let nameInput = document.getElementById('fullName').value;
    let jobInput = document.getElementById('jobName').value;
    let nameForm = document.querySelector('.profile__username');
    let jobForm = document.querySelector('.profile__description');
    nameForm.textContent = nameInput;
    jobForm.textContent = jobInput;
}

formElement.addEventListener('submit', handleFormSubmit);
