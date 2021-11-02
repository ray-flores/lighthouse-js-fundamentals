const amounts = [61.00, 52.25, 112.99, 5.00];

/*let total = 0;

for (let i = 0; i < amounts.length; i++) {
  total = total +  amounts[i];
}

console.log("Order total is: " + total);*/

let  total = 0;

for (let amount of amounts) {
  total += amount;
}
console.log('Order total is: ', total);

/*It would be the preferred way to loop over an entire array because
it is more code efficient, no need to introduce a variable i */
