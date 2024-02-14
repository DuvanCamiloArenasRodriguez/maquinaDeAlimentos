function costo(precio) {
    alert(precio)
    bandera = true
    auxiliar = 0

    while (bandera) {
        moneda = Number(prompt( `Ingrese las monedas para pagar\n Nota: Sólo son válidas monedas de  $10, $50 y $100`))

        if (moneda == 10 || moneda == 50 || moneda == 100) {
            bandera = true
        }
        else {
            moneda = Number(prompt( `Ingrese una moneda que sea válida\n Ingrese las monedas para pagar\n Nota: Sólo son válidas monedas de  $10, $50 y $100`))
        }
    
        auxiliar += moneda
        if (auxiliar >= precio) {
            bandera = false
        }
    }
    

    return auxiliar
}

function cambio(precioTotal, precio) {
    let vueltos = precioTotal - precio
    let aux = vueltos / 50

    if (parseInt(aux) == 0) {
        aux = vueltos / 10
        if (parseInt(aux) != 0) {
            alert(`Cambio: ${aux} monedas de 10`)
        } else {
            alert(`Pago completo`)
        }

    } else {
        let cM = parseInt(aux)
        vueltos -= 50
        aux = vueltos / 10
        if (parseInt(aux) != 0) {
            alert(`Cambio: ${cM} monedas de 50, ${aux} de 10`)
        }else {
            alert("No hay más cambio")
        }
    } 

    
}


console.log("Ejercicio Máquina Traga Monedas")

precioProductos = [270, 340, 390] //lista de los precios equivalentes a A, B y C

console.log(precioProductos);

while (confirm("¿Desea adquirir un producto?")) {
    let plantilla = ""
    for (let i in precioProductos) {
        plantilla += `${Number(i) + 1}. ${precioProductos[i]}\n` 
    }
    let opc = Number(prompt(`Seleccione un producto de la lista: \n ${plantilla}`));
    alert(`Producto seleccionado: ${opc} \n Tiene un costo de ${precioProductos[opc - 1]}`)

    precioTotal = costo(precioProductos[opc - 1])
    cambio(precioTotal, precioProductos[opc - 1])
}




// for (let i = 1; i < precioProductos.length; i++) {
//     opcion = prompt(`Seleccione un producto: \n A. ${i}`)
    
// }
