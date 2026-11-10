import os from 'node:os';

console.log('Operating System:', os.type()); 
console.log('Total Memory (GB):', os.totalmem() / 1024 / 1024 / 1024);
console.log('Free Memory (GB):', os.freemem() / 1024 / 1024 / 1024);
console.log(`Current User Info:`, os.userInfo());
console.log(`OS Platform: ${os.platform()}`);
console.log(`CPU Architecture: ${os.arch()}`);

import path from 'node:path';
