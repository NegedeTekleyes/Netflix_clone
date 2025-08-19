import React, { useEffect, useState } from 'react'
import "./Header.css"
import NetflixLogo from '../../assets/images/NetflixLogo.jpg'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {

    const [showBackground, setShowBackground] = useState(false)

    useEffect(()=>{
        const handleScroll = () =>{
            if(window.scrollY > 50){
                setShowBackground(true)
            }else{
                setShowBackground(false)
            }
        }

        window.addEventListener("scroll",handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
  return (
    <div className='header_outer_container'>
        <div className='header_container'>
            <div className='header_left'>
                <ul>
                    <li><img src={NetflixLogo} alt="Netflix Logo" width= "100"/></li>
                    <li>Home</li>
                    <li>TVShows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>MyList</li>
                    <li>Browse By Language</li>
                </ul>

            </div>
        <div className='header_right'>
            <ul>
                <li><SearchIcon/></li>
                <li><NotificationsNoneIcon/></li>
                <li><AccountBoxIcon/></li>
                <li><ArrowDropDownIcon/></li>
            </ul>

        </div>
        </div>

    </div>
  )
}

export default Header