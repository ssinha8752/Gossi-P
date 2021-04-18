import React from 'react'
import './sidebar.css'
import {Avatar, IconButton} from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined} from '@material-ui/icons'
import SidebarChat from './SidebarChat';
/**
* @author
* @function Sidebar
**/

function Sidebar (){
  return(
    <div className="sidebar">
        <div className="sidebar__header">
        <Avatar alt="Shubham" src="./1" />
            <div className="sidebar_headerRight">
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
        <div className="sidebar__search">
            <div className="sidebar__searchContainer">
                <SearchOutlined/>
                <input placeholder="Search or start a new chat" type="text"/>
            </div>
        </div>
        ADD NEW CHAT HERE
        <div className="sidebar__chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
        </div>
    </div>
   )

 }

export default Sidebar