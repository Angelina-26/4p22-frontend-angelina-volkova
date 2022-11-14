
let firstArgument = document.querySelector('.reg__input');
let reg__email = document.querySelector('reg__email');
const btn = document.querySelector('.reg__button');

btn.addEventListener('click', function (e) {
    e.preventDefault();
    const val1_str = String(firstArgument.value);
    if (val1_str.indexOf(' ')) {
        return console.log('Поле обязательно для заполнения');
    }

})