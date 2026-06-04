// function greetPerson( name: string ){
//     return `Hola, ${ name }`;
// }
// console.log(greetPerson('FERNANDO'));


//FUNCION FLECHA 
// const greetPerson = (name: string) => {
//     return `Hola, ${ name }`;
// }

// FUNCION FLECHA EN FORMA CORTA  
// const greetPerson = (name: string) =>  `Hola, ${ name }`;



// FUNCION QUE RETORNA UN OBJETO JSON 
const getUser = () => {
    return {
        uid: 'ABC-123',
        username: 'Tony001'
    }
}

console.log( getUser() );

// FUNCION QUE RETORNA UN OBJETO JSON PERO MAS SIMPLE 
const getUser2 = () => 
(    {
        uid: 'DEF-456',
        username: 'JUAN001'
    }
)

console.log( getUser2() );


