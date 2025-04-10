
function getPositiveNumbers(arr) {
    let positiveNumbersArr = arr.filter(n => n > 0);
    return positiveNumbersArr;
}

function getSquaredEvens(arr) {
    let even = arr.filter(n => n % 2 === 0);
    let evenSquaredNumbers = even.map(n => n * n);
    return evenSquaredNumbers;
}

function getFee(isMember) {
    return isMember == true ? '$2.00' : '$10.00';
}

console.log(getPositiveNumbers([-3,5,4,-9,2,1]));
console.log(getSquaredEvens([-3,5,4,-9,2,1]));
console.log(getFee(true));
console.log(getFee(false));

const notes = [
]

function displayNotes(notesArray) {
    const container = document.getElementById("notesContainer");
    container.innerHTML = "";

    notesArray.forEach((note, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const paragraph = document.createElement("p");
        paragraph.textContent = note;
        paragraph.classList.add("task-text");

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("task-buttons");

        const doneBtn = document.createElement("button");
        doneBtn.textContent = "Done";
        doneBtn.classList.add("button");
        doneBtn.addEventListener("click", () => {
            paragraph.classList.toggle("done");
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("button", "done-btn");
        deleteBtn.addEventListener("click", () => {
            notesArray.splice(index, 1);
            displayNotes(notesArray);
        });

        buttonContainer.appendChild(doneBtn);
        buttonContainer.appendChild(deleteBtn);

        card.appendChild(paragraph);
        card.appendChild(buttonContainer);
        container.appendChild(card);
    });
}

function addNotes(){
    const textContainer = document.getElementById("taskInput");
    
    const text = textContainer.value.trim();
    if (text)
    {
        notes.push(text);
    }
    textContainer.value = "";
    displayNotes(notes);
}

displayNotes(notes);
