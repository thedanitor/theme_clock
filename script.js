// hour hand
const hourEl = document.querySelector(".hour");
// minute hand
const minuteEl = document.querySelector(".minute");
// second hand
const secondEl = document.querySelector(".second");
// time
const timeEl = document.querySelector(".time");
// date
const dateEl = document.querySelector(".date");
// toggle button
const toggle = document.querySelector(".toggle");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// listen for click on toggle button
toggle.addEventListener("click", e => {
  // select html element
  const html = document.querySelector("html");
  // used ternary instead of if statement to make cleaner
  // if html contains dark class
  html.classList.contains("dark")
    ? // remove dark class and change button to "Dark Mode"
      (html.classList.remove("dark"), (e.target.innerHTML = "Dark Mode"))
    : // otherwise add dark class and change button to "Light Mode"
      (html.classList.add("dark"), (e.target.innerHTML = "Light Mode"));
});

function setTime() {
  // retrieve Date object
  const time = new Date();
  // use getMonth method
  const month = time.getMonth();
  // use getDay method
  const day = time.getDay();
  // use getDay method
  const date = time.getDate();
  // use getHours method
  const hours = time.getHours();
  // since hours will be in 24hr, we will change to remainder of dividing by 12 for hour hand
  const hoursForClock = hours % 12;
  // use getMinutes method
  const minutes = time.getMinutes();
  // use getSeconds method
  const seconds = time.getSeconds();
  // use if using 12 hour clock
  const ampm = hours >= 12 ? "PM" : "AM";

  // rotate hour hand using scale function to map hour value to degrees
  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;
  // rotate minute hand using scale function to map minute value to degrees
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;
  // rotate second hand using scale function to map second value to degrees
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  //put hours, min in timeEl. if is less than 10, display with 0 in front
  timeEl.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
  //use day as index for days array, use month as index for months array
  dateEl.innerHTML = `${days[day]}, ${months[month]}<span class="circle">${date}</span>`;
}

// takes value from one range of numbers and maps it to another range of numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();
// call setTime every 1000ms (each second)
setInterval(setTime, 1000);
