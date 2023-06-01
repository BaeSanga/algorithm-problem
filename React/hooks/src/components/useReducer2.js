import { useReducer, useState } from "react";

const reducer = (state, action) => {};
const initialState = {
  count: 0,
  students: [
    {
      id: Date.now(), // 현재 날짜 및 시간이 출력
      name: "sanga",
      isHere: false, // 현재 출석을 했는지 안했는지
    },
  ],
};
function useReducer2() {
  const [name, setName] = useState("");
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수: {studentsInfo.count}</p>
      <input
        type="text"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <button>추가</button>
    </div>
  );
}
export default useReducer2;

// 17:20 부터 다시 듣기
