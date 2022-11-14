
const input = document.querySelector('.reg__input');
const btn = document.querySelector('.reg__button');
const label = document.querySelector('.reg__email');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    validateEmail(input.value);
    if (validateEmail(input.value)) {
        input.classList.add('green');
        input.classList.remove('red');
    } else {
        input.classList.remove('green');
        input.classList.add('red');
    }
})

btn.addEventListener('click' , (e) => {
    e.preventDefault();
    validateEmail(label.value);
    if (validateEmail(label.value)) {
        label.classList.add('green');
        label.classList.remove('error');
    } else {
        label.classList.remove('green');
        label.classList.add('error');
    }
})

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    
    console.log(re.test(String(email).toLowerCase()));
    return re.test(String(email).toLowerCase());
}

