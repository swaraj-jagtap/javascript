// console.log(2>1);


// console.log("2">1);// the output wil be true because js directly convert string to number in  this case

// console.log(null > 0);  //output is false
// console.log(null==0);  //output is false
// console.log(null>=0);  //output is true 

// the reason is that an equality cheack ( i.e == )and comparison (ie <,>,>=,<= ) works differently 
// comaprison convert null to a number ,treating it as a 0. That's why null >=0 is true and null > 0 is false 

console.log("2"==2); //output is true 
console.log("2"===2);//output is false bcoz here strict check is done i.e datatype is also checked


