const calc = document.getElementById("calc");
const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");

calc.addEventListener("click", function() {
    const dayInput = document.getElementById("day").value;
    const monthInput = document.getElementById("month").value;
    const yearInput = document.getElementById("year").value;

    const day = parseInt(dayInput, 10);
    const month = parseInt(monthInput, 10);
    const year = parseInt(yearInput, 10);
    if (day > 31 || month > 12) {
        alert("invalid date format")
    } else if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
        const birthdate = new Date(year, month - 1, day); // Month is zero-based
        const today = new Date();

        const ageInMilliseconds = today - birthdate;
        const ageInSeconds = ageInMilliseconds / 1000;
        const ageInMinutes = ageInSeconds / 60;
        const ageInHours = ageInMinutes / 60;
        const ageInDays = ageInHours / 24;
        const ageInMonths = ageInDays / 30.44; // Average days in a month
        const ageInYears = ageInMonths / 12;

        const y = Math.floor(ageInYears);
        const m = Math.floor(ageInMonths % 12);
        const d = Math.floor(ageInDays % 30.44);

        years.textContent = y;
        months.textContent = m;
        days.textContent = d;
    } else { alert("invalid date format") }
})