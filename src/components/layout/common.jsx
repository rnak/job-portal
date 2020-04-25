import {Divider} from 'antd';
import styled from 'styled-components';
/* Fonts */
export const Bold = styled.div`
  font-weight: 600;
  font-size: 16px;
`
export const MediumFont = styled.div`
  font-weight: 600;
  font-size: 14px;
`
export const SmallFont = styled.div`
  font-size: 12px;
  color: #9A9EA1;
  line-height: 1.7;
`
export const SmallBlueFont = styled(SmallFont)`
  color: #54A8FB
`
export const StyledDivider = styled(Divider)`
  color: #E2E7EF;
  height: 2px;
`
export const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
`
export const JobDescription = styled.div`
  margin: 8px 0 8px 0;
`
// JobDescription, JobHeader, StyledDivider, SmallBlueFont, SmallFont, MediumFont, Bold