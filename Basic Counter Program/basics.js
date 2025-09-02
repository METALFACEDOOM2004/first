// Counter Program

const MyLabel = document.getElementById("MyLabel");
const decBtn = document.getElementById("decBtn");
const resBtn = document.getElementById("resBtn");
const incBtn = document.getElementById("incBtn");
let count = 0;

incBtn.onclick = function() {
    count++;
    MyLabel.textContent = count;
}
decBtn.onclick = function() {
    count--;
    MyLabel.textContent = count;
}
resBtn.onclick = function() {
    count = 0;
    MyLabel.textContent = count;
}




