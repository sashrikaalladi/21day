import React from 'react';
import './Header.scss'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
 import ReactSwitch from 'react-switch';
 import { ThemeChanger } from '../usetheme/Themer';
 import { Themer } from '../usetheme/Themer';


const Header = () => {
  const [data,setData]=React.useContext(ThemeChanger)

  return (
    <div className="header"style={{backgroundColor:data}}  >
      <div className='header__left'>
        <MenuSharpIcon className='one' />
        <img className="header__logo" src="data:image/png;base64,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" alt="" />
        {/* <img className="header__logo" src="https://www.pngfind.com/pngs/m/311-3112926_permalink-to-200-trend-youtube-logo-png-transparent.png" alt=" "/> */}
        </div>
      <div className='header__input'>
        <input
          type="text" placeholder="search..." />
        
        <SearchSharpIcon className='header__inputbutton' />
      </div> 

      <div className='header__icons'>
        <VideoCallSharpIcon/>
        <NotificationsNoneSharpIcon />
        <AppsRoundedIcon />
        <AccountCircleRoundedIcon  />
        <div>
          <ReactSwitch onChange={()=>setData((curr)=>(curr==="black"?"#011638":"black"))} checked={Themer==="black"}/> 
        </div>
        <img id="img" draggable="false" class="image" alt="Avatar image" height="32" width="32" src="https://yt3.ggpht.com/BWDKASmMoVJ0mf1mhkTy5koRlPccu3JnK06WcsuvPJYslyXaSuPNy7SIBxVeLWNy1Z8LPoHs=s88-c-k-c0x00ffffff-no-rj-mo"></img>
      </div>
    </div>
  )
}

export default Header