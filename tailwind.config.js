/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FF6B35',
                secondary: '#004E89',
                bg: '#F7F9FC',
                card: '#FFFFFF',
                text: '#1A202C',
                'text-muted': '#718096',
            },
            fontFamily: {
                heading: ['Outfit', 'sans-serif'],
                body: ['Nunito', 'sans-serif'],
            },
            boxShadow: {
                'sticker': '0 4px 14px 0 rgba(0, 0, 0, 0.1)',
                'card': '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
            }
        },
    },
    plugins: [],
}
