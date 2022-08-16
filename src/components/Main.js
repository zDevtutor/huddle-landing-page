import React from 'react';

import StyledMain from './styles/StyledMain.styled';

function Main() {
	return (
		<StyledMain>
			<div className='card'>
				<div className='card__info'>
					<h2>Grow Together</h2>
					<p>
						Generate meaningful discussions with your audience and build a
						strong, loyal community. Think of the insightful conversations you
						miss out on with a feedback form.
					</p>
				</div>
				<div className='card__img'>
					<img
						src='./images/illustration-grow-together.svg'
						alt='Grow Together'
					/>
				</div>
			</div>

			<div className='card'>
				<div className='card__info'>
					<h2>Flowing Conversations</h2>
					<p>
						You wouldn't paginate a conversation in real life, so why do it
						online? Our threads have just-in-time loading for a more natural
						flow.
					</p>
				</div>
				<div className='card__img'>
					<img
						src='./images/illustration-flowing-conversation.svg'
						alt='Flowing Conversations'
					/>
				</div>
			</div>

			<div className='card'>
				<div className='card__info'>
					<h2>Your Users</h2>
					<p>
						It takes no time at all to integrate Huddle with your app's
						authentication solution. This means, once signed in to your app,
						your users can start chatting immediately.
					</p>
				</div>
				<div className='card__img'>
					<img src='./images/illustration-your-users.svg' alt='Your Users' />
				</div>
			</div>
		</StyledMain>
	);
}

export default Main;
