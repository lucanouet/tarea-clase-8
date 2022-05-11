/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

function validarFormularioIntegrantes(event){
    resetear()
    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes')
    const cantidadIntegrantes = Number($cantidadIntegrantes.value)
    const errorIntegrantes = validarCantidadIntegrantes(cantidadIntegrantes)    
    const errores = {        
        integrantes : errorIntegrantes
        }        
    const esExito = manejarErrores(errores,'#form-integrantes') === 0
    if(esExito){    
    
    crearIntegrantes(cantidadIntegrantes)
    
    }
    event.preventDefault()
}

function validarFormularioEdades(event){
    borrarPlaceHolder()
    ocultarResultados()
    const numeros = obtenerEdadesIntegrantes()
    const errores = validarEdadesIntegrantes(numeros)

    const esExito = manejarErrores(errores, '#form-edades') === 0
    if(esExito){
    mostrarEdad('mayor', obtenerMayorNumero(numeros))
    mostrarEdad('menor', obtenerMenorNumero(numeros))
    mostrarEdad('promedio', obtenerPromedio(numeros))
    mostrarResultados()
    }
    event.preventDefault()
}

document.querySelector('#resetear').onclick = resetear;

function borrarIntegrantesAnteriores(){
    const $integrantes = document.querySelectorAll('.integrante')    
    for(let i = 0; i < $integrantes.length; i++){
        $integrantes[i].remove()
    }
}



function crearIntegrantes(cantidad){
    if(cantidad > 0){
        mostrarBotonCalculo()
    }else{
        resetear()
    }

    for(let i = 0; i < cantidad; i++){
        crearIntegrante(i)
    }
}

function crearIntegrante(numero){
    const $div = document.createElement('div')
    $div.className = 'integrante'
    $div.setAttribute('name',numero)
    

    const $label = document.createElement('label')
    $label.innerText = `Ingrese la edad del intengrante numero ${numero + 1 }`
    
    const $input = document.createElement('input')
    $input.type = 'number'
    
    $div.appendChild($label)
    $div.appendChild($input)

    const $placeHolder = document.querySelector('#place-holder')
    $placeHolder.appendChild($div)    
}



function obtenerEdadesIntegrantes(){
    const $integrantes = document.querySelectorAll('.integrante input')
    let edades = []
    for(let i = 0; i < $integrantes.length; i++){
        if($integrantes[i].value != ''){
        edades.push(Number($integrantes[i].value))
        }else edades.push('')
}
    return edades
}

function borrarPlaceHolder(){
    const $errores = document.querySelectorAll('.contenedor-errores')
    for (let i = 0; i < $errores.length; i++){        
    $errores[i].remove()
    }}

function mostrarEdad(tipo, valor){
    document.querySelector(`#${tipo}-edad`).textContent = valor
}

function ocultarBotonCalculo() {
    document.querySelector('#calcular').className = 'oculto';
}

function mostrarBotonCalculo() {
    document.querySelector('#calcular').className = '';
}

function ocultarResultados() {
    document.querySelector('#analisis').className = 'oculto';
}

function mostrarResultados() {
    document.querySelector('#analisis').className = '';
}


function resetear() {
    borrarIntegrantesAnteriores();
    ocultarBotonCalculo();
    ocultarResultados();
    borrarPlaceHolder();
}


function manejarErrores(errores, formulario){
    let contador = 0
    let formularioActual = document.querySelector(formulario)
    const keys = Object.keys(errores)
    keys.forEach(function(key){
        
        const error = errores[key]
        if(error){
            contador++
            formularioActual[key].className = 'error'
            const $ul = document.createElement('ul')
            $ul.className = 'contenedor-errores'
            const $li = document.createElement('li')
            $li.textContent = error
            $ul.appendChild($li)
            const $placeHolder = document.querySelector('#place-holder')
            $placeHolder.appendChild($ul)
            
        }else{
            formularioActual[key].className = ''
        }   
})
    return contador
}

$formIntegrantes = document.querySelector('#form-integrantes')
$formIntegrantes.onsubmit = validarFormularioIntegrantes
$formEdades = document.querySelector('#form-edades')
$formEdades.onsubmit = validarFormularioEdades