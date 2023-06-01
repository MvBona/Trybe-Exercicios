const readline = require('readline-sync');

function handleBMI(weight, height) {
    
    const heightInMeters = height / 100;
    const heightSquared = heightInMeters ** 2;
    
    const bmi = weight / heightSquared;
    
    console.log(`Weight: ${weight}, Height: ${heightInMeters}`);
    return bmi;
}

function main() {
    const userWeight = readline.question('What’s your weight? ')
    const userHeight = readline.question('What’s your height? ')
    const bmi = handleBMI(userWeight, userHeight);

    console.log(`BMI: ${bmi.toFixed(2)}`);
}

main();