<script>
  <script>

  if (!action) {
      console.log('number key!')
  }
  if (
    !action === 'add' ||
    !action ==='subtract' ||
    !action === 'multiply' ||
    !action === 'divide'
  ) {
    console.log('operator key!')
  }

  if (!action === 'decimal') {
    console.log('decimal key!')
  }

  if (!action === 'clear') {
    console.log('clear key!')
  }

  if (!action === 'calculate') {
    console.log ('equal key!')

  const calculator = document.querySelector('.calculator')
  const keys = calculator.querySelector('.calculator__keys')


  const action = key.dataset.action
  const display = document.querySelector('.calculator__display')

  const keyContent = key.textContent
  const displayedNum = display.textContent


  if (!action) {
    if (displayedNum === '0') {
      display.textContent = keyContent


  if (!action) {
      if(displayedNum === '0'){
        display.textContent = key.textContent
      } else {
        display.textContent = display.textContent + keys.textContent

  if (action === 'decimal') {
    display.textContent = display.textContent + "."



      if(
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
      ){

        calculator.dataset.previousKeyType = 'key--operator'

  const previousKeyType = calculator.dataset.previousKeyType

  if(!action) {
      if(displayedNum === '0' || previousKeyType === 'key--operator') {
        display.textContent = keyContent
      } else {
        display.textContent = displayedNum + keyContent



calculator.dataset.firstValue = displayedNum
    calculator.dataset.operator = action

  if (action === 'calculate') {
    const firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const secondValue = displayedNum

    display.textContent = calculate(firstValue, operator, secondValue)


  const calculate = (n1, operator, n2) => {
    let result = ' '
    if (operator === 'add') {
      result = n1 + n2
    }else if (operator === 'subtract'){
      result = n1 - n2
    }else if (operator === 'multiply'){
      result = n1 * n2
    }else if (operator === 'divide'){
      result = n1 / n2

    return result



</script>
</script>
