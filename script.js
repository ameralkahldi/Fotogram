const images = [
  "cereals.jpg",
  "beach.jpg",
  "ice-cream.jpg",
  "sea.jpg",
  "woman.jpg",
  "mountains (1).jpg",
  "beach-8260614_1280.jpg",
  "mountains (2).jpg",
  "ducks-7863701_1280.jpg",
  "church-4368946_1280.jpg",
  "watermelon-8368960_1280.png",
  "sunglasses-3521785_1280.jpg",
];

let content = document.getElementById("imageAlbume");

function init() {
  for (let i = 0; i < images.length; i++) {
    content.innerHTML += `
      <img src="./img/album/${images[i]}" alt=" imgTest" onclick="popupPicture(${i})">
    `;
  }
}
function closePopup(event) {
  document.getElementById("pictureShow").classList.toggle("popupActive");
  event.stopPropagation();
}

function nextPicture(i, event) {
  if (i < images.length - 1) {
    popupPicture(i + 1);
  } else {
    popupPicture(0);
  }
  event.stopPropagation();
}

function prevPicture(i, event) {
  if (i > 0) {
    popupPicture(i - 1);
  } else {
    popupPicture(images.length - 1);
  }

  event.stopPropagation();
}


function pictureTemplate(i) {
  return `
    <div class="titleFoto">
    <p>${images[i]}</p>

    <img src="./img/closeButton.png" alt=" close" onclick="closePopup(event)" >
    </div>
    <div class="fotoMittel">
    <img src="./img/album/${images[i]}" alt="einzel image">
    </div>
    <div class="richtung">
    <button onclick="prevPicture(${i}, event)" style="border-radius: 20px 0 0 20px; transform: scaleX(-1);">&#x279C;</button>
    <button onclick="nextPicture(${i}, event)" style="border-radius: 0 20px 20px 0; transform: scaleX(1);">&#10140;</button>

    </div>
  
    `;
}

function popupPicture(i) {
  document.getElementById("pictureShow").classList.add("popupActive");
  document.getElementById("popupPicture").innerHTML = pictureTemplate(i);
}

function stopEvent(event) {
  event.stopPropagation();
}
