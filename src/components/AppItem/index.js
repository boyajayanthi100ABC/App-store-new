// Write your code here

import './index.css'

const AppItem = props => {
  const {eachAppItem} = props
  const {appId, appName, imageUrl, category} = eachAppItem

  return (
    <div>
      <img src={imageUrl} alt={appName} className="item-image" />
      <p> {appName} </p>
    </div>
  )
}

export default AppItem
