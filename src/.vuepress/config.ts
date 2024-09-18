import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "OSC Guide",
  description: "Get started with OSC",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
