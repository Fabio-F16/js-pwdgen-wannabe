const firstName = window.prompt('Qual è il tuo nome?')

const lastName = window.prompt('Qual è il tuo cognome?')

const preferColor = window.prompt('Qual è il tuo colore preferito?')

const randomCode = 'n28w130z'

const passwordGenerator = firstName + lastName + preferColor + randomCode

// console.log(firstName + lastName + preferColor + randomCode)

console.log(`${firstName}${lastName}${preferColor}${randomCode}`);

document.getElementById('generator').innerText = passwordGenerator;