// import readLine from 'readline-sync';
const readline = require('readline-sync');

const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual sua idade? ');

console.log(`Seu nome é ${name} e tem ${age} anos`);