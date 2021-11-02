/*var x = 10;
while (x <= 25) {
  console.log('Printing out x = ' + x);
  x = x + 2;
}*/

var x = 1;

while (x <= 20/* your stop condition goes here */) {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log("JuliaJames");
    } else if (x % 5 === 0) {
        console.log("James");
    } else if (x % 3 === 0) {
        console.log("Julia");
    } else {
        console.log(x);
    }
    x = x + 1;
    // check divisibility
    // print Julia, James, or JuliaJames
    // increment x
}
