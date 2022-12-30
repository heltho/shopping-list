/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        mandy: {
          DEFAULT: "#EA446A",
          50: "#FDE9EE",
          100: "#FAD7DF",
          200: "#F6B2C2",
          300: "#F28DA4",
          400: "#EE6987",
          500: "#EA446A",
          600: "#DD1946",
          700: "#AB1336",
          800: "#780D26",
          900: "#460816",
        },
      },
    },
  },
  plugins: [],
};
