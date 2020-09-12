function validarFormulario(){

let textoNombre = document.getElementById('nombre').value;
let textoApellido = document.getElementById('apellido').value;
let textotelefono = document.getElementById('telefono').value;
let textocorreo = document.getElementById('correo').value;
let textocontraseña = document.getElementById('contraseña').value;


if(textoNombre == null || textoNombre.length == 0){
    alert("El campo nombre esta vacio ");
    return false;
}
else if(textoApellido == null || textoApellido.length == 0){
    alert("El campo apellido esta vacio complete ");
    return false;
}
else if(textotelefono == null || textotelefono.length == 0){
    alert("El campo telefono no debe estar vacio complete ");
    return false;
}
else if(textocorreo == null || textocorreo.length == 0){
    alert("El campo correo esta vacio complete ");
    return false;
}
else if(textocontraseña == null || textocontraseña.length == 0){
    alert("El campo contraseña esta vacio complete ");
    return false;
}
else{
    alert('exelente datos completos');
}
}
