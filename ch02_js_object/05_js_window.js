// window.alert('이것은 alert창입니다');

// confirm()
confirm()

// prompt()

//open()
open('https://www.naver.com');

// setTimeout() / clearTimeout()
let exExec;

function myFunction() {
  myExec = setTimeout(
    function() {console.log('5초 후 실행')}, 5000);
}

function myStopFunction() {
  console.log('취소합니다.');
  clearTimeout(myExec);
}
// 함수 호출
myFunction();
