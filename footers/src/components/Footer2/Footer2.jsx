import React from 'react'
import "./style.scss"
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"

function Footer2() {
  return (
    <footer className='footer2'>
      <div className="container">
        <ul className="footer">
          <li>
            <BsTwitter style={{ fontSize: "20px" }} />
            <FaFacebookF style={{ fontSize: "20px" }} />
            <BsInstagram style={{ fontSize: "20px" }} />
          </li>
          <li>
            info . support . marketing . terms of use . privacy policy
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer2