import React from 'react';
import { Menu, Button, Divider, Dropdown } from 'antd';
import { DownOutlined, CloseOutlined, UserOutlined } from '@ant-design/icons';
import {FilterSection, TagInput, FilterTag, FilterSubSection, StyledCheckbox, InfoIcon} from "./elements";
import {JobHeader, SmallFont} from "../common";
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
        <FilterSection>
                  <JobHeader>
                      <b>FILTERS</b>
                      <SmallFont>Clear all filters</SmallFont>
                  </JobHeader>
                  <Divider/>
                  <JobHeader>
                      <b>SKILL</b>
                      <SmallFont>Clear</SmallFont>
                  </JobHeader>
                  <TagInput>
                    <FilterTag>UI <CloseOutlined /></FilterTag> 
                    <FilterTag>mobile <CloseOutlined /></FilterTag> 
                    <FilterTag>PHP <CloseOutlined /></FilterTag> 
                    <FilterTag>Photoshop<CloseOutlined /></FilterTag>
                  </TagInput>
                  <FilterSubSection>
                    <JobHeader>
                        <b>Availability<InfoIcon /></b>
                        <SmallFont>Clear</SmallFont>
                    </JobHeader>
                  </FilterSubSection>
                  <StyledCheckbox checked>Hourly</StyledCheckbox><br />
                  <StyledCheckbox checked>Part-time (20 hrs/wk)</StyledCheckbox><br />
                  <StyledCheckbox checked>Full-time (40 hrs/wk)</StyledCheckbox>
                  
                  <FilterSubSection>
                    <JobHeader>
                        <b>Job type<InfoIcon /></b>
                        <SmallFont>Clear</SmallFont>
                    </JobHeader>
                  </FilterSubSection>
                  <p style={{marginTop: "10px"}}>
                    <Dropdown overlay={menu}>
                      <Button style={{height: "40px", width: "100%", textAlign: "left"}}>
                        Select a job type <DownOutlined style={{float:"right", lineHeight: "25px"}}/>
                      </Button>
                    </Dropdown>
                  </p>

                  <FilterSubSection>
                    <JobHeader>
                        <b>Pay rate / hr ($)<InfoIcon /></b>
                        <SmallFont>Clear</SmallFont>
                    </JobHeader>
                  </FilterSubSection>
                  <StyledCheckbox checked>Include Profiles without pay rates</StyledCheckbox>

                  <FilterSubSection>
                    <JobHeader>
                        <b>Experience Level<InfoIcon /></b>
                        <SmallFont>Clear</SmallFont>
                    </JobHeader>
                  </FilterSubSection>
                  <p style={{marginTop: "10px"}}>
                    <Dropdown overlay={menu}>
                      <Button style={{height: "40px", width: "100%", textAlign: "left"}}>
                        Select a job type <DownOutlined style={{float:"right", lineHeight: "25px"}}/>
                      </Button>
                    </Dropdown>
                  </p>
                  <FilterSubSection>
                    <JobHeader>
                        <b>Countries</b>
                        <SmallFont>Clear</SmallFont>
                    </JobHeader>
                  </FilterSubSection>
                  <TagInput>
                    <FilterTag>UI <CloseOutlined /></FilterTag> 
                    <FilterTag>mobile <CloseOutlined /></FilterTag> 
                    <FilterTag>PHP <CloseOutlined /></FilterTag> 
                    <FilterTag>Photoshop<CloseOutlined /></FilterTag>
                  </TagInput>

                  <FilterSubSection>
                    <JobHeader>
                        <b>Languages</b>
                        <SmallFont>Clear</SmallFont>
                    </JobHeader>
                  </FilterSubSection>
                  <TagInput>
                    <FilterTag>UI <CloseOutlined /></FilterTag> 
                    <FilterTag>mobile <CloseOutlined /></FilterTag> 
                    <FilterTag>PHP <CloseOutlined /></FilterTag> 
                    <FilterTag>Photoshop<CloseOutlined /></FilterTag>
                  </TagInput>
                </FilterSection>
    )
} 