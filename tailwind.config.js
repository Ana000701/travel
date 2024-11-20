/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.html", "./modules/**/*.js", "./main.js"],
  theme: {
    fontFamily: {
      noto: ["Noto Sans TC", "serif"],
    },
    colors: {
      primary: "#00807E",
      secondary: "#64C3BF",
      gray0: "#FAFAFA",
      gray1: "#818A91",
      gray2: "#F8F9FA",
      gray3: "#F7F7F7",
      gray4: "#212529",
      gray5: "#DEE2E6",
      gray6: "#CED4DA",
      white: "#fff",
      red1: "#fecaca",
      red2: "#dc2626",
    },
    extend: {},
  },
  plugins: [],
};
