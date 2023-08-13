
let numProductos=0, precio=0, totalPagar=0, continuar=true, opciones=0;

let nombre=prompt("Ingrese su nombre");

alert(`Hola ${nombre}, bienvenido a Mundo Funko, el lugar donde puedes encontrar tus funkos favoritos`)

while (continuar==true){

    opciones=Number(prompt("Ingrese una opcion: \n 1-Agregar producto \n 2-Ver total a Pagar \n 3-Salir"));
    
    switch (opciones){
        case 1:
            precio=Number(prompt("Ingrese el precio del nuevo producto"));
            totalPagar=totalPagar+precio;
            numProductos++;
        break;
        case 2:
            MostrarCarrito(numProductos, totalPagar);
        break;
        case 3:
            alert(`Hasta la proxima`);
            continuar=false;
        break;
    }
}


function MostrarCarrito(numProductos, totalPagar){
    if (totalPagar==0){
        alert(`No ha agregado productos, no hay nada que pagar`);
    }
    else{
        alert(`Ha agregado ${numProductos} productos y el total a pagar es de ${totalPagar} Pesos`);
    }
}

