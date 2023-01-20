"use strict";
import devices from "./devices.json" assert { type: "json" };

const connectedDevices = () => {
  console.log("*** Connected devices: ***");
  const devicesConnected = devices.filter(
    (element) => element.isConnected == true
  );

  return devicesConnected;
};

const connectedVideoDevices = () => {
  console.log("*** Connected video devices: ***");
  const videoDevices = devices.filter(
    (element) => element.isConnected == true && element.isVideoDevice == true
  );

  return videoDevices;
};

console.log(connectedDevices());
console.log(connectedVideoDevices());
