import React, { Component } from 'react'

export class NewsItem extends Component {
   
   
  
  render() {
    let {title, description,imgUrL} = this.props;
   
        
    return (
      <>
    

<div class="card">
  <img src={imgUrL} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{description}</p>
    <a href="#" class="btn btn-primary btn-sm">Read More</a>
  </div>
</div>

   
      
      
      
      </>
    )
  }
}

export default NewsItem