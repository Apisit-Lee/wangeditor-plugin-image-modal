/**
 * @description examples entry
 * @author wangfupeng
 */

import { IDomEditor, createEditor, createToolbar, Boot, IEditorConfig } from '@wangeditor/editor'
import imageModal from '../src/index'
import { showModal, hideModal } from './init-dom';


// 注册
Boot.registerModule(imageModal);

// 编辑器配置
const editorConfig: Partial<IEditorConfig> = {
  onChange(editor: IDomEditor) {
    const html = editor.getHtml()
    // @ts-ignore
    document.getElementById('text-html').value = html
    const contentStr = JSON.stringify(editor.children, null, 2)
    // @ts-ignore
    document.getElementById('text-json').value = contentStr
  },
  EXTEND_CONF: {
    imageModalConfig: {
      showModal,
      hideModal,
    },
  }
}

// 创建编辑器
const editor = createEditor({
  selector: '#editor-container',
  config: editorConfig,
  content: [
    {
      // @ts-ignore
      type: 'paragraph',
      children: [
        { text: 'Hello world!' }
      ],
    },
  ],
})
const toolbar = createToolbar({
  editor,
  selector: '#toolbar-container',
  config: {
    toolbarKeys: [ 'imageModal' ]
  }
})

// @ts-ignore 为了便于调试，暴露到 window
window.editor = editor
// @ts-ignore
window.toolbar = toolbar
