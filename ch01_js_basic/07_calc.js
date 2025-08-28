let calc = function(x, y, operator) { // 매개변수의 자료형이나 선언자가 없음
  if (operator === '+') {
    return x + y;
  } else if (operator === '-') {
    return x - y;
  } else if (operator === '*') {
    return x * y;
  } else if (operator === '/') {
    return x / y;
  } 
}

let plusResult = calc(5, 7, '+');
console.log(plusResult);

let minusResult = calc(10, 7, '-');
console.log(minusResult);

let multiResult = calc( 203, 2459, '*');
console.log(multiResult);

let divResult = calc(5943, 21, '/');
console.log(divResult);