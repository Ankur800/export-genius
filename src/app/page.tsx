import { Heading, Navbar, Button, DataInfo, ProgressBar } from '../components';

const Home = () => {
	return (
		<div className='min-h-screen'>
			<Heading />
			<Navbar />
			<div className='w-full top-div pt-56 pl-36'>
				<p className='font-Montserrat-normal font-bold text-primary'>
					Start your story <br /> with{' '}
					<span className='font-extrabold'>Olvera</span>
				</p>
				<Button
					text='CONTACT US'
					className='font-plus-jakarta h-14 w-44 rounded-3xl font-semibold bg-primary mt-5'
				/>
			</div>
			<div className='w-full tilt-div mt-4 px-32 pt-36 pb-32'>
				<p className='font-plus-jakarta text-3xl text-primary font-light'>
					About Olvera
				</p>
				<p className='font-Archivo text-lg text-primary font-light w-1/3 float-right'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</p>
				<div className='mt-60 flex justify-between items-center'>
					<img src='./howard-logo.png' alt='howard-logo' />
					<img src='./cmnbnk-logo.png' alt='cmnbnk-logo' />
					<img
						src='./ellery-logo.png'
						alt='ellery-logo'
						style={{ height: '20px' }}
					/>
					<img src='./ginger-logo.png' alt='ginger-logo' />
				</div>
			</div>
			<div className='w-full data-div mt-4 px-32 pt-16 pb-32'>
				<div className='w-full flex justify-between px-12'>
					<DataInfo data='150+' info='Projects' />
					<DataInfo data='80+' info='Clients' />
					<DataInfo data='200+' info='Professionals' />
					<DataInfo data='97%' info='Clients' />
				</div>
				<div className='mt-40 flex'>
					<div className='w-1/2'>
						<h3 className='font-Oswald font-semibold text-xl text-main'>
							SERVICES
						</h3>
						<h2 className='mt-8 font-plus-jakarta text-midnight text-5xl font-extrabold line-height-big'>
							Our Services That Can Help Your Business
						</h2>
						<p className='mt-10 font-Archivo font-normal text-base text-fade'>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
						<p className='mt-4 font-Archivo font-normal text-base text-fade'>
							Duis aute irure dolor in reprehenderit in voluptate
							velit esse cillum dolore eu fugiat nulla pariatur.
							Excepteur sint occaecat cupidatat non proident, sunt
							in culpa qui officia deserunt
						</p>
					</div>
					<div className='w-1/2'>
						<ProgressBar text='Sustainability' />
					</div>
				</div>
			</div>
			<div></div>
		</div>
	);
};
export default Home;
