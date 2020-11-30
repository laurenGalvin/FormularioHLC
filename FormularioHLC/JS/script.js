
var inpunts = document.getElementsByClassName('formulario__input');
for (let i = 0; i < inpunts.length; i++) {
    inpunts[i].addEventListener('keyup', function () {
        console.log(this.value.length)
        if (this.value.length >= 1) {
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    })
}

var inpunts_error = document.getElementsByClassName('formulario__input-error');
for (i = 0; i < inpunts_error.length; i++) {
    inpunts_error[i].addEventListener('keyup', function () {
        console.log(this.value.length)
        if (this.value.length >= 1) {
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    })
}

var inpunts_correcto = document.getElementsByClassName('formulario__input-correcto');
for (i = 0; i < inpunts_correcto.length; i++) {
    inpunts_correcto[i].addEventListener('keyup', function () {
        console.log(this.value.length)
        if (this.value.length >= 1) {
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    })
}


//-------------------------------------------------------------
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
//Son constantes de expresiones regulares que ayudan a la validacion de datos.
const expresiones={
    usuario:/^[a-zA-Z0-9\_\-]{4,16}$/,
    nombre:/^[a-zA-ZÁ-ÿ\s]{1,40}$/,
    contraseña:/^.{4,12}$/,
    correo:/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    telefono:/^\d{7,14}$/,
    fecha:/^(\d{1,2})-(\d{1,2})-(\d{4})$/
}
//Estas constantes son para el submit de enviar.
const campos = {
    nombre:false,
    apellidos:false,
    correo:false,
    telefono:false,
    usuario:false,
    fecha:false
}
//e.target.name lo que contiene es el envento o imput que tu clicas o donde escribes
//Si tu el evento lo realizas devuelve el nombre del imput clicado.
const validarFormulario = (e) => {
    
    switch (e.target.name) {
        case "nombre":
                validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case "apellidos":
            validarCampo(expresiones.nombre, e.target, 'apellidos');
            break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
            break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
            break
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
            break
        case "fecha":
            validarCampo(expresiones.fecha, e.target, 'fecha');
            break

        default:
            break;
    }

}
//Esta funcion lo que hace es validar todos los campos de la misma forma ya que lo unico que
//cambia es el contenido introducido y su validacion por las expresiones regulares.
const validarCampo = (expresion, input, campo) => {
    //En este if lo que hago es configurar el estilo que tiene cada campo con dos tipos de 
    // estilo diferentes uno para el relleno erroneo y otro para el relleno correcto.
    //Exactamente lo que hace es cambiar un atributo "class" de los imputs por otro con estilo
    //de error. 
    if (expresion.test(input.value) || input.value=="") {
        document.getElementById(campo).classList.remove('formulario__input-error');
        document.getElementById(campo).classList.add('formulario__input-correcto');
        document.querySelector('i').classList.remove('formulario__validacion-estado-error');
        document.querySelector('i').classList.add('formulario__validacion-estado');
        document.querySelector('p').classList.remove('parrafo-error');
       document.querySelector('p').classList.add('parrafo');
       campos[campo]=true; 
    }else{
        document.getElementById(campo).classList.remove('formulario__input-correcto'); 
       document.getElementById(campo).classList.add('formulario__input-error');
       document.querySelector('i').classList.remove('formulario__validacion-estado');
       document.querySelector('i').classList.add('formulario__validacion-estado-error');
       document.querySelector('p').classList.remove('parrafo');
       document.querySelector('p').classList.add('parrafo-error');
       campos[campo]=false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

//Aqui en este ultimo paso lo que hacemos es añadirle un evento al submit que hace que si 
//todos los campso estan bien rellenados te mande un alert para que sepas que estan correctamente
//rellenados o no.
formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
    if (campos.nombre && campos.apellidos && campos.correo && campos.telefono && campos.usuario && campos.fecha) {
            formulario.reset();
            alert("El formulario se envio.");
    }else{
            alert("El formulario tiene datos incorrectos o no estan rellenos.");
    }
});


formulario.addEventListener('reset', (e1) =>{
    formulario.reset();
    
});







