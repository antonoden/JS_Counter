let count = 0;
let countEL = document.getElementById("count-el"); 
let savedCountsEl = document.getElementById("savedCounts")

function addButtonClicked() {
    count += 1
    countEL.innerText = count    
}

function saveButtonClicked() {
    savedCountsEl.textContent += count + " - "
    count = 0;
    countEL.textContent = 0;
}

