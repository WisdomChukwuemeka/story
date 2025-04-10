import { useState } from "react"
import "bootstrap-icons/font/bootstrap-icons.css"

export const Nav = () => {
    const [menu, setMenu] = useState(true)
    
    const Menu = () => {
        setMenu(!menu)
    }
    return(
        <>
            <div>
                <header>
                    <nav className="nav">
                        <h1>Service</h1>
                        <div className="search">
                            <input type="search" placeholder="Name"/>
                            <button>Search</button>
                        </div>

                        <div className="about-section">
                            <p>About</p>
                            <p>Support</p>
                            <p>Contact</p>
                        </div>

                        <div className="menubar" onClick={Menu}>
                            <div>
                                {menu ? <i class="bi bi-list"></i> : <i class="bi bi-x-lg"></i>}
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
            <div>
                {menu ? ("") : (
                    <div className="menu-section">
                    <p>About</p>
                    <p>Support</p>
                    <p>Contact</p>
                </div>
                )}
            </div>
            
        </>
    )
}