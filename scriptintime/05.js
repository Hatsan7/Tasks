// запустить скрипт через неделю

function alertInfo() {
    alert('Заплати за сайт');


}
function checkTime() {
    var timeInSec = Math.round(Date.now()/1000);
    console.log(timeInSec);
if (timeInSec > 1536667035 ) {
    alertInfo();
}
}
checkTime();