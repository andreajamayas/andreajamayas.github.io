
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

let arrPeliculas = ["Barbie", "Avengers", "Flash"];
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
nombre = prompt("Ingrese su nombre para continuar");

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

function verCartelera() {
    cartelera = "";
    i=0;
    arrPeliculas.forEach((elm) => {
        cartelera += i + ". " + elm + "\n";
        i++;
    })
    pelicula = prompt("esta es la cartelera:\n" + cartelera + "\n seleccione el número de la película de la que desea ver los horarios de las funciones");
    filtrarFuncionesPelicula(arrPeliculas[pelicula]);
}

function filtrarFuncionesPelicula(pelicula) {
    let funcionesDisponibles = arrFunciones.filter(fun => fun.pelicula === pelicula);
    alert(funcionesDisponibles.map(elm => elm.horaInicio));
}

function verFunciones() {
    let funciones = "";
    let i= 0;
    arrFunciones.forEach((elm) => {
        funciones += i +". " + elm.pelicula + "  Inicio:" + elm.horaInicio + "  Fin:" + elm.horaFin + "\n";
        i++;
    })
    return funciones;   
}

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

function validarFuncionCompleta(numFuncion) {
    let resultado = false;
    if (arrFunciones[numFuncion].cantSillasOcupadas == arrFunciones[numFuncion].cantSillas) {
        resultado = true;
        alert("Esta función ya se encuentra llena")
    }
    return resultado;
}

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

function reservarOtraSilla(){
    let resultado = false;
    let reservar = prompt("¿Desea reservar otra silla?\n0.Si\n1.No");
    if (reservar == 0) {
        resultado = true;
    }
    return  resultado;
}

function verDetalleCompra(numFuncion, sillasReservadas) {
    alert("Este es el detalle de su compra \nNombre: " + nombre +"\nFunción reservada: " + arrFunciones[numFuncion].pelicula + "\nSillas reservadas: " + sillasReservadas + "\nTotal a pagar: " + costoTotal);

}

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


initProgram();
