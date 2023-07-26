import { WordToHtmlPluginOptions } from './types/type';

export function createTemplate(name: string, content: string, options: WordToHtmlPluginOptions = {}) {
  let str = `
  import {h, defineComponent} from 'vue'
  const sfc = defineComponent({
    name: '${name}',
    render: ()=>{
      return h('div', {
        ${options.className ? `class: ${JSON.stringify(options.className)},` : ''}
        innerHTML: ${JSON.stringify(content)}
      })
    }
  })
  export default sfc;
  `;
  return str;
}
