const countEle = document.getElementById('count-element');
const incrementBtn = document.getElementById('increment-btn');
const prevEntry = document.getElementById('prv-entry');
const clearPrev = document.getElementById('clear-prev');

let count = 0;

function countBtn() {
    count = count + 1;
    countEle.textContent = count;
}

function saveBtn() {
    countStr = count + "-";
    prevEntry.textContent += countStr;
    countEle.textContent = 0
    count = 0
}
clearPrev.addEventListener('click', () => {
    prevEntry.textContent = "PREVIOUS:"
})

function saveNote() {
    var noteText = document.getElementById("note").value;
    localStorage.setItem("note", noteText);
    alert("Note saved!");
}

function clearNote() {
    document.getElementById("note").value = "";
    localStorage.removeItem("note");
}

function loadNote() {
    var noteText = localStorage.getItem("note");
    if (noteText) {
        document.getElementById("note").value = noteText;
    }
}

window.addEventListener("DOMContentLoaded", loadNote);