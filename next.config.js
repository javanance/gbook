const withNextra = require("nextra")({
  output: "export",
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
});

module.exports = withNextra();
