const os = require('os');


//info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds. How long its been running.
console.log(`The system uptime us ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);