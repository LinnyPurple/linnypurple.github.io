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

        if (isNaN(rowValue) || parseInt(Number(rowValue)) != rowValue || isNaN(parseInt(rowValue, 10))) {
            console.log(`${row} must be an integer!`);
            return false;
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
    return true;
}

function generateContestantsInput(numContestants) {
    // const contestantsDiv = document.getElementById("contestantsConfig");
    const contestantsTable = document.createElement("table");
    const genders = ["Female", "Male", "None"];
    for (i = 0; i < numContestants; i++) {
        var row = contestantsTable.insertRow();

        // Column 0: Says "Contestant #(i+1)" (C_i)
        var cellName = row.insertCell(0);
        cellName.innerHTML = `Contestant #${(i + 1)}`;

        // Column 1: Name input for C_i
        var cellNameInput = row.insertCell(1);
        cellNameInput.innerHTML = `Name: <input type="text">`;
        
        // Column 2: Gender input for C_i
        var cellGenderInput = row.insertCell(2);
        var cellGenderHTML = `<select>`;
        for (gender of genders) {
            cellGenderHTML += `<option value="${gender}">${gender}</option>`;
        }
        cellGenderInput.innerHTML = `Gender: ${cellGenderHTML}</select>`;
    }
    document.getElementById("contestantsConfig").appendChild(contestantsTable);
}