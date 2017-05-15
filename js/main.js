function submit(){
    if(validarData()) {
        mostrarData();
    }
}

function validarData(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;
    var direccion = document.getElementById("direccion").value;
    var telefono = document.getElementById("telefono").value;
    var pack = document.getElementById("tipos_te").value;
    var suscribir = document.getElementById("suscribirse").checked;

    if (nombre=="" || apellido=="" || correo=="" || direccion=="" || telefono=="" || pack=="" || suscribir==""){
        document.getElementById("validaciones").innerHTML = 'Todos los campos deben estar llenos';
        return false;
    } else {
        document.getElementById("validaciones").innerHTML = '';
        return true;
    }

}

function mostrarData(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;
    var direccion = document.getElementById("direccion").value;
    var telefono = document.getElementById("telefono").value;
    var pack = document.getElementById("tipos_te").value;
    var suscribir = document.getElementById("suscribirse").checked;

    document.getElementById('clientes').innerHTML = '<h3>Los datos ingresados fueron: </h3>' + 
    '<p><strong>Nombre: </strong>' + nombre + '</p>' + 
    '<p><strong>Apellido: </strong>'+ apellido + '</p>' + 
    '<p><strong>Correo: </strong>' + correo + '</p>' + 
    '<p><strong>Dirección: </strong>' + direccion + '</p>' + 
    '<p><strong>Teléfono: </strong>' + telefono + '</p>'+
    '<p><strong>Pack: </strong>' + pack + '</p>' +
    '<p><strong>Recibir notificaciones: </strong>' + suscribir + '</p>';
}
