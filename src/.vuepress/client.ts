// import { defineClientConfig, useRoute } from 'vuepress/client'
// import { onMounted } from 'vue'

// export default defineClientConfig({
//     setup() {
//         // useRoute().path
        // window.location.href
//     }
// })

declare global {
    interface Window {
        DiscourseEmbed: {
            discourseUrl: string;
            discourseEmbedUrl: string;
            // className?: string;
        };
    }
}
