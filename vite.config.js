import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
            compilerOptions: {
                isCustomElement: (tag) => ['md-linedivider'].includes(tag),
            },
        }),
        vuetify(),
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
    // commonjsOptions: {
    //     esmExternals: true,
    // },
});
