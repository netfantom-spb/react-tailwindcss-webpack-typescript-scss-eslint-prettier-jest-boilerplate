module.exports = {
  content: ["./src/html/*.html", "./src/ts/**/*.tsx"],
  theme: {
    extend: {
      spacing: {
        4.5: "1.125rem",
        7.5: "1.875rem"
      }
    },
    fontSize: {
      xs: ["10px", { lineHeight: "0.8rem" }],
      sm: ["14px", { lineHeight: "1rem" }],
      sm_d: ["13px", { lineHeight: "1rem" }],
      base: ["15px", { lineHeight: "1rem" }],
      base_d: ["14px", { lineHeight: "1rem" }],
      lg: ["17px", { lineHeight: "1.5rem" }],
      xl: ["21px", { lineHeight: "1.2rem" }]
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
