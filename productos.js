
//Variables DOM 
let precioTotal = document.getElementById("precio-total");
let precioActual = 0;

//HTTP Request "GET" de ./productos.json
let myRequest = new Request("./productos.json")
fetch(myRequest)
.then((resp) => resp.json())
.then(data => {
    const guardarLocal = (clave, valor) => { sessionStorage.setItem(clave, valor) };
    //Almacenar producto por producto
    for (const producto of data) {
        guardarLocal(producto.id, JSON.stringify(producto));
    }
})

// Genero variables tomando los elementos JSON para luego utilizarlos en el DOM
let item1 = sessionStorage.getItem('1')
let item2 = sessionStorage.getItem('2')
let item3 = sessionStorage.getItem('3')
let item4 = sessionStorage.getItem('4')
let item5 = sessionStorage.getItem('5')
let item6 = sessionStorage.getItem('6')

// Change
let input01  = document.getElementById("prod-name-1");
input01.innerHTML = JSON.parse(item1).producto;
let input02  = document.getElementById("prod-name-2");
input02.innerText = JSON.parse(item2).producto;
let input03  = document.getElementById("prod-name-3");
input03.innerText = JSON.parse(item3).producto;
let input04  = document.getElementById("prod-name-4");
input04.innerText = JSON.parse(item4).producto;
let input05  = document.getElementById("prod-name-5");
input05.innerText = JSON.parse(item5).producto;
let input06  = document.getElementById("prod-name-6");
input06.innerText = JSON.parse(item6).producto;

// Eventos
let padre = document.getElementById("carrito")

// Boton 1
let btn1 = document.getElementById("btn1");
btn1.onclick = () =>{ respuestaOk(btn1) }

// Boton 2
let btn2 = document.getElementById("btn2");
btn2.onclick = () =>{ respuestaOk(btn2) }

// Boton 3
let btn3 = document.getElementById("btn3");
btn3.onclick = () =>{ respuestaOk(btn3) }

// Boton 4
let btn4 = document.getElementById("btn4");
btn4.onclick = () =>{ respuestaOk(btn4) }

// Boton 5
let btn5 = document.getElementById("btn5");
btn5.onclick = () =>{ respuestaOk(btn5) }

// Boton 6
let btn6 = document.getElementById("btn6");
btn6.onclick = () =>{ respuestaOk(btn6) }

function respuestaOk(id) {
    let lineaCarrito = document.createElement("li")
    let nombreProducto;
    let precioProducto;
    switch (id) {
        case btn1: 
            nombreProducto = JSON.parse(item1).producto;
            precioProducto = JSON.parse(item1).precio;
            break;
        case btn2: 
            nombreProducto = JSON.parse(item2).producto;
            precioProducto = JSON.parse(item2).precio;
            break;
        case btn3: 
            nombreProducto = JSON.parse(item3).producto;
            precioProducto = JSON.parse(item3).precio;
            break;
        case btn4: 
            nombreProducto = JSON.parse(item4).producto;
            precioProducto = JSON.parse(item4).precio;
            break;
        case btn5: 
            nombreProducto = JSON.parse(item5).producto;
            precioProducto = JSON.parse(item5).precio;
            break;
        case btn6: 
            nombreProducto = JSON.parse(item6).producto;
            precioProducto = JSON.parse(item6).precio;
            break;
        default:
            console.log('An error has occurred');
    }

    let ingresarLinea = `${nombreProducto} x $${precioProducto}`
    //Agrego item carrito del Sidebar
    lineaCarrito.innerHTML = ingresarLinea;
    padre.appendChild(lineaCarrito);

    //Agrego al TOTAL
    precioActual += precioProducto;
    console.log(precioActual);
    precioTotal.innerHTML = precioActual
    //Almaceno TOTAL en Storage para luego darle una funcionalidad
    sessionStorage.setItem('precioTotal', precioActual)
    //Si precioActual es distinto que 0 aparece el carrito
    chequearPrecio()

    //Sweetalert2 Animation
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        })

        Toast.fire({
        icon: 'success',
        title: 'Agregaste un producto al carrito'
        })
        
}

let divCarrito = document.getElementsByClassName("carrito-compras");

function chequearPrecio() {
    (precioActual === 0) ? ocultarCarrito() : mostrarCarrito();
}

function ocultarCarrito() {
    document.getElementById("carrito-compras").style.display = 'none';
}

function mostrarCarrito() {
    document.getElementById("carrito-compras").style.display = 'block';
}


//Desestructuracion
const nombres = ["Aros Swarovski", "Cjto. corazón Cristal", "Argollitas con bolitas", "Anillo luna"]

const [a, b] = nombres

console.log(a) // "Aros Swarovski"
console.log(b) // "Cjto. corazón Cristal"
console.log(...nombres); // Aros Swarovski Cjto. corazón Cristal Argollitas con bolitas Anillo luna
