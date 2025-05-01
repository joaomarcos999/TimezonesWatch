import dayjs from 'dayjs';
import micromodal from 'micromodal';
import timezone from 'dayjs/plugin/timezone.js';
import utc from 'dayjs/plugin/utc.js';

const local = document.getElementById('local');
const time = document.getElementById('time');
const date = document.getElementById('date');
const btn = document.getElementById('change-local');
const listTimezones = document.getElementById('timezone');
const btnClose = document.getElementById('close-modal');

micromodal.init();
dayjs.extend(utc);
dayjs.extend(timezone);



let currentTimezone = dayjs.tz.guess();

const timezones = [
    "UTC", "Europe/London", "Europe/Paris", "America/New_York", "America/Sao_Paulo",
    "Asia/Tokyo", "Asia/Shanghai", "Australia/Sydney", "Africa/Johannesburg"
  ];

function populateTimezones() {
    listTimezones.innerHTML = '';
    timezones.forEach((tz) => {
        const option = document.createElement('option');
        option.value = tz;
        option.innerText = tz.replace('_', ' ').replace('/', ', ');
        listTimezones.appendChild(option);
    });
    currentTimezone = listTimezones.value;
}

btnClose.addEventListener('click', () => {
    currentTimezone = listTimezones.value;
    micromodal.close('modal-1');
    updateTime();
})


function updateTime() {
    const now = dayjs().tz(currentTimezone);
    time.innerText = now.format('HH:mm:ss');
    date.innerText = now.format("dddd, D MMMM, YYYY")
    local.innerText = currentTimezone.replace('_', ' ').replace('/', ', ');
}

btn.addEventListener('click', () => {
    micromodal.show('modal-1');
    populateTimezones();
})

updateTime();
setInterval(updateTime, 1000);



