export default {
  title: "Solana Stablecoin Registry",
  description:
    "Courtesy of Distributed Atomic State Machine Algorithms Corporation (DASMAC)",
  head: [
    ["meta", { property: "og:site_name", content: "DASMAC" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://stables.dasmac.com/" }],
    ["meta", { property: "og:title", content: "Solana Stablecoin Registry" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "Courtesy of Distributed Atomic State Machine Algorithms Corporation (DASMAC)",
      },
    ],
  ],
  srcDir: "src",
  markdown: {
    lineNumbers: true,
    math: true,
  },
  themeConfig: {
    editLink: {
      pattern:
        "https://github.com/DASMAC-com/solana-stablecoin-registry/blob/main/docs/src/:path",
      text: "Contribute to this page",
    },
  },
};
