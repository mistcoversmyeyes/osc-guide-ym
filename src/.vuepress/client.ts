import { defineClientConfig } from 'vuepress/client'
import DiscourseComments from './component/DiscourseComments.vue'

export default defineClientConfig({
    enhance({ app }) {
      app.component('DiscourseComments', DiscourseComments)
    },
})

declare global {
    interface Window {
        DiscourseEmbed: {
            discourseUrl: string;
            discourseEmbedUrl: string;
            // className?: string;
        };
    }
}
