const numberInput = document.getElementById('number')
const convertBtn = document.getElementById('convert-btn')
const output = document.getElementById('output')
const numerals = [
    {
        roman: 'M',
        arabic: 1000
    },
    {
        roman: 'CM',
        arabic: 900
    },
    {
        roman: 'D',
        arabic: 500
    },
    {
        roman: 'CD',
        arabic: 400
    },
    {
        roman: 'C',
        arabic: 100
    },
    {
        roman: 'XC',
        arabic: 90
    },
    {
        roman: 'L',
        arabic: 50
    },
    {
        roman: 'XL',
        arabic: 40
    },
    {
        roman: 'X',
        arabic: 10
    },
    {
        roman: 'IX',
        arabic: 9
    },
    {
        roman: 'V',
        arabic: 5
    },
    {
        roman: 'IV',
        arabic: 4
    },
    {
        roman: 'I',
        arabic: 1
    },
]

const convertToRoman = (input) => {
    let result = ''
    for(let numeral of numerals){
        while(input >= numeral.arabic){
            result += numeral.roman
            input -= numeral.arabic
        }
    }
    output.textContent = result
}

const checkUserInput = () => {
    const inputInt = parseInt(numberInput.value)
    if (!numberInput.value) {
        output.textContent = 'Please enter a valid number.'
    }
    else if (inputInt <= 0) {
        output.textContent = 'Please enter a number greater than or equal to 1.'
        numberInput.value = ''
    }
    else if (inputInt >= 4000) {
        output.textContent = 'Please enter a number less than or equal to 3999.'
        numberInput.value = ''
    } else {
        convertToRoman(inputInt)
        numberInput.value = ''
    }
}

convertBtn.addEventListener('click', checkUserInput)