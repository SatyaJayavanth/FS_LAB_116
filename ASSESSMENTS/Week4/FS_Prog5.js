//normal initialize
const items = ["Apple", 42, true, { id: 1 }];
//constructor
const numbers = new Array(1, 2, 3);
//printing
console.log(items)

console.log(numbers)

const fruits = ["Apple", "Banana", "Cherry"];
//access
console.log(fruits[0]);
//modify
fruits[1] = "Mango";
//length
console.log(fruits.length);
//methods(mutable)
fruits.push("Kiwi");
console.log(fruits);
numbers.pop();
console.log(numbers)
fruits.unshift("Sapota");
console.log(fruits);
items.shift();
console.log(items)
fruits.splice(1,1,"Pear")
console.log(fruits);
//(un mutable)
console.log(fruits.slice(2,4));
console.log(items.concat(numbers));
console.log(fruits.indexOf('Mango'));
console.log(numbers.includes(2));
//spread and rest operators
const original =[1,2];
const cloneAndExtend = [...original, 3, 4];
console.log(cloneAndExtend);
//higher methods
const prices =[1,2,3,4,5,6];
prices.forEach(price => console.log(`Price: $${price}`));
const numbersss =[1,2,3,4,5,6];
const doubled = numbersss.map(num => num * 2); 
console.log(doubled);
