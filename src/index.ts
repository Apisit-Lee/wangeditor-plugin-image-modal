/**
 * @description module entry
 * @author Apisit Lee
 */

import { IModuleConf } from '@wangeditor/editor'
import { imageModalMenuConf } from './module/menu'
import { withImageModal } from './module/plugin'

const imageModal: Partial<IModuleConf> = {
  editorPlugin: withImageModal,
  menus: [imageModalMenuConf],
}

export default imageModal