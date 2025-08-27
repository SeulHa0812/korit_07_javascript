let brands = ["애플", "구글", "메타", '아마존', '삼성전자'];

console.log(brands[0]);
console.log(brands[1]);
console.log(brands[2]);
console.log(brands[3]);
console.log(brands[4]);

// 이상과 같은 방식을 굳이 할 필요 없으니까 반복문 사용

for (let i = 0 ; i < brands.length ; i++) {
  console.log('반복문으로 출력한 ' + brands[i])
}

let productList = [
  {
  name: '솔의눈',
  price: 700,
},
{
  name: '레쓰비',
  price: 780,
},
{
  name: '파워에이드',
  price: 1200,
},
{
  name: '오렌지주스',
  price: 1400,
},
{
  name: '제로콜라',
  price: 800,
},
{
  name: '맥콜',
  price: 900,
},
];

/*
  이상의 코드 라인에서 주목해야 할 부분은 첫 번째, 마지막 index에 해당하는 element 다음에도 ','가 찍혀있는데도 불구하고
  오류가 발생하기 않는다는 점.
  
  두 번째, Array의 element인 object의 마지막 property의 value 값 다음에도 ','가 있지만 오류 발생 x

  이거 추후에 property를 추가하거나 혹은 element를 추가하거나 할 때 전에 말한 것처럼 쉼표 피고 엔터 치고 다시 {} 혹은
  property 추가를 하기 귀찮으니까 맨 마지막 element/property 여부과 관계없이 쉼표 찍어주는게 매너가 된게 아예 관행처럼 굳어진겁니다.
  그래서 오류로 처리하지도 않음
*/

console.log(productList[4]); // 그럼 Array의 element는 object
// 그렇다면 '제로콜라'라는 string 데이터만 뽑아내기 위해서는 어떤 추가작업을 해야할까요?
console.log( productList[4].name);
console.log( productList[4]['name']);

// 솔의 눈과 파워에이드 음료수 합을 구하
console.log( productList[0].name + ' 의 가격과 ' + productList[2].name + '의 가격은 각 각 ' + productList[0].price + ' 원과 ' 
  + productList[2].price + ' 원으로, 그 합은 ' + (productList[0].price + productList[2].price) + ' 원 입니다.');
  // ; 안해도 원래 오류 없는데 하는게 매너

  // for 반복문
let inputCoin = 900;
let outputList = [];  // 빈 배열을 하나 선언하겠습니다.
// 이제 inputCoin으로 살 수 있는 음료 목록들을 집어넣도록 할겁니다.

for( let i = 0 ; i < productList.length ; i++ ) {
  if(inputCoin >= productList[i]["price"]) {
    // outputList에 element로 추가
    outputList.push(productList[i]);      // 배열에 데이터를 추가하는 method .push()
  }
}
console.log('살 수 있는 음료 목록 : ' + outputList);
// 결과값 : 살 수 있는 음료 목록 : [object Object],[object Object],[object Object],[object Object]

for ( let i = 0 ; i < outputList.length ; i++ ) {
  console.log(outputList[i]);
}
// 근데 list 내부의 객체들을 하나씩 확인하려고 하니까 얘는 또 츌력이 됨
/*
  즉 이상의 내용을 정리해봤을 때, 배열 내부에 객체가 element라면,
  배열 자체를 xonsole.log(배열명);으로 출력했을 때 결과값이
  [object Object],[object Object],[object Object],[object Object]
  형식으로만 나오게 되고,

  각 객체의 명확한 상태를 알기 위해서는 결국 배열의 각 element를 춫ㄹ하는 반복문을 작성해야 한다는 점을 확인할 수 있음
*/

// for ( let i = 0 ; i < outputList ; i++ ) {
//   for (let j = 0 ; i < outputList[i] ; j++ ) {
//     console.log(outputList[i][j]);
//   } 이 코드는 논리적으로 말이 되지 않음
// } outputlist의 element의 자료형은 객체이고, 객체에는 index number가 존재하지 않으므로 이중 for문을 통해서 객체 내부의 각 property를 확인하는 것은 불가능함
// 그럼 마찬가지로 일반 객체의 각 property를 추출해서 데이터를 가공하는 방식이 불가능함을 의미

// 2. for-in 문
let person = {
  fName: '일',
  lName: '김',
  age: 20,
}
// Js에서 객체에 반복문을 돌리게 되면 key값을 return함
// 그래서 해당 key에 할당된 value를 추출하고 싶다면 106번 라인과 같은 방식으로 코드 작성해야함
for ( const key in person ) { // 추출되는 키는 각각 fName / lName / age
  console.log(person[key])
  // 이 시점에서 첫 번째 반복이라고 가정
  // 그러면 key = 'fName';이 저장되어있다고 볼 수 있음
  // 즉 person.key는 person.fName이 아니라 person.'fName'이라는 점이 문제

  // 그래서 굳이 #1, 2로 두 가지 방식을 통해서 객체의 value를 조회할 수 있었음
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 일반 for 문으로 추출
for ( let i = 0 ; i < nums.length ; i++ ) {
  console.log(nums[i]);
}

// 객체의 property의 key를 추출할 수 있으니까, 마치 향상된 for 문 처럼 여겨져서
// 배열을  for in문으로 추출 시도
for ( let num in nums ) {
  console.log(num);
  console.log(typeof num); // 결과값 : string
}

// 3. for-of 믄
// for-in문의 경우는 객체 한정으로 생각하는 편이 나음
// 일반적인 자바에서의 향상된 for문에 해당하는 것은 for-of 문이라고 생각하면 됨

for ( const num of nums ) {
  console.log(num);
  console.log(typeof num); // result : number
}

// 객체 for in / sting for of쓰는게 좋음

// 4. while 문 : 자바랑 동일함
