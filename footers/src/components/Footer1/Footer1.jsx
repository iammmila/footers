import React from 'react'
import "./style.scss"
import { BiPhoneCall } from "react-icons/bi"
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from "react-icons/bs"
function Footer1() {
  return (
    <footer className='footer1'>
      <div className="container">
        <ul className='footer'>
          <li className='location'>
            <h2>Our office</h2>
            <div className='phone'>
              <BiPhoneCall style={{fontSize:"20px"}}/>
              <span>(334) 202-4792</span>
            </div>
            <span>haddawy@comcast.net</span>
            <p>998 Devonshire Ave.Camp Hill, PA 17011</p>
          </li>
          <li>
            <h2>Say hello</h2>
            <form action="">
              <input type="text" placeholder='Name' />
              <input type="text" placeholder='Telephone' />
              <input type="text" placeholder='Email' />
              <textarea name="comment" id="comment" cols="25" rows="5" placeholder='Comment'></textarea>
              <button>Submit</button>
            </form>
          </li>
          <li>
            <h2>Keep connected</h2>
            <div style={{ display: "flex", gap: "30px" }}>
              <BsTwitter style={{fontSize:"20px"}}/>
              <span>Twitter</span>
            </div>
            <div style={{ display: "flex", gap: "30px" }}>
              <FaFacebookF style={{fontSize:"20px"}} />
              <span>Facebook</span>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer1