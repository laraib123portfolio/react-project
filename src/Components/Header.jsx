import React from 'react';
import Checkout from './Checkout';

function Header(props) {
  const headerStyle = {
    backgroundColor: props.mode === 'dark' ? 'rgb(2 10 36)' : 'white',
    color: props.mode === 'dark' ? '#fff' : '#000' // Adjust text color according to the mode
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={headerStyle}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><p>{props.title}</p></a>
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
      <div className={`d-flex justify-content-between bg-${props.mode} alin`}>
        <div className='profile-svg'>
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" className="icon icon-account" fill="none" viewBox="0 0 18 19" stroke="#000" strokeWidth="0.5">
            <path fillRule="evenodd" clipRule="evenodd" d="M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zM9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z" fill="currentColor"></path>
          </svg>
        </div>
        <div className="d-flex types">
          <p><a href="">Women</a></p>
          <p><a href="">Girls</a></p>
          <p><a href="">Men</a></p>
          <p><a href="">Accessories</a></p>
        </div>
        <div className="d-flex justify-content-end checkout-div">
          <p>Checkout</p>
          <div className={`bg-${props.mode}`} style={headerStyle}>
            <Checkout title="title"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;