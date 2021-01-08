module.exports = {
  purge: ['./lib/tailwind-helper.vue'],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '992px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1680px',
        '4xl': '1920px',
        '5xl': '2048px',
        '6xl': '2160px',
        '7xl': '2560px',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
