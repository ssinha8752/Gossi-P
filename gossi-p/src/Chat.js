import React from 'react'
import {Avatar, IconButton} from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MicIcon from '@material-ui/icons/Mic';
import './chat.css'
import { InsertEmoticon, Message } from '@material-ui/icons';
/**
* @author
* @function Chat
**/

function Chat(){
  return(
    <div className="chat">
      <div className="chat__header">
        <Avatar/>
          <div className="chat__headerInfo">
            <h3>Room Name</h3>
            <p>Last seen at</p>
          </div>
          <div className="chat__headerRight">
            <IconButton>
                <DonutLargeIcon/>
            </IconButton>
            <IconButton>
                <ChatIcon/>
            </IconButton>
            <IconButton>
                <MoreVertIcon/>
            </IconButton>
            </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Shubham</span>
          Hey Bro!
          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
        </p>
        <p className="chat__message chat__receiver">
          <span className="chat__name">Rishabh</span>
          Hey Puchu!
          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Shubham</span>
          Hey Bro!
          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticon/>
        <form>
        <input type="text" placeholder="Type a text"/>
        <button type="submit">Send a Message</button>
        </form>
        <MicIcon/>
      </div>
    </div>
   )

 }

export default Chat