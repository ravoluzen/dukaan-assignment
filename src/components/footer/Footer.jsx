import './Footer.css'
import logo from "../../assets/logo.png"
import flag from "../../assets/flag.png"

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <img className="dukaan-logo" src={logo} alt="" />
        <div className="links">
          <ul>
            <li>Contact</li>
            <li>Tutorials</li>
            <li>Privacy</li>
            <li>About</li>
            <li>FAQ's</li>
            <li>Blog</li>
            <li>Banned Items</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div className='social-links'>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Linkedin</li>
          </ul>
        </div>
      </div>
      <div className="signoff-text">
        <p>Dukaan 2020, All rights reserved.</p>
        <p>Made in  <img src={flag}/></p>
      </div>
    </div>
  )
}

export default Footer