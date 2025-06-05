import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/portfolio",
  // "/demo/",
  {
    text: "Get Started",
    icon: "fa-solid:lightbulb",
    prefix: "/guide/",
    children: [
      "windows_cpp",
      "student/",
      { text: "更多内容", icon: "octicon:ellipsis-16", link: "" }
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
    text: "Hackathon",
    icon: "fa-solid:code",
    link: "https://work.scutosc.cn/s/dXiPbcmoC76srNG"
  },
  {
    text: "编写指南",
    icon: "material-symbols:book",
    link: "/demo/",
  },
  "friend",
  {
    text: "DragonOS",
    icon: "fa-solid:project-diagram",
    link: "https://dragonos.org",
  }
]);
