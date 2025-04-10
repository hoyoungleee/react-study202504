import React, { useState } from 'react';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';

const USER_LIST = [];

// App.jsx에 있는 USER_LIST에 있는 회원 정보를 바탕으로
// ul 안에 li를 추가해 주세요.
const App = () => {
  const [userList, setUserList] = useState(USER_LIST);

  const addUser = (user) => {
    console.log('앱에받은 유저정보' + user.userName + user.age);

    setUserList([...userList, user]);

    console.log(userList);
  };

  return (
    <div>
      <AddUsers addUser={addUser} />
      <UserList items={userList} />
    </div>
  );
};

export default App;
