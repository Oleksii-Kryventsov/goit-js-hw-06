
const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', handleInputChange);

function handleInputChange(event) {
    outputName.textContent = event.target.value.trim() === ''
        ? 'Anonymous' : event.target.value
};


