import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {imageUrl, appName} = appsList
  return (
    <li className="appcont">
      <img src={imageUrl} alt={appName} className="imageCss" />
      <p className="appName">{appName}</p>
    </li>
  )
}

export default AppItem
