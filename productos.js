
//Variables DOM 
let precioTotal = document.getElementById("precio-total");
let precioActual = 0;
localStorage.setItem('precioTotal', precioActual)

//carrito en session storage
let carritoCompras = ""
localStorage.setItem('carritoCompras', carritoCompras)

//HTTP Request "GET" de ./productos.json
let myRequest = new Request("./productos.json")
fetch(myRequest)
.then((resp) => resp.json())
.then(data => {
    const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
    //Almacenar producto por producto
    for (const producto of data) {
        guardarLocal(producto.id, JSON.stringify(producto));
    }
})

// Genero variables tomando los elementos JSON para luego utilizarlos en el DOM
let item1 = localStorage.getItem('1')
let item2 = localStorage.getItem('2')
let item3 = localStorage.getItem('3')
let item4 = localStorage.getItem('4')
let item5 = localStorage.getItem('5')
let item6 = localStorage.getItem('6')
let sumaPrecio = localStorage.getItem('precioTotal')
console.log(sumaPrecio);
console.log(item1.producto);

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

// Boton "Limpiar"
let btnLimpiar = document.getElementById("clear")
btnLimpiar.onclick = () => { respuestaLimpiar() }

// Boton "Comprar"
let btnComprar = document.getElementById("buy")
btnComprar.onclick = () => { respuestaComprar() }

function respuestaOk(id) {
    let padre = document.getElementById("carrito")

    let lineaCarrito = document.createElement('li')
    lineaCarrito.id = "linea-carrito"

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
    localStorage.setItem('precioTotal', precioActual)

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

function respuestaComprar() {

    if (precioActual === 0) {
        Swal.fire({
            title: 'Carrito vacio',
            text: 'Por favor seleccione al menos un producto para continuar',
            icon: 'warning',
            confirmButtonColor: '#FCCEFE',
          })
    } else {
        Swal.fire({
            title: '¿Finalizar compra?',
            text: `Realizar compra por un total de $${precioActual}`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#FCCEFE',
            cancelButtonColor: '#919191',
            confirmButtonText: 'Aceptar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                '¡Felicitaciones!',
                'Has efectuado la compra correctamente',
                'success'
              )
              console.log("Se realizó la compra");
              respuestaLimpiar()
            }
          })
    }   
}

function respuestaLimpiar() {
    precioActual = 0
    precioTotal.innerHTML = precioActual
    localStorage.setItem('precioTotal', precioActual)

    var lista = document.getElementById("carrito");
    lista.remove()
    
    let tomoDiv = document.getElementById("carrito-general");
    let recuperoUl = document.createElement('ul')
    recuperoUl.id = "carrito"
    tomoDiv.appendChild(recuperoUl);

    console.log("Se ha limpiado el carrito");
}
