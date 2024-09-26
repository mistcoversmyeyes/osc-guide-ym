<template>
  <div id="discourse-comments"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vuepress/client'

onMounted(() => {
  window.DiscourseEmbed = {
    discourseUrl: 'https://bbs.scutosc.cn/', 
    discourseEmbedUrl: window.location.origin + useRoute().path.split('#')[0],
    className: 'theme-hope-content',
  };
  
  (function() {
    var d = document.createElement('script'); d.type = 'text/javascript'; d.async = true;
    d.src = window.DiscourseEmbed.discourseUrl + 'javascripts/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(d);
  })();
})
</script>