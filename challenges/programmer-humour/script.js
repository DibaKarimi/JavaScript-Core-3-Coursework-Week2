const url = `https://xkcd.now.sh/?comic=latest`;
function fetchImage() {
    fetch(url)
        .then(Response => Response.json())
        .then( (data) =>{
            console.log(data);
            let imgElement = document.createElement("img");
            imgElement.src = data.img;
            let sectionElement = document.getElementById("image");
            sectionElement.appendChild(imgElement);
        })
    .catch(err=>console.log(err))
}
window.onload = fetchImage;