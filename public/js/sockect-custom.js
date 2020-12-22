var socket = io();


socket.on('connect', function() {
    console.log('conectado al servidor');
});

// Escuchar
socket.on('disconnect', function() {
    console.log('conexión perdida con el servidor');
});

// enviar información
socket.emit('enviarMensaje', {
    usuario: 'Lorenzo',
    mensaje: 'Hola mundo'
}, function(respuesta) {
    console.log('Respuesta serer:', respuesta);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});