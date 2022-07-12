import {
  resolve
} from 'path'

/**
 * @type {import('vite').UserConfig}
 */
const config = {
  publicDir: '/example/',
  server: {
    port: 8086,
    open: '/example/index.html'
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'imageModalPlugin',
      fileName: (format) => `wangeditor-plugin-image-modal.${format}.js`
    },
  }
};

export default config;