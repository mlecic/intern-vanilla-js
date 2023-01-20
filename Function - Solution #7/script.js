import devices from "./devices.json" assert { type: "json" };
("use strict");

const deviceConnected = () => {
  console.log("*** Connected devices: ***");
  const connectedDevices = devices.filter(
    (element) => element.isConnected == true
  );

  return connectedDevices;
};

console.log(deviceConnected());
