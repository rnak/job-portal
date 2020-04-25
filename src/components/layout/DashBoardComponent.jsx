import React from 'react';
import { Input } from 'antd';
import { Row, Col } from 'antd';
import Filters from "./filters/Filters";
import JobList from "./joblist/JobList";
import TrendingJobs from "./trendingJobs/TrendingJobs";
import styled from 'styled-components';
const { Search } = Input;
const StyledSearch = styled(Search)`
  margin: 25px 0 30px 0;
  border: none;
  box-shadow: 0 0 17px rgba(0,0,0,0.25);
`
const MainWrapper = styled.div`
  margin: 0 100px 0 100px;
`
export default () => {
    return (
        <MainWrapper>
          <StyledSearch placeholder="Search a keyword(PHP, React, Node, Java...)" enterButton="Search" size="large" onSearch={value => console.log(value)}/>
          <div>
            <Row>
              <Col span={6} ><Filters/></Col>
              <Col span={12} ><JobList/> </Col>
              <Col span={6}><TrendingJobs/></Col>
            </Row>

          </div>
        </MainWrapper>
    )
}