/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  changelogSidebar: [
    {
      type: "doc",
      id: "intro",
      label: "Home",
    },
    {
      type: "category",
      label: "Releases",
      collapsed: false,
      items: ["v2.0", "v1.0"],
    },
  ],
};
