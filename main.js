const items = document.querySelectorAll('.item');
let timer = new Date(2023, 6, 5, 8, 30, 0).getTime();


function countDown() {
    const now = new Date().getTime();
    const distance = timer - now;
    const hour = distance;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);

    const values = [days, hours, minutes, seconds];


    items.forEach((item, index) => {
        item.textContent = values[index];
    });

    if (distance < 0) {
        clearInterval(counter); document.querySelector('.container').innerHTML = 'Время вышло'
    }

    document.title = values[0] + ' Дней ' + values[1] + ' Часов ' + values[2] + ' Минут ' + values[3] + ' Секунд ';
};

let counter = setInterval(countDown, 1000);

