import React from 'react'
import logo from '../assets/images/image_2.jpeg';

function TextForm(props) {
    const cards = [1,2,3,4,5,6,7,8]
    const headerStyle = {
     
      color: props.mode === 'dark' ? '#fff' : '#000' // Adjust text color according to the mode
    };
    const cardStyle= {
      backgroundColor: props.mode === 'dark' ? '#234c59' :'#ddd',
      color: props.mode === 'dark' ? '#fff' : '#000'
    }
    const titleStyle = {
      color: props.titleColor || 'rgb(2, 10, 36)' // Customize title color
    };
  
    const buttonStyle = {
      backgroundColor: props.buttonColor || 'rgb(2, 10, 36)', // Customize button background color
      color: props.buttonTextColor || '#fff' // Customize button text color
    };
  
    const textStyle = {
      color: props.textColor || 'inherit' // Customize text color
    };
  return (
    <div>

<div className="container">
    <h2 className="my-4"  style={headerStyle}>{props.heading}</h2>
    <div className="row g-3">

            {
             cards.map((index)=>{
                return (
                    <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card" id={index} >
                    <img src={logo} alt="" />
                 <div className="card-body" style={cardStyle}>
                        <h5 className="card-title" style={titleStyle}>{props.cardTitle}</h5>
                      <p className="card-text fs-9" style={textStyle}>{props.cardText}</p>
                       
                      <div className="d-flex justify-content-center">
                      <button className="btn btn-primary mt-3" style={buttonStyle}>{props.btnText}</button>
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