import React from 'react';
import './Sidebar.css';
import SidebarOptions from './SidebarOptions';

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import MailIcon from '@material-ui/icons/Mail';
import ListIcon from '@material-ui/icons/List';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';


function Sidebar() {
    return (
        <div className="sidebar">

            <FitnessCenterIcon className="mainicon" />

            {/* Home menu option */}
                <SidebarOptions active text="Home" Icon={HomeIcon} />

            {/* Explore menu option */}
                <SidebarOptions text="Explore" Icon={SearchIcon} />

            {/* Notifications menu option */}
                <SidebarOptions text="Notifications" Icon={NotificationsIcon} />

            {/* Messages menu option */}
                <SidebarOptions text="Messages" Icon={MailIcon} />

            {/* Bookmarks menu option */}
                <SidebarOptions text="Bookmarks" Icon={BookmarksIcon} />

            {/* Lists menu option */}
                <SidebarOptions text="Lists" Icon={ListIcon} />

            {/* Profile menu option */}
                <SidebarOptions text="Profile" Icon={PersonIcon} />      

            {/* More menu option */}
                <SidebarOptions text="More" Icon={MoreHorizIcon} />   

        </div>
    )
}

export default Sidebar
