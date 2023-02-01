import React from 'react'
import "./style.scss"
import img1 from "../../assets/images/footer4.png"

function Footer4() {
    return (
        <footer className='footer4'>
            <div className="container">
                <div className="footer">
                    <img src={img1} alt="img" />
                    <ul>
                        <li className='subscribe'>
                            <div className='wrapper'>
                                <input type="email" placeholder='Enter your email address' />
                                <button>Subscribe</button>
                            </div>
                        </li>
                        <li>
                            <ul>

                            </ul>
                        </li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer4