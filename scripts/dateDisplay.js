let x = new Date();
let d = x.getDate();
let m = x.getMonth();
let y = x.getFullYear();
let day = x.getDay();
let text = "Today's Date: " + d + "-" + m + "-" + y;

document.getElementById("date").innerHTML = text;