let arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]//NUMBER
let arrayLower = [] //LOWER CASE
let arrayUpper = [] //UPPERCASE
let arraySpecial = [] //SPECIAL SYMBOLS


//LOWER CASE
const lowerCase = () => {
    for (let i = 97; i <= 122; i++) {
        arrayLower.push(String.fromCharCode(i));
    }
}
lowerCase();


//UPPERCASE
const uppercase = () => {
    for (let i = 65; i <= 90; i++) {
        arrayUpper.push(String.fromCharCode(i));
    }
}
uppercase();


//SPECIAL SYMBOLS
const symbols = () => {
    for (let i = 33; i <= 47; i++) {
        arraySpecial.push(String.fromCharCode(i));
    }

    for (let i = 91; i <= 96; i++) {
        arraySpecial.push(String.fromCharCode(i));
    }
}
symbols();



// Установка значения по умолчанию длины пароля
document.getElementById('numLength').textContent = document.getElementById('passwordLength').value

// Установка длины пароля вручную
document.getElementById('passwordLength').addEventListener('input', setLengthPassword)
function setLengthPassword() {
    document.getElementById('numLength').textContent = this.value
}

// Генерация списка случайных паролей
document.getElementById('generate').addEventListener('click', generatePassword)
function generatePassword() {
    customArray = []
    if(document.getElementById('number').checked) {
        customArray = customArray.concat(arrayNumber)
    }
    if(document.getElementById('lowerSymbol').checked) {
        customArray = customArray.concat(arrayLower)
    }
    if(document.getElementById('upperSymbol').checked) {
        customArray = customArray.concat(arrayUpper)
    }
    if(document.getElementById('specialSymbol').checked) {
        customArray = customArray.concat(arraySpecial)
    }

    document.getElementById('out').innerHTML = ''
    if (customArray.length !== 0) {
        customArray.sort(compareRandom)
        for(let i = 0; i < 6; i++) {
            createPassword(customArray)
        }
    }
}

// Перемешивание массива случайным образом
function compareRandom() {
    return Math.random() - 0.5;
}

function createPassword(array) {
    let passLength = parseInt(document.getElementById('passwordLength').value)
    let pass = ''
    for(let i = 0; i < passLength; i++) {
        let symbol = randomSymbol(0,array.length-1)
        pass += array[symbol]
    }
    document.getElementById('out').innerHTML += `<p>${pass}</p>`
}

function randomSymbol(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}
