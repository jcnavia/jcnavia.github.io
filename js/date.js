let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];


let day = new Date();
let dayName = daynames[day.getDate()];
let montName = months[day.getMonth()];
let fulldate = dayName + ", " + monthName + " " + d.getDate() + ", " + year;
d.getFullYear();

document.getElementById("currentdate").textContent = fulldate;
// *******8**
try { 
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    document.getElementById("currentdate2").textContent = new Date().toLocaleDateString("en-us", options);
}
catch (e) {
    alert("Error with code or your browser does not suppoert Locale");
}