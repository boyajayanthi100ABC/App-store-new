// Write your code here

import './index.css'

const AppItem = props => {
  const {eachAppItem} = props
  const {appId, appName, imageUrl} = eachAppItem

  return (
    <li>
      <img src={imageUrl} alt={appName} className="item-image" key={appId} />
      <p> {appName} </p>
    </li>
  )
}

export default AppItem
