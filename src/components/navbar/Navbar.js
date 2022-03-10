import React, { Component } from 'react';
import NavbarLogo from '../navbar-logo/navbar-logo';
import Search from '../search/search';

class Navbar extends Component {
 
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark mb-4">
        <div className="container">
          <div className="navbar-brand" href="landing.html">
            <NavbarLogo/>
          </div>
          <div style={{ width:"100%"}}>
            <Search type="text"
              style={{width:"100%"}}
              placeholder="Search"
              className="form-control"
              aria-label="Search"
              
              />
          </div>
         
        </div>
      </nav>
    );
  }
}

export default Navbar;
