import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/portfolio",
  // "/demo/",
  {
    text: "编写指南",
    icon: "book",
    link: "/demo/",
  },
  {
    text: "指南",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      "bar/",
      "foo/",
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
    text: "OSC Lab",
    icon: "laptop-code",
    link: "https://lab.scutosc.cn",
  },
]);
