/**
 * @description menu defination
 * @author Apisit Lee
 */

import { IButtonMenu } from '@wangeditor/core';
import { DomEditor, IDomEditor } from '@wangeditor/editor'
import { IMAGE_MODAL_SVG } from '../constants/icon-svg'
import { IExtendConfig } from './interface';

function isMenuDisabled(editor: IDomEditor): boolean {
  if (editor.selection == null) return true

  const selectedElems = DomEditor.getSelectedElems(editor)
  // @ts-ignore
  const notMatch = selectedElems.some(elem => {
    // @ts-ignore
    const { type } = elem
    if (editor.isVoid(elem)) return true
    if (['image', 'imageModal'].includes(type)) return true
  })
  if (notMatch) return true // disabled
  return false // enable
}

function getImageModalConfig(editor: IDomEditor) {
  const { EXTEND_CONF } = editor.getConfig()
  const { imageModalConfig } = EXTEND_CONF as IExtendConfig
  return imageModalConfig
}

// 定义菜单 class
class ImageModal implements IButtonMenu {
  // 菜单配置，参考“引用”菜单源码
  readonly title = '选择图片'
  readonly iconSvg = IMAGE_MODAL_SVG
  readonly tag = 'button'
  readonly showModal = true // 点击 button 时显示 modal
  readonly modalWidth = 300

  // @ts-ignore
  getValue(editor: IDomEditor): string | boolean {
    // 插入菜单，不需要 value
    return ''
  }

  // @ts-ignore
  isActive(editor: IDomEditor): boolean {
    // 任何时候，都不用激活 menu
    return false
  }

  // @ts-ignore
  exec(editor: IDomEditor, value: string | boolean) {
    // 点击菜单时，弹出 modal 之前，不需要执行其他代码
    // imageModal 相关配置
    const { showModal } = getImageModalConfig(editor);
    showModal && showModal(editor);
  }

  isDisabled(editor: IDomEditor): boolean {
    return isMenuDisabled(editor)
  }
}

// 定义菜单配置
export const imageModalMenuConf = {
  key: 'imageModal', // menu key ，唯一。注册之后，可配置到工具栏
  factory() {
    return new ImageModal()
  }
}