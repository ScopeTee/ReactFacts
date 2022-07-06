// import Header from "./MainContent"
// import Footer from "./Footer"
// import NavBar from "./Navbar"


// function MainContent() {
//     return(
//         <header className="text-center">
//             <h1> Hi, I'm learning react</h1>
//             <h4> I'm a Full-Stack Web Developer and you can find my Resume attached below</h4>
//             <button type="button" class="btn btn-outline-dark">Resume</button>
//         </header>
//     )
// }

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

function Header () {
    return(
        <div  className="text-start px-5 py-5">
            <h1> Fun Facts About React</h1>
            <ul>
                <li> Was first released in 2013</li>
                <li> Is maintained by Facebook</li>
                <li> Powers thousands of enterprise apps, including mobile apps</li>
                <li> Was originally created by Jordan Walke</li>
            </ul>
        </div>
    )
 }

 function Footer () {
    return (
        <div className="text-center">
            <p> © 2022 Fuad development. All rights reserved.</p>
        </div>
    )
 }
function Page () {
    return (
        <div> 
        <NavBar />
        <Header />
        <Footer />
        {/* <MainContent /> */}
    </div>
    )
}
ReactDOM.render( <Page />, document.getElementById("root"))