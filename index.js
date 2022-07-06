
function NavBar() {
    return (
        <nav class="navbar bg-light">
        <div class="container-fluid">
            <a class="navbar-brand">Scope Tee</a>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
        </nav>
    )
}

function MainContent() {
    return(
        <header className="text-center">
            <h1> Hi, I'm learning react</h1>
            <h4> I'm a Full-Stack Web Developer and you can find my Resume attached below</h4>
            <button type="button" class="btn btn-outline-dark">Resume</button>
        </header>
    )
}


// const navbar = (
//     <nav>
//         <h1>Bob's Bistro</h1>
//         <ul>
//             <li>Menu</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

ReactDOM.render(
    <div> 
        <Navbar />
        <MainContent />
    </div>
    
    , document.getElementById("root"))