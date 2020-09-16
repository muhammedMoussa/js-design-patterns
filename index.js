import {basicModule} from './patterns/module'

const output = document.querySelector('.output');
const incrementBtn = document.querySelector('.increment');
// function increment() {
//     return basicModule.increment()
// }

incrementBtn.addEventListener('click', () => {
    console.log(basicModule)
    return basicModule.increment()
})

output.innerHTML = `
    <p>${basicModule.counter}</p>
`
