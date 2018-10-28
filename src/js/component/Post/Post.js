import React from 'react';


export default class Post extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			arr : [ {
				img : '',
				type : 'one',
			},
			{
				img : '',
				type : 'two',
			},
			{
				img : '',
				type : 'three',
			},
			{
				img : '',
				type : 'four',
			},

			],
		}
	}
	render(){
		return(
			<div>
				<div className='post-main-div-container'>
					<div className='post-main-div-wrapper'>
						<div className='post-name-action-container'>
							<div className='post-activity-name-time-wrapper'>
								<div className='post-name-activity-container'>
									<span className='name-span-container'>Reaper</span>
								</div>
								<span className='post-activity-time-container'>3 hrs</span>
							</div>
						</div>
						<div className="post-body">
							{
								
								this.state.arr.map(function(v,i){
									if(v.type === 'one') {
										return(
											<div key={'i_'+i}>
												<div className="post-image-wrapper-one">
													<div className={v.img}></div>
												</div>
											</div>
										)
									}
									else if(v.type === 'two') {
										return (
											<div key = {'i_'+i}>
												<div className="post-image-wrapper-two">
													<div className={v.img}></div>
												</div>
											</div>
										)
									}
									else if(v.type === 'three') {
										return (
											<div key ={'i_'+i}>
												<div className="post-image-wrapper-three">
													<div className={v.img}></div>
												</div>
											</div>
										)
									}
									
								})
							}
						</div>
						<div className='post-footer-container'>
							<div className='post-first-block-like'><i className='fa fa-thumbs-up'> <span className='like-label-container'>Like</span></i></div>
							<div className='post-second-block-comment'><i className='fa fa-comment'> <span className='like-label-container'>Comment</span></i></div>
							<div className='post-third-block-share'><i className='fa fa-share'> <span className='like-label-container'>Share</span></i></div>
							<div className='post-forth-block-blank'></div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}






{/*console.log('hi');
									return (
										<div key={'i_'+i}>
											<div className="post-image-wrapper">
												<div className="row">
													<div className="col-9">
														<div className={v.img}></div>
													</div>
												</div>
											</div>
										</div>
									)*/}