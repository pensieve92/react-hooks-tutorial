// import React, { useState, useEffect } from 'react';
import React, { useReducer } from 'react';
import useInputs from './useInputs';

// 커스텀 Hooks (useInputs에 있음)
// function reducer(state, action) {
//     return {
//         ...state,
//         [action.name]:action.value
//     };
// }

const Info = () => {
    
    // const [name, setName ] = useState('');
    // const [nickName, setNickName ] = useState('');
    // ************************************************************************ //
    // useEffect :
    // 리액트 컴포넌트가 렌더링 될 때마다 
    // 특정 작업을 수행하도록 설정 할 수 있는 Hook
    // componentDidMount와 componentDidUpdate 를 합친 형태

    // useEffect( () => {
    //     console.log('렌더링이 완료되었습니다.');
    //     console.log({
    //         name, 
    //         nickName
    //     })
    // })
    // ************************************************************************ //    
    // 처음 렌더링 될때만 실행되고, 업데이트할 경우에는 실행 할 필요가 없는 경우엔
    // 함수의 두번째 파라미터로 비어있는 배열을 넣어면 됨

    // useEffect( () => {
    //     console.log('마운트 될 때만 실행됩니다.');
    // }, [])
    // ************************************************************************ //
    // 특정 값이 변경될때만 호출할 경우
    // 두번째 파라미터에 useState를 통해 관리하고 있는 상태를 넣어줘도 되고, 
    // props로 전달받은 값을 넣어주어도 됨

    // useEffect(() => {
    //     console.log(name);
    // }, [name]);
    // ************************************************************************ //
    // useEffect는 렌더링 되고난 직후마다 실행되며, 두번째 파라미터 배열에 무엇을 넣느냐에
    // 따라 실행되는 조건이 달라짐
    // 만약 컴포넌트가 언마운트되기 전이나, 업데이트 되기 직전에 어떠한 작업을 수행하고 싶다면
    // useEffect에서 뒷정리(cleanup) 함수를 반환해주어야함
    // 컴포넌트가 나타날때 콘솔에 effect, 사라질때 cleanup
    // 입력시 렌더링될때 마다 업데이트 되기직전의 cleanup, 업데이트 후의 effect 호출

    // 오직 언마운트 될 때만 뒷정리 함수를 호출하고 싶으면,
    // useEffect함수의 두번째 파라미터에 비어있는 배열을 넣으면 됨

    // useEffect(()=> {
    //     console.log('effect');
    //     console.log(name);
    //     return () => {
    //         console.log('cleanup');
    //         console.log(name);
    //     }
    // }, [name])

    // ************************************************************************ //

    // const onChangeName = e => {
    //     setName(e.target.value);
    // }

    // const onChangeNickName = e => {
    //     setNickName(e.target.value);
    // }


    // 커스텀 Hooks 만들기
    // const [state, dispatch] = useReducer(reducer, {
    //     name: '',
    //     nickName: ''
    // })
    // const onChange = e => {
    //     dispatch(e.target);
    // }

    const [state, onChange] =  useInputs({
        name: '',
        nickName: ''
    });
    const {name, nickName } = state;
    
    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickName" value={nickName} onChange={onChange} />
            </div>
            <div>
                <b>이름: </b> {name}
            </div>
            <div>
                <b>닉네임 : </b> {nickName}
            </div>
        </div>
        
    );
};

export default Info;