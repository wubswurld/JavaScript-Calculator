const calc = document.querySelector('.calculator')
const keys = document.querySelector('.keys')
const display = document.querySelector('.display')

const calculate = (n1, operator, n2) => {
    let result = ''
    if (operator === 'add') {
      result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === 'subtract') {
      result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === 'multiply') {
      result = parseFloat(n1) * parseFloat(n2)
    } else if (operator === 'divide') {
      result = parseFloat(n1) / parseFloat(n2)
    }
    return result
  }

if(keys){
    keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        const previousKeyType = calc.dataset.previousKeyType
        if (!action){
            if (displayedNum === '0'|| previousKeyType === 'op') {
                display.textContent = keyContent
            }
            else {
                display.textContent = displayedNum + keyContent
            }
        }
        if (action === 'decimal'){
            display.textContent = displayedNum + '.'
        }
        if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
            calc.dataset.previousKeyType = 'op'
            calc.dataset.firstValue = displayedNum
            calc.dataset.operator = action
        }
        if (action === 'calculate')
        {
            const firstValue = calc.dataset.firstValue
            const operator = calc.dataset.operator
            const secondValue = displayedNum
            display.textContent = calculate(firstValue, operator, secondValue)
        }
        if (action === 'clear'){
            display.textContent = '0'
        }
    }
   })
}