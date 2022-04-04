import { Outlet, Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <nav className=" navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand active" to="/" style={{ color: "red", fontSize: 50 }}>{props.title}</Link>
          <br />
          <br />

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>




          <Link className="nav-link" aria-current="page" to="/mounting" >Mounting</Link>


          <Link className="nav-link" to="/unmounting">Unmounting</Link>


          <Link className="nav-link" to="/updating">Updating</Link>



        </div>
      </nav>


      <Outlet />
    </>
  )
};

export default Navbar;