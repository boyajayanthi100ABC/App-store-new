// Write your code here

import './index.css'

const TabItem = props => {
  const {TabItemList, isActive} = props
  const {tabId, displayText} = TabItemList
  const {clickableItem} = props

  const tabItemclick = () => {
    clickableItem(tabId)
  }

  const classNameHere = isActive ? 'tab-butt' : ''

  return (
    <li className="disply-text">
      <button>
        <p onClick={tabItemclick} className={`${classNameHere}`}>
          {displayText}
        </p>
      </button>
    </li>
  )
}

export default TabItem
