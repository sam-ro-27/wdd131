const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").textContent = document.lastModified;
function calculateWindChill(temp, wind) {
    return 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);
}

const temp = 95;
const wind = 8;

if (temp <= 50 && wind > 3) {
    document.getElementById("windchill").textContent = calculateWindChill(temp, wind);
} else {
    document.getElementById("windchill").textContent = "N/A";
}