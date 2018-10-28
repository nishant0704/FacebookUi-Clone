import React from 'react';

export default class Chat extends React.Component{
	render(){
		const c = (
			<div className='chat-name-container'>
				<div className='chat-name'>Nishant</div>
				<div className='chat-time'>4hr</div>
			</div>

		);
		return(
			<div className='chat-main-div-container'>
				<div className='chat-main'>
					{/*<span className='chat-header'>FRIENDS</span>*/}
					{c}{c}{c}{c}{c}{c}{c}{c}{c}{c}{c}{c}{c}{c}
					
				</div>
			</div>
		)
	}
}


			