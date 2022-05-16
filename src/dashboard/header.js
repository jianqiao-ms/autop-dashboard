import {
  // BrowserRouter as Router,
  // Routes,
  // Route,
  NavLink
} from "react-router-dom";

import './scss/header.scss';

export const Header = (props) => {
  return(
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Autop</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#dashboardNavbar"
                  aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>

          <div className="collapse navbar-collapse" id="dashboardNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Dashboard</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/datacenter">Datacenter</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/application">Application</NavLink>
              </li>
              {/*<li className="nav-item">*/}
              {/*  <a className="nav-link" href="#">Link</a>*/}
              {/*</li>*/}
              {/*<li className="nav-item">*/}
              {/*  <a className="nav-link disabled">Disabled</a>*/}
              {/*</li>*/}
              {/*<li className="nav-item dropdown">*/}
              {/*  <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-bs-toggle="dropdown"*/}
              {/*     aria-expanded="false">Dropdown</a>*/}
              {/*  <ul className="dropdown-menu" aria-labelledby="dropdown04">*/}
              {/*    <li><a className="dropdown-item" href="#">Action</a></li>*/}
              {/*    <li><a className="dropdown-item" href="#">Another action</a></li>*/}
              {/*    <li><a className="dropdown-item" href="#">Something else here</a></li>*/}
              {/*  </ul>*/}
              {/*</li>*/}
            </ul>
            {/*<form>*/}
            {/*  <input className="form-control" type="text" placeholder="Search" aria-label="Search" />*/}
            {/*</form>*/}
          </div>
        </div>
      </nav>
  )
}