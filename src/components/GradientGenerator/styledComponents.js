import styled from 'styled-components/macro'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 80%;
    max-width: 1120px;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`

export const GradientDescription = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  line-height: 1.5;
  color: #ededed;
`

export const GradientDirectionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 450px;
  }
`

export const ColorPickerDescription = styled.p`
  line-height: 1.5;
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #ededed;
`
export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 320px;
`

export const CustomInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ColorValue = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
`
export const CustomInput = styled.input`
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border-radius: 10px;
  height: 50px;
  width: 100px;
  border: none;
`

export const GenerateButton = styled.button`
  color: #1e293b;
  background-color: #00c9b7;
  cursor: pointer;
  outline: none;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-left: 10px;
  margin-top: 12px;
  margin-bottom: 12px;
  margin-right: 0px;
`
