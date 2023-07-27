console.log('connected')

let buttonBoxes = document.querySelectorAll('.button')
console.log(buttonBoxes);

let display = document.querySelector('#display')
console.log(display)

for (let box of buttonBoxes) {
    box.addEventListener('click', () => {
        let text = document.createTextNode(box.innerText)
        display.appendChild(text)
        console.log(box.innerText)
    })
}
let equals = document.querySelector('#equals')
equals.addEventListener('click', () => {
    let answer = eval(display.innerText)
    console.log(answer)
    display.innerText = answer
})


let clear = document.querySelector('#clear')
clear.addEventListener('click', () => {
    display.innerText = ''
})