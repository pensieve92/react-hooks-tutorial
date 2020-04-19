import React, { useState, useMemo, useCallback, useRef } from 'react';

// useMemo : 숫자, 문자, 객체 재사용
// useCallback : 함수 재사용

// useCallback은 useMemo와 상당히 비슷한 함수입니다. 주로 렌더링 성능을 최적화해야
// 하는 상황에서 사용하는데, 이 Hook을 사용하면 이벤트 핸들러 함수를 필요할 때만 생성 할 수 있습니다.
// 방금 구한현 Average 컴포넌트를 보면, onChange와 onInsert라는 함수를 선언해주었습니다.
// 이렇게 선언을 하게 되면 컴포넌트가 리렌더링 될 때마다 이 함수들이 새로 생성됩니다.
// 대부분의 경우에는 이러한 방식이 문제가 되지 않지만, 컴포넌트의 렌더링이 자주 발생하거나, 
// 렌더링 해야 할 컴포넌트의 개수가 많아진다면 이 부분을 최적화 해주시는 것이 좋습니다.

// useCallback의 첫번째 파라미터에는 우리가 생성해주고 싶은 함수를 넣어주고, 두번째 파라미터에는
// 배열을 넣어주면 되는데 이 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해주어야 하는지 명시해주어야 합니다.
// 만약에 onChange처럼 비어있는 배열을 넣게 되면 컴포넌트가 렌더링 될때 단 한번만 함수가 생성되며, 
// onInsert 처럼 배열안에 number와 list를 넣게 되면 인풋 내용이 바뀌거나 새로운 항목이 추가 될 때마다 함수가 생성됩니다.

// 함수 내부에서 기존의 상태 값을 의존해야 할때는 꼭 두번째 파라미터 안에 포함 시켜주어야 합니다.
// 예를 들어서 onChange의 경우엔 기존의 값을 조회하는 일은 없고, 바로 설정만 하기 때문에 배열이 비어있어도 상관
// 없지만 onInsert는 기존의 number와 list를 조회해서 nextList를 생성하기 때문에 배열 안에 number와 list를 꼭 넣어주어야 합니다

// 참고로 다음 두 코드는 완벽히 똑같은 코드입니다.
// useCallback( () => {
//     console.log('hello world');    
// }, []);

// useMemo( () => {
//     const fn = () => {
//         console.log('hello world');
//     }
//     return fn;
// }, [])

// useCallback은 결국 useMemo에서 함수를 반환하는 상황에서 더 편하게 사용 할 수 있는 Hook입니다.
// 숫자, 문자열, 객체 처럼 일반 값을 재사용하기 위해서는 useMemo를, 함수를 재사용하기 위해서는 useCallback을 사용하세요

// useRef
// useRef Hook은 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있게 해줍니다. 
// Average 컴포넌트에서 등록 버튼을 눌렀을 때 포커스가 인풋쪽으로 넘어가도록 코드를 작성

const getAverage = numbers => {
    console.log('평균값 계산중..');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}

const Average = () => {
    const [ list, setList ] = useState([]);
    const [ number, setNumber ] = useState('');
    const inputEl = useRef(null); // 기본값 null 설정

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []); // 컴포넌트가 처음 렌더링 될 때만 함수 생성

    const onInsert = useCallback(e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus(); // useRef를 사용하여 ref를 설정하면, 
                                 // useRef를 통해 만든 객체 안의 current 값이 실제 엘리먼트를 가르키게 됩니다.
    }, [number, list]);  // number 혹은 list가 바뀌었을 때만 함수 생성
    
    // list 배열의 내용이 바뀔 때에만 getAverage함수가 호출됩니다 (onInsert에서 setList가 실행됨)
    const avg = useMemo( () => getAverage(list), [list]); 

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index)=> (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균 값: </b> {avg}
            </div>
            
        </div>
    );
};

export default Average;