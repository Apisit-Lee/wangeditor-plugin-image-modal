/**
 * @description interface
 * @author Apisit Lee
 */

import { IDomEditor } from '@wangeditor/editor'

export interface IExtendConfig {
  imageModalConfig: {
    showModal: (editor: IDomEditor) => void
    hideModal: (editor: IDomEditor) => void
  }
}
