import { Heading, Navbar, Button, DataInfo, ProgressBar } from '../components';

const Home = () => {
	return (
		<div className='min-h-screen'>
			<Heading />
			<Navbar />
			<div className='w-full top-div pt-72 lg:pt-56 pl-8 lg:pl-36'>
				<p className='font-Montserrat-normal font-bold text-primary'>
					Start your story <br /> with{' '}
					<span className='font-extrabold'>Olvera</span>
				</p>
				<Button
					text='CONTACT US'
					className='hidden lg:block font-plus-jakarta h-14 w-44 rounded-3xl font-semibold bg-primary mt-5'
				/>
			</div>
			<div className='w-full tilt-div mt-4 px-8 lg:px-32 pt-12 lg:pt-36 pb-12 lg:pb-32'>
				<p className='font-plus-jakarta text-3xl text-primary font-light text-center lg:text-left'>
					About Olvera
				</p>
				<p className='block lg:hidden mt-16 font-plus-jakarta text-4xl text-primary font-extrabold text-center line-height-big'>
					Change Is The One True Constant In Business
				</p>
				<p className='font-Archivo text-lg text-primary font-light w-full lg:w-1/3 float-right text-center px-8 lg:px-0 mt-8 lg:mt-0'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</p>
				<div className='mt-60 hidden lg:flex justify-between items-center'>
					<img src='./howard-logo.png' alt='howard-logo' />
					<img src='./cmnbnk-logo.png' alt='cmnbnk-logo' />
					<img
						src='./ellery-logo.png'
						alt='ellery-logo'
						style={{ height: '20px' }}
					/>
					<img src='./ginger-logo.png' alt='ginger-logo' />
				</div>
				<div className='mt-60 flex w-full lg:hidden justify-between items-center'>
					<img
						src='./howard-logo.png'
						alt='howard-logo'
						width={100}
						height={100}
					/>
					<img
						src='./cmnbnk-logo.png'
						alt='cmnbnk-logo'
						width={200}
						height={100}
					/>
				</div>
				<div className='flex lg:hidden justify-between items-center'>
					<img
						src='./ellery-logo.png'
						alt='ellery-logo'
						width={130}
						height={50}
					/>
					<img
						src='./ginger-logo.png'
						alt='ginger-logo'
						width={200}
					/>
				</div>
			</div>
			<div className='w-full data-div mt-4 px-12 lg:px-32 pt-16 pb-32'>
				<div className='w-full hidden lg:flex justify-between px-12'>
					<DataInfo data='150+' info='Projects' />
					<DataInfo data='80+' info='Clients' />
					<DataInfo data='200+' info='Professionals' />
					<DataInfo data='97%' info='Clients' />
				</div>
				<div className='w-full flex lg:hidden justify-between'>
					<DataInfo data='150+' info='Projects' />
					<DataInfo data='80+' info='Clients' />
				</div>
				<div className='w-full mt-12 flex lg:hidden justify-between'>
					<DataInfo data='200+' info='Professionals' />
					<DataInfo data='97%' info='Clients' />
				</div>
				<div className='mt-16 lg:mt-40 block lg:flex'>
					<div className='w-full lg:w-1/2'>
						<h3 className='hidden lg:block font-Oswald font-semibold text-xl text-main'>
							SERVICES
						</h3>
						<h2 className='mt-8 font-Montserrat lg:font-plus-jakarta text-midnight text-2xl lg:text-5xl font-extrabold text-center lg:text-left leading-8 lg:line-height-big'>
							Our Services That Can Help Your Business
						</h2>
						<p className='mt-4 lg:mt-10 font-Archivo font-normal text-base text-fade text-center lg:text-left'>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
						<p className='mt-0 lg:mt-4 font-Archivo font-normal text-base text-fade text-center lg:text-left'>
							Duis aute irure dolor in reprehenderit in voluptate
							velit esse cillum dolore eu fugiat nulla pariatur.
							Excepteur sint occaecat cupidatat non proident, sunt
							in culpa qui officia deserunt
						</p>
					</div>
					<div className='w-full lg:w-1/2 pt- pt-10 lg:pt-8'>
						<ProgressBar text='Sustainability' />
						<ProgressBar text='Small Business' mark='02.' />
						<ProgressBar text='Forensic Services' mark='03.' />
						<ProgressBar text='Risk Management' mark='04.' />
						<ProgressBar text='CFO Advisory' mark='05.' />
					</div>
				</div>
			</div>
			<div className='guides pl-2 lg:pl-32 pr-2 lg:pr-60 py-10 lg:py-40'>
				<h3 className='font-Oswald lg:font-plus-jakarta font-semibold lg:font-normal text-base lg:text-3xl text-main lg:text-white text-center lg:text-left'>
					Olvera Guides
				</h3>
				<h4 className='block lg:hidden font-Montserrat-normal text-2xl text-white text-center mt-4'>
					Careers At Olvera
				</h4>
				<h4 className='block lg:hidden font-plus-jakarta text-3xl font-extrabold px-8 text-white text-center mt-4 line-height-big'>
					Ollie Restructuring Guide
				</h4>
				<p className='font-Archivo text-base block lg:hidden text-white px-12 text-center mt-8'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</p>
				<div className='w-full flex justify-center lg:justify-end items-center pt-8 lg:pt-12'>
					<p className='font-Montserrat-normal font-normal text-xl text-white pr-8'>
						View More
					</p>
					<button className='h-24 w-24 rounded-full border-white border-2 flex justify-center items-center'>
						<img src='./arrow-white.svg' alt='arrow-white' />
					</button>
				</div>
				<p className='font-Archivo hidden lg:block text-base text-white mt-36 w-6/12'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</p>
			</div>
		</div>
	);
};
export default Home;
