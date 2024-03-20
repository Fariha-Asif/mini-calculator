import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    {
        message: chalk.white.bold.italic("Enter first number"),
        type: "number",
        name: chalk.blue.bold.italic("Number-1"),
    },
    {
        message: chalk.white.bold.italic("Enter Second number"),
        type: "number",
        name: chalk.red.bold.italic("Number-2"),
    },
    {
        message: "Select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition",
            "Subtraction",
            "Multiplication",
            "Division",
            "Modulus",
            "Exponention"],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.Number - 1 + answer.Number - 2);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.Number - 1 - answer.Number - 2);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.Number - 1 * answer.Number - 2);
}
else if (answer.operator === "Division") {
    console.log(answer.Number - 1 / answer.Number - 2);
}
else if (answer.operator === "Modulus") {
    console.log(answer.Number - 1 % answer.Number - 2);
}
else if (answer.operator === "Exponention") {
    console.log(answer.Number - 1 ** answer.Number - 2);
}
else {
    console.log("Please Select Valid Operator.");
}
