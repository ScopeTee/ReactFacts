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
        <nav className="navbar navbar-dark bg-dark px-5">
            <div className="container-fluid">
                <a class="navbar-brand d-flex" href="#">
                    <img src="react-logo.png" alt="" width={"40px"}  class="d-inline-block align-text-top" />
                    <h3>ReactFacts</h3>
                </a>
                <p className="nav-items"> React Course - FUAD</p>
                
            </div>
        </nav>
    )
}

function Main () {
    return(
        <div  className="text-start px-5 py-5 main">
            <h1> Fun Facts About React</h1>
            <ul className="dot">
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
        <div className="text-center main">
            <p> © 2022 Fuad development. All rights reserved.</p>
        </div>
    )
 }
function Page () {
    return (
        <div> 
        <NavBar />
        <Main />
        <Footer />
        {/* <MainContent /> */}
    </div>
    )
}
ReactDOM.render( <Page />, document.getElementById("root"))