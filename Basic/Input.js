//Function to calculate of two numbers;;
function calculateSum(a, b){
    return a+b;
}

//taking user input for the two numbers;;
const num1 = parseFloat(prompt("Enter the first number: "));
const num2 = parseFloat(prompt("Enter the second number: "));

//Calculate the sum using the function;;
//calling the function using const sum;;
const sum = calculateSum(num1, num2);

//Displaying the result ;;
console.log(`The sum of ${num1} and ${num2} is: ${sum}`);