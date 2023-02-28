const inputEl = document.querySelector('#validation-input');
const inputLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', () => {
    inputEl.classList.remove('valid', 'invalid');

    inputEl.value.length === Number(inputLength)
        ? inputEl.classList.add('valid')
        : inputEl.classList.add('invalid');

});

// inputEl.addEventListener('blur', handleInputValidBlur);

// function handleInputValidBlur(event) {
//     inputEl.classList.toggle
//         ('valid', event.target.value.trim().length === Number(inputLength));
//     inputEl.classList.toggle
//         ('invalid', event.target.value.trim().length !== Number(inputLength));
// };

