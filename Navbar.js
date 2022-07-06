
function NavBar() {
    return (
        <nav className="navbar bg-light px-5">
            <div className="container-fluid">
                {/* <a class="navbar-brand">Scope Tee</a> */}
                <img src="react-logo.png" width={"60px"} alt="..." />
                <div className="d-flex"> 
                    <ul className="d-flex nav-items">
                        <li> Pricing</li>
                        <li> About</li>
                        <li> Contact </li>
                    </ul>
                    {/* <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
                
            </div>
        </nav>
    )
}

export default NavBar