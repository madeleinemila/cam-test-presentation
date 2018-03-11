// **************** HARDWARE CONTROLLER SOCKET *********************************

// initialize button flags
// let hardwareL = false;
// let hardwareR = false;
// let hardwareU = false;
// let hardwareD = false;
//
// let hardwareL2 = false;
// let hardwareR2 = false;
// let hardwareU2 = false;
// let hardwareD2 = false;

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
        // PLAYER 1 - LHS USB PORT on test computer
        case 48:
          // hardwareL = false;
          break;
        case 49:
          // hardwareL = true;
          prevSlide();
          break;
        case 50:
          // hardwareU = false;
          break;
        case 51:
          // hardwareU = true;
          break;
        case 52:
          // hardwareR = false;
          break;
        case 53:
          // hardwareR = true;
          nextSlide();
          break;
        case 54:
          // hardwareD = false;
          break;
        case 55:
          // hardwareD = true;
          break;
        // default:
          // hardwareL = false;
          // hardwareR = false;
          // hardwareU = false;
          // hardwareD = false;
        }
    });

    socket.on('pressed1421', function(data) {
        switch(data.pressed1421) {
        // PLAYER 2 - RHS USB PORT on test computer
        case 58:
          // hardwareL2 = false;
          break;
        case 59:
          // hardwareL2 = true;
          prevSlide();
          break;
        case 60:
          // hardwareU2 = false;
          break;
        case 61:
          // hardwareU2 = true;
          break;
        case 62:
          // hardwareR2 = false;
          break;
        case 63:
          // hardwareR2 = true;
          nextSlide();
          break;
        case 64:
          // hardwareD2 = false;
          break;
        case 65:
          // hardwareD2 = true;
          break;
        // default:
        //   hardwareL2 = false;
        //   hardwareR2 = false;
        //   hardwareU2 = false;
        //   hardwareD2 = false;
        }
      });
});







//*****************************************************************************
