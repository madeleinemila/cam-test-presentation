const SerialPort = require('serialport');
const app = require('express');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const fs = require('fs');

const lhsUSB = "/dev/cu.usbmodem1411";
const rhsUSB = "/dev/cu.usbmodem1421";

if ( fs.existsSync(lhsUSB) ) {
  const serialport = new SerialPort( lhsUSB );
  serialport.on('open', function() {
    console.log(`LHS Serial Port Opened`);
    serialport.on('data', function(data) {
      console.log(data[0]); // logging to terminal
      io.emit('pressed', { pressed: data[0] });
    });
  });
}

if ( fs.existsSync(rhsUSB) ) {
  const serialportRHS = new SerialPort( rhsUSB );
  serialport.on('open', function() {
    console.log(`RHS Serial Port Opened`);
    serialport.on('data', function(data) {
      const dataRHS = data[0] + 10; // offset from no's coming from LHS
      console.log(dataRHS); // logging to terminal
      io.emit('pressed', { pressed: dataRHS });
    });
  });
}

http.listen(3001, function() {
  console.log(`Listening on 3001...`);
})
