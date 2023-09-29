import React from 'react';

type ProgressBarProps = {
	text: string;
	mark?: string;
};

const ProgressBar = ({ text, mark = '' }: ProgressBarProps) => {
	return (
		<div className='w-full pr-12 pl-24 pt-4'>
			<h3 className='font-Montserrat text-midnight font-extrabold text-2xl'>
				{text}
			</h3>
			<img src='./arrow.svg' alt='' />
		</div>
	);
};

export default ProgressBar;
