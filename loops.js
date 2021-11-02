/*var x = 10;
while (x <= 25) {
  console.log('Printing out x = ' + x);
  x = x + 2;
}*/

/*var x = 1;

while (x <= 20) {
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
}*/

/*var num = 99;

while (num > 0) {
    if (num > 2) {
        console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! " + "Take one down, pass it around... " + (num-1) + " bottles of juice on the wall!");
    } else if (num === 2) {
        console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! " + "Take one down, pass it around... " + (num-1) + " bottle of juice on the wall!");  
    } else {
        console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! " + "Take one down, pass it around... " + (num-1) + " bottles of juice on the wall!");
    }
    num = num - 1;
    // check value of num
    // print lyrics using num
    // don't forget to check pluralization on the last line!
    // decrement num
}*/

let second = 60

while (second >= 0) {
    if (second === 50) {
        console.log("Orbiter transfers from ground to internal power");
    } else if (second === 31) {
        console.log("Ground launch sequencer is go for auto sequence start");
    } else if (second === 16) {
        console.log("Activate launch pad sound suppression system");
    } else if (second === 10) {
        console.log("Activate main engine hydrogen burnoff system");
    } else if (second === 6) {
        console.log("Main engine start");
    } else if (second === 0) {
        console.log("Solid rocket booster ignition and liftoff!");
    } else {
        console.log("T-" + second + " seconds");
    }
    second = second - 1;
}
