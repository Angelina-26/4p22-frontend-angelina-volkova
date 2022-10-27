'use strict'

let firstArgument = document.querySelector('.form__input1');
let secondArgument = document.querySelector('.form__input3');
const operator = document.querySelector('.form__input2');
let form__result = document.querySelector('.form__result');
const btn = document.querySelector('.form__button');

btn.addEventListener('click', function () {
    const val1 = Number (firstArgument.value);
    const val2 = Number (secondArgument.value);
    let res;
    console.log(val1, '.form__input1', secondArgument.value, val2, typeof val2);


if (typeof val1 === 'number' && typeof val2 === 'number') {
    switch (operator.value) {
        case "+":
            res = val1 + val2;
            console.log(res);
            form__result.innerHTML = res;
            break;
        case "-":
            res = val1 - val2;
            console.log(res);
            form__result.innerHTML = res;
            break;
        case "/":
            res = val1 / val2;
            console.log(res);
            form__result.innerHTML = res;
            break;
        case "*":
            res = val1 * val2;
            console.log(res);
            form__result.innerHTML = res;
            break;       
    }
} else {
    console.log ('Некорректный ввод чисел')
    
} 
})

