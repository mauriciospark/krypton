/*
  ============================================================================
  PROPRIETÁRIO: Mauricio Spark
  MARCA:        Spark Mauricio
  PROJETO:      KRYPTON
  VERSÃO:       v1.0.0
  LINHAGEM:     SPARK
  ============================================================================
  Documento de Planejamento de Escopo
  COPYRIGHT: © 2026 / Mauricio Spark. Todos os direitos reservados.
  ============================================================================
*/
const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const charSets = {
    lower: 'abcdefghijklmnopqrstuvwxyz',
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    symbol: '!@#$%^&*(){}[]=<>/,.'
}

clipboardEl.addEventListener('click', () => {
    const password = resultEl.innerText;
    if (!password) {
        return;
    }
    navigator.clipboard.writeText(password);
    alert('Senha copiada com segurança para a área de transferência!')
})

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

function generatePassword(lower, upper, number, symbol, length) {
    const typesArr = []
    if (lower) typesArr.push('lower')
    if (upper) typesArr.push('upper')
    if (number) typesArr.push('number')
    if (symbol) typesArr.push('symbol')
    
    if (typesArr.length === 0) {
        return ''
    }

    // Build character pool from all selected types
    let charPool = ''
    typesArr.forEach(type => {
        charPool += charSets[type]
    })

    // Guarantee at least one character from each selected type
    let password = ''
    typesArr.forEach(type => {
        password += getRandomChar(charSets[type])
    })

    // Fill the rest with random characters from the pool
    const remainingLength = length - password.length
    for (let i = 0; i < remainingLength; i++) {
        password += getRandomChar(charPool)
    }

    // Fisher-Yates shuffle to break predictable patterns
    password = fisherYatesShuffle(password)

    return password
}

function getRandomChar(charSet) {
    const array = new Uint32Array(1)
    window.crypto.getRandomValues(array)
    return charSet[array[0] % charSet.length]
}

function fisherYatesShuffle(str) {
    const arr = str.split('')
    for (let i = arr.length - 1; i > 0; i--) {
        const array = new Uint32Array(1)
        window.crypto.getRandomValues(array)
        const j = array[0] % (i + 1)
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    return arr.join('')
}
