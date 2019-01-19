<script src="/socket.io/socket.io.js"></script>
    <script>
var socket = io.connect('http://localhost'); // connec to server
socket.on('news', function (data) { // listen to news event raised by the server
    console.log(data);
    socket.emit('my other event', { my: 'data' }); // raise an event on the server
});
</script>