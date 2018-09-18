$(document).ready(function () {
    //getRate();
    //getHistoryRate();
    $('input[type="date"')

});
function getRate() {
    //https://api.coindesk.com/v1/bpi/currentprice.json
    $.get(
        "https://api.coindesk.com/v1/bpi/currentprice.json",
    function (data) {
    data = JSON.parse(data);
        console.log(data);
        }
        );
}
function getHistoryRate() {
    //https://api.coindesk.com/v1/bpi/historical/close.json
    $.get(
        "https://api.coindesk.com/v1/bpi/historical/close.json\n",
        {
            "start" : "2017-09-01",
            "end": "2018-09-17"

        },
        function (data) {
            data = JSON.parse(data);
            console.log(data);
        }
    );
}