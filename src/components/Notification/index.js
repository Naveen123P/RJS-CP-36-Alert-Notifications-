// Write your code here
import './index.css'

const Notification = props => {
  console.log(props)
  return <div className="notifications-container">{props.children}</div>
}

export default Notification
