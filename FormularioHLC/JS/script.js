
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

const expresiones={
    usuario:/^[a-zA-Z0-9\_\-]{4,16}$/,
    nombre:/^[a-zA-ZÁ-ÿ\s]{1,40}$/,
    contraseña:/^.{4,12}$/,
    correo:/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    telefono:/^\d{7,14}$/,
    fecha:/^(\d{1,2})-(\d{1,2})-(\d{4})$/
}

const validarFormulario = (e) => {
    //console.log("se ejecuto");
    //console.log(e.target.name);
    
    switch (e.target.name) {
        case "nombre":
                //console.log("funciona");
                if (expresiones.nombre.test(e.target.value) || e.target.value=="") {
                    document.getElementById('nombre').classList.remove('formulario__input-error');
                    document.getElementById('nombre').classList.add('formulario__input-correcto');
                    document.querySelector('i').classList.remove('formulario__validacion-estado-error');
                    document.querySelector('i').classList.add('formulario__validacion-estado');
                    document.querySelector('p').classList.remove('parrafoNombre-error');
                   document.querySelector('p').classList.add('parrafoNombre');
                    
                }else{
                    document.getElementById('nombre').classList.remove('formulario__input-correcto'); 
                   document.getElementById('nombre').classList.add('formulario__input-error');
                   document.querySelector('i').classList.remove('formulario__validacion-estado');
                   document.querySelector('i').classList.add('formulario__validacion-estado-error');
                   document.querySelector('p').classList.remove('parrafoNombre');
                   document.querySelector('p').classList.add('parrafoNombre-error');
                }
            break;
        case "apellidos":
                //console.log("funciona");
                if (expresiones.nombre.test(e.target.value) || e.target.value=="") {
                    document.getElementById('apellidos').classList.remove('formulario__input-error');
                    document.getElementById('apellidos').classList.add('formulario__input-correcto');
                    document.querySelector('i').classList.remove('formulario__validacion-estado-error');
                    document.querySelector('i').classList.add('formulario__validacion-estado');
                    document.querySelector('p').classList.remove('parrafoApellido-error');
                   document.querySelector('p').classList.add('parrafoApellido');
                    
                }else{
                    document.getElementById('usuario').classList.remove('formulario__input-correcto'); 
                   document.getElementById('usuario').classList.add('formulario__input-error');
                   document.querySelector('i').classList.remove('formulario__validacion-estado');
                   document.querySelector('i').classList.add('formulario__validacion-estado-error');
                   document.querySelector('p').classList.remove('parrafoApellido');
                   document.querySelector('p').classList.add('parrafoApellido-error');
                }
            break;
        case "correo":
                //console.log("funciona");
                if (expresiones.correo.test(e.target.value) || e.target.value=="") {
                    document.getElementById('correo').classList.remove('formulario__input-error');
                    document.getElementById('correo').classList.add('formulario__input-correcto');
                    document.querySelector('i').classList.remove('formulario__validacion-estado-error');
                    document.querySelector('i').classList.add('formulario__validacion-estado');
                    document.querySelector('p').classList.remove('parrafoCorreo-error');
                   document.querySelector('p').classList.add('parrafoCorreo');
                    
                }else{
                    document.getElementById('correo').classList.remove('formulario__input-correcto'); 
                   document.getElementById('correo').classList.add('formulario__input-error');
                   document.querySelector('i').classList.remove('formulario__validacion-estado');
                   document.querySelector('i').classList.add('formulario__validacion-estado-error');
                   document.querySelector('p').classList.remove('parrafoCorreo');
                   document.querySelector('p').classList.add('parrafoCorreo-error');
                }
            break;
        case "telefono":
                //console.log("funciona");
                if (expresiones.telefono.test(e.target.value) || e.target.value=="") {
                    document.getElementById('telefono').classList.remove('formulario__input-error');
                    document.getElementById('telefono').classList.add('formulario__input-correcto');
                    document.querySelector('i').classList.remove('formulario__validacion-estado-error');
                    document.querySelector('i').classList.add('formulario__validacion-estado');
                    document.querySelector('p').classList.remove('parrafoTelefono-error');
                   document.querySelector('p').classList.add('parrafoTelefono');
                    
                }else{
                    document.getElementById('telefono').classList.remove('formulario__input-correcto'); 
                   document.getElementById('telefono').classList.add('formulario__input-error');
                   document.querySelector('i').classList.remove('formulario__validacion-estado');
                   document.querySelector('i').classList.add('formulario__validacion-estado-error');
                   document.querySelector('p').classList.remove('parrafoTelefono');
                   document.querySelector('p').classList.add('parrafoTelefono-error');
                }
            break
        case "usuario":
                //console.log("funciona");
                if (expresiones.usuario.test(e.target.value) || e.target.value=="") {
                    document.getElementById('usuario').classList.remove('formulario__input-error');
                    document.getElementById('usuario').classList.add('formulario__input-correcto');
                    document.querySelector('i').classList.remove('formulario__validacion-estado-error');
                    document.querySelector('i').classList.add('formulario__validacion-estado');
                    document.querySelector('p').classList.remove('parrafoUsuario-error');
                   document.querySelector('p').classList.add('parrafoUsuario');
                    
                }else{
                    document.getElementById('usuario').classList.remove('formulario__input-correcto'); 
                   document.getElementById('usuario').classList.add('formulario__input-error');
                   document.querySelector('i').classList.remove('formulario__validacion-estado');
                   document.querySelector('i').classList.add('formulario__validacion-estado-error');
                   document.querySelector('p').classList.remove('parrafoUsuario');
                   console.log(document.querySelector('p').classList.remove('parrafoUsuario'));
                   document.querySelector('p').classList.add('parrafoUsuario-error');
                }
            break
        case "fecha":
                //console.log("funciona");
                if (expresiones.fecha.test(e.target.value) || e.target.value=="") {
                    document.getElementById('fecha').classList.remove('formulario__input-error');
                    document.getElementById('fecha').classList.add('formulario__input-correcto');
                    document.querySelector('i').classList.remove('formulario__validacion-estado-error');
                    document.querySelector('i').classList.add('formulario__validacion-estado');
                    document.querySelector('p').classList.remove('parrafoFecha-error');
                   document.querySelector('p').classList.add('parrafoFecha');
                    
                }else{
                    document.getElementById('fecha').classList.remove('formulario__input-correcto'); 
                   document.getElementById('fecha').classList.add('formulario__input-error');
                   document.querySelector('i').classList.remove('formulario__validacion-estado');
                   document.querySelector('i').classList.add('formulario__validacion-estado-error');
                   document.querySelector('p').classList.remove('parrafoFecha');
                   document.querySelector('p').classList.add('parrafoFecha-error');
                }
            break

        default:
            break;
    }

}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
});







