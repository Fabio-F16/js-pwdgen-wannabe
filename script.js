alert('Sei pronto a generare la tua password?');

const firstName = window.prompt('Qual è il tuo nome?', 'Nome');

const lastName = window.prompt('Qual è il tuo cognome?', 'Cognome');

const preferColor = window.prompt('Qual è il tuo colore preferito?', 'Colore');

const randomCode = Math.floor(Math.random() * 10000000000) + 1;

// console.log(`${firstName}${lastName}${preferColor}${randomCode}`);
// console.log(firstName + lastName + preferColor + randomCode)


const passwordGenerator = `${firstName}${lastName}${preferColor}${randomCode}`;
console.log(passwordGenerator)

document.getElementById('generator').innerText = passwordGenerator;












// function getRandomString(length) {
//     var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var result = '';
//     for (var i = 0; i < length; i++) {
//         result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
//     }
//     return result;
// }











