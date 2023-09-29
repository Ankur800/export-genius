import React from 'react';
import { Button } from '.';

const Navbar = () => {
	return (
		<>
			<div className='navbar w-full px-32 h-28 flex justify-between items-center font-Montserrat text-base text-secondary tracking-wider font-extrabold'>
				<div>
					<img src='./logo.png' alt='logo' />
				</div>
				<div className='cursor-pointer nav-menu active'>
					<p>HOME</p>
				</div>
				<div className='opacity-75 cursor-pointer nav-menu'>
					<p>ABOUT US</p>
				</div>
				<div className='opacity-75 cursor-pointer nav-menu'>
					<p>OUR SERVICES</p>
				</div>
				<div className='opacity-75 cursor-pointer nav-menu'>
					<p>OUR EXPERIENCE</p>
				</div>
				<div className='opacity-75 cursor-pointer nav-menu'>
					<p>RESOURCES</p>
				</div>
				<div>
					<Button
						text='CONTACT US'
						className='bg-primary text-primary opacity-100 w-28 h-11 rounded-3xl font-Oswald font-normal text-sm'
					/>
				</div>
				<div className='flex justify-between w-24'>
					<img
						className='cursor-pointer'
						src='./facebook.png'
						alt='facebook'
						width='20px'
						height='20px'
					/>
					<img
						className='cursor-pointer'
						src='./instagram.png'
						alt='insta'
						width='20px'
						height='20px'
					/>
					<img
						className='cursor-pointer'
						src='./linkedin.png'
						alt='linkedin'
						width='20px'
						height='20px'
					/>
				</div>
			</div>
		</>
	);
};

export default Navbar;
