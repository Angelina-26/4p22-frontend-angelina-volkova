'use strict';
const input = document.querySelector('.reg__input');
const btn = document.querySelector('.reg__button');
const error = document.querySelector('.error');
const error2 = document.querySelector('.error2');
const input2 = document.querySelector('.reg__input2');
const input3 = document.querySelector('.reg__input3');
const error3 = document.querySelector('.error3');
const error8 = document.querySelector('error8');


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
   
    if (String(input2.value) != '') {
        input2.classList.remove('red');
        error2.classList.remove('show2');
        
    } else {
        input2.classList.add('red');
        error2.classList.add('show2');
    }

    if (String(input2.value) != (input3.value)) {
        input3.classList.add('red');
        error3.classList.add('show3');
    } 

    /*if (String(input2.value).length<8) {
        input2.classList.add('red');
        input2.classList.add('show8');
    } else {
        input2.classList.remove('red');
        input2.classList.remove('show8');

    }*/
})

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    
    console.log(re.test(String(email).toLowerCase()));
    return re.test(String(email).toLowerCase());
}








