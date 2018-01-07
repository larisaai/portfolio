var time = document.getElementById("time");
var date = document.getElementById("date");

setInterval(function () {
    var today = new Date();
    time.innerHTML = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    date.innerHTML = today.toLocaleDateString();
}, 1000);
