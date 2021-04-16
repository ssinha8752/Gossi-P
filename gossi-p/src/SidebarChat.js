import React from 'react'
import {Avatar} from '@material-ui/core'
import './sidebarChat.css'
/**
* @author
* @function SidebarChat
**/

function SidebarChat (){
  return(
    <div className="sidebarChat">
    <Avatar />
        <div className="sidebarChat__info">
            <h2>Room Name</h2>
            <p> Description</p>
        </div>
    </div>
   )
 }

export default SidebarChat