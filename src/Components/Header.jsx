import React from 'react'
import Checkout from './Checkout'

function Header(props) {
 
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><p>{props.title}</p></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         
          
       
          
        </ul>
        <form className="d-flex">
        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 46 38" fill="none">
  <path d="M14.1982 31.1837C12.5533 31.1837 11.2197 32.5557 11.2197 34.2482C11.2197 35.9406 12.5533 37.3127 14.1982 37.3127C15.8432 37.3127 17.1768 35.9406 17.1768 34.2482C17.1768 32.5557 15.8432 31.1837 14.1982 31.1837Z" fill="white"></path>
  <path d="M35.0474 31.1837C33.4024 31.1837 32.0688 32.5557 32.0688 34.2482C32.0688 35.9406 33.4024 37.3127 35.0474 37.3127C36.6924 37.3127 38.0259 35.9406 38.0259 34.2482C38.0259 32.5557 36.6924 31.1837 35.0474 31.1837Z" fill="white"></path>
  <path d="M8.24121 0.538818C8.95308 0.538818 9.56374 1.05677 9.70186 1.77213L9.70781 1.80478L13.9584 26.5869H36.5371C37.3498 26.5869 38.0105 27.2567 38.0261 28.089L38.0264 28.1192C38.0264 28.9553 37.3754 29.6351 36.5664 29.6511L36.5371 29.6514H12.709C11.9971 29.6514 11.3865 29.1335 11.2483 28.4181L11.2424 28.3855L6.99172 3.6033H2.28418C1.47148 3.6033 0.810819 2.93353 0.795205 2.10121L0.794922 2.07106C0.794922 1.2349 1.4459 0.555175 2.25487 0.539109L2.28418 0.538818H8.24121Z" fill="white"></path>
  <path d="M9.73096 5.1355L38.6066 5.1355C39.2762 5.13502 39.9107 5.44359 40.3354 5.97623C40.7512 6.49777 40.9228 7.18029 40.8065 7.84247L40.7987 7.88471L38.118 21.6751C37.9112 22.7379 37.0116 23.5059 35.9624 23.5221L35.927 23.5224H12.7095C11.887 23.5224 11.2202 22.8364 11.2202 21.9902C11.2202 21.154 11.8712 20.4743 12.6802 20.4582L12.7095 20.4579H35.317L37.6999 8.19989L9.73096 8.19998C8.91825 8.19998 8.2576 7.53021 8.24198 6.69789L8.2417 6.66774C8.2417 5.83158 8.89268 5.15185 9.70165 5.13579L9.73096 5.1355Z" fill="white"></path>
  {/* <circle cx="30" cy="8.8965" r="12" fill="#CF0C1D" stroke="white" stroke-width="2" class="hide-red-circle"></circle> */}
</svg>
        </form>
      </div>

{/* --------chcekout div-------------- */}



{/* --------chcekout div-------------- */}

    </div>






    
  </nav>
  <div className="d-flex justify-content-between bg-grey">
{/* ---------profie */}
  <div className='profile-svg'>
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" class="icon icon-account" fill="none" viewBox="0 0 18 19" stroke="#000" stroke-width="0.5">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zM9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z" fill="currentColor">
</path></svg>
  </div>

{/* ---------profie */}

{/* types */}
<div className="d-flex types">
  <p><a href="">Women</a></p>
  <p><a href="">Girls</a></p>
  <p><a href="">men</a></p>
  <p><a href="">accespries</a></p>
 
  
</div>
{/* types */}


{/* 
checkout  */}

<div className="d-flex justify-content-end checkout-div">
  <p>checkout</p>
  <div className='bg-primary'>
<Checkout title="title"/>
  </div>
</div>

</div>
  </div>
  )
}

export default Header