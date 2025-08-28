// Template Literal
function hello2(name) {
  console.log(`Hello ${name}. 환영합니다!`);
}

hello2('김일');

  // 2. Object Literal Syntax Extension
  let type = 'student';
  let score = {
    //15번 라인의 [] 내의 값이 동일해야함
    [type]: 'Josh',
    score: 92,
  }

  console.log(score.student);

  /*
  [type]으로 작성했지만 실제 property의 key값은 'student'임
  */

  // Spread 연산자

let arr1 = [4, 5, 6];
let arr2 = [1, 2, 3];

// 결과값이 [1, 2, 3, 4, 5, 6]으로 나오게 하려면
let arr3 = arr2.concat(arr1);
console.log(arr3);
// 과 같은 방법이 있음

// Spread 활용하게 되었을 떄에는,
let arr4 = [...arr1, ...arr2];
console.log(arr4);
// 진짜 중요한 부분
/*
  ...arr2 과 같이 작성했을 때, arr2라는 배열 자체가
  들어가는 것이 아니라, 배열 내부의 element들을 
  하나씩 가지고 온다고 생각하는 편이 좋음.

  즉, let arr4 = [ ...arr2, ...arr1];
  은 외부에 []가 있는 것을 봤을 때 새로 배열을 생성한 것이고, 거기의 내부에 arr2의 element들을 순서대로 집어넣고, 그 다음 arr1의 element 들을 순서대로 집어넣어서 완성했다고 해석할 수 있음
*/

function getPerson() {
  return {
    fName: 'John',
    lName: 'Doe',
    age: 20,
    email: 'a@test.com',
    city: 'New York',
    country: 'USA',
  };
};

let {fName, lName} = getPerson();

// 사용하려는 데이터가 저장되어있는 key 이름만 정의하면, 해당 키를 같는 값을 바로 사용 가능함.
// 즉 {} 내의 요소들은 객체의 key 값과 같아야 함.
console.log(fName); // result : John
console.log(lName); // result : Doe

let person = getPerson(); // return 값이 Js 객체이므로 person은 JS 객체의 객체명이 됨.

//여태까지의 방식은 객체명.key 혹은 객체명.['key']
console.log(person.fName);
console.log(person.lName);

// 객체 구조분해를 쓰게되면 필요한 key-value만 추출할 수 있음

function displayFullName ({fName, lName}) {
  console.log(`${fName} ${lName}`);
}

displayFullName(getPerson());

function getScores() {
  return [ 70, 80, 90 ];
}

let scores = getScores();

let x = scores[0], y = scores[1], z = scores[2];

let [ x, y, z ] = getScores();

console.log(x1);
console.log(y1);
console.log(z1);

/*
  이상의 개념은 react 및 eventhandler 관련 부분에서 자주 쓰게 되는데, 그 떄 다시 설명 할 것
*/