export const numberArray = [1,2,3,4,5];
numberArray.push(6);

const numberArray2 = [...numberArray];
numberArray2.push(7);

console.log({numberArray});
console.log({numberArray2});

console.log("CREAMOS UN ARREGLO EL CUAL PERMITA NUMEROS Y STRINGS ")
const numberArray3: (number|string)[] = [...numberArray];
numberArray3.push('8');

console.log({numberArray3});
