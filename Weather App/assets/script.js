// console.log("Hello");
let markUpDate = document.querySelector("#date");
let date = new Date();
let cdate = date.getDate();
let month = date.getMonth();
const mnthArr =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
month = mnthArr[month];
let day = date.getDay();    
let dayArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
day = dayArr[day];

let hour = date.getHours();

// console.log(hour);
let period = "AM";
if(hour>12) period = "PM";

if(hour>12) hour = hour-12;
if(hour<10) hour = `0${hour}`;

let minutes = date.getMinutes();

markUpDate.innerHTML = `${day} | ${month} ${cdate} | ${hour} : ${minutes} ${period}`;
