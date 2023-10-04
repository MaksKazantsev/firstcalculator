const resultElement = document.getElementById('result')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplyBtn = document.getElementById('multiply')
const divideBtn = document.getElementById('divide')
const submitBtn = document.getElementById('submit')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
let action = '+'


minusBtn.addEventListener('click', () =>{
    action = '-'
})
plusBtn.addEventListener('click', () => {
    action = '+'
}) 
multiplyBtn.addEventListener('click', () => {
    action = '*'
})
divideBtn.addEventListener('click', () => {
    action = '/'
})
submitBtn.addEventListener('click', () => {
   switch (action) {
    case "+":
        resultElement.textContent = Number(input1.value) + Number(input2.value)
        break
    case "-":
            resultElement.textContent = Number(input1.value) - Number(input2.value)
        break
    case "*":
        resultElement.textContent = Number(input1.value) * Number(input2.value)
        break
    case "/":
        resultElement.textContent = (Number(input1.value) / Number(input2.value))
        break
   }
   redOrGreen()
})

