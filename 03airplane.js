"use strict";
const airplane = {
  init: function (name) {
    this.name = name;
  },
  isFlying: undefined,
  takeOff: function () {
    this.isFlying = true;
    return airplane;
  },
  land: function () {
    this.isFlying = false;
    return airplane;
  },
};

airplane.init("Boeing 630");
console.log(airplane.name);
airplane.takeOff();
console.log(airplane.isFlying);
airplane.land();
console.log(airplane.isFlying);
