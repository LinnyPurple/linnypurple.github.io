/*
 @return A list of variables for the user to input.
 */
function getUserVariables() {
    return ["Contestants", "Days", "Tribes"];
}

/*
 Generates the input table.
 */
function generateUserTable() {
    const userTable = document.querySelector("#userTable");
    const userRows = getUserVariables();
    console.log(userTable);

    for (row of userRows) {
        userTable.insertAdjacentHTML('beforeend',
            `<tr><td>${row}: </td><td><input type="text" id="userTable${row}"></td></tr>`);
        console.log(row);
    }
}

/*
 Checks whether the user's inputs are valid:
 - Contestants is a positive integer >= 3.
 - Days is a positive integer.
 - Tribes is a positive integer.
 @return A boolean - true if the above conditions hold, false otherwise.
 */
function checkUserConfig() {
    const userRows = getUserVariables();
    
    for (row of userRows) {
        var rowValue = document.getElementById(`userTable${row}`).value;
        console.log(`${row}: ${rowValue}`);

        // Checks if rowValue is an integer
        if (isNaN(rowValue) || parseInt(Number(rowValue)) != rowValue || isNaN(parseInt(rowValue, 10))) {
            console.log(`${row} must be an integer!`);
            return false;
        // Checks if rowValue fits within the parameters for each user variable
        } else {
            var rowValueParsed = parseInt(Number(rowValue));

            if (row == "Contestants" && rowValueParsed < 3) {
                console.log("Contestants must be >= 3!");
                return false;
            } else if (row == "Days" && rowValueParsed < 1) {
                console.log("Days must be >= 1!");
                return false;
            } else if (row == "Tribes" && rowValueParsed < 1) {
                console.log("Tribes must be >= 1!");
                return false;
            }
        }
    }
    generateContestantsInput(parseInt(Number(document.getElementById("userTableContestants").value)));
    generateTribesInput(parseInt(Number(document.getElementById("userTableTribes").value)));
    return true;
}

function generateContestantsInput(numContestants) {
    document.getElementById("contestantsConfig").innerHTML += "<h3>Contestants Input</h3>";
    const contestantsTable = document.createElement("table");
    const genders = ["Female", "Male", "None"];
    for (i = 0; i < numContestants; i++) {
        var row = contestantsTable.insertRow();

        // Column 0: Says "Contestant #(i+1)" (C_k)
        var cellName = row.insertCell(0);
        cellName.innerHTML = `Contestant #${(i + 1)}`;

        // Column 1: Name input for C_k
        var cellNameInput = row.insertCell(1);
        cellNameInput.innerHTML = `Name: <input type="text">`;
        
        // Column 2: Gender input for C_k
        var cellGenderInput = row.insertCell(2);
        var cellGenderHTML = `<select>`;
        for (gender of genders) {
            cellGenderHTML += `<option value="${gender}">${gender}</option>`;
        }
        cellGenderInput.innerHTML = `Gender: ${cellGenderHTML}</select>`;
    }
    document.getElementById("contestantsConfig").appendChild(contestantsTable);
}

function generateTribesInput(numTribes) {
    document.getElementById("contestantsConfig").innerHTML += "<h3>Tribes Input</h3>"
    const tribesTable = document.createElement("table");
    for (i = 0; i < numTribes; i++) {
        var row = tribesTable.insertRow();

        // Column 0: Says "Tribe #(i+1)" (T_k)
        var cellName = row.insertCell(0);
        cellName.innerHTML = `Tribe #${i + 1}`;

        // Column 1: Name input for T_k
        var cellNameInput = row.insertCell(1);
        cellNameInput.innerHTML = `Name: <input type="name">`;

        // Column 2: Initial tribe members input for T_k
        var cellInitialMembersInput = row.insertCell(2);
        cellInitialMembersInput.innerHTML = `Initial Members: <input type="name">`;

        // Column 3: Tribe color input for T_k
        var cellTribeColorInput = row.insertCell(3);
        cellTribeColorInput.innerHTML = `Tribe Color: <input type="color">`;
    }
    document.getElementById("tribesConfig").appendChild(tribesTable);
}