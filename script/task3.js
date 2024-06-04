//area of the triangle

let base = document.querySelectorAll('input')[0]
let height = document.querySelectorAll('input')[1]
let button = document.querySelector('button')
let output = document.querySelector('p')



function calc() {
    output.innerText += ' ' + ((1/2) * base.value * height.value ) + ' square units'
}

button.addEventListener('click', calc)




