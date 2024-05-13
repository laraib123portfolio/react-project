import React from 'react';
import Checkout from './Checkout';

function Header(props) {
  const headerStyle = {
    backgroundColor: props.mode === 'dark' ? 'rgb(2 10 36)' : 'white',
    color: props.mode === 'dark' ? '#fff' : '#000',
    borderColor: props.mode === 'dark' ? '#ddd' : '#ADD8E6',// Adjust text color according to the mode
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={headerStyle}>
        <div className="container-fluid">
          <a className="navbar-brand" style={headerStyle} href="#"><p>{props.title}</p></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
              </div>
            </form>
          </div>
        </div>
      </nav>
     
    </div>
  );
}

export default Header;