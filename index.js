const text = document.querySelector(".logo");
const strText = text.textContent;

const spliting = strText.split("");

text.textContent = "";

for(let i=0; i < spliting.length; i++) {
    text.innerHTML += "<span>" + spliting[i] +"</span>"
};


let char = 0;
let timer = setInterval(onTick, 200);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if (char === spliting.length){
        complete();
        return;
    }
};

function complete(){
    clearInterval(timer);
    timer = null
}