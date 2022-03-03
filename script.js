alert('Sei pronto a generare la tua password?')

const firstName = window.prompt('Qual è il tuo nome?')

const lastName = window.prompt('Qual è il tuo cognome?')

const preferColor = window.prompt('Qual è il tuo colore preferito?')

const randomCode = Math.floor(Math.random() * 10000000000) + 1;

console.log(`${firstName}${lastName}${preferColor}${randomCode}`);
// console.log(firstName + lastName + preferColor + randomCode)


const passwordGenerator = `${firstName}${lastName}${preferColor}${randomCode}`;

document.getElementById('generator').innerText = passwordGenerator;












// function getRandomString(length) {
//     var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var result = '';
//     for (var i = 0; i < length; i++) {
//         result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
//     }
//     return result;
// }











