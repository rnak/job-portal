import React from 'react';
import { Button } from 'antd';
import {SignUpBox, SignUp, Image, JobBox, TopJobContainer} from "./elements";
import {JobDescription, JobHeader, StyledDivider, SmallBlueFont, SmallFont, MediumFont, Bold} from '../common'
export default () => {
    return (
        <>
        <SignUpBox>
                  <SignUp>
                    <Image src={ require("../../../images/signUpBox.png") }/>
                    <Bold>Track item on HubStaff</Bold>
                    <SmallFont>pay only for hours worked</SmallFont>
                    <Button>SignUp</Button>
                    <SmallBlueFont>Learn more...</SmallBlueFont>
                  </SignUp>
                </SignUpBox>

                <TopJobContainer>
                  <Bold>TOP JOBS</Bold>
                  <StyledDivider/>
                  <JobBox>
                      <JobHeader>
                        <MediumFont>Senior Ruby on Rails engineer</MediumFont>
                        <MediumFont>$60/hr</MediumFont>
                      </JobHeader>
                      <JobDescription>
                        <SmallFont>some text to make fun of stupid stuffs is it really required for this one</SmallFont>
                      </JobDescription>
                  </JobBox>
                  <JobBox>
                      <JobHeader>
                        <MediumFont>Senior Product Designer</MediumFont>
                        <MediumFont>$45/hr</MediumFont>
                      </JobHeader>
                      <JobDescription>
                        <SmallFont>some text to make fun of stupid stuffs is it really required for this one</SmallFont>
                      </JobDescription>
                  </JobBox>
                </TopJobContainer>
                <TopJobContainer>
                  <Bold>MOST VISITED THIS WEEK</Bold>
                  <StyledDivider/>
                  <JobBox>
                      <JobHeader>
                        <MediumFont>Senior Ruby on Rails engineer</MediumFont>
                        <MediumFont>$60/hr</MediumFont>
                      </JobHeader>
                        <SmallFont>some text to make fun of stupid stuffs is it really required for this one</SmallFont>
                  </JobBox>
                  <JobBox>
                      <JobHeader>
                        <MediumFont>Senior Product Designer</MediumFont>
                        <MediumFont>$45/hr</MediumFont>
                      </JobHeader>
                        <SmallFont>some text to make fun of stupid stuffs is it really required for this one</SmallFont>
                  </JobBox>
                </TopJobContainer>
        </>
    )
}