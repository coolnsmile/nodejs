const fs = require('fs')

// 파일을 읽어들입니다
fs.readFile('test.txt', 'utf-8' , function(err, data) {

//읽어 들이기를 완료햇을 때의 처리
  console.log(data)

})
// 익명 함수를 사용하면 함수의 매개변수에 함수객체를 지정할 수 있으므로 동기 처리처럼 코드를 짧게 작성

