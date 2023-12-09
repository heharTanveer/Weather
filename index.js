const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () =>{
    const APIKey = 'ee0b34c03248e9071ec013bf9aa44cb6';
    const city = document.querySelector('.searcg-box input').ariaValueMax;

    if(city === ''){
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${ee0b34c03248e9071ec013bf9aa44cb6}`)
})