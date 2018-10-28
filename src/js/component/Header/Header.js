import React from 'react';








export default class Header extends React.Component {
	render(){
		return(
			<nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#365899" }}>
				  <a className="navbar-brand" href="#">
				  	<img src="http://icons-for-free.com/free-icons/png/512/1807542.png" width="30" height="30" alt=""/>
				  </a>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>

				  <div className="collapse navbar-collapse" id="navbarSupportedContent">
				    <form className="form-inline my-2 my-lg-0">
					     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
					      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
					 </form>
				    <ul className="navbar-nav ml-auto">
				      <li className="nav-item active">
				        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
				      </li>
				      <li className="nav-item dropdown">
				        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				          Options
				        </a>
				        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
				          <a className="dropdown-item" href="#">Profile</a>
				          <a className="dropdown-item" href="#">Settings</a>
				          <div className="dropdown-divider"></div>
				          <a className="dropdown-item" href="#">Logout</a>
				        </div>
				      </li>
				    </ul>
				  </div>
			</nav>
		)
	}
}