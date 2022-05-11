function probarValidarCantidadIntegrantes(){
    console.assert(
        validarCantidadIntegrantes('') == 'Este campo debe tener al menos, un numero', 'validar cantidad no valido que no sea vacio')
    console.assert(
        validarCantidadIntegrantes(123124) == 'Este campo solo debe tener entre, uno y tres numeros', 'validar cantidad no valido que sean hasta 3 numeros')
    console.assert(
        validarCantidadIntegrantes('d#$') == 'Este campo solo debe tener entre, uno y tres numeros', 'Validar cantida no valido que no sean solo numeros')
    console.assert(validarCantidadIntegrantes(123) == '', 'Validar cantidad no valido con un numero correcto')
}

probarValidarCantidadIntegrantes()