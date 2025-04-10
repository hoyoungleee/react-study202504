import React from 'react';
import Card from '../../UI/Card';
import styles from './UserList.module.css';

const UserList = ({ items }) => {
  return (
    <Card className={styles.users}>
      <ul>
        {items.map((item) => (
          <li>
            이름: {item.userName}, 나이: {item.age}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
