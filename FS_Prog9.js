//global
global.x = 42; 
console.log(x);
//console
console.log("Hello Node.js");
console.table([{name:"vasheer",roll:115},{name:"aksan",roll:122}]);
//process
console.log(process.pid);
console.log(process.version);
console.log(process.platform);
//buffer
const buf = Buffer.from("Hi");
console.log(buf)
console.log(buf.toString());
console.log(buf.length)
//dirname
console.log(__dirname);
//filename
console.log(__filename);
//setTimeout
console.log("Step 1: Start");

setTimeout(() => {
  console.log("Step 3: 3 seconds have passed!");
}, 3000);

console.log("Step 2: End of script file");
//setInterval
let count = 0;

// Run every 1000 milliseconds (1 second)
const timer = setInterval(() => {
  count++;
  console.log(`Seconds elapsed: ${count}`);

  // Stop the interval after 3 iterations
  if (count === 3) {
    clearInterval(timer);
    console.log("Timer stopped.");
  }
}, 2000);

