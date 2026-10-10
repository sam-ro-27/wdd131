const today = new Date();
const year = today.getFullYear();
document.getElementById("currentyear").textContent = year;

const lastModified = new Date(document.lastModified);
const lastModifiedString = lastModified.toLocaleString();


const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
  lastModifiedElement.textContent = lastModifiedString;
}
