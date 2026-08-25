//read async
const fs = require('fs');
fs.readFile('files1.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data); 
});
//read sync
try {
  const data = fs.readFileSync('files2.txt', 'utf8');
  console.log(data); 
} catch (err) {
  console.error(err);
}
//write async
fs.writeFile('files1.txt','\nwritten this text in this file',err =>{
    if (err) throw err;
    console.log("file is written"); 
})
//write sync
try {
  fs.writeFileSync('files3.txt','this content to be added');
  console.log("file saved"); 
} catch (err) {
  console.error(err);
}
//appending
fs.appendFile('files2.txt', '\nThis is appended content.', err => {
  if (err) throw err;
  console.log('Content appended!');
});
//delete
fs.unlink('files4.txt', err => {
  if (err) throw err;
  console.log('File was deleted.');
});
