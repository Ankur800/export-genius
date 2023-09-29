import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
	],
	purge: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				primary: '#ffffff',
				secondary: '#1C1C1C',
				main: '#C2278E',
				fade: '#6E6E6E',
				midnight: '#2d2d2d',
				normal: '#3F3E3E',
			},
			backgroundColor: {
				primary: '#C2278E',
				secondary: '#FFFFFF',
				pink: '#FF74D0',
			},
			fontFamily: {
				Archivo: ['Archivo', ...defaultTheme.fontFamily.sans],
				'Montserrat-normal': [
					'Montserrat',
					...defaultTheme.fontFamily.sans,
				],
				Montserrat: [
					'Montserrat Alternates',
					...defaultTheme.fontFamily.sans,
				],
				Oswald: ['Oswald', ...defaultTheme.fontFamily.sans],
				Poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
				'plus-jakarta': [
					'Plus Jakarta Sans',
					...defaultTheme.fontFamily.sans,
				],
			},
			width: {
				'w-44': '11rem',
			},
		},
	},
	plugins: [],
};
export default config;
