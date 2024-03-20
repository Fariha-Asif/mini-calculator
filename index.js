import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    { message: ((chalk.bold)("Enter first number")), type: "number", name: ((chalk.blue)("firstNumber")) },
    { message: ((chalk.bold)("Enter Second number")), type: "number", name: ((chalk.red)("secondNumber")) },
    {
        message: "Select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: [((chalk.bold)("Addition", "Subtraction", "Multiplication", "Division", "Modulus", "Exponention"))],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtration") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "Modulus") {
    console.log(answer.firstNumber % answer.secondNumber);
}
else if (answer.operator === "Exponention") {
    console.log(answer.firstNumber ** answer.secondNumber);
}
else {
    console.log("Please Select Valid Operator.");
}
