// 빈 객체 생성
let person = new Object();

// 멤버 설정
person.firstName = "John";
person.lastName = "Doe";
person.age = 30;
person.getFullName = function () {
  return this.firstName + " " + this.lastName;
};
/*
  8번 라인에 대한 해석을 위해서는 어제 배운 함수 표현식 관련한 부분을 알아야함.
  JS에서는 함수를 변수에 저장할 수 있음.
  그래서 객체명.함수명()으로 호출을 하게 될거니까 우리가 배운 방식으로는 method
*/
console.log(person.getFullName);
// 결과값 : John Doe

// String-indexOf()
let str = '일이삼사오륙칠팔구 십십일';
let emptySpace = str.indexOf(' ');
console.log(emptySpace);
let lastTen = str.lastIndexOf('십');
console.log(lastTen); //result : 11

// String-slice()
let str2 = "Apple, Banana, Kiwi";
let result2 = str2.slice(7, 12);
let result3 = str2.slice(7, 13);
console.log(result2); // result : Banan
console.log(result3); // result : Banana
/*
  이상의 부분에서 주의할 점은 한계값 바로 앞까지만 불러온다는 점.
  그래서 30번 Banana라는 결과값이라고 착각할 수 있음.

  즉, slice()의 두 번재 매개변수를 for문에서의 한계값 설정할 때 이상/이하 보다는 초과/미만을 사용하는 경우가 많은데, 그 이유가 여기서도 적용됨.
*/
let result4 = str2.slice(7);
console.log(result4); // result : Banana, Kiwi
/*
  매개변수를 하나만 지정했을 경우 그 시작 인덱스로부터 문자열 끝까지 출력해줍니다.

  마이너스 인덱스 개념
  맨마지막 문자열의 index를 -1로 잡고 앞으로 올 때마다 -1씩 더해줌.
*/
let result5 = str2.slice(-12); // result : Banana, Kiwi -12는 시작인덱스
/*
  그러면 굳이 마이너스 인덱스를 써야하는 경우를 가정
  
  자동차 차량 번호판
  12일5678
  370수5690

  7번지로 출력하려고하면 12일5678의 경우 index number 7이 없기 때문에 오류 발생함.
  -1 쓰면 다 해결됌.
*/
//String-substring()
let result6 = str2.substring(7, 13); //result : Banana
console.log(result6);
let result7 = str2.substring(-12);
console.log(result7); //result : Apple, Banana, Kiwi

//String-substr()
let result8 = str2.substr(0, 5);
console.log(result8); // result : Apple
let result9 = str2.substr(-12); 
console.log(result9); // result : Banana, Kiwi

let stc = '부산광역시 부산진구에 오신 것을 환영합니다';
let replacedStc = stc.replace('부산', '서울');
console.log(replacedStc); // result : 서울광역시 부산진구에 오신 것을 환영합니다
// 특정 문자열의 첫 번째 값을 교체해줌

let eStc = 'Please visit Seoul amd Seoul';
let rpdStc = eStc.replace('SEOUL', 'Busan');
// result : Please visit Seoul amd Seoul
// 유니코드로 대문자와 소문자 값이 다르기 때문에 대소문자도 구분해야지 replace()가 적용됨.

let rpdStc2 = eStc.replace(/SEOUL/i, 'Busan');
console.log(rpdStc2);
// result : Please visit Busan and Seoul
/*
  위의 라인의 경우 처음보는 형태임.
  JS 정규식 표현을 썼는데 추후 설명 예정
  i는 insensitive의 축약어로 덜 깐깐하게 굴겠다는 것
  대소문자 구분 안하고 그냥 찾는다는 의미.
*/
let rpdStc3 = eStc.replace(/Seoul/g, 'Busan');
console.log(rpdStc3); // result : Please visit Busan and Busan
// /g global의 약자로, 맨 앞에 것만 바꾸는게 아니라 전부 다 바꾼다는 의미.

//String-concat()
let txt1 = 'Hellp';
let txt2 = 'World';
let txt3 = txt1.concat(' ', txt2);
console.log(txt3);
// result : Hello World
let txt4 = 'Hello' + ' ' + 'World';

/*
  실무 사용 예시
  우리나라에서는 이름이 성이름이 붙어있지만 다른 나라에서는 이름 성 형태나 / 성 이름 에서 공백으로 구분하는 경우가 있음. 이상의 경우에 firstName / middleName / lastName으로 각각 변수에 데이터를 저장하고 

  fullName 변수에 .concat()을 적용한 다음 출력하는 방법을 사용할 수 있음.
*/

// String-trim()
let txtSpace = '     Hello, World!     ';
console.log(txtSpace.trim()); // call3 유형
// result : Hello, World!

// String-charAt()
let charAtTxt = "I'm tired.";
console.log(charAtTxt.charAt(4));
// result : t

// String-split()
let birthday = '1988-07-09'
let birthdayArray = birthday.split('-');
// -을 기준으로 나눠서 배열을 만들어줌
// 그럼 index는 몇 개인가? 3번까지
console.log(birthdayArray);
// result : b['1988', '07', '09']

