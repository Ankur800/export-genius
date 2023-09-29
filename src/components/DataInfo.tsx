import React from 'react';

type DataInfoProps = {
	data: string;
	info: string;
};

const DataInfo = ({ data, info }: DataInfoProps) => {
	return (
		<div>
			<p className='text-6xl font-Montserrat font-extrabold text-main'>
				{data}
			</p>
			<p className='mt-8 font-Montserrat-normal text-xl font-semibold'>
				{info}
			</p>
		</div>
	);
};

export default DataInfo;
