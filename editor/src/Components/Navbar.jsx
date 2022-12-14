import React from "react";
import { Link } from "react-router-dom";


export default function navBar(props) {
  
  return (
    <>
    <nav
      className={
        `navbar navbar-${props.mode} navbar-expand-lg bg-${props.mode}`
      }
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="about/">
                Saved Items
              </Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.notMode}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable dark mode
            </label>
          </div>
        </div>
      </div>
    </nav>
    {/* <Routes>
     <Route path="/" element={<TextEdit />} />
     <Route path="about/*" element={<About />} />
   </Routes> */}
</>
  );
}
