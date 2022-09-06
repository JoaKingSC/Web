
const title = document.getElementById("title");

const tamContainer = 445;

title.onmouseover = () => {
    title.innerHTML = "CAMBIANDO EL TITULO"
    title.style.backgroundColor = "red"
    title.style.border = "none"
}

title.onmouseout = () => {
    title.innerHTML = "PASA EL RATON POR ENCIMA"
    title.style.backgroundColor = "white"
    title.style.border = "10px solid red"
}

