const jsHour = document.querySelector(".clockHour");
const jsMin = document.querySelector(".clockMin");
const jsSec = document.querySelector(".clockSec");
const jsAmPm = document.querySelector(".clockAmPm");

function handleTime(){
    const NOW = new Date();
    const HOURS = NOW.getHours();
    const MIN = NOW.getMinutes();
    const SEC = NOW.getSeconds();
    jsAmPm.innerText = `${HOURS < 12 ? `am`:`pm`}`
    jsHour.innerText = `${HOURS < 10 ? HOURS > 12 ?  ` 0${HOURS}`: ` ${HOURS}` : `${HOURS-12 < 10 ? `0${HOURS-12}` : `${HOURS-12}`}`}`;
    jsMin.innerText = `${MIN < 10 ? `0${MIN}` : MIN}`;
    jsSec.innerText = `${SEC < 10 ? `0${SEC}` : SEC}`;

}

function init(){
    handleTime();
    setInterval(handleTime,1000);
}
init();