'use strict';
const input = document.querySelector('.reg__input');
const btn = document.querySelector('.reg__button');
const error = document.querySelector('.error');
const error2 = document.querySelector('.error2');
const input2 = document.querySelector('.reg__input2');
const input3 = document.querySelector('.reg__input3');
const error3 = document.querySelector('.error3');
const error8 = document.querySelector('.error8');
const about = document.querySelector('.reg__about-textarea');
const gender = document.querySelector('.reg__radio-input');
const subscribe = document.querySelector('.reg__checkbox-input');


btn.addEventListener('click', (e) => {
    e.preventDefault();
    validateEmail(input.value);
    if (validateEmail(input.value)) {
        input.classList.remove('red');
        error.classList.remove('show');
        
    } else {
        input.classList.add('red');
        error.classList.add('show');  
    }

    if (String(input3.value) !== (input2.value)) {
        input3.classList.add('red');
        error3.classList.add('show3');

    } else {
        input3.classList.remove('red');
        error3.classList.remove('show3');
    }
   
     if (String(input2.value) === '') {
        input2.classList.add('red');
        error2.classList.add('show2');
        error8.classList.remove('show8');
    
     } else if (input2.value.length < 8) {
        input2.classList.add('red');
        error8.classList.add('show8');
        error2.classList.remove('show2');

    } else {
        input2.classList.remove('red');
        error2.classList.remove('show2');
        error8.classList.remove('show8');
    }
    if (!error2.classList.contains('show2') && !error.classList.contains('show') && !error3.classList.contains('show3') && !error8.classList.contains('show8')) {
        const result = {
            email: input.value,
            password: input2.value,
            about: about.value,
            gender: gender.value,
            subscribe: subscribe.value,
        }
        console.log('information' , result);
    }
})

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    
    console.log(re.test(String(email).toLowerCase()));
    return re.test(String(email).toLowerCase());
}








