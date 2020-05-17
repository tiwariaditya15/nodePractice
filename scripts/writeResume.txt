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