import React from 'react';

export default class Log extends React.Component{
	render(){
		const n =(
			<div className='Log-main-div'>
				<div className='Log-activity-main'>
					<div className='Log-name-container'>
						<span className='Log-name'>Nishant </span>
						<span className='Log-activity'>Liked your post</span>
					</div>
				</div>
			</div>
			);

		return(
			<div className="Log-main">
				{n}{n}{n}{n}{n}{n}{n}{n}{n}{n}{n}{n}{n}{n}{n}{n}{n}

			</div>

		)
	}
}