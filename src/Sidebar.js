import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojyFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StoreFrontIcon from '@material-ui/icons/Storefront';
import VideoLibreryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information" />
      <SidebarRow Icon={EmojyFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StoreFrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibreryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutIcon} title="More" />
    </div>
  );
}

export default Sidebar;
