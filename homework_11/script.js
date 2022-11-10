'use strict';

let userData = [];

fetch('https://reqres.in/api/users?page=2')
    .then((response) => response.json())
    .then((response) => {
        userData = response.data;
        // point 1
        userData.forEach(user => {
            console.log('Фамилии пользователей', user.last_name);
        })
        // point 2
        userData = userData.filter(user => (user.last_name[0] === 'F'))
        userData.forEach((user) => {
            console.log('Фамилии на букву F', user.last_name);
        })
        // point 3
        let reducedArray = userData.reduce((accumulator, item) => {
          accumulator += `${item.first_name} ${item.last_name}, `;
          return accumulator;
        },'Наша база содержит данные следующихпользователей:' );
        console.log(reducedArray);
       
    })