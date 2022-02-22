module.exports = {
  purge: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `plugins/**/*.{js,ts}`,
    `nuxt.config.{js,ts}`
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        dark: '#444',
        blog: {
          bg:'#EDF2F7',
          text: '#555',
          subtext: '#aaa'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
  content: [
  ]
}
