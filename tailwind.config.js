/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': 'linear-gradient(0deg, rgba(255,255,255,0.5) 0%, rgba(226,226,226,0.5) 100%)',
      },
      width: {
        "a3-potrait": "29.7cm",
        "a3-landscape": "42cm",
      },
      height: {
        "a3-landscape": "29.7cm",
        "a3-potrait": "42cm",
      },
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
    }
  },

  plugins: [],
}

