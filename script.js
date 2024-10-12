let spans = document.getElementsByTagName("span");

function myfun() {
    for (let i = 0; i < spans.length; i++) {
        spans[i].style.fontSize = "30px";
        spans[i].style.color = "grey";
    }
}

function myfun1() {
    for (let i = 0; i < spans.length; i++) {
        spans[i].style.fontSize = "20px";
        spans[i].style.color = "black";
    }
}
