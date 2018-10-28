import React from 'react';

export default class Feed extends React.Component{
	render(){
		return(
			<div className='feed-main-container'>
				<div className='feed-main-wrapper'>
					<div className='feed-group-image'></div>
					<div className='feed-group-name'>
						<div className='feed-group-name-wrapper'>
							<div className='feed-name-container'>
								<div className='adfeed-group-name'>New group</div>
								<div className='adfeed-total-members'>1000 members</div>
							</div>
							<div className='adfeed-button-container'>
								<input className='adfeed-join-button' type='button' value='+ Join'/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}