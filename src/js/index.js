// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

//- Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0.

const numbers = [20, 100, 1000, 10000];

for (let counter = numbers.length - 1; counter >= 0; counter--) {
  console.log(numbers[counter]);
}

//- Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const tenNumbers = arrayAddition => {
  let addition = 0;
  for (let counter = 0; counter < arrayAddition.length; counter++) {
    addition = addition + arrayAddition[counter];
  }
  console.log(addition);
};
const arrayAddition = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
tenNumbers(arrayAddition);

//- Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10. Para el 4 el resultado debe ser:

const multiplication = number => {
  for (let counter = 0; counter <= 10; counter++) {
    console.log(`${number} x ${counter} es ${number * counter}`);
  }
};

multiplication(4);

//- Crea la función inversa para que la tabla de multiplicar salga en orden inverso. Para el 4 el resultado debe ser:

const multiplicationNeg = number => {
  for (let counter = 10; counter >= 0; counter--) {
    console.log(`${number} x ${counter} es ${number * counter}`);
  }
};
multiplicationNeg(4);

//- Crea una función que reciba el año actual y tu edad, la función debe imprimir:

//- "naciste en el año X"
//- "En el año X cumpliste 1 año"
//- "En el año X cumpliste 2 años"
//- "En el año X cumpliste 3 años"

const year = (year, age) => {
  console.log(`Naciste en el año ${year - age}`);
  for (let counter = 1; counter <= 22; counter++) {
    if (counter === 1) {
      console.log(`En el año ${counter + (year - age)} cumpliste ${counter} año`);
    } else {
      console.log(`En el año ${counter + (year - age)} cumpliste ${counter} años`);
    }
  }
};
year(2024, 22);

//- Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12.

const twoNumbers = (numberA, numberB) => {
  for (let counter = 2; counter <= 12; counter++) {
    if (counter % 2 === 0) {
      console.log(counter);
    }
  }
};
twoNumbers(2, 12);

//- Crea una función que genere 2 arrays y los rellene con 5 números aleatorios cada uno, la función debe decir qué valores se han repetido en los dos arrays.
//[1,2,3,4,5] y [1,2,3,4,5]

const twoArrays = () => {
  const arrayA = [];
  const arrayB = [];
  for (let counter = 0; counter <= 5; counter++) {
    const randomA = Math.floor(Math.random() * counter.length);
    const randomB = Math.floor(Math.random() * counter.length);
  }
};


//- Crea una función que reciba un número y te diga si es primo o no. Un número primo es aquel que sólo puede dividirse por si mismo Y UNO

// X % X === 0 

const primeNumber = () =>{
  for (let counter=0;counter<=primeNumber;counter++){
    if (primeNumber%primeNumber===0 && primeNumber%1===0 ) {
      console.log(`El número ${primeNumber} es primo`);
    } 
    else {
      console.log(`El número ${primeNumber} NO es primo`);
    }
  }
};
primeNumber (7);