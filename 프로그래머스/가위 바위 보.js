/*
가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.
*/

function solution(rsp) {
  var answer = "";

  for (let i = 0; i < rsp.length; i++) {
    let ch = rsp.charAt(i);
    if (ch === "2") {
      answer = answer + "0";
    } else if (ch === "0") {
      answer = answer + "5";
    } else if (ch === "5") {
      answer = answer + "2";
    }
  }

  return answer;
}

// 다른 풀이
function solution(rsp) {
  return rsp
    .split("")
    .map((v) => (v === "2" ? 0 : v === "0" ? 5 : 2))
    .join("");
}
