import React from "react";
const Navbar = () => {
  return (
    <>
  <nav className="navbar navbar-dark navbar-expand-md">
    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse collapse" id="navbar">
        <ul className="navbar-nav">
            <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
        </ul>
    </div>
</nav>
    </>
  );
};

export default Navbar;
