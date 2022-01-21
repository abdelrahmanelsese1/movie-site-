import { BsFillStarFill } from "react-icons/bs"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
const Navbar =()=>{
    const count = useSelector(state=> state.count)
    return (
        <>
            <header className="header_area bg-dark" style={{color:"#ffffff"}} >
                    <div className="main-menu container">
                        <nav className="navbar navbar-expand-lg ">
                            <Link className="navbar-brand headbar" to="/"  ><h3>Movie Land</h3></Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse row" id="navbarNav">
                                <div className="col-lg-2">
                                <ul className="navbar-nav justify-content-center">
                                    <li className="nav-item active">
                                        <Link className="nav-link active"  to="/">Home </Link>
                                    </li>
                                </ul>
                                </div>
                                <div className="col-lg-10 justify-content-end">
                                    <ul className="navbar-nav justify-content-end">
                                    <li className="nav-item" >
                                        <Link className="nav-link" to="/favourite"><BsFillStarFill/>{count} </Link>
                                        
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register"> Register</Link>
                                    </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
        </>
    )
}
export default Navbar