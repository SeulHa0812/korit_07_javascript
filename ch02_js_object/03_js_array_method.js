let fruits = ['사과', '바나나', '키위'];
console.log(fruits.toString());
// result : 사과,바나나,키위 *(공백없음)

console.log(fruits.join('/'));
// result: 사과/바나나/키위

let lastFruit = fruits.pop();
console.log(lastFruit);
// 결과값 : 키위
console.log(fruits);
// 결과값 : ['사과', '바나나']

let firstFruits= fruits.shift();
console.log(firstFruits);
// result : 사과
console.log(fruits);
// resuilt : ['바나나']
console.log(fruits.unshift('레몬')); // result : 2
console.log(fruits);
// result :['레몬', '바나나']

// splice
let fruits2 = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits2.splice(2, 0 , 'Lemon', 'Kiwi');
console.log(fruits2);
// result : ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango'];

// concay()
let arr1 = ['김일', '김이'];
let arr2 = ['김삼', '김사'];
let arr3 = ['김오', '김육'];

let myStudents = arr1.concat(arr2, arr3);
console.log(myStudents);
// 결과값 : ['김삼', '김사', '김오', '김육']
let student2 = myStudents.slice(3, 5);
// 결과값 : ['김삼', '김사', '김오',];

// filter()
/*
  filter() 메서드 활용하여 words 배열 내에 있는 단어의 길이가 5 이상인 애들만 추출 -> 새로운 배열 만들어 콘솔 출력
*/
let words = ['부산광역시', '부산시', '서울특별시', '서울', '경상남도 남해서', '남해시', '광주광역시', '경기도 광주시', '오사카부 오사카시', '오사카'];

let result = words.filter(function(word) {
  return word.length > 4;
});

console.log(result);

/*
점수가 80 이상인 사람만 가지고 새로운 배열을 작성하는 예시
*/

let persons = [
  {
    name: '김일',
    score: 78,
    city: '서울',
  },{
    name: '김이',
    score: 98,
    city: '대전',
  },{
    name: '김삼',
    score: 76,
    city: '대구',
  },{
    name: '김사',
    score: 100,
    city: '부산',
  },
];
console.long(persons);

let pass = persons.filter(
  function(person) {
    return person.score > 79;
  }
);

console.log(pass); // 내부 element의 객체
/*
  이상에서 주의할 점은 persons를 가지고 새로운 배열을 만들었는데 persons element = object(datatype)
  pass element = also object
  score가지고 비교했다고 해서 점수들을 element로 삼는 것 x
*/

// map()
let userList = [
  {
    firstName: '일',
    lastName: '김',
    email: '1@test.com',
  }, {
    firstName: '이',
    lastName: '김',
    email: '2@test.com',
  }, {
    firstName: '삼',
    lastName: '김',
    email: '3@test.com',
  }, {
    firstName: '사',
    lastName: '김',
    email: '4@test.com',
  }, {
    firstName: '오',
    lastName:'김',
    email: '5@test.com',
  },
];

let koreanUserList = userList.map(
  function(user) {
    return {
      fullName: user.lastName + user.firstName,
      firstName: user.firstName,
      lastName : user.lastName,
      email: user.email,
    }
  }
);
console.log(userList);
console.log(koreanUserList);

//reduce
let scores = [40, 100, 1, 5, 25, 10];
let sum = scores.reduce(
  function(total, currentValue) {
    return total + countValue;
  }
);
console.log(sum); // result : 181
