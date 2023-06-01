/*
외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.
*/

// 응급도가 높은 순서대로 진료 순서를 정한다? 그럼 내림차순으로 해야되겠다.
//  sort 함수는 기본적으로 원소들을 문자열로 만든 뒤에, UTF-16 코드 유닛 값을 기준으로 순서를 정렬
// 원본 배열은 유지하고 새로운 배열 객체를 반환해줘야하니까 slice 함수 사용하기
// 그리고 다음으로 return으로 어떻게 구현해야할지 몰라서 다른 코드를 참고했다.
function solution(emergency) {
  let answer = emergency.slice().sort((a, b) => b - a);
  return emergency.map((v) => answer.indexOf(v) + 1);
}

// indexOf 함수는 문자열에서 특정 문자열을 찾고 검색된 문자열이 '첫번째'로 나타나는 위치 index를 리턴
