// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

//- Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0.

const numbers = [20,100,1000,10000];

for (let counter = numbers.length -1; counter>=0; counter--){
    console.log (numbers[counter])
};

//- Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const tenNumbers = arrayAddition =>{
    let addition = 0;
    for (let counter = 0; counter<arrayAddition.length;counter++){
        addition+=arrayAddition[counter];
    }
    console.log(addition);
}
const arrayAddition = [1,1,1,1,1,1,1,1,1,1];
tenNumbers (arrayAddition);

//- Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10. Para el 4 el resultado debe ser:

const multiplication = arrayMultiplication =>{
    let noSe = 0;
    for (let counter = 0; counter<11;counter++){
        noSe*arrayMultiplication [counter];
    }
    console.log(noSe);
}
const arrayMultiplication = [4];
multiplication (arrayMultiplication);

//- Crea la función inversa para que la tabla de multiplicar salga en orden inverso. Para el 4 el resultado debe ser:


const multiplicationNegative = arrayMultiplicationNegative =>{
    let noSe = 0;
    for (let counter = 0; counter>-1;counter--){
        noSe*arrayMultiplicationNegative [counter];
    }
    console.log(noSe);
}
const arrayMultiplicationNegative = [4];
multiplicationNegative (arrayMultiplicationNegative);