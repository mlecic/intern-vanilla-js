import devices from "./devices.json" assert { type: "json" };
("use strict");

const connectedVideoDevice = () => {
  console.log("*** Connected video devices: ***");
  const videoDevices = devices.filter(
    (element) => element.isConnected == true && element.isVideoDevice == true
  );

  return videoDevices;
};

console.log(connectedVideoDevice());
