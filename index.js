import { Car } from './patterns/constructor';

var civic = new Car( 'Honda Civic', 2009, 20000 );
var mondeo = new Car( 'Ford Mondeo', 2010, 5000 );

const output = document.querySelector('.output');

output.innerHTML = `
    <p>${civic.toString()}</p>
    <p>${mondeo.toString()}</p>
`

