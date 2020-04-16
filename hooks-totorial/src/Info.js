import React, { useState, useEffect } from 'react';

const Info = () => {

    const [name, setName ] = useState('');
    const [nickName, setNickName ] = useState('');
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
    useEffect(() => {
        console.log(name);
    }, [name]);
    // ************************************************************************ //

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickName = e => {
        setNickName(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickName} onChange={onChangeNickName} />
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