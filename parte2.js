let $titulo = document.querySelector("#titulo");

// console.log($titulo);

// $titulo.innerText = "Lol";

let titulo = $titulo.innerText;

// console.log($titulo, titulo);

let $lista = document.querySelector("#lista");

let $items = $lista.querySelectorAll(".item");
let $items2 = $lista.children;

// console.log($items, $items2);

function imprimirItems(items) {
  for (item of items) {
    console.log(item.innerText);
  }
}

// imprimirItems($items);
// imprimirItems($items2);

// console.log($("#titulo"), $("#titulo").html(), $(".item"));

// $("#titulo").html("lolon");

// imprimirItems($(".item"));

function sumarDos(numero) {
  return numero + 2;
}

function sumarTres(numero) {
  return numero + 3;
}

// console.log(sumarDos(3));

function llamarConTres(jose) {
  return jose(3);
}

// console.log(llamarConTres(sumarTres), llamarConTres(sumarDos));

function avisar(evento) {
  alert("Alerta!");
  console.log(evento.target.innerText);
}

document.querySelector("#titulo").addEventListener("click", avisar);

// function addEventListener(tipoEvento, funcion) {
//   if (tipoEvento === true) {
//     funcion(evento);
//   }
// }

// $("#titulo").click(function (e) {
//   alert("aaaaa");
// });

// EJEMPLOS

const $contadorBtn = document.querySelector("#boton-contador");
let counter = 0;
$contadorBtn.addEventListener("click", function () {
  counter++;
  alert(counter);
});

const $form = document.querySelector("form");
$form.addEventListener("submit", function (e) {
  // e.preventDefault();
  const $nombre = $form.querySelector("input");
  const nombre = $nombre.value;
  alert(`Hola ${nombre}`);
});

const $select = document.querySelector("select");
$select.addEventListener("change", function (e) {
  const valor = $select.value;
  console.log(valor);

  if (valor === "bien") {
    document.body.style.backgroundColor = "#afa";
  } else {
    document.body.style.backgroundColor = "#faa";
  }
});

const $campo = document.querySelector("#campoprueba");
$campo.addEventListener("input", function (e) {
  const valor = e.target.value;
  if (valor === "espiraculo") {
    alert("sos un crack");
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key == "7") {
    console.log("siete");
  }
});
