const container = document.getElementById("container");
const element = document.getElementById("element");
const start = document.getElementById("init");
const end = document.getElementById("end");

const tamContainer = 445;

let id;

start.onclick = () => {
    let pos = 0;
    id = setInterval(frame, 5);

    function frame () {
        
        if(pos == tamContainer) {
            clearInterval(id);
        } else {
            pos++;
            element.style.top = pos + "px";
        }
    }

}

end.onclick = () => {
    clearInterval(id);
    clearInterval(right);
}