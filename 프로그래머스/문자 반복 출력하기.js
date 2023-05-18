/*
문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.
*/

function solution(my_string, n) {
  return [...my_string].map((el) => el.repeat(n)).join("");
}
// repeat(n) 만 한다면 hello 일때 hellohello 이렇게 출력되지만 위와 같은 코드로 작성한다면 hheelllloo로 출력됨
