const btnElement1 = document.getElementById("showImage");
const btnElement2 = document.getElementById("moreImage");
const url = `https://dog.ceo/api/breeds/image/random`;
function showImage() {
  fetch(url)
    .then((Response) => Response.json())
    .then(function (object) {
      let imagePath = object.message;
      let liElement = document.createElement("li");
      liElement.className = "p-2 mx-auto list-group-item";
      let imgElement = document.createElement("img");
      imgElement.src = imagePath;
      imgElement.className="w-100"
      let ulElement = document.getElementById("gallery");
      //replace new image
      for (let elem of ulElement.childNodes) {
        ulElement.removeChild(elem);
      }
      ulElement.appendChild(liElement);
      liElement.appendChild(imgElement);
    })
    .catch((error) => console.log(error));
}

function showImages() {
  fetch(url)
    .then((Response) => Response.json())
    .then(function (object) {
      let imagePath = object.message;
      let liElement = document.createElement("li");
      liElement.className = "p-2";
      let imgElement = document.createElement("img");
      imgElement.src = imagePath;
      let ulElement = document.getElementById("gallery");
      //add new image
      ulElement.appendChild(liElement);
      liElement.appendChild(imgElement);
    })
    .catch((error) => console.log(error));
}

btnElement1.addEventListener("click", showImage);
btnElement2.addEventListener("click", showImages);
