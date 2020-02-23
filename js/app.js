function showResult() {
    alert("I love you too!!")
}
function btnNoRun(id) {
    let random1 = Math.floor(Math.random() * 1920);
    let random2 = Math.floor(Math.random() * 920);
    document.getElementById(id).style.left = random1 + "px";
    document.getElementById(id).style.top = random2 + "px";
}
