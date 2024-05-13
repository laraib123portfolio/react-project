import React from 'react'

function Footer(props) {
  const headerStyle = {
   
    color: props.mode === 'dark' ? '#fff' : '#000' // Adjust text color according to the mode
  };
  return (
    <div>

<div className="container">
<div className="row p-5">
<div className="col-lg-6 col-sm-12">
<div className="customer-care-footer">
<h3 className='text-success'>customer care</h3>
 <p  style={headerStyle}>shipping & handling</p>
 <p  style={headerStyle}>exchnage policy</p>
 <p  style={headerStyle}>order cancel</p>
 <p  style={headerStyle}>privacy policy</p>
 <p  style={headerStyle}>terms of use</p>
 <p  style={headerStyle}>faqs</p>




</div>
</div>
<div className="col-lg-6 col-sm-12">
<div className="information-footer">
<h3 className='text-success'>information</h3>
 <p  style={headerStyle}>about us</p>
 <p  style={headerStyle}> contact us</p>
 <p  style={headerStyle}>careers</p>
 <p  style={headerStyle}>store locator</p>

</div>
</div>
</div>
</div>



{/* <div className="d-flex justify-content-center">
<small class="copyright__content">© 2024, <a href="/" title="">Limelightpk</a></small>
</div> */}


    </div>
  )
}

export default Footer