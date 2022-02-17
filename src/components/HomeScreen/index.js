import React, { useEffect, useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import UserScreen from '../UserScreen';
import 'antd/dist/antd.css';
import 'antd/dist/antd.less';

const { Header, Content, Footer } = Layout;

const HomeScreen = () => {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFetchData(data);
        console.log('data value', data);
      });
  }, []);

  return (
    <>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: '0 50px', marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <ul>
              <UserScreen data={fetchData} />
            </ul>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
};

export default HomeScreen;
