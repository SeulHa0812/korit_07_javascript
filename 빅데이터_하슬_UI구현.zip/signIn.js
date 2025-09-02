function signIn() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value();

  const saveUsername = localStorage.getItem('username');
  const savePassword = localStorage.getItem('password');

  if (savePassword == null || saveUsername == null) {
    alert('계정이 없습니다.');
  }

  if (username == saveUsername && password == savePassword) {
    alert('로그인 성공');
  } else {
    alert('로그인 실패');
  }
}