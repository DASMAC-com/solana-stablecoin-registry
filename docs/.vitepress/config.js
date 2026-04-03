export default {
  title: "Solana Stablecoin Registry",
  description:
    "Courtesy of Distributed Atomic State Machine Algorithms Corporation (DASMAC)",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon-light.png",
        media: "(prefers-color-scheme: light)",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "/favicon-dark.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    ["link", { rel: "apple-touch-icon", href: "/favicon-light.png" }],
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
    [
      "meta",
      {
        property: "og:image",
        content: "https://stables.dasmac.com/dasmac-banner.png",
      },
    ],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        name: "twitter:title",
        content: "Solana Stablecoin Registry",
      },
    ],
    [
      "meta",
      {
        name: "twitter:description",
        content:
          "Courtesy of Distributed Atomic State Machine Algorithms Corporation (DASMAC)",
      },
    ],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://stables.dasmac.com/dasmac-banner.png",
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
