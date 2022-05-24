module.exports = {

	/* IMPORTANT: not all the class of tailwind is loaded. tailwind scan the files and only loads
	the classes which have been used in the files, therefore appending/toggling a unused class with
	typescript/javascrpt will not work
	SOLUTION: add all of the source files that contain tailwind class names under 'content' in tailwind.config.js
	link: https://tailwindcss.com/docs/content-configuration
	*/

  content: ["./index.html", "./dist/*.js"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
		extend: {
			colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
				"translucent-blue": "rgba(36, 42, 69, 0.9)",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
			},
			backgroundImage: {
				"bookmark-logo": "url('../dist/images/logo-bookmark.svg')",
			},
		},
  },
  plugins: [],
};
