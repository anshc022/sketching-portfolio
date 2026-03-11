/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				heading: ['Cormorant Garamond', 'serif'],
				body: ['Montserrat', 'sans-serif'],
			},
			colors: {
				parchment: '#F5F2ED',
				charcoal: '#333333',
				sienna: '#8B735B',
			},
		},
	},
	plugins: [],
}
