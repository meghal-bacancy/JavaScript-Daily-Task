
function getPositiveNumbers(arr) {
    let positiveNumbersArr = [];
    arr.forEach(i => {
        if (i > 0) {
            positiveNumbersArr.push(i);
        }
    });
    return positiveNumbersArr;
}

function getSquaredEvens(arr) {
    let evenSquaredNumbers = []
    arr.forEach(i => {
        if (i % 2 == 0) {
            evenSquaredNumbers.push(i * i);
        }
    });
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
    
    notes.push(textContainer.value.trim());
    textContainer.value = "";
    displayNotes(notes);
}

displayNotes(notes);
