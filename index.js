let passwordLength = document.getElementById('passwordlength')
let password = document.getElementById('password')
let saveButton = document.getElementById('savebutton')

function generatePassword(len){
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numeric = "1234567890"
    const symbol = "!@#$%^&*()_-+={}[]';:?,.<>~`"

    const data = lowerAlphabet + upperAlphabet + numeric +symbol
    let generator =''

    for (let index = 0; index < len; index++) {
        generator += data[~~(Math.random() * data.length)]
    }
    return generator
}

function getPassword(){
    const newPassword = generatePassword(passwordLength.value)
    password.value = newPassword 
}

function savePassword(){
    document.title = password.value
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password gweh: ${document.title}`))
    saveButton.setAttribute('download', 'passwordGen.txt')
}