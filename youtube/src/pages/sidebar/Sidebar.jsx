import React from 'react';
import './Sidebar.css';
import SidebarRow from '../sidebarrow/SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import SensorsIcon from '@mui/icons-material/Sensors';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import DiamondIcon from '@mui/icons-material/Diamond';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import TheatersIcon from '@mui/icons-material/Theaters';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import FlagIcon from '@mui/icons-material/Flag';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import {Link} from 'react-router-dom';
import { ThemeChanger } from '../usetheme/Themer';
import { Themer } from '../usetheme/Themer';
const Sidebar = () => {
   const [data,setData]=React.useContext(ThemeChanger)
  return (
    <div className='sidebar' style={{backgroundColor:data}} >
      <Link to="Videos"><SidebarRow selected Icon={HomeIcon} title="Home" /></Link>
      <Link to="Subscriptions"><SidebarRow Icon={SubscriptionsIcon} className="sub" title="Subscription" /></Link>
      <SidebarRow Icon={OndemandVideoIcon} title="shorts" />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={VideoSettingsIcon} title="your videos" />
      <SidebarRow Icon={WatchLaterIcon} title="Watch videos" />
      <SidebarRow Icon={ThumbUpIcon} title="Liked videos" />
      <hr />
      <h3 onClick={()=>setData('gray')}>Subscriptions</h3>
      <SidebarRow Icon={ThumbUpIcon} title="Music" />
      <SidebarRow Icon={ShoppingBagIcon} title="sports" />
      <SidebarRow Icon={VideogameAssetIcon} title="Gaming" />
      <SidebarRow Icon={TheatersIcon} title="Movies" />
      <hr />
      <h3>Explore</h3>
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={ShoppingBagIcon} title="Shopping" />
      <SidebarRow Icon={MusicNoteIcon} title="Music" />
      <SidebarRow Icon={MovieCreationIcon} title="Movies" />
      <SidebarRow Icon={SensorsIcon} title="Live" />
      <SidebarRow Icon={SportsEsportsIcon} title="Gaming" />
      <SidebarRow Icon={NewspaperIcon} title="News" />
      <SidebarRow Icon={EmojiEventsIcon} title="Sports" />
      <SidebarRow Icon={SchoolIcon} title="Learning" />
      <SidebarRow Icon={DiamondIcon} title="Fashion & Beauty" />
      <hr />
      <SidebarRow Icon={SettingsApplicationsIcon} title="Settings" />
      <SidebarRow Icon={FlagIcon} title="Report History" />
      <SidebarRow Icon={HelpOutlineIcon} title="Help" />
      <SidebarRow Icon={ReportProblemIcon} title="Send Feedback" />
      <hr />
      <p>
        About Press copyright Contact us Creators Advertise Developers
      </p>
      <br />
      <p>
        TermsPrivacyPolicy & SafetyHow YouTube worksTest new features
      </p>
      <br />
      <p>?? 2023 Google LLC</p>
      </div>

  )
}

export default Sidebar