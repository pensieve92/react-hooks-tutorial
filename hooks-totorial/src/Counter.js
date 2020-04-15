import React, { useState } from 'react';

const Counter = () => {

    // 비구조 할당
    const [value, setValue] = useState(0);
    // const [상태값, 상태설정 함수] = useState('기본값')
    // useState 호출하면 배열을 반환 첫번째 원소는 상태값이고, 
    // 두번째 원소는 상태를 설정하는 함수 호출
    // 전달 받은 파라미터로 값이 바뀌게 되고 컴포넌트는 정상정으로 리렌더링됨
    
    

    return (
        <div>
            <p>
                현재 카운터 값은 <b>{value}</b> 입니다.
            </p>
            <button onClick={() => setValue(value + 1)} > +1 </button>
            <button onClick={() => setValue(value - 1)} > -1 </button>
        </div>
    );
};

export default Counter;