import styled from 'styled-components';

export const MiddleSection = styled.section`
  margin-right: 30px;
  padding: 30px;
  background: white;
  box-shadow: 0 0 7px rgba(0,0,0,0.25);
`
export const SkillTagsUl = styled.ul`
  padding: 0;
  list-style: none;
  display: inline-block;
  width: 100%;
  margin: 0;
`

export const SkillTagsLi = styled.li`
  display: inline-block;
  margin-right: 10px;
  padding: 0px 15px;
  border: 1px solid #ccc;
  border-radius: 30px;
  font-size: 14px;
`
export const TagSpan = styled.span`
  display: inline-block;
  margin-left: 8px;
  padding: 0px 8px;
  border-radius: 30px;
  font-size: 12px;
  color: white;
`
export const GreenTag = styled(TagSpan)`
background-color: #63D48E;
`
export const YellowTag = styled(TagSpan)`
background-color: #F8BF4A;
`
export const BlueTag = styled(TagSpan)`
background-color: #56D4FB;
`
export const JobCarocel = styled.div`
margin-right: 60px;
`