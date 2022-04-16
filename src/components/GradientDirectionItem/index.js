import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {isActive, gradientDirectionDetails, clickGradientDirectionItem} = props
  const {displayText, value} = gradientDirectionDetails

  const onClickGradientDirectionItem = () => {
    clickGradientDirectionItem(value)
  }

  return (
    <ListItem>
      <DirectionButton
        type="button"
        isActive={isActive}
        onClick={onClickGradientDirectionItem}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
