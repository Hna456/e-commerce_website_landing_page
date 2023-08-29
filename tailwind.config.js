/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryColor: '#ed3849', /*red color*/
        primaryColorLight: '#d23141',  /*dark red color*/
        primaryColorExtraLight: '#f4e5ec', /*whitish pink color*/
        secondaryColor: '#64748b', /*grayish blue color*/
        secondaryColorDark: '#0f172a',  /*dark blue color*/
        textLight: '#f8fafc'  /*bluish white color*/
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'Play-fair': ['Playfair Display', 'serif']
      }
    },
    backgroundImage: {
      'card-1': "url('images/card-1.png')",
      'card-2': "url('images/card-2.png')",
      'card-3': "url('images/card-3.png')"
    }
  },
  plugins: [],
}

