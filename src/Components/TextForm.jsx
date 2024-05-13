import React from 'react'
import logo from '../assets/images/image_2.jpeg';

function TextForm(props) {
    const cards = [1,2,3,4]
   
  return (
    <div>

<div className="container">
    <h2 className="my-4">{props.heading}</h2>
    <div className="row g-3">

            {
             cards.map((index)=>{
                return (
                    <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card" id={index} >
                    <img src={logo} alt="" />
                 <div className="card-body">
                        <h5 className="card-title">{props.cardTitle}</h5>
                      <p className="card-text fs-9">{props.cardText}</p>
                       
                      <div className="d-flex justify-content-center">
                      <button className="btn btn-primary mt-3">{props.btnText}</button>
                      </div>
                   </div>
                </div>
                </div>
            )
             })   
            }
   
        </div>
       
    </div>





    </div>
  )
}

export default TextForm