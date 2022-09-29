const a = new Date();
let year = a.getFullYear();
document.getElementById("demo").innerHTML = +new Date();

const b = new Date();
let month = b.getMonth();
document.getElementById("demo1").innerHTML = month;

const c = new Date();
let date = c.getDate();
document.getElementById("demo2").innerHTML = date;

const d = new Date();
let day = d.getDay();
document.getElementById("demo3").innerHTML = day;

const e = new Date();
let hour = e.getHours();
document.getElementById("demo4").innerHTML = hour;

const f = new Date();
let time = f.getTime();
document.getElementById("demo5").innerHTML = time;

const g = new Date();
let minutes = g.getMinutes();
document.getElementById("demo6").innerHTML = minutes;

const h = new Date();
let milliseconds = h.getMilliseconds();
document.getElementById("demo7").innerHTML = milliseconds;

const i = new Date();
let seconds = i.getSeconds();
document.getElementById("demo8").innerHTML = seconds;

const j = new Date();
let datestring = j.toDateString();
document.getElementById("demo9").innerHTML = datestring;

const k = new Date();
let x = k.getHours();
let y = k.getMinutes();
let z = k.getSeconds();
let fulltime = x + ":" + y + ":" + z;
document.getElementById("demo10").innerHTML = fulltime;

const l = new Date();
let timestring = l.toTimeString();
document.getElementById("demo11").innerHTML = timestring;
