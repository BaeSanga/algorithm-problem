import React, { useState, useReducer } from "react";

/* 
  배열의 첫번째 : 우리가 앞으로 컴포넌트에서 사용 할 수 있는 상태

  배열의 두번째 : dispatch는 액션을 발생시키는 함수
  이 함수는 dispatch({ type: 'INCREMENT' }) 이런 형태로 사용함 

  useReducer 첫번째 인자 : reducer 함수
  useReducer 두번째 인자 : 배열의 첫번째 인자(state)의 초기값

   */
const ACTION_TYPES = {
  update: "update",
  delete: "delete",
};

const reducer = (state, action) => {
  // 새로운 상태를 만드는 로직 작성

  console.log("연습중", state, action);

  switch (action.type) {
    case "update":
      return state + action.payload;
    case "delete":
      return state - action.payload;
    default:
      return state;
  }
};

function Bank() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>UseReducer 은행에 오신 것을 환영합니다.</h2>
      <p>잔고: {money}원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
      ></input>
      <button
        onClick={() => {
          // dispatch는 Object 형태로 넘겨줌
          dispatch({ type: ACTION_TYPES.update, payload: number });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.delete, payload: number });
        }}
      >
        출금
      </button>
    </div>
  );
}
export default Bank;
