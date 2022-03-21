const comInput = document.getElementById ('compra')
const desInput = document.getElementById ('descuento')
const toInput = document.getElementById ('total')

document.addEventListener('DOMContentLoaded', function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString); 
    const cantidadcom = urlParams.get('cantidadcom');
    calcularValorCompra(cantidadcom)
})

function calcularValorCompra(numeroComputadores) {
    const valorComputador = 820000
    const valorCompra = numeroComputadores * valorComputador
    compra.value = valorCompra
    CalcularValorDescuento(valorCompra)
}

function CalcularValorDescuento(valorCompra) {
    let descuento = 0
    if (valorCompra >= 1640000 && valorCompra <= 3280000) {
        descuento = 15
        document.querySelector('#mensaje').innerHTML = "¡Si hay descuento!"
    } else if (valorCompra > 3280000 && valorCompra <= 6560000) {
        descuento = 25
        document.querySelector('#mensaje').innerHTML = "¡Si hay descuento!"
    } else if (valorCompra > 6560000 && valorCompra <= 9840000) {
        descuento = 35
        document.querySelector('#mensaje').innerHTML = "¡Si hay descuento!"
    } else {
        descuento = 0
        document.querySelector('#mensaje').innerHTML = "¡No hay descuento!"
    }
    desInput.value = descuento +' %' 
    CalcularTotal(valorCompra,descuento)
}

function CalcularTotal(valorCompra, porcentajeDeDescuento){
    const descuento= (porcentajeDeDescuento/100) *valorCompra
    const valorTotal = valorCompra - descuento   
    toInput.value = valorTotal
}


