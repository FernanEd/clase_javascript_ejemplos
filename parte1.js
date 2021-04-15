let x = 4;

const PI = 3.1416;

let y = x;

x = 2;

let a = "hola";

let b = `${x} ojos`;

// console.log(b);

function sumar(n1, n2) {
  return n1 + n2;
}

function restar(n1, n2) {
  return n1 - n2;
}

// console.log(sumar(1, 1), restar(5, 3), restar(sumar(5, 5), 5));

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let vocales = ["a", "e", "i", "o", "u"];

// console.log(numeros[2], vocales[3]);

numeros.push(10);
vocales.pop();

// console.log(numeros, vocales);

numeros.shift();
vocales.unshift("u");

// console.log(numeros, vocales);

// console.log(vocales.indexOf("a"), vocales.indexOf("z"), numeros.includes(12));

let caracteres = [1, 2, 3, "a", "b", "c"];

function generarPassword(caracteres, longitudpassword) {
  let posiblesIndexes = caracteres.length;

  let password = "";

  for (let i = 0; i < longitudpassword; i++) {
    let caracterIndex = Math.floor(Math.random() * posiblesIndexes);
    password += caracteres[caracterIndex];
  }

  return password;
}

// console.log(generarPassword(caracteres, 50));

const bebe = {
  id: 1,
  "año de nacimiento": "2001",
};

// console.log(bebe.id, bebe["año de nacimiento"]);

let yo = {
  nombre: "fernando",
  edad: 19,
  saludar: function () {
    console.log(`Hola soy ${this.nombre}`);
  },
};

const jose = {
  nombre: "jose",
  edad: 20,
  saludar: function () {
    console.log(`Hola soy ${this.nombre}`);
  },
};

let miguel = {
  nombre: "miguel",
  edad: 5,
  saludar: function () {
    console.log(`Hola soy ${this.nombre}`);
  },
};

// console.log(yo);

let personas = [yo, jose, miguel];

// console.log(personas);

function imprimirPersonas(personas) {
  for (let persona of personas) {
    // persona.edad = 20;
    console.log(persona.nombre, persona.edad);
  }
}

// imprimirPersonas(personas);

// console.log(personas);

// console.log(JSON.stringify(yo));

// let otroYo = JSON.parse('{"nombre":"fernando","edad":19}');

// console.log(otroYo.nombre);
