function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío'
        )

    console.assert(
        validarNombre(
            '1111111asdasdasdasdasdasdasdasdasdasdasdasda11111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres')

    console.assert(
        validarNombre('lucas') === '',
        'Validar nombre no valido que el nombre sea valido jaja'
    )
    console.assert(
        validarNombre('..,.,43') === 'El nombre solo acepta letras',
        'nombre no valido que solo acepte letras'
    )
}

function probarValidarCiudad(){
    console.assert(validarCiudad('') === 'El campo ciudad no puede estar vacio',
    'Validar ciudad no valido que no sea vacio')
    console.assert(validarCiudad('San Pedro') === '',
    'validar ciudad no valido que la ciudad sea valida')
}

function probarValidarRegalo(){
    console.assert(validarDescripcionRegalo('') === 'Descripcion regalo no puede estar vacio', 
    'Descripcion regalo no valido que no sea vacio')
    console.assert(validarDescripcionRegalo('ioasdfy8a7erty37q45637846537846rt78ertfsd6sa789d6f784628734623874623874623874623874628374c6b27rrw78dtfsd78ftsd8f6sd87f6sd78f6sd879f6sd78f6sd879f6sd78f6sd98f76sd789f6sd789f68sd7f6s78df6') === 'La descripcion no puede superar los 100 caracteres',
    'Descripcion regalo no valido que no supere los 100 caracteres')
    console.assert(validarDescripcionRegalo('La Coupe') === '',
    'validar regalo no valido que el regalo sea valido ')
    console.assert(validarDescripcionRegalo('#####[[[[') === 'Solo puede haber letras numeros comas puntos guin bajo espacio',
    'Validar regalo no valido que sea solo letras numeros comas puntos guiones espacios')
}


probarValidarNombre()
probarValidarCiudad()
probarValidarRegalo()