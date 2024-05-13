import React, { useState } from 'react'
import Header from './Header'
import Banner from './Banner'
import Footer from './Footer'
import TextForm from './TextForm'

function Home() {
//   const [Mystyle, setMystyle] = useState({
//     background:'white',
//     color:'black'
//   })
//  const toggleStyle = () =>{
// if(Mystyle.color == 'black' ){
//   setMystyle({
//     background:'black',
//     color:'white'
//   })
// }
// else{
// setMystyle({
//   background:'white',
//     color:'black'
// })
// }
//  }
  return (
    <div>
      <div className='d-flex justify-content-end'>
         <button className='btn btn-primary' onClick={toggleStyle}>Enable dark mode</button>
      </div>
      <Header title="Logo" name="Home"/>
      <Banner/>
      <TextForm heading="Popular Trends" cardTitle="Polo Shirt" 
      cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
      btnText="Add to cart"/>
      <Footer/>
    </div>
  )
}

export default Home