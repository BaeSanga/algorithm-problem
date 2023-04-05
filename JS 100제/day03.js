/*
문제11 : for를 이용한 기본 활용

1부터 100까지 모두 더하는 Code를 <pass> 부분에 완성하세요. `for`를 사용해야 합니다.

let s = 0;

//pass

console.log(s);
*/

// 답
let s = 0;
for (let i = 1; i < 101; i++) {
  s = s + i;
}
console.log(s);

/* 
문제12 : 게임 캐릭터 클래스 만들기

다음 소스코드에서 클래스를 작성하여 게임 캐릭터의 능력치와 '파이어볼'이 출력되게 만드시오.
**주어진 소스 코드를 수정해선 안됩니다.**

데이터
<여기에 class를 작성하세요.>

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();


출력
545 210 10
파이어볼
*/
