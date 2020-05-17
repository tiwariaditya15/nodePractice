const fs = require('fs');

/* HAndling Files */
// const readMeText = fs.readFileSync('readMe.txt', 'utf8');
// fs.writeFileSync('writeMe.txt', readMeText + ' \nnigga What');
// console.log(readMeText);

/* async method tends to be faster than sync methods because they are non blocking io*/
// fs.readFile('readMe.txt', 'utf8', (err, data) =>{
//     console.log(data);
//     fs.writeFile('writeMe.txt', data, err => {
//         console.log(err);
//     });
// });
// try{
//     fs.unlink('writeMe.txt', err => {
//         //if (err) throw err;
//         //console.log('Deleted.');
//     });
// }catch(error){
//     console.log('OOPS! -> ' + err);
// }

/* Directories */

// fs.mkdir('oneTut', () => {
//     fs.readFile('readMe.txt', (error, data) => {
//             fs.writeFile('./oneTut/writeMe.txt', data, err => {});
//     });
// });

// fs.unlink('./oneTut/writeMe.txt', err => {
//     fs.rmdir('./oneTut', err => {});
// });

/*---------------------------------Pipes---------------------------------------*/
const http = require('http');
const fs = require('fs');


// const writeStream = fs.createWriteStream(__dirname + '/scripts/writeResume.txt',);
// const readStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');


// /* Pipings are efficient way to read from createReadStream and write to a to file opened with createWriteStream */
// readStream.pipe(writeStream);

// let bufferNumber = 0; 
// /* On createReadStream we can use 'data' event to know when stream received chunk */
// readStream.on('data', chunk => {
//     console.log('Data received. Buffer number:' + bufferNumber++);
//     console.log(chunk);
//     writeStream.write(chunk);
// });

const server = http.createServer((req, res) => {
    res.writeHeader(200, {'Content-Type': 'text/plain'});
    const readStream = fs.createReadStream( __dirname + '/readMe.txt', 'utf8');
    readStream.pipe(res);
});

server.listen(3000, '127.0.0.1');