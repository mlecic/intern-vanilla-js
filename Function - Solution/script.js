"use strict";
import devices from "./devices.json" assert { type: "json" };

const storeManager = (key, value) => {
  if (localStorage.getItem(key) === null) {
    localStorage.setItem(key, JSON.stringify(value));
    console.log(`${key} has been added in Local Storage!`);
  }
};

const connectedDevices = (storeManager) => {
  console.log("*** Connected devices: ***");
  const devicesConnected = devices.filter(
    (element) => element.isConnected == true
  );

  if (!!storeManager) {
    storeManager(`ALL_CONNECTED_DEVICES`, devicesConnected);
  } else {
    throw new Error(`Store Manager could not store/save to Local Storage!`);
  }

  return devicesConnected;
};

const connectedVideoDevices = (storeManager) => {
  console.log("*** Connected video devices: ***");
  const videoDevices = devices.filter(
    (element) => element.isConnected == true && element.isVideoDevice == true
  );

  if (!!storeManager) {
    storeManager(`CONNECTED_VIDEO_DEVICES`, videoDevices);
  } else {
    throw new Error(`Store Manager could not store/save to Local Storage!`);
  }

  return videoDevices;
};

const getNameAndPID = (storeManager) => {
  const parsed = devices.map(function (device) {
    return {
      deviceName: device.displayName,
      pid: device.pid,
    };
  });

  if (!!storeManager) {
    storeManager(`NAMES_AND_PIDS`, parsed);
  } else {
    throw new Error(`Store Manager could not store/save to Local Storage!`);
  }

  return parsed;
};

console.log(connectedDevices(storeManager));
console.log(connectedVideoDevices(storeManager));
console.log(getNameAndPID(storeManager));
