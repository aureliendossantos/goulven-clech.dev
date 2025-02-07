const defaultTheme = require("tailwindcss/defaultTheme")
const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
module.exports = {
  // See -> https://tailwindcss.com/docs/dark-mode
  darkMode: "class",
  // See -> https://docs.astro.build/en/guides/integrations-guide/tailwind/
  content: ["./src/**/*.{astro,mdx,ts,js,tsx}"],
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addBase, theme }) {
      addBase({
        p: { marginBottom: theme("spacing.6") },
        ".prose > ul > li": { marginBottom: theme("spacing.6") },
      })
    }),
  ],
  theme: {
    /**
     * Blog custom colors 🎨
     * See -> https://tailwindcss.com/docs/customizing-colors
     */
    colors: {
      // Document default body color
      body: {
        light: "#FFFCFB",
        dark: "#1C1E26",
      },
      // Alt body color, for example when a div is hovered
      highlight: {
        light: "#FEE7DC",
        dark: "#2E303E",
      },
      // Mainly used by text and icons
      base: {
        white: "#FFFCFB",
        light: "#334155",
        dark: "#DDE2F0",
        black: "#1C1E26",
      },
      // Mainly used when hovering buttons or links
      primary: "#EC6A88",
    },
    extend: {
      fontFamily: {
        sans: ["Work Sans", ...defaultTheme.fontFamily.mono],
      },
      typography: ({ theme }) => ({
        slate: {
          css: {
            "--tw-prose-body": theme("colors.base[light]"),
            "--tw-prose-headings": theme("colors.base[black]"),
            "--tw-prose-invert-body": theme("colors.base[dark]"),
            "--tw-prose-invert-headings": theme("colors.base[white]"),
          },
        },
      }),
    },
  },
}
