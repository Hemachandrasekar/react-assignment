import React, { useEffect, useCallback} from 'react';
import UserCard from '../UserCard';
import { List } from 'antd';
import axios from 'axios';
import { useDispatch,useSelector} from 'react-redux'
import { ADD_USER } from '../../redux/action/ActionTypes';

const HomeScreen = () => {
  const dispatch = useDispatch()
  const fetchData = useSelector((state) => state.users)
  console.log("fetch data ",fetchData)

  const getApi = useCallback(async() => {
    const responseApi = await axios.get('https://jsonplaceholder.typicode.com/users');
    const data = await responseApi.data;
    console.log("response", data)
    dispatch({
      type: ADD_USER,
      data :data
  })
  

  }, [dispatch]);

  useEffect(() => {
    getApi();
  }, [getApi]);

  return (
    <List
      grid={{
        gutter: 16,
        column: 4,
      }}
      dataSource={fetchData}
      renderItem={(item) => (
        <List.Item>
          <UserCard data={item} />
        </List.Item>
      )}
    />
  );
};

export default HomeScreen;
