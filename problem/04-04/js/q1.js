/*
변수 위치 찾기
변수 a는 main 함수 안에서 사용된다
변수 b는 dom api selector로 다른 이벤트에서 사용된다  (잘 모르겠음)
변수 c는 메인 함수 안에서 실행되는 콜백함수 solution의 인자이다
변수 d는 솔루션 함수에서 전달받은 c를 다른 형태로 바꿔준다. 
변수 e는 main함수의 최종 반환 값으로 //// 여기까지 이해감 /// 향후 다른 함수에서 재사용된다.
*/

function solution(bae) {
  let d = parseInt(bae); // parseInt는 문자열을 정수로 반환해주는 메소드

  return d; // 타입을 확인할거면 typeof사용하기
}
function parse() {}
function main() {
  let c = 123;
  solution(c);
  const a = 10;
  let e = 200;
  return e;
}
console.log(main());
