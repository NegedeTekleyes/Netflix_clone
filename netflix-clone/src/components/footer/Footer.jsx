import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <>
    <div className='footer_outer_container'>
      <div className='footer_inner_container'>
        <div className='footer_icons'>
        <FacebookIcon />
        <InstagramIcon />
        <YouTubeIcon />
        </div>
        <div className='footer_data'>
            <div>
              <ul>
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notices</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Gift Cards</li>
                <li>Terms of use</li>
                <li>Corporate Information</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className='footer_language'>
              <select>
                <option>English</option>
                <option>Amharic</option>
              </select>
            </div>
            <div className='footer_copy'>
                &copy; 2025 Netflix Clone by NegedeTekleyes. All right reserved
            </div>

        </div>
      </div>
    </div>
    
    </>
  )
}

export default Footer