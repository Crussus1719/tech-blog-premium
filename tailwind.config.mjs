/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				premium: {
					bg: '#F9F1DC',
					primary: '#C36E46',
					text: '#2D2D2D',
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Outfit', 'sans-serif'],
			},
			rotate: {
				'x-2': 'rotateX(2deg)',
				'y-2': 'rotateY(2deg)',
			}
		},
	},
	plugins: [],
}
