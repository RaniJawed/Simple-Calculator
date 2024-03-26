#! /user/bin/env node
import inquirer from "inquirer";
//printing a wellcome message
console.log("\n\twellcome to \'RaniJawed\' -CLI Simple Calculator\n");
// Asking question from users through inquirer
let answers = await inquirer.prompt([
    { message: "Enter   First Number", type: "number", name: "firstNumber" },
    { message: "Enter  second number", type: "number", name: "secondNumber" },
    {
        message: "select one Operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
// conditional statements If-Else
if (answers.operator === "addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "subtraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    console.log("Invalid Input");
}
;
