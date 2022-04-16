import styled from 'styled-components/macro'

export const ListItem = styled.li`
  width: 45%;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    width: 25%;
  }
`

export const DirectionButton = styled.button`
  text-align: center;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  background-color: #ffffff;
  font-weight: 6000;
  font-family: 'Roboto';
  border-radius: 7px;
  outline: none;
  cursor: pointer;
  padding-left: 26px;
  padding-right: 26px;
  padding-top: 13px;
  padding-bottom: 13px;
  margin-bottom: 24px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
