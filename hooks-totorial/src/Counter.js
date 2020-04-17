// import React, { useState } from 'react';
import React, { useReducer } from 'react';

function reducer(state, action) {
    // action.type에 따라 다른 작업 수행
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1};
        case 'DECREMENT':
            return { value: state.value - 1};
        default :
            return false
    }
}

const Counter = () => {

    // 비구조 할당
    // const [value, setValue] = useState(0);
    // const [상태값, 상태설정 함수] = useState('기본값')
    // useState 호출하면 배열을 반환 첫번째 원소는 상태값이고, 
    // 두번째 원소는 상태를 설정하는 함수 호출
    // 전달 받은 파라미터로 값이 바뀌게 되고 컴포넌트는 정상정으로 리렌더링됨

    // useReducer을 사용했을 때의 가장 큰 장점은 컴포넌트 업데이트 로직을 컴포넌트 바깥으로
    // 빼낼 수 있다는 점입니다.

    const [ state, dispatch ] = useReducer(reducer, {value: 0});
    // useReducer의 첫번째 파라미터는 리듀서 함수, 그리고 두번째 파라미터는 해당
    // 리듀서의 기본 값을 넣어줍니다. 이 Hook을 사용 했을 때에는 state값과 dispatch함수를
    // 받아오게 되는데요. 여기서 state는 현재 가리키고 있는 상태고, dispatch는 액션을 발생시키는 
    // 함수 입니다. dispatch( action )와 같은 형태로 함수 안에 파라미터를 
    // 액션 값을 넣어주면 리듀서 함수가 호출되는 구조입니다.

    return (
        <div>
            <p>
                현재 카운터 값은 <b>{state.value}</b> 입니다.
            </p>
            {/* 
                <button onClick={() => setValue(value + 1)} > +1 </button>
                <button onClick={() => setValue(value - 1)} > -1 </button> 
            */}
            <button onClick={() => dispatch({type: 'INCREMENT'})} > +1 </button>
            <button onClick={() => dispatch({type: 'DECREMENT'})} > -1 </button>
        </div>
    );
};

export default Counter;