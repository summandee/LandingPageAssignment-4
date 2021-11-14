import React from 'react'

const Home = () => {
    return (
        
       
    <nav className="navbar navbar-expand-lg navbar-dark mybg">
        <div className="container-fluid">
            <a className="navbar-brand " href="#">Tech WEb</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/About.html">About Us</a>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                           Technology
                        </a>
                        <ul className="dropdown-menu mybg" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item " href="#">Data Analinge</a></li>
                            <li><a className="dropdown-item" href="#">Supported Link</a></li>
                            <li><a className="dropdown-item" href="#">Write for Us</a></li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/Contact.html">Contact Us</a>
                    </li>
                   
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-dark text-white" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
    

            
      
    )
}

export default Home
