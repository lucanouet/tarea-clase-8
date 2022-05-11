function validarCantidadIntegrantes(cantidad){
    if(!cantidad){
        return 'Este campo debe tener al menos, un numero'
    }
    if(!/^[0-9]{1,3}$/.test(cantidad)){
        return 'Este campo solo debe tener entre, uno y tres numeros'
    }
    return ''
}

function validarEdadesIntegrantes(arrayEdades){    
    let erroresArray = {}
    for (let i = 0; i < arrayEdades.length; i++){
        if(!/^[0-9]{1,3}$/.test(arrayEdades[i])){
            const error = `El integrante numero ${i+1} solo acepta entre uno y tres numeros`
            erroresArray[i] = error
        }else{
            erroresArray[i] = ''
        }
    }
    return erroresArray
}


