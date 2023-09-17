const withNextra = require("nextra")({
  output: "export",
  images: {
    unoptimized: true,
  },
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
});

module.exports = withNextra();
