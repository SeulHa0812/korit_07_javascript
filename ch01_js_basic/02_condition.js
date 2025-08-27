/*
7세 이하 - 0원
8세 이상 13세 이하 - 450원
14세 이상 19세 이하 - 720원
20세 이상 - 1200원
70세 이상 - 0원
에 해당하는 if문 작성
*/

let age = 12; //변수 선언 및 초기화
let busFare = 0;

if (age < 8 || age > 71) {
  busFare = 0;
} else if (age < 14) {
  busFare = 450;
} else if (age < 20) {
  busFare = 720;
} else {
  busFare = 1200;
}
console.log(age + " 살의 버스 요금은 " + busFare + "원입니다.");

