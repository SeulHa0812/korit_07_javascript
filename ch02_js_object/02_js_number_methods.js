let x = 10.656;
// toFixed()
console.log(x.toFixed(0)); // result : 11
console.log(x.toFixed(2)); // result : 10.66
console.log(x.toFixed(5)); // result : 10.65600
// toPrecision()
console.log(x.toPrecision()); // result : 10.656
console.log(x.toPrecision(2)); // result: 11
console.log(x.toPrecision(4)); // result : 10.66

// parseInt()
console.log(parseInt('-10')); // result : -10
console.log(parseInt('-12.33')); // result : -12
console.log(parseInt('10')); // result : 10
console.log(parseInt('12.33')); // result :12
console.log(parseInt('10 20 30')); // result : 10
console.log(parseInt('10 years')); // result :10
console.log(parseInt('years 10')); // result : NaN
// NaN : Not a Number

