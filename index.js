import {revealingModule} from './patterns/module'

const output = document.querySelector('.output');
const incrementBtn = document.querySelector('.increment');

incrementBtn.addEventListener('click', () => {
    revealingModule.setName('ssssss')
    console.log(revealingModule)
})

output.innerHTML = `
    <p>${revealingModule.greeting}</p>
`
