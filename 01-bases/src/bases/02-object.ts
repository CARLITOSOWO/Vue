export const person = {
    lastName: 'Stark',
    age: 45,
    addres: {
        city: 'New York',
        zip: 51323,
        lat: 14.23232,
        lng: 34.5667
    }
};
//as const;

const person2 = person;

person2.lastName= 'parker';

console.log({person});
console.log({person2});

console.log("TODOS LOS OBJETOS DE JAVASCRIPT SE PASAN POR REFERENCIAS");


const person3 = {...person};
person3.lastName = 'LOPEZ';

console.log("HACEMOS USO DE SPRET");
console.log({person});
console.log({person3});

console.log("HACEMOS USO DE structuredClone");
const person4 = structuredClone(person);

person4.lastName = 'JUANITO';
person4.addres.city = 'TEJOCOTE';

console.log({person});
console.log({person4});