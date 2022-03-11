import React from 'react';
import { Card } from 'antd';
import {
  EditOutlined,
HeartOutlined,
  DeleteFilled 
} from '@ant-design/icons';
import { useDispatch } from 'react-redux'
import {DELETE_USER} from '../../redux/action/ActionTypes'


const { Meta } = Card;


const UserCard = ({ data }) => {
 
const dispatch = useDispatch()


  const handleEdit = () => {};
  const handleDelete = (values) => {
    console.log("delete", values)
    dispatch({
      type:DELETE_USER,
      data: values
    })
};

  return (
    <>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src={`https://avatars.dicebear.com/v2/avataaars/${data.username}.svg?options[mood][]=happy`}
          />
        }
        actions={[
          <HeartOutlined key="fav"/>,
          <EditOutlined key="edit" onClick={ handleEdit}/>,         
          <DeleteFilled key="delete" onClick={ () =>handleDelete(data)}/>,
        ]}
      >
        <Meta title={data.name} />
        <Meta description={data.website} />
        <Meta description={data.phone} />
        <Meta description={data.email} />
      </Card>
    </>
  );
};

export default UserCard;
