import React from 'react';
import {  Button, Divider, Dropdown, Menu } from 'antd';
import { DownOutlined, UserOutlined, AimOutlined, InstagramOutlined } from '@ant-design/icons';
import {MiddleSection, JobCarocel, SkillTagsUl, SkillTagsLi, GreenTag, YellowTag, BlueTag} from "./elements";
import {JobHeader, MediumFont, JobDescription, SmallFont} from "../common";

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
        <MiddleSection>
                  <JobHeader>
                      <b>RESULTS (24)</b>
                      <article><span style={{marginRight: "3px"}}>Sort by </span> 
                        <Dropdown overlay={menu}>
                          <Button>
                            Relevance <DownOutlined />
                          </Button>
                        </Dropdown>
                      </article>
                  </JobHeader>
                  <div>
                      <JobHeader>
                        <MediumFont>Senior Ruby on Rails engineer<GreenTag>hourly</GreenTag></MediumFont>
                        <MediumFont>$60/hr</MediumFont>
                      </JobHeader>
                      <JobCarocel>
                        <article style={{fontSize: "13px"}}>
                          <span style={{paddingRight: "6px", color: "#54A8FB"}}><AimOutlined /> Epic Coders</span>
                          <span><InstagramOutlined style={{color: "#63D48E"}}/>  Indianoplois , IN</span>
                          <SmallFont>Reply Rate : <b>82%</b></SmallFont>
                        </article>
                        <JobDescription>
                          <SmallFont>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</SmallFont>
                        </JobDescription>
                        <SkillTagsUl >
                          <SkillTagsLi>UI</SkillTagsLi>
                          <SkillTagsLi>UX</SkillTagsLi>
                          <SkillTagsLi>React</SkillTagsLi>
                          <SkillTagsLi>Node</SkillTagsLi>
                          <SkillTagsLi>Tech</SkillTagsLi>
                        </SkillTagsUl>
                      </JobCarocel>
                      <Divider/>
                  </div>
                  <div>
                      <JobHeader>
                        <MediumFont>Senior Ruby on Rails engineer<YellowTag>part-time</YellowTag></MediumFont>
                        <MediumFont>$60/hr</MediumFont>
                      </JobHeader>
                      <JobCarocel>
                        <article style={{fontSize: "13px"}}>
                          <span style={{paddingRight: "6px", color: "#54A8FB"}}><AimOutlined /> Epic Coders</span>
                          <span><InstagramOutlined style={{color: "#63D48E"}}/>  Indianoplois , IN</span>
                          <SmallFont>Reply Rate : <b>82%</b></SmallFont>
                        </article>
                        <JobDescription>
                          <SmallFont>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</SmallFont>
                        </JobDescription>
                        <SkillTagsUl>
                          <SkillTagsLi>UI</SkillTagsLi>
                          <SkillTagsLi>UX</SkillTagsLi>
                          <SkillTagsLi>React</SkillTagsLi>
                          <SkillTagsLi>Node</SkillTagsLi>
                          <SkillTagsLi>Tech</SkillTagsLi>
                        </SkillTagsUl>
                      </JobCarocel>
                      <Divider/>
                  </div>
                  <div>
                      <JobHeader>
                        <MediumFont>Senior Ruby on Rails engineer<BlueTag>hourly</BlueTag></MediumFont>
                        <MediumFont>$60/hr</MediumFont>
                      </JobHeader>
                      <JobCarocel>
                        <article style={{fontSize: "13px"}}>
                          <span style={{paddingRight: "6px", color: "#54A8FB"}}><AimOutlined /> Epic Coders</span>
                          <span><InstagramOutlined style={{color: "#63D48E"}}/>  Indianoplois , IN</span>
                          <SmallFont>Reply Rate : <b>82%</b></SmallFont>
                        </article>
                        <JobDescription>
                          <SmallFont>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</SmallFont>
                        </JobDescription>
                        <SkillTagsUl>
                          <SkillTagsLi>UI</SkillTagsLi>
                          <SkillTagsLi>UX</SkillTagsLi>
                          <SkillTagsLi>React</SkillTagsLi>
                          <SkillTagsLi>Node</SkillTagsLi>
                          <SkillTagsLi>Tech</SkillTagsLi>
                        </SkillTagsUl>
                      </JobCarocel>
                      <Divider/>
                  </div>
                  <div>
                      <JobHeader>
                        <MediumFont>Senior Ruby on Rails engineer<GreenTag>hourly</GreenTag></MediumFont>
                        <MediumFont>$60/hr</MediumFont>
                      </JobHeader>
                      <JobCarocel>
                        <article style={{fontSize: "13px"}}>
                          <span style={{paddingRight: "6px", color: "#54A8FB"}}><AimOutlined /> Epic Coders</span>
                          <span><InstagramOutlined style={{color: "#63D48E"}}/>  Indianoplois , IN</span>
                          <SmallFont>Reply Rate : <b>82%</b></SmallFont>
                        </article>
                        <JobDescription>
                          <SmallFont>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</SmallFont>
                        </JobDescription>
                        <SkillTagsUl>
                          <SkillTagsLi>UI</SkillTagsLi>
                          <SkillTagsLi>UX</SkillTagsLi>
                          <SkillTagsLi>React</SkillTagsLi>
                          <SkillTagsLi>Node</SkillTagsLi>
                          <SkillTagsLi>Tech</SkillTagsLi>
                        </SkillTagsUl>
                      </JobCarocel>
                      <Divider/>
                  </div>
                  <div>
                      <JobHeader>
                        <MediumFont>Senior Ruby on Rails engineer<YellowTag>part-time</YellowTag></MediumFont>
                        <MediumFont>$60/hr</MediumFont>
                      </JobHeader>
                      <JobCarocel>
                        <article style={{fontSize: "13px"}}>
                          <span style={{paddingRight: "6px", color: "#54A8FB"}}><AimOutlined /> Epic Coders</span>
                          <span><InstagramOutlined style={{color: "#63D48E"}}/>  Indianoplois , IN</span>
                          <SmallFont>Reply Rate : <b>82%</b></SmallFont>
                        </article>
                        <JobDescription>
                          <SmallFont>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</SmallFont>
                        </JobDescription>
                        <SkillTagsUl>
                          <SkillTagsLi>UI</SkillTagsLi>
                          <SkillTagsLi>UX</SkillTagsLi>
                          <SkillTagsLi>React</SkillTagsLi>
                          <SkillTagsLi>Node</SkillTagsLi>
                          <SkillTagsLi>Tech</SkillTagsLi>
                        </SkillTagsUl>
                      </JobCarocel>
                      <Divider/>
                  </div>
                  <div>
                      <JobHeader>
                        <MediumFont>Senior Ruby on Rails engineer<BlueTag>hourly</BlueTag></MediumFont>
                        <MediumFont>$60/hr</MediumFont>
                      </JobHeader>
                      <JobCarocel>
                        <article style={{fontSize: "13px"}}>
                          <span style={{paddingRight: "6px", color: "#54A8FB"}}><AimOutlined /> Epic Coders</span>
                          <span><InstagramOutlined style={{color: "#63D48E"}}/>  Indianoplois , IN</span>
                          <SmallFont>Reply Rate : <b>82%</b></SmallFont>
                        </article>
                        <JobDescription>
                          <SmallFont>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</SmallFont>
                        </JobDescription>
                        <SkillTagsUl>
                          <SkillTagsLi>UI</SkillTagsLi>
                          <SkillTagsLi>UX</SkillTagsLi>
                          <SkillTagsLi>React</SkillTagsLi>
                          <SkillTagsLi>Node</SkillTagsLi>
                          <SkillTagsLi>Tech</SkillTagsLi>
                        </SkillTagsUl>
                      </JobCarocel>
                      <Divider/>
                  </div>
                </MiddleSection>
    )
}