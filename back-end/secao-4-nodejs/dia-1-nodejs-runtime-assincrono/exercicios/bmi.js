const weightInKg = 75;
const heightInCm = 196; 

function handleBMI(weight, height) {
    
    const heightInMeters = height / 100;
    const heightSquared = heightInMeters ** 2;
    
    const bmi = weight / heightSquared;
    
    console.log(`Weight: ${weight}, Height: ${heightInMeters}`);
    return bmi;
}

function main() {
  const bmi = handleBMI(weightInKg, heightInCm);

  console.log(`BMI: ${bmi.toFixed(2)}`);
}

main();