const readline = require('readline-sync');

function handleBMI(weight, height) {
    
    const heightInMeters = height / 100;
    const heightSquared = heightInMeters ** 2;
    
    const bmi = weight / heightSquared;
    
    console.log(`Weight: ${weight}, Height: ${heightInMeters}`);
    return bmi;
}

function main() {
    const userWeight = readline.questionFloat('What’s your weight? ');
    const userHeight = readline.questionInt('What’s your height? ');
    const bmi = handleBMI(userWeight, userHeight).toFixed(2);
    let situation;

    if(bmi >= 18.5) {
        situation = 'Abaixo do peso (magreza)';
    };
    if (bmi > 18.15 && bmi < 24.9) {
        situation = 'Peso normal';
    };
    if (bmi > 25 && bmi < 29.9) {
        situation = 'Acima do peso (sobrepeso)';
    };
    if (bmi > 30 && bmi < 34.9) {
        situation = 'Obesidade grau I';
    };
    if (bmi > 35 && bmi < 39.9) {
        situation = 'Obesidade grau II';
    };
    if (bmi > 40) {
        situation = 'Obesidade grau III';
    };

    console.log(`BMI: ${bmi}  Situação: ${situation}`);
}

main();