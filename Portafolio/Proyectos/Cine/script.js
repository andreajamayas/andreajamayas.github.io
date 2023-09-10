
// Aquí se cargan los datos principales con los que trabaja el programa, que son la cartelera y las funciones disponibles

let dbFunciones = [
    {
        pelicula : "Barbie",
        horaInicio : "5pm",
        horaFin : "7pm",
        cantSillas : 5,
        cantSillasDisponibles: 3,
        cantSillasOcupadas: 2,
        arraySillas : [false, true, true, false, false],
        arrayOcupantes : ["", "", "", "", ""]
    },
    {
        pelicula : "Avengers",
        horaInicio : "1pm",
        horaFin : "3pm",
        cantSillas : 5,
        cantSillasDisponibles: 5,
        cantSillasOcupadas: 0,
        arraySillas : [false, false, false, false, false],
        arrayOcupantes : ["", "", "", "", ""]
    },
    {
        pelicula : "Flash",
        horaInicio : "3pm",
        horaFin : "5pm",
        cantSillas : 5,
        cantSillasDisponibles: 5,
        cantSillasOcupadas: 0,
        arraySillas : [false, false, false, false, false],
        arrayOcupantes : ["", "", "", "", ""]
    }, 
    {
        pelicula : "Flash",
        horaInicio : "8pm",
        horaFin : "10pm",
        cantSillas : 5,
        cantSillasDisponibles: 0,
        cantSillasOcupadas: 0,
        arraySillas : [false, false, false, false, false],
        arrayOcupantes : ["", "", "", "", ""]
    }

];

const enJSON = JSON.stringify(dbFunciones);
// const dbFunciones = JSON.parse(enJSON);

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
    pelicula = evento.target.getAttribute('marcador');
    let buscado = arrPeliculas.find(elm => elm.nombre === pelicula);

    //buscar funciones de esa pelicula en la base de datos
    let funcionesBuscadas = arrFunciones.filter( elm => elm.pelicula === pelicula);
    console.log(funcionesBuscadas);

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
        miNodoFuncion.addEventListener("click", mostrarSillas);
        miNodo.appendChild(miNodoFuncion);
    })

    funcionesDom.appendChild(miNodoImg);
    funcionesDom.appendChild(miNodo);
    
};

let contenedorSillas = document.querySelector('.home-sillas');

function mostrarSillas(evento) {
    contenedorSillas.classList.remove('ocultar');

};








// Se declaran las variables del programa
    
let arrFunciones = [];
let nombre = "";
let funcionReservada = 0;
let sillasReservadas = [];
let costoBoleta = 10;
let costoTotal = 0;
trueOrFalse = true;

class Funciones {
    constructor({pelicula, horaInicio, horaFin, cantSillas, cantSillasDisponibles, cantSillasOcupadas, arraySillas, arrayOcupantes}){

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
// nombre = prompt("Ingrese su nombre para continuar");

// Se declaran los eventos necesarios para el funcionamiento del programa






// esta es la funcion principal donde arranca el programa y decidimos que queremos hacer
function initProgram() {
    while (trueOrFalse) {
        let selectSection = parseInt(prompt(
            "¿Qué quieres hacer? \n 1. Ver cartelera \n 2. reservar Sillas \n 3. Salir "
        ));
        
        switch (selectSection) {
            case 1:
                verCartelera();
                break;
            case 2:
                reservarSillas();
                break;
            case 3:
                trueOrFalse = false;
                break;        
        }
    }     
}

// En verCartelera podemos ver el listado de pelicuals disponibles para ver
function verCartelera() {
    let cartelera = "";
    let i=0;
    arrPeliculas.forEach((elm) => {
        cartelera += i + ". " + elm + "\n";
        i++;
    })
    pelicula = prompt("esta es la cartelera:\n" + cartelera + "\n seleccione el número de la película de la que desea ver los horarios de las funciones");
    filtrarFuncionesPelicula(arrPeliculas[pelicula]);
}

// esta función permite ver las funciones (horarios) disponibles de la pelicula seleccionada
function filtrarFuncionesPelicula(pelicula) {
    let funcionesDisponibles = arrFunciones.filter(fun => fun.pelicula === pelicula);
    alert(funcionesDisponibles.map(elm => elm.horaInicio));
}

// esta funcion permite ver todas las funciones disponibles sin ninguna clase de filtro (es algo que tengo que arreglar para que todo quede con la anterior)
function verFunciones() {
    let funciones = "";
    let i= 0;
    arrFunciones.forEach((elm) => {
        funciones += i +". " + elm.pelicula + "  Inicio:" + elm.horaInicio + "  Fin:" + elm.horaFin + "\n";
        i++;
    })
    return funciones;   
}

// esta función nos permite ver el listado de sillas de la función seleccionada y si la silla se encuentra ocupada o disponible
function verSillas(numFuncion) {
    let sillas = "";
    i=0;
    arrFunciones[numFuncion].arraySillas.forEach((elm) => {
        if (elm == false) {
            sillas += i + ". disponible \n";
        } else {
            sillas += i + ". ocupada \n";
        }
        i++;
    });
    return sillas;
}

// esta función nos permite validar si la función de cine ya está llena o si aún quedan sillas disponibles
function validarFuncionCompleta(numFuncion) {
    let resultado = false;
    if (arrFunciones[numFuncion].cantSillasOcupadas == arrFunciones[numFuncion].cantSillas) {
        resultado = true;
        alert("Esta función ya se encuentra llena")
    }
    return resultado;
}

// esta función nos permite ocupar una silla cuando esta se encuentra disponible, y de igual manera, va sumando el precio de las boletas
function ocuparSilla(numFuncion, numSilla) {
    if (arrFunciones[numFuncion].arraySillas[numSilla] == true) {
        alert("Esta silla ya está ocupada");
    } else {
        arrFunciones[numFuncion].arraySillas[numSilla] = true;
        arrFunciones[numFuncion].cantSillasDisponibles--;
        arrFunciones[numFuncion].cantSillasOcupadas++;
        arrFunciones[numFuncion].arrayOcupantes[numSilla] = nombre;
        sillasReservadas.push(numSilla);
        costoTotal += costoBoleta;

        alert("Silla reservada con exito");
    }

}

// esta función consulta al cliente si desea reservar otra silla
function reservarOtraSilla(){
    let resultado = false;
    let reservar = prompt("¿Desea reservar otra silla?\n0.Si\n1.No");
    if (reservar == 0) {
        resultado = true;
    }
    return  resultado;
}

// esta función nos da un resumen de la compra, como lo es el nombre del cliente, pelicula seleccionada y sillas escogidas
function verDetalleCompra(numFuncion, sillasReservadas) {
    alert("Este es el detalle de su compra \nNombre: " + nombre +"\nFunción reservada: " + arrFunciones[numFuncion].pelicula + "\nSillas reservadas: " + sillasReservadas + "\nTotal a pagar: " + costoTotal);

}

// esta es la función principal que nos permite seleccionar que silla queremos reservar
function reservarSillas() {
    let reservarOtra = true;
    let funciones = verFunciones();
    let numFuncion = prompt("Seleccione el número de la función para la que desea reservar sillas \n" + funciones);

    let funcionCompleta = validarFuncionCompleta(numFuncion);
    
    while (funcionCompleta == false && reservarOtra == true) {
        let sillas = verSillas(numFuncion);

        let numSilla = prompt("Selecciono la función: " + arrFunciones[numFuncion].pelicula + "\nEstas son las sillas para la función seleccionada, indique el número de silla que desea reservar: \n\n" + sillas);

        ocuparSilla(numFuncion, numSilla);
        
        reservarOtra = reservarOtraSilla();
        funcionCompleta = validarFuncionCompleta(numFuncion);
    }

    verDetalleCompra(numFuncion, sillasReservadas);
    initProgram();
}


// initProgram();
