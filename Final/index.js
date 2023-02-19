const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre: /^[a-zA-Z]{1,16}$/,
    contraseña: /^.{8,16}$/,
    email: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
}

const campos = {
    nombre: false,
    email: false,
    password: false,
    password2: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
           validarCampo(expresiones.nombre, e.target, 'nombre');
        break;

        case "email":
            validarCampo(expresiones.email, e.target, 'email');
        break;

        case "password":
           validarCampo(expresiones.contraseña, e.target, 'password');
           validarPassword2();
        
        break;

        case "password2":
            validarPassword2();
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('form__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('form__grupo-correcto');
        document.querySelector(`#grupo__${campo} .form__input-error`).classList.remove('form__input-error-activo');
        campos[campo] = false;
    } else {
        document.getElementById(`grupo__${campo}`).classList.remove('form__grupo-correcto');
        document.getElementById(`grupo__${campo}`).classList.add('form__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} .form__input-error`).classList.add('form__input-error-activo');
        campos[campo] = true;
    }
    
}

const validarPassword2 = () => {
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');

    if (inputPassword1.value !== inputPassword2.value) {
        document.getElementById('grupo__password2').classList.remove('form__grupo-correcto');
        document.getElementById('grupo__password2').classList.add('form__grupo-incorrecto');
        document.querySelector('#grupo__password2 .form__input-error').classList.add('form__input-error-activo');
        campos[password2] = false;

    } else {
        document.getElementById('grupo__password2').classList.remove('form__grupo-incorrecto');
        document.getElementById('grupo__password2').classList.add('form__grupo-correcto');
        document.querySelector('#grupo__password2 .form__input-error').classList.remove('form__input-error-activo');
        campos[password2] = true;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (campos.nombre && campos.email && campos.password && password2) {
        validarFormulario2();
        document.getElementById('form__mensaje-exito').classList.add('form__mensaje-exito-activo');
        
    } else {
        validarFormulario2();
    }
});


var nom = document.getElementById('nombre');
var em = document.getElementById('email');
var pass = document.getElementById('password');
var pass2 = document.getElementById('password2');

const validarFormulario2 = (e) => {
    if (nom.value === null || nom.value === ''){
        document.querySelector('#grupo__nombre .form__input-relleno').classList.add('form__input-relleno-activo');
    } else {
        document.querySelector('#grupo__nombre .form__input-relleno').classList.remove('form__input-relleno-activo');
    }

    if (em.value === null || em.value === ''){
        document.querySelector('#grupo__email .form__input-relleno').classList.add('form__input-relleno-activo');
    } else {
        document.querySelector('#grupo__email .form__input-relleno').classList.remove('form__input-relleno-activo');
    }

    if (pass.value === null || pass.value === ''){
        document.querySelector('#grupo__password .form__input-relleno').classList.add('form__input-relleno-activo');
    } else {
        document.querySelector('#grupo__password .form__input-relleno').classList.remove('form__input-relleno-activo');   
    }

    if (pass2.value === null || pass2.value === ''){
        document.querySelector('#grupo__password2 .form__input-relleno').classList.add('form__input-relleno-activo');
    } else {
        document.querySelector('#grupo__password2 .form__input-relleno').classList.remove('form__input-relleno-activo');

    }
}