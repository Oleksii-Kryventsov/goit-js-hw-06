const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.target;

    if (email.value.trim() === '' || password.value === '') {
        return alert('Всі поля повинні бути заповнені!')
    }

    const formData = {
    email: email.value,
    password: password.value
    };
    console.log(formData);

    

    event.target.reset()
});



