// import { defineClientConfig } from 'vuepress/client'
// import { onMounted } from 'vue'

// Extend the Window interface

// export default defineClientConfig({
//     setup() {
        
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
