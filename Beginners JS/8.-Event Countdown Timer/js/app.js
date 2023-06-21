const items = document.querySelectorAll('.time div');
const expired = document.querySelector('.countdown');

const futureDay = new Date(2023, 9, 30, 22, 0, 0);
const futureTime = futureDay.getTime();

const onGetRemainingTime = () => {
    const today = new Date().getTime();
    const time = futureTime - today;
    
    // 1s = 1000ms
    // 1m = 60s
    // 1h = 60m
    // 1d = 24hrs

    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;

    // Calculate all values
    let days = Math.floor(time / oneDay);
    let hours = Math.floor((time % oneDay) / oneHour);
    let minutes = Math.floor((time % oneHour) / oneMinute);
    let seconds = Math.floor((time % oneMinute) / 1000);

    // console.log((time % oneDay) / oneHour);
    const values= [days, hours, minutes, seconds];

    items.forEach(( item, index) => {
        // console.log(item, index)
        item.textContent = values[index];
    });

    if(time < 0){
        clearInterval(counter);
        expired.textContent = 'Time Expired :(';
        expired.classList.add('expired');
    }
}

const counter = setInterval( onGetRemainingTime, 1000);
onGetRemainingTime();

