import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your First Number", type: "number", name: "First" },
    { message: "Enter your Second Number", type: "number", name: "Second" },
    {
        message: "Please enter your operator",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division",],
        name: "Operator"
    }
]);
if (answer.Operator === "Addition") {
    console.log(answer.First + answer.Second);
}
else if (answer.Operator === "Subtraction") {
    console.log(answer.First - answer.Second);
}
else if (answer.Operator === "Multiplication") {
    console.log(answer.First * answer.Second);
}
else if (answer.Operator === "Division") {
    console.log(answer.First / answer.Second);
}
else {
    console.log("Please enter a valid operator");
}
