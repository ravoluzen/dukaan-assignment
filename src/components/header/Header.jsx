import './Header.css'
import logo from "../../assets/logo.png"

function Header() {
  return (
    <div className="container">
      <header className="header">
        <div className='logo-container'>
          <img className="dukaan-logo" src={logo} alt=""/>
        </div>
        <div className="link-container">
          <p>Sign in</p>
          <button className="header-button">
            Dukaan for PC
          </button>
        </div>
      </header>
    </div>
  )
}

export default Header