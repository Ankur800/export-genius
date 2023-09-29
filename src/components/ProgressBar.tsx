import React from 'react';

type ProgressBarProps = {
	text: string;
	mark?: string;
};

const ProgressBar = ({ text, mark = '' }: ProgressBarProps) => {
	return (
		<div className='w-full pr-2 lg:pr-12 pl-2 lg:pl-24 pt-4'>
			{mark && (
				<div className='mt-4'>
					<p className='font-Montserrat-normal text-main font-semibold text-base'>
						{mark}
					</p>
				</div>
			)}
			<div className='flex justify-between pb-4'>
				<h3 className='font-Montserrat text-midnight font-extrabold text-2xl'>
					{text}
				</h3>
				<img src='./arrow.svg' alt='arrow-icon' />
			</div>
			<div className='progress-border' />
		</div>
	);
};

export default ProgressBar;
