function updateclock() {
    let now = new Date();
    let dname = now.getDay(), months = now.getMonth(),
        days = now.getDate(), years = now.getFullYear(),
        hours = now.getHours(), minuts = now.getMinutes(),
        seconds = now.getSeconds(), periods = "PM";

    if (hours == 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours = hours - 12;
        periods = "PM";
    }

    Number.prototype.pad=function(digits){
        for(var n=this.toString(); n.length<digits;n=0+n);
        return n;
    }
    let month_name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let week_name = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let ids = ["day", "month", "daynum", "year", "hour", "minut", "second", "period"];
    let values = [days.pad(2), month_name[months], week_name[dname], years, hours.pad(2), minuts.pad(2), seconds.pad(2), periods];

    for (let i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function Clock() {
    updateclock();
    window.setInterval("updateclock()", 1);
}
Clock();