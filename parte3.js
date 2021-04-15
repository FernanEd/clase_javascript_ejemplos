// console.log("hola");

// console.log("como estas");

// function decirHola() {
//   console.log("hola");
// }

// for (let i = 0; i < 600000000; i++) {
//   let a = i;
// }

// decirHola();

// let datos = internet.traerDatos();

// for (dato in datos) {
//   console.log(dato);
// }

// let datos = internet.traerDatos().luego(function(){
//   for(dato in datos){
//     console.log(dato);
//   }
// })

function cargarPosts() {
  let request = new XMLHttpRequest();
  request.responseType = "json";
  request.open("GET", "https://jsonplaceholder.typicode.com/posts");
  request.send();
  request.onload = function () {
    let posts = request.response;
    console.log(posts);

    const $div = document.querySelector("#posts-div");
    for (let post of posts) {
      $div.innerHTML += `<li class="post">${post.title}</li>`;
    }
  };
}

// cargarPosts();

function cargarUsuarios() {
  let request = new XMLHttpRequest();
  request.responseType = "json";
  request.open("GET", "https://jsonplaceholder.typicode.com/users");
  request.send();
  request.onload = function () {
    let usuarios = request.response;

    console.log(usuarios);

    const $div = document.querySelector("#usuarios-div");
    for (let usuario of usuarios) {
      $div.innerHTML += `
      <div class="user">
        <p class="user-name">${usuario.name}</p>
        <p class="user-phone">${usuario.phone}</p>
        <p class="user-email">${usuario.email}</p>
      </div>
      `;
    }
  };
}

cargarUsuarios();
