// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning} from 'react-icons/md'
import {MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'
import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="bg-container1">
    <div className="bg-container2">
      <h1 className="alert-heading">Alert Notifications</h1>
      <div className="Notifications-block">
        <Notification>
          <div className="Notification-container">
            <AiFillCheckCircle className="AiFillCheckCircle-icon" />
            <div className="message-container">
              <h1 className="success-heading">Success</h1>
              <p className="message-content">
                You can access all the files in the folder
              </p>
            </div>
            <GrFormClose />
          </div>
          <div className="Notification-container">
            <RiErrorWarningFill className="RiErrorWarningFill-icon" />
            <div className="message-container">
              <h1 className="Error-heading heading">Error</h1>
              <p className="message-content">
                Sorry, you are not authorized to have access to delete the file
              </p>
            </div>
            <GrFormClose />
          </div>
          <div className="Notification-container">
            <MdWarning className="MdWarning-icon" />
            <div className="message-container">
              <h1 className="Warning-heading heading">Warning</h1>
              <p className="message-content">
                Viewers of this file can see comments and suggestions
              </p>
            </div>
            <GrFormClose />
          </div>
          <div className="Notification-container">
            <MdInfo className="MdInfo-icon" />
            <div className="message-container">
              <h1 className="Info-heading heading">Info</h1>
              <p className="message-content">
                You can access all the files in the folderAnyone on the internet
                can view these files
              </p>
            </div>
            <GrFormClose />
          </div>
        </Notification>
      </div>
    </div>
  </div>
)

export default AlertNotifications
