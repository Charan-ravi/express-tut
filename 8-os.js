const os = require("os");
//info about curr user

const user = os.userInfo();
console.log(user);

//method returns uptime in seconds
console.log("The system uptime is " + os.uptime() + " s");

const currOS = {
  name: os.type(),
  release: os.release(),
  totMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currOS);
