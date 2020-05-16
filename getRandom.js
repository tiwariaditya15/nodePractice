const getName = function(){
    const namesArray = ['aditya', 'pankaj', 'kiran', 'akshay', 'shivam', 'pratik', 'ragini', 'priya', 'pushpa'];
    return namesArray[Math.floor(Math.random() * namesArray.length)];
};

const getNumber = function(){
    const numbersArray = ['8796560715', '9875487563', '7845965874', '8457125478', '7452314569'];
    return numbersArray[Math.floor(Math.random() * numbersArray.length)];
} 


const getEmail = function(){
    const emailsArray = ['tiwariadity156@hotmail.com', 'tiwariadity1@hotmail.com', 'tiwariadity157@hotmail.com', 'tiwariadity1579@hotmail.com', 'tiwariadity15@hotmail.com'];
    return emailsArray[Math.floor(Math.random() * emailsArray.length)];
}
module.exports = {getName, getNumber, getEmail};