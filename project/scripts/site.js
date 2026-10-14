const squidFacts = [
  { title: "Habitat", fact: "They live in deep ocean." },
  { title: "Hunt", fact: "They are rarely seen." }
];
function setFooter() {
  const today = new Date();
  const year = today.getFullYear();
  const currentYearElement = document.getElementById("currentyear");

  if (currentYearElement) {
    currentYearElement.textContent = year;
  }

  function showFacts() {
    const list = document.getElementById("fact-list");
    if (!list) {
      return;
    }
    squidFacts.forEach(function (item) {
      list.innerHTML += `<li><strong>${item.title}:</strong> ${item.fact}</li>`;
    });
  }
  showFacts();

  const lastModified = new Date(document.lastModified);
  const lastModifiedString = lastModified.toLocaleString();

  const lastModifiedElement = document.getElementById("lastModified");
  if (lastModifiedElement) {
    lastModifiedElement.textContent = lastModifiedString;
  }
}

function handleSighting(event) {
  event.preventDefault();

  const observerInput = document.getElementById("observer");
  const placeInput = document.getElementById("place");
  const observer = observerInput ? observerInput.value.trim() : "";
  const place = placeInput ? placeInput.value.trim() : "";

  if (!observer || !place) {
    const message = document.getElementById("sighting-message");
    if (message) {
      message.textContent = "Please enter both the observer and place.";
    }
    return;
  }

  const storedSightings = localStorage.getItem("sightings");
  let sightings = [];

  if (storedSightings) {
    try {
      const parsed = JSON.parse(storedSightings);
      sightings = Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      sightings = [];
    }
  }

  const sighting = { observer, place };
  sightings.push(sighting);
  localStorage.setItem("sightings", JSON.stringify(sightings));

  const message = document.getElementById("sighting-message");
  if (message) {
    message.textContent = `Sighting logged: ${observer} at ${place}.`;
  }

  if (event.target) {
    event.target.reset();
  }
}

setFooter();

const sightingForm = document.getElementById("sighting-form");
if (sightingForm) {
  sightingForm.addEventListener("submit", handleSighting);
}
