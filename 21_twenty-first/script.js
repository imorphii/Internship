const textarea = document.querySelector('textarea');
const numberOftextareaEl = document.querySelector('.numberOfcharacter');
const numberOfWordEl = document.querySelector('.numberOfWord');
const numberOfTwitterEl = document.querySelector('.numberOfTwitter');
const numberOfFacebookEl = document.querySelector('.numberOfFacebook');





textarea.addEventListener('input', function () {
    const numberOftextarea = textarea.value.length;
    let numberOfWordarea = textarea.value.split(' ').length;
    if (textarea.value.length === 0){
        numberOfWordarea = 0;
    }
    const resultOfTwitter = 280 - numberOftextarea;
    const resultOfFacebook = 2200 - numberOftextarea;

    if (resultOfTwitter < 0) {
        numberOfTwitterEl.classList.add("limtItem")
    } else {
        numberOfTwitterEl.classList.remove("limtItem")
    }

    if (resultOfFacebook < 0) {
        numberOfFacebookEl.classList.add("limtItem")
    } else {
        numberOfFacebookEl.classList.remove("limtItem")
    }


    numberOftextareaEl.textContent = numberOftextarea;
    numberOfWordEl.textContent =numberOfWordarea;
    numberOfTwitterEl.textContent = resultOfTwitter;
    numberOfFacebookEl.textContent = resultOfFacebook
});
textarea.addEventListener('input', function () {

});