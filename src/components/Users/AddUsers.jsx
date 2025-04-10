import Button from '../../UI/Button';
import Card from '../../UI/Card';
import ErrorModal from '../Modal/ErrorModal';
import styles from './AddUsers.module.css';

import React, { useRef, useState } from 'react';

/*
    이름과 나이를 입력받아서, 가입하기 버튼을 누르면 가입 처리를 해 주세요.
    가입 처리? -> App.js에 있는 USER_LIST에 객체 형태로 추가.
  
  const [userValue, setUserValue] = useState({
    userName: '',
    age: '',
  });
    */
const AddUsers = ({ addUser }) => {
  // useRef 훅 : 특정 요소를 참조할 수 있게 해주는 기능(기억)
  // useRef로 지목한 요소는 재 랜더링 대상에 포함되지 않습니다.
  // 단순요소의 특정 속성을 얻고자 할 때, 불필요한 랜더링을 방지하고 싶을 때 사용
  // 입력값이 변경될 떄마다 특정 UI를 수정해야할 때 (상태에 따라 재랜더링이 발생)은 적합하지 않음.
  const nameInput = useRef();
  const ageInput = useRef();

  //에러상태를 관리하는 변수
  const [error, setError] = useState(null);

  const userSubmitHandler = (e) => {
    e.preventDefault();
    if (!nameInput.current.value.trim() || !ageInput.current.value.trim()) {
      setError({
        title: '유효하지 않은 입력값',
        message: '입력값은 공백으로 작성하시면 안됩니다.',
      });
      return;
    }

    if (+ageInput.current.value < 1) {
      setError({
        title: '유효하지 않은 나이의 범위',
        message: '나이는 1살 미만으로 작성하시면 안됩니다.',
      });
      return;
    }

    addUser({ userName: nameInput.current.value, age: ageInput.current.value });

    nameInput.current.value = '';
    ageInput.current.value = '';
  };

  return (
    <>
      {/** 단축 평가 연산을 활용한 컴포넌트의 조건부 랜더링
       * error 상태변수가 truthy or falsy에 따라 우항에 있는 컴포넌트를 드러낼 것이냐 말것이냐를 결정.
       */}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={() => setError(null)}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={userSubmitHandler}>
          <label htmlFor='username'>이름</label>
          <input id='username' type='text' ref={nameInput} />
          <label htmlFor='age'>나이</label>
          <input id='age' type='number' ref={ageInput} />
          <Button type='submit'>가입하기</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;
