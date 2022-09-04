let title = document.getElementById("title");
let div = document.getElementById("container");
let header = document.getElementById("cabecera");
let footer = document.getElementById("pie");
let image = document.getElementById("imagen");

let parrafo = document.createElement("p");
parrafo.innerHTML = "Se trata de un parrafo";

div.appendChild(parrafo);

let h2 = document.createElement("h2")

header.onclick = () => {
    h2.innerHTML = "Se trata de un subtitulo de calibre 2"
    div.appendChild(h2)
}

footer.onclick = () => {
    div.removeChild(h2);
}

image.setAttribute("width", "100px")
image.setAttribute("height", "100px")