import React, { Component } from 'react'

export class NewsItems extends Component {
 
  
  
render() {
   let {title, description, imgUrl, newsUrl, author, date, source}=this.props
    return (
    <div>
    <div className="card my-2 rounded-0" >
    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%", zIndex:"1"}}>
    {source}
    </span>
    <img src={!imgUrl?"https://newsinterpretation.com/wp-content/uploads/2020/03/news33.jpg":imgUrl} className="card-img-top rounded-0" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <div className="card-footer my-3">
    By {!author?"unknown":author} on {new Date(date).toGMTString()}
    </div>
    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
    </div>
    </div>
    </div>
    )
  }
}

export default NewsItems