const formularioCotizacion = document.querySelector('#formularioCotizacion');
const monto = document.querySelector('#monto');
const plazo = document.querySelector('#plazo');
const tasa = document.querySelector('#tasa');
const inputs = document.querySelectorAll('.simulador__formulario-cotizacion-inputs');
const btnCotizar = document.querySelector('#btnCotizar');
let validarForm1 = false;

const resultado = document.querySelector('#resultado');
const resultadoTexto = document.querySelector('#resultadoTexto');
const btnSi = document.querySelector('#btnSi');
const btnNo = document.querySelector('#btnNo');

const ultimoFormulario = document.querySelector('#ultimoFormulario');
const btnFormFin = document.querySelector('#btnFormFin');
const inputsFormularioFin = document.querySelectorAll('.simulador__formularioFin-form-input');
const documentType = document.querySelector('#documentType');
const error = document.querySelector('.error');



function calcularPrestamo() {
    const montoValor = monto.value;
    const plazoValor = plazo.value;
    const tasaValor = tasa.value / 100;
    
    const cuotaConComa = (Math.round(montoValor*tasaValor / plazoValor).toFixed(2).replace('.',','));
    resultado.classList.remove('disable');
    resultadoTexto.innerHTML = `Cuota mensual: $${cuotaConComa}`;
}

inputs.forEach((input) => {
    input.addEventListener('input',(e)=>{
        console.log(e.target.value)
        if(inputs[0].value && inputs[1].value) {
            validarForm1 = true;
            btnCotizar.classList.remove('buttonDisable');
        } else {
            validarForm1 = false;
            btnCotizar.classList.add('buttonDisable');
        }
    })
});

formularioCotizacion.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validarForm1) {
        calcularPrestamo();
    }
});


btnSi.addEventListener('click', ()=>{
    resultado.classList.add('disable');
    formularioCotizacion.reset();

    if(!ultimoFormulario.classList.contains('disable')) {
        ultimoFormulario.classList.add('disable');
    }
});


btnNo.addEventListener('click', ()=>{
    formularioCotizacion.reset();
    ultimoFormulario.classList.remove('disable');
});

inputsFormularioFin.forEach((input) => {
    input.addEventListener('input', () => {
        if(inputsFormularioFin[0].value && inputsFormularioFin[1].value && inputsFormularioFin[2].value && inputsFormularioFin[3].value && inputsFormularioFin[4].value && inputsFormularioFin[5].value) {
            btnFormFin.classList.remove('buttonDisable');
        } else {
            btnFormFin.classList.add('buttonDisable');
        }
    });
})

documentType.addEventListener('change', () => {
    const valor = documentType.value;
    if(valor != "") {
        if (valor === "DNI") {
            inputsFormularioFin[4].setAttribute('maxlength', '8');
        } else if (valor === "Pasaporte") {
            inputsFormularioFin[4].setAttribute('maxlength', '10');
        }
        if (!error.classList.contains('disable')) {
            error.classList.add('disable');
        }
    } else {
            error.classList.remove('disable');
    }
    
    
});