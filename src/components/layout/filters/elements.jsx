
import { Checkbox } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export const FilterSection = styled.section`
margin-right:30px;
`
export const TagInput = styled.div`
background: white;
border: 1px solid #ccc;
`
export const FilterTag = styled.span`
background: aliceblue;
margin: 2px;
border: 1px solid #ccc;
padding: 6px 12px;
border-radius: 2px;
font-size: 12px;
`
export const FilterSubSection = styled.div`
margin-top: 40px;
`
export const InfoIcon = styled(InfoCircleOutlined)`
padding-left: 4px
`
export const StyledCheckbox = styled(Checkbox)`
line-height: 27px;
`