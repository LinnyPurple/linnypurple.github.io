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
            '<tr><td>' + row + ': </td><td><input type="text" id="userTable' + row + '"></td></tr>');
        console.log(row);
    }
}

/*
 Checks whether the user's inputs are valid:
 - Contestants is a positive integer >= 3.
 - Days is a positive integer.
 - Tribes is a positive integer.
 */
function checkUserConfig() {
    const userRows = getUserVariables();
    
    for (row of userRows) {
        var rowValue = document.getElementById("userTable" + row).value;
        console.log(row + ": " + rowValue);
        if (isNaN(rowValue) || parseInt(Number(rowValue)) != rowValue || isNaN(parseInt(rowValue, 10))) {
            console.log(row + " must be an integer!");
        } else {
            var rowValueParsed = parseInt(Number(rowValue));
            if (row == "Contestants" && rowValueParsed < 3) console.log("Contestants must be >= 3!")
            if (row == "Days" && rowValueParsed < 1) console.log("Days must be >= 1!");
            if (row == "Tribes" && rowValueParsed < 1) console.log("Tribes must be >= 1!");
        }
    }
}