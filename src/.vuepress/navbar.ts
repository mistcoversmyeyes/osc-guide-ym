import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/portfolio",
  // "/demo/",
  {
    text: "Get Started",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      "windows_cpp",
      { text: "更多内容", icon: "ellipsis", link: "" }
      // {
      //   text: "Bar",
      //   icon: "lightbulb",
      //   prefix: "bar/",
      //   children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      // },
      // {
      //   text: "Foo",
      //   icon: "lightbulb",
      //   prefix: "foo/",
      //   children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      // },
    ],
  },
  {
    text: "编写指南",
    icon: "book",
    link: "/demo/",
  },
  {
    text: "OSC Lab",
    icon: "laptop-code",
    link: "https://lab.scutosc.cn",
  },
]);
