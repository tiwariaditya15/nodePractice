// --> video 4
// /* setTimeout sits on global object and acts like timer */
// setTimeout(function(){
//     console.log('2 secconds passed now setInterval runs.');
// }, 2000);



// let time = 0;
// /*setInterval() runs after each x miliseconds passed in function*/
// const timer = setInterval(function(){
//     time += 2;
//     if(time > 5){
//         console.log('setInterval ran for 4 seconds now exiting.');
//         clearInterval(timer);
//     }
// }, 2000);

// //global.__dirname and ____filename
// console.log(global);
// console.log( 'Directory -> ' + __dirname);
// console.log( 'Filename -> ' + __filename);

//--> video 5

// let {getName, getNumber, getEmail} = require('./getRandom');
// let time = 0;
// const timer = setInterval(function(){
//     time += 1;
//     if(time > 10){
//         console.log('Program ran 10 seconds');
//         clearInterval(timer);
//     }
//     console.log('Now my name is ' + getName() + ', number is ' + getNumber() + ', and email is ' + getEmail());
// }, 1000);


//-------------------->events module
const events = require('events');

// const customEmitter = new events.EventEmitter();

// customEmitter.on('explicitEmit', function(msg){
//     console.log(msg);
// });

// customEmitter.emit('explicitEmit', 'Forcefull custom emit.');

class Person extends events.EventEmitter{
    constructor(name){
            
    }
}