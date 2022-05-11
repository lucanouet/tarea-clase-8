validarNombre = (nombre)=>{
    if(nombre.length == ''){
        return 'Este campo debe tener al menos 1 caracter'
    }
    if(nombre.length >= 50){
        return 'Este campo debe tener menos de 50 caracteres'
    }
    if(!/^[a-z]+$/i.test(nombre)){
        return 'El nombre solo acepta letras'
    }
    return ''
}

validarCiudad = (ciudad)=>{
    if(ciudad.length == ''){
        return 'El campo ciudad no puede estar vacio'
    }
    return ''
}

validarDescripcionRegalo = (descripcionRegalo)=>{
    if(descripcionRegalo.length > 100){
        return 'La descripcion no puede superar los 100 caracteres'
    }
    if(descripcionRegalo.length === 0 ){
        return 'Descripcion regalo no puede estar vacio'
    }
    if(!/^[a-z0-9,\._ ]+$/i.test(descripcionRegalo)){
        return 'Solo puede haber letras numeros comas puntos guin bajo espacio'
    }
    
    return ''
}



function validarFormulario(event){


const errorNombre = validarNombre($form.nombre.value)
const errorCiudad = validarCiudad($form.ciudad.value)
const errorDescripcionRegalo = validarDescripcionRegalo($form['descripcion-regalo'].value)



const errores = {
    nombre : errorNombre,
    ciudad : errorCiudad,
    'descripcion-regalo': errorDescripcionRegalo
}

const esExito = manejarErrores(errores) === 0
if(esExito){
    const $exito = document.querySelector('#exito')
    $exito.className = ''    
    $form.className = 'oculto' 
        setTimeout(function(){
        $exito.className = 'oculto' 
        location.href="wishlist.html"
        
    },3000 );
    
    


}
event.preventDefault();
}

function manejarErrores(errores){
    const keys = Object.keys(errores)
    const $errores = document.querySelector('#errores')
    let cantidadErrores = 0
    $errores.innerHTML = ''
    keys.forEach(function(key){
        const error = errores[key]
        
        if(error){
            cantidadErrores++
            $form[key].className = 'error'

            const $error = document.createElement('li')
            $error.innerText = error

            $errores.appendChild($error)

        }else{
            $form[key].className = ''
        }
    })

    return cantidadErrores
}



$form = document.querySelector('#carta-a-santa')
$form.onsubmit = validarFormulario