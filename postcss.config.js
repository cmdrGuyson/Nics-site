const tailwindcss = require("tailwindcss");
module.exports = {
  plugins: [tailwindcss("./tailwind.js"), require("autoprefixer")],
  variants: {
    extend: {
      backgroundColor: ["hover"],
    },
  },
};
