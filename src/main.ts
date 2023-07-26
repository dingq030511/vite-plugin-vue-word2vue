import mammoth from 'mammoth';
import type { Plugin } from 'vite';
import { WordToHtmlPluginOptions } from './types/type';
import { createTemplate } from './template';

const fileRegex = /\.docx$/;
export default function wordToVuePlugin(options: WordToHtmlPluginOptions = {}): Plugin {
  return {
    name: 'word-to-html',
    async transform(_code, id) {
      if (fileRegex.test(id)) {
        try {
          const result = await mammoth.convertToHtml({
            path: id,
          });
          const name = id.match(/(\w+)\.docx$/)![1];
          return createTemplate(name, result.value, options);
        } catch (error) {
          console.log(error);
        }
      }
    },
  };
}
