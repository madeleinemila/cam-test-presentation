// **************** HARDWARE CONTROLLER SOCKET *********************************

// FYI ARDUINO HARDWARE OUTPUTS:
// LEFT 48 off, 49 on
// UP 50 off, 51 on
// RIGHT 52 off, 53 on
// DOWN 54 off, 55 on

// open socket
const socket = io.connect('http://localhost:3001');
// fail handling
socket.on('connect_error', function() {
    console.log( 'No hardware controller server connected' );
    console.log( 'NOTE: If you are connecting your own hardware, run your server on localhost:3001 and then refresh this page.' );
    socket.close();
});
// success handling
socket.on('connect', function () {
    console.log( '*** Hardware controller server connected ***' );

    socket.on('pressed', function(data) {
      switch(data.pressed) {
        // LHS USB PORT
        case 49: // L pressed
          prevSlide();
          break;
        case 51: // U pressed
          video.play();
          break;
        case 53: // R pressed
          nextSlide();
          break;
        case 55: // D pressed
          video.volume -= 0.05;
          break;
        }
    });

    socket.on('pressed1421', function(data) {
        switch(data.pressed1421) {
        // RHS USB PORT
        case 59: // L pressed
          prevSlide();
          break;
        case 61: // U pressed
          video.play();
          break;
        case 63: // R pressed
          nextSlide();
          break;
        case 65: // D pressed
          video.volume -= 0.05;
          break;
        }
      });
});
