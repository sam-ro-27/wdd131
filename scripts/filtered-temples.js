const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").textContent = document.lastModified;
const menuButton = document.getElementById("menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", function () {
    nav.classList.toggle("show");
    if (nav.classList.contains("show")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }
});


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "images/aba-nigeria-temple.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "images/manti-temple.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "images/payson-utah-temple.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "images/yigo_guam_temple.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "images/washington_dc_temple.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "images/lima-peru-temple.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "images/mexico-city-temple.jpg"
  },
  {
  templeName: "Tokyo Japan",
  location: "Tokyo, Japan",
  dedicated: "1980, October, 27",
  area: 53997,
  imageUrl: "images/tokyo_japan.jpg"
},
{
  templeName: "Gilbert Arizona",
  location: "Gilbert, Arizona, United States",
  dedicated: "2015, March, 1",
  area: 10768,
  imageUrl: "images/gilbert_az.jpg"
},
{
  templeName: "Idaho Falls Idaho",
  location: "Idaho Falls, Idaho, United States",
  dedicated: "1954, September, 24",
  area: 85624,
  imageUrl: "images/idaho_falls_id.jpg"
}
];

const templeContainer = document.getElementById("templeContainer");
function displayTemples(list) {
  templeContainer.innerHTML = "";
  list.forEach((temple) => {
    templeContainer.innerHTML += `
      <article class="card">
        <h3>${temple.templeName}</h3>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="250">
      </article>
    `;
  });
}

displayTemples(temples);

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const filter = event.target.textContent;
    let list = temples;
    if (filter === "Old") {
      list = temples.filter((t) => parseInt(t.dedicated) < 1900);
    } else if (filter === "New") {
      list = temples.filter((t) => parseInt(t.dedicated) > 2000);
    } else if (filter === "Large") {
      list = temples.filter((t) => t.area > 90000);
    } else if (filter === "Small") {
      list = temples.filter((t) => t.area < 10000);
    }
    displayTemples(list);
  });
});