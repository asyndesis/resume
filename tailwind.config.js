module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/index.html"],
  darkMode: "class",
  theme: {
    fontSize: {
      xs: ".55rem",
      sm: ".75rem",
      base: ".875rem",
      lg: "1rem",
      xl: "1.125rem",
      "2xl": "1.25rem",
      "3xl": "1.5rem",
      "4xl": "1.875rem",
      "5xl": "2.25rem",
      "6xl": "3rem",
    },
    extend: {
      gridTemplateColumns: {
        main: "minmax(260px, 1.5fr), 2fr",
      },
      screens: {
        print: { raw: "print" },
      },
    },
  },
};
