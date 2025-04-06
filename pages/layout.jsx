import { useState } from "react"
import "bootstrap-icons/font/bootstrap-icons.css"




export const Layout = () => {
  const [login, setLogin] = useState(true)
  const [menu, setMenu] = useState(true)
  const [search, setSearch] = useState("")
  const Login = () => {
    setLogin(!login)
  }
  const Menu = () => {
    setMenu(!menu)
  }
  return (
    <>
    <div className="layout-container">
      <div>
        <header>
          <nav>
            <h2>Your<span>Story</span></h2>
            
            <div className="input-navbar">
              <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search name/book title" />
            </div>

            <div className="login-menu">
            <div>
            <ul>
              <div className="li"><li>Support</li></div>
              <div className="li"><li>Contact</li></div>
              <div className="li"><li>Publish</li></div>
            </ul>
            </div>

            <div className="login-container" onClick={Login}>
              <div>{login ? "Login" : "Logout"}</div>
            </div>

            <div className="menu-icon" onClick={Menu}>
              <div>{menu ? <i class="bi bi-list"></i> : <i class="bi bi-x-lg"></i>}</div>
            </div>
            </div>
          </nav>
        </header>
      </div>
    </div>

    <div className="menu-bar">
      {menu ? ("") : (
        <div className="menu-bar-scroll">
          <div className="lin"><li>Support</li></div>
              <div className="lin"><li>Contact</li></div>
              <div className="lin"><li>Publish</li></div>
        </div>
      )}
      </div>
</>
  )
}