import React from 'react';

export default class  SideBar extends React.Component{
	render(){
		return(
			<div className="sidebar-main">
				<a href="#">Accounts</a>
				<a href="#">Home</a>
				<a href="#">Friends</a>
				<a href="#">Blog</a>
				<a href="#">Pages</a>
			</div>
		)
	}
}