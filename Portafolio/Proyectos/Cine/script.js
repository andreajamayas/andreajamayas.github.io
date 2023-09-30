
// Aquí se cargan los datos principales con los que trabaja el programa, que son la cartelera y las funciones disponibles

// let dbFunciones = [
//     {
//         id : 0,
//         pelicula : "Barbie",
//         horaInicio : "5pm",
//         horaFin : "7pm",
//         cantSillas : 5,
//         cantSillasDisponibles: 3,
//         cantSillasOcupadas: 2,
//         arraySillas : [false, true, true, false, false, true,false, true, true, false, false, true,false, true, true, false, false, true,false, true, true, false, false, true,false, true, true, false, false, true,false, true, true, false, false, true,false, true, true, false, false, true,false, true, true, false, false, true],
//         arrayOcupantes : ["", "", "", "", "", "","", "", "", "", "", "","", "", "", "", "", "","", "", "", "", "", "","", "", "", "", "", "","", "", "", "", "", "","", "", "", "", "", "","", "", "", "", "", "","", "", "", "", "", ""]
//     },
//     {   
//         id : 1,
//         pelicula : "Avengers",
//         horaInicio : "1pm",
//         horaFin : "3pm",
//         cantSillas : 5,
//         cantSillasDisponibles: 5,
//         cantSillasOcupadas: 0,
//         arraySillas : [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false,false, false, false, false, false, false,false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ],
//         arrayOcupantes : ["", "", "", "", "", "", "", "", "", "", "", "","", "", "", "", "", "","", "", "", "", "", "","", "", "", "", "", "","", "", "", "", "", "","", "", "", "", "", "","", "", "", "", "", ""]
//     },
//     {
//         id : 2,
//         pelicula : "Flash",
//         horaInicio : "3pm",
//         horaFin : "5pm",
//         cantSillas : 5,
//         cantSillasDisponibles: 5,
//         cantSillasOcupadas: 0,
//         arraySillas : [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false,false, false, false, false, false, false,false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ],
//         arrayOcupantes : ["", "", "", "", "", "", "", "", "", "", "", "","", "", "", "", "", "","", "", "", "", "", "","", "", "", "", "", "","", "", "", "", "", "","", "", "", "", "", "","", "", "", "", "", ""]
//     }, 
//     {   
//         id : 3,
//         pelicula : "Flash",
//         horaInicio : "8pm",
//         horaFin : "10pm",
//         cantSillas : 5,
//         cantSillasDisponibles: 0,
//         cantSillasOcupadas: 0,
//         arraySillas : [false, true, true, false, false, true,false, true, true, false, false, true,false, true, true, false, false, true,false, true, true, false, false, true,false, true, true, false, false, true,false, true, true, false, false, true,false, true, true, false, false, true,false, true, true, false, false, true],
//         arrayOcupantes : ["", "", "", "", "", "", "", "", "", "", "", "","", "", "", "", "", "","", "", "", "", "", "","", "", "", "", "", "","", "", "", "", "", "","", "", "", "", "", "","", "", "", "", "", ""]
//     }

// ];

// const enJSON = JSON.stringify(dbFunciones);

const enJSON = '[{"id":0,"pelicula":"Barbie","horaInicio":"5pm","horaFin":"7pm","cantSillas":5,"cantSillasDisponibles":3,"cantSillasOcupadas":2,"arraySillas":[false,true,true,false,false,true,false,true,true,false,false,true,false,true,true,false,false,true,false,true,true,false,false,true,false,true,true,false,false,true,false,true,true,false,false,true,false,true,true,false,false,true,false,true,true,false,false,true],"arrayOcupantes":["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},{"id":1,"pelicula":"Avengers","horaInicio":"1pm","horaFin":"3pm","cantSillas":5,"cantSillasDisponibles":5,"cantSillasOcupadas":0,"arraySillas":[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],"arrayOcupantes":["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},{"id":2,"pelicula":"Flash","horaInicio":"3pm","horaFin":"5pm","cantSillas":5,"cantSillasDisponibles":5,"cantSillasOcupadas":0,"arraySillas":[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],"arrayOcupantes":["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]},{"id":3,"pelicula":"Flash","horaInicio":"8pm","horaFin":"10pm","cantSillas":5,"cantSillasDisponibles":0,"cantSillasOcupadas":0,"arraySillas":[false,true,true,false,false,true,false,true,true,false,false,true,false,true,true,false,false,true,false,true,true,false,false,true,false,true,true,false,false,true,false,true,true,false,false,true,false,true,true,false,false,true,false,true,true,false,false,true],"arrayOcupantes":["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]}]'
// console.log(enJSON);
const dbFunciones = JSON.parse(enJSON);

let arrPeliculas = [
    {
        nombre:"Barbie",
        resumen:"Barbie (Margot Robbie) lleva una vida ideal en Barbieland, allí todo es perfecto, con chupi fiestas llenas de música y color, y todos los días son el mejor día. Claro que Barbie se hace algunas preguntas, cuestiones bastante incómodas que no encajan con el mundo idílico en el que ella y las demás Barbies viven. Cuando Barbie se dé cuenta de que es capaz de apoyar los talones en el suelo, y tener los pies planos, decidirá calzarse unos zapatos sin tacones y viajar hasta el mundo real.",
        linkImg:"https://es.web.img2.acsta.net/pictures/23/07/20/11/29/5479684.jpg"
    }, 
    {
        nombre:"Avengers",
        resumen:"El equipo de superhéroes más espectacular de todos los tiempos con iconos como Anthony Stark / Iron Man, El Increíble Hulk, Thor, Steven Rogers / Capitán América, Clinton Barton / Hawkeye y Natalia Romanoff / Black Widow. Cuando un enemigo inesperado amenaza con poner en peligro la seguridad mundial, Nicholas Fury, Director de la agencia internacional para el mantenimiento de la paz, conocida con el nombre de S.H.I.E.L.D., necesita encontrar urgentemente un equipo que salve al mundo del mayor de los desastres. Así empieza una búsqueda por todo el mundo para reclutar personal.",
        linkImg:"https://hips.hearstapps.com/hmg-prod/images/vengadores-la-era-de-ultro-n-1525787731.jpg"
    }, 
    {
        nombre:"Flash",
        resumen:"Los mundos chocan en Flash cuando Barry utiliza sus superpoderes para viajar en el tiempo y cambiar los acontecimientos del pasado. Barry intenta salvar a su familia pero sin saberlo altera el futuro y queda atrapado en una realidad en la que el general Zod ha regresado y amenaza con la aniquilación, pero en la que no hay Superhéroes a los que recurrir. A menos que Barry pueda persuadir a un Batman muy diferente para que salga de su retiro y rescate a un kryptoniano encarcelado... aunque no sea el que está buscando. En última instancia, para salvar el mundo en el que se encuentra y regresar al futuro que conoce, la única esperanza de Barry es luchar por seguir vivo. Pero ¿este último sacrificio será suficiente para reiniciar el universo?.",
        linkImg:"https://images2.prokal.co/webkp/file/berita/2023/06/21/c6ed767f1016f657fedd75cadde11751.jpg"
    }];

// Se modifica el DOM de la página principal con las peliculas cargadas
let carteleraDom = document.querySelector(".main-cartelera");
let funcionesDom = document.querySelector(".home-funciones");

function renderizarCartelera() {
    arrPeliculas.forEach( (elm) => {
        // estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('cartelera','zone');
        // imagen
        const miNodoImg = document.createElement('img');
        miNodoImg.classList.add('img-cartelera');
        miNodoImg.setAttribute('src', elm.linkImg);
        // pelicula
        const miNodoNombre = document.createElement('p');
        miNodoNombre.textContent = `${elm.nombre}`;
        // boton
        miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('ov-btn-slide-left');
        miNodoBoton.setAttribute('marcador', elm.nombre);
        // miNodoBoton.setAttribute('onclick', 'location.href="funciones.html"');
        miNodoBoton.innerHTML = 'Ver funciones';
        miNodoBoton.addEventListener("click", renderizarFuncionesDisponibles);
        // insertamos
        miNodo.appendChild(miNodoImg);
        miNodo.appendChild(miNodoNombre);
        miNodo.appendChild(miNodoBoton);
        carteleraDom.appendChild(miNodo);
    });
};

renderizarCartelera();
let mainHome = document.querySelector('.main-home');
let mainCartelera = document.querySelector('.home-cartelera');
let botonCartelera = document.querySelector('.habilitar-cartelera');
botonCartelera.addEventListener('click', () => {
    mainHome.classList.add('ocultar');
    mainCartelera.classList.remove('ocultar');

});

// Se modifica el DOM de la pagina que muestra la descripción de la pelicula seleccionada
// añadimos el evento que reconoce que pelicula seleccionó el usuario
function renderizarFuncionesDisponibles(evento) {
    funcionesDom.classList.remove('ocultar');
    mainCartelera.classList.add('ocultar');
    funcionesDom.innerHTML="";
    if (usarStorage==true){
        pelicula=historialPelicula;
        localStorage.clear();
    }
    else {
        pelicula = evento.target.getAttribute('marcador');
    };
    let buscado = arrPeliculas.find(elm => elm.nombre === pelicula);

    //buscar funciones de esa pelicula en la base de datos
    let funcionesBuscadas = arrFunciones.filter( elm => elm.pelicula === pelicula);
    

    const miNodoImg = document.createElement('div');
    miNodoImg.classList.add('main-funciones-imagen');
    const miImg = document.createElement('img');
    miImg.setAttribute('src', buscado.linkImg);
    miNodoImg.appendChild(miImg);

    const miNodo = document.createElement('div');
    miNodo.classList.add('main-home-funciones');
    const miNodoNombre = document.createElement('h3');
    miNodoNombre.innerHTML = buscado.nombre;
    const miNodoResumen = document.createElement('p');
    miNodoResumen.innerHTML = buscado.resumen;
    miNodo.appendChild(miNodoNombre);
    miNodo.appendChild(miNodoResumen);

    

     // se renderizan las funciones disponibles de la pelicula seleccionada
    funcionesBuscadas.forEach( (elm) => {
        const miNodoFuncion = document.createElement('button');
        miNodoFuncion.classList.add('ov-btn-slide-left');
        miNodoFuncion.innerText = elm.horaInicio;
        miNodoFuncion.setAttribute('marcador', elm.id);
    
        miNodoFuncion.addEventListener("click", mostrarSillas);
        miNodo.appendChild(miNodoFuncion);
    })

    funcionesDom.appendChild(miNodoImg);
    funcionesDom.appendChild(miNodo);
    
};

let mainSillas = document.querySelector('.home-sillas');
let contenedorSillas = document.querySelector('.container');
let filas = 6;
let columnas = 8;
// se renderiza la sala de cine con las sillas
function mostrarSillas(evento) {
    mainConfirmacionReserva.classList.add('ocultar');
    contenedorSillas.innerHTML = "";
    
    let id = "";
    if (usarStorage==true){
         id=historialFuncion;
         localStorage.clear();
         usarStorage=false;
    }
    else {
         id = evento.target.getAttribute('marcador');
    };

    

    let cont= 0;
    for (let i = 0; i < filas ; i++ ) {
        const miNodoFila = document.createElement('div');
        miNodoFila.classList.add('fila');
        for (let j = 0; j < columnas ; j++) {
            const miNodoSilla = document.createElement('div');
            miNodoSilla.classList.add('silla');
            miNodoSilla.setAttribute('marcador1', id);
            miNodoSilla.setAttribute('marcador2', cont);
            miNodoSilla.addEventListener('click', seleccionSilla);
            arrFunciones[id].arrayOcupantes[cont] = "";
            if (arrFunciones[id].arraySillas[cont] == true){
                miNodoSilla.classList.add('ocupada');
            };
            miNodoFila.appendChild(miNodoSilla);
            cont++;
        }
        contenedorSillas.appendChild(miNodoFila);
    };  
    mainSillas.classList.remove('ocultar');
    borrarDatosDeReservaNoConfirmada();
    idFuncionReservada = id;
};

// cuando se selecciona otra función se borran los datos de las sillas seleccionadas previamente para no generar conflictos en los datos y mezclar reservas de funciones
function borrarDatosDeReservaNoConfirmada() {
    sillasReservadas.splice(0);
    costoTotal = 0;
    textoSillasSeleccionadas.innerHTML = `Sillas releccionadas: N/A`;
    textoTotalPagar.innerHTML = `Total a pagar: $0`;
    idFuncionReservada = null;
}

// cuando se selecciona una silla se agrega al "carrito" y cambia de color para diferenciarla, pero si la silla ya estaba selecciona se quita el color y se quita del carrito, si la silla ya está ocupada no ocurre nada
function seleccionSilla(evento) {
    let id = evento.target.getAttribute('marcador1');
    let silla = evento.target.getAttribute('marcador2');

    if (arrFunciones[id].arraySillas[silla] == false && arrFunciones[id].arrayOcupantes[silla] == '') {
        evento.target.classList.add('seleccionada');
        ocuparSilla(id, silla);
    }
    else if (arrFunciones[id].arraySillas[silla] == false && arrFunciones[id].arrayOcupantes[silla] != "") {
        evento.target.classList.remove('seleccionada');
        desocuparSilla(id, silla);
    };
};


// esta función nos permite ocupar una silla cuando esta se encuentra disponible, y de igual manera, va sumando el precio de las boletas
function ocuparSilla(numFuncion, numSilla) {
        // arrFunciones[numFuncion].arraySillas[numSilla] = true;
        // arrFunciones[numFuncion].cantSillasDisponibles--;
        // arrFunciones[numFuncion].cantSillasOcupadas++;
        arrFunciones[numFuncion].arrayOcupantes[numSilla] = 'usuario';
        sillasReservadas.push(numSilla);
        localStorage.setItem('pelicula', pelicula);
        localStorage.setItem('funcion', numFuncion);
        costoTotal += costoBoleta;
        renderizarResumenSillas(sillasReservadas, costoTotal);
};

function desocuparSilla(numFuncion, numSilla) {
    // arrFunciones[numFuncion].arraySillas[numSilla] = true;
    // arrFunciones[numFuncion].cantSillasDisponibles--;
    // arrFunciones[numFuncion].cantSillasOcupadas++;
    arrFunciones[numFuncion].arrayOcupantes[numSilla] = '';
    let indiceSillaBorrar = sillasReservadas.indexOf(numSilla);
    sillasReservadas.splice(indiceSillaBorrar, 1);
    costoTotal = costoTotal - costoBoleta;
    renderizarResumenSillas(sillasReservadas, costoTotal);
    if (costoTotal == 0){
        localStorage.clear();
    };
};

let textoSillasSeleccionadas = document.querySelector('.sillas-seleccionadas');
let textoTotalPagar = document.querySelector('.total-pagar');
let textoSillasDisponibles = document.querySelector('.sillas-disponibles');
let textoSillasOcupadas = document.querySelector('.sillas-ocupadas');

function renderizarResumenSillas(sillasReservadas, costoTotal) {
    textoSillasSeleccionadas.innerHTML = `Sillas releccionadas: ${sillasReservadas}`;
    textoTotalPagar.innerHTML = `Total a pagar: $${costoTotal}`;
};

// se crea el evento que permite confirmar la compra de las boletas para la función seleccionada
let botonConfirmarReserva = document.querySelector(".confirmar-reserva");
let mainConfirmacionReserva = document.querySelector('.main-confirmacion');
botonConfirmarReserva.addEventListener('click', confirmarReserva);

function confirmarReserva() {
    
    if (costoTotal==0) {
        alert('No se han seleccionado sillas a reservar');
    }
    else {
          
        mainConfirmacionReserva.classList.remove('ocultar');
        mainSillas.classList.add('ocultar');
        mainConfirmacionReserva.innerHTML = `
            <h4>Reserva Exitosa</h4>
            <p>Película: ${pelicula}</p>
            <p>Función: ${arrFunciones[idFuncionReservada].horaInicio}</p>
            <p>Sillas reservadas: ${sillasReservadas}</p>
            <p>Total pagado: $${costoTotal}</p>
            `
            localStorage.clear();
            ocuparSillasReservadas();

            Swal.fire({
                title: '¡Reserva Exitosa!',
                text: `Haz reservado correctamente tus entradas para ${pelicula}!`,
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
    };
}

// se bloquean las sillas seleccionadas despues de que se confirma la reserva
function ocuparSillasReservadas() {

    sillasReservadas.forEach( (elm) => {
        arrFunciones[idFuncionReservada].arraySillas[elm] = true;
        arrFunciones[idFuncionReservada].cantSillasDisponibles--;
        arrFunciones[idFuncionReservada].cantSillasOcupadas++;
    })   
};

// Se declaran las variables del programa
    
let arrFunciones = [];
let sillasReservadas = [];
let costoBoleta = 10;
let costoTotal = 0;
let pelicula = "";
let idFuncionReservada = null;
let usarStorage=false;

class Funciones {
    constructor({id, pelicula, horaInicio, horaFin, cantSillas, cantSillasDisponibles, cantSillasOcupadas, arraySillas, arrayOcupantes}){

        this.id = id;
        this.pelicula = pelicula;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
        this.cantSillas = cantSillas;
        this.cantSillasDisponibles = cantSillasDisponibles;
        this.cantSillasOcupadas = cantSillasOcupadas;
        this.arraySillas = arraySillas; 
        this.arrayOcupantes = arrayOcupantes;
    }
}

function pushFunciones() {
    for (const elemento of dbFunciones) {
        arrFunciones.push(new Funciones(elemento));
    }
  }

pushFunciones();

let historialPelicula = localStorage.getItem('pelicula');
let historialFuncion = localStorage.getItem('funcion');

if (historialPelicula) {
    // alert(`Quieres continuar escogiendo tus asientos para ${historialPelicula} en la función de las ${arrFunciones[historialFuncion].horaInicio}`)
    Swal.fire({
        title: 'Ya estuviste por aquí 👀',
        text: `Quieres continuar escogiendo tus asientos para ${historialPelicula} en la función ${arrFunciones[historialFuncion].horaInicio}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, vamos!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {

            usarStorage=true;
            mainCartelera.classList.add('ocultar');
            mainHome.classList.add('ocultar');
            renderizarFuncionesDisponibles();
            mostrarSillas();

        }
      })
};



// consumiendo una api

const logo = document.querySelector('.logoNavBar');
const inicioPag = document.querySelector('.irHome');
logo.addEventListener('click', inicializarPagPrincipal);
inicioPag.addEventListener('click', inicializarPagPrincipal);
function inicializarPagPrincipal() {
    if (mainHome.classList.contains('ocultar')){
        mainHome.classList.remove('ocultar');
    };
    if (!apiData.classList.contains('ocultar')){
        apiData.classList.add('ocultar');
    };
    if (!mainCartelera.classList.contains('ocultar')){
        mainCartelera.classList.add('ocultar');
    };
    if (!funcionesDom.classList.contains('ocultar')){
        funcionesDom.classList.add('ocultar');
    };
    if (!mainSillas.classList.contains('ocultar')){
        mainSillas.classList.add('ocultar');
    };
    if (!mainConfirmacionReserva.classList.contains('ocultar')){
        mainConfirmacionReserva.classList.add('ocultar');
    };
};

const apiButton = document.querySelector('.consumir-API');
const apiData = document.querySelector('.home-avatar');
const contenedorAvatares = document.querySelector('.contenedor-avatar');

apiButton.addEventListener('click', traerPokemones);


function callAPI(id) {
    apiData.classList.remove('ocultar');
    mainHome.classList.add('ocultar')
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => res.json())
        .then(data => {
            crearPokemon(data);         
        })
        .catch(e => console.error(new Error(e)));
};

function traerPokemones(){

    for (let i = 1; i <=12; i++){
        callAPI(i);
    };
};

function crearPokemon(pokemon){
    const miNodoTarjeta = document.createElement('div');
    const miNodoImg = document.createElement('img');
    miNodoImg.setAttribute('src', pokemon.sprites.front_default);
    miNodoImg.classList.add('tarjetaPokemon');
    miNodoImg.classList.add('zone');
    miNodoImg.addEventListener('click', cambiarAvatar);
    miNodoTarjeta.appendChild(miNodoImg);
    contenedorAvatares.appendChild(miNodoTarjeta);
};

function cambiarAvatar(evento){
    logo.src=evento.target.src;
};



