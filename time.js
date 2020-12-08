let timeout = null;

function makeTimer() {
    let endTime = new Date("Mon Nov 4 2021 03:39:00 GMT+0700 (SE Asia Standard Time)");
    endTime = (Date.parse(endTime) / 1000);

    let now = new Date();
    now = (Date.parse(now) / 1000);

    let timeLeft = endTime - now,
        days = Math.floor(timeLeft / 86400),
        hours = Math.floor((timeLeft - (days * 86400)) / 3600),
        minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60),
        seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (endTime < now) {
        clearTimeout(timeout);
        var animation = bodymovin.loadAnimation({
            container: document.getElementById('bm'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'data.json'
        });
        hours = minutes = seconds = "00";
        $("#days").html(days + "<span>Days</span>");
        $("#hours").html(hours + "<span>Hours</span>");
        $("#minutes").html(minutes + "<span>Minutes</span>");
        $("#seconds").html(seconds + "<span>Seconds</span>");
    } else {
        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }

        $("#days").html(days + "<span>Days</span>");
        $("#hours").html(hours + "<span>Hours</span>");
        $("#minutes").html(minutes + "<span>Minutes</span>");
        $("#seconds").html(seconds + "<span>Seconds</span>");

        timeout = setTimeout(makeTimer, 1000);
    }
}

makeTimer();