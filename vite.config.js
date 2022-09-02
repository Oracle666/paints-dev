import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/paints/",
    plugins: [vue(), vueJsx()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    server: {
        host: "localhost",
        port: 3001,
    },
    css: {
        preprocessorOptions: {
            less: {
                additionalData: `@import "/src/assets/vars.less";`,
            },
        },
    },
});
