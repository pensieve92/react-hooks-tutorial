import {useState, useEffect} from 'react';

export default function usePromise(promiseCreator, deps) {
    const [resolved, setResolved] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const process = async () => {
        setLoading(true);
        try{
            const result = await promiseCreator();
            setResolved(result);
        } catch(e) {
            setError(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        process();        
    }, deps);

    return [loading, resolved, error];
}

// 위 커스텀 훅에서는 useState와 useEffect를 함께 사용하였습니다.
// 이 함수는 프로미스를 생성하는 promiseCreator와 언제 프로미스를 새로 만들지에 대한 조건을 위한
// deps배열을 파라미터를 받아 옵니다. 이 deps 배열은 useEffect의 두번째 파라미터로 전달되며 
// 기본값은 비어있는 배열입니다.

// 비어있는 배열을 전달하면 컴포넌트가 가장 처음 렌더링 될 때만 실행 된다고 배웠었죠?

// useEffect를 사용하실 때 주의하실 점이 있는데, useEffect에 파라미터로 전달해주는 함수에서
// async를 사용하면 안됩니다. 예를 들어서 다음 코드는 오류를 발생하는 코드입니다.
// useEffect ( async () => {})
// useEffect에서 뒷정리 함수를 반환해야 하는데, async를 사용하게 되면 함수가 아닌 프로미스를 반환하기
// 때문에 오루가 발생하게 됩니다.

// 이제 이 Hook을 사용하는 예제 컴포넌트를 작성해보겠습니다.

