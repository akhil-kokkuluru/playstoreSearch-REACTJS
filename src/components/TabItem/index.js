import './index.css'

const TabItem = props => {
  const {tabsList, onTabClick, isActiveT} = props
  const {displayText, tabId} = tabsList
  const onClicking = () => {
    onTabClick(tabId)
  }
  const cssstyle = isActiveT ? 'buttonsBlue' : 'buttons'
  return (
    <li>
      <button className={cssstyle} type="button" onClick={onClicking}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
