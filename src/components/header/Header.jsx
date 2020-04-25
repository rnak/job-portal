import React from 'react';
import { Menu, Affix, Avatar, Dropdown} from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

import styled from 'styled-components';

const Header = styled.div`
  background: white;
  line-height: 50px;
  padding: 0 100px 0 100px;
`
const Image = styled.img`
`
const HeaderMenu = styled.div`
  float: right;
  margin-left: 45px;
  cursor: pointer;
`
const AvatarWrapper = styled.span`
  margin-right: 6px;
`
const menu = (
  <Menu>
    <Menu.Item key="1">
      <UserOutlined />
      1st menu item
    </Menu.Item>
    <Menu.Item key="2">
      <UserOutlined />
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3">
      <UserOutlined />
      3rd item
    </Menu.Item>
  </Menu>
);
export default () => {
    return (
        <Affix offsettop={0}>
        <Header>
          <Image src={ require('../../logo.png') }/>
          <HeaderMenu>
            <AvatarWrapper><Avatar size={30} src={ require('../../images/avatar.png')} /></AvatarWrapper>
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              My Account <DownOutlined />
              </a>
            </Dropdown>
          </HeaderMenu>
          <HeaderMenu>Search</HeaderMenu>
          <HeaderMenu>
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              Browse <DownOutlined />
              </a>
            </Dropdown>
          </HeaderMenu>
          <HeaderMenu>How it Works</HeaderMenu>
        </Header>
      </Affix>
    )
}